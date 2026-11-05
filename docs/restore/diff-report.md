# Báo cáo khôi phục mã nguồn

## Ghi chú tách nguồn

- Nguồn: `sourcesContent` của `index.modern.js.map` tại `9a98914` (2024-09-29). `index.js.map` cho nội dung giống hệt (đã `diff -r`).
- Map có 75 nguồn trong `src/` + 2 nguồn flatpickr (`node_modules`, được inline vào bundle, không tách).
- 2 cặp nguồn chỉ khác hoa/thường, **nội dung giống hệt**: `redux/actions/ui/index.js` ≡ `Index.js`, `redux/actions/navbar/index.js` ≡ `Index.js`. Chỉ ghi một file (`index.js`) → 73 file.
- 10 import dùng đường dẫn `.../Index` (ConfirmAlert, SidebarHeader, ChangePassword, Contact, Language, Policies). Trên Windows chúng resolve vào `index.js` nhưng rollup coi là module riêng → bundle cũ chứa bản lặp (vd. `goBackHomePage$1`). **Giữ nguyên** để tái tạo bundle; sửa thành `/index` là thay đổi có chủ đích, làm sau bước kiểm chứng cuối và ghi ở đây.
