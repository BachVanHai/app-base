# Changelog

## v1.0.1

Không đổi mã thư viện (`dist/` giữ nguyên so với v1.0.0); chỉ sửa công cụ phát triển/phát hành:

- Checkout luôn LF (`.gitattributes`), `dist/` không còn phụ thuộc `core.autocrlf` của máy build.
- `npm run verify` từ chối khi `src/`, `scripts/`, `package*.json` còn thay đổi chưa commit; hook `pre-push` từ chối push ref có đổi mã nguồn mà không phải HEAD, và luôn verify khi remote có commit chưa fetch (force-push).
- `npm run build` xóa `dist/` trước khi build.
- Bỏ `engines` (thư viện không yêu cầu Node khi dùng); thêm `devEngines` Node >=22 cho việc phát triển.
- Bỏ devDependencies `react-toastify`, `react-perfect-scrollbar`, `prismjs` (không cần cho build; tránh nạp 2 bản khi dùng `npm link` / `file:`).

## v1.0.0

- Khôi phục mã nguồn `src/` từ bundle cuối của `web/develop` (`legacy-bundle-final`); hành vi giữ nguyên (xem `docs/restore/diff-report.md`).
- Bản build chuyển vào `dist/`; **import CSS đổi thành `base-app/dist/index.css`** (thay đổi phá vỡ so với `#web/develop`).
- Các thư viện runtime chuyển thành `peerDependencies`.
- Thêm `npm run verify`, hook `pre-push`, `npm run release`.
- Export mới so với nguồn 2024: `EventSourceClient`, `Bells`.
