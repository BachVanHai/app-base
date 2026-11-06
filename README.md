# base-app

Thư viện dùng chung cho `inon-app`: layout, đăng nhập, cài đặt tài khoản, thông báo, `HttpClient`, form components…

Mã nguồn nằm ở `src/`, bản build nằm ở `dist/` (được commit vì `inon-app` cài trực tiếp từ GitHub, npm không tự build).

> **Không sửa `dist/` bằng tay.** Mọi thay đổi làm trong `src/` rồi chạy `npm run build`. Hook `pre-push` và `npm run release` sẽ chặn nếu `dist/` không khớp `src/`.

## Dùng trong ứng dụng

```json
"base-app": "github:BachVanHai/app-base#v1.0.0"
```

```js
import 'base-app/dist/index.css'
import { BaseApp, HttpClient } from 'base-app'
```

Các thư viện React, redux, reactstrap… là `peerDependencies`: ứng dụng tự cài (xem `package.json`).

## Cài đặt cho dev

```bash
nvm use            # Node theo .nvmrc
npm install
npm run hooks:install   # bật .githooks/pre-push (mỗi clone làm 1 lần)
```

| Lệnh | Việc |
|---|---|
| `npm start` | Build lại `dist/` mỗi khi `src/` thay đổi |
| `npm run build` | Build `dist/` (cjs + modern + CSS + fonts) |
| `npm test` | Test các script trong `scripts/` |
| `npm run verify` | Build lại và báo lỗi nếu `dist/` khác bản đã commit |
| `npm run release -- <patch\|minor\|major\|x.y.z>` | `verify` rồi tạo commit + tag `vX.Y.Z` |

## Sửa & thử trên inon-app

1. Tạo nhánh từ `main`, sửa `src/`, chạy `npm start`.
2. Trong `inon-app`, trỏ tạm `base-app` về bản cục bộ: `"base-app": "file:../app-base"` rồi `npm install` (hoặc `npm link`). **Không commit** thay đổi này của `inon-app`.
3. Xong: `npm run build`, commit cả `src/` và `dist/`, mở PR vào `main`.

CSS: style cũ (đã biên dịch) ở `src/styles/base-app.legacy.css` — giữ nguyên; style mới viết vào `src/styles/custom.scss`.

## Phát hành

1. Trên `main`, thêm mục phiên bản mới vào `CHANGELOG.md` và commit.
2. `npm run release -- patch` (hoặc `minor` / `major`) → commit `X.Y.Z` + tag `vX.Y.Z`.
3. `git push --follow-tags`.
4. Trong `inon-app`, đổi `#vX.Y.Z` trong `package.json` và `npm install`.

Quy tắc phiên bản:

- **patch**: sửa lỗi.
- **minor**: thêm export hoặc tính năng.
- **major**: đổi tên / xóa export, hoặc đổi đường dẫn import.

## Nhánh

- `main`: nhánh phát triển, mọi bản phát hành là tag `v*` trên `main`.
- `web/develop`: nhánh legacy (bundle cũ), đóng băng — không sửa nữa.
