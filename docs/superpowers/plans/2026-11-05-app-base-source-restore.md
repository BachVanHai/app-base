# Khôi phục mã nguồn & quy trình phát hành `app-base` — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Có `src/` trong git build ra bundle tương đương logic với `80dfe96`, `dist/` chỉ sinh từ build, phát hành bằng tag `v1.0.0` và `inon-app` dùng tag đó.

**Architecture:** Tách nguồn 2024 từ `sourcesContent` của source map → kiểm chứng toolchain bằng cách build lại đúng bundle `9a98914` → diff bundle 2024 với bundle hiện tại, quy từng đoạn diff về file nguồn → chuyển tay thay đổi về JSX theo nhóm tính năng → kiểm chứng diff bằng 0 → dựng quy trình (verify, hook, release) trên nhánh `main` → chuyển `inon-app`.

**Tech Stack:** `microbundle-crl` 0.13.x (build), Node ≥18 cho script/test (`node:test`), `prettier@2`, `source-map@0.6`, `diff@5`, React 16, git hooks.

**Spec:** `docs/superpowers/specs/2026-11-05-app-base-source-restore-design.md`

## Global Constraints

- Không sửa tay `index.js`, `index.modern.js`, `index.css`, `index.modern.css` ở gốc repo; không commit vào `web/develop` (trừ commit README đóng băng ở Task 11).
- Không nâng cấp bất kỳ thư viện runtime nào; không đổi công cụ build; giữ `--no-compress`.
- Giữ nguyên 33 export và tên của chúng: `AccountSettings, AppId, AutoComplete, BaseApp, BaseAppConfigs, BaseAppUltils, BaseFormDatePicker, BaseFormGroup, BaseFormGroupSelect, Bells, Checkbox, CurrencyInput, DatePicker, FallbackSpinner, GeneralInfo, HttpClient, LandingPage, Radio, ReactTable, Select, changeIsGuest, goBackHomePage, goToAgencyApp, hideConfirmAlert, logoutAction, showConfirmAlert, useBankList, useCityList, useDeviceDetect, useDistrictList, usePageAuthorities, useWardList, useWindowDimensions`.
- `package.json` không có script `prepare` hoặc `postinstall`.
- Mốc đối chiếu: nguồn 2024 = commit `9a98914`; bản đúng hiện tại = tag `legacy-bundle-final` (mặc định `80dfe96`).
- File làm việc tạm (bản chụp, diff thô, log) để trong `.work/` — không commit. Báo cáo chính thức: `docs/restore/diff-report.md` (commit).
- Mọi thao tác ra ngoài (push nhánh/tag, merge, đổi nhánh mặc định trên GitHub) phải hỏi người dùng trước.
- Script/test chạy bằng Node hiện tại (v24). Riêng `npm run build` có thể cần Node 16 (chốt ở Task 4).
- Tiến độ cập nhật vào `.work/notes/progress.md` sau mỗi task.

## Review Focus

1. **Identifier bị bundler đổi hậu tố** (`React__default$1`, `index$2`): diff phải coi chúng là bằng nhau, nếu không báo cáo ngập nhiễu → test `normalize strips rollup numeric suffixes` (Task 3).
2. **Đoạn diff nằm trong khai báo mới hoàn toàn** (không có trong bundle 2024, vd. SSE/event source): không được bị bỏ rơi khỏi báo cáo → test `unmatched hunks go to __new__` (Task 3).
3. **Nguồn trong map có đường dẫn thoát khỏi `src/`** (`../../x`) hoặc thuộc `node_modules` (flatpickr được inline): không được ghi ra ngoài thư mục đích → test `rejects paths escaping outDir` và `skips node_modules` (Task 2).
4. **`dist/` có file mới chưa track** (vd. build sinh thêm file): `verify` phải báo lệch, không chỉ xét file đã track → test `parsePorcelain reports untracked` (Task 9).
5. **Push không đụng tới `src/`/`dist/`** (chỉ sửa README): hook không được bắt build (chậm vô ích) → bước kiểm tra tay `docs-only push skips verify` (Task 9).

---

### Task 1: Chốt mốc & bản chụp đối chiếu

**Files:**
- Create (local, không commit): `.work/legacy/2024/` và `.work/legacy/final/` chứa `index.js index.modern.js index.css index.modern.css index.js.map index.modern.js.map`

- [ ] **Step 1:** `git tag legacy-bundle-final 80dfe96` (tag cục bộ; hỏi người dùng trước khi `git push origin legacy-bundle-final`).
- [ ] **Step 2:** Xuất 6 file từ `9a98914` vào `.work/legacy/2024/` và từ `legacy-bundle-final` vào `.work/legacy/final/` bằng `git show <ref>:<file> > ...`.
- [ ] **Step 3: Kiểm tra** — `ls .work/legacy/*/` có đủ 12 file, `git status --short` rỗng.
- [ ] **Step 4:** Nhắc người dùng thông báo Tzans tạm ngừng sửa bundle trên `web/develop`; ghi vào `.work/notes/progress.md`.

---

### Task 2: Script tách nguồn từ source map

**Files:**
- Create: `scripts/extract-sources.js`, `scripts/extract-sources.test.js`
- Create (sinh ra): `src/**` (toàn bộ nguồn `../src/*` trong map; bỏ 2 nguồn flatpickr trong `node_modules`)

**Interfaces:**
- Produces: `extractSources(map: {sources: string[], sourcesContent: string[]}, outDir: string) -> string[]` (danh sách đường dẫn tương đối đã ghi, dạng `components/Select.js`). CLI: `node scripts/extract-sources.js <mapFile> <outDir>`.
- Quy tắc: bỏ nguồn chứa `node_modules`; bỏ tiền tố `../src/`; chuẩn hóa xuống dòng `\n`; ném lỗi nếu đường dẫn sau khi resolve nằm ngoài `outDir`; ném lỗi nếu hai nguồn khác nhau chỉ khác hoa/thường (`actions/ui/index.js` vs `actions/ui/Index.js` — map có cả hai!) — xem Step 5.

- [ ] **Step 1: Viết test** (`node:test`, thư mục tạm `fs.mkdtempSync`):
  - `writes src files without ../src prefix` — map `{sources:['../src/a/b.js'], sourcesContent:['x']}` → trả `['a/b.js']`, file chứa `x`.
  - `skips node_modules` — nguồn `../node_modules/flatpickr/dist/flatpickr.js` không được ghi, không có trong kết quả.
  - `rejects paths escaping outDir` — nguồn `../../evil.js` → `assert.throws`.
  - `detects case-only collisions` — nguồn `../src/x/index.js` và `../src/x/Index.js` với nội dung khác nhau → `assert.throws(/case/)`; nội dung giống nhau → chỉ ghi một file.
- [ ] **Step 2:** `node --test scripts/` → FAIL (`Cannot find module`).
- [ ] **Step 3:** Cài dev tooling: `npm i -D --legacy-peer-deps prettier@2 source-map@0.6 diff@5` (`--legacy-peer-deps` để npm không tự cài cả danh sách peer cũ; `package.json` được viết lại ở Task 4). Implement `extractSources`.
- [ ] **Step 4:** `node --test scripts/` → PASS.
- [ ] **Step 5: Chạy thật** — `node scripts/extract-sources.js .work/legacy/2024/index.modern.js.map src`. Nếu báo va chạm hoa/thường (`redux/actions/ui/index.js` vs `Index.js`, `redux/actions/navbar/index.js` vs `Index.js`): so nội dung; nếu khác, đổi tên file thứ hai thành `IndexLegacy.js`, sửa import tương ứng trong các file nguồn, và ghi lý do vào `docs/restore/diff-report.md` (mục "Ghi chú tách nguồn"). Windows không phân biệt hoa/thường nên **không được** để hai file chỉ khác hoa/thường.
- [ ] **Step 6:** So `index.js.map` với `index.modern.js.map`: chạy script lần nữa vào `.work/extract/cjs`, `diff -r src .work/extract/cjs` → kỳ vọng rỗng; khác biệt thì ghi vào báo cáo.
- [ ] **Step 7: Commit** — `git add scripts/extract-sources*.js package.json package-lock.json src && git commit -m "chore: extract 2024 sources from source map (9a98914)"`.

---

### Task 3: Script chuẩn hóa, diff và quy về file nguồn

**Files:**
- Create: `scripts/lib/normalize.js`, `scripts/lib/attribute.js`, `scripts/bundle-diff.js`, `scripts/lib/normalize.test.js`, `scripts/lib/attribute.test.js`

**Interfaces:**
- Produces:
  - `normalizeBundle(code: string, parser?: 'babel'|'css') -> string` — prettier 2 (`printWidth: 100`), sau đó thay `/\b([A-Za-z_][\w]*)\$\d+\b/g` → `$1`. CSS: chỉ prettier.
  - `buildDeclIndex(builtCode: string, map: object) -> Map<string, string>` — với mỗi khai báo top-level (`function X`, `const|let|var X =`, `class X`) trong code **chưa chuẩn hóa**, lấy `originalPositionFor({line, column})` và lưu `X → sourcePath` (đã bỏ `../src/`).
  - `attributeHunks(baselineNormalized: string, hunks: Hunk[], declIndex) -> Record<string, Hunk[]>` — `Hunk` là phần tử `structuredPatch(...).hunks` của `diff@5`. Với mỗi hunk, tìm khai báo top-level gần nhất **phía trên** `oldStart` trong `baselineNormalized` (đã bỏ hậu tố `$n`); có trong `declIndex` thì xếp vào file đó, không có thì vào `'__new__'`.
  - CLI: `node scripts/bundle-diff.js <baselineDir> <targetDir> <outDir>` — `<baselineDir>` phải có `index.modern.js.map` **khớp với chính bundle trong thư mục đó** (dùng để quy file nguồn). Với mỗi file trong `index.js, index.modern.js, index.css, index.modern.css`: ghi bản chuẩn hóa vào `<outDir>/norm/`, ghi patch thô vào `<outDir>/<file>.patch`, và in JSON `{file: {sourcePath: hunkCount}}` ra stdout. Chỉ quy file nguồn cho `index.modern.js` (dùng `<baselineDir>/index.modern.js.map`).

- [ ] **Step 1: Viết test**:
  - `normalize strips rollup numeric suffixes` — `normalizeBundle('var React__default$1 = a;')` === `normalizeBundle('var React__default = a;')`.
  - `normalize is formatting-insensitive` — `'function f(){return 1}'` và `'function f() {\n  return 1;\n}'` cho cùng kết quả.
  - `buildDeclIndex maps declaration to source` — dùng fixture nhỏ tạo bằng `source-map` `SourceMapGenerator` (khai báo `function Select` ở dòng 3 ánh xạ về `../src/components/Select.js`) → `index.get('Select') === 'components/Select.js'`.
  - `attributeHunks assigns hunk to enclosing declaration` — baseline có `function A(){}\nfunction B(){\n x;\n}`; hunk `oldStart` ở dòng `x` → nằm trong `B`.
  - `unmatched hunks go to __new__` — hunk nằm sau khai báo không có trong `declIndex` → key `'__new__'`.
- [ ] **Step 2:** `node --test scripts/` → FAIL.
- [ ] **Step 3:** Implement ba hàm và CLI.
- [ ] **Step 4:** `node --test scripts/` → PASS.
- [ ] **Step 5: Commit** — `git commit -m "chore: add bundle normalize/diff/attribution scripts"` (kèm test).

---

### Task 4: Toolchain & build lại bundle 2024 (cổng 5.2 — không qua thì dừng)

**Files:**
- Modify: `package.json` (thay toàn bộ theo spec mục 3; giữ `version: 1.0.0`)
- Create: `src/index.js`, `src/assets/**` (từ `../base-app/src/assets`), `src/index.scss` nếu nguồn JS import nó, `.nvmrc`
- Modify: `.gitignore` (xóa các dòng `package-lock.json`, `.package-lock.json`, `/dist`; giữ `.idea`)

**Interfaces:**
- Consumes: `normalizeBundle`, CLI `bundle-diff.js` (Task 3).
- Produces: `npm run build` sinh `dist/index.js`, `dist/index.modern.js`, `dist/index.css`, `dist/index.modern.css`, `dist/*.map`, `dist/assets/fonts/*`.

- [ ] **Step 1:** Viết `src/index.js` chỉ gồm re-export, dựng lại từ câu `export {...}` cuối `.work/legacy/2024/index.modern.js` (alias phải giữ đúng: `Autocomplete as AutoComplete`, `App as BaseApp`, `appConfigs as BaseAppConfigs`, `index as BaseAppUltils` → `utility/index.js`, `CheckBox as Checkbox`). Với mỗi tên, tìm file nguồn khai báo nó trong `src/` (grep `export`). Tên không tìm thấy trong `src/` (vd. `Radio`, `useDeviceDetect`, `Bells`): lấy từ `../base-app/src` nếu có, nếu không thì dựng lại từ đoạn bundle tương ứng và ghi vào báo cáo.
- [ ] **Step 2:** Copy `../base-app/src/assets` → `src/assets`; nếu nguồn JS (vd. `App.js`) import `index.scss` thì copy cả `../base-app/src/index.scss`.
- [ ] **Step 3:** `package.json` theo spec mục 3: `main/module/style/files`, `peerDependencies` = đúng tập `require(...)` trong `.work/legacy/final/index.js` (trừ subpath, trừ `flatpickr` vì được inline) với khoảng phiên bản lấy từ `../inon-app/package.json`; `devDependencies` = `microbundle-crl@0.13.x`, `prettier@2`, `source-map@0.6`, `diff@5`, `node-sass`/`sass` theo yêu cầu của microbundle-crl, `flatpickr` (phiên bản theo map), cùng các peer để build. Script `build` tạm thời: `microbundle-crl --no-compress --format modern,cjs --css-modules false && node scripts/copy-assets.js` (`copy-assets.js`: copy `src/assets/fonts` → `dist/assets/fonts`, ~10 dòng).
- [ ] **Step 4:** `npm install`, rồi `npm run build`. Nếu lỗi do Node 24: tạo `.nvmrc` = `16`, cài Node 16 (nvm-windows/volta, hỏi người dùng), build lại; ghi `engines.node` tương ứng.
- [ ] **Step 5: Kiểm chứng** — `node scripts/bundle-diff.js .work/legacy/2024 dist .work/diff/baseline`. Kỳ vọng: JSON in ra **0 hunk** cho cả 4 file. Có hunk → chỉnh (tham số build, phiên bản `microbundle-crl`/babel/flatpickr, file SCSS) và chạy lại. Ghi tham số build cuối cùng vào `package.json` và ghi lại các lần thử vào `.work/notes/progress.md`.
- [ ] **Step 6:** Nếu sau 3 vòng chỉnh vẫn còn hunk: **dừng, báo người dùng** danh sách hunk còn lại; không sang Task 5 khi chưa được đồng ý.
- [ ] **Step 7: Commit** — `git add package.json package-lock.json .gitignore .nvmrc src scripts/copy-assets.js && git commit -m "build: reproduce 9a98914 bundle from extracted sources"`. Không commit `dist/` ở task này.

---

### Task 5: Báo cáo thay đổi 2024 → hiện tại

**Files:**
- Create: `docs/restore/diff-report.md`

**Interfaces:**
- Consumes: CLI `bundle-diff.js` (Task 3); baseline `.work/legacy/2024` (map của nó hợp lệ vì Task 4 đã chứng minh build khớp).

- [ ] **Step 1:** `node scripts/bundle-diff.js .work/legacy/2024 .work/legacy/final .work/diff/2024-to-final > .work/diff/2024-to-final/summary.json`.
- [ ] **Step 2:** Với mỗi file nguồn trong summary, tìm commit bundle liên quan: `git log --format='%h %ad %s' --date=short -S'<chuỗi đặc trưng của hunk>' 9a98914..legacy-bundle-final -- index.modern.js`.
- [ ] **Step 3:** Viết báo cáo: bảng `| File nguồn | Số hunk | Commit liên quan | Nhóm (Task 6.x) |`, mục `__new__` liệt kê các khai báo mới, mục CSS, mục "Ghi chú tách nguồn" (từ Task 2/4). Gán mỗi file vào đúng một nhóm của Task 6; file không thuộc nhóm nào → nhóm 6.8.
- [ ] **Step 4: Kiểm tra** — tổng số hunk trong bảng = tổng trong `summary.json`.
- [ ] **Step 5: Commit** — `git commit -m "docs: diff report 9a98914 → legacy-bundle-final"`.

---

### Task 6: Chuyển thay đổi về nguồn (8 nhóm, mỗi nhóm một commit)

**Files:** theo báo cáo Task 5. Nhóm dự kiến (điều chỉnh theo báo cáo):

| Nhóm | File chính | Commit bundle tiêu biểu |
|---|---|---|
| 6.1 HTTP & auth | `utility/HttpClient.js`, `services/authService.js`, `redux/actions/auth/index.js` | "case status 401", "unwrap response data", "err msg 1–3.0", "save ref id" |
| 6.2 Menu & quyền | `configs/navigationConfig.js`, `customHooks/usePageAuthorities.js`, `configs/app-configs.js` | "add menu key*", "role banca", "menu tk pay", "collab manage" |
| 6.3 Form | `components/Select.js`, `BaseFormGroup.js`, `BaseFormGroupSelect.js`, `DatePicker.js`, `BaseFormDatePicker.js` | "select component*", "input number", "multi options", "date picker*" |
| 6.4 Thông báo SSE | file mới event source client, `Bells`, navbar | "sse notification 1–5.0", "event source client 1–2.0", "noti to users" |
| 6.5 Error modal | file mới error modal, `ConfirmAlert.js`, footer/thông tin hỗ trợ | "error modal*", "responsive error modal", "support phone number" |
| 6.6 Tài khoản | `pages/account-settings/**` | "change password 1–4.0" |
| 6.7 CSS | `src/assets/scss/**` | diff `index.css` |
| 6.8 Còn lại | mọi file khác trong báo cáo | — |

Quy trình **giống nhau cho mỗi nhóm**:

- [ ] **Step 1:** Đọc hunk của nhóm trong `.work/diff/2024-to-final/index.modern.js.patch` (và commit gốc qua `git show <hash> -- index.modern.js`).
- [ ] **Step 2:** Sửa file nguồn bằng JSX/ES tương đương. Khai báo mới → file mới theo cấu trúc thư mục hiện có, tên theo tên khai báo trong bundle (vd. `EventSourceClient` → `src/utility/EventSourceClient.js`).
- [ ] **Step 3:** `npm run build && node scripts/bundle-diff.js dist .work/legacy/final .work/diff/current` (baseline là `dist/` vì map của `.work/legacy/final` đã cũ từ 2024).
- [ ] **Step 4: Kiểm tra** — trong summary, **không còn hunk nào** thuộc các file của nhóm này (với 6.7: không còn hunk ở `index.css`, `index.modern.css`; với 6.4/6.5: các khai báo của nhóm không còn trong `__new__`). Tổng hunk phải giảm so với lần chạy trước.
- [ ] **Step 5:** Cập nhật cột trạng thái trong `docs/restore/diff-report.md`.
- [ ] **Step 6: Commit** — `git commit -m "restore(<nhóm>): port bundle changes to source" -m "Bundle commits: <hash...>"`.

---

### Task 7: Kiểm chứng cuối (5.5)

**Files:**
- Modify: `docs/restore/diff-report.md` (mục "Kết quả cuối")

- [ ] **Step 1:** `npm run build && node scripts/bundle-diff.js dist .work/legacy/final .work/diff/final`.
- [ ] **Step 2: Kỳ vọng** — 0 hunk cho cả 4 file. Hunk còn lại chỉ chấp nhận nếu là thứ tự helper/khai báo do bundler; mỗi hunk như vậy ghi vào "Kết quả cuối" kèm giải thích, và **hỏi người dùng xác nhận**.
- [ ] **Step 3:** So danh sách export: `grep -o "^export {.*}" dist/index.modern.js` và `.work/legacy/final/index.modern.js` → giống hệt.
- [ ] **Step 4: Commit** — `git commit -m "docs: final restore verification"`.

---

### Task 8: Chạy thử trên `inon-app` bằng bản build cục bộ (5.6)

**Files (inon-app, không commit ở task này):** `../inon-app/package.json`, `src/App.js`, `src/InsuranceApp.js`
**Files (local):** `.work/checks/checklist-local.md`

- [ ] **Step 1:** Trong `../inon-app` (nhánh tạm, không commit): `"base-app": "file:../app-base"`, đổi 2 import CSS sang `base-app/dist/index.css`, `npm install`.
- [ ] **Step 2:** Tạo `.work/checks/checklist-local.md` gồm đúng các mục spec 5.6 (đăng nhập/landing/mạng xã hội; 401 + unwrap; menu key TK Pay, cộng tác viên, role product, ảnh xe, banca, cat proposal; Select đơn/nhiều + value; BaseFormGroup number; DatePicker disable + auto set; đổi mật khẩu/account settings; SSE + Bells; error modal responsive/nhãn/SĐT hỗ trợ; `npm run build` production).
- [ ] **Step 3:** Chạy `npm start` của `inon-app`; người dùng kiểm tra các mục cần đăng nhập/giao diện, Claude chạy `npm run build` production và mục nào kiểm tra được qua trình duyệt. Đánh dấu kết quả vào checklist.
- [ ] **Step 4: Kỳ vọng** — mọi mục đạt, build production thành công. Lỗi → quay về Task 6 nhóm liên quan.
- [ ] **Step 5:** `git checkout -- .` và `git clean` trong `inon-app` để trả về trạng thái cũ (xác nhận không mất thay đổi chưa commit của người dùng **trước khi** bắt đầu Step 1 — nếu `git status` không sạch thì hỏi).

---

### Task 9: Quy trình: verify, hook, release, tài liệu

**Files:**
- Create: `scripts/verify-dist.js`, `scripts/verify-dist.test.js`, `.githooks/pre-push`, `CHANGELOG.md`
- Modify: `package.json` (scripts `verify`, `release`, `hooks:install`, `start`), `README.md`
- Create (commit lần đầu): `dist/**`
- Delete: `index.js index.modern.js index.css index.modern.css index.js.map index.modern.js.map assets/` ở gốc, `.idea/` khỏi git (`git rm -r --cached .idea`)

**Interfaces:**
- Produces: `parsePorcelain(text: string) -> string[]` (đường dẫn từ `git status --porcelain`, gồm cả `??` untracked); `verifyDist({cwd}) -> {ok: boolean, changed: string[]}` chạy `npm run build` rồi `git status --porcelain -- dist`. CLI thoát mã 1 và in `dist/ không khớp src/. Chạy "npm run build" và commit dist/.` kèm danh sách khi `ok === false`.

- [ ] **Step 1: Viết test** — `parsePorcelain reports modified` (`' M dist/index.js'` → `['dist/index.js']`), `parsePorcelain reports untracked` (`'?? dist/new.js'` → `['dist/new.js']`), `parsePorcelain empty` (`''` → `[]`).
- [ ] **Step 2:** `node --test scripts/` → FAIL. **Step 3:** Implement. **Step 4:** → PASS.
- [ ] **Step 5:** `.githooks/pre-push` (sh): đọc từng dòng stdin `<local ref> <local sha> <remote ref> <remote sha>`; lấy danh sách file đổi bằng `git diff --name-only <remote sha>..<local sha>` (remote sha toàn 0 → so với `origin/main` nếu có, không thì coi như có đổi); nếu có file khớp `^(src/|dist/|package(-lock)?\.json)` thì `npm run verify`, lỗi thì `exit 1`.
- [ ] **Step 6:** `package.json`: `"verify": "node scripts/verify-dist.js"`, `"release": "npm run verify && npm version"`, `"hooks:install": "git config core.hooksPath .githooks"`, `"start"`: cùng tham số build ở chế độ `watch`.
- [ ] **Step 7:** Xóa file build ở gốc + `assets/` gốc + `.idea/` khỏi git; `npm run build`; commit `dist/`.
- [ ] **Step 8: Kiểm tra tay hook** (repo tạm `git init --bare` làm remote, `git remote add test <path>`):
  - sửa tay 1 dòng `dist/index.js`, commit, `git push test HEAD:main` → **bị chặn** với thông báo trên.
  - `docs-only push skips verify`: revert, sửa README, push → không chạy build (không thấy output microbundle), push thành công.
  - Xóa remote `test`.
- [ ] **Step 9:** `README.md`: mục "Cài đặt cho dev" (`npm install`, `npm run hooks:install`, `.nvmrc`), "Sửa & thử trên inon-app" (`npm start`, `file:../app-base`/`npm link`), "Phát hành" (`npm run release -- patch|minor|major`, `git push --follow-tags`, `CHANGELOG.md`), quy tắc semver theo spec mục 6, câu in đậm **"Không sửa `dist/` bằng tay."** `CHANGELOG.md` có mục `## v1.0.0` — "Khôi phục mã nguồn; bản build chuyển vào `dist/`; import CSS đổi thành `base-app/dist/index.css` (thay đổi phá vỡ so với `#web/develop`)."
- [ ] **Step 10: Commit** — `git commit -m "build: move output to dist/, add verify, pre-push hook and release flow"`.

---

### Task 10: Nhánh `main` & tag `v1.0.0`

- [ ] **Step 1:** Kiểm tra trạng thái: `git status` sạch, `npm run verify` thoát 0, `node --test scripts/` PASS.
- [ ] **Step 2:** `git branch main chore/restore-source` (nhánh `main` cục bộ chưa tồn tại — kiểm tra `git branch -a | grep -w main` trước).
- [ ] **Step 3:** Trên `main`: `npm run release -- 1.0.0` → tag `v1.0.0`.
- [ ] **Step 4: Hỏi người dùng** rồi mới `git push -u origin main --follow-tags` và `git push origin legacy-bundle-final`.
- [ ] **Step 5: Kiểm tra** — `git ls-remote --tags origin v1.0.0` có kết quả.

---

### Task 11: Chuyển `inon-app` sang `#v1.0.0` & đóng băng `web/develop`

**Files (inon-app, nhánh `chore/base-app-v1` từ `web/develop`):** `package.json`, `package-lock.json`, `src/App.js`, `src/InsuranceApp.js`
**Files (app-base, nhánh `web/develop`):** `README.md`

- [ ] **Step 1:** `inon-app`: `git status` sạch (không sạch → hỏi), `git checkout -b chore/base-app-v1 origin/web/develop`.
- [ ] **Step 2:** `"base-app": "github:BachVanHai/app-base#v1.0.0"`; xóa script `update-base-app`; đổi 2 import CSS sang `base-app/dist/index.css`.
- [ ] **Step 3:** `npm install` — **kỳ vọng không có** `ERESOLVE`/cảnh báo peer dependency của `base-app`; `grep -c '"resolved": "git+ssh://git@github.com/BachVanHai/app-base.git#' package-lock.json` = 1.
- [ ] **Step 4:** Chạy lại checklist Task 8 (lưu ở `.work/checks/checklist-v1.0.0.md`) với bản cài từ tag.
- [ ] **Step 5: Commit** (inon-app) — `git commit -m "chore: pin base-app to v1.0.0 and use dist css"`. Hỏi người dùng trước khi push / mở PR.
- [ ] **Step 6:** `app-base`: `git checkout web/develop`, thêm đầu `README.md`: `> **Nhánh legacy — không sửa nữa.** Dùng tag \`v*\` trên nhánh \`main\`. Xem CHANGELOG trên \`main\`.` Commit `docs: freeze web/develop (legacy)`; hỏi người dùng trước khi push.
- [ ] **Step 7:** Cập nhật `.work/notes/progress.md` và memory dự án: hoàn tất đợt 1; việc tiếp theo theo spec mục 9.

---

## Điều chỉnh khi thực thi (2026-11-05, người dùng đã duyệt)

- **Task 4:** bundle `9a98914` đã bị sửa tay so với source map của chính nó → không thể build lại khớp 100%. Chấp nhận công cụ khi các khác biệt còn lại chỉ là sửa tay hoặc khác biệt công cụ đã biết (`_extends`, cách bọc flatpickr, thứ tự module). Build = 2 lần chạy microbundle-crl (cjs, modern); `@babel/preset-modules@0.1.4`.
- **CSS:** dùng nguyên `index.css` của `legacy-bundle-final` làm nguồn (`src/styles/base-app.legacy.css`), ghép bởi `scripts/postbuild.js` (không qua postcss); style mới ở `src/styles/custom.scss`. Task 6.7 bỏ.
- **Task 5–7:** baseline là `dist/` (build từ `src/`), target là `.work/legacy/final`, công cụ chính là `scripts/decl-report.js` (so theo từng câu lệnh top-level, không phụ thuộc thứ tự). Tiêu chí Task 6/7: không còn câu lệnh khác nhau ngoài danh sách "Khác biệt do công cụ build" trong `docs/restore/diff-report.md`.
- API công khai: 36 export ở 2024 (gồm re-export `FormattedMessage`, `toast`, `Button`), 37 ở bản cuối (+`EventSourceClient`).
