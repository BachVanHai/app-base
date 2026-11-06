# Changelog

## v1.0.0

- Khôi phục mã nguồn `src/` từ bundle cuối của `web/develop` (`legacy-bundle-final`); hành vi giữ nguyên (xem `docs/restore/diff-report.md`).
- Bản build chuyển vào `dist/`; **import CSS đổi thành `base-app/dist/index.css`** (thay đổi phá vỡ so với `#web/develop`).
- Các thư viện runtime chuyển thành `peerDependencies`.
- Thêm `npm run verify`, hook `pre-push`, `npm run release`.
- Export mới so với nguồn 2024: `EventSourceClient`, `Bells`.
