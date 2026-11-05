# Khôi phục mã nguồn & chuẩn hóa quy trình phát triển `app-base`

- Ngày: 2026-11-05
- Phạm vi: biến thể thư viện trên nhánh `web/develop` của `app-base`, ứng dụng dùng: `inon-app`
- Trạng thái: chờ duyệt

## 1. Bối cảnh & vấn đề

`app-base` (package `base-app`) là thư viện React dùng chung cho `inon-app` (khoảng 820 lệnh import, 33 export).

Hiện trạng đã kiểm tra:

- Repo `app-base` chỉ chứa **file build** (`index.js`, `index.modern.js`, `index.css`, `index.modern.css`, `*.map`) và `assets/fonts`. Không có `src/`.
- Từ commit `9a98914` (29/09/2024) đến `80dfe96`, có **113 commit sửa tay trực tiếp** lên bundle, khoảng 8.000 dòng diff.
- Source map (`index.js.map`, `index.modern.js.map`) dừng ở `9a98914`. Map có `sourcesContent` đủ **75 file nguồn**, nhưng là bản 2024.
- Thư mục `../base-app/src` trên máy **không nằm trong git** và rất cũ: so với source map chỉ 4 file trùng, 33 file khác, 38 file không có.
- `peerDependencies` không đúng thực tế: thiếu `yup`, `react-select`, `react-table`, `react-flatpickr`, `easyqrcodejs`, `react-bootstrap-sweetalert`, nhưng lại có công cụ như `react-scripts`, `gh-pages`, `prettier`…
- `inon-app` cài thư viện qua `github:BachVanHai/app-base#web/develop`, không có phiên bản. 69/71 nhánh remote của `inon-app` trỏ `#web/develop`, 2 nhánh trỏ `#web/dev-tpbank`.
- `inon-app` import trực tiếp `base-app/index.css` trong `src/App.js` và `src/InsuranceApp.js`.

Rủi ro chính: không có mã nguồn đúng với bản đang chạy. Build lại từ bất kỳ nguồn hiện có nào cũng sẽ làm mất các thay đổi từ 2024 đến nay.

## 2. Mục tiêu & tiêu chí thành công

Mục tiêu:

1. Có `src/` trong git, **tương đương về logic** với bundle `80dfe96`.
2. `dist/` chỉ sinh ra bằng `npm run build` và có cơ chế phát hiện sửa tay.
3. Phát hành theo tag `vX.Y.Z`. `inon-app` trỏ vào tag thay vì nhánh.
4. Không làm vỡ nhánh nào của `inon-app` đang trỏ vào `#web/develop`.

Tiêu chí "xong":

- Build `src/` → chuẩn hóa bằng prettier → diff với `legacy-bundle-final` (cả `index.js`, `index.modern.js`, `index.css`) **không còn khác biệt logic**. Mọi khác biệt còn lại được liệt kê và giải thích trong `docs/restore/diff-report.md`.
- `inon-app` chạy với `#v1.0.0`, qua được danh sách kiểm tra ở mục 5.6 và `npm run build` production thành công.
- `README.md` mô tả đủ quy trình sửa → build → phát hành.

Không làm trong đợt này:

- Không nâng cấp thư viện, không đổi công cụ build, không bật nén, không tách bundle (thuộc giai đoạn tối ưu hiệu năng và hiện đại hóa sau này).
- Không viết unit test cho code cũ.
- Không xử lý các biến thể `web/dev-tpbank` (42 commit riêng), `web/dev-bpm-tpbank`, `web/develop-bpm`, `web/master-dc`.
- Không thiết lập GitHub Actions (hiện chưa dùng được).

## 3. Cấu trúc repo mới (nhánh `main`)

```
app-base/
├── src/                  # nguồn duy nhất được sửa
│   ├── index.js          # giữ nguyên 33 export
│   └── components/ configs/ customHooks/ layouts/ pages/ redux/ services/ utility/ assets/
├── dist/                 # chỉ sinh bởi `npm run build`
│   ├── index.js  index.modern.js  index.css  index.modern.css  *.map
│   └── assets/fonts/     # cạnh index.css, giữ đường dẫn tương đối ./assets/fonts/...
├── scripts/
│   ├── extract-sources.js   # tách sourcesContent từ source map (dùng một lần)
│   ├── normalize-diff.js    # chuẩn hóa + diff hai bundle, quy về file nguồn
│   └── verify-dist.js       # build lại và so với dist/ đã commit
├── .githooks/pre-push
├── docs/restore/diff-report.md
├── .nvmrc
├── CHANGELOG.md
├── README.md
├── package.json
└── package-lock.json     # được commit (bỏ khỏi .gitignore)
```

`package.json`:

- `main: dist/index.js`, `module: dist/index.modern.js`, `style: dist/index.css`, `files: ["dist"]`.
- `scripts`:
  - `build`: `microbundle-crl --no-compress --format modern,cjs --css-modules false`, sau đó copy `src/assets/fonts` → `dist/assets/fonts`. Tham số chính xác được chốt ở bước 5.2: phải tái tạo đủ các file cũ (`index.js`, `index.modern.js`, `index.css`, `index.modern.css`). Script cũ trong `../base-app/package.json` ghi `--format modern --css-modules false,cjs`.
  - `start`: chế độ watch, cùng tham số.
  - `verify`: `node scripts/verify-dist.js`.
  - `release`: `npm run verify && npm version` (truyền tiếp `patch|minor|major`).
  - `hooks:install`: `git config core.hooksPath .githooks`.
  - **Không có `prepare` hay `postinstall`**, vì npm tự chạy `prepare` khi `inon-app` cài thư viện từ GitHub.
- `peerDependencies`: đúng tập gói mà bundle `require` lúc chạy. Khoảng phiên bản **lấy theo `package.json` của `inon-app`** (vd. `yup ^0.28.1`, `react-select ~3.0.8`, `react-table ~6.10.0`, `react-flatpickr ^3.9.1`, `easyqrcodejs ^4.4.3`, `react-bootstrap-sweetalert ^5.1.9`, `react ^16.13.0`, `firebase ^8.5.0`, `axios ^0.21.1`).
- `devDependencies`: `microbundle-crl` (giữ đúng 0.13.x của bản build cũ), `prettier`, các peer dependency để build, ESLint.
- Giữ nguyên phiên bản mọi thư viện đang dùng.
- `.idea/` thêm vào `.gitignore` và xóa khỏi git.

Node: thử build bằng Node hiện tại (v24). Nếu `microbundle-crl` 0.13 lỗi thì cố định Node 16 qua `.nvmrc` và `engines`. Việc này chỉ áp dụng cho việc build `app-base`, không ảnh hưởng `inon-app`.

## 4. Chiến lược nhánh `app-base`

- `main`: nhánh mới chứa cấu trúc ở mục 3, tạo từ `chore/restore-source` sau khi khôi phục xong. Tag `v*` chỉ tạo trên `main`.
- `web/develop`: **đóng băng**, giữ bố cục cũ để 69 nhánh `inon-app` không vỡ. Chỉ thêm một commit cập nhật README: "Nhánh legacy, không sửa nữa, dùng tag `v*` trên `main`".
- Tag `legacy-bundle-final` đặt tại `80dfe96` (hoặc commit bundle cuối nếu có sửa gấp trước khi chốt). Đây là bản đúng để đối chiếu.
- Các biến thể khác giữ nguyên.

## 5. Quy trình khôi phục

### 5.0 Chốt mốc
- Gắn tag `legacy-bundle-final`.
- Thông báo **tạm ngừng sửa bundle** trên `web/develop`. Nếu buộc phải sửa gấp: ghi lại commit, chuyển về `src/` trước bước 5.5 và dời tag `legacy-bundle-final`.

### 5.1 Tách nguồn JS
- `scripts/extract-sources.js` đọc `sourcesContent` từ `9a98914:index.js.map` và `9a98914:index.modern.js.map`, ghi 75 file vào `src/` (bỏ các nguồn trong `node_modules`).
- Kiểm tra hai map cho nội dung giống nhau ở các file chung. Nếu khác thì ghi vào báo cáo.
- Bổ sung phần map không có (SCSS/CSS, ảnh, json, font, `src/index.js` nếu thiếu) từ `../base-app/src`. Tính đúng của các file này được kiểm chứng qua output ở 5.2 và 5.5.

### 5.2 Kiểm chứng công cụ build
- Build `src/` (bản 2024) → chuẩn hóa → so với `9a98914:index.modern.js`, `9a98914:index.js`, `9a98914:index.css`.
- Phải khớp về logic. Nếu không khớp: điều chỉnh phiên bản Node, `microbundle-crl` và các phụ thuộc (theo `package-lock.json` ở `9a98914` nếu cần) cho tới khi khớp. **Không sang 5.3 khi chưa khớp.**

### 5.3 Lập bản đồ thay đổi
- `scripts/normalize-diff.js`: chuẩn hóa bundle 2024 và `legacy-bundle-final` bằng prettier rồi diff.
- Dùng source map của bản build 5.2 để quy mỗi đoạn diff về file nguồn.
- Ghi `docs/restore/diff-report.md`: bảng file → các đoạn thay đổi → commit bundle liên quan (tra bằng `git log -L` hoặc `git log -S` trên bundle).

### 5.4 Chuyển thay đổi về nguồn
- Với từng file trong báo cáo, viết lại thay đổi bằng JSX hoặc ES hiện đại trong `src/`. Module xuất hiện mới hoàn toàn (vd. thông báo SSE, error modal, event source client) thì tạo file mới theo cấu trúc thư mục hiện có.
- Mỗi commit gói một file hoặc một nhóm tính năng. Thông điệp commit ghi hash commit bundle gốc.
- CSS: đối chiếu diff `index.css` (khoảng 295 dòng) và chuyển về file SCSS/CSS nguồn.

### 5.5 Kiểm chứng cuối
- Build `src/` → chuẩn hóa → diff với `legacy-bundle-final` cho `index.js`, `index.modern.js`, `index.css`.
- Chấp nhận: đổi tên biến nội bộ do bundler (vd. `React__default$1`), thứ tự helper, khoảng trắng.
- Khác biệt nào ngoài các loại trên phải được sửa, hoặc ghi lý do trong báo cáo kèm xác nhận của người duyệt.

### 5.6 Chạy thử trên `inon-app`
Trỏ `inon-app` vào `file:../app-base` và kiểm tra:

- Đăng nhập, đăng xuất, landing page, đăng nhập mạng xã hội
- Xử lý HTTP 401 và unwrap response trong `HttpClient`
- Menu theo quyền (các menu key mới: TK Pay, quản lý cộng tác viên, role product, cấu hình ảnh xe, banca, cat proposal)
- `Select` / `BaseFormGroupSelect` (một và nhiều lựa chọn, value)
- `BaseFormGroup` kiểu number, `BaseFormDatePicker` (disable, auto set field value)
- Đổi mật khẩu, account settings
- Thông báo SSE, chuông thông báo (`Bells`)
- Error modal (responsive, nhãn, số điện thoại hỗ trợ)
- `npm run build` production của `inon-app`

## 6. Quy trình phát triển & phát hành (sau khôi phục)

Phát triển:

1. Tạo nhánh tính năng từ `main`.
2. Sửa `src/`, chạy `npm start`. Thử trên `inon-app` bằng `npm link` hoặc `file:../app-base`.
3. `npm run build`, commit cả `src/` và `dist/`, mở PR vào `main`.

Chống sửa tay `dist/`:

- `.githooks/pre-push`: nếu các commit sắp push có thay đổi trong `src/`, `dist/` hoặc `package*.json` thì chạy `npm run verify` (build lại + `git diff --exit-code dist/`). Nếu lệch thì chặn push và in hướng dẫn.
- Mỗi lập trình viên chạy `npm run hooks:install` một lần (ghi trong README).
- Hook có thể bị bỏ qua (`--no-verify`, hoặc chưa bật hook). Lớp bảo vệ cuối là `npm run release`, lệnh này luôn chạy `verify` trước khi tạo tag, nên **mọi tag đều đã được kiểm chứng**.
- Khi dùng được GitHub Actions, thêm workflow chạy `npm ci && npm run verify`, không cần đổi gì khác.

Phát hành:

1. Trên `main`: `npm run release -- patch|minor|major` → commit và tag `vX.Y.Z`.
2. `git push --follow-tags`.
3. Cập nhật `CHANGELOG.md`.

Quy tắc phiên bản: patch khi sửa lỗi; minor khi thêm export hoặc tính năng; major khi đổi tên hoặc xóa export, hoặc đổi đường dẫn import. Tag đầu tiên: `v1.0.0`.

## 7. Chuyển `inon-app`

Trên nhánh `chore/base-app-v1` từ `web/develop` của `inon-app`:

1. `"base-app": "github:BachVanHai/app-base#v1.0.0"`.
2. `src/App.js`, `src/InsuranceApp.js`: `base-app/index.css` → `base-app/dist/index.css`.
3. Xóa script `update-base-app`.
4. `npm install`, commit `package-lock.json`. Không được có cảnh báo xung đột peer dependency.
5. Kiểm tra theo mục 5.6.
6. Merge vào `web/develop` của `inon-app`. Các nhánh khác chuyển dần khi rebase hoặc merge, không ép chuyển hàng loạt.

Quay lại khi có sự cố: revert commit trên `inon-app`. `app-base#web/develop` vẫn còn nguyên bundle cũ.

## 8. Rủi ro

| Rủi ro | Ứng phó |
|---|---|
| `microbundle-crl` 0.13 không chạy trên Node 24 | Cố định Node 16 qua `.nvmrc` |
| Không tái tạo được bundle 2024 ở 5.2 (khác phiên bản phụ thuộc) | Khôi phục `package-lock.json` ở `9a98914` nếu có trong lịch sử. Nếu không, khóa phiên bản theo mã trong bundle |
| SCSS, ảnh trong `../base-app/src` không khớp bản 2024 | Phát hiện ở 5.2 qua diff CSS, sửa theo `index.css` của `9a98914` |
| Bundle tiếp tục bị sửa trong lúc khôi phục | Tạm ngừng sửa; nếu bắt buộc thì ghi lại và dời `legacy-bundle-final` |
| Bỏ sót thay đổi ở 5.4 | Tiêu chí 5.5 (diff bằng 0) phát hiện được |
| Lập trình viên vẫn sửa `dist/` | Hook pre-push + `release` luôn verify |

## 9. Việc tiếp theo (ngoài phạm vi)

- Đưa các biến thể `web/dev-tpbank`, `web/dev-bpm-tpbank`, `web/develop-bpm`, `web/master-dc` về `main` (bằng cấu hình hoặc nhánh phát hành riêng).
- Tối ưu kích thước bundle (tách CSS Bootstrap, bật nén, tree-shaking).
- Nâng cấp React, router, axios, bỏ moment.
- Thêm GitHub Actions khi có thể.
