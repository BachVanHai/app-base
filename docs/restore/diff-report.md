# Báo cáo khôi phục mã nguồn

## Ghi chú tách nguồn

- Nguồn: `sourcesContent` của `index.modern.js.map` tại `9a98914` (2024-09-29). `index.js.map` cho nội dung giống hệt (đã `diff -r`).
- Map có 75 nguồn trong `src/` + 2 nguồn flatpickr (`node_modules`, được inline vào bundle, không tách).
- 2 cặp nguồn chỉ khác hoa/thường, **nội dung giống hệt**: `redux/actions/ui/index.js` ≡ `Index.js`, `redux/actions/navbar/index.js` ≡ `Index.js`. Chỉ ghi một file (`index.js`) → 73 file.
- 10 import dùng đường dẫn `.../Index` (ConfirmAlert, SidebarHeader, ChangePassword, Contact, Language, Policies). Trên Windows chúng resolve vào `index.js` nhưng rollup coi là module riêng → bundle cũ chứa bản lặp (vd. `goBackHomePage$1`). **Giữ nguyên** để tái tạo bundle; sửa thành `/index` là thay đổi có chủ đích, làm sau bước kiểm chứng cuối và ghi ở đây.

## Thay đổi cần chuyển về nguồn (dist ← src so với legacy-bundle-final)

Sinh bởi `node scripts/decl-report.js dist .work/legacy/final <out>` (so theo từng câu lệnh top-level, không phụ thuộc thứ tự) ngày 2026-11-05. Patch từng khai báo: `<out>/decls/*.patch`. Cột commit: `git log -S` theo tên khai báo mới trên `9a98914..legacy-bundle-final` (rỗng = thay đổi đã có từ trước 2024 hoặc chỉ sửa thân hàm).

**Lưu ý:** bundle tại `9a98914` đã bị sửa tay so với source map của chính nó (vd. `Bells`, thông báo, lịch sử điểm thưởng, `moment/locale/vi`, locale flatpickr "Tháng mười hai"), nên danh sách gồm cả thay đổi trước 2024.

### 6.1 HTTP, auth, cấu hình

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `configs/app-configs.js` | API_BASE_URL, RESOURCE_URL, API_TIME_OUT, CONTACT_PHONE, USER_ROLE, IMAGE | — | API_BASE_SIT_URL, API_PARTNER_SOCIAL_LOGIN, API_GET_MY_NOTIFICATIONS, API_CHECK_NEW_NOTIFICATIONS, API_GET_NOTIFICATION_FROM_ESPUBLIC, API_UPDATE_NOTIFICATION, API_UPDATE_ALL_NOTIFICATION_STATUS, API_SSE_SUBSCRIBE_NOTIFICATION, API_GET_ALL_BONUS_TRANSACTION_BY_USER, API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER, API_GET_USER_SOCIAL, API_GET_BONUS_BY_USER_ID, TERMS_PDF, POLICY_PDF, ANDROID_APP_LINK, IOS_APP_LINK, NAV_ICONS | dda0a32 4171ee9 f1a678b | ⬜ |
| `utility/index.js` | toastError | — | toastInfo | da9c89c f1a678b 7414973 e29ed5b cafc047 c0d501d | ⬜ |
| `services/authService.js` | AuthService | — | — | — | ⬜ |
| `redux/actions/auth/index.js` | checkLoginStatus, loginAction, socialLogin, register, logoutAction, changePassword, register#2 | sessionTimeout, saveRegisterInfo | UPDATE_USER_SOCIAL, CLEAR_MUST_CHANGE_PASSWORD, UPDATE_USER_FACEBOOK_AUTH, UPDATE_USER_GOOGLE_AUTH, UPDATE_USER_AVATAR, connectWithSocialNetwork, updateUserFacebookAuth, updateUserGoogleAuth, verifyAccount, getUserSocial, forgotPassword#2, login#2, register#3, forgotPassword#3 | 447fbde | ⬜ |
| `utility/HttpClient.js` | HttpClient, setUpHttpClient | — | isResponseData, unwrapResponseData, isLoggingOut, _eventSourceStore, _eventSourceBaseUrl, setUpEventSourceClient, buildEventSourceRequestHeaders, EventSourceClient | 609eb3a 094e6e9 4171ee9 | ⬜ |
| `redux/reducers/auth/index.js` | authInitialState, authReducers | — | — | — | ⬜ |

### 6.2 Menu & quyền

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `configs/navigationConfig.js` | mapRoleToNavItem, getNativgationConfig | — | — | — | ⬜ |
| `redux/reducers/navbar/index.js` | initialState#2 | — | — | — | ⬜ |
| `layouts/components/menu/vertical-menu/sidemenu/SideMenuContent.js` | SideMenuContent | — | — | — | ⬜ |
| `layouts/components/menu/vertical-menu/Sidebar.js` | Sidebar | — | — | — | ⬜ |
| `redux/actions/navbar/index.js` | — | loadNavtigation, LOAD_NATIVGATION#2, LOAD_USER_ROLE#2, goBackHomePage#2 | loadNavigation | a40d8af | ⬜ |
| `customHooks/usePageAuthorities.js` | — | — | export:local#2 | — | ⬜ |

### 6.3 Form

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `components/BaseFormGroup.js` | BaseFormGroup | — | — | — | ⬜ |
| `components/DatePicker.js` | DatePicker | — | — | — | ⬜ |
| `components/BaseFormDatePicker.js` | BaseFormDatePicker | — | — | — | ⬜ |
| `components/Select.js` | Select | — | — | — | ⬜ |
| `components/BaseFormGroupSelect.js` | BaseFormGroupSelect | — | — | — | ⬜ |

### 6.4 Thông báo SSE & navbar

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `redux/reducers/ui/index.js` | uiReducer | — | DEFAULT_ERROR_MODAL, NotificationService, LOAD_MY_NOTIFICATIONS, RECEIVE_NEW_NOTIFICATIONS, MERGE_SSE_NOTIFICATION, UPDATE_NOTIFICATION, UPDATE_ALL_NOTIFICATIONS, getMyNotifications, checkReceiveNewNotification, updateNotification, updateAllNotifications, mergeSseNotification, initialState#3, notificationReducer | 7414973 | ⬜ |
| `layouts/components/navbar/UserDropDown.js` | UserDropdown | — | MediaCustom, CustomImage, CustomDropdown, Notifications, _sseController, _sseUserId, _sseRefCount, _sseReconnectTimer, _sseToastedIds, SSE_TOAST_DEDUPE_MS, SSE_RECONNECT_MS, SSE_RETRY_DELAY_MS, parseSseNotificationPayload, shouldShowSseToast, stripHtmlForToast, scheduleSseReconnect, checkNewNotifications, Bells | 9988b17 cd57421 f1a678b | ⬜ |
| `layouts/components/navbar/NavbarUser.js` | NavbarUser | NavbarUser#2 | — | — | ⬜ |
| `layouts/components/navbar/Navbar.js` | ThemeNavbar, mapStateToProps#4 | — | — | — | ⬜ |

### 6.5 Error modal, UI, khung app

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `redux/reducers/rootReducer.js` | rootReducer | — | — | — | ⬜ |
| `layouts/components/footer/Footer.js` | Footer | — | — | — | ⬜ |
| `routes/AppRouter.js` | AppRouter, AppRouter#2 | — | — | — | ⬜ |
| `components/Loading-spinner.js` | LoadingSpinner | — | — | — | ⬜ |
| `App.js` | App | — | — | — | ⬜ |
| `redux/actions/ui/index.js` | — | SHOW_LOADING_BAR#2, HIDE_LOADING_BAR#2, SHOW_CONFIRM_ALERT#2, HIDE_CONFIRM_ALERT#2, showConfirmAlert#2, hideConfirmAlert#2 | SHOW_ERROR_MODAL, HIDE_ERROR_MODAL, clearMustChangePassword | 094e6e9 4171ee9 7414973 447fbde | ⬜ |
| `utility/context/Internationalization.js` | — | — | login | 094e6e9 a40d8af 4171ee9 | ⬜ |
| `components/ConfirmAlert.js` | — | — | GlobalErrorModal | 7414973 | ⬜ |

### 6.6 Trang (tài khoản, thông tin chung, xác thực)

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `pages/account-settings/tabs/Account.js` | validationSchema | — | — | — | ⬜ |
| `pages/account-settings/tabs/ShareWithFriends.js` | ShareWithFriends | — | — | — | ⬜ |
| `pages/account-settings/AccountSettings.js` | AccountSettings | — | — | — | ⬜ |
| `pages/general-info/tabs/Contact.js` | ContactTab | — | — | — | ⬜ |
| `pages/general-info/GeneralInfo.js` | GeneralInfo | — | — | — | ⬜ |
| `pages/authentication/SocialLogin.js` | SocialLogin | — | — | — | ⬜ |
| `pages/authentication/AppSelection.js` | AppSelection | — | — | — | ⬜ |
| `pages/authentication/Login.js` | Login | — | — | — | ⬜ |
| `pages/authentication/Register.js` | Register | — | — | — | ⬜ |
| `pages/account-settings/tabs/ChangePassword.js` | formSchema#4 | — | MustChangePasswordForm | ff0523a | ⬜ |
| `pages/authentication/LandingPageHeader.js` | LandingPageHeader | — | — | — | ⬜ |
| `pages/authentication/LandingPage.js` | LandingPage | — | — | — | ⬜ |
| `components/CheckLocationChange.js` | CheckLocationChange | — | ConnectWithSocial, BonusHistoryService, DOTS, range, usePagination, Pagination, PageSize, BonusPointItem, _#3, BonusPointMainStyled, BonusPoint | — | ⬜ |
| `assets/data/terms.js` | — | TERMS | — | — | ⬜ |
| `pages/general-info/tabs/InfoItems.js` | — | InfoItems | — | — | ⬜ |
| `pages/general-info/tabs/Terms.js` | — | Terms | — | — | ⬜ |
| `assets/data/policies.js` | — | POLICIES | — | — | ⬜ |
| `pages/general-info/tabs/Policies.js` | — | Policies | — | — | ⬜ |
| `serviceWorker.js` | — | registerValidSW, checkValidServiceWorker | unregister | — | ⬜ |
| `pages/authentication/CompleteInformation.js` | — | — | VerifyAccount, _#2 | — | ⬜ |

### 6.8 Còn lại

| File nguồn | Đổi | Bỏ | Thêm | Commit liên quan | Xong |
|---|---|---|---|---|---|
| `__new__` | appConfigs, index, messages_en, messages_vi, vn, _ | — | import:@microsoft/fetch-event-source, import:moment/locale/vi | f1a678b | ⬜ |

## Khác biệt do công cụ build (chấp nhận, không logic)

- Helper babel `_extends` (phiên bản @babel/helpers khác).
- flatpickr 4.6.6 được bọc bằng `createCommonjsModule` thay vì trải phẳng (32 khai báo nội bộ flatpickr).
- Thứ tự module/import và danh sách specifier của các câu `import` (8 câu).
- `export { toast } from "react-toastify"` ↔ `export { toast }`; câu `export {...}` cuối được so riêng ở Task 7.

## Kết quả Task 6 (2026-11-06)

Cách làm: mỗi module được dựng lại từ đúng các câu lệnh của `legacy-bundle-final` thuộc module đó (chuyển `React.createElement` → JSX, styled-components tagged template, `static` class property), giữ import/export của file cũ, tự bổ sung import còn thiếu; `scripts/lib/undef.js` xác nhận **không còn identifier nào chưa khai báo/import** trong `src/`.

`node scripts/decl-report.js dist .work/legacy/final <out>` còn **46 câu lệnh khác**, tất cả thuộc các loại sau (không khác logic):

| Loại | Câu lệnh | Ghi chú |
|---|---|---|
| Cách bundle flatpickr | `flatpickr`, `vn` + 31 khai báo nội bộ flatpickr | Bản cuối trải phẳng flatpickr; bản build bọc `createCommonjsModule`. Tên tháng 11/12 tiếng Việt (bản cuối sửa tay) được tái tạo trong `src/components/DatePicker.js`. |
| Helper babel | `_extends` | Bản build dùng `Object.assign`. |
| Danh sách specifier của `import` | 6 câu `import` | Bản cuối còn specifier không dùng (vd. `ButtonGroup`). |
| Dạng câu `export` | `export:local`, `export:local#2`, `export:react-toastify` | Danh sách tên export so riêng ở Task 7. |
| Code chết trong bản cuối | `AppSelection` (`onClickChangeAppType`), `checkReceiveNewNotification` | Không được gọi; rollup loại bỏ. |
| Namespace `BaseAppConfigs` | `appConfigs` | Có thêm `API_BASE_SIT_URL`, `API_SSE_SUBSCRIBE_NOTIFICATION`: bản cuối khai báo mà không export (chỉ làm được khi sửa tay bundle); mã nguồn ES module buộc phải export. |

Thay đổi có chủ đích, khớp với bản cuối:

- `toastError` hiển thị `toast.info` + icon `Info` (đúng như bản cuối, đã ghi chú trong code).
- Import `.../Index` → `.../index`: bản cuối không còn module trùng lặp.
- `NavbarUser` export trực tiếp (không `injectIntl`), như bản cuối.
- Module mới: `services/notificationService.js`, `services/bonusHistoryService.js`, `redux/actions/notification`, `redux/reducers/notification`, `layouts/components/navbar/Bells.js`, `components/GlobalErrorModal.js`, `components/Pagination.js`, `customHooks/usePagination.js`, `pages/authentication/VerifyAccount.js`, `pages/account-settings/tabs/ConnectWithSocial.js`, `pages/bonus-point/BonusPoint.js`, `pages/bonus-point/BonusPointItem.js`.
- Xoá module không còn trong bản cuối: `assets/data/{terms,policies}.js`, `pages/general-info/tabs/{InfoItems,Terms,Policies}.js`.
- Locale `en.json`/`vi.json` lấy từ `messages_en`/`messages_vi` của bản cuối (428/446 khóa).

## Kết quả cuối (Task 7, 2026-11-06)

- `decl-report` dist ↔ `legacy-bundle-final`: **45** câu lệnh khác, toàn bộ thuộc bảng "Kết quả Task 6" (flatpickr 33, `_extends` 1, import specifier 6, export 2, code chết 2, `appConfigs` 1).
- Danh sách export (`index.modern.js`): **37 = 37**, trùng tên hoàn toàn (đã bổ sung `Bells`). Đủ 34 tên mà `inon-app` đang import.
- `index.js` (cjs): 38 export — thêm `EventSourceClient` so với cjs cũ (bản cuối chỉ sửa tay bản modern); cjs và modern nay sinh từ cùng nguồn.
- `dist/index.css` trùng từng byte với `legacy-bundle-final/index.css`.
- `scripts/lib/undef.js`: 0 identifier chưa khai báo/import trong `src/`.
