function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactIntl = require('react-intl');
var React = require('react');
var React__default = _interopDefault(React);
var history$1 = require('history');
var Axios = _interopDefault(require('axios'));
require('axios-extensions');
var Icon = require('react-feather');
var reactToastify = require('react-toastify');
var moment = _interopDefault(require('moment'));
var reactstrap = require('reactstrap');
var reactRedux = require('react-redux');
var redux = require('redux');
var createDebounce = _interopDefault(require('redux-debounced'));
var thunk = _interopDefault(require('redux-thunk'));
var react = require('redux-persist/integration/react');
var reduxPersist = require('redux-persist');
var storage = _interopDefault(require('redux-persist/es/storage'));
var reactRouterDom = require('react-router-dom');
var classnames = _interopDefault(require('classnames'));
var ReactDOM = _interopDefault(require('react-dom'));
var PropTypes = _interopDefault(require('prop-types'));
var PerfectScrollbar = _interopDefault(require('react-perfect-scrollbar'));
require('moment/locale/vi');
var styled = _interopDefault(require('styled-components'));
var ScrollToTop = _interopDefault(require('react-scroll-up'));
var Hammer = _interopDefault(require('react-hammerjs'));
var Yup = require('yup');
var formik = require('formik');
var Flatpickr = _interopDefault(require('react-flatpickr'));
var ReactSelect = _interopDefault(require('react-select'));
var AsyncSelect = _interopDefault(require('react-select/async'));
var CreatableSelect = _interopDefault(require('react-select/creatable'));
var QRCode = _interopDefault(require('easyqrcodejs'));
var FacebookLogin = _interopDefault(require('react-facebook-login/dist/facebook-login-render-props'));
var GoogleLogin = _interopDefault(require('react-google-login'));
var firebase = _interopDefault(require('firebase'));
var OtpInput = _interopDefault(require('react-otp-input'));
var SweetAlert = _interopDefault(require('react-bootstrap-sweetalert'));
var TopBarProgress = _interopDefault(require('react-topbar-progress-indicator'));
var Ripples = _interopDefault(require('react-ripples'));
require('react-perfect-scrollbar/dist/css/styles.css');
require('react-toastify/dist/ReactToastify.css');
var MaskedInput = _interopDefault(require('react-text-mask'));
var createNumberMask = _interopDefault(require('text-mask-addons/dist/createNumberMask'));
var Table = _interopDefault(require('react-table'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var AppId = {
  APP_NO1: 'APP_NO1',
  INSURANCE_APP: 'INSURANCE_APP',
  SUPPLEMENT_APP: 'SUPPLEMENT_APP',
  ELITE_APP: 'ELITE_APP',
  DIVAY_APP: 'DIVAY_APP'
};

var API_BASE_URL = 'https://api.inon.vn';
var RESOURCE_URL = 'https://sit2.inon.vn/resources/images/';
var FB_APP_ID = '2651185198505964';
var GOOGLE_APP_ID = '400818618331-k9ptcdcgr99po0g5q5mh8e5ekodgj61n.apps.googleusercontent.com';
var API_LOGIN_URL = '/api/authenticate';
var API_LOGOUT_URL = '/api/logout';
var API_GUEST_SOCIAL_LOGIN = '/api/social-login/guest';
var API_PARTNER_SOCIAL_LOGIN = '/api/social-login/partner';
var API_CHANGE_PASSWORD = '/api/change-password';
var API_REGISTER = '/nth/onboarding/api/authenticate/register';
var API_VERIFY_ACCOUNT = '/nth/onboarding/api/authenticate/verify-account';
var API_VERIFY_PHONENUMBER = '/nth/onboarding/api/authenticate/verify-phone-number';
var API_GET_USER = '/nth/user/api/users';
var API_USER_SETTINGS = '/nth/user/api/user-settings';
var API_UPDATE_USER_INFO = '/nth/user/api/update-user-info';
var API_GET_NAV_CONFIGS = '/nth/accesscontrol/api/roles';
var API_GET_USER_ROLES = '/nth/accesscontrol/api/user-group-roles';
var API_CREATE_PASSWORD = '/nth/onboarding/api/authenticate/create-new-password';
var API_GET_USER_BY_REGISTER_TOKEN = '/nth/onboarding/api/authenticate/get-partner';
var API_COMPLETE_INFO = '/nth/onboarding/api/authenticate/complete-info';
var API_FORGOT_PASSWORD = '/api/authenticate/forgot-password';
var API_RESET_PASSWORD = '/api/authenticate/reset-password';
var API_EMAIL_SUGGESTION = '/nth/user/api/authenticate/email-suggestion';
var API_GET_MY_NOTIFICATIONS = '/nth/notification/api/my-notification';
var API_CHECK_NEW_NOTIFICATIONS = '/nth/notification/api/authenticate/notifications-es';
var API_GET_NOTIFICATION_FROM_ESPUBLIC = '/nth/notification/api/authenticate/user-notifications-es';
var API_UPDATE_NOTIFICATION = '/nth/notification/api/authenticate/my-notifications/status';
var API_UPDATE_ALL_NOTIFICATION_STATUS = '/nth/notification/api/authenticate/my-notifications-status';
var API_GET_ALL_BONUS_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-transaction/by-user';
var API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-with-drawval-transactions/by-user';
var API_GET_USER_SOCIAL = '/api/user-social-network';
var API_R_200 = 200;
var API_GET_CITIES_BY_COUNTRY = '/nth/datacollection/api/citiesbycountry';
var API_GET_DISTRICTS_BY_CITY = '/nth/datacollection/api/districtsbycity';
var API_GET_WARDS_BY_CITY = '/nth/datacollection/api/wardsbydistrict';
var API_GET_BANKS = '/nth/datacollection/api/allBanks';
var API_UPLOAD_FILE = '/nth/file/api/upload';
var API_GET_FILE = '/nth/file/api/file';
var MAX_MOBILE_WIDTH = 768;
var MAX_TABLET_WIDTH = 1024;
var REMEMBER_ME_TOKEN = 'rememberMe';
var VN_COUNTRY_CODE = 192;
var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*])).{8,}$/gm;
var PHONE_REGEX = /^\b(84|0[3|5|7|8|9])+([0-9]{8})\b$/g;
var PERSONAL_ID_REGEX = /^(\d{9}|\d{12})$/;
var CITIZEN_INDENTIFY_REGEX = /^(\d{12})$/;
var PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;
var NAME_REGEX = /^([ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếềìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý0-9A-Za-z_. ])+$/g;
var TERMS_PDF = 'https://sit2.inon.vn/resources/pdf/terms-and-conditions.pdf';
var POLICY_PDF = 'https://sit2.inon.vn/resources/pdf/privacy-policy.pdf';
var FIRE_BASE_CONFIGS = {
  apiKey: "AIzaSyCvWX-pLEPOxjwp2AJq3_t11JQjRMKtaT8",
  authDomain: "inonvn.firebaseapp.com",
  projectId: "inonvn",
  storageBucket: "inonvn.appspot.com",
  messagingSenderId: "316619339575",
  appId: "1:316619339575:web:a44ffe85ab9b3619f88cb2",
  measurementId: "G-9NZ14LNF58"
};
var AUTHORITIES = {
  VIEW: 'view',
  EDIT: 'edit',
  APPROVE: 'approve',
  CREATE: 'create'
};
var LOGIN_METHODS = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  PASSWORD: 'PASSWORD'
};
var API_TIME_OUT = 5 * 60 * 1000;
var MAX_FILE_SIZE = 5;
var CONTACT_PHONE = '0899.300.800';
var SESSION_TIMEOUT = 30;
var DATE_TIME_FORMAT = 'YYYY/MM/DD HH:mm:ss';
var ANDROID_APP_LINK = 'https://play.google.com/store/apps/details?id=com.inon.vn';
var IOS_APP_LINK = 'https://apps.apple.com/app/id1574202853';
var LOGIN_STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};
var USER_TYPE = {
  KD: 'KD',
  HTKD: 'HTKD'
};
var GENDER_OPTIONS = [{
  value: 'MALE',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.gender.male"
  })
}, {
  value: 'FEMALE',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.gender.female"
  })
}, {
  value: 'OTHERS',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.gender.other"
  })
}];
var IC_TYPES_OPTIONS = [{
  value: 'HC',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.icType.passport"
  })
}, {
  value: 'CMND',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.icType.personalID"
  })
}, {
  value: 'CCCD',
  label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.icType.citizenIdentify"
  })
}];
var getExternalAppUrl = function getExternalAppUrl(appId, url) {
  switch (appId) {
    case AppId.APP_NO1:
      return "/app" + url;

    case AppId.INSURANCE_APP:
      return "/insurance" + url;

    case AppId.SUPPLEMENT_APP:
      return "/supplement" + url;

    case AppId.ELITE_APP:
      return "" + url;
  }
};
var getContextPath = function getContextPath(appId) {
  switch (appId) {
    case AppId.APP_NO1:
      return 'app';

    case AppId.INSURANCE_APP:
      return 'insurance';

    case AppId.SUPPLEMENT_APP:
      return 'supplement';

    case AppId.ELITE_APP:
      return '';
  }
};
var getPropObject = function getPropObject(obj, prop) {
  if (!obj) {
    return null;
  }

  return prop.split('.').reduce(function (r, e) {
    return r ? r[e] : null;
  }, obj);
};
var USER_ROLE = {
  ADMIN: 'AD.IO',
  KD: 'KD.IO',
  HTKD: 'HT.IO',
  KT: 'KT.IO',
  VH: 'VH.IO',
  DTL1: 'L1.DT',
  DTL2: 'L2.DT',
  DTL3: 'L3.DT',
  DTL4: 'L4.DT',
  DTL5: 'L5.DT',
  DTLX: 'LX.DT',
  BH: 'BH',
  BTBH: 'BTBH',
  HTDT: 'HT.DT',
  KHCN: 'KHCN'
};
var IMAGE = {
  LOGO: RESOURCE_URL + 'InOn-logo.svg',
  INON_LOGO: RESOURCE_URL + 'in-on-logo.svg',
  INON_LOGO_2: RESOURCE_URL + 'inon-logo-2.svg',
  FB_LOGO: RESOURCE_URL + 'fb-icon.svg',
  GOOGLE_LOGO: RESOURCE_URL + 'google-icon.svg',
  LOGO_NO_TEXT: RESOURCE_URL + 'in-on-logo-no-text.svg',
  LOGO_TEXT: RESOURCE_URL + 'in-on-logo-text.svg',
  NAV_ICON_1: RESOURCE_URL + 'nav-help-center.png',
  NAV_ICON_2: RESOURCE_URL + 'nav-247-icon.png',
  BUY_INSURANCE: RESOURCE_URL + 'buy-insurance-icon.svg',
  LOGO_WHITE: RESOURCE_URL + 'in-on-logo-white.svg',
  LANDING_PAGE_BG: RESOURCE_URL + 'landing-page-bg.jpg',
  LANDING_PAGE_2_BG: RESOURCE_URL + 'lading-page-2.svg',
  LANDING_PAGE_TABLET_BG: RESOURCE_URL + 'lading-page-v.svg',
  DOWNLOAD_APP_IOS: RESOURCE_URL + 'app-store.svg',
  DOWNLOAD_APP_ANDROID: RESOURCE_URL + 'google-store.svg',
  CHECK_ICON: RESOURCE_URL + 'check_icon.png',
  FAIL_ICON: RESOURCE_URL + 'fail_icon.png'
};
var NAV_ICONS = ["help-center", "support 24/7"];

var appConfigs = {
  __proto__: null,
  API_BASE_URL: API_BASE_URL,
  RESOURCE_URL: RESOURCE_URL,
  FB_APP_ID: FB_APP_ID,
  GOOGLE_APP_ID: GOOGLE_APP_ID,
  API_LOGIN_URL: API_LOGIN_URL,
  API_LOGOUT_URL: API_LOGOUT_URL,
  API_GUEST_SOCIAL_LOGIN: API_GUEST_SOCIAL_LOGIN,
  API_PARTNER_SOCIAL_LOGIN: API_PARTNER_SOCIAL_LOGIN,
  API_CHANGE_PASSWORD: API_CHANGE_PASSWORD,
  API_REGISTER: API_REGISTER,
  API_VERIFY_ACCOUNT: API_VERIFY_ACCOUNT,
  API_VERIFY_PHONENUMBER: API_VERIFY_PHONENUMBER,
  API_GET_USER: API_GET_USER,
  API_USER_SETTINGS: API_USER_SETTINGS,
  API_UPDATE_USER_INFO: API_UPDATE_USER_INFO,
  API_GET_NAV_CONFIGS: API_GET_NAV_CONFIGS,
  API_GET_USER_ROLES: API_GET_USER_ROLES,
  API_CREATE_PASSWORD: API_CREATE_PASSWORD,
  API_GET_USER_BY_REGISTER_TOKEN: API_GET_USER_BY_REGISTER_TOKEN,
  API_COMPLETE_INFO: API_COMPLETE_INFO,
  API_FORGOT_PASSWORD: API_FORGOT_PASSWORD,
  API_RESET_PASSWORD: API_RESET_PASSWORD,
  API_EMAIL_SUGGESTION: API_EMAIL_SUGGESTION,
  API_GET_MY_NOTIFICATIONS: API_GET_MY_NOTIFICATIONS,
  API_CHECK_NEW_NOTIFICATIONS: API_CHECK_NEW_NOTIFICATIONS,
  API_GET_NOTIFICATION_FROM_ESPUBLIC: API_GET_NOTIFICATION_FROM_ESPUBLIC,
  API_UPDATE_NOTIFICATION: API_UPDATE_NOTIFICATION,
  API_UPDATE_ALL_NOTIFICATION_STATUS: API_UPDATE_ALL_NOTIFICATION_STATUS,
  API_GET_ALL_BONUS_TRANSACTION_BY_USER: API_GET_ALL_BONUS_TRANSACTION_BY_USER,
  API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER: API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER,
  API_GET_USER_SOCIAL: API_GET_USER_SOCIAL,
  API_R_200: API_R_200,
  API_GET_CITIES_BY_COUNTRY: API_GET_CITIES_BY_COUNTRY,
  API_GET_DISTRICTS_BY_CITY: API_GET_DISTRICTS_BY_CITY,
  API_GET_WARDS_BY_CITY: API_GET_WARDS_BY_CITY,
  API_GET_BANKS: API_GET_BANKS,
  API_UPLOAD_FILE: API_UPLOAD_FILE,
  API_GET_FILE: API_GET_FILE,
  MAX_MOBILE_WIDTH: MAX_MOBILE_WIDTH,
  MAX_TABLET_WIDTH: MAX_TABLET_WIDTH,
  REMEMBER_ME_TOKEN: REMEMBER_ME_TOKEN,
  VN_COUNTRY_CODE: VN_COUNTRY_CODE,
  PASSWORD_REGEX: PASSWORD_REGEX,
  PHONE_REGEX: PHONE_REGEX,
  PERSONAL_ID_REGEX: PERSONAL_ID_REGEX,
  CITIZEN_INDENTIFY_REGEX: CITIZEN_INDENTIFY_REGEX,
  PASSPORT_REGEX: PASSPORT_REGEX,
  NAME_REGEX: NAME_REGEX,
  TERMS_PDF: TERMS_PDF,
  POLICY_PDF: POLICY_PDF,
  FIRE_BASE_CONFIGS: FIRE_BASE_CONFIGS,
  AUTHORITIES: AUTHORITIES,
  LOGIN_METHODS: LOGIN_METHODS,
  API_TIME_OUT: API_TIME_OUT,
  MAX_FILE_SIZE: MAX_FILE_SIZE,
  CONTACT_PHONE: CONTACT_PHONE,
  SESSION_TIMEOUT: SESSION_TIMEOUT,
  DATE_TIME_FORMAT: DATE_TIME_FORMAT,
  ANDROID_APP_LINK: ANDROID_APP_LINK,
  IOS_APP_LINK: IOS_APP_LINK,
  LOGIN_STATUS: LOGIN_STATUS,
  USER_TYPE: USER_TYPE,
  GENDER_OPTIONS: GENDER_OPTIONS,
  IC_TYPES_OPTIONS: IC_TYPES_OPTIONS,
  getExternalAppUrl: getExternalAppUrl,
  getContextPath: getContextPath,
  getPropObject: getPropObject,
  USER_ROLE: USER_ROLE,
  IMAGE: IMAGE,
  NAV_ICONS: NAV_ICONS
};

var history = history$1.createBrowserHistory({
  basename: ''
});
var setBaseHistory = function setBaseHistory(appHistory) {
  history = appHistory;
};

var generateUUID = function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var trimValue = function trimValue(value) {
  return value ? value.trim() : '';
};
var bytesToMb = function bytesToMb(bytes) {
  return Math.round(bytes / Math.pow(1024, 2), 2);
};
var trimObjectValues = function trimObjectValues(object, excludeKeys) {
  if (excludeKeys === void 0) {
    excludeKeys = [];
  }

  if (!object) {
    return;
  }

  Object.keys(object).forEach(function (key) {
    if (excludeKeys.indexOf(key) >= 0) {
      return;
    }

    switch (typeof object[key]) {
      case 'string':
        object[key] = trimValue(object[key]);
        break;

      case 'object':
        trimObjectValues(object[key]);
    }
  });
  return object;
};
var numberFormat = function numberFormat(value) {
  return Intl.NumberFormat().format(value);
};
var toastError = function toastError(message) {
  reactToastify.toast.error( /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-1 p-0"
  }, /*#__PURE__*/React__default.createElement(Icon.AlertTriangle, {
    size: 24
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "mx-1 my-0"
  }, message)));
};
var toastSuccess = function toastSuccess(message) {
  reactToastify.toast.success( /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-1 p-0"
  }, /*#__PURE__*/React__default.createElement(Icon.Check, {
    size: 24
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "mx-1 my-0"
  }, message)));
};

var index = {
  __proto__: null,
  generateUUID: generateUUID,
  trimValue: trimValue,
  bytesToMb: bytesToMb,
  trimObjectValues: trimObjectValues,
  numberFormat: numberFormat,
  toastError: toastError,
  toastSuccess: toastSuccess
};

var SHOW_LOADING_BAR = 'SHOW_LOADING_BAR';
var HIDE_LOADING_BAR = 'HIDE_LOADING_BAR';
var SHOW_CONFIRM_ALERT = 'SHOW_CONFIRM_ALERT';
var HIDE_CONFIRM_ALERT = 'HIDE_CONFIRM_ALERT';
var showConfirmAlert = function showConfirmAlert(configs) {
  return function (dispatch) {
    return dispatch({
      type: SHOW_CONFIRM_ALERT,
      payload: configs
    });
  };
};
var hideConfirmAlert = function hideConfirmAlert() {
  return function (dispatch) {
    return dispatch({
      type: HIDE_CONFIRM_ALERT
    });
  };
};

var HttpClient = Axios.create({
  timeout: API_TIME_OUT
});
HttpClient.defaults.headers['Content-Type'] = 'application/json';
var setUpHttpClient = function setUpHttpClient(store, apiBaseUrl) {
  var deviceId = localStorage.getItem('deviceId');
  var language = localStorage.getItem('language');

  if (!deviceId) {
    deviceId = generateUUID();
    localStorage.setItem('deviceId', deviceId);
  }

  if (!language) {
    localStorage.setItem('language', 'vi');
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      localStorage.setItem('latitude', position.coords.latitude);
      localStorage.setItem('longitude', position.coords.longitude);
    });
  }

  HttpClient.defaults.baseURL = apiBaseUrl || API_BASE_URL;
  HttpClient.interceptors.request.use(function (config) {
    var token = store.getState().auth.guest.authToken || store.getState().auth.authToken;
    var sessionExpireTime = store.getState().auth.sessionExpireTime;
    language = localStorage.getItem('language');

    if (token) {
      store.dispatch(changeActionExpireTime());
      config.headers.Authorization = "Bearer " + token;
      var isSessionExpired = moment().isAfter(moment(sessionExpireTime));

      if (sessionExpireTime && isSessionExpired) {
        toastError( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "common.sessionExpired"
        }));
        store.dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
        return;
      }
    }

    config.headers.appId = store.getState().customizer.appId;
    config.headers.appVersion = 'v1';
    config.headers.latitude = localStorage.getItem('latitude');
    config.headers.longitude = localStorage.getItem('longitude');
    config.headers.deviceId = deviceId;
    config.headers['Accept-Language'] = language;
    config.requestUUID = generateUUID();

    if (!config.isBackgroundRequest) {
      store.dispatch({
        type: SHOW_LOADING_BAR,
        payload: config.requestUUID
      });
    }

    return config;
  });
  HttpClient.interceptors.response.use(function (response) {
    if (response && !response.config.isBackgroundRequest) {
      store.dispatch({
        type: HIDE_LOADING_BAR,
        payload: response.config.requestUUID
      });
    }

    return response;
  }, function (e) {
    store.dispatch({
      type: HIDE_LOADING_BAR,
      payload: 'ALL'
    });

    if (!e.response) {
      return e;
    }

    switch (e.response.status) {
      case 400:
        toastError(e.response.data.message);
        break;

      case 403:
        if (e.response.data.error === 'Forbidden') {
          return e.response;
        }

        toastError(e.response.data.message);
        store.dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
        break;

      case 500:
        toastError( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "common.error.500"
        }));
    }

    store.dispatch({
      type: HIDE_LOADING_BAR,
      payload: e.response.config.requestUUID
    });
    return e.response;
  });
};

var AuthService = function AuthService() {};

AuthService.login = function (user) {
  return HttpClient.post(API_LOGIN_URL, user);
};

AuthService.guestSocialLogin = function (data) {
  return HttpClient.post(API_GUEST_SOCIAL_LOGIN, data);
};

AuthService.partnerSocialLogin = function (data) {
  return HttpClient.post(API_PARTNER_SOCIAL_LOGIN, data);
};

AuthService.getUserInfo = function (username, authToken) {
  var headers = {
    Authorization: "Bearer " + authToken
  };
  return HttpClient.get(API_GET_USER + "/" + username, {
    headers: headers
  });
};

AuthService.getUserByRegisterToken = function (registerToken) {
  return HttpClient.get(API_GET_USER_BY_REGISTER_TOKEN + "/" + registerToken);
};

AuthService.compeleteInfo = function (user) {
  return HttpClient.post("" + API_COMPLETE_INFO, user);
};

AuthService.logout = function (userId) {
  return HttpClient.post(API_LOGOUT_URL + "/" + userId);
};

AuthService.createPassword = function (password, registerToken) {
  return HttpClient.post(API_CREATE_PASSWORD, {
    password: password,
    registerToken: registerToken
  });
};

AuthService.register = function (user) {
  return HttpClient.post(API_REGISTER, user);
};

AuthService.checkLoginByToken = function () {
  return HttpClient.get(API_LOGIN_URL);
};

AuthService.getSuggestionEmail = function (username) {
  return HttpClient.get(API_EMAIL_SUGGESTION + "/" + username);
};

AuthService.forgotPassword = function (username, email) {
  return HttpClient.post(API_FORGOT_PASSWORD, {
    username: username,
    email: email
  });
};

AuthService.resetPassword = function (password, resetToken) {
  return HttpClient.post(API_RESET_PASSWORD, {
    password: password,
    resetToken: resetToken
  });
};

AuthService.updateUserInfo = function (user) {
  return HttpClient.put(API_UPDATE_USER_INFO, user);
};

AuthService.changePassword = function (value) {
  return HttpClient.post(API_CHANGE_PASSWORD, value);
};

AuthService.changeUserSetting = function (value) {
  return HttpClient.put(API_USER_SETTINGS, value);
};

AuthService.verifyAccount = function (token) {
  return HttpClient.post(API_VERIFY_ACCOUNT + "/" + token);
};

AuthService.verifyPhoneNumber = function (value) {
  return HttpClient.post("" + API_VERIFY_PHONENUMBER, value);
};

AuthService.getUserSocial = function (userId) {
  return HttpClient.get(API_GET_USER_SOCIAL + "/" + userId);
};

AuthService.connectWithSocialNetwork = function (data, userId) {
  return HttpClient.post(API_GET_USER_SOCIAL + "/" + userId, data);
};

AuthService.updateAvatar = function (user, file) {
  try {
    var formData = new FormData();
    formData.append('fileInfo', new Blob([JSON.stringify({
      userId: user.id,
      docType: 'AVATAR'
    })], {
      type: 'application/json'
    }));
    formData.append('file', file);
    return Promise.resolve(HttpClient.post(API_UPLOAD_FILE, formData)).then(function (res) {
      return res.status === 200 ? HttpClient.defaults.baseURL + API_GET_FILE + '?fileCode=' + res.data.code : '';
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var mapRoleListToNavConfigs = function mapRoleListToNavConfigs(roleList) {
  if (roleList === void 0) {
    roleList = [];
  }

  if (!roleList.length) {
    return [];
  }

  roleList = roleList.filter(function (item) {
    return item.order < 1000;
  });
  var mapRoles = new Map();
  roleList.forEach(function (role) {
    var listRole = mapRoles.get(role.parentId);
    var itemNav = mapRoleToNavItem(role);

    if (listRole) {
      listRole.push(itemNav);
      mapRoles.set(role.parentId, listRole);
    } else {
      mapRoles.set(role.parentId, [itemNav]);
    }
  });
  var parentList = mapRoles.get(null);
  return parentList.map(function (item) {
    item.children = mapRoles.get(item.id + '');
    return item;
  });
};

var mapRoleToNavItem = function mapRoleToNavItem(role) {
  var IconTag = Icon[role.icon];
  var item = {};
  item.id = role.id;
  item.type = 'item';
  item.code = role.code;
  item.appId = role.appId;
  item.title = "menu." + role.keyLang;
  item.description = role.description;
  item.icon = /*#__PURE__*/React__default.createElement(IconTag, {
    size: 20
  });
  item.navLink = getExternalAppUrl(role.appId, role.menuPath);

  if (role.isHighlight) {
    item.badge = 'primary';
    item.badgeText = 'new';
  }

  return item;
};

var getNativgationConfig = function getNativgationConfig(navConfigs) {
  navConfigs = mapRoleListToNavConfigs(navConfigs);
  return navConfigs.map(function (item) {
    item.isExternalApp = false;

    if (item.children) {
      item.children.map(function (child) {
        return child.isExternalApp = false;
      });

      if (item.children.length === 1) {
        item.navLink = item.children[0].navLink;
      } else {
        item.type = 'collapse';
      }
    }

    return item;
  });
};

var NavBarService = function NavBarService() {};

NavBarService.getNativagtion = function () {
  return HttpClient.get(API_GET_NAV_CONFIGS, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};

NavBarService.getUserGroupRole = function (groupId) {
  return HttpClient.get(API_GET_USER_ROLES + "/" + groupId, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};

var LOAD_NATIVGATION = 'LOAD_NATIVGATION';
var LOAD_USER_ROLE = 'LOAD_USER_ROLE';
var loadNavigation = function loadNavigation() {
  return function (dispatch) {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(NavBarService.getNativagtion()).then(function (res) {
        if (!res || !res.data) {
          return;
        }

        dispatch(loadUserRoles());
        var roles = res.data || [];
        var navConfigs = getNativgationConfig(roles);
        dispatch({
          type: LOAD_NATIVGATION,
          payload: {
            navConfigs: navConfigs,
            roles: roles
          }
        });
      });
    }, function () {}));
  };
};
var loadUserRoles = function loadUserRoles() {
  return function (dispatch, getState) {
    try {
      var groupId = getState().auth.user.groupId;

      if (!groupId) {
        return Promise.resolve();
      }

      return Promise.resolve(NavBarService.getUserGroupRole(groupId)).then(function (res) {
        if (res.status === 200) {
          dispatch({
            type: LOAD_USER_ROLE,
            payload: res.data
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var goBackHomePage = function goBackHomePage() {
  return function (dispatch, getState) {
    try {
      var _getState, _getState$auth;

      var _ref = ((_getState = getState()) === null || _getState === void 0 ? void 0 : (_getState$auth = _getState.auth) === null || _getState$auth === void 0 ? void 0 : _getState$auth.guest) || {},
          authToken = _ref.authToken;

      if (authToken) {
        history.push('/home');
      } else {
        history.push('/app/home');
      }

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

var LOGIN_ACTION = 'LOGIN_ACTION';
var LOGIN_FAIL_ACTION = 'LOGIN_FAIL_ACTION';
var LOGOUT_ACTION = 'LOGOUT_ACTION';
var SAVE_REGISTER_TOKEN = 'SAVE_REGISTER_TOKEN';
var SAVE_RESET_PASSWORD_TOKEN = 'SAVE_RESET_PASSWORD_TOKEN';
var UPDATE_USER_INFO = 'UPDATE_USER_INFO';
var CHANGE_SESSION_EXPIRE_TIME = 'CHANGE_SESSION_EXPIRE_TIME';
var CHANGE_VERIFY_ACCOUNT_STATUS = 'CHANGE_VERIFY_ACCOUNT_STATUS';
var CHANGE_IS_GUEST = 'CHANGE_IS_GUEST';
var GOTO_GUEST_APP = 'GOTO_GUEST_APP';
var GOTO_AGENCY_APP = 'GOTO_AGENCY_APP';
var UPDATE_USER_SOCIAL = 'UPDATE_USER_SOCIAL';
var UPDATE_USER_FACEBOOK_AUTH = 'UPDATE_USER_FACEBOOK_AUTH';
var UPDATE_USER_GOOGLE_AUTH = 'UPDATE_USER_GOOGLE_AUTH';
var UPDATE_USER_AVATAR = 'UPDATE_USER_AVATAR';
var checkLoginStatus = function checkLoginStatus(authToken, redirectUrl) {
  return function (dispatch, getState) {
    try {
      var _temp3 = _catch(function () {
        return Promise.resolve(AuthService.checkLoginByToken()).then(function (response) {
          var appId = getState().customizer.appId;

          var _ref = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user,
              username = _ref.username;

          var _temp = function () {
            if (response.status === API_R_200 && username) {
              return Promise.resolve(AuthService.getUserInfo(username, authToken)).then(function (_AuthService$getUserI) {
                response = _AuthService$getUserI;
                var payload = appId === AppId.ELITE_APP ? {
                  guest: {
                    authToken: authToken,
                    user: response.data || {}
                  }
                } : {
                  authToken: authToken,
                  user: response.data || {}
                };
                dispatch(loadNavigation());
                dispatch({
                  type: LOGIN_ACTION,
                  payload: payload
                });
              });
            } else {
              dispatch({
                type: LOGOUT_ACTION
              });
              history.push('/login');
            }
          }();

          if (_temp && _temp.then) return _temp.then(function () {});
        });
      }, function () {
        dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
      });

      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var loginAction = function loginAction(user) {
  return function (dispatch, getState) {
    try {
      user.rememberMe = user.isRemeberMe;
      return Promise.resolve(AuthService.login(user)).then(function (response) {
        var isGuest = getState().auth.isGuest;
        return function () {
          if (response.status === API_R_200) {
            var authToken = response.data.id_token;
            return Promise.resolve(AuthService.getUserInfo(user.username, authToken)).then(function (_AuthService$getUserI2) {
              response = _AuthService$getUserI2;

              if (user.isRemeberMe) {
                localStorage.setItem(REMEMBER_ME_TOKEN, JSON.stringify({
                  username: user.username,
                  name: response.data.fullName
                }));
              }

              var _response$data = response.data,
                  userSettings = _response$data.userSettings,
                  groupId = _response$data.groupId;

              if (userSettings) {
                localStorage.setItem('language', userSettings.language.toLowerCase());
              }

              if (isGuest) {
                dispatch({
                  type: LOGIN_ACTION,
                  payload: {
                    guest: {
                      authToken: authToken,
                      loginMethod: LOGIN_METHODS.PASSWORD,
                      type: 'PASSWORD',
                      user: response.data || {}
                    }
                  }
                });
              } else {
                if (groupId === USER_ROLE.KHCN) {
                  dispatch(showConfirmAlert({
                    title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
                      id: "login.registerPartner"
                    }),
                    isShow: true,
                    content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
                      id: "login.needRegisterPartner"
                    }),
                    onConfirm: function onConfirm() {
                      history.push('/register');
                    }
                  }));
                  return;
                }

                dispatch(loadNavigation());
                dispatch({
                  type: LOGIN_ACTION,
                  payload: {
                    authToken: authToken,
                    type: 'PASSWORD',
                    user: response.data || []
                  }
                });
              }

              redirectMainApp(isGuest);
            });
          } else {
            dispatch({
              type: LOGOUT_ACTION
            });
          }
        }();
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var socialLogin = function socialLogin(data, loginMethod, isGuest, isRemeberMe, openAddInfoPopup, openRequiredConnectSocialNetworkPopup) {
  return function (dispatch) {
    try {
      var res;
      return Promise.resolve(function () {
        if (!isGuest) {
          return Promise.resolve(AuthService.partnerSocialLogin(data)).then(function (_AuthService$partnerS) {
            res = _AuthService$partnerS;
            return function () {
              if (res.status === API_R_200) {
                debugger;
                var isConnectSocialNetwork = res.data.isConnectSocialNetwork;

                if (!isConnectSocialNetwork) {
                  openRequiredConnectSocialNetworkPopup();
                  return;
                }

                var authToken = res.data.idToken;
                return Promise.resolve(AuthService.getUserInfo(res.data.username, authToken)).then(function (_AuthService$getUserI3) {
                  res = _AuthService$getUserI3;

                  if (isRemeberMe) {
                    localStorage.setItem(REMEMBER_ME_TOKEN, JSON.stringify({
                      username: res.data.username,
                      name: res.data.fullName
                    }));
                  }

                  var userSettings = res.data.userSettings;

                  if (userSettings) {
                    localStorage.setItem('language', userSettings.language.toLowerCase());
                  }

                  dispatch(loadNavigation());
                  dispatch({
                    type: LOGIN_ACTION,
                    payload: {
                      authToken: authToken,
                      type: 'PASSWORD',
                      user: res.data || []
                    }
                  });
                  history.push('/app/home');
                });
              } else {
                dispatch({
                  type: LOGOUT_ACTION
                });
              }
            }();
          });
        } else {
          return Promise.resolve(AuthService.guestSocialLogin(data)).then(function (_AuthService$guestSoc) {
            res = _AuthService$guestSoc;

            if (!res || !res.data) {
              return;
            }

            if (res.data.data && !res.data.idToken) {
              openAddInfoPopup(res.data.data);
              return;
            }

            var authToken = res.data.idToken;
            return Promise.resolve(AuthService.getUserInfo(res.data.username, authToken)).then(function (_AuthService$getUserI4) {
              res = _AuthService$getUserI4;
              dispatch({
                type: LOGIN_ACTION,
                payload: {
                  guest: {
                    authToken: authToken,
                    loginMethod: loginMethod,
                    type: 'PASSWORD',
                    user: res.data || {}
                  }
                }
              });
              dispatch(goBackHomePage());
            });
          });
        }
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var connectWithSocialNetwork = function connectWithSocialNetwork(data, userId) {
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.connectWithSocialNetwork(data, userId)).then(function (res) {
        if (res && res.status === 200) {
          toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
            id: "connectWithSocial.success"
          }));

          if (data.provider === "FACEBOOK") {
            dispatch(updateUserFacebookAuth(res.data));
          } else {
            dispatch(updateUserGoogleAuth(res.data));
          }
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var updateUserFacebookAuth = function updateUserFacebookAuth(data) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_FACEBOOK_AUTH,
      payload: data
    });
  };
};
var updateUserGoogleAuth = function updateUserGoogleAuth(data) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_GOOGLE_AUTH,
      payload: data
    });
  };
};
var changeIsGuest = function changeIsGuest(isGuest) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_IS_GUEST,
      payload: isGuest
    });
  };
};
var goToGuestApp = function goToGuestApp() {
  return function (dispatch) {
    dispatch({
      type: GOTO_GUEST_APP
    });
    redirectMainApp(true);
  };
};
var goToAgencyApp = function goToAgencyApp() {
  return function (dispatch) {
    dispatch({
      type: GOTO_AGENCY_APP
    });
    redirectMainApp(false);
  };
};
var createPassword = function createPassword(password) {
  return function (dispatch, getState) {
    try {
      var _temp5 = _catch(function () {
        return Promise.resolve(AuthService.createPassword(password, getState().auth.register.token)).then(function (response) {
          if (response.status === 200 && response.data) {
            history.push('/complete-information');
          }
        });
      }, function () {});

      return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var register = function register(values, isGuest) {
  return function () {
    try {
      var _temp7 = _catch(function () {
        return Promise.resolve(AuthService.register(trimObjectValues(values))).then(function (res) {
          if (res.status === 200 && res.data) {
            toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
              id: "register.registerSuccess"
            }));
            history.push('/login');
          }
        });
      }, function () {});

      return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var compeleteInfo = function compeleteInfo(user) {
  return function (dispatch, getState) {
    try {
      var _temp9 = _catch(function () {
        user.registerToken = getState().auth.register.token;
        return Promise.resolve(AuthService.compeleteInfo(user)).then(function (response) {
          if (response.status === 200 && response.data) {
            toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
              id: "completeInformation.success"
            }));
            history.push('/login');
          }
        });
      }, function (error) {
        console.log(error);
      });

      return Promise.resolve(_temp9 && _temp9.then ? _temp9.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var saveRegisterToken = function saveRegisterToken(registerToken) {
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.getUserByRegisterToken(registerToken)).then(function (response) {
        if (response.status === 200 && response.data) {
          dispatch({
            type: SAVE_REGISTER_TOKEN,
            payload: {
              token: registerToken,
              user: response.data
            }
          });
        } else {
          history.push('/login');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var saveResetPasswordToken = function saveResetPasswordToken(token) {
  return function (dispatch) {
    dispatch({
      type: SAVE_RESET_PASSWORD_TOKEN,
      payload: token
    });
  };
};
var forgotPassword = function forgotPassword(_ref2) {
  var username = _ref2.username,
      email = _ref2.email;
  return function (dispatch, getState) {
    try {
      var _temp11 = _catch(function () {
        return Promise.resolve(AuthService.forgotPassword(username, email)).then(function (response) {
          if (response.status === 200 && response.data) {
            toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
              id: "forgotPassword.successfull"
            }));
            dispatch({
              type: SAVE_RESET_PASSWORD_TOKEN,
              payload: ''
            });
            history.push('/login');
          }
        });
      }, function () {});

      return Promise.resolve(_temp11 && _temp11.then ? _temp11.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var resetPassword = function resetPassword(password) {
  return function (dispatch, getState) {
    try {
      var _temp13 = _catch(function () {
        return Promise.resolve(AuthService.resetPassword(password, getState().auth.resetPasswordToken)).then(function (response) {
          if (response.status === 200 && response.data) {
            toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
              id: "createPassword.resetSuccessFul"
            }));
            dispatch({
              type: SAVE_RESET_PASSWORD_TOKEN,
              payload: ''
            });
            history.push('/login');
          }
        });
      }, function () {});

      return Promise.resolve(_temp13 && _temp13.then ? _temp13.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var logoutAction = function logoutAction() {
  return function (dispatch, getState) {
    try {
      var id = getState().auth.user.id;
      return Promise.resolve(AuthService.logout(id)).then(function () {
        dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var updateUserInfo = function updateUserInfo(user, avatarImage) {
  return function (dispatch) {
    try {
      var _temp16 = function _temp16() {
        return Promise.resolve(AuthService.updateUserInfo(user)).then(function (res) {
          if (res.status === 200) {
            dispatch({
              type: UPDATE_USER_INFO,
              payload: res.data
            });
            toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
              id: "setting.updateInfo.success"
            }));
            dispatch(goBackHomePage());
          }
        });
      };

      var _temp17 = function () {
        if (avatarImage) {
          return Promise.resolve(AuthService.updateAvatar(user, avatarImage)).then(function (url) {
            user.userSettings.avatar = url || user.userSettings.avatar;
          });
        }
      }();

      return Promise.resolve(_temp17 && _temp17.then ? _temp17.then(_temp16) : _temp16(_temp17));
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var changePassword = function changePassword(_ref3) {
  var oldPassword = _ref3.oldPassword,
      newPassword = _ref3.newPassword;
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.changePassword({
        oldPassword: oldPassword,
        newPassword: newPassword
      })).then(function (res) {
        if (res.status === 200) {
          toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
            id: "changePassword.success"
          }));
          dispatch(goBackHomePage());
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var changeLanguageSetting = function changeLanguageSetting(lang, callBack) {
  return function (dispatch, getState) {
    try {
      var appId = getState().customizer.appId;

      var _ref4 = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user,
          _ref4$userSettings = _ref4.userSettings,
          userSettings = _ref4$userSettings === void 0 ? {} : _ref4$userSettings;

      var value = _extends({}, userSettings, {
        language: lang.toUpperCase()
      });

      return Promise.resolve(AuthService.changeUserSetting(value)).then(function (res) {
        if (res.status === 200) {
          callBack();
          toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
            id: "generalInfo.changeLanguage.success"
          }));
          dispatch(goBackHomePage());
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var changeActionExpireTime = function changeActionExpireTime() {
  return function (dispatch) {
    dispatch({
      type: CHANGE_SESSION_EXPIRE_TIME
    });
  };
};
var verifyAccount = function verifyAccount(token) {
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.verifyAccount(token)).then(function (res) {
        if (res.status === 200) {
          dispatch({
            type: CHANGE_VERIFY_ACCOUNT_STATUS,
            payload: {
              token: res.data.token,
              status: 'SUCCESS'
            }
          });
        } else {
          dispatch({
            type: CHANGE_VERIFY_ACCOUNT_STATUS,
            payload: {
              token: token,
              status: 'FAIL'
            }
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var verifyPhoneNumber = function verifyPhoneNumber(values) {
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.verifyPhoneNumber(values)).then(function (res) {
        if (res.status === 200) {
          toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
            id: "verifyAccount.otp.registerSuccess"
          }));
          history.push('/login');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var getUserSocial = function getUserSocial(userId) {
  return function (dispatch) {
    try {
      return Promise.resolve(AuthService.getUserSocial(userId)).then(function (res) {
        if (res.status === 200) {
          debugger;
          var data = res.data;

          if (data.length > 0) {
            var userAuthGoogle = data.find(function (item) {
              return item.provider === 'GOOGLE';
            });

            if (userAuthGoogle) {
              dispatch({
                type: UPDATE_USER_GOOGLE_AUTH,
                payload: userAuthGoogle
              });
            }

            var userAuthFacebook = data.find(function (item) {
              return item.provider === 'FACEBOOK';
            });

            if (userAuthFacebook) {
              dispatch({
                type: UPDATE_USER_FACEBOOK_AUTH,
                payload: userAuthFacebook
              });
            }
          }

          dispatch({
            type: UPDATE_USER_SOCIAL,
            payload: res.data
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

var redirectMainApp = function redirectMainApp(isGuest) {
  if (isGuest) {
    history.push('/');
  } else {
    history.push('/app/home');
  }
};

var themeConfig = {
  appId: '',
  layout: "vertical",
  theme: "light",
  sidebarCollapsed: false,
  navbarColor: "default",
  navbarType: "floating",
  footerType: "static",
  disableCustomizer: true,
  hideScrollToTop: false,
  disableThemeTour: false,
  menuTheme: "primary",
  direction: "ltr",
  showLoading: false
};

var customizerReducer = function customizerReducer(state, action) {
  if (state === void 0) {
    state = _extends({}, themeConfig);
  }

  switch (action.type) {
    case 'CHANGE_THEME':
      return _extends({}, state, {
        theme: action.theme
      });

    case 'SET_APP_ID':
      return _extends({}, state, {
        appId: action.appId
      });

    case 'COLLAPSE_SIDEBAR':
      return _extends({}, state, {
        sidebarCollapsed: action.value
      });

    case 'CHANGE_NAVBAR_COLOR':
      return _extends({}, state, {
        navbarColor: action.color
      });

    case 'CHANGE_NAVBAR_TYPE':
      return _extends({}, state, {
        navbarType: action.style
      });

    case 'CHANGE_FOOTER_TYPE':
      return _extends({}, state, {
        footerType: action.style
      });

    case 'CHANGE_MENU_COLOR':
      return _extends({}, state, {
        menuTheme: action.style
      });

    case 'HIDE_SCROLL_TO_TOP':
      return _extends({}, state, {
        hideScrollToTop: action.value
      });

    default:
      return state;
  }
};

var authInitialState = {
  authToken: '',
  isGuest: false,
  loginMethod: LOGIN_METHODS.PASSWORD,
  user: '',
  loginStatus: '',
  verifyAccount: {
    token: '',
    status: ''
  },
  register: {
    user: {},
    token: ''
  },
  guest: {},
  resetPasswordToken: '',
  sessionExpireTime: null,
  userFacebookAuth: null,
  userGoogleAuth: null
};
var authReducers = function authReducers(state, action) {
  if (state === void 0) {
    state = _extends({}, authInitialState);
  }

  switch (action.type) {
    case LOGIN_ACTION:
      {
        return _extends({}, state, action.payload, {
          loginStatus: LOGIN_STATUS.SUCCESS
        });
      }

    case LOGOUT_ACTION:
      {
        return _extends({}, authInitialState);
      }

    case LOGIN_FAIL_ACTION:
      {
        return _extends({}, state, {
          loginStatus: LOGIN_STATUS.FAIL
        });
      }

    case SAVE_REGISTER_TOKEN:
      {
        return _extends({}, state, {
          register: action.payload
        });
      }

    case SAVE_RESET_PASSWORD_TOKEN:
      {
        return _extends({}, state, {
          resetPasswordToken: action.payload
        });
      }

    case UPDATE_USER_INFO:
      {
        if (!state.guest.user) {
          return _extends({}, state, {
            user: action.payload
          });
        } else {
          return _extends({}, state, {
            guest: _extends({}, state.guest, {
              user: action.payload
            })
          });
        }
      }

    case CHANGE_SESSION_EXPIRE_TIME:
      {
        return _extends({}, state, {
          sessionExpireTime: moment().add(SESSION_TIMEOUT, 'minutes').format(DATE_TIME_FORMAT)
        });
      }

    case CHANGE_IS_GUEST:
      {
        return _extends({}, state, {
          isGuest: action.payload
        });
      }

    case CHANGE_VERIFY_ACCOUNT_STATUS:
      {
        return _extends({}, state, {
          resetPasswordToken: action.payload.token,
          verifyAccount: _extends({}, state.verifyAccount, action.payload)
        });
      }

    case GOTO_AGENCY_APP:
      {
        return _extends({}, state, {
          guest: {},
          user: state.guest.user,
          authToken: state.guest.authToken
        });
      }

    case GOTO_GUEST_APP:
      {
        return _extends({}, state, {
          guest: {
            user: state.user,
            authToken: state.authToken
          },
          user: '',
          authToken: ''
        });
      }

    case UPDATE_USER_SOCIAL:
      {
        return _extends({}, state, {
          userSocial: action.payload
        });
      }

    case UPDATE_USER_FACEBOOK_AUTH:
      {
        return _extends({}, state, {
          userFacebookAuth: action.payload
        });
      }

    case UPDATE_USER_GOOGLE_AUTH:
      {
        return _extends({}, state, {
          userGoogleAuth: action.payload
        });
      }

    case UPDATE_USER_AVATAR:
      {
        var userSettings = state.user.userSettings;
        userSettings.avatar = action.payload;
        return _extends({}, state, {
          user: _extends({}, state.user, {
            userSettings: userSettings
          })
        });
      }

    default:
      return state;
  }
};

var initialState = {
  navConfigs: [],
  roles: [],
  userRoles: []
};

var navbarReducer = function navbarReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case LOAD_NATIVGATION:
      return _extends({}, state, {
        navConfigs: action.payload.navConfigs,
        roles: action.payload.roles
      });

    case LOAD_USER_ROLE:
      return _extends({}, state, {
        userRoles: action.payload
      });

    default:
      return state;
  }
};

var DEFAULT_CONFIRM_ALERT = {
  title: '',
  isShow: false,
  content: '',
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {}
};
var initialState$1 = {
  loading: new Set(),
  isLoading: false,
  confirmAlert: _extends({}, DEFAULT_CONFIRM_ALERT)
};

var uiReducer = function uiReducer(state, action) {
  if (state === void 0) {
    state = initialState$1;
  }

  var loadingSet = new Set(state.loading.values());

  switch (action.type) {
    case SHOW_LOADING_BAR:
      loadingSet.add(action.payload);
      return _extends({}, state, {
        isLoading: !!loadingSet.size,
        loading: loadingSet
      });

    case HIDE_LOADING_BAR:
      if (action.payload === 'ALL') {
        loadingSet = new Set();
      } else {
        loadingSet["delete"](action.payload);
      }

      return _extends({}, state, {
        isLoading: !!loadingSet.size,
        loading: loadingSet
      });

    case SHOW_CONFIRM_ALERT:
      return _extends({}, state, {
        confirmAlert: _extends({
          isShow: true
        }, state.confirmAlert, action.payload)
      });

    case HIDE_CONFIRM_ALERT:
      return _extends({}, state, {
        confirmAlert: _extends({}, DEFAULT_CONFIRM_ALERT)
      });

    default:
      return state;
  }
};

var NotificationService = function NotificationService() {};

NotificationService.getMyNotifications = function () {
  return HttpClient.get(API_GET_NOTIFICATION_FROM_ESPUBLIC, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};

NotificationService.checkNewNotification = function () {
  return HttpClient.get(API_CHECK_NEW_NOTIFICATIONS, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};

NotificationService.updateNotification = function (notification) {
  return HttpClient.put(API_UPDATE_NOTIFICATION, notification, {
    isBackgroundRequest: true
  });
};

NotificationService.updateAllNotificationStatus = function (notifications) {
  return HttpClient.put(API_UPDATE_ALL_NOTIFICATION_STATUS, notifications, {
    params: {
      isBackgroundRequest: true
    }
  });
};

var LOAD_MY_NOTIFICATIONS = 'LOAD_MY_NOTIFICATIONS';
var RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS';
var UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
var UPDATE_ALL_NOTIFICATIONS = 'UPDATE_ALL_NOTIFICATIONS';
var getMyNotifications = function getMyNotifications() {
  return function (dispatch) {
    try {
      return Promise.resolve(NotificationService.getMyNotifications()).then(function (res) {
        if (!res || res.status !== 200) {
          return;
        }

        dispatch({
          type: LOAD_MY_NOTIFICATIONS,
          payload: res.data
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var checkReceiveNewNotification = function checkReceiveNewNotification() {
  return function () {
    try {
      return Promise.resolve(NotificationService.checkNewNotification()).then(function (res) {
        if (!res || res.status !== 200) {
          return;
        }

        return res.data;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var updateNotification = function updateNotification(notification) {
  return function (dispatch) {
    try {
      return Promise.resolve(NotificationService.updateNotification(notification)).then(function (res) {
        if (!res || res.status !== 200) return;
        dispatch({
          type: UPDATE_NOTIFICATION,
          payload: notification
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var updateAllNotifications = function updateAllNotifications(newNotificationsRequest, status) {
  return function (dispatch) {
    try {
      return Promise.resolve(NotificationService.updateAllNotificationStatus(newNotificationsRequest)).then(function (res) {
        if (!res || res.status !== 200) return;
        dispatch({
          type: UPDATE_ALL_NOTIFICATIONS,
          payload: status
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

var initialState$2 = {
  notifications: [],
  newNotifications: []
};

var notificationReducer = function notificationReducer(state, action) {
  if (state === void 0) {
    state = _extends({}, initialState$2);
  }

  var notifications = [].concat(state.notifications);
  var newNotifications;

  switch (action.type) {
    case LOAD_MY_NOTIFICATIONS:
      return _extends({}, state, {
        notifications: action.payload
      });

    case RECEIVE_NEW_NOTIFICATIONS:
      return _extends({}, state, {
        newNotifications: action.payload
      });

    case UPDATE_NOTIFICATION:
      newNotifications = notifications.map(function (item) {
        if (item.id === action.payload.id) {
          item.deleted = action.payload.deleted;
          item.read = action.payload.read;
        }

        return item;
      });
      return _extends({}, state, {
        notifications: newNotifications
      });

    case UPDATE_ALL_NOTIFICATIONS:
      if (action.payload === 'DELETE') {
        newNotifications = notifications.map(function (item) {
          item.deleted = true;
          item.read = true;
          return item;
        });
      } else {
        newNotifications = notifications.map(function (item) {
          item.deleted = false;
          item.read = action.payload;
          return item;
        });
      }

      return _extends({}, state, {
        notifications: newNotifications
      });

    default:
      return state;
  }
};

var rootReducer = function rootReducer(appReducer) {
  return redux.combineReducers({
    customizer: customizerReducer,
    ui: uiReducer,
    auth: reduxPersist.persistReducer({
      storage: storage,
      key: 'root',
      blacklist: ['loginStatus']
    }, authReducers),
    navbar: navbarReducer,
    notifications: notificationReducer,
    app: appReducer
  });
};

var Autocomplete = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Autocomplete, _React$Component);

  function Autocomplete(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onSuggestionItemClick = function (item, e) {
      if (_this.props.onSuggestionClick) {
        _this.props.onSuggestionClick(item, e);
      }

      _this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: e.currentTarget.innerText
      });
    };

    _this.onSuggestionItemHover = function (index) {
      _this.setState({
        activeSuggestion: index
      });
    };

    _this.onChange = function (e) {
      var userInput = e.currentTarget.value;

      _this.setState({
        activeSuggestion: 0,
        showSuggestions: true,
        userInput: userInput
      });

      if (e.target.value < 1) {
        _this.setState({
          showSuggestions: false
        });
      }
    };

    _this.onInputClick = function (e) {
      e.stopPropagation();
    };

    _this.onKeyDown = function (e) {
      var _this$state = _this.state,
          activeSuggestion = _this$state.activeSuggestion,
          showSuggestions = _this$state.showSuggestions,
          userInput = _this$state.userInput;
      var filterKey = _this.props.filterKey;
      var suggestionList = ReactDOM.findDOMNode(_this.suggestionList);

      if (e.keyCode === 38 && activeSuggestion !== 0) {
        _this.setState({
          activeSuggestion: activeSuggestion - 1
        });

        if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion <= _this.filteredData.length / 2) {
          suggestionList.scrollTop = 0;
        }
      } else if (e.keyCode === 40 && activeSuggestion < _this.filteredData.length - 1) {
          _this.setState({
            activeSuggestion: activeSuggestion + 1
          });

          if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion >= _this.filteredData.length / 2) {
            suggestionList.scrollTop = suggestionList.scrollHeight;
          }
        } else if (e.keyCode === 27) {
            _this.setState({
              showSuggestions: false,
              userInput: ''
            });
          } else if (e.keyCode === 13 && showSuggestions) {
              _this.onSuggestionItemClick(_this.filteredData[activeSuggestion], e);

              _this.setState({
                userInput: _this.filteredData[activeSuggestion][filterKey],
                showSuggestions: false
              });
            } else {
              return;
            }

      if (_this.props.onKeyDown !== undefined && _this.props.onKeyDown !== null && _this.props.onKeyDown) {
        _this.props.onKeyDown(e, userInput);
      }
    };

    _this.renderGroupedSuggestion = function (arr) {
      var _this$props = _this.props,
          filterKey = _this$props.filterKey,
          customRender = _this$props.customRender;

      var _assertThisInitialize = _assertThisInitialized(_this),
          onSuggestionItemClick = _assertThisInitialize.onSuggestionItemClick,
          onSuggestionItemHover = _assertThisInitialize.onSuggestionItemHover,
          _assertThisInitialize2 = _assertThisInitialize.state,
          activeSuggestion = _assertThisInitialize2.activeSuggestion,
          userInput = _assertThisInitialize2.userInput;

      var renderSuggestion = function renderSuggestion(item, i) {
        if (!customRender) {
          return /*#__PURE__*/React__default.createElement("li", {
            className: classnames('suggestion-item', {
              active: _this.filteredData.indexOf(item) === activeSuggestion
            }),
            key: item[filterKey],
            onClick: function onClick(e) {
              return onSuggestionItemClick(item, e);
            },
            onMouseEnter: function onMouseEnter() {
              _this.onSuggestionItemHover(_this.filteredData.indexOf(item));
            }
          }, item[filterKey]);
        } else if (customRender) {
          return customRender(item, i, _this.filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
        } else {
          return null;
        }
      };

      return arr.map(function (item, i) {
        return renderSuggestion(item, i);
      });
    };

    _this.renderUngroupedSuggestions = function () {
      var _this$filteredData;

      var _this$props2 = _this.props,
          filterKey = _this$props2.filterKey,
          suggestions = _this$props2.suggestions,
          customRender = _this$props2.customRender,
          suggestionLimit = _this$props2.suggestionLimit;

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          onSuggestionItemClick = _assertThisInitialize3.onSuggestionItemClick,
          onSuggestionItemHover = _assertThisInitialize3.onSuggestionItemHover,
          _assertThisInitialize4 = _assertThisInitialize3.state,
          activeSuggestion = _assertThisInitialize4.activeSuggestion,
          userInput = _assertThisInitialize4.userInput;

      _this.filteredData = [];
      var sortSingleData = suggestions.filter(function (i) {
        var startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
            includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());

        if (startCondition) {
          return startCondition;
        } else if (!startCondition && includeCondition) {
          return includeCondition;
        } else {
          return null;
        }
      }).slice(0, suggestionLimit);

      (_this$filteredData = _this.filteredData).push.apply(_this$filteredData, sortSingleData);

      return sortSingleData.length ? sortSingleData.map(function (suggestion, index) {
        if (!customRender) {
          return /*#__PURE__*/React__default.createElement("li", {
            className: classnames('suggestion-item', {
              active: _this.filteredData.indexOf(suggestion) === activeSuggestion
            }),
            key: suggestion[filterKey],
            onClick: function onClick(e) {
              return onSuggestionItemClick(suggestion, e);
            },
            onMouseEnter: function onMouseEnter() {
              return _this.onSuggestionItemHover(_this.filteredData.indexOf(suggestion));
            }
          }, suggestion[filterKey]);
        } else if (customRender) {
          return customRender(suggestion, index, _this.filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
        } else {
          return null;
        }
      }) : /*#__PURE__*/React__default.createElement("li", {
        className: "suggestion-item no-result"
      }, /*#__PURE__*/React__default.createElement(Icon.AlertTriangle, {
        size: 15
      }), ' ', /*#__PURE__*/React__default.createElement("span", {
        className: "align-middle ml-50"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: 'common.noResults'
      })));
    };

    _this.renderSuggestions = function () {
      var _this$props3 = _this.props,
          filterKey = _this$props3.filterKey,
          grouped = _this$props3.grouped,
          filterHeaderKey = _this$props3.filterHeaderKey,
          suggestions = _this$props3.suggestions;

      var _assertThisInitialize5 = _assertThisInitialized(_this),
          renderUngroupedSuggestions = _assertThisInitialize5.renderUngroupedSuggestions,
          userInput = _assertThisInitialize5.state.userInput;

      if (grouped === undefined || grouped === null || !grouped) {
        return renderUngroupedSuggestions();
      } else {
        _this.filteredData = [];
        return suggestions.map(function (suggestion) {
          var _this$filteredData2;

          var sortData = suggestion.data.filter(function (i) {
            var startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
                includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());

            if (startCondition) {
              return startCondition;
            } else if (!startCondition && includeCondition) {
              return includeCondition;
            } else {
              return null;
            }
          }).slice(0, suggestion.searchLimit);

          (_this$filteredData2 = _this.filteredData).push.apply(_this$filteredData2, sortData);

          return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
            key: suggestion[filterHeaderKey]
          }, /*#__PURE__*/React__default.createElement("li", {
            className: "suggestion-item suggestion-title text-primary text-bold-600"
          }, suggestion[filterHeaderKey]), sortData.length ? _this.renderGroupedSuggestion(sortData) : /*#__PURE__*/React__default.createElement("li", {
            className: "suggestion-item no-result"
          }, /*#__PURE__*/React__default.createElement(Icon.AlertTriangle, {
            size: 15
          }), ' ', /*#__PURE__*/React__default.createElement("span", {
            className: "align-middle ml-50"
          }, "No Result")));
        });
      }
    };

    _this.clearInput = function (val) {
      if (_this.props.clearInput && !val) {
        _this.setState({
          userInput: ''
        });
      }
    };

    _this.handleExtenalClick = function (e) {
      var container = _this.refs.container;
      var target = e.target;

      if (target !== container && !container.contains(target)) {
        _this.setState({
          showSuggestions: false
        });

        if (_this.props.externalClick) _this.props.externalClick(e);
      }
    };

    _this.state = {
      activeSuggestion: 0,
      showSuggestions: false,
      userInput: '',
      focused: false,
      openUp: false
    };
    _this.filteredData = [];
    document.body.addEventListener('click', _this.handleExtenalClick);
    return _this;
  }

  var _proto = Autocomplete.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var textInput = ReactDOM.findDOMNode(this.input);
    var _this$props4 = this.props,
        autoFocus = _this$props4.autoFocus,
        onSuggestionsShown = _this$props4.onSuggestionsShown,
        clearInput = _this$props4.clearInput;

    if (textInput !== null && autoFocus) {
      textInput.focus();
    }

    if (this.props.defaultSuggestions && prevState.showSuggestions === false && this.state.focused) {
      this.setState({
        showSuggestions: true
      });
    }

    if (clearInput === false && this.state.userInput.length) {
      this.setState({
        userInput: ''
      });
    }

    if (onSuggestionsShown && this.state.showSuggestions) {
      onSuggestionsShown(this.state.userInput);
    }

    if (this.props.defaultSuggestions && prevState.focused === false && this.state.focused === true) {
      this.setState({
        showSuggestions: true
      });
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.defaultSuggestions && this.state.focused) {
      this.setState({
        showSuggestions: true
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeEventListener('click', this.handleExtenalClick);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _onChange = this.onChange,
        _onKeyDown = this.onKeyDown,
        _this$state2 = this.state,
        showSuggestions = _this$state2.showSuggestions,
        userInput = _this$state2.userInput,
        openUp = _this$state2.openUp;
    var suggestionsListComponent;

    if (showSuggestions) {
      suggestionsListComponent = /*#__PURE__*/React__default.createElement(PerfectScrollbar, {
        className: classnames('suggestions-list', {
          'open-up': openUp
        }),
        ref: function ref(el) {
          return _this2.suggestionList = el;
        },
        component: "ul",
        options: {
          wheelPropagation: false
        }
      }, this.renderSuggestions());
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: "vx-autocomplete-container",
      ref: "container"
    }, /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
      className: "form-label-group position-relative"
    }, /*#__PURE__*/React__default.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        _onChange(e);

        if (_this2.props.onChange) {
          _this2.props.onChange(e);
        }
      },
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      value: userInput,
      className: "vx-autocomplete-search " + (this.props.className ? this.props.className : ''),
      placeholder: this.props.placeholder,
      onClick: this.onInputClick,
      ref: function ref(el) {
        return _this2.input = el;
      },
      onFocus: function onFocus(e) {
        _this2.setState({
          focused: true
        });
      },
      autoFocus: this.props.autoFocus,
      onBlur: function onBlur(e) {
        if (_this2.props.onBlur) _this2.props.onBlur(e);

        _this2.setState({
          focused: false
        });
      }
    }), /*#__PURE__*/React__default.createElement(reactstrap.Label, null, this.props.placeholder), suggestionsListComponent));
  };

  return Autocomplete;
}(React__default.Component);
Autocomplete.propTypes = {
  suggestions: PropTypes.array.isRequired,
  filterKey: PropTypes.string.isRequired,
  filterHeaderKey: PropTypes.string,
  placeholder: PropTypes.string,
  suggestionLimit: PropTypes.number,
  grouped: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onSuggestionsShown: PropTypes.func,
  onSuggestionItemClick: PropTypes.func
};

var UserDropdown = function UserDropdown() {
  var history = reactRouterDom.useHistory();
  var dispatch = reactRedux.useDispatch();

  var handleNavigation = function handleNavigation(e, path) {
    e.preventDefault();
    history.push(path);
  };

  var onClickGoToGuestApp = function onClickGoToGuestApp(e) {
    e.preventDefault();
    dispatch(goToGuestApp());
  };

  var onClickLogout = function onClickLogout() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "navbar.logout"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "navbar.logout.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(logoutAction());
      }
    }));
  };

  return /*#__PURE__*/React__default.createElement(reactstrap.DropdownMenu, {
    right: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/account-info');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.User, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.accountInformation"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/change-password');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Lock, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.changePassword"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/share-with-friends');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Link, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.shareWithFriends"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    divider: true
  }), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return onClickGoToGuestApp(e);
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Users, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.goToGuestApp"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    divider: true
  }), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/connect-with-social');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Aperture, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.connectSocial"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/bonus-point');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Target, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.bonusPoint"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    target: '_blank',
    href: TERMS_PDF
  }, /*#__PURE__*/React__default.createElement(Icon.FileText, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.termAndCondition"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    target: '_blank',
    href: POLICY_PDF
  }, /*#__PURE__*/React__default.createElement(Icon.Shield, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.privacyPolicy"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/language');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Globe, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.language"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/help-center');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.HelpCircle, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.helpCenter"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    href: "#",
    onClick: function onClick(e) {
      return handleNavigation(e, '/app/contact');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.MessageSquare, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.contact"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    divider: true
  }), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    onClick: onClickLogout
  }, /*#__PURE__*/React__default.createElement(Icon.Power, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "navbar.logout"
  }))));
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n\n  .dropdown-item {\n    width: 100% !important;\n  }\n\n  .dropleft {\n    .dropdown-menu::before {\n      display: none;\n    }\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  height: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n\n  .media {\n    .notification-icon {\n      border-radius: 50%;\n      background-color: rgb(237 237 237);\n\n      img {\n        width: 50px;\n      }\n    }\n\n    .media-body {\n      width: 150px;\n\n      p {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n\n  .media-unread {\n    color: black;\n    font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var MediaCustom = styled.div(_templateObject());
var CustomImage = styled.img(_templateObject2());
var CustomDropdown = styled.div(_templateObject3());

var Notifications = function Notifications(_ref) {
  var notifications = _ref.notifications,
      openModal = _ref.openModal,
      openDeleteAllModal = _ref.openDeleteAllModal,
      onClickUpdateAllNotifications = _ref.onClickUpdateAllNotifications;
  var dispatch = reactRedux.useDispatch();

  var onClickOpenNotification = function onClickOpenNotification(notification) {
    try {
      openModal(notification);
      dispatch(updateNotification(createNotificationRequest(notification, true)));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onClickUpdateNotification = function onClickUpdateNotification(notification, status) {
    dispatch(updateNotification(createNotificationRequest(notification, status)));
  };

  var createNotificationRequest = function createNotificationRequest(notification, status) {
    var newNotification = {};
    newNotification.id = notification.id;
    newNotification.notificationTemplateHisId = notification.notificationTemplateHisId;
    newNotification.templateId = notification.templateId;

    if (status === 'DELETE') {
      newNotification.read = true;
      newNotification.deleted = true;
    } else {
      newNotification.read = status;
      newNotification.deleted = false;
    }

    return newNotification;
  };

  var getNotificationType = function getNotificationType(item) {
    if (item['notificationType'] === 'SYSTEM') {
      return /*#__PURE__*/React__default.createElement("img", {
        src: "https://sit2.inon.vn/resources/images/system-notification.png",
        alt: "System notification"
      });
    } else if (item['notificationType'] === 'USER') {
      return /*#__PURE__*/React__default.createElement("img", {
        src: "https://sit2.inon.vn/resources/images/user-notification.png",
        alt: "User notification"
      });
    } else return /*#__PURE__*/React__default.createElement("img", {
      src: "https://sit2.inon.vn/resources/images/promotion-notification.png",
      alt: "Promotion notification"
    });
  };

  var getNumberNotifications = function getNumberNotifications(notifications) {
    var notificationsValid = notifications.filter(function (item) {
      return item.deleted === false;
    });
    return notificationsValid.length;
  };

  var getNotificationsValid = function getNotificationsValid(notifications) {
    return notifications.filter(function (item) {
      return item.deleted === false;
    }).sort(function (a, b) {
      return new Date(b.sendDate) - new Date(a.sendDate);
    });
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("li", {
    className: "dropdown-menu-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "dropdown-header mt-0 text-left"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "notification-title"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.notification"
  })), /*#__PURE__*/React__default.createElement("span", null, "(", getNumberNotifications(notifications), ")")), /*#__PURE__*/React__default.createElement("div", {
    className: "cursor-pointer",
    onClick: function onClick() {
      return onClickUpdateAllNotifications(true);
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.readAll"
  }))), /*#__PURE__*/React__default.createElement(PerfectScrollbar, {
    className: "media-list overflow-hidden position-relative",
    options: {
      wheelPropagation: false
    }
  }, getNotificationsValid(notifications).length > 0 ? getNotificationsValid(notifications).map(function (item) {
    return /*#__PURE__*/React__default.createElement(MediaCustom, {
      key: item.id
    }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
      className: item.read === true ? 'media-read' : 'media-unread'
    }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
      left: true
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "notification-icon"
    }, getNotificationType(item))), /*#__PURE__*/React__default.createElement(reactstrap.Media, {
      onClick: function onClick() {
        return onClickOpenNotification(item);
      },
      body: true
    }, /*#__PURE__*/React__default.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.title
      }
    }), /*#__PURE__*/React__default.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.shortContent
      }
    }), /*#__PURE__*/React__default.createElement("small", {
      className: "mt-1"
    }, /*#__PURE__*/React__default.createElement("time", {
      dateTime: item.sendDate
    }, moment().diff(moment(item.sendDate), 'days') >= 1 ? moment(item.sendDate).format("DD/MM/YYYY") : moment(item.sendDate).fromNow()))), /*#__PURE__*/React__default.createElement(reactstrap.Media, {
      right: true,
      className: "cursor-pointer"
    }, /*#__PURE__*/React__default.createElement(CustomDropdown, null, /*#__PURE__*/React__default.createElement(reactstrap.UncontrolledButtonDropdown, {
      direction: "left"
    }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownToggle, {
      tag: "span"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "position-relative"
    }, /*#__PURE__*/React__default.createElement(CustomImage, {
      src: "https://sit2.inon.vn/resources/images/ellipsis-v-solid.png",
      alt: ""
    }))), /*#__PURE__*/React__default.createElement(reactstrap.DropdownMenu, null, item.read ? /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
      onClick: function onClick() {
        return onClickUpdateNotification(item, false);
      }
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "navbar.notifications.markAsUnRead"
    })) : /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
      onClick: function onClick() {
        return onClickUpdateNotification(item, true);
      }
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "navbar.notifications.markAsRead"
    })), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
      onClick: function onClick() {
        return onClickUpdateNotification(item, 'DELETE');
      }
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "navbar.notifications.delete"
    }))))))));
  }) : /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "justify-content-center font-weight-bold"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "navbar.notifications.noNewNotifications"
  }))), getNotificationsValid(notifications).length > 0 && /*#__PURE__*/React__default.createElement("li", {
    className: "dropdown-menu-footer",
    onClick: function onClick() {
      return openDeleteAllModal();
    }
  }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
    tag: "a",
    className: "p-1 text-center"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle font-weight-bold"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.deleteAll"
  })))));
};

var Bells = function Bells() {
  var dispatch = reactRedux.useDispatch();

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.notifications;
  }),
      notifications = _useSelector.notifications;

  var _useState = React.useState(false),
      dropdownOpen = _useState[0],
      setDropdownOpen = _useState[1];

  var _useState2 = React.useState(false),
      notificationModal = _useState2[0],
      setNotificationModal = _useState2[1];

  var _useState3 = React.useState(0),
      numberNewNotification = _useState3[0],
      setNumberNewNotification = _useState3[1];

  var _useState4 = React.useState(null),
      notification = _useState4[0],
      setNotification = _useState4[1];

  var _useState5 = React.useState(false),
      centeredModal = _useState5[0],
      setCenteredModal = _useState5[1];

  React.useEffect(function () {
    dispatch(getMyNotifications());
    var intervalId = setInterval(function () {
      dispatch(getMyNotifications());
    }, 30000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);
  React.useEffect(function () {
    var newNotifications = notifications.filter(function (item) {
      return item.read === false && item.deleted === false;
    });
    setNumberNewNotification(newNotifications.length);
  }, [notifications]);
  React.useEffect(function () {
    var notifications = dispatch(checkReceiveNewNotification());
    checkNewNotifications(notifications);
    var intervalId = setInterval(function () {
      var notifications = dispatch(checkReceiveNewNotification());
      checkNewNotifications(notifications);
    }, 30000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);

  var toggleDropdown = function toggleDropdown() {
    if (!notificationModal) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  var openModal = function openModal(notification) {
    setNotificationModal(true);
    setNotification(notification);
  };

  var openDeleteAllModal = function openDeleteAllModal() {
    setCenteredModal(!centeredModal);
  };

  var checkNewNotifications = function checkNewNotifications(newNotifications) {
    if (newNotifications.length > 0) {
      toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "navbar.notifications.newNotificationNotice"
      }));
    }
  };

  var onClickUpdateAllNotifications = function onClickUpdateAllNotifications(status) {
    var newNotificationsRequest;

    if (status === 'DELETE') {
      newNotificationsRequest = notifications.map(function (item) {
        var notification = {};
        notification.id = item.id;
        notification.deleted = true;
        notification.read = true;
        notification.notificationTemplateHisId = item.notificationTemplateHisId;
        notification.templateId = item.templateId;
        return notification;
      });
    } else {
      newNotificationsRequest = notifications.map(function (item) {
        var notification = {};
        notification.id = item.id;
        notification.read = status;
        notification.deleted = false;
        notification.notificationTemplateHisId = item.notificationTemplateHisId;
        notification.templateId = item.templateId;
        return notification;
      });
    }

    dispatch(updateAllNotifications(newNotificationsRequest, status));
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactstrap.ButtonDropdown, {
    isOpen: dropdownOpen,
    toggle: toggleDropdown,
    tag: "li",
    className: "dropdown-notification nav-item"
  }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownToggle, {
    tag: "a",
    className: "nav-link nav-link-label"
  }, /*#__PURE__*/React__default.createElement(Icon.Bell, {
    className: "text-primary",
    size: 22
  }), /*#__PURE__*/React__default.createElement(reactstrap.Badge, {
    pill: true,
    color: "primary",
    className: "badge-up"
  }, numberNewNotification)), /*#__PURE__*/React__default.createElement(reactstrap.DropdownMenu, {
    tag: "ul",
    right: true,
    className: "dropdown-menu-media"
  }, /*#__PURE__*/React__default.createElement(Notifications, {
    notifications: notifications,
    openModal: openModal,
    openDeleteAllModal: openDeleteAllModal,
    onClickUpdateAllNotifications: onClickUpdateAllNotifications
  }))), notification && /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
    className: "modal-lg modal-dialog-centered custom-modal-notification",
    isOpen: notificationModal
  }, /*#__PURE__*/React__default.createElement(reactstrap.ModalHeader, {
    toggle: function toggle() {
      return setNotificationModal(!notificationModal);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "font-weight-bold",
    dangerouslySetInnerHTML: {
      __html: notification.title
    }
  })), /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, {
    className: "overflow-auto"
  }, /*#__PURE__*/React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: notification.content
    }
  }))), /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
    isOpen: centeredModal,
    toggle: function toggle() {
      return setCenteredModal(!centeredModal);
    },
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.confirmDeleteAll"
  })), /*#__PURE__*/React__default.createElement(reactstrap.ModalFooter, null, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    color: "primary",
    onClick: function onClick() {
      onClickUpdateAllNotifications('DELETE');
      setCenteredModal(!centeredModal);
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.ok"
  })), ' ', /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    onClick: function onClick() {
      return setCenteredModal(!centeredModal);
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.cancel"
  })))));
};

var NavbarUser = function NavbarUser(props) {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth.user;
  }),
      userSettings = _useSelector.userSettings,
      user = _objectWithoutPropertiesLoose(_useSelector, ["userSettings", "userDetails"]);

  var _useSelector2 = reactRedux.useSelector(function (state) {
    return state.customizer;
  });

  var _useSelector3 = reactRedux.useSelector(function (state) {
    return state.navbar;
  }),
      _useSelector3$roles = _useSelector3.roles,
      roles = _useSelector3$roles === void 0 ? [] : _useSelector3$roles;

  var _useState = React.useState(false),
      navbarSearch = _useState[0],
      setNavbarSearch = _useState[1];

  var _useState2 = React.useState([]),
      suggestions = _useState2[0],
      setSuggestions = _useState2[1];

  var intl = reactIntl.useIntl();
  userSettings = userSettings || {};
  React.useEffect(function () {
    var roleData = [];

    if (Array.isArray(roles)) {
      roleData = [].concat(roles);
    }

    var newSuggestions = roleData.map(function (item) {
      item.name = intl.formatMessage({
        id: "menu." + item.keyLang
      });
      item.isExternalApp = false;
      item.navLinkExternal = getExternalAppUrl(item.appId, item.menuPath);
      return item;
    });
    setSuggestions(newSuggestions);
  }, [roles]);

  var handleNavbarSearch = function handleNavbarSearch() {
    setNavbarSearch(function (prevState) {
      return !prevState;
    });
  };

  var onSuggestionItemClick = function onSuggestionItemClick(item) {
    if (!item.isExternalApp) {
      history.push(item.navLinkExternal);
    } else {
      window.location.href = item.navLinkExternal;
    }
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("ul", {
    className: "nav navbar-nav navbar-nav-user float-right"
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavItem, {
    className: "nav-search",
    onClick: handleNavbarSearch
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: "nav-link-search pt-2"
  }, /*#__PURE__*/React__default.createElement(Icon.Search, {
    size: 21,
    "data-tour": "search"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classnames('search-input', {
      open: navbarSearch,
      'd-none': navbarSearch === false
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "search-input-icon"
  }, /*#__PURE__*/React__default.createElement(Icon.Search, {
    size: 17,
    className: "primary"
  })), /*#__PURE__*/React__default.createElement(Autocomplete, {
    className: "form-control",
    suggestions: suggestions,
    filterKey: "name",
    onSuggestionClick: onSuggestionItemClick,
    autoFocus: true,
    clearInput: navbarSearch,
    externalClick: function externalClick() {
      setNavbarSearch(false);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 27 || e.keyCode === 13) {
        setNavbarSearch(false);
        props.handleAppOverlay('');
      }
    },
    customRender: function customRender(item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) {
      var IconTag = Icon[item.icon ? item.icon : 'X'];
      return /*#__PURE__*/React__default.createElement("li", {
        className: classnames('suggestion-item', {
          active: filteredData.indexOf(item) === activeSuggestion
        }),
        key: i,
        onClick: function onClick(e) {
          return onSuggestionItemClick(item, e);
        },
        onMouseEnter: function onMouseEnter() {
          return onSuggestionItemHover(filteredData.indexOf(item));
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/React__default.createElement(IconTag, {
        size: 17
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "ml-2"
      }, item.name)));
    },
    onSuggestionsShown: function onSuggestionsShown(userInput) {
      if (navbarSearch) {
        props.handleAppOverlay(userInput);
      }
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "search-input-close"
  }, /*#__PURE__*/React__default.createElement(Icon.X, {
    size: 24,
    onClick: function onClick(e) {
      e.stopPropagation();
      setNavbarSearch(false);
      props.handleAppOverlay('');
    }
  })))), /*#__PURE__*/React__default.createElement(Bells, null), /*#__PURE__*/React__default.createElement(reactstrap.UncontrolledDropdown, {
    tag: "li",
    className: "dropdown-user nav-item"
  }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownToggle, {
    tag: "a",
    className: "nav-link dropdown-user-link"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "user-nav d-sm-flex d-none"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "user-name text-bold-600 mb-0"
  }, user.fullName)), /*#__PURE__*/React__default.createElement("span", {
    "data-tour": "user"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: userSettings.avatar || '',
    className: "round",
    height: "40",
    width: "40",
    alt: "avatar"
  }))), /*#__PURE__*/React__default.createElement(UserDropdown, null))));
};

var ThemeNavbar = function ThemeNavbar(props) {
  var colorsArr = ['primary', 'danger', 'success', 'info', 'warning', 'dark'];
  var navbarTypes = ['floating', 'static', 'sticky', 'hidden'];
  var history = reactRouterDom.useHistory();

  var onClickRedirectToPage = function onClickRedirectToPage(item) {
    switch (item) {
      case "plane":
        history.replace('/app/help-center');
        break;

      case "bus":
        history.replace('/app/help-center');
        break;

      case "personal":
        history.replace('/app/help-center');
        break;

      case "motor":
        history.replace('/app/help-center');
        break;

      case "car":
        history.replace('/app/help-center');
        break;

      case "help-center":
        history.replace('/app/help-center');
        break;

      case "support 24/7":
        history.replace('/app/support/create-request');
        break;
    }
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "content-overlay"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "header-navbar-shadow"
  }), /*#__PURE__*/React__default.createElement(reactstrap.Navbar, {
    className: classnames('header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow', {
      'navbar-light': props.navbarColor === 'default' || !colorsArr.includes(props.navbarColor),
      'navbar-dark': colorsArr.includes(props.navbarColor),
      'bg-primary': props.navbarColor === 'primary' && props.navbarType !== 'static',
      'bg-danger': props.navbarColor === 'danger' && props.navbarType !== 'static',
      'bg-success': props.navbarColor === 'success' && props.navbarType !== 'static',
      'bg-info': props.navbarColor === 'info' && props.navbarType !== 'static',
      'bg-warning': props.navbarColor === 'warning' && props.navbarType !== 'static',
      'bg-dark': props.navbarColor === 'dark' && props.navbarType !== 'static',
      'd-none': props.navbarType === 'hidden' && !props.horizontal,
      'floating-nav': props.navbarType === 'floating' && !props.horizontal || !navbarTypes.includes(props.navbarType) && !props.horizontal,
      'navbar-static-top': props.navbarType === 'static' && !props.horizontal,
      'fixed-top': props.navbarType === 'sticky' || props.horizontal,
      scrolling: props.horizontal && props.scrolling
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "navbar-wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "navbar-container content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "navbar-collapse d-flex justify-content-between align-items-center",
    id: "navbar-mobile"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bookmark-wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "mr-auto float-left bookmark-wrapper d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "navbar-nav d-xl-none"
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavItem, {
    className: "mobile-menu mr-auto"
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: "nav-menu-main menu-toggle hidden-xs is-active",
    onClick: props.sidebarVisibility
  }, /*#__PURE__*/React__default.createElement(Icon.Menu, {
    className: "ficon"
  })))), /*#__PURE__*/React__default.createElement("ul", {
    className: "nav navbar-nav d-none d-xl-flex bookmark-icons"
  }, NAV_ICONS.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement(reactstrap.NavItem, {
      key: index
    }, /*#__PURE__*/React__default.createElement("img", {
      onClick: function onClick() {
        return onClickRedirectToPage(item);
      },
      style: {
        width: '58px',
        height: '58px'
      },
      className: "img-fluid cursor-pointer",
      src: IMAGE["NAV_ICON_" + (index + 1)],
      alt: ""
    }));
  })))), /*#__PURE__*/React__default.createElement(NavbarUser, {
    handleAppOverlay: props.handleAppOverlay
  }))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: !!state.auth.name,
    roles: state.navbar.roles,
    authToken: state.auth.authToken
  };
};

var Navbar = reactRedux.connect(mapStateToProps, {
  logoutAction: logoutAction
})(ThemeNavbar);

function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}

function useWindowDimensions() {
  var _useState = React.useState(getWindowDimensions()),
      windowDimensions = _useState[0],
      setWindowDimensions = _useState[1];

  React.useEffect(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowDimensions;
}

var Footer = function Footer(props) {
  var _useState = React.useState(false),
      footerHide = _useState[0],
      setfooterHide = _useState[1];

  var _useState2 = React.useState(window.innerHeight),
      currentHeight = _useState2[0];

  var _useWindowDimensions = useWindowDimensions(),
      width = _useWindowDimensions.width;

  var history = reactRouterDom.useHistory();
  var dispatch = reactRedux.useDispatch();

  var goToPage = function goToPage(e, navLink) {
    history.push(navLink);
  };

  var onClickBackHome = function onClickBackHome(e) {
    e.preventDefault();
    dispatch(goBackHomePage());
  };

  React__default.useEffect(function () {
    var footerHideCallback = function footerHideCallback() {
      if (window.innerHeight !== currentHeight) {
        setfooterHide(true);
        return;
      }

      setfooterHide(false);
    };

    window.addEventListener('resize', footerHideCallback);
    return function () {
      window.removeEventListener("resize", footerHideCallback);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("footer", {
    className: "w-100 justify-content-end " + (footerHide ? 'd-none' : 'd-flex')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classnames('footer footer-light', {
      'd-none': width < MAX_MOBILE_WIDTH
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "float-md-left d-block d-md-inline-block mt-25"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "footer.copyRight",
    values: {
      year: new Date().getFullYear()
    }
  })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "footer.companySlogan"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "float-md-right d-none d-md-block"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "mr-1",
    href: IOS_APP_LINK,
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: IMAGE.DOWNLOAD_APP_IOS,
    alt: "DOWNLOAD ON APP STORE"
  })), /*#__PURE__*/React__default.createElement("a", {
    href: ANDROID_APP_LINK,
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: IMAGE.DOWNLOAD_APP_ANDROID,
    alt: "DOWNLOAD ON APP I"
  }))))), /*#__PURE__*/React__default.createElement("div", {
    className: classnames('footer footer-light footer-mobile text-center', {
      'd-none': width >= MAX_MOBILE_WIDTH
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: onClickBackHome
  }, /*#__PURE__*/React__default.createElement(Icon.Home, null), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.home"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: function onClick(e) {
      return goToPage(e, '/insurance/contracts');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.List, null), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.contract"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "position-relative w-25"
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: function onClick(e) {
      return goToPage(e, '/insurance/buy-insurance');
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: IMAGE.BUY_INSURANCE,
    className: "buy-insurance",
    alt: ""
  }), /*#__PURE__*/React__default.createElement(Icon.PlusCircle, {
    style: {
      visibility: 'hidden'
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.buyInsurance"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: onClickBackHome
  }, /*#__PURE__*/React__default.createElement(Icon.Gift, null), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "menu.promotion"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: function onClick(e) {
      return history.push('/app/contact');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.MessageSquare, null), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.contact"
  }))))), props.hideScrollToTop === false ? /*#__PURE__*/React__default.createElement(ScrollToTop, {
    showUnder: 160
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    color: "primary",
    className: "btn-icon scroll-top d-none d-md-block"
  }, /*#__PURE__*/React__default.createElement(Icon.ArrowUp, {
    size: 15
  }))) : null);
};

var changeTheme = function changeTheme(theme) {
  return function (dispatch) {
    return dispatch({
      type: "CHANGE_THEME",
      theme: theme
    });
  };
};
var setAppId = function setAppId(appId) {
  return function (dispatch) {
    return dispatch({
      type: "SET_APP_ID",
      appId: appId
    });
  };
};
var collapseSidebar = function collapseSidebar(value) {
  return function (dispatch) {
    return dispatch({
      type: "COLLAPSE_SIDEBAR",
      value: value
    });
  };
};
var changeNavbarColor = function changeNavbarColor(color) {
  return function (dispatch) {
    return dispatch({
      type: "CHANGE_NAVBAR_COLOR",
      color: color
    });
  };
};
var changeNavbarType = function changeNavbarType(style) {
  return function (dispatch) {
    return dispatch({
      type: "CHANGE_NAVBAR_TYPE",
      style: style
    });
  };
};
var changeFooterType = function changeFooterType(style) {
  return function (dispatch) {
    return dispatch({
      type: "CHANGE_FOOTER_TYPE",
      style: style
    });
  };
};
var changeMenuColor = function changeMenuColor(style) {
  return function (dispatch) {
    return dispatch({
      type: "CHANGE_MENU_COLOR",
      style: style
    });
  };
};
var hideScrollToTop = function hideScrollToTop(value) {
  return function (dispatch) {
    return dispatch({
      type: "HIDE_SCROLL_TO_TOP",
      value: value
    });
  };
};

var SidebarHeader = function SidebarHeader(props) {
  var toggleSidebarMenu = props.toggleSidebarMenu,
      activeTheme = props.activeTheme,
      collapsed = props.collapsed,
      toggle = props.toggle,
      sidebarVisibility = props.sidebarVisibility,
      menuShadow = props.menuShadow;
  var dispatch = reactRedux.useDispatch();

  var onClickHome = function onClickHome() {
    dispatch(goBackHomePage());
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "navbar-header"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "nav navbar-nav flex-row"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "nav-item my-auto mr-auto cursor-pointer",
    onClick: onClickHome
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "img-fluid logo-img",
    src: IMAGE.LOGO_NO_TEXT,
    alt: "logo"
  }), /*#__PURE__*/React__default.createElement("img", {
    className: "img-fluid logo-text",
    src: IMAGE.LOGO_TEXT,
    alt: "logo"
  })), /*#__PURE__*/React__default.createElement("li", {
    className: "nav-item nav-toggle"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "nav-link modern-nav-toggle"
  }, collapsed === false ? /*#__PURE__*/React__default.createElement(Icon.Disc, {
    onClick: function onClick() {
      toggleSidebarMenu(true);
      toggle();
    },
    className: classnames('toggle-icon icon-x d-none d-xl-block font-medium-4', {
      'text-primary': activeTheme === 'primary',
      'text-success': activeTheme === 'success',
      'text-danger': activeTheme === 'danger',
      'text-info': activeTheme === 'info',
      'text-warning': activeTheme === 'warning',
      'text-dark': activeTheme === 'dark'
    }),
    size: 20,
    "data-tour": "toggle-icon"
  }) : /*#__PURE__*/React__default.createElement(Icon.Circle, {
    onClick: function onClick() {
      toggleSidebarMenu(false);
      toggle();
    },
    className: classnames('toggle-icon icon-x d-none d-xl-block font-medium-4', {
      'text-primary': activeTheme === 'primary',
      'text-success': activeTheme === 'success',
      'text-danger': activeTheme === 'danger',
      'text-info': activeTheme === 'info',
      'text-warning': activeTheme === 'warning',
      'text-dark': activeTheme === 'dark'
    }),
    size: 20
  }), /*#__PURE__*/React__default.createElement(Icon.X, {
    onClick: sidebarVisibility,
    className: classnames('toggle-icon icon-x d-block d-xl-none font-medium-4', {
      'text-primary': activeTheme === 'primary',
      'text-success': activeTheme === 'success',
      'text-danger': activeTheme === 'danger',
      'text-info': activeTheme === 'info',
      'text-warning': activeTheme === 'warning',
      'text-dark': activeTheme === 'dark'
    }),
    size: 20
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: classnames('shadow-bottom', {
      'd-none': menuShadow === false
    })
  }));
};

var SideMenuGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SideMenuGroup, _React$Component);

  function SideMenuGroup(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      isOpen: false,
      activeItem: _this.props.activePath
    };

    _this.handleActiveItem = function (url) {
      _this.setState({
        activeItem: url
      });
    };

    _this.flag = true;
    _this.parentArray = [];
    _this.childObj = {};
    return _this;
  }

  var _proto = SideMenuGroup.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.activePath !== this.props.activePath) {
      if (this.childObj.navLink && this.childObj.collapsed) {
        this.props.collapsedMenuPaths(this.childObj.navLink);
      }

      if (this.props.activePath === this.childObj.navLink && !this.props.parentArr.includes(this.parentArray[0])) {
        this.props.parentArr.splice(0, this.props.parentArr.length);
        this.props.parentArr.push(this.parentArray);
      } else if (this.props.parentArr.includes(this.parentArray)) {
        this.props.parentArr.splice(0, this.props.parentArr.length);
      }
    }
  };

  _proto.renderChild = function renderChild(item, activeGroup, handleGroupClick, handleActiveItem, parent) {
    var _this2 = this;

    return /*#__PURE__*/React__default.createElement("ul", {
      className: "menu-content"
    }, item.children ? item.children.map(function (child) {
      var CustomAnchorTag = child.isExternalApp ? "a" : reactRouterDom.Link;

      if (!_this2.parentArray.includes(item.id) && _this2.flag) {
        _this2.parentArray.push(item.id);
      }

      if (child.navlink && child.collapsed) {
        _this2.props.collapsedMenuPaths(child.navLink);
      }

      if (_this2.props.activeItemState === child.navLink) {
        _this2.childObj = child;

        _this2.props.parentArr.push(_this2.parentArray);

        _this2.flag = false;
      }

      if (child.permissions && child.permissions.includes(_this2.props.currentUser) || child.permissions === undefined) {
        return /*#__PURE__*/React__default.createElement("li", {
          key: child.id,
          className: classnames({
            hover: _this2.props.hoverIndex === child.id,
            'has-sub': child.type === 'collapse',
            open: child.type === 'collapse' && activeGroup.includes(child.id),
            'sidebar-group-active': _this2.props.currentActiveGroup.includes(child.id),
            active: _this2.props.activeItemState === child.navLink && child.type === 'item' || item.parentOf && item.parentOf.includes(_this2.props.activeItemState),
            disabled: child.disabled
          }),
          onClick: function onClick(e) {
            e.stopPropagation();
            handleGroupClick(child.id, item.id, child.type);

            if (child.navLink && child.navLink !== undefined) {
              handleActiveItem(child.navLink);
            }

            if (_this2.props.deviceWidth <= 1200 && child.type === 'item') {
              _this2.props.toggleMenu();
            }
          }
        }, /*#__PURE__*/React__default.createElement(CustomAnchorTag, {
          className: classnames({
            'd-flex justify-content-between': child.type === 'collapse'
          }),
          to: child.navLink && child.type === 'item' ? child.navLink : '',
          href: _this2.props.getItemLink(child),
          onMouseEnter: function onMouseEnter() {
            _this2.props.handleSidebarMouseEnter(child.id);
          },
          onMouseLeave: function onMouseLeave() {
            _this2.props.handleSidebarMouseEnter(child.id);
          },
          key: child.id,
          onClick: function onClick(e) {
            return child.type === 'collapse' ? e.preventDefault() : '';
          },
          target: child.newTab ? '_blank' : undefined
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "menu-text"
        }, child.icon, /*#__PURE__*/React__default.createElement("span", {
          className: "menu-item menu-title"
        }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: child.title
        }))), child.badge ? /*#__PURE__*/React__default.createElement(reactstrap.Badge, {
          color: child.badge,
          className: "float-right mr-2",
          pill: true
        }, child.badgeText) : '', child.type === 'collapse' ? /*#__PURE__*/React__default.createElement(Icon.ChevronRight, {
          className: "menu-toggle-icon",
          size: 13
        }) : ''), child.children ? _this2.renderChild(child, activeGroup, handleGroupClick, handleActiveItem, item.id) : '');
      } else if (child.navLink === _this2.props.activePath && !child.permissions.includes(_this2.props.currentUser)) {
        return _this2.props.redirectUnauthorized();
      } else {
        return null;
      }
    }) : null);
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderChild(this.props.group, this.props.activeGroup, this.props.handleGroupClick, this.props.handleActiveItem, null));
  };

  return SideMenuGroup;
}(React__default.Component);

var SideMenuContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SideMenuContent, _React$Component);

  function SideMenuContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      flag: true,
      isHovered: false,
      activeGroups: [],
      currentActiveGroup: [],
      tempArr: []
    };

    _this.handleGroupClick = function (id, parent, type) {
      if (parent === void 0) {
        parent = null;
      }

      if (type === void 0) {
        type = '';
      }

      var open_group = _this.state.activeGroups;
      var active_group = _this.state.currentActiveGroup;
      var temp_arr = _this.state.tempArr;

      if (type === 'item' && parent === null) {
        active_group = [];
        temp_arr = [];
      } else if (type === 'item' && parent !== null) {
        active_group = [];

        if (temp_arr.includes(parent)) {
          temp_arr.splice(temp_arr.indexOf(parent) + 1, temp_arr.length);
        } else {
          temp_arr = [];
          temp_arr.push(parent);
        }

        active_group = temp_arr.slice(0);
      } else if (type === 'collapse' && parent === null) {
        temp_arr = [];
        temp_arr.push(id);
      } else if (type === 'collapse' && parent !== null) {
        if (active_group.includes(parent)) {
          temp_arr = active_group.slice(0);
        }

        if (temp_arr.includes(id)) {
          temp_arr.splice(temp_arr.indexOf(id), temp_arr.length);
        } else {
          temp_arr.push(id);
        }
      } else {
        temp_arr = [];
      }

      if (type === 'collapse') {
        if (!open_group.includes(id)) {
          var temp = open_group.filter(function (obj) {
            return active_group.indexOf(obj) === -1;
          });

          if (temp.length > 0 && !open_group.includes(parent)) {
            open_group = open_group.filter(function (obj) {
              return !temp.includes(obj);
            });
          }

          if (open_group.includes(parent) && active_group.includes(parent)) {
            open_group = active_group.slice(0);
          }

          if (!open_group.includes(id)) {
            open_group.push(id);
          }
        } else {
          open_group.splice(open_group.indexOf(id), 1);
        }
      }

      if (type === 'item') {
        open_group = active_group.slice(0);
      }

      _this.setState({
        activeGroups: open_group,
        tempArr: temp_arr,
        currentActiveGroup: active_group
      });
    };

    _this.initRender = function (parentArr) {
      _this.setState({
        activeGroups: parentArr.slice(0),
        currentActiveGroup: parentArr.slice(0),
        flag: false
      });
    };

    _this.getItemLink = function (item) {
      return item.isExternalApp ? getExternalAppUrl(item.appId, item.navLink) : '';
    };

    _this.parentArr = [];
    _this.collapsedPath = null;
    return _this;
  }

  var _proto = SideMenuContent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.initRender(this.parentArr[0] || []);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.activePath !== this.props.activePath || prevProps.navConfigs !== this.props.navConfigs) {
      if (this.collapsedMenuPaths !== null) {
        this.props.collapsedMenuPaths(this.collapsedMenuPaths);
      }

      this.initRender(this.parentArr[0] ? this.parentArr[this.parentArr.length - 1] : []);
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var menuItems = this.props.navConfigs.map(function (item) {
      var CustomAnchorTag = item.isExternalApp ? "a" : reactRouterDom.Link;

      if (item.type === 'groupHeader') {
        return /*#__PURE__*/React__default.createElement("li", {
          className: "navigation-header",
          key: "group-header-" + item.groupTitle
        }, /*#__PURE__*/React__default.createElement("span", null, item.groupTitle));
      }

      var renderItem = /*#__PURE__*/React__default.createElement("li", {
        className: classnames('nav-item', {
          'has-sub': item.type === 'collapse',
          open: _this2.state.activeGroups.includes(item.id),
          'sidebar-group-active': _this2.state.currentActiveGroup.includes(item.id),
          hover: _this2.props.hoverIndex === item.id,
          active: _this2.props.activeItemState === item.navLink && item.type === 'item' || item.parentOf && item.parentOf.includes(_this2.props.activeItemState),
          disabled: item.disabled
        }),
        key: item.id,
        onClick: function onClick(e) {
          e.stopPropagation();

          if (item.type === 'item') {
            _this2.props.handleActiveItem(item.navLink);

            _this2.handleGroupClick(item.id, null, item.type);

            if (_this2.props.deviceWidth <= 1200 && item.type === 'item') {
              _this2.props.toggleMenu();
            }
          } else {
            _this2.handleGroupClick(item.id, null, item.type);
          }
        }
      }, /*#__PURE__*/React__default.createElement(CustomAnchorTag, {
        to: item.filterBase ? item.filterBase : item.navLink && item.type === 'item' ? item.navLink : '',
        href: _this2.getItemLink(item),
        className: "d-flex " + (item.badgeText ? 'justify-content-between' : 'justify-content-start'),
        onMouseEnter: function onMouseEnter() {
          _this2.props.handleSidebarMouseEnter(item.id);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.props.handleSidebarMouseEnter(item.id);
        },
        key: item.id,
        onClick: function onClick(e) {
          return item.type === 'collapse' ? e.preventDefault() : '';
        },
        target: item.newTab ? '_blank' : undefined
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "menu-text"
      }, item.icon, /*#__PURE__*/React__default.createElement("span", {
        className: "menu-item menu-title"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: item.title,
        defaultMessage: item.description
      }))), item.badge ? /*#__PURE__*/React__default.createElement("div", {
        className: "menu-badge"
      }, /*#__PURE__*/React__default.createElement(reactstrap.Badge, {
        color: item.badge,
        className: "mr-1",
        pill: true
      }, item.badgeText)) : '', item.type === 'collapse' ? /*#__PURE__*/React__default.createElement(Icon.ChevronRight, {
        className: "menu-toggle-icon",
        size: 13
      }) : ''), item.type === 'collapse' ? /*#__PURE__*/React__default.createElement(SideMenuGroup, {
        group: item,
        handleGroupClick: _this2.handleGroupClick,
        activeGroup: _this2.state.activeGroups,
        handleActiveItem: _this2.props.handleActiveItem,
        activeItemState: _this2.props.activeItemState,
        handleSidebarMouseEnter: _this2.props.handleSidebarMouseEnter,
        activePath: _this2.props.activePath,
        hoverIndex: _this2.props.hoverIndex,
        initRender: _this2.initRender,
        parentArr: _this2.parentArr,
        triggerActive: undefined,
        currentActiveGroup: _this2.state.currentActiveGroup,
        getItemLink: _this2.getItemLink,
        permission: _this2.props.permission,
        currentUser: _this2.props.currentUser,
        redirectUnauthorized: _this2.redirectUnauthorized,
        collapsedMenuPaths: _this2.props.collapsedMenuPaths,
        toggleMenu: _this2.props.toggleMenu,
        deviceWidth: _this2.props.deviceWidth
      }) : '');

      if (item.navLink && item.collapsed !== undefined && item.collapsed === true) {
        _this2.collapsedPath = item.navLink;

        _this2.props.collapsedMenuPaths(item.navLink);
      }

      if (item.type === 'collapse' || item.type === 'external-link' || item.type === 'item' && item.permissions && item.permissions.includes(_this2.props.currentUser.role) || item.permissions === undefined) {
        return renderItem;
      } else if (item.type === 'item' && item.navLink === _this2.props.activePath && !item.permissions.includes(_this2.props.currentUser.role)) {
        return _this2.redirectUnauthorized();
      }
    });
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, menuItems);
  };

  return SideMenuContent;
}(React__default.Component);

var Sidebar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Sidebar, _Component);

  function Sidebar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      width: window.innerWidth,
      activeIndex: null,
      hoveredMenuItem: null,
      activeItem: _this.props.activePath,
      menuShadow: false,
      ScrollbarTag: PerfectScrollbar
    };
    _this.mounted = false;

    _this.updateWidth = function () {
      if (_this.mounted) {
        _this.setState(function (prevState) {
          return {
            width: window.innerWidth
          };
        });

        _this.checkDevice();
      }
    };

    _this.checkDevice = function () {
      var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");

      var mq = function mq(query) {
        return window.matchMedia(query).matches;
      };

      if ("ontouchstart" in window || window.DocumentTouch) {
        _this.setState({
          ScrollbarTag: "div"
        });
      } else {
        _this.setState({
          ScrollbarTag: PerfectScrollbar
        });
      }

      var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
      return mq(query);
    };

    _this.changeActiveIndex = function (id) {
      if (id !== _this.state.activeIndex) {
        _this.setState({
          activeIndex: id
        });
      } else {
        _this.setState({
          activeIndex: null
        });
      }
    };

    _this.handleSidebarMouseEnter = function (id) {
      if (id !== _this.state.hoveredMenuItem) {
        _this.setState({
          hoveredMenuItem: id
        });
      } else {
        _this.setState({
          hoveredMenuItem: null
        });
      }
    };

    _this.handleActiveItem = function (url) {
      _this.setState({
        activeItem: url
      });
    };

    return _this;
  }

  Sidebar.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.activePath !== state.activeItem) {
      return {
        activeItem: props.activePath
      };
    }

    return null;
  };

  var _proto = Sidebar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;

    if (this.mounted) {
      if (window !== "undefined") {
        window.addEventListener("resize", this.updateWidth, false);
      }

      this.checkDevice();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        toggleSidebarMenu = _this$props.toggleSidebarMenu,
        visibilityState = _this$props.visibilityState,
        sidebarHover = _this$props.sidebarHover,
        toggle = _this$props.toggle,
        color = _this$props.color,
        sidebarVisibility = _this$props.sidebarVisibility,
        activeTheme = _this$props.activeTheme,
        collapsed = _this$props.collapsed,
        activePath = _this$props.activePath,
        sidebarState = _this$props.sidebarState,
        currentLang = _this$props.currentLang,
        permission = _this$props.permission,
        currentUser = _this$props.currentUser,
        collapsedMenuPaths = _this$props.collapsedMenuPaths;
    var _this$state = this.state,
        menuShadow = _this$state.menuShadow,
        activeIndex = _this$state.activeIndex,
        hoveredMenuItem = _this$state.hoveredMenuItem,
        activeItem = _this$state.activeItem,
        ScrollbarTag = _this$state.ScrollbarTag;

    var scrollShadow = function scrollShadow(container, dir) {
      if (container && dir === "up" && container.scrollTop >= 100) {
        _this2.setState({
          menuShadow: true
        });
      } else if (container && dir === "down" && container.scrollTop < 100) {
        _this2.setState({
          menuShadow: false
        });
      } else {
        return;
      }
    };

    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Hammer, {
      onSwipe: function onSwipe(e) {
        sidebarVisibility();
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "menu-swipe-area d-xl-none d-block vh-100"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: classnames("main-menu menu-fixed menu-light menu-accordion menu-shadow theme-" + activeTheme, {
        collapsed: sidebarState === true,
        "hide-sidebar": this.state.width < 1200 && visibilityState === false
      }),
      onMouseEnter: function onMouseEnter() {
        return sidebarHover(false);
      },
      onMouseLeave: function onMouseLeave() {
        return sidebarHover(true);
      }
    }, /*#__PURE__*/React__default.createElement(SidebarHeader, {
      toggleSidebarMenu: toggleSidebarMenu,
      toggle: toggle,
      sidebarBgColor: color,
      sidebarVisibility: sidebarVisibility,
      activeTheme: activeTheme,
      collapsed: collapsed,
      menuShadow: menuShadow,
      activePath: activePath
    }), /*#__PURE__*/React__default.createElement(ScrollbarTag, _extends({
      className: classnames("main-menu-content", {
        "overflow-hidden": ScrollbarTag !== "div"
      }),
      style: {
        overflowY: "scroll"
      }
    }, ScrollbarTag !== "div" && {
      options: {
        wheelPropagation: false
      },
      onScrollDown: function onScrollDown(container) {
        return scrollShadow(container, "down");
      },
      onScrollUp: function onScrollUp(container) {
        return scrollShadow(container, "up");
      },
      onYReachStart: function onYReachStart() {
        return menuShadow === true && _this2.setState({
          menuShadow: false
        });
      }
    }), /*#__PURE__*/React__default.createElement(Hammer, {
      onSwipe: function onSwipe() {
        sidebarVisibility();
      }
    }, /*#__PURE__*/React__default.createElement("ul", {
      className: "navigation navigation-main"
    }, /*#__PURE__*/React__default.createElement(SideMenuContent, {
      setActiveIndex: this.changeActiveIndex,
      activeIndex: activeIndex,
      hoverIndex: hoveredMenuItem,
      handleSidebarMouseEnter: this.handleSidebarMouseEnter,
      activeItemState: activeItem,
      handleActiveItem: this.handleActiveItem,
      activePath: activePath,
      lang: currentLang,
      permission: permission,
      currentUser: currentUser,
      collapsedMenuPaths: collapsedMenuPaths,
      toggleMenu: sidebarVisibility,
      deviceWidth: this.props.deviceWidth,
      navConfigs: this.props.navConfigs
    }))))));
  };

  return Sidebar;
}(React.Component);

var mapStateToProps$1 = function mapStateToProps(state) {
  return {
    currentUser: state.auth,
    appId: state.customizer.appId,
    navConfigs: state.navbar.navConfigs
  };
};

var Sidebar$1 = reactRedux.connect(mapStateToProps$1)(Sidebar);

var Layout = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Layout, _PureComponent);

  function Layout() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      width: window.innerWidth,
      sidebarState: _this.props.customizer.sidebarCollapsed,
      layout: _this.props.customizer.theme,
      collapsedContent: _this.props.customizer.sidebarCollapsed,
      sidebarHidden: false,
      currentLang: 'en',
      appOverlay: false,
      customizer: false,
      currRoute: ''
    };
    _this.collapsedPaths = [];
    _this.mounted = false;

    _this.updateWidth = function () {
      if (_this.mounted) {
        _this.setState(function (prevState) {
          return {
            width: window.innerWidth
          };
        });
      }
    };

    _this.handleCustomizer = function (bool) {
      _this.setState({
        customizer: bool
      });
    };

    _this.handleCollapsedMenuPaths = function (item) {
      var collapsedPaths = _this.collapsedPaths;

      if (!collapsedPaths.includes(item)) {
        collapsedPaths.push(item);
        _this.collapsedPaths = collapsedPaths;
      }
    };

    _this.toggleSidebarMenu = function (val) {
      _this.setState({
        sidebarState: !_this.state.sidebarState,
        collapsedContent: !_this.state.collapsedContent
      });
    };

    _this.sidebarMenuHover = function (val) {
      _this.setState({
        sidebarState: val
      });
    };

    _this.handleSidebarVisibility = function () {
      if (_this.mounted) {
        if (window !== undefined) {
          window.addEventListener('resize', function () {
            if (_this.state.sidebarHidden) {
              _this.setState({
                sidebarHidden: !_this.state.sidebarHidden
              });
            }
          });
        }

        _this.setState({
          sidebarHidden: !_this.state.sidebarHidden
        });
      }
    };

    _this.handleCurrentLanguage = function (lang) {
      _this.setState({
        currentLang: lang
      });
    };

    _this.handleAppOverlay = function (value) {
      if (value.length > 0) {
        _this.setState({
          appOverlay: true
        });
      } else if (value.length < 0 || value === '') {
        _this.setState({
          appOverlay: false
        });
      }
    };

    _this.handleAppOverlayClick = function () {
      _this.setState({
        appOverlay: false
      });
    };

    return _this;
  }

  var _proto = Layout.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    var _this$props = this.props,
        pathname = _this$props.location.pathname,
        _this$props$customize = _this$props.customizer,
        theme = _this$props$customize.theme,
        direction = _this$props$customize.direction;

    if (this.mounted) {
      if (window !== 'undefined') {
        window.addEventListener('resize', this.updateWidth, false);
      }

      if (this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true);
      }

      var layout = theme;
      var dir = direction;
      if (dir === 'rtl') document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');else document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      return layout === 'dark' ? document.body.classList.add('dark-layout') : layout === 'semi-dark' ? document.body.classList.add('semi-dark-layout') : null;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props2 = this.props,
        pathname = _this$props2.location.pathname,
        _this$props2$customiz = _this$props2.customizer,
        theme = _this$props2$customiz.theme,
        sidebarCollapsed = _this$props2$customiz.sidebarCollapsed;
    var layout = theme;

    if (this.mounted) {
      if (layout === 'dark') {
        document.body.classList.remove('semi-dark-layout');
        document.body.classList.add('dark-layout');
      }

      if (layout === 'semi-dark') {
        document.body.classList.remove('dark-layout');
        document.body.classList.add('semi-dark-layout');
      }

      if (layout !== 'dark' && layout !== 'semi-dark') {
        document.body.classList.remove('dark-layout', 'semi-dark-layout');
      }

      if (prevProps.customizer.sidebarCollapsed !== this.props.customizer.sidebarCollapsed) {
        this.setState({
          collapsedContent: sidebarCollapsed,
          sidebarState: sidebarCollapsed
        });
      }

      if (prevProps.customizer.sidebarCollapsed === this.props.customizer.sidebarCollapsed && pathname !== prevProps.location.pathname && this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true);
      }

      if (prevProps.customizer.sidebarCollapsed === this.props.customizer.sidebarCollapsed && pathname !== prevProps.location.pathname && !this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(false);
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.render = function render() {
    var appProps = this.props.customizer;
    var menuThemeArr = ['primary', 'success', 'danger', 'info', 'warning', 'dark'];
    var sidebarProps = {
      toggleSidebarMenu: this.props.collapseSidebar,
      toggle: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarHover: this.sidebarMenuHover,
      sidebarVisibility: this.handleSidebarVisibility,
      visibilityState: this.state.sidebarHidden,
      activePath: this.props.location.pathname,
      collapsedMenuPaths: this.handleCollapsedMenuPaths,
      currentLang: this.state.currentLang,
      activeTheme: appProps.menuTheme,
      collapsed: this.state.collapsedContent,
      permission: '',
      deviceWidth: this.state.width
    };
    var navbarProps = {
      toggleSidebarMenu: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      appId: this.props.appId,
      sidebarVisibility: this.handleSidebarVisibility,
      currentLang: this.state.currentLang,
      changeCurrentLang: this.handleCurrentLanguage,
      handleAppOverlay: this.handleAppOverlay,
      appOverlayState: this.state.appOverlay,
      navbarColor: appProps.navbarColor,
      navbarType: appProps.navbarType
    };
    var footerProps = {
      appId: this.props.appId,
      footerType: appProps.footerType,
      hideScrollToTop: appProps.hideScrollToTop
    };
    return /*#__PURE__*/React__default.createElement("div", {
      className: classnames("wrapper vertical-layout theme-" + appProps.menuTheme, {
        'menu-collapsed': this.state.collapsedContent === true && this.state.width >= 1200,
        'fixed-footer': appProps.footerType === 'sticky',
        'navbar-static': appProps.navbarType === 'static',
        'navbar-sticky': appProps.navbarType === 'sticky',
        'navbar-floating': appProps.navbarType === 'floating',
        'navbar-hidden': appProps.navbarType === 'hidden',
        'theme-primary': !menuThemeArr.includes(appProps.menuTheme)
      })
    }, /*#__PURE__*/React__default.createElement(Sidebar$1, sidebarProps), /*#__PURE__*/React__default.createElement("div", {
      className: classnames('app-content content', {
        'show-overlay': this.state.appOverlay === true
      }),
      onClick: this.handleAppOverlayClick
    }, /*#__PURE__*/React__default.createElement(Navbar, navbarProps), /*#__PURE__*/React__default.createElement("div", {
      className: "content-wrapper pb-4 pb-md-0"
    }, this.props.children)), /*#__PURE__*/React__default.createElement(Footer, footerProps), /*#__PURE__*/React__default.createElement("div", {
      className: "sidenav-overlay",
      onClick: this.handleSidebarVisibility
    }));
  };

  return Layout;
}(React.PureComponent);

var mapStateToProps$2 = function mapStateToProps(state) {
  return {
    customizer: state.customizer
  };
};

var Layout$1 = reactRedux.connect(mapStateToProps$2, {
  changeTheme: changeTheme,
  collapseSidebar: collapseSidebar,
  changeNavbarColor: changeNavbarColor,
  changeNavbarType: changeNavbarType,
  changeFooterType: changeFooterType,
  changeMenuColor: changeMenuColor,
  hideScrollToTop: hideScrollToTop
})(Layout);

var Context = React__default.createContext();

var IntlProviderWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(IntlProviderWrapper, _React$Component);

  function IntlProviderWrapper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      locale: _this.props.locale,
      messages: _this.props.appMessage[_this.props.locale]
    };
    return _this;
  }

  var _proto = IntlProviderWrapper.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var _this$state = this.state,
        locale = _this$state.locale,
        messages = _this$state.messages;
    return /*#__PURE__*/React__default.createElement(Context.Provider, {
      value: {
        state: this.state,
        switchLanguage: function switchLanguage(language) {
          localStorage.setItem('language', language);

          _this2.setState({
            locale: language,
            messages: _this2.props.appMessage[language]
          });
        }
      }
    }, /*#__PURE__*/React__default.createElement(reactIntl.IntlProvider, {
      key: locale,
      locale: locale,
      messages: messages,
      defaultLocale: "vi"
    }, children));
  };

  return IntlProviderWrapper;
}(React__default.Component);

var login = "Login";
var register$1 = "Register";
var forgotPassword$1 = "Forgot password";
var setting = "Setting";
var messages_en = {
	"commom.error.requireField": "You must enter {fieldName}",
	"common.gender.male": "Male",
	"common.gender.female": "Female",
	"common.gender.other": "Other",
	"common.icType.personalID": "Identity Card",
	"common.icType.citizenIdentify": "Identification",
	"common.icType.passport": "Passport",
	"common.icType.CMND": "Identity Card",
	"common.icType.CCCD": "Identification",
	"common.icType.HC": "Passport",
	"common.home": "Home",
	"common.backHome.confirmMessage": "Do you want to go back to home page?",
	"common.saveChanges": "Save Changes",
	"common.saveChanges.confirmMessage": "Do you want to save the changes?",
	"common.cancel": "Cancel",
	"common.ok": "Ok",
	"common.noResults": "No results",
	"common.sessionExpired": "Your session has expired, please relogin!",
	"common.error.500": "An error occurred, please try again!",
	"common.table.previous": "Previous",
	"common.table.next": "Next",
	"common.table.page": "Page",
	"common.table.of": "of",
	"common.table.rows": "row",
	"common.table.noData": "No results were found",
	"common.back": "Quay lại",
	"landingPage.copyRight": " 2020-{year}: InOn - Bảo hiểm không ngủ",
	"landingPage.slogan": "The place that provides technology solutions in the insurance field",
	"landingPage.welcomeText": "Welcome to InOn",
	login: login,
	"login.firstWelcome": "Welcome to InOn X!",
	"login.logedWelcome": "Hi,",
	"login.username": "Username *",
	"login.username.required": "You must enter your username",
	"login.username.invalid": "Username is invalid",
	"login.password": "Password *",
	"login.password.required": "You must enter your password",
	"login.rememberMe": "Remember me",
	"login.notMe": "Not me",
	"login.fail": "Username or password was incorrect",
	"login.sayHi": "Hi, {name}",
	"login.registerPartner": "Partner Registration",
	"login.needRegisterPartner": "Your account cannot use this function. Please register as a partner or log in as an individual customer.",
	register: register$1,
	"register.fullname": "Full name",
	"register.fullname.required": "You must enter your full name",
	"register.fullname.invalid": "Your full name can not enter special charater",
	"register.email": "Email*",
	"register.email.required": "You must enter your email address",
	"register.email.invalid": "You must enter your valid email address",
	"register.phoneNumber": "Phone number",
	"register.phoneNumber.invalid": "You must enter your valid phone number",
	"register.phoneNumber.required": "You must enter your phone number",
	"register.refCode": "Referal code",
	"register.refCode.invalid": "Referal code is invalid",
	"register.mustAppcepted": "Your must accept our terms and conditions",
	"register.registerSuccess": "Partner registration request is being processed. Please check email to complete.Thank you!",
	"register.agreeWith": "I agree to",
	"register.policyAndCondition": "Terms and Condition",
	"register.useService": "use service",
	forgotPassword: forgotPassword$1,
	"forgotPassword.verify": "Verify",
	"forgotPassword.username": "Username*",
	"forgotPassword.username.required": "You must enter username",
	"forgotPassword.email": "Email registration*",
	"forgotPassword.email.required": "You must enter email registration",
	"forgotPassword.successfull": "Your reset password link has sent to your email",
	"forgotPassword.fail": "Your phone number or email is incorrect",
	"forgotPassword.notFoundEmailSuggestion": "Not found any email with your username",
	"forgotPassword.yourEmailIs": "Your email is",
	"menu.home": "Home",
	"menu.user": "User Management",
	"menu.contract": "Contract",
	"menu.buyInsurance": "Buy Insurance",
	"menu.contractManagement": "Contract Management",
	"menu.personalContracts": "Personal Contracts",
	"menu.partnerContracts": "Parnter Contracts",
	"menu.allContracts": "All Contracts",
	"menu.account": "Account",
	"menu.createAccount": "Create Account",
	"menu.accountManagement": "Account Management",
	"menu.createMultipleAccount": "Create Multiple Account",
	"menu.insuranceFeeManagement": "Insurance Fee",
	"menu.systemFee": "System Fee",
	"menu.personalFee": "Personal Fee",
	"menu.lxPartnerFee": "LX Partner Fee",
	"menu.partnerFee": "Partner Fee",
	"menu.customerFee": "Customer Fee",
	"menu.allFee": "All Fee",
	"menu.feeApproval": "Fee Approval",
	"menu.bonusManagement": "Bonus Management",
	"menu.systemBonus": "System Bonus",
	"menu.personalBonus": "Personal Bonus",
	"menu.partnerBonus": "Partner Bonus",
	"menu.lxPartnerBonus": "LX Partner Bonus",
	"menu.customerBonus": "Customer Bonus Point",
	"menu.allBonus": "All Bonus",
	"menu.bonusApproval": "Bonus Approval",
	"menu.bonusClient": "Client Bonus",
	"menu.insuranceCertificate": "Insurance Certification",
	"menu.insuranceCertificate.newImport": "New Import",
	"menu.insuranceCertificate.newExport": "New Export",
	"menu.insuranceCertificate.wrongImport": "Wrong Import",
	"menu.insuranceCertificate.wrongExport": "Wrong Export",
	"menu.debt": "Debt",
	"menu.createDebt": "Create Debt",
	"menu.editDebt": "Edit Debt",
	"menu.debtApproval": "Debt Approval",
	"menu.debtManagement": "Debt Management",
	"menu.personalDebt": "Personal Debt",
	"menu.partnerDebt": "Partner Debt",
	"menu.allDebt": "All Debt",
	"menu.permissionGoup": "Permission Group",
	"menu.creatPermissionGoup": "Create Permission Group",
	"menu.permissionGoupManagement": "Permission Group Management",
	"menu.insuranceMotobike": "Motobike Insurance",
	"menu.insuranceCar": "Car Insurance",
	"menu.approveOpenAccount": "Account Approval",
	"menu.promotion": "Promotion",
	"menu.helpCenter": "Help center",
	"menu.createHelpCenter": "Create New",
	"menu.helpCenterQuestion": "Frequently asked questions",
	"menu.helpCenterUserManual": "User manual",
	"menu.helpCenterProfessinalDocument": "Professional documents",
	"menu.createPromotion": "Create Promotion",
	"menu.promotionManagement": "Promotion Management",
	"menu.personalBonusHistory": "Personal Bonus History",
	"menu.partnerBonusHistory": "Partner Bonus History",
	"menu.allBonusHistory": "All Bonus History",
	"menu.notification": "Notification",
	"menu.readAll": "Read All",
	"menu.deleteAll": "Delete All",
	"menu.confirmDeleteAll": "Do you want delete all notifications",
	"menu.notificationManagement": "Notification Management",
	"menu.createNotification": "Create Notification",
	"menu.notificationApproval": "Notification Management",
	"menu.support": "24/7 Support",
	"menu.createSupportRequest": "Create New Request",
	"menu.managementSupportRequest": "Manage support requests",
	"menu.mySupportRequest": "Personal request",
	"menu.permissionRequest": "Decentralization",
	"menu.compensationManagement": "Compensation Management",
	"menu.accountProduct": "Account Product",
	"menu.accountProductManagement": "Account Product Management",
	"menu.accountProductImport": "Account Product Import",
	"navbar.language.vi": "Tiếng việt",
	"navbar.language.en": "English",
	"navbar.logout": "Logout",
	"navbar.logout.confirmMessage": "Do you want to logout?",
	"navbar.notifications.markAsRead": "Mark as read",
	"navbar.notifications.markAsUnRead": "Mark as unread",
	"navbar.notifications.delete": "Delete",
	"navbar.notifications.newNotificationNotice": "You have a new notification",
	"navbar.notifications.noNewNotifications": "You don't have a new notification",
	"footer.copyRight": "©2020-{year}: InOn - All rights reserved",
	"footer.companySlogan": "Leading insurance provider in Vietnam",
	setting: setting,
	"setting.accountInformation": "Account Information",
	"setting.changePassword": "Change password",
	"setting.change": "Change",
	"setting.partnerCode": "Partner code",
	"setting.referralCode": "Referal code",
	"setting.accountCode": "Account code",
	"setting.personalSetting": "Personal Settings",
	"setting.generalInformation": "General Information",
	"setting.notification": "Notification",
	"setting.deviceManagement": "Device Management",
	"setting.language": "Language",
	"setting.helpCenter": "Help center",
	"setting.connectSocial": "Connect with social network",
	"setting.bonusPoint": "Your bonus points",
	"setting.termAndCondition": "Terms & condition",
	"setting.general": "General",
	"setting.privacyPolicy": "Privacy Policy",
	"setting.frequentlyAsked": "Frequently Asked",
	"setting.contact": "Contact",
	"setting.feedback": "Feedback",
	"setting.share": "Share",
	"setting.status.COMPLETE": "Your account had completed information",
	"setting.status.UNCOMPLETE": "Account need additional information",
	"setting.gender.M": "Male",
	"setting.gender.F": "FeMale",
	"setting.gender.O": "Others",
	"setting.goToGuestApp": "Back to Guest app",
	"setting.goToAgencyApp": "Back to Agency app",
	"setting.call": "Call",
	"setting.call.confirmMessage": "Would you like to call {phoneNumber}?",
	"setting.sendEmail": "Send mail",
	"setting.updateInfo.success": "Update account infomation successfully!",
	"setting.updateInfo.confirmMessage": "Do you want to change account infomation?",
	"setting.updateInfo.imageTypeInvalid": "Invalid file upload!",
	"setting.updateInfo.imageExceedSize": "Uploaded file exceed the allowed size ({size}MB)!",
	"setting.shareWithFriends": "Share With Friends",
	"setting.copySuccess": "Copy Successfully!",
	"changePassword.newPassword": "New Password",
	"changePassword.newPassword.required": "You must enter new password",
	"changePassword.newPassword.invalid": "New password is invalid",
	"changePassword.oldPassword": "Old password",
	"changePassword.oldPassword.required": "You must enter old password",
	"changePassword.oldPassword.invalid": "Old password is invalid",
	"changePassword.confirmPassword.required": "You must re-enter your new password",
	"changePassword.passwordMustMatch": "Password must match",
	"changePassword.confirmMessage": "Do you want to change your password?",
	"changePassword.success": "Change password successfully!",
	"generalInfo.changeLanguage.confirmMessage": "Do you want to change language?",
	"generalInfo.changeLanguage.success": "Change language successfully!",
	"generalInfo.policy.1": "1. CÁC LOẠI DỮ LIỆU CÁ NHÂN CHÚNG TÔI SẼ THU THẬP VÀ XỬ LÝ",
	"generalInfo.policy.1.1": "1.1  Thông tin cá nhân và thông tin liên lạc chi tiết, ví dụ chức vụ, họ tên, thông tin liên lạc chi tiết và lịch sử liên lạc chi tiết; thông tin tài liệu du lịch; ngày sinh, giới tính và/hoặc tuổi của bạn; quốc tịch, bản sao giấy tờ nhận dạng bạn (nếu có liên quan đến sản phẩm hoặc dịch vụ);",
	"generalInfo.policy.1.2": "1.2  Thông tin chi tiết về người thụ hưởng, ví dụ chủ hợp đồng bảo hiểm và người thụ hưởng của các sản phẩm hoặc dịch vụ của chúng tôi;",
	"generalInfo.policy.1.3": "1.3  Các thành viên trong gia đình (nếu có liên quan đến sản phẩm hoặc dịch vụ);",
	"generalInfo.policy.1.4": "1.4  Hồ sơ liên lạc của bạn với chúng tôi, chẳng hạn như lịch sử các cuộc gọi của bạn đến số điện thoại của trung tâm dịch vụ khách hàng của chúng tôi và, nếu bạn liên lạc với chúng tôi bằng các dịch vụ trực tuyến hoặc qua ứng dụng điện thoại thông minh của chúng tôi, các chi tiết như dữ liệu vị trí điện thoại di động, địa chỉ IP và địa chỉ MAC;",
	"generalInfo.policy.1.5": "1.5  Sản phẩm và dịch vụ, bạn đã mua từ chúng tôi, cũng như những sản phẩm bạn quan tâm và đã nắm giữ và các phương thức thanh toán liên quan được bạn sử dụng;",
	"generalInfo.policy.1.6": "1.6  Việc sử dụng các sản phẩm và dịch vụ của chúng tôi, các yêu cầu bồi thường bảo hiểm và tình trạng thanh toán các yêu cầu bồi thường này (và các chi tiết khác liên quan đến vấn đề này);",
	"generalInfo.policy.1.7": "1.7  Phân tích dữ liệu tiếp thị sản phẩm hoặc dịch vụ được thực hiện riêng cho bạn, bao gồm lịch sử liên lạc và thông tin về việc bạn có mở các tài liệu này hay nhấp vào đường link liên kết;",
	"generalInfo.policy.2": "2. CÁCH THỨC CHÚNG TÔI THU THẬP DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.2.1": "2.1  Trực tiếp từ bạn và bất kỳ thông tin nào từ các thành viên gia đình, cộng sự hoặc người thụ hưởng sản phẩm và dịch vụ;",
	"generalInfo.policy.2.2": "2.2  Thông tin về bạn được tạo ra khi bạn sử dụng các sản phẩm và dịch vụ của chúng tôi;",
	"generalInfo.policy.2.3": "2.3  Từ một nhà môi giới hoặc một bên trung gian khác (ví dụ: đại lý, nhà phân phối, đối tác kinh doanh), các bên mà chúng tôi có hợp tác để cung cấp sản phẩm hoặc dịch vụ hoặc cung cấp báo giá cho bạn;",
	"generalInfo.policy.2.4": "2.4  Các công ty đối tác liên kết với InOn, nếu bạn đã từng đăng ký mua hoặc đã mua sản phẩm từ các công ty này;",
	"generalInfo.policy.2.5": "2.5  Cookie, dịch vụ định vị, địa chỉ IP khi bạn truy cập trang mạng hoặc ứng dụng di động của chúng tôi hoặc khi bạn điền vào biểu mẫu Liên hệ với chúng tôi trong trang mạng hoặc ứng dụng của chúng tôi;",
	"generalInfo.policy.2.6": "2.6  Các bên thứ ba như công ty bảo hiểm, đại lý, nhà cung cấp, tổ chức tài chính, cá nhân y tế, tòa án hoặc hồ sơ thông tin đã được công bố công khai;",
	"generalInfo.policy.2.7": "2.7  Bảng câu hỏi và thông tin liên lạc chi tiết khi bạn tham gia khảo sát, hội nghị nhà đầu tư, các buổi hội thảo hoặc khi bạn cập nhật thông tin liên lạc của bạn với chúng tôi trên trang mạng của chúng tôi;",
	"generalInfo.policy.2.8": "2.8  Từ các nguồn khác như Cơ quan phòng chống gian lận, tổ chức tham chiếu tín dụng, người cho vay khác và các thông tin đã được công bố công khai (ví dụ: danh bạ điện thoại, phương tiện truyền thông xã hội, các trang mạng, các bài báo), các tổ chức thu hồi nợ, các tổ chức khác để hỗ trợ phòng ngừa và phát hiện tội phạm, cảnh sát và các cơ quan thực thi pháp luật;",
	"generalInfo.policy.2.9": "2.9  Chúng tôi mua thông tin về bạn hoặc khách hàng nói chung từ các bên thứ ba bao gồm thông tin nhân khẩu học, chi tiết các phương tiện đi lại, lịch sử yêu cầu bồi thường, thông tin về gian lận, danh sách quảng cáo tiếp thị, thông tin đã được công bố công khai và thông tin khác để giúp cải thiện sản phẩm và dịch vụ của chúng tôi.",
	"generalInfo.policy.3": "3. CHÍNH SÁCH COOKIE",
	"generalInfo.policy.3.1": "3.1   Trang mạng của chúng tôi sử dụng cookie để phân biệt bạn với những người dùng khác. Điều này giúp chúng tôi cung cấp cho bạn trải nghiệm tốt khi bạn sử dụng trang mạng và cũng cho phép chúng tôi cải thiện trang mạng của mình. Cookie là một tệp nhỏ gồm các chữ cái và số mà chúng tôi lưu trữ trên trình duyệt hoặc ổ cứng máy tính của bạn. Cookie chứa thông tin được lưu trữ trên ổ cứng máy tính của bạn. Bạn có khả năng chấp nhận hoặc từ chối cookie bằng cách sửa đổi cài đặt trong trình duyệt của bạn. Nếu bạn muốn làm điều này, xin vui lòng xem mục trợ giúp trong trình duyệt của bạn.",
	"generalInfo.policy.3.2": "3.2   Chúng tôi sử dụng các loại cookie sau:",
	"generalInfo.policy.3.2.1": "3.2.1    Cookie cần thiết cho trang mạng, đây là các cookie cần phải có để phục vụ hoạt động của trang  mạng của chúng tôi. Ví dụ, các cookie cho phép bạn đăng nhập vào trang mạng của chúng tôi một cách an toàn;",
	"generalInfo.policy.3.2.2": "3.2.2    Cookie phân tích/quản lý hoạt động: các cookie này cho phép chúng tôi nhận ra và đếm số lượng người dùng truy cập vào trang mạng của chúng tôi và theo dõi cách người dùng truy cập di huyển xung quanh trang mạng của chúng tôi khi họ đang sử dụng nó. Điều này giúp chúng tôi cải thiện cách thức hoạt động của trang mạng, ví dụ, cải tiến để giúp người dùng tìm kiếm những thứ họ cần một cách dễ dàng;",
	"generalInfo.policy.3.2.3": "3.2.3    Cookie chức năng: chúng được sử dụng để nhận ra bạn khi bạn quay lại trang mạng của chúng tôi. Điều này cho phép chúng tôi cá nhân hóa nội dung của chúng tôi cho bạn, chào bạn bằng tên và ghi nhớ sở thích của bạn (ví dụ: lựa chọn ngôn ngữ hoặc khu vực của bạn).",
	"generalInfo.policy.3.3": "3.3   Bằng cách tiếp tục sử dụng trang mạng của chúng tôi, bạn chấp nhận chúng tôi sử dụng các loại cookie như đã nêu ở trên.",
	"generalInfo.policy.4": "4. CÁCH THỨC VÀ LÝ DO CHÚNG TÔI SỬ DỤNG DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.4.1": "4.1  Chúng tôi, InOn và các đối tác kinh doanh sẽ sử dụng dữ liệu cá nhân bạn cung cấp cho chúng tôi, cùng với các thông tin khác, cho các mục đích sau:",
	"generalInfo.policy.4.1.1": "<table class='table table-bordered info-item-table'><thead><tr><td>Mục đích</td><td>Cơ sở pháp lý</td></tr></thead><tbody><tr><td>Quản lý các sản phẩm và dịch vụ của chúng tôi, bao gồm cho phép chúng tôi thực hiện nghĩa vụ của chúng tôi với bạn và cung cấp mọi dịch vụ liên quan như đã thảo luận với bạn trước khi bạn mua sản phẩm hoặc dịch vụ.</td><td rowspan='2'>Cần thiết cho việc thực hiện hợp đồng của chúng tôi với bạn hoặc để thực hiện các bước trước khi ký hợp đồng với bạn.&nbsp;</td></tr><tr><td>Thực hiện kiểm tra bằng cách thông qua các tổ chức như tổ chức tín dụng, công ty hỗ trợ tìm kiếm hoặc thông tin đã được công bố công khai (xem thêm nội dung trình bày trong Phần “Kiểm tra tham khảo”).</td></tr><tr><td>Cung cấp dịch vụ khách hàng – như trả lời thắc mắc của bạn hoặc thông báo cho bạn biết các thay đổi.</td><td rowspan='3'>Cần thiết cho việc thực hiện hợp đồng của chúng tôi với bạn. Sau khi hợp đồng chúng tôi ký với bạn hoàn tất, đây là lợi ích hợp pháp của chúng tôi trong việc duy trì và phát triển mối quan hệ của chúng tôi với bạn.</td></tr><tr><td>Tự động ra quyết định hoặc tạo hồ sơ cá nhân của bạn (xem thêm nội dung trình bày trong Phần “Chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động hoặc tạo hồ sơ cá nhân của bạn”).</td></tr><tr><td>Lưu giữ thông tin của bạn và thực hiện các công việc quản lý nội bộ khác.</td></tr><tr><td>Tuân thủ với các yêu cầu pháp quy hoặc pháp lý khác.</td><td>Tuân thủ với các nghĩa vụ pháp lý của chúng tôi.</td></tr><tr><td>Thiết kế và cung cấp cho bạn các sản phẩm và dịch vụ bảo hiểm và tài chính liên quan.</td><td rowspan='2'>Lợi ích chính đáng của chúng tôi trong việc thiết kế và cải tiến sản phẩm, cung cấp dịch vụ giá trị gia tăng, phát triển kinh doanh và hiểu rõ hơn về cách sử dụng sản phẩm của chúng tôi.&nbsp;</td></tr><tr><td>Tiến hành nghiên cứu và phân tích thống kê (bao gồm cả việc sử dụng các công nghệ mới).</td></tr></tbody></table>",
	"generalInfo.policy.4.2": "4.2  Ngoài ra, chúng tôi, <b>InOn</b> và các đối tác kinh doanh của chúng tôi, sẽ sử dụng dữ liệu cá nhân bạn cung cấp cho chúng tôi, cùng với các thông tin khác, để gửi cho bạn các ưu đãi tiếp thị trực tiếp bằng phương tiện điện tử và phi điện tử bao gồm qua đường bưu điện, cũng như gửi cho bạn thông tin giới thiệu các sản phẩm và dịch vụ từ các bên thứ ba đã được chọn lọc kỹ lưỡng. Cơ sở pháp lý chúng tôi trình bày bên trên được xây dựng dựa trên sự đồng thuận với bạn.",
	"generalInfo.policy.4.3": "4.3  Chúng tôi chia sẽ dữ liệu cá nhân của bạn với ai và tại sao:",
	"generalInfo.policy.4.3.1": "4.3.1  Chúng tôi sẽ chia sẻ thông tin cá nhân và sức khỏe của bạn trong nội bộ <b>InOn</b> và với các đối tác kinh doanh tài chính/sức khỏe và các bên thứ ba cung cấp dịch vụ cho chúng tôi (bao gồm nhưng không giới hạn các công ty bảo hiểm, luật sư, ngân hàng, kế toán, tổ chức tài chính, bên ủy thác và các nhà cung cấp dịch vụ là bên thứ ba khác cung cấp dịch vụ quản lý, viễn thông, máy tính, thanh toán, in ấn, mua lại hoặc các dịch vụ khác để cho phép chúng tôi thực hiện hoạt động kinh doanh), các công ty thẩm định hóa đơn y tế, các công ty thẩm định yêu cầu bồi thường, hiệp hội và hiệp đoàn trong cùng ngành, các bên đồng sở hữu hợp đồng bảo hiểm hoặc khoản đầu tư, cố vấn chuyên nghiệp, nhà nghiên cứu, tổ chức tham chiếu tín dụng, tổ chức thu hồi nợ, tổ chức tài chính/y tế và các bên đối tác để thực hiện các mục đích được nêu trong Phần “Cách thức và lý do chúng tôi sử dụng dữ liệu cá nhân của ban”. Nếu bạn có chung hợp đồng bảo hiểm với người khác, thì người đó cũng có thể nhận được dữ liệu cá nhân của bạn. Nếu được yêu cầu, chúng tôi cũng có thể chuyển dữ liệu cá nhân của bạn cho các cơ quan phòng chống tội phạm tài chính, bất kỳ cơ quan lập pháp, tư pháp hoặc hành pháp nào khác.",
	"generalInfo.policy.4.3.2": "4.3.2  Chúng tôi có thể xử lý dữ liệu cá nhân của bạn ở một quốc gia khác ngoài quốc gia mà bạn cư trú. Trong phạm vi chúng tôi chuyển dữ liệu cá nhân của bạn, chúng tôi sẽ sử dụng các biện pháp bảo vệ phù hợp và tuân thủ luật pháp của quốc gia nơi dữ liệu cá nhân của bạn được chuyển đến. Khi bạn yêu cầu, chúng tôi sẽ cung cấp cho bạn chi tiết các biện pháp bảo vệ dữ liệu mà chúng tôi đang sử dụng.",
	"generalInfo.policy.4.4": "4.4  Chúng tôi lưu trữ dữ liệu cá nhân của bạn trong một khoảng thời gian nhất định",
	"generalInfo.policy.4.4.1": "4.4.1   Dữ liệu cá nhân của bạn sẽ được lưu trữ khi bạn (hoặc đồng sở hữu hợp đồng bảo hiểm với bạn) là khách hàng của chúng tôi và trong khoảng thời gian sáu năm sau khi kết thúc mối quan hệ khách hàng hoặc lâu hơn nếu pháp luật yêu cầu. Có thể có những trường hợp cụ thể khi chúng tôi cần lưu giữ dữ liệu cá nhân của bạn lâu hơn (chẳng hạn như khi có tranh chấp xảy ra).",
	"generalInfo.policy.5": "5. KIỂM TRA THAM KHẢO",
	"generalInfo.policy.5.1": "5.1  Đối với một số sản phẩm nhất định, chúng tôi có thể sử dụng các tổ chức tham chiếu tín dụng, công ty  hỗ trợ tìm kiếm, cơ quan phòng chống tội phạm tài chính hoặc thông tin có sẵn công khai để giúp chúng tôi kiểm tra danh tính của bạn, cũng như để tránh gian lận và rửa tiền; điều này có thể bao gồm kiểm tra các địa chỉ hiện tại hoặc trước đây của bạn. Những kết quả này có thể được ghi lại để tham khảo trong tương lai.",
	"generalInfo.policy.5.2": "5.1  Những kết quả kiểm tra này cũng có thể được sử dụng cho một nhà đầu tư, chủ sở hữu hợp đồng chung hoặc người mà bạn đồng ý cung cấp dữ liệu cá nhân của mình. Nếu chúng tôi mất liên lạc với bạn, chúng tôi có thể sử dụng các tổ chức này để xác minh địa chỉ của bạn nhằm giúp chúng tôi liên lạc với bạn.",
	"generalInfo.policy.5.3": "5.3  Mọi việc chuyển dữ liệu cá nhân của bạn sẽ luôn được thực hiện an toàn.",
	"generalInfo.policy.6": "6. CHÚNG TÔI CÓ THỂ SỬ DỤNG DỮ LIỆU CÁ NHÂN CỦA BẠN ĐỂ ĐƯA RA QUYẾT ĐỊNH TỰ ĐỘNG HOẶC TẠO HỒ SƠ CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.6.1": "6.1  Chúng tôi, InOn, Đối tác kinh doanh và Đối tác tiếp thị của chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động ảnh hưởng đến bạn hoặc tạo hồ sơ cá nhân khác cho bạn (ví dụ: hồ sơ tiếp thị).",
	"generalInfo.policy.7": "7. SỬ DỤNG DỮ LIỆU CÁ NHÂN NHẠY CẢM CỦA BẠN",
	"generalInfo.policy.7.1": "7.1  Đối với một số sản phẩm hoặc dịch vụ nhất định, chúng tôi sẽ cần xử lý dữ liệu cá nhân nhạy cảm của bạn, chẳng hạn như thông tin liên quan đến sức khỏe, di truyền, định danh sinh trắc học và khuynh hướng giới tính. Trong phạm vi chúng tôi cần sự đồng ý rõ ràng của bạn để xử lý loại dữ liệu cá nhân này theo cách được mô tả trong Phần “Cách thức và lý do chúng tôi sử dụng dữ liệu cá nhân của bạn” , “Kiểm tra tham khảo” và “Chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động hoặc tạo hồ sơ cá nhân của bạn”, chúng tôi sẽ cung cấp chi tiết về điều này khi chúng tôi thu thập các thông tin này từ bạn và xin nhận được sự chấp thuận của bạn.",
	"generalInfo.policy.8": "8. QUYỀN KIỂM SOÁT DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.8.1": "8.1  Khi nói đến cách chúng tôi sử dụng dữ liệu cá nhân của bạn, bạn có quyền theo quy định của pháp luật Việt Nam.",
	"generalInfo.policy.8.2": "8.2  Trong khi đó, nếu bạn hiện đang cư trú tại Châu Âu, các quyền bổ sung theo Quy định bảo vệ dữ liệu chung (GDPR) có thể được áp dụng. Như vậy, bạn có thể:",
	"generalInfo.policy.8.2.1": "8.2.1  Yêu cầu một bản sao dữ liệu cá nhân của bạn miễn phí (chúng tôi có thể tính phí yêu cầu của bạn nếu không có cơ sở rõ ràng hoặc bị lạm dụng quá mức);",
	"generalInfo.policy.8.2.2": "8.2.2  Trong một số trường hợp nhất định, chúng tôi sẽ chuyển dữ liệu cá nhân của bạn sang một tổ chức khác theo yêu cầu của bạn;",
	"generalInfo.policy.8.2.3": "8.2.3  Yêu cầu chúng tôi điều chỉnh bất cứ dữ liệu cá nhân nào bị sai hoặc không đầy đủ;",
	"generalInfo.policy.8.2.4": "8.2.4  Yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn nếu không còn cần thiết cho các mục đích được nêu trong Phần “Các loại dữ liệu cá nhân chúng tôi sẽ thu thập và xử lý” hoặc nếu không có cơ sở pháp lý nào khác để xử lý dữ liệu;",
	"generalInfo.policy.8.2.5": "8.2.5  Giới hạn cách chúng tôi sử dụng dữ liệu cá nhân của bạn hoặc rút lại sự đồng ý (bao gồm cả việc đồng ý cho phép đưa ra quyết định tự động dựa trên dữ liệu cá nhân) mà bạn đã chấp thuận cho phép chúng tôi xử lý dữ liệu cá nhân của bạn;",
	"generalInfo.policy.8.2.6": "8.2.6  Phản đối chúng tôi sử dụng dữ liệu cá nhân của bạn để tiếp thị trực tiếp (bao gồm cả việc tạo lập hồ sơ cá nhân của bạn) hoặc xử lý dữ liệu khác dựa trên lợi ích hợp pháp;",
	"generalInfo.policy.8.2.7": "8.2.7  Khiếu nại với cơ quan bảo vệ dữ liệu hoặc cơ quan quản lý độc lập khác về cách chúng tôi sử dụng dữ liệu cá nhân của bạn.",
	"generalInfo.policy.8.3": "8.3  Nếu bạn muốn thực hiện các quyền của mình hoặc muốn giải thích về các quyền này, bạn có thể liên lạc với chúng tôi trong phần Liên hệ.",
	"generalInfo.policy.8.4": "8.4  Nếu bạn cần nói chuyện với chúng tôi, chúng tôi sẽ chuyển yêu cầu của bạn cho Người Kiểm Soát Dữ Liệu (8.4.1)  cá nhân của bạn là InOn Chúng tôi có thể theo dõi hoặc ghi lại các cuộc gọi hoặc bất kỳ liên lạc nào khác mà chúng tôi có với bạn. Điều này có thể là để đào tạo, bảo mật hoặc để giúp chúng tôi kiểm tra chất lượng.",
	"generalInfo.policy.8.4.1": "8.4.1  Người Kiểm Soát Dữ Liệu – Cá nhân, pháp nhân, cơ quan nhà nước, các cơ quan hoặc tổ chức khác, riêng rẻ hoặc cùng nhau, xác định mục đích và cách thức xử lý dữ liệu cá nhân.",
	"generalInfo.policy.9": "9.  THAY MẶT NGƯỜI KHÁC CUNG CẤP DỮ LIỆU CÁ NHÂN CỦA HỌ",
	"generalInfo.policy.9.1": "9.1  Khi bạn cung cấp cho chúng tôi dữ liệu cá nhân về người khác (hoặc nhiều người khác), bạn nên được chỉ định và ủy quyền bởi người đó để hành động thay họ. Điều này bao gồm cung cấp sự đồng ý để:",
	"generalInfo.policy.9.1.1": "9.1.1  Chúng tôi xử lý dữ liệu cá nhân của họ và dữ liệu cá nhân nhạy cảm (như chúng tôi đã giải thích trong các Phần ở trên);",
	"generalInfo.policy.9.1.2": "9.1.1  Bạn sẽ nhận được các thông báo bảo vệ thông tin thay mặt họ.",
	"generalInfo.policy.9.2": "9.2  Nếu vì bất kỳ lý do nào bạn quan tâm đến việc liệu bạn có được phép cung cấp cho chúng tôi thông tin về người khác hay không, vui lòng liên hệ với chúng tôi theo địa chỉ thư điện tử bên dưới trước khi gửi cho chúng tôi bất cứ thông tin gì.",
	"generalInfo.policy.10": "10. TIẾP THỊ TRỰC TIẾP",
	"generalInfo.policy.10.1": "10.1  Chúng tôi, <b>InOn</b>, đối tác kinh doanh của chúng tôi, và đối tác tiếp thị vẫn sẽ gửi cho bạn thông tin qua hình thức các bài đăng về các sản phẩm và dịch vụ của InOn và các bên thứ ba được lựa chọn cẩn thận.",
	"generalInfo.policy.10.2": "10.2  Ngoài ra, theo thời gian, chung tôi InOn mong muốn gởi thông tin chi tiết về sản phẩm, dịch vụ và các ưu đãi đặc biệt cho bạn qua các phương tiện điện tử. Chúng tôi sẽ chỉ làm điều này nếu bạn đồng ý cho chúng tôi liên lạc với bạn bằng phương tiện điện tử.",
	"generalInfo.policy.10.3": "10.3  Và nếu bạn thay đổi ý định và/hoặc bạn muốn từ chối nhận tiếp thị trực tiếp phi điện tử, thì bạn cứ cho chúng tôi biết. Chỉ cần sử dụng một trong các tùy chọn trong mục Liên hệ với chúng tôi.",
	"generalInfo.policy.11": "11. LIÊN HỆ VỚI CHÚNG TÔI",
	"generalInfo.policy.11.1": "11.1  Nếu bạn muốn thực hiện các quyền của mình trong Phần “Quyền kiểm soát dữ liệu cá nhân của bạn” hoặc nếu bạn yêu cầu bất kỳ thông tin nào theo thông báo này, bạn có thể liên hệ với chúng tôi theo nhiều cách khác nhau.",
	"generalInfo.policy.11.1.1": "11.1.1  Gọi cho đường dây nóng của chúng tôi: <b>0899.300.800</b>",
	"generalInfo.policy.11.1.2": "11.1.2  Gửi thư điện tử cho chúng tôi theo địa chỉ: <b>lienhe@inon.vn</b>",
	"generalInfo.policy.11.1.3": "11.1.3  Hoặc liên hệ trực tiếp với chúng tôi tại văn phòng: <b>Phòng 301A, Tòa nhà Thiên Bảo, số 47-49 Lê Văn Hưu, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Thành phố Hà Nội.</b>",
	"generalInfo.terms.1": "1. CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN SỬ DỤNG",
	"generalInfo.terms.1.1": "1.1  Trang thông tin điện tử này <b>(www.inon.vn)</b> cùng các tên miền phụ (x.inon.vn,...) và ứng dụng di động <b>“InOn” (sau đây gọi tắt là “Hệ thống\nInOn”)</b> do <b>Công ty Cổ phần InOn (sau đây gọi tắt là “InOn”) - Đơn vị chủ quản của Hệ thống và Thương hiệu InOn<b/> toàn quyền sở hữu và điều\nhành.\n",
	"generalInfo.terms.1.2": "1.2  Việc sử dụng <b>Hệ thống InOn</b> này phụ thuộc vào các điều khoản và điều kiện cụ thể sau: (A) các điều khoản và điều kiện được nêu dưới đây và (B) mọi điều khoản và điều kiện bổ sung cụ thể tùy từng thời điểm để điều chỉnh việc sử dụng, và truy cập vào một số mục của trang thông tin điện tử này (và các điều khoản bổ sung đó sẽ có hiệu lực ràng buộc khi chúng được đăng tải trên <b>Hệ thống InOn</b> này) <b>(\"Điều Khoản và Điều Kiện\")</b>.",
	"generalInfo.terms.1.3": "1.3  Khi sử dụng trang thông tin điện tử này, bạn đã đồng ý với các Điều Khoản và Điều Kiện, và sự đồng ý của bạn cùng với các Điều Khoản và Điều Kiện sẽ cấu thành một hợp đồng có giá trị ràng buộc về pháp lý giữa bạn và <b>InOn</b>. Vì thế, bạn vui lòng đọc kỹ các Điều Khoản và Điều Kiện của trang thông tin điện tử này.",
	"generalInfo.terms.2": "2. CÁC HẠN CHẾ VÀ SỬ DỤNG CÁC THÔNG TIN TÀI LIỆU",
	"generalInfo.terms.2.1": "2.1  Trừ khi được <b>InOn</b> đồng ý bằng văn bản một cách khác đi, bạn sẽ không sao chép, sao lại, tái bản, đưa lên mạng, công bố, chuyển, tạo liên kết đến hoặc phân phối dưới bất cứ hình thức nào các thông tin và/hoặc tài liệu đã được đăng tải trên trang thông tin điện tử này.",
	"generalInfo.terms.2.2": "2.2  Bạn có thể tải xuống các thông tin và/hoặc tài liệu được đăng tải trên trang thông tin điện tử này để bạn sử dụng, nhưng luôn luôn với điều kiện là bạn không dỡ bỏ các thông tin về bản quyền và/hoặc các quyền khác của <b>InOn</b> gắn với các thông tin và/hoặc tài liệu đó.",
	"generalInfo.terms.2.3": "2.3  Bạn không được phát tán, sửa đổi, chuyển đi, sử dụng lại, công bố, tạo liên kết hoặc sử dụng các nội dung của trang thông tin điện tử này, bao gồm, nhưng không giới hạn bởi, cả các thông tin bằng chữ, các hình ảnh, các tập tin âm thanh và/hoặc các đoạn phim, cho các mục đích kinh doanh và/hoặc công cộng, khi chưa có sự cho phép bằng văn bản của InOn.",
	"generalInfo.terms.3": "3. THỜI GIAN HOẠT ĐỘNG",
	"generalInfo.terms.3.1": "3.1 Trang thông tin điện tử này hoạt động 24 giờ mỗi ngày và 7 ngày mỗi tuần. Tuy nhiên, <b>InOn</b> bảo lưu quyền ngắt hệ thống để bảo trì khi cần thiết. <b>InOn</b> sẽ cố gắng để lên kế hoạch và thông báo về việc hệ thống không thể sử dụng được bằng cách đưa một thông báo trên mạng trực tuyến. <b>InOn</b> không chịu trách nhiệm đối với bất cứ thiệt hại và/hoặc mất mát nào do việc hệ thống bị ngắt trong trường hợp này.",
	"generalInfo.terms.4": "4. TÀI KHOẢN NGƯỜI SỬ DỤNG",
	"generalInfo.terms.4.1": "4.1  Bạn sẽ đăng ký và được cung cấp một Tên Truy Cập Tài Khoản và Mật khẩu để có thể mua bảo hiểm trên trang thông tin điện tử này. Bạn sẽ giữ bí mật Tên Truy Cập Tài Khoản và Mật khẩu này vào mọi thời điểm, và sẽ bảo đảm rằng Tên Truy Cập Tài Khoản và Mật khẩu này của bạn sẽ không bị tiết lộ theo bất cứ cách thức nào cho bất kỳ ai.",
	"generalInfo.terms.4.2": "4.2  <b>InOn</b> sẽ không chịu trách nhiệm về bất cứ giao dịch không được phép nào do việc Tên Truy Cập Tài Khoản và/hoặc Mật khẩu bị sử dụng sai và/hoặc sử dụng mà không được phép. Bạn phải lập tức thông báo cho <b>InOn</b> bất cứ trường hợp nào mà Tên Truy Cập Tài Khoản và/hoặc Mật khẩu của bạn bị sử dụng sai và/hoặc sử dụng mà không được phép. Bạn chịu trách nhiệm hoàn toàn về việc bảo mật Tên Truy Cập Tài Khoản và Mật khẩu và đối với bất cứ việc truy cập nào sử dụng Tên Truy Cập Tài Khoản và/hoặc Mật khẩu của bạn.",
	"generalInfo.terms.5": "5. BẢN QUYỀN VÀ NHÃN HIỆU",
	"generalInfo.terms.5.1": "5.1  Mọi nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này là tài sản của <b>InOn</b> và các đối tác khác (nếu có).",
	"generalInfo.terms.5.2": "5.2  Không có điều gì trên trang thông tin điện tử này có thể được hiểu là, dù là ngầm định hay cách khác, cho phép sử dụng hoặc bất cứ quyền sử dụng nào liên quan đến bất cứ nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này khi chưa có sự đồng ý bằng văn bản của <b>InOn</b> hoặc bên thứ ba sở hữu các nhãn hiệu hoặc tên thương mại đặt trên trang thông tin điện tử này.",
	"generalInfo.terms.5.3": "5.3  Bạn hoàn toàn không được sử dụng bất cứ nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này hoặc bất cứ nội dung nào khác có trên trang thông tin điện tử này, trừ các trường hợp được quy định trong các Điều Khoản và Điều Kiện.",
	"generalInfo.terms.5.4": "5.4  Các hình ảnh đặt trên trang thông tin điện tử này là tài sản của <b>InOn</b> hoặc được <b>InOn</b> sử dụng theo sự đồng ý của chủ sở hữu.",
	"generalInfo.terms.5.5": "5.5  Trừ khi được cho phép cụ thể, bạn không được sử dụng bất cứ hình ảnh nào đặt trên trang thông tin điện tử này, bạn cũng không được ủy quyền cho bất cứ người nào sử dụng bất cứ hình ảnh nào đặt trên trang thông tin điện tử này. Bất cứ việc sử dụng không được phép nào đối với các hình ảnh này có thể vi phạm luật tác quyền, luật nhãn hiệu, luật về quyền riêng tư và luật xuất bản, và các quy định về thông tin khác.",
	"generalInfo.terms.6": "6. QUY ĐỊNH VỀ QUYỀN RIÊNG TƯ",
	"generalInfo.terms.6.1": "6.1   Xin đọc kỹ CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ TRÊN INTERNET của chúng tôi. Chính sách này giải thích rõ những thông tin nào <b>InOn</b> có thể thu thập từ bạn trên trang thông tin điện tử của chúng tôi và cách thức chúng tôi sẽ sử dụng và bảo vệ các thông tin của bạn. Chúng tôi sẽ không thu thập bất cứ thông tin xác định danh tính cá nhân nào trên trang thông tin điện tử của chúng tôi trừ khi bạn cung cấp các thông tin đó cho chúng tôi.",
	"generalInfo.terms.7": "7. LIÊN KẾT ĐẾN CÁC TRANG WEB KHÁC",
	"generalInfo.terms.7.1": "7.1  Trang thông tin điện tử này liên kết đến các trang thông tin điện tử khác không do <b>InOn</b> quản lý hoặc điều khiển. <b>InOn</b> sẽ không chịu trách nhiệm về nội dung của các trang thông tin điện tử đó.",
	"generalInfo.terms.7.2": "7.2  Việc liên kết đến bất cứ trang thông tin điện tử nào như thế không có nghĩa là <b>InOn</b> đã chấp thuận hoặc tán thành đối với các trang thông tin điện tử đó, hoặc với nội dung của các trang thông tin điện tử đó, hoặc các sản phẩm và dịch vụ trên các trang thông tin điện tử đó.",
	"generalInfo.terms.8": "8. AN NINH CỦA TRANG WEB",
	"generalInfo.terms.8.1": "8.1  Bạn sẽ không xâm phạm hoặc cố gắng xâm phạm an ninh của trang thông tin điện tử này, bao gồm, nhưng không giới hạn, các hành vi dưới đây:",
	"generalInfo.terms.8.1.1": "8.1.1  Truy cập thông tin hoặc nối vào một máy chủ hoặc tài khoản mà bạn không được phép truy cập.",
	"generalInfo.terms.8.1.2": "8.1.2  Cố gắng thăm dò, kiểm tra hoặc thử nghiệm điểm yếu của một hệ thống hoặc hệ thống mạng để vi phạm an ninh hoặc biện pháp nhận dạng mà không được <b>InOn</b> cho phép bằng văn bản.",
	"generalInfo.terms.8.1.3": "8.1.3  Cố gắng can thiệp vào dịch vụ cung cấp cho bất cứ người sử dụng nào, máy chủ hoặc hệ thống mạng nào, bằng cách phát tán vi rút hoặc mã độc lên trang thông tin điện tử, làm quá tải hoặc gây ra hiện tượng thư rác (spamming) trên trang thông tin điện tử;",
	"generalInfo.terms.8.1.4": "8.1.4  Thay đổi thông tin của phần tiêu đề (header) của bộ giao thức điều khiển truyền vận (TCP/IP) hoặc bất cứ phần thông tin nào của phần tiêu đề (header) trong bất cứ thư điện tử hay nhóm thông tin được đăng tải.",
	"generalInfo.terms.8.2": "8.2  Bạn không sử dụng trang thông tin điện tử này cho bất cứ mục đích bất hợp pháp nào.",
	"generalInfo.terms.8.3": "8.3  Bạn phải đảm bảo rằng tất cả các thông tin được đưa lên trang thông tin điện tử này là đầy đủ, chính xác, có thật, phù hợp và nhất quán với các tài liệu chứa đựng các thông tin này. Vi phạm điều này sẽ dẫn đến việc chậm trễ trong quy trình xử lý hoặc các thông tin điện tử được đưa lên bị loại bỏ. Bạn phải chịu trách nhiệm đối với toàn bộ chi phí phát sinh do việc đưa thông tin giả mạo hoặc sai.",
	"generalInfo.terms.8.4": "8.4  Bạn sẽ không tấn công hoặc cố gắng tấn công hoặc làm hại trang thông tin điện tử này bằng bất cứ hình thức hay phương tiện nào như các công cụ tấn công, vi-rút và chương trình máy tính có chứa các mã có thể gây hỏng máy tính. Bất cứ cố gắng nào để thực hiện các hành vi như vậy đều khiến bạn phải chịu sự truy tố theo quy định của pháp luật hiện hành.",
	"generalInfo.terms.9": "9. KHÔNG CHỊU TRÁCH NHIỆM",
	"generalInfo.terms.9.1": "9.1  Mặc dù <b>InOn</b> thực hiện mọi sự cẩn trọng khi cung cấp dịch vụ tại trang thông tin điện tử, <b>InOn</b> không cam kết rằng trang thông tin điện tử này sẽ hoạt động không có lỗi hoặc hoàn toàn không có vi-rút, worms, Trojan horses hoặc các mã độc hại khác.",
	"generalInfo.terms.9.2": "9.2  <b>InOn</b> không chấp nhận bất cứ trách nhiệm nào, và sẽ không chịu trách nhiệm về bất cứ thiệt hại nào xảy ra cho thiết bị máy tính hoặc các tài sản khác của bạn do việc bạn truy cập vào, sử dụng, hoặc xem lướt qua trang thông tin điện tử này hoặc việc bạn tải xuống bất cứ tài liệu, dữ liệu, các thông tin bằng chữ, các hình ảnh, các đoạn video, hoặc các tập tin âm thanh nào từ trang thông tin điện tử này hoặc phát sinh liên quan đến việc chậm thực hiện, lỗi, thiếu sót, bị gián đoạn, lỗi, vi-rút máy tính, chậm trễ trong hoạt động hoặc truyền dữ liệu, hoặc lỗi hệ thống hoặc đường truyền.",
	"generalInfo.terms.9.3": "9.3  <b>InOn</b> cũng từ chối mọi trách nhiệm đối với:",
	"generalInfo.terms.9.3.1": "9.3.1  Bất cứ tổn thất nào hoặc không có khả năng lấy lại các dữ liệu hoặc thông tin vì bất cứ lý do gì và bao gồm việc không chuyển được, việc sử dụng không đúng mục đích hoặc việc chuyển sai do kết quả của bất cứ sự gián đoạn, ngưng hoặc chấm dứt dịch vụ trên trang thông tin điện tử này; ",
	"generalInfo.terms.9.3.2": "9.3.2  Bất cứ sự sai sót của các thông tin hoặc nguồn tài nguyên có sẵn, nhận được hoặc được chuyển thông qua trang thông tin điện tử;",
	"generalInfo.terms.9.3.3": "9.3.3  Bất cứ trục trặc, khuyết điểm hoặc sai sót của trang thông tin điện tử này; ",
	"generalInfo.terms.9.3.4": "9.3.4  Bất cứ sự chậm trễ hoặc không có khả năng trong việc cung cấp dịch vụ của <b>InOn</b> tại trang thông tin điện tử này theo các Điều Khoản và Điệu Kiện do bất cứ khuyết điểm hoặc hỏng hóc về điện tử, cơ khí, hệ thống, xử lý dữ liệu hoặc viễn thông, thiên tai, xáo trộn dân sự hoặc bất cứ sự kiện nào nằm ngoài sự kiểm soát của <b>InOn</b>.",
	"generalInfo.terms.10": "10. MIỄN TRỪ TRÁCH NHIỆM",
	"generalInfo.terms.10.1": "10.1  Trong bất cứ trường hợp nào, <b>InOn</b> cũng không chịu trách nhiệm về bất cứ thiệt hại, tổn thất hoặc chi phí, bao gồm nhưng không giới hạn, thiệt hại trực tiếp, đặc biệt hoặc do hệ quả của, hoặc tổn thất kinh tế phát sinh từ hoặc có liên quan hoặc có thể quy cho:",
	"generalInfo.terms.10.1.1": "10.1.1  Bất cứ việc truy cập, sử dụng hoặc không thể truy cập hoặc sử dụng trang thông tin điện tử hoặc dịch vụ này, hoặc tin cậy vào những thông tin trên trang thông tin điện tử này.",
	"generalInfo.terms.10.1.2": "10.1.2  Bất cứ sự hỏng hóc, sai sót, bỏ sót, gián đoạn hoặc chậm trễ trong việc truyền dữ liệu;",
	"generalInfo.terms.10.1.3": "10.1.3  Bất cứ vi-rút máy tính hoặc hoặc các mã độc hại, hoặc các đoạn mã, chương trình hay một lệnh riêng lẻ bằng ngôn ngữ lập trình mà kết quả là một chuỗi lệnh bằng ngôn ngữ máy tính (macro) mang tính chất làm hỏng hoặc phá hủy khác có thể ảnh hưởng đến các thiết bị, chương trình máy tính hoặc các tài sản khác của bạn.",
	"generalInfo.terms.11": "11. BỒI THƯỜNG",
	"generalInfo.terms.11.1": "11.1 Bằng việc truy cập vào trang thông tin điện tử này, bạn đồng ý bồi thường cho <b>InOn</b>, giữ cho <b>InOn</b> khỏi mọi thiệt hại và bảo vệ <b>InOn</b> khỏi bất cứ khiếu nại, hành động hoặc đòi hỏi, bao gồm nhưng không giới hạn các chi phí pháp lý và kế toán hợp lý, được cho là hoặc là kết quả của việc bạn sử dụng trang thông tin điện tử này hoặc dịch vụ tại trang thông tin điện tử này, hoặc do việc bạn vi phạm các Điều Khoản và Điều Kiện.",
	"generalInfo.terms.12": "12. CHẤM DỨT",
	"generalInfo.terms.12.1": "12.1  <b>InOn</b> bảo lưu quyền, theo quyết định riêng của <b>InOn</b>, chấm dứt dịch vụ trên trang thông tin điện tử này vào bất cứ thời điểm nào, có hoặc không có lý do hoặc chấm dứt quyền truy cập vào trang thông tin điện tử này của bạn mà không cần báo trước và không cần lý do. Bằng việc truy cập vào trang thông tin điện tử này, bạn được coi là từ bỏ quyền được <b>InOn</b> thông báo về việc chấm dứt này, nếu có.",
	"generalInfo.terms.12.2": "12.2  <b>InOn</b> không chịu trách nhiệm về bất cứ thiệt hại, mất mát hoặc chí phí phát sinh theo bất cứ cách thức nào, từ hoặc do việc chấm dứt dịch vụ trên trang thông tin điện tử này.",
	"generalInfo.terms.13": "13. SỬA ĐỔI",
	"generalInfo.terms.13.1": "13.1  <b>InOn</b> có thể thay đổi và thay thế nội dung các Điều Khoản và Điều Kiện này và/hoặc quy định thêm các điều kiện và điều khoản mới vào bất cứ thời điểm nào mà không cần báo trước cho bạn. Bằng việc sử dụng trang thông tin điện tử này, bạn được coi là từ bỏ quyền được thông báo hoặc chấp thuận bất cứ sửa đổi, thay đổi hoặc bổ sung nào với các Điều Khoản và Điều Kiện, nếu có.",
	"generalInfo.terms.13.2": "13.2  Các thay đổi sẽ có hiệu lực vào ngày đầu tiên được đưa lên trang thông tin điện tử này. Nếu bạn tiếp tục sử dụng trang thông tin điện tử sau thời gian đó, bạn được xem là đã chấp nhận các thay đổi.",
	"generalInfo.terms.14": "14. LUẬT ĐIỀU CHỈNH VÀ CƠ QUAN XỬ LÝ TRANH CHẤP",
	"generalInfo.terms.14.1": "14.1  Sự thỏa thuận giữa bạn và <b>InOn</b> trong các Điều Khoản và Điều Kiện này được điều chỉnh và giải thích theo pháp luật Việt Nam.",
	"generalInfo.terms.14.2": "14.2  Trong trường hợp có tranh chấp giữa bạn và <b>InOn</b> phát sinh từ hoặc có liên quan đến sự thỏa thuận này (“Tranh Chấp”), mỗi Bên nỗ lực tối đa để thảo luận các vấn đề với mục đích giải quyết Tranh Chấp thông qua biện pháp hòa giải.",
	"generalInfo.terms.14.3": "14.3  Nếu Tranh Chấp không được giải quyết trong vòng ba mươi (30) ngày kể từ ngày Tranh Chấp phát sinh, Tranh Chấp đó sẽ được phân xử chung thẩm bởi Trung tâm Trọng tài Quốc tế Việt Nam (bên cạnh Phòng Thương Mại và Công Nghiệp Việt Nam) (“VIAC”) bởi một (01) trọng tài viên theo quy tắc tố tụng trọng tài của VIAC có hiệu lực tại thời điểm xảy ra Tranh Chấp và ngôn ngữ trọng tài được sử dụng là tiếng Việt.",
	"createPassword.title": "Create Password",
	"createPassword.password.required": "You must enter your password",
	"createPassword.password.invalid": "You password is invalid",
	"createPassword.enterThePassword": "Enter the password *",
	"createPassword.passwordMustMatch": "Password must match",
	"createPassword.condition.1": "- At least 8 characters long",
	"createPassword.condition.2": "- Include upper and lower case characters",
	"createPassword.condition.3": "- Include numeric and special characters",
	"createPassword.continutes": "CONTINUTE",
	"createPassword.done": "DONE",
	"createPassword.resetSuccessFul": "Change password successful!",
	"provideNewPassword.title": "PROVIDE A NEW PASSWORD",
	"provideNewPassword.continutes": "DONE",
	"provideNewPassword.password": "Enter your new password *",
	"provideNewPassword.enterThePassword": "Enter a new password *",
	"completeInformation.title": "Additional information",
	"completeInformation.idType": "Type of identification",
	"completeInformation.idType.required": "You must choose type of indentification",
	"completeInformation.nbrPer": "Identification number",
	"completeInformation.nbrPer.required": "You must enter infor number",
	"completeInformation.nbrPer.invalid": "You Indenetication number is invalid",
	"completeInformation.dateOfBirth": "Date of birth",
	"completeInformation.dateOfBirth.required": "You must enter date of birth",
	"completeInformation.address": "Address",
	"completeInformation.address.required": "You must enter address",
	"completeInformation.gif": "Referal code",
	"completeInformation.branch": "Branch",
	"completeInformation.branch.required": "You must enter branch",
	"completeInformation.accountNbr": "Account number",
	"completeInformation.accountNbr.required": "You must enter account number",
	"completeInformation.personalInfo": "Passport*",
	"completeInformation.gender": "Gender",
	"completeInformation.province": "City",
	"completeInformation.province.required": "You must select your city",
	"completeInformation.district": "District",
	"completeInformation.district.required": "You must select your district",
	"completeInformation.ward": "Wards",
	"completeInformation.ward.required": "You must select your ward",
	"completeInformation.bank": "Bank",
	"completeInformation.bank.required": "Bạn phải chọn Ngân hàng*",
	"completeInformation.back": "BACK",
	"completeInformation.done": "DONE",
	"completeInformation.success": "Complete information successfully!",
	"socialLogin.addInfo": "Additional Information",
	"socialLogin.addInfo.info": "InOn needs you to add the following information to complete account registration.",
	"socialLogin.agent": "Agent",
	"socialLogin.personal": "Personal",
	"socialLogin.loginWith": "Or login with",
	"socialLogin.registerWith": "Or register with",
	"socialLogin.youLoginAs": "You log in as,",
	"socialLogin.youRegisterAs": "You register as,",
	"socialLogin.requireConnectFB": "Please link your account with Facebook to use this feature",
	"socialLogin.requireConnectGoogle": "Please link your account with Google to use this feature",
	"verifyAccount.title": "Account verification",
	"verifyAccount.success": "Successful account verification, please click below to create a password.",
	"verifyAccount.fail": "Account verification failed!",
	"verifyAccount.didNotReceiveCode": "Did not receive the code?",
	"verifyAccount.tryAgain": "Try Again",
	"verifyAccount.loading": "Processing...",
	"verifyAccount.createPassword": "Create password",
	"verifyAccount.phoneNumberVerification": "Phone number verification",
	"verifyAccount.otp.info": "Please enter the OTP that has been sent to your phone number <b> {phoneNumber} </b>",
	"verifyAccount.otp.verify": "Verify",
	"verifyAccount.otp.getOtp": "Get OTP",
	"verifyAccount.otp.registerSuccess": "Đăng ký thành công, liên kết tạo mật khẩu đã được gửi đến email của bạn!",
	"connectWithSocial.connectAccount": "Connect account",
	"connectWithSocial.connect": "Connection",
	"connectWithSocial.success": "Successful connection",
	"bonusPoint.history": "Bonus points calendar",
	"bonusPoint.received": "Received",
	"bonusPoint.used": "Used",
	"bonusPoint.bonus": "InOn gives bonus points for completed contracts",
	"bonusPoint.paymentContract": "Used InOn bonus points to pay the contract",
	"bonusPoint.withDrawval": "Used InOn bonus points to withdraw money",
	"bonusPoint.gift": "Used InOn reward points to redeem gifts",
	"bonusPoint.yourBonusPoint": "You have {point} bonus points",
	"bonusPoint.availablePoint": "Bonus points available",
	"bonusPoint.uses": "Use bonus points to redeem gifts, withdraw money, pay contracts"
};

var login$1 = "Đăng nhập";
var register$2 = "Đăng ký";
var forgotPassword$2 = "Quên mật khẩu";
var setting$1 = "Cài đặt";
var messages_vi = {
	"commom.error.requireField": "Bạn phải nhập {fieldName}",
	"common.gender.male": "Nam",
	"common.gender.female": "Nữ",
	"common.gender.other": "Khác",
	"common.icType.personalID": "Chứng minh nhân dân",
	"common.icType.citizenIdentify": "Căn cước công dân",
	"common.icType.passport": "Hộ chiếu",
	"common.icType.CMND": "Chứng minh nhân dân",
	"common.icType.CCCD": "Căn cước công dân",
	"common.icType.HC": "Hộ chiếu",
	"common.home": "Trang chủ",
	"common.backHome.confirmMessage": "Bạn có muốn quay lại trang chủ không?",
	"common.saveChanges": "Lưu thay đổi",
	"common.saveChanges.confirmMessage": "Bạn có muốn lưu thay đổi?",
	"common.cancel": "Hủy",
	"common.ok": "Đồng ý",
	"common.noResults": "Không có kết quả",
	"common.sessionExpired": "Phiên làm việc của bạn đã hết hạn, bạn vui lòng đăng nhập lại!",
	"common.error.500": "Có lỗi xảy ra, xin vui lòng thử lại!",
	"common.table.previous": "Trước",
	"common.table.next": "Tiếp",
	"common.table.page": "Trang",
	"common.table.of": "của",
	"common.table.rows": "dòng",
	"common.table.noData": "Không tìm thấy kết quả",
	"common.back": "Quay lại",
	"landingPage.copyRight": "2020-{year}: InOn - Bảo hiểm không ngủ",
	"landingPage.slogan": "Nơi cung cấp các giải pháp công nghệ trong lĩnh vực bảo hiểm",
	"landingPage.welcomeText": "Chào mừng bạn đến với InOn",
	login: login$1,
	"login.firstWelcome": "Chào mừng bạn đến với InOn X!",
	"login.logedWelcome": "Xin chào,",
	"login.username": "Tên tài khoản *",
	"login.username.required": "Bạn phải nhập tên tài khoản",
	"login.username.invalid": "Tên tài khoản không hợp lệ",
	"login.password": "Mật khẩu *",
	"login.password.required": "Bạn phải nhập mật khẩu",
	"login.rememberMe": "Ghi nhớ tôi",
	"login.notMe": "Không phải tôi",
	"login.fail": "Tài khoản hoặc mật khẩu của bạn không chính xác",
	"login.sayHi": "Xin chào, {name}",
	"login.registerPartner": "Đăng ký đối tác",
	"login.needRegisterPartner": "Tài khoản của bạn không sử dụng được chức năng này. Vui lòng đăng ký đối tác hoặc đăng nhập với tư cách khách hàng cá nhân.",
	register: register$2,
	"register.fullname": "Họ và tên",
	"register.email": "Email*",
	"register.fullname.invalid": "Tên của bạn không thể chứa ký tự đặc biệt",
	"register.fullname.required": "Bạn phải nhập họ và tên",
	"register.email.required": "Bạn phải nhập địa chỉ email",
	"register.email.invalid": "Địa chỉ email không hợp lệ",
	"register.phoneNumber": "Số điện thoại",
	"register.phoneNumber.required": "Bạn phải nhập số điện thoại",
	"register.phoneNumber.invalid": "Số điện thoại không hợp lệ",
	"register.refCode": "Mã giới thiệu",
	"register.refCode.invalid": "Mã giới thiệu không hợp lệ",
	"register.mustAppcepted": "Bạn phải đồng ý điều khoản và điều kiện của chúng tôi",
	"register.registerSuccess": "Đề nghị đăng ký của đối tác đang được xử lý.Vui lòng kiểm tra email để hoàn thành.Xin cảm ơn!",
	"register.agreeWith": "Tôi đồng ý với",
	"register.policyAndCondition": "Điều khoản và Điều kiện",
	"register.useService": "sử dụng dịch vụ.",
	forgotPassword: forgotPassword$2,
	"forgotPassword.verify": "Xác thực",
	"forgotPassword.username": "Tên tài khoản *",
	"forgotPassword.username.required": "Bạn phải nhập tên tài khoản",
	"forgotPassword.email": "Email đăng ký *",
	"forgotPassword.email.required": "Bạn phải nhập email đăng ký",
	"forgotPassword.successfull": "Link thay đổi password đã được gửi đến email của bạn!",
	"forgotPassword.fail": "Số điện thoại hoặc Email của bạn không chính xác",
	"forgotPassword.notFoundEmailSuggestion": "Không tìm thấy email với tên đăng nhập của bạn",
	"forgotPassword.yourEmailIs": "Email của bạn là",
	"menu.home": "Trang chủ",
	"menu.user": "Tài khoản",
	"menu.contract": "Hợp đồng",
	"menu.buyInsurance": "Mua bảo hiểm",
	"menu.contractManagement": "Quản lý hợp đồng",
	"menu.personalContracts": "Hợp đồng cá nhân",
	"menu.partnerContracts": "Hợp đồng đối tác",
	"menu.allContracts": "Tất cả hợp đồng",
	"menu.account": "Tài khoản",
	"menu.createAccount": "Tạo mới tài khoản",
	"menu.accountManagement": "Quản lý tài khoản",
	"menu.createMultipleAccount": "Tạo nhiều tài khoản",
	"menu.insuranceFeeManagement": "Quản lý Tỷ lệ phí",
	"menu.systemFee": "Phí của hệ thống",
	"menu.personalFee": "Phí của cá nhân",
	"menu.lxPartnerFee": "Phí của vãng lai",
	"menu.partnerFee": "Phí của đối tác",
	"menu.customerFee": "Phí của KH cá nhân",
	"menu.allFee": "Phí của tất cả",
	"menu.feeApproval": "Phê duyệt phí",
	"menu.bonusManagement": "Quản lý điểm thưởng",
	"menu.systemBonus": "Điểm thưởng hệ thống",
	"menu.customerBonus": "Điểm thưởng KH cá nhân",
	"menu.personalBonus": "Điểm thưởng cá nhân",
	"menu.partnerBonus": "Điểm thưởng đối tác",
	"menu.lxPartnerBonus": "Điểm thưởng vãng lai",
	"menu.allBonus": "Điểm thưởng tất cả",
	"menu.bonusApproval": "Phê duyệt điểm thưởng",
	"menu.bonusClient": "Điểm thưởng KH cá nhân",
	"menu.insuranceCertificate": "Giấy chứng nhận BH",
	"menu.insuranceCertificate.newImport": "Nhập mới",
	"menu.insuranceCertificate.newExport": "Xuất mới",
	"menu.insuranceCertificate.wrongImport": "Nhập sai hỏng",
	"menu.insuranceCertificate.wrongExport": "Xuất sai hỏng",
	"menu.debt": "Công nợ",
	"menu.createDebt": "Tạo mới công nợ",
	"menu.editDebt": "Sửa công nợ",
	"menu.debtApproval": "Duyệt công nợ",
	"menu.debtManagement": "Quản lý công nợ",
	"menu.partnerDebt": "Công nợ đối tác",
	"menu.personalDebt": "Công nợ cá nhân",
	"menu.allDebt": "Công nợ tất cả",
	"menu.permissionGoup": "Nhóm quyền",
	"menu.creatPermissionGoup": "Tạo mới nhóm quyền",
	"menu.permissionGoupManagement": "Quản lý nhóm quyền",
	"menu.insuranceMotobike": "Bảo hiểm xe máy",
	"menu.insuranceCar": "Bảo hiểm ô tô",
	"menu.approveOpenAccount": "Phê duyệt mở tài khoản",
	"menu.promotion": "Khuyến mại",
	"menu.helpCenter": "Trung tâm trợ giúp",
	"menu.createHelpCenter": "Tạo mới",
	"menu.helpCenterQuestion": "Câu hỏi thường gặp",
	"menu.helpCenterUserManual": "Hướng dẫn sử dụng",
	"menu.helpCenterProfessinalDocument": "Tài liệu nghiệp vụ",
	"menu.createPromotion": "Tạo khuyến mại",
	"menu.promotionManagement": "Quản lý khuyến mại",
	"menu.personalBonusHistory": "Lịch sử điểm thưởng cá nhân",
	"menu.partnerBonusHistory": "Lịch sử điểm thưởng đối tác",
	"menu.allBonusHistory": "Lịch sử điểm thưởng tất cả",
	"menu.notification": "Thông báo",
	"menu.readAll": "Đọc tất cả",
	"menu.deleteAll": "Xóa tất cả",
	"menu.confirmDeleteAll": "Bạn có muốn xóa tất cả thông báo",
	"menu.notificationManagement": "Quản lý thông báo",
	"menu.createNotification": "Tạo mới thông báo",
	"menu.notificationApproval": "Duyệt thông báo",
	"menu.support": "Hỗ trợ 24/7",
	"menu.createSupportRequest": "Tạo mới yêu cầu",
	"menu.managementSupportRequest": "Quản lý yêu cầu hỗ trợ",
	"menu.mySupportRequest": "Yêu cầu cá nhân",
	"menu.permissionRequest": "Phân quyền",
	"menu.compensationManagement": "Quản lý bồi thường",
	"menu.accountProduct": "Sản phẩm Tài khoản",
	"menu.accountProductManagement": "Quản lý",
	"menu.accountProductImport": "Nhập dữ liệu",
	"navbar.language.vi": "Tiếng Việt",
	"navbar.language.en": "English",
	"navbar.logout": "Đăng xuất",
	"navbar.logout.confirmMessage": "Bạn có muốn đăng xuất tài khoản?",
	"navbar.notifications.markAsRead": "Đánh dấu đã đọc",
	"navbar.notifications.markAsUnRead": "Đánh dấu chưa đọc",
	"navbar.notifications.delete": "Xóa",
	"navbar.notifications.newNotificationNotice": "Bạn có một thông báo mới",
	"navbar.notifications.noNewNotifications": "Bạn chưa có thông báo mới",
	"footer.copyRight": "©2020-{year}: InOn - Đã đăng ký bản quyền",
	"footer.companySlogan": "Nhà cung cấp bảo hiểm hàng đầu Việt Nam",
	setting: setting$1,
	"setting.accountInformation": "Thông tin tài khoản",
	"setting.changePassword": "Thay đổi mật khẩu",
	"setting.change": "Thay đổi",
	"setting.partnerCode": "Mã đối tác",
	"setting.accountCode": "Mã tài khoản",
	"setting.referralCode": "Mã giới thiệu",
	"setting.personalSetting": "Cài đặt Cá nhân",
	"setting.generalInformation": "Thông tin chung",
	"setting.notification": "Thông báo",
	"setting.deviceManagement": "Quản lý thiết bị",
	"setting.language": "Ngôn ngữ",
	"setting.helpCenter": "Trung tâm trợ giúp",
	"setting.connectSocial": "Liên kết mạng xã hội",
	"setting.bonusPoint": "Điểm thưởng của bạn",
	"setting.termAndCondition": "Điều khoản & Điều kiện",
	"setting.general": "Chung",
	"setting.privacyPolicy": "Chính sách bảo mật",
	"setting.frequentlyAsked": "Câu hỏi thường gặp",
	"setting.contact": "Liên hệ",
	"setting.feedback": "Góp ý, báo lỗi",
	"setting.share": "Chia sẻ",
	"setting.status.COMPLETE": "Tài khoản đã hoàn thiện thông tin",
	"setting.status.UNCOMPLE": "Tài khoản cần bổ sung thông tin",
	"setting.gender.M": "Name",
	"setting.gender.F": "Nữ",
	"setting.gender.O": "Khác",
	"setting.goToGuestApp": "Về trang KHCN",
	"setting.goToAgencyApp": "Về trang đối tác",
	"setting.call": "Gọi điện",
	"setting.call.confirmMessage": "Bạn có muốn gọi đến số {phoneNumber}?",
	"setting.sendEmail": "Gửi mail",
	"setting.updateInfo.success": "Thay đổi thông tin thành công!",
	"setting.updateInfo.confirmMessage": "Bạn có muốn thay đổi thông tin tài khoản?",
	"setting.updateInfo.imageTypeInvalid": "File tải lên không hợp lệ!",
	"setting.updateInfo.imageExceedSize": "File tải lên vượt quá dung lượng cho phép ({size}MB)!",
	"setting.shareWithFriends": "Chia sẻ với bạn bè",
	"setting.copySuccess": "Sao chép thành công!",
	"changePassword.newPassword": "Mật khẩu mới",
	"changePassword.newPassword.required": "Bạn phải nhập mật khẩu mới",
	"changePassword.newPassword.invalid": "Mật khẩu mới không hợp lệ",
	"changePassword.oldPassword": "Mật khẩu cũ",
	"changePassword.oldPassword.required": "Bạn phải nhập mật khẩu cũ",
	"changePassword.oldPassword.invalid": "Mật khẩu cũ không hợp lệ",
	"changePassword.confirmPassword.required": "Bạn phải nhập lại mật khẩu mới",
	"changePassword.passwordMustMatch": "Mật khẩu không trùng khớp",
	"changePassword.confirmMessage": "Bạn có muốn thay đổi mật khẩu?",
	"changePassword.success": "Thay đổi mật khẩu thành công!",
	"generalInfo.changeLanguage.confirmMessage": "Bạn có muốn thay đổi ngôn ngữ?",
	"generalInfo.changeLanguage.success": "Thay đổi ngôn ngữ thành công!",
	"generalInfo.policy.1": "1. CÁC LOẠI DỮ LIỆU CÁ NHÂN CHÚNG TÔI SẼ THU THẬP VÀ XỬ LÝ",
	"generalInfo.policy.1.1": "1.1  Thông tin cá nhân và thông tin liên lạc chi tiết, ví dụ chức vụ, họ tên, thông tin liên lạc chi tiết và lịch sử liên lạc chi tiết; thông tin tài liệu du lịch; ngày sinh, giới tính và/hoặc tuổi của bạn; quốc tịch, bản sao giấy tờ nhận dạng bạn (nếu có liên quan đến sản phẩm hoặc dịch vụ);",
	"generalInfo.policy.1.2": "1.2  Thông tin chi tiết về người thụ hưởng, ví dụ chủ hợp đồng bảo hiểm và người thụ hưởng của các sản phẩm hoặc dịch vụ của chúng tôi;",
	"generalInfo.policy.1.3": "1.3  Các thành viên trong gia đình (nếu có liên quan đến sản phẩm hoặc dịch vụ);",
	"generalInfo.policy.1.4": "1.4  Hồ sơ liên lạc của bạn với chúng tôi, chẳng hạn như lịch sử các cuộc gọi của bạn đến số điện thoại của trung tâm dịch vụ khách hàng của chúng tôi và, nếu bạn liên lạc với chúng tôi bằng các dịch vụ trực tuyến hoặc qua ứng dụng điện thoại thông minh của chúng tôi, các chi tiết như dữ liệu vị trí điện thoại di động, địa chỉ IP và địa chỉ MAC;",
	"generalInfo.policy.1.5": "1.5  Sản phẩm và dịch vụ, bạn đã mua từ chúng tôi, cũng như những sản phẩm bạn quan tâm và đã nắm giữ và các phương thức thanh toán liên quan được bạn sử dụng;",
	"generalInfo.policy.1.6": "1.6  Việc sử dụng các sản phẩm và dịch vụ của chúng tôi, các yêu cầu bồi thường bảo hiểm và tình trạng thanh toán các yêu cầu bồi thường này (và các chi tiết khác liên quan đến vấn đề này);",
	"generalInfo.policy.1.7": "1.7  Phân tích dữ liệu tiếp thị sản phẩm hoặc dịch vụ được thực hiện riêng cho bạn, bao gồm lịch sử liên lạc và thông tin về việc bạn có mở các tài liệu này hay nhấp vào đường link liên kết;",
	"generalInfo.policy.2": "2. CÁCH THỨC CHÚNG TÔI THU THẬP DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.2.1": "2.1  Trực tiếp từ bạn và bất kỳ thông tin nào từ các thành viên gia đình, cộng sự hoặc người thụ hưởng sản phẩm và dịch vụ;",
	"generalInfo.policy.2.2": "2.2  Thông tin về bạn được tạo ra khi bạn sử dụng các sản phẩm và dịch vụ của chúng tôi;",
	"generalInfo.policy.2.3": "2.3  Từ một nhà môi giới hoặc một bên trung gian khác (ví dụ: đại lý, nhà phân phối, đối tác kinh doanh), các bên mà chúng tôi có hợp tác để cung cấp sản phẩm hoặc dịch vụ hoặc cung cấp báo giá cho bạn;",
	"generalInfo.policy.2.4": "2.4  Các công ty đối tác liên kết với InOn, nếu bạn đã từng đăng ký mua hoặc đã mua sản phẩm từ các công ty này;",
	"generalInfo.policy.2.5": "2.5  Cookie, dịch vụ định vị, địa chỉ IP khi bạn truy cập trang mạng hoặc ứng dụng di động của chúng tôi hoặc khi bạn điền vào biểu mẫu Liên hệ với chúng tôi trong trang mạng hoặc ứng dụng của chúng tôi;",
	"generalInfo.policy.2.6": "2.6  Các bên thứ ba như công ty bảo hiểm, đại lý, nhà cung cấp, tổ chức tài chính, cá nhân y tế, tòa án hoặc hồ sơ thông tin đã được công bố công khai;",
	"generalInfo.policy.2.7": "2.7  Bảng câu hỏi và thông tin liên lạc chi tiết khi bạn tham gia khảo sát, hội nghị nhà đầu tư, các buổi hội thảo hoặc khi bạn cập nhật thông tin liên lạc của bạn với chúng tôi trên trang mạng của chúng tôi;",
	"generalInfo.policy.2.8": "2.8  Từ các nguồn khác như Cơ quan phòng chống gian lận, tổ chức tham chiếu tín dụng, người cho vay khác và các thông tin đã được công bố công khai (ví dụ: danh bạ điện thoại, phương tiện truyền thông xã hội, các trang mạng, các bài báo), các tổ chức thu hồi nợ, các tổ chức khác để hỗ trợ phòng ngừa và phát hiện tội phạm, cảnh sát và các cơ quan thực thi pháp luật;",
	"generalInfo.policy.2.9": "2.9  Chúng tôi mua thông tin về bạn hoặc khách hàng nói chung từ các bên thứ ba bao gồm thông tin nhân khẩu học, chi tiết các phương tiện đi lại, lịch sử yêu cầu bồi thường, thông tin về gian lận, danh sách quảng cáo tiếp thị, thông tin đã được công bố công khai và thông tin khác để giúp cải thiện sản phẩm và dịch vụ của chúng tôi.",
	"generalInfo.policy.3": "3. CHÍNH SÁCH COOKIE",
	"generalInfo.policy.3.1": "3.1   Trang mạng của chúng tôi sử dụng cookie để phân biệt bạn với những người dùng khác. Điều này giúp chúng tôi cung cấp cho bạn trải nghiệm tốt khi bạn sử dụng trang mạng và cũng cho phép chúng tôi cải thiện trang mạng của mình. Cookie là một tệp nhỏ gồm các chữ cái và số mà chúng tôi lưu trữ trên trình duyệt hoặc ổ cứng máy tính của bạn. Cookie chứa thông tin được lưu trữ trên ổ cứng máy tính của bạn. Bạn có khả năng chấp nhận hoặc từ chối cookie bằng cách sửa đổi cài đặt trong trình duyệt của bạn. Nếu bạn muốn làm điều này, xin vui lòng xem mục trợ giúp trong trình duyệt của bạn.",
	"generalInfo.policy.3.2": "3.2   Chúng tôi sử dụng các loại cookie sau:",
	"generalInfo.policy.3.2.1": "3.2.1    Cookie cần thiết cho trang mạng, đây là các cookie cần phải có để phục vụ hoạt động của trang  mạng của chúng tôi. Ví dụ, các cookie cho phép bạn đăng nhập vào trang mạng của chúng tôi một cách an toàn;",
	"generalInfo.policy.3.2.2": "3.2.2    Cookie phân tích/quản lý hoạt động: các cookie này cho phép chúng tôi nhận ra và đếm số lượng người dùng truy cập vào trang mạng của chúng tôi và theo dõi cách người dùng truy cập di huyển xung quanh trang mạng của chúng tôi khi họ đang sử dụng nó. Điều này giúp chúng tôi cải thiện cách thức hoạt động của trang mạng, ví dụ, cải tiến để giúp người dùng tìm kiếm những thứ họ cần một cách dễ dàng;",
	"generalInfo.policy.3.2.3": "3.2.3    Cookie chức năng: chúng được sử dụng để nhận ra bạn khi bạn quay lại trang mạng của chúng tôi. Điều này cho phép chúng tôi cá nhân hóa nội dung của chúng tôi cho bạn, chào bạn bằng tên và ghi nhớ sở thích của bạn (ví dụ: lựa chọn ngôn ngữ hoặc khu vực của bạn).",
	"generalInfo.policy.3.3": "3.3   Bằng cách tiếp tục sử dụng trang mạng của chúng tôi, bạn chấp nhận chúng tôi sử dụng các loại cookie như đã nêu ở trên.",
	"generalInfo.policy.4": "4. CÁCH THỨC VÀ LÝ DO CHÚNG TÔI SỬ DỤNG DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.4.1": "4.1  Chúng tôi, <b>InOn</b> và các đối tác kinh doanh sẽ sử dụng dữ liệu cá nhân bạn cung cấp cho chúng tôi, cùng với các thông tin khác, cho các mục đích sau:",
	"generalInfo.policy.4.1.1": "<table class='table table-bordered info-item-table'><thead><tr><td>Mục đích</td><td>Cơ sở pháp lý</td></tr></thead><tbody><tr><td>Quản lý các sản phẩm và dịch vụ của chúng tôi, bao gồm cho phép chúng tôi thực hiện nghĩa vụ của chúng tôi với bạn và cung cấp mọi dịch vụ liên quan như đã thảo luận với bạn trước khi bạn mua sản phẩm hoặc dịch vụ.</td><td rowspan='2'>Cần thiết cho việc thực hiện hợp đồng của chúng tôi với bạn hoặc để thực hiện các bước trước khi ký hợp đồng với bạn.&nbsp;</td></tr><tr><td>Thực hiện kiểm tra bằng cách thông qua các tổ chức như tổ chức tín dụng, công ty hỗ trợ tìm kiếm hoặc thông tin đã được công bố công khai (xem thêm nội dung trình bày trong Phần “Kiểm tra tham khảo”).</td></tr><tr><td>Cung cấp dịch vụ khách hàng – như trả lời thắc mắc của bạn hoặc thông báo cho bạn biết các thay đổi.</td><td rowspan='3'>Cần thiết cho việc thực hiện hợp đồng của chúng tôi với bạn. Sau khi hợp đồng chúng tôi ký với bạn hoàn tất, đây là lợi ích hợp pháp của chúng tôi trong việc duy trì và phát triển mối quan hệ của chúng tôi với bạn.</td></tr><tr><td>Tự động ra quyết định hoặc tạo hồ sơ cá nhân của bạn (xem thêm nội dung trình bày trong Phần “Chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động hoặc tạo hồ sơ cá nhân của bạn”).</td></tr><tr><td>Lưu giữ thông tin của bạn và thực hiện các công việc quản lý nội bộ khác.</td></tr><tr><td>Tuân thủ với các yêu cầu pháp quy hoặc pháp lý khác.</td><td>Tuân thủ với các nghĩa vụ pháp lý của chúng tôi.</td></tr><tr><td>Thiết kế và cung cấp cho bạn các sản phẩm và dịch vụ bảo hiểm và tài chính liên quan.</td><td rowspan='2'>Lợi ích chính đáng của chúng tôi trong việc thiết kế và cải tiến sản phẩm, cung cấp dịch vụ giá trị gia tăng, phát triển kinh doanh và hiểu rõ hơn về cách sử dụng sản phẩm của chúng tôi.&nbsp;</td></tr><tr><td>Tiến hành nghiên cứu và phân tích thống kê (bao gồm cả việc sử dụng các công nghệ mới).</td></tr></tbody></table>",
	"generalInfo.policy.4.2": "4.2  Ngoài ra, chúng tôi, <b>InOn</b> và các đối tác kinh doanh của chúng tôi, sẽ sử dụng dữ liệu cá nhân bạn cung cấp cho chúng tôi, cùng với các thông tin khác, để gửi cho bạn các ưu đãi tiếp thị trực tiếp bằng phương tiện điện tử và phi điện tử bao gồm qua đường bưu điện, cũng như gửi cho bạn thông tin giới thiệu các sản phẩm và dịch vụ từ các bên thứ ba đã được chọn lọc kỹ lưỡng. Cơ sở pháp lý chúng tôi trình bày bên trên được xây dựng dựa trên sự đồng thuận với bạn.",
	"generalInfo.policy.4.3": "4.3  Chúng tôi chia sẽ dữ liệu cá nhân của bạn với ai và tại sao:",
	"generalInfo.policy.4.3.1": "4.3.1  Chúng tôi sẽ chia sẻ thông tin cá nhân và sức khỏe của bạn trong nội bộ <b>InOn</b> và với các đối tác kinh doanh tài chính/sức khỏe và các bên thứ ba cung cấp dịch vụ cho chúng tôi (bao gồm nhưng không giới hạn các công ty bảo hiểm, luật sư, ngân hàng, kế toán, tổ chức tài chính, bên ủy thác và các nhà cung cấp dịch vụ là bên thứ ba khác cung cấp dịch vụ quản lý, viễn thông, máy tính, thanh toán, in ấn, mua lại hoặc các dịch vụ khác để cho phép chúng tôi thực hiện hoạt động kinh doanh), các công ty thẩm định hóa đơn y tế, các công ty thẩm định yêu cầu bồi thường, hiệp hội và hiệp đoàn trong cùng ngành, các bên đồng sở hữu hợp đồng bảo hiểm hoặc khoản đầu tư, cố vấn chuyên nghiệp, nhà nghiên cứu, tổ chức tham chiếu tín dụng, tổ chức thu hồi nợ, tổ chức tài chính/y tế và các bên đối tác để thực hiện các mục đích được nêu trong Phần “Cách thức và lý do chúng tôi sử dụng dữ liệu cá nhân của ban”. Nếu bạn có chung hợp đồng bảo hiểm với người khác, thì người đó cũng có thể nhận được dữ liệu cá nhân của bạn. Nếu được yêu cầu, chúng tôi cũng có thể chuyển dữ liệu cá nhân của bạn cho các cơ quan phòng chống tội phạm tài chính, bất kỳ cơ quan lập pháp, tư pháp hoặc hành pháp nào khác.",
	"generalInfo.policy.4.3.2": "4.3.2  Chúng tôi có thể xử lý dữ liệu cá nhân của bạn ở một quốc gia khác ngoài quốc gia mà bạn cư trú. Trong phạm vi chúng tôi chuyển dữ liệu cá nhân của bạn, chúng tôi sẽ sử dụng các biện pháp bảo vệ phù hợp và tuân thủ luật pháp của quốc gia nơi dữ liệu cá nhân của bạn được chuyển đến. Khi bạn yêu cầu, chúng tôi sẽ cung cấp cho bạn chi tiết các biện pháp bảo vệ dữ liệu mà chúng tôi đang sử dụng.",
	"generalInfo.policy.4.4": "4.4  Chúng tôi lưu trữ dữ liệu cá nhân của bạn trong một khoảng thời gian nhất định",
	"generalInfo.policy.4.4.1": "4.4.1   Dữ liệu cá nhân của bạn sẽ được lưu trữ khi bạn (hoặc đồng sở hữu hợp đồng bảo hiểm với bạn) là khách hàng của chúng tôi và trong khoảng thời gian sáu năm sau khi kết thúc mối quan hệ khách hàng hoặc lâu hơn nếu pháp luật yêu cầu. Có thể có những trường hợp cụ thể khi chúng tôi cần lưu giữ dữ liệu cá nhân của bạn lâu hơn (chẳng hạn như khi có tranh chấp xảy ra).",
	"generalInfo.policy.5": "5. KIỂM TRA THAM KHẢO",
	"generalInfo.policy.5.1": "5.1  Đối với một số sản phẩm nhất định, chúng tôi có thể sử dụng các tổ chức tham chiếu tín dụng, công ty  hỗ trợ tìm kiếm, cơ quan phòng chống tội phạm tài chính hoặc thông tin có sẵn công khai để giúp chúng tôi kiểm tra danh tính của bạn, cũng như để tránh gian lận và rửa tiền; điều này có thể bao gồm kiểm tra các địa chỉ hiện tại hoặc trước đây của bạn. Những kết quả này có thể được ghi lại để tham khảo trong tương lai.",
	"generalInfo.policy.5.2": "5.1  Những kết quả kiểm tra này cũng có thể được sử dụng cho một nhà đầu tư, chủ sở hữu hợp đồng chung hoặc người mà bạn đồng ý cung cấp dữ liệu cá nhân của mình. Nếu chúng tôi mất liên lạc với bạn, chúng tôi có thể sử dụng các tổ chức này để xác minh địa chỉ của bạn nhằm giúp chúng tôi liên lạc với bạn.",
	"generalInfo.policy.5.3": "5.3  Mọi việc chuyển dữ liệu cá nhân của bạn sẽ luôn được thực hiện an toàn.",
	"generalInfo.policy.6": "6. CHÚNG TÔI CÓ THỂ SỬ DỤNG DỮ LIỆU CÁ NHÂN CỦA BẠN ĐỂ ĐƯA RA QUYẾT ĐỊNH TỰ ĐỘNG HOẶC TẠO HỒ SƠ CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.6.1": "6.1  Chúng tôi, <b>InOn</b>, Đối tác kinh doanh và Đối tác tiếp thị của chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động ảnh hưởng đến bạn hoặc tạo hồ sơ cá nhân khác cho bạn (ví dụ: hồ sơ tiếp thị).",
	"generalInfo.policy.7": "7. SỬ DỤNG DỮ LIỆU CÁ NHÂN NHẠY CẢM CỦA BẠN",
	"generalInfo.policy.7.1": "7.1  Đối với một số sản phẩm hoặc dịch vụ nhất định, chúng tôi sẽ cần xử lý dữ liệu cá nhân nhạy cảm của bạn, chẳng hạn như thông tin liên quan đến sức khỏe, di truyền, định danh sinh trắc học và khuynh hướng giới tính. Trong phạm vi chúng tôi cần sự đồng ý rõ ràng của bạn để xử lý loại dữ liệu cá nhân này theo cách được mô tả trong Phần “Cách thức và lý do chúng tôi sử dụng dữ liệu cá nhân của bạn” , “Kiểm tra tham khảo” và “Chúng tôi có thể sử dụng dữ liệu cá nhân của bạn để đưa ra quyết định tự động hoặc tạo hồ sơ cá nhân của bạn”, chúng tôi sẽ cung cấp chi tiết về điều này khi chúng tôi thu thập các thông tin này từ bạn và xin nhận được sự chấp thuận của bạn.",
	"generalInfo.policy.8": "8. QUYỀN KIỂM SOÁT DỮ LIỆU CÁ NHÂN CỦA BẠN",
	"generalInfo.policy.8.1": "8.1  Khi nói đến cách chúng tôi sử dụng dữ liệu cá nhân của bạn, bạn có quyền theo quy định của pháp luật Việt Nam.",
	"generalInfo.policy.8.2": "8.2  Trong khi đó, nếu bạn hiện đang cư trú tại Châu Âu, các quyền bổ sung theo Quy định bảo vệ dữ liệu chung (GDPR) có thể được áp dụng. Như vậy, bạn có thể:",
	"generalInfo.policy.8.2.1": "8.2.1  Yêu cầu một bản sao dữ liệu cá nhân của bạn miễn phí (chúng tôi có thể tính phí yêu cầu của bạn nếu không có cơ sở rõ ràng hoặc bị lạm dụng quá mức);",
	"generalInfo.policy.8.2.2": "8.2.2  Trong một số trường hợp nhất định, chúng tôi sẽ chuyển dữ liệu cá nhân của bạn sang một tổ chức khác theo yêu cầu của bạn;",
	"generalInfo.policy.8.2.3": "8.2.3  Yêu cầu chúng tôi điều chỉnh bất cứ dữ liệu cá nhân nào bị sai hoặc không đầy đủ;",
	"generalInfo.policy.8.2.4": "8.2.4  Yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn nếu không còn cần thiết cho các mục đích được nêu trong Phần “Các loại dữ liệu cá nhân chúng tôi sẽ thu thập và xử lý” hoặc nếu không có cơ sở pháp lý nào khác để xử lý dữ liệu;",
	"generalInfo.policy.8.2.5": "8.2.5  Giới hạn cách chúng tôi sử dụng dữ liệu cá nhân của bạn hoặc rút lại sự đồng ý (bao gồm cả việc đồng ý cho phép đưa ra quyết định tự động dựa trên dữ liệu cá nhân) mà bạn đã chấp thuận cho phép chúng tôi xử lý dữ liệu cá nhân của bạn;",
	"generalInfo.policy.8.2.6": "8.2.6  Phản đối chúng tôi sử dụng dữ liệu cá nhân của bạn để tiếp thị trực tiếp (bao gồm cả việc tạo lập hồ sơ cá nhân của bạn) hoặc xử lý dữ liệu khác dựa trên lợi ích hợp pháp;",
	"generalInfo.policy.8.2.7": "8.2.7  Khiếu nại với cơ quan bảo vệ dữ liệu hoặc cơ quan quản lý độc lập khác về cách chúng tôi sử dụng dữ liệu cá nhân của bạn.",
	"generalInfo.policy.8.3": "8.3  Nếu bạn muốn thực hiện các quyền của mình hoặc muốn giải thích về các quyền này, bạn có thể liên lạc với chúng tôi trong phần Liên hệ.",
	"generalInfo.policy.8.4": "8.4  Nếu bạn cần nói chuyện với chúng tôi, chúng tôi sẽ chuyển yêu cầu của bạn cho Người Kiểm Soát Dữ Liệu (8.4.1)  cá nhân của bạn là InOn Chúng tôi có thể theo dõi hoặc ghi lại các cuộc gọi hoặc bất kỳ liên lạc nào khác mà chúng tôi có với bạn. Điều này có thể là để đào tạo, bảo mật hoặc để giúp chúng tôi kiểm tra chất lượng.",
	"generalInfo.policy.8.4.1": "8.4.1  Người Kiểm Soát Dữ Liệu – Cá nhân, pháp nhân, cơ quan nhà nước, các cơ quan hoặc tổ chức khác, riêng rẻ hoặc cùng nhau, xác định mục đích và cách thức xử lý dữ liệu cá nhân.",
	"generalInfo.policy.9": "9.  THAY MẶT NGƯỜI KHÁC CUNG CẤP DỮ LIỆU CÁ NHÂN CỦA HỌ",
	"generalInfo.policy.9.1": "9.1  Khi bạn cung cấp cho chúng tôi dữ liệu cá nhân về người khác (hoặc nhiều người khác), bạn nên được chỉ định và ủy quyền bởi người đó để hành động thay họ. Điều này bao gồm cung cấp sự đồng ý để:",
	"generalInfo.policy.9.1.1": "9.1.1  Chúng tôi xử lý dữ liệu cá nhân của họ và dữ liệu cá nhân nhạy cảm (như chúng tôi đã giải thích trong các Phần ở trên);",
	"generalInfo.policy.9.1.2": "9.1.1  Bạn sẽ nhận được các thông báo bảo vệ thông tin thay mặt họ.",
	"generalInfo.policy.9.2": "9.2  Nếu vì bất kỳ lý do nào bạn quan tâm đến việc liệu bạn có được phép cung cấp cho chúng tôi thông tin về người khác hay không, vui lòng liên hệ với chúng tôi theo địa chỉ thư điện tử bên dưới trước khi gửi cho chúng tôi bất cứ thông tin gì.",
	"generalInfo.policy.10": "10. TIẾP THỊ TRỰC TIẾP",
	"generalInfo.policy.10.1": "10.1  Chúng tôi, <b>InOn</b>, đối tác kinh doanh của chúng tôi, và đối tác tiếp thị vẫn sẽ gửi cho bạn thông tin qua hình thức các bài đăng về các sản phẩm và dịch vụ của InOn và các bên thứ ba được lựa chọn cẩn thận.",
	"generalInfo.policy.10.2": "10.2  Ngoài ra, theo thời gian, chung tôi <b>InOn</b> mong muốn gởi thông tin chi tiết về sản phẩm, dịch vụ và các ưu đãi đặc biệt cho bạn qua các phương tiện điện tử. Chúng tôi sẽ chỉ làm điều này nếu bạn đồng ý cho chúng tôi liên lạc với bạn bằng phương tiện điện tử.",
	"generalInfo.policy.10.3": "10.3  Và nếu bạn thay đổi ý định và/hoặc bạn muốn từ chối nhận tiếp thị trực tiếp phi điện tử, thì bạn cứ cho chúng tôi biết. Chỉ cần sử dụng một trong các tùy chọn trong mục Liên hệ với chúng tôi.",
	"generalInfo.policy.11": "11. LIÊN HỆ VỚI CHÚNG TÔI",
	"generalInfo.policy.11.1": "11.1  Nếu bạn muốn thực hiện các quyền của mình trong Phần “Quyền kiểm soát dữ liệu cá nhân của bạn” hoặc nếu bạn yêu cầu bất kỳ thông tin nào theo thông báo này, bạn có thể liên hệ với chúng tôi theo nhiều cách khác nhau.",
	"generalInfo.policy.11.1.1": "11.1.1  Gọi cho đường dây nóng của chúng tôi: <b>0899.300.800</b>",
	"generalInfo.policy.11.1.2": "11.1.2  Gửi thư điện tử cho chúng tôi theo địa chỉ: <b>lienhe@inon.vn</b>",
	"generalInfo.policy.11.1.3": "11.1.3  Hoặc liên hệ trực tiếp với chúng tôi tại văn phòng: <b>Phòng 301A, Tòa nhà Thiên Bảo, số 47-49 Lê Văn Hưu, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Thành phố Hà Nội.</b>",
	"generalInfo.terms.1": "1. CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN SỬ DỤNG",
	"generalInfo.terms.1.1": "1.1  Trang thông tin điện tử này <b>(www.inon.vn)</b> cùng các tên miền phụ (x.inon.vn,...) và ứng dụng di động <b>“InOn” (sau đây gọi tắt là “Hệ thống\nInOn”)</b> do <b>Công ty Cổ phần InOn (sau đây gọi tắt là “InOn”) - Đơn vị chủ quản của Hệ thống và Thương hiệu InOn<b/> toàn quyền sở hữu và điều\nhành.\n",
	"generalInfo.terms.1.2": "1.2  Việc sử dụng <b>Hệ thống InOn</b> này phụ thuộc vào các điều khoản và điều kiện cụ thể sau: (A) các điều khoản và điều kiện được nêu dưới đây và (B) mọi điều khoản và điều kiện bổ sung cụ thể tùy từng thời điểm để điều chỉnh việc sử dụng, và truy cập vào một số mục của trang thông tin điện tử này (và các điều khoản bổ sung đó sẽ có hiệu lực ràng buộc khi chúng được đăng tải trên <b>Hệ thống InOn</b> này) <b>(\"Điều Khoản và Điều Kiện\")</b>.",
	"generalInfo.terms.1.3": "1.3  Khi sử dụng trang thông tin điện tử này, bạn đã đồng ý với các Điều Khoản và Điều Kiện, và sự đồng ý của bạn cùng với các Điều Khoản và Điều Kiện sẽ cấu thành một hợp đồng có giá trị ràng buộc về pháp lý giữa bạn và <b>InOn</b>. Vì thế, bạn vui lòng đọc kỹ các Điều Khoản và Điều Kiện của trang thông tin điện tử này.",
	"generalInfo.terms.2": "2. CÁC HẠN CHẾ VÀ SỬ DỤNG CÁC THÔNG TIN TÀI LIỆU",
	"generalInfo.terms.2.1": "2.1  Trừ khi được <b>InOn</b> đồng ý bằng văn bản một cách khác đi, bạn sẽ không sao chép, sao lại, tái bản, đưa lên mạng, công bố, chuyển, tạo liên kết đến hoặc phân phối dưới bất cứ hình thức nào các thông tin và/hoặc tài liệu đã được đăng tải trên trang thông tin điện tử này.",
	"generalInfo.terms.2.2": "2.2  Bạn có thể tải xuống các thông tin và/hoặc tài liệu được đăng tải trên trang thông tin điện tử này để bạn sử dụng, nhưng luôn luôn với điều kiện là bạn không dỡ bỏ các thông tin về bản quyền và/hoặc các quyền khác của <b>InOn</b> gắn với các thông tin và/hoặc tài liệu đó.",
	"generalInfo.terms.2.3": "2.3  Bạn không được phát tán, sửa đổi, chuyển đi, sử dụng lại, công bố, tạo liên kết hoặc sử dụng các nội dung của trang thông tin điện tử này, bao gồm, nhưng không giới hạn bởi, cả các thông tin bằng chữ, các hình ảnh, các tập tin âm thanh và/hoặc các đoạn phim, cho các mục đích kinh doanh và/hoặc công cộng, khi chưa có sự cho phép bằng văn bản của InOn.",
	"generalInfo.terms.3": "3. THỜI GIAN HOẠT ĐỘNG",
	"generalInfo.terms.3.1": "3.1 Trang thông tin điện tử này hoạt động 24 giờ mỗi ngày và 7 ngày mỗi tuần. Tuy nhiên, <b>InOn</b> bảo lưu quyền ngắt hệ thống để bảo trì khi cần thiết. <b>InOn</b> sẽ cố gắng để lên kế hoạch và thông báo về việc hệ thống không thể sử dụng được bằng cách đưa một thông báo trên mạng trực tuyến. <b>InOn</b> không chịu trách nhiệm đối với bất cứ thiệt hại và/hoặc mất mát nào do việc hệ thống bị ngắt trong trường hợp này.",
	"generalInfo.terms.4": "4. TÀI KHOẢN NGƯỜI SỬ DỤNG",
	"generalInfo.terms.4.1": "4.1  Bạn sẽ đăng ký và được cung cấp một Tên Truy Cập Tài Khoản và Mật khẩu để có thể mua bảo hiểm trên trang thông tin điện tử này. Bạn sẽ giữ bí mật Tên Truy Cập Tài Khoản và Mật khẩu này vào mọi thời điểm, và sẽ bảo đảm rằng Tên Truy Cập Tài Khoản và Mật khẩu này của bạn sẽ không bị tiết lộ theo bất cứ cách thức nào cho bất kỳ ai.",
	"generalInfo.terms.4.2": "4.2  <b>InOn</b> sẽ không chịu trách nhiệm về bất cứ giao dịch không được phép nào do việc Tên Truy Cập Tài Khoản và/hoặc Mật khẩu bị sử dụng sai và/hoặc sử dụng mà không được phép. Bạn phải lập tức thông báo cho <b>InOn</b> bất cứ trường hợp nào mà Tên Truy Cập Tài Khoản và/hoặc Mật khẩu của bạn bị sử dụng sai và/hoặc sử dụng mà không được phép. Bạn chịu trách nhiệm hoàn toàn về việc bảo mật Tên Truy Cập Tài Khoản và Mật khẩu và đối với bất cứ việc truy cập nào sử dụng Tên Truy Cập Tài Khoản và/hoặc Mật khẩu của bạn.",
	"generalInfo.terms.5": "5. BẢN QUYỀN VÀ NHÃN HIỆU",
	"generalInfo.terms.5.1": "5.1  Mọi nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này là tài sản của <b>InOn</b> và các đối tác khác (nếu có).",
	"generalInfo.terms.5.2": "5.2  Không có điều gì trên trang thông tin điện tử này có thể được hiểu là, dù là ngầm định hay cách khác, cho phép sử dụng hoặc bất cứ quyền sử dụng nào liên quan đến bất cứ nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này khi chưa có sự đồng ý bằng văn bản của <b>InOn</b> hoặc bên thứ ba sở hữu các nhãn hiệu hoặc tên thương mại đặt trên trang thông tin điện tử này.",
	"generalInfo.terms.5.3": "5.3  Bạn hoàn toàn không được sử dụng bất cứ nhãn hiệu hàng hóa, nhãn hiệu dịch vụ, tên thương mại, lô-gô, biểu tượng và tên miền đặt trên trang thông tin điện tử này hoặc bất cứ nội dung nào khác có trên trang thông tin điện tử này, trừ các trường hợp được quy định trong các Điều Khoản và Điều Kiện.",
	"generalInfo.terms.5.4": "5.4  Các hình ảnh đặt trên trang thông tin điện tử này là tài sản của <b>InOn</b> hoặc được <b>InOn</b> sử dụng theo sự đồng ý của chủ sở hữu.",
	"generalInfo.terms.5.5": "5.5  Trừ khi được cho phép cụ thể, bạn không được sử dụng bất cứ hình ảnh nào đặt trên trang thông tin điện tử này, bạn cũng không được ủy quyền cho bất cứ người nào sử dụng bất cứ hình ảnh nào đặt trên trang thông tin điện tử này. Bất cứ việc sử dụng không được phép nào đối với các hình ảnh này có thể vi phạm luật tác quyền, luật nhãn hiệu, luật về quyền riêng tư và luật xuất bản, và các quy định về thông tin khác.",
	"generalInfo.terms.6": "6. QUY ĐỊNH VỀ QUYỀN RIÊNG TƯ",
	"generalInfo.terms.6.1": "6.1   Xin đọc kỹ CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ TRÊN INTERNET của chúng tôi. Chính sách này giải thích rõ những thông tin nào <b>InOn</b> có thể thu thập từ bạn trên trang thông tin điện tử của chúng tôi và cách thức chúng tôi sẽ sử dụng và bảo vệ các thông tin của bạn. Chúng tôi sẽ không thu thập bất cứ thông tin xác định danh tính cá nhân nào trên trang thông tin điện tử của chúng tôi trừ khi bạn cung cấp các thông tin đó cho chúng tôi.",
	"generalInfo.terms.7": "7. LIÊN KẾT ĐẾN CÁC TRANG WEB KHÁC",
	"generalInfo.terms.7.1": "7.1  Trang thông tin điện tử này liên kết đến các trang thông tin điện tử khác không do <b>InOn</b> quản lý hoặc điều khiển. <b>InOn</b> sẽ không chịu trách nhiệm về nội dung của các trang thông tin điện tử đó.",
	"generalInfo.terms.7.2": "7.2  Việc liên kết đến bất cứ trang thông tin điện tử nào như thế không có nghĩa là <b>InOn</b> đã chấp thuận hoặc tán thành đối với các trang thông tin điện tử đó, hoặc với nội dung của các trang thông tin điện tử đó, hoặc các sản phẩm và dịch vụ trên các trang thông tin điện tử đó.",
	"generalInfo.terms.8": "8. AN NINH CỦA TRANG WEB",
	"generalInfo.terms.8.1": "8.1  Bạn sẽ không xâm phạm hoặc cố gắng xâm phạm an ninh của trang thông tin điện tử này, bao gồm, nhưng không giới hạn, các hành vi dưới đây:",
	"generalInfo.terms.8.1.1": "8.1.1  Truy cập thông tin hoặc nối vào một máy chủ hoặc tài khoản mà bạn không được phép truy cập.",
	"generalInfo.terms.8.1.2": "8.1.2  Cố gắng thăm dò, kiểm tra hoặc thử nghiệm điểm yếu của một hệ thống hoặc hệ thống mạng để vi phạm an ninh hoặc biện pháp nhận dạng mà không được <b>InOn</b> cho phép bằng văn bản.",
	"generalInfo.terms.8.1.3": "8.1.3  Cố gắng can thiệp vào dịch vụ cung cấp cho bất cứ người sử dụng nào, máy chủ hoặc hệ thống mạng nào, bằng cách phát tán vi rút hoặc mã độc lên trang thông tin điện tử, làm quá tải hoặc gây ra hiện tượng thư rác (spamming) trên trang thông tin điện tử;",
	"generalInfo.terms.8.1.4": "8.1.4  Thay đổi thông tin của phần tiêu đề (header) của bộ giao thức điều khiển truyền vận (TCP/IP) hoặc bất cứ phần thông tin nào của phần tiêu đề (header) trong bất cứ thư điện tử hay nhóm thông tin được đăng tải.",
	"generalInfo.terms.8.2": "8.2  Bạn không sử dụng trang thông tin điện tử này cho bất cứ mục đích bất hợp pháp nào.",
	"generalInfo.terms.8.3": "8.3  Bạn phải đảm bảo rằng tất cả các thông tin được đưa lên trang thông tin điện tử này là đầy đủ, chính xác, có thật, phù hợp và nhất quán với các tài liệu chứa đựng các thông tin này. Vi phạm điều này sẽ dẫn đến việc chậm trễ trong quy trình xử lý hoặc các thông tin điện tử được đưa lên bị loại bỏ. Bạn phải chịu trách nhiệm đối với toàn bộ chi phí phát sinh do việc đưa thông tin giả mạo hoặc sai.",
	"generalInfo.terms.8.4": "8.4  Bạn sẽ không tấn công hoặc cố gắng tấn công hoặc làm hại trang thông tin điện tử này bằng bất cứ hình thức hay phương tiện nào như các công cụ tấn công, vi-rút và chương trình máy tính có chứa các mã có thể gây hỏng máy tính. Bất cứ cố gắng nào để thực hiện các hành vi như vậy đều khiến bạn phải chịu sự truy tố theo quy định của pháp luật hiện hành.",
	"generalInfo.terms.9": "9. KHÔNG CHỊU TRÁCH NHIỆM",
	"generalInfo.terms.9.1": "9.1  Mặc dù <b>InOn</b> thực hiện mọi sự cẩn trọng khi cung cấp dịch vụ tại trang thông tin điện tử, <b>InOn</b> không cam kết rằng trang thông tin điện tử này sẽ hoạt động không có lỗi hoặc hoàn toàn không có vi-rút, worms, Trojan horses hoặc các mã độc hại khác.",
	"generalInfo.terms.9.2": "9.2  <b>InOn</b> không chấp nhận bất cứ trách nhiệm nào, và sẽ không chịu trách nhiệm về bất cứ thiệt hại nào xảy ra cho thiết bị máy tính hoặc các tài sản khác của bạn do việc bạn truy cập vào, sử dụng, hoặc xem lướt qua trang thông tin điện tử này hoặc việc bạn tải xuống bất cứ tài liệu, dữ liệu, các thông tin bằng chữ, các hình ảnh, các đoạn video, hoặc các tập tin âm thanh nào từ trang thông tin điện tử này hoặc phát sinh liên quan đến việc chậm thực hiện, lỗi, thiếu sót, bị gián đoạn, lỗi, vi-rút máy tính, chậm trễ trong hoạt động hoặc truyền dữ liệu, hoặc lỗi hệ thống hoặc đường truyền.",
	"generalInfo.terms.9.3": "9.3  <b>InOn</b> cũng từ chối mọi trách nhiệm đối với:",
	"generalInfo.terms.9.3.1": "9.3.1  Bất cứ tổn thất nào hoặc không có khả năng lấy lại các dữ liệu hoặc thông tin vì bất cứ lý do gì và bao gồm việc không chuyển được, việc sử dụng không đúng mục đích hoặc việc chuyển sai do kết quả của bất cứ sự gián đoạn, ngưng hoặc chấm dứt dịch vụ trên trang thông tin điện tử này; ",
	"generalInfo.terms.9.3.2": "9.3.2  Bất cứ sự sai sót của các thông tin hoặc nguồn tài nguyên có sẵn, nhận được hoặc được chuyển thông qua trang thông tin điện tử;",
	"generalInfo.terms.9.3.3": "9.3.3  Bất cứ trục trặc, khuyết điểm hoặc sai sót của trang thông tin điện tử này; ",
	"generalInfo.terms.9.3.4": "9.3.4  Bất cứ sự chậm trễ hoặc không có khả năng trong việc cung cấp dịch vụ của <b>InOn</b> tại trang thông tin điện tử này theo các Điều Khoản và Điệu Kiện do bất cứ khuyết điểm hoặc hỏng hóc về điện tử, cơ khí, hệ thống, xử lý dữ liệu hoặc viễn thông, thiên tai, xáo trộn dân sự hoặc bất cứ sự kiện nào nằm ngoài sự kiểm soát của <b>InOn</b>.",
	"generalInfo.terms.10": "10. MIỄN TRỪ TRÁCH NHIỆM",
	"generalInfo.terms.10.1": "10.1  Trong bất cứ trường hợp nào, <b>InOn</b> cũng không chịu trách nhiệm về bất cứ thiệt hại, tổn thất hoặc chi phí, bao gồm nhưng không giới hạn, thiệt hại trực tiếp, đặc biệt hoặc do hệ quả của, hoặc tổn thất kinh tế phát sinh từ hoặc có liên quan hoặc có thể quy cho:",
	"generalInfo.terms.10.1.1": "10.1.1  Bất cứ việc truy cập, sử dụng hoặc không thể truy cập hoặc sử dụng trang thông tin điện tử hoặc dịch vụ này, hoặc tin cậy vào những thông tin trên trang thông tin điện tử này.",
	"generalInfo.terms.10.1.2": "10.1.2  Bất cứ sự hỏng hóc, sai sót, bỏ sót, gián đoạn hoặc chậm trễ trong việc truyền dữ liệu;",
	"generalInfo.terms.10.1.3": "10.1.3  Bất cứ vi-rút máy tính hoặc hoặc các mã độc hại, hoặc các đoạn mã, chương trình hay một lệnh riêng lẻ bằng ngôn ngữ lập trình mà kết quả là một chuỗi lệnh bằng ngôn ngữ máy tính (macro) mang tính chất làm hỏng hoặc phá hủy khác có thể ảnh hưởng đến các thiết bị, chương trình máy tính hoặc các tài sản khác của bạn.",
	"generalInfo.terms.11": "11. BỒI THƯỜNG",
	"generalInfo.terms.11.1": "11.1 Bằng việc truy cập vào trang thông tin điện tử này, bạn đồng ý bồi thường cho <b>InOn</b>, giữ cho <b>InOn</b> khỏi mọi thiệt hại và bảo vệ <b>InOn</b> khỏi bất cứ khiếu nại, hành động hoặc đòi hỏi, bao gồm nhưng không giới hạn các chi phí pháp lý và kế toán hợp lý, được cho là hoặc là kết quả của việc bạn sử dụng trang thông tin điện tử này hoặc dịch vụ tại trang thông tin điện tử này, hoặc do việc bạn vi phạm các Điều Khoản và Điều Kiện.",
	"generalInfo.terms.12": "12. CHẤM DỨT",
	"generalInfo.terms.12.1": "12.1  <b>InOn</b> bảo lưu quyền, theo quyết định riêng của <b>InOn</b>, chấm dứt dịch vụ trên trang thông tin điện tử này vào bất cứ thời điểm nào, có hoặc không có lý do hoặc chấm dứt quyền truy cập vào trang thông tin điện tử này của bạn mà không cần báo trước và không cần lý do. Bằng việc truy cập vào trang thông tin điện tử này, bạn được coi là từ bỏ quyền được <b>InOn</b> thông báo về việc chấm dứt này, nếu có.",
	"generalInfo.terms.12.2": "12.2  <b>InOn</b> không chịu trách nhiệm về bất cứ thiệt hại, mất mát hoặc chí phí phát sinh theo bất cứ cách thức nào, từ hoặc do việc chấm dứt dịch vụ trên trang thông tin điện tử này.",
	"generalInfo.terms.13": "13. SỬA ĐỔI",
	"generalInfo.terms.13.1": "13.1  <b>InOn</b> có thể thay đổi và thay thế nội dung các Điều Khoản và Điều Kiện này và/hoặc quy định thêm các điều kiện và điều khoản mới vào bất cứ thời điểm nào mà không cần báo trước cho bạn. Bằng việc sử dụng trang thông tin điện tử này, bạn được coi là từ bỏ quyền được thông báo hoặc chấp thuận bất cứ sửa đổi, thay đổi hoặc bổ sung nào với các Điều Khoản và Điều Kiện, nếu có.",
	"generalInfo.terms.13.2": "13.2  Các thay đổi sẽ có hiệu lực vào ngày đầu tiên được đưa lên trang thông tin điện tử này. Nếu bạn tiếp tục sử dụng trang thông tin điện tử sau thời gian đó, bạn được xem là đã chấp nhận các thay đổi.",
	"generalInfo.terms.14": "14. LUẬT ĐIỀU CHỈNH VÀ CƠ QUAN XỬ LÝ TRANH CHẤP",
	"generalInfo.terms.14.1": "14.1  Sự thỏa thuận giữa bạn và <b>InOn</b> trong các Điều Khoản và Điều Kiện này được điều chỉnh và giải thích theo pháp luật Việt Nam.",
	"generalInfo.terms.14.2": "14.2  Trong trường hợp có tranh chấp giữa bạn và <b>InOn</b> phát sinh từ hoặc có liên quan đến sự thỏa thuận này (“Tranh Chấp”), mỗi Bên nỗ lực tối đa để thảo luận các vấn đề với mục đích giải quyết Tranh Chấp thông qua biện pháp hòa giải.",
	"generalInfo.terms.14.3": "14.3  Nếu Tranh Chấp không được giải quyết trong vòng ba mươi (30) ngày kể từ ngày Tranh Chấp phát sinh, Tranh Chấp đó sẽ được phân xử chung thẩm bởi Trung tâm Trọng tài Quốc tế Việt Nam (bên cạnh Phòng Thương Mại và Công Nghiệp Việt Nam) (“VIAC”) bởi một (01) trọng tài viên theo quy tắc tố tụng trọng tài của VIAC có hiệu lực tại thời điểm xảy ra Tranh Chấp và ngôn ngữ trọng tài được sử dụng là tiếng Việt.",
	"createPassword.title": "Tạo mật khẩu",
	"createPassword.password.required": "Bạn phải nhập mật khẩu",
	"createPassword.password.invalid": "Mật khẩu của bạn không hợp lệ",
	"createPassword.enterThePassword": "Nhập lại mật khẩu *",
	"createPassword.passwordMustMatch": "Mật khẩu phải trùng khớp",
	"createPassword.condition.1": "- Dài ít nhất 8 ký tự",
	"createPassword.condition.2": "- Bao gồm ký tự viết hoa và viết thường",
	"createPassword.condition.3": "- Bao gồm ký tự số và ký tự đặc biệt",
	"createPassword.continutes": "TIẾP TỤC",
	"createPassword.done": "HOÀN THÀNH",
	"createPassword.resetSuccessFul": "Thay đổi mật khẩu thành công!",
	"provideNewPassword.title": "CẤP MẬT KHẨU MỚI",
	"provideNewPassword.continutes": "THỰC HIỆN",
	"provideNewPassword.password": "Nhập mật khẩu mới *",
	"provideNewPassword.enterThePassword": "Nhập lại mật khẩu mới *",
	"createPassword.enterThePassword.required": "Bạn phải nhập mật khẩu mới",
	"completeInformation.title": "Bổ sung thông tin",
	"completeInformation.idType": "Loại giấy tờ tùy thân",
	"completeInformation.idType.required": "Bạn phải chọn loại giấy tờ tùy thân",
	"completeInformation.nbrPer": "Số giấy tờ tuỳ thân",
	"completeInformation.nbrPer.required": "Bạn phải nhập số giấy tờ tuỳ thân",
	"completeInformation.nbrPer.invalid": "Số giấy tờ tùy thân không hợp lệ",
	"completeInformation.dateOfBirth": "Ngày sinh",
	"completeInformation.dateOfBirth.required": "Bạn phải nhập ngày sinh",
	"completeInformation.address": "Địa chỉ",
	"completeInformation.address.required": "Bạn phải nhập địa chỉ",
	"completeInformation.gif": "Mã giới thiệu",
	"completeInformation.branch": "Chi nhánh",
	"completeInformation.branch.required": "Bạn phải nhập chi nhánh",
	"completeInformation.accountNbr": "Số tài khoản",
	"completeInformation.accountNbr.required": "Bạn phải nhập số tài khoản",
	"completeInformation.personalInfo": "Hộ chiếu*",
	"completeInformation.gender": "Giới tính",
	"completeInformation.province": "Tỉnh/Thành Phố",
	"completeInformation.province.required": "Bạn phải chọn Tỉnh/Thành Phố",
	"completeInformation.district": "Quận/Huyện",
	"completeInformation.district.required": "Bạn phải chọn Quận/Huyện",
	"completeInformation.ward": "Phường/Xã",
	"completeInformation.ward.required": "Bạn phải chọn Phường/Xã",
	"completeInformation.bank": "Ngân hàng",
	"completeInformation.bank.required": "Bạn phải chọn Ngân hàng",
	"completeInformation.back": "Quay lại",
	"completeInformation.done": "Hoàn thành",
	"completeInformation.success": "Hoàn tất đăng ký thành công!",
	"socialLogin.addInfo": "Bổ sung thông tin",
	"socialLogin.addInfo.info": "InOn cần bạn bổ sung các thông tin bên dưới để hoàn tất đăng ký tài khoản.",
	"socialLogin.agent": "Đối tác",
	"socialLogin.personal": "Cá nhân",
	"socialLogin.loginWith": "Hoặc đăng nhập với",
	"socialLogin.registerWith": "Hoặc đăng ký với",
	"socialLogin.youLoginAs": "Bạn đăng nhập với,",
	"socialLogin.youRegisterAs": "Bạn đăng ký với,",
	"socialLogin.requireConnectFB": "Vui lòng liên kết tài khoản của bạn với Facebook để sử dụng tính năng này",
	"socialLogin.requireConnectGoogle": "Vui lòng liên kết tài khoản của bạn với Google để sử dụng tính năng này",
	"verifyAccount.title": "Xác thực tài khoản",
	"verifyAccount.success": "Xác thực tài khoản thành công, bạn vui lòng nhấn vào bên dưới để tạo mật khẩu.",
	"verifyAccount.fail": "Xác thực tài khoản thất bại!",
	"verifyAccount.didNotReceiveCode": "Không nhận được mã code?",
	"verifyAccount.tryAgain": "Thử lại",
	"verifyAccount.loading": "Đang xử lý...",
	"verifyAccount.createPassword": "Tạo mật khẩu",
	"verifyAccount.phoneNumberVerification": "Xác thực số điện thoại",
	"verifyAccount.otp.info": "Bạn vui lòng nhập mã OTP đã được gửi về số điện thoại <b>{phoneNumber}</b>",
	"verifyAccount.otp.verify": "Xác nhận",
	"verifyAccount.otp.getOtp": "Lấy lại mã OTP",
	"verifyAccount.otp.registerSuccess": "Đăng ký thành công, link tạo mật khẩu đã được gửi đến email của ban!",
	"connectWithSocial.connectAccount": "Kết nối tài khoản",
	"connectWithSocial.connect": "Kết nối",
	"connectWithSocial.success": "Kết nối thành công",
	"bonusPoint.history": "Lịch sử điểm thưởng",
	"bonusPoint.received": "Đã nhận",
	"bonusPoint.used": "Đã dùng",
	"bonusPoint.bonus": "InOn tặng điểm thưởng cho hợp đồng hoàn thành",
	"bonusPoint.paymentContract": "Đã dùng điểm thưởng InOn để thanh toán hợp đồng",
	"bonusPoint.withDrawval": "Đã dùng điểm thưởng InOn để rút tiền",
	"bonusPoint.gift": "Đã dùng điểm thưởng InOn để đổi quà",
	"bonusPoint.yourBonusPoint": "Bạn đang có {point} điểm thưởng",
	"bonusPoint.availablePoint": "Điểm thưởng hiện có",
	"bonusPoint.uses": "Sử dụng điểm thưởng để đổi quà, rút tiền, thanh toán hợp đồng"
};

var BaseFormGroup = function BaseFormGroup(_ref) {
  var fieldName = _ref.fieldName,
      errors = _ref.errors,
      touched = _ref.touched,
      messageId = _ref.messageId,
      type = _ref.type,
      className = _ref.className,
      maxLength = _ref.maxLength,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      _ref$isShowErrorMessa = _ref.isShowErrorMessage,
      isShowErrorMessage = _ref$isShowErrorMessa === void 0 ? true : _ref$isShowErrorMessa,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired;

  var _onBlur = function onBlur(e, form) {
    form.handleBlur(e);
    var value = e.target.value;
    value = value.trim();
    form.setFieldValue(fieldName, value);
  };

  var handleChange = function handleChange(e, form) {
    form.handleChange(e);

    if (onChange) {
      onChange(e, form);
    }
  };

  return /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
    className: "form-label-group position-relative " + className
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: messageId
  }, function (msg) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(formik.Field, {
      name: fieldName
    }, function (_ref2) {
      var field = _ref2.field,
          form = _ref2.form;
      return /*#__PURE__*/React__default.createElement(reactstrap.Input, _extends({
        className: "form-control " + (isRequired && getPropObject(form.errors, fieldName) && getPropObject(form.touched, fieldName) && 'is-invalid')
      }, field, {
        type: type,
        disabled: disabled,
        maxLength: maxLength,
        value: field.value,
        placeholder: msg,
        onBlur: function onBlur(e) {
          return _onBlur(e, form);
        },
        onChange: function onChange(e) {
          return handleChange(e, form);
        }
      }));
    }), isRequired && isShowErrorMessage && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) ? /*#__PURE__*/React__default.createElement("div", {
      className: "text-danger"
    }, getPropObject(errors, fieldName)) : null, /*#__PURE__*/React__default.createElement(reactstrap.Label, null, msg));
  }));
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var flatpickr = createCommonjsModule(function (module, exports) {
/* flatpickr v4.6.6, @license MIT */
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false,
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false,
    };

    var pad = function (number, length) {
        if (length === void 0) { length = 2; }
        return ("000" + number).slice(length * -1);
    };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                var path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        },
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})",
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016, padded (0001-9999)
        Y: function (date) { return pad(date.getFullYear(), 4); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); },
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined && !isMobile) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex],
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000,
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
            l10n: english,
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                },
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
                return;
            }
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                var defaultDate = self.config.minDate !== undefined
                    ? new Date(self.config.minDate.getTime())
                    : new Date();
                var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                defaultDate.setHours(hours, minutes, seconds, 0);
                self.setDate(defaultDate, false);
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date) {
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
        }
        function getDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            return { hours: hours, minutes: minutes, seconds: seconds };
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var eventTarget = getEventTarget(event);
            var year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options,
            });
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(getEventTarget(e));
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "click", documentClick);
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "click", onMonthNavClick);
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "click", selectDate);
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return getEventTarget(e).select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "click", timeIncrement);
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "click", function (e) {
                        updateTime(e);
                        triggerChange();
                    });
                }
            }
            if (self.config.allowInput)
                bind(self._input, "blur", onBlur);
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            var eventTarget = getEventTarget(e);
            if (~eventTarget.className.indexOf("arrow"))
                incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && getEventTarget(e);
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) {
                self._input.focus();
            }
            else if (!dayFocused) {
                focusOnDayElem(startElem);
            }
            else {
                getNextAvailableDay(startElem, offset);
            }
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
            var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = getEventTarget(e);
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement,
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                },
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                },
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel,
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel,
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers,
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            if (self.config.enableTime === true) {
                var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                setHours(hours, minutes, seconds);
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined &&
                        self.input.value !== "" &&
                        self.input.value !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config &&
                        self.config.mode === "range" &&
                        self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    elem.className.indexOf("flatpickr-disabled") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onBlur(e) {
            var isInput = e.target === self._input;
            if (isInput &&
                !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
            }
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var eventTarget = getEventTarget(e);
            var isInput = self.config.wrap
                ? element.contains(eventTarget)
                : eventTarget === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return eventTarget.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(eventTarget) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(eventTarget);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer &&
                            eventTarget.$i !== undefined) ||
                            eventTarget === self.input ||
                            eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (eventTarget === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(eventTarget);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(eventTarget) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                }
            }
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(eventTarget)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    var eventTarget = getEventTarget(e);
                    eventTarget && eventTarget.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                },
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                },
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min"),
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max"),
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min"),
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max"),
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                // https://github.com/microsoft/TypeScript/issues/31663
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    getInputElem().className + " " + self.config.altInputClass;
            }
            triggerEvent("onParseConfig");
        }
        function getInputElem() {
            return self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset + inputBounds.left;
            var isCenter = false;
            var isRight = false;
            if (configPosHorizontal === "center") {
                left -= (calendarWidth - inputBounds.width) / 2;
                isCenter = true;
            }
            else if (configPosHorizontal === "right") {
                left -= calendarWidth - inputBounds.width;
                isRight = true;
            }
            toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
            toggleClass(self.calendarContainer, "arrowCenter", isCenter);
            toggleClass(self.calendarContainer, "arrowRight", isRight);
            var right = window.document.body.offsetWidth -
                (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = getDocumentStyleSheet();
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function getDocumentStyleSheet() {
            var editableSheet = null;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                try {
                    sheet.cssRules;
                }
                catch (err) {
                    continue;
                }
                editableSheet = sheet;
                break;
            }
            return editableSheet != null ? editableSheet : createStyleSheet();
        }
        function createStyleSheet() {
            var style = document.createElement("style");
            document.head.appendChild(style);
            return style.sheet;
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            buildMonthSwitch();
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(getEventTarget(e), isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate],
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(true);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = (self.config.allowInvalidPreload
                ? dates
                : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate(undefined, triggerChange);
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined),
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
        }
        function setupInputs() {
            self.input = getInputElem();
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            if (self.input.getAttribute("step"))
                self.mobileInput.step = String(self.input.getAttribute("step"));
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var eventTarget = getEventTarget(e);
            var isPrevMonth = self.prevMonthNav.contains(eventTarget);
            var isNextMonth = self.nextMonthNav.contains(eventTarget);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(eventTarget) >= 0) {
                eventTarget.select();
            }
            else if (eventTarget.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (eventTarget.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        default: __assign({}, english),
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

})));
});

var vn = createCommonjsModule(function (module, exports) {
(function (global, factory) {
   factory(exports) ;
}(commonjsGlobal, (function (exports) {
  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Vietnamese = {
      weekdays: {
          shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          longhand: [
              "Chủ nhật",
              "Thứ hai",
              "Thứ ba",
              "Thứ tư",
              "Thứ năm",
              "Thứ sáu",
              "Thứ bảy",
          ],
      },
      months: {
          shorthand: [
              "Th1",
              "Th2",
              "Th3",
              "Th4",
              "Th5",
              "Th6",
              "Th7",
              "Th8",
              "Th9",
              "Th10",
              "Th11",
              "Th12",
          ],
          longhand: [
              "Tháng một",
              "Tháng hai",
              "Tháng ba",
              "Tháng tư",
              "Tháng năm",
              "Tháng sáu",
              "Tháng bảy",
              "Tháng tám",
              "Tháng chín",
              "Tháng mười",
              "Tháng 11",
              "Tháng 12",
          ],
      },
      firstDayOfWeek: 1,
      rangeSeparator: " đến ",
  };
  fp.l10ns.vn = Vietnamese;
  var vn = fp.l10ns;

  exports.Vietnamese = Vietnamese;
  exports.default = vn;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
});

unwrapExports(vn);

var DatePicker = function DatePicker(props) {
  var intl = reactIntl.useIntl();
  return /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React__default.createElement(Flatpickr, {
    options: _extends({
      disableMobile: true,
      allowInput: false,
      locale: intl.locale === 'vi' ? flatpickr.l10ns.vn : ''
    }, props.options),
    disabled: props.disabled,
    placeholder: props.placeholder,
    "data-enable-time": true,
    className: "form-control position-relative bg-white flatpickr-input " + props.className,
    value: props.value,
    onClose: function onClose() {
      return props.onClose && props.onClose();
    },
    onChange: function onChange(date) {
      return props.onChange && props.onChange(date);
    }
  }), /*#__PURE__*/React__default.createElement(reactstrap.Label, null, props.placeholder), props.errors && props.touched && props.isShowErrorMessage && getPropObject(props.errors, props.fieldName) && getPropObject(props.touched, props.fieldName) ? /*#__PURE__*/React__default.createElement("div", {
    className: "text-danger"
  }, getPropObject(props.errors, props.fieldName)) : null);
};

var BaseFormDatePicker = function BaseFormDatePicker(_ref) {
  var fieldName = _ref.fieldName,
      errors = _ref.errors,
      touched = _ref.touched,
      messageId = _ref.messageId,
      className = _ref.className,
      options = _ref.options,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      isShowErrorMessage = _ref.isShowErrorMessage,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired;
  var defaultOptions = {
    dateFormat: 'm/d/Y'
  };
  var intl = reactIntl.useIntl();
  return /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, null, /*#__PURE__*/React__default.createElement(formik.Field, {
    name: fieldName
  }, function (_ref2) {
    var field = _ref2.field,
        form = _ref2.form;
    return /*#__PURE__*/React__default.createElement(DatePicker, {
      className: "form-control position-relative " + (!disabled ? 'bg-white' : '') + " " + (isRequired && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) && 'is-invalid') + " " + className,
      placeholder: messageId ? intl.formatMessage({
        id: messageId
      }) : '',
      isShowErrorMessage: isShowErrorMessage,
      fieldName: fieldName,
      notRequired: !isRequired,
      errors: errors,
      disabled: disabled,
      touched: touched,
      value: field.value,
      options: options || defaultOptions,
      onChange: function onChange(date) {
        form.setFieldValue(fieldName, date[0]);

        if (_onChange) {
          _onChange(date, form);
        }
      }
    });
  }));
};

var Select = function Select(props) {
  var _useState = React.useState(props.value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = React.useState(false),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  React.useEffect(function () {
    setInputValue(props.value);
  }, [props.value]);

  var onChange = function onChange(e, actions) {
    if (props.onChange) {
      props.onChange(e, actions);
    }

    if (props.isMulti) {
      setInputValue(e ? e.map(function (item) {
        return item.value;
      }).join() : '');
    } else {
      setInputValue(e ? e.value : '');
    }

    setIsFocused(false);
  };

  var onFocus = function onFocus(e) {
    if (props.onFocus) {
      props.onFocus(e);
    }

    setIsFocused(true);
  };

  var onBlur = function onBlur(e) {
    if (props.onBlur) {
      props.onBlur(e);
    }

    setIsFocused(false);
  };

  var SelectComponent = React.useCallback(function (componentProps) {
    var newProps = _extends({}, componentProps);

    if (props.isMulti) {
      var values = props.value || '';

      if (typeof props.value !== 'string') {
        values = '';
      }

      newProps.value = props.options.filter(function (item) {
        return values.split(',').includes(String(item.value));
      });
    }

    switch (props.type) {
      case 'creatable':
        return /*#__PURE__*/React__default.createElement(CreatableSelect, newProps);

      case 'async':
        return /*#__PURE__*/React__default.createElement(AsyncSelect, newProps);

      default:
        return /*#__PURE__*/React__default.createElement(ReactSelect, newProps);
    }
  }, [props.options, props.value]);
  return /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React__default.createElement(SelectComponent, _extends({}, props, {
    isDisabled: props.disabled,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    theme: function theme(_theme) {
      return _extends({}, _theme, {
        colors: _extends({}, _theme.colors, {
          primary: '#338955'
        })
      });
    }
  })), props.required && props.isShowErrorMessage ? getPropObject(props.errors, props.fieldName) && getPropObject(props.touched, props.fieldName) ? /*#__PURE__*/React__default.createElement("div", {
    className: "text-danger"
  }, getPropObject(props.errors, props.fieldName)) : null : '', /*#__PURE__*/React__default.createElement("input", {
    className: "d-none",
    placeholder: props.placeholder,
    value: inputValue
  }), inputValue ? /*#__PURE__*/React__default.createElement(reactstrap.Label, {
    className: classnames({
      'text-primary': isFocused
    }, props.marginLabel)
  }, props.placeholder) : '');
};

var BaseFormGroupSelect = function BaseFormGroupSelect(_ref) {
  var fieldName = _ref.fieldName,
      errors = _ref.errors,
      touched = _ref.touched,
      messageId = _ref.messageId,
      options = _ref.options,
      defaultValue = _ref.defaultValue,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired,
      isAsync = _ref.isAsync,
      disabled = _ref.disabled,
      _onChange = _ref.onChange,
      loadOptions = _ref.loadOptions,
      type = _ref.type,
      _ref$isShowErrorMessa = _ref.isShowErrorMessage,
      isShowErrorMessage = _ref$isShowErrorMessa === void 0 ? true : _ref$isShowErrorMessa,
      defaultOptions = _ref.defaultOptions,
      marginLabel = _ref.marginLabel;
  var intl = reactIntl.useIntl();
  return /*#__PURE__*/React__default.createElement(formik.Field, {
    name: fieldName
  }, function (_ref2) {
    var field = _ref2.field,
        form = _ref2.form;
    return /*#__PURE__*/React__default.createElement(Select, {
      placeholder: intl.formatMessage({
        id: messageId
      }),
      className: "" + (isRequired && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) && 'is-invalid'),
      type: type,
      isShowErrorMessage: isShowErrorMessage,
      classNamePrefix: "Select",
      fieldName: fieldName,
      required: isRequired,
      value: options.find(function (item) {
        return item.value === field.value;
      }),
      defaultValue: defaultValue,
      disabled: disabled,
      errors: errors,
      isAsync: isAsync,
      loadOptions: loadOptions,
      defaultOptions: defaultOptions,
      touched: touched,
      options: options,
      onChange: function onChange(e) {
        form.setFieldValue(fieldName, e.value);

        if (_onChange) {
          _onChange(e, form);
        }
      },
      marginLabel: marginLabel
    });
  });
};

var DataColetionService = /*#__PURE__*/function () {
  function DataColetionService() {}

  DataColetionService.getCitiesByCountry = function getCitiesByCountry(countryId, locale) {
    try {
      return Promise.resolve(HttpClient.get(API_GET_CITIES_BY_COUNTRY, {
        params: {
          countryId: countryId
        },
        isBackgroundRequest: true
      })).then(function (res) {
        return res.status === 200 ? mapDataToSelectOptions(res.data, locale) : [];
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  DataColetionService.getDistrictByCity = function getDistrictByCity(cityId, locale) {
    try {
      return Promise.resolve(HttpClient.get(API_GET_DISTRICTS_BY_CITY, {
        params: {
          cityId: cityId
        },
        isBackgroundRequest: true
      })).then(function (res) {
        return res.status === 200 ? mapDataToSelectOptions(res.data, locale) : [];
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  DataColetionService.getWardsByDistrict = function getWardsByDistrict(districtId, locale) {
    try {
      return Promise.resolve(HttpClient.get(API_GET_WARDS_BY_CITY, {
        params: {
          districtId: districtId
        },
        isBackgroundRequest: true
      })).then(function (res) {
        return res.status === 200 ? mapDataToSelectOptions(res.data, locale) : [];
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  DataColetionService.getAllBanks = function getAllBanks(locale) {
    try {
      return Promise.resolve(HttpClient.get(API_GET_BANKS, {
        isBackgroundRequest: true
      })).then(function (res) {
        return res.status === 200 ? mapDataToSelectOptions(res.data, locale) : [];
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return DataColetionService;
}();
var mapDataToSelectOptions = function mapDataToSelectOptions(data, lang) {
  return data.map(function (item) {
    return {
      value: item.id + '',
      id: item.id,
      label: item[lang === 'vi' ? 'vn' : 'en'] || item.vn
    };
  });
};

var useCityList = function useCityList(countryCode) {
  var _useState = React.useState([]),
      cities = _useState[0],
      setCities = _useState[1];

  var _useIntl = reactIntl.useIntl(),
      locale = _useIntl.locale;

  React.useEffect(function () {
    if (!countryCode) {
      return;
    }

    loadCitiesByCountry(countryCode);
  }, [countryCode]);

  var loadCitiesByCountry = function loadCitiesByCountry(code) {
    try {
      return Promise.resolve(DataColetionService.getCitiesByCountry(code, locale)).then(function (data) {
        setCities(data);
        return data;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    cities: cities,
    loadCitiesByCountry: loadCitiesByCountry
  };
};
var useDistrictList = function useDistrictList(cityCode) {
  var _useState2 = React.useState([]),
      districts = _useState2[0],
      setDistricts = _useState2[1];

  var _useIntl2 = reactIntl.useIntl(),
      locale = _useIntl2.locale;

  React.useEffect(function () {
    if (!cityCode) {
      return;
    }

    loadDitrictsByCity(cityCode);
  }, [cityCode]);

  var loadDitrictsByCity = function loadDitrictsByCity(code) {
    try {
      return Promise.resolve(DataColetionService.getDistrictByCity(code, locale)).then(function (data) {
        setDistricts(data);
        return data;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    districts: districts,
    loadDitrictsByCity: loadDitrictsByCity
  };
};
var useWardList = function useWardList(districtCode) {
  var _useState3 = React.useState([]),
      wards = _useState3[0],
      setWards = _useState3[1];

  var _useIntl3 = reactIntl.useIntl(),
      locale = _useIntl3.locale;

  React.useEffect(function () {
    if (!districtCode) {
      return;
    }

    loadWardsByDistrict(districtCode);
  }, [districtCode]);

  var loadWardsByDistrict = function loadWardsByDistrict(code) {
    try {
      return Promise.resolve(DataColetionService.getWardsByDistrict(code, locale)).then(function (data) {
        setWards(data);
        return data;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    wards: wards,
    loadWardsByDistrict: loadWardsByDistrict
  };
};
var useBankList = function useBankList() {
  var _useState4 = React.useState([]),
      banks = _useState4[0],
      setBanks = _useState4[1];

  var _useIntl4 = reactIntl.useIntl(),
      locale = _useIntl4.locale;

  React.useEffect(function () {
    loadBanks();
  }, []);

  var loadBanks = function loadBanks() {
    try {
      return Promise.resolve(DataColetionService.getAllBanks(locale)).then(function (_DataColetionService$) {
        setBanks(_DataColetionService$);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    banks: banks,
    loadBanks: loadBanks
  };
};

var validationSchema = Yup.object().shape({
  fullName: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.fullname.required"
  })).matches(NAME_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.fullname.invalid"
    });
  }),
  email: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.email.required"
  })).email( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.email.invalid"
  }))
});

var UserAccountTab = function UserAccountTab() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.customizer;
  }),
      appId = _useSelector.appId;

  var _useSelector2 = reactRedux.useSelector(function (state) {
    return appId !== AppId.ELITE_APP ? state.auth.user : state.auth.guest.user;
  }),
      _useSelector2$userDet = _useSelector2.userDetails,
      userDetails = _useSelector2$userDet === void 0 ? {} : _useSelector2$userDet,
      _useSelector2$userSet = _useSelector2.userSettings,
      userSettings = _useSelector2$userSet === void 0 ? {} : _useSelector2$userSet,
      user = _objectWithoutPropertiesLoose(_useSelector2, ["userDetails", "userSettings"]);

  var dispatch = reactRedux.useDispatch();

  var _useCityList = useCityList(VN_COUNTRY_CODE),
      cities = _useCityList.cities;

  var _useDistrictList = useDistrictList(null),
      districts = _useDistrictList.districts,
      loadDitrictsByCity = _useDistrictList.loadDitrictsByCity;

  var _useWardList = useWardList(null),
      wards = _useWardList.wards,
      loadWardsByDistrict = _useWardList.loadWardsByDistrict;

  var _useBankList = useBankList(),
      banks = _useBankList.banks;

  var _useState = React.useState({
    url: userSettings.avatar,
    file: null
  }),
      avatar = _useState[0],
      setAvatar = _useState[1];

  React.useEffect(function () {
    if (userDetails && userDetails.city) {
      loadDitrictsByCity(userDetails.city);
      loadWardsByDistrict(userDetails.district);
    }
  }, []);

  var onChangeAvatar = function onChangeAvatar(e) {
    var validTypeExtension = ['jpg', 'jpeg', 'bmp', 'gif', 'png', 'HEIF', 'HEVC', 'heic'];
    var file = e.target.files[0];

    if (!file) {
      return;
    }

    var fileType = file.type.split('/').pop().toLowerCase();

    if (validTypeExtension.indexOf(fileType) < 0) {
      toastError( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.updateInfo.imageTypeInvalid"
      }));
      return;
    }

    if (bytesToMb(file.size) >= MAX_FILE_SIZE) {
      toastError( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.updateInfo.imageExceedSize",
        values: {
          size: MAX_FILE_SIZE
        }
      }));
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setAvatar({
        url: reader.result,
        file: file
      });
    };
  };

  var onSubmit = function onSubmit(values) {
    try {
      dispatch(showConfirmAlert({
        title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "setting.accountInformation"
        }),
        isShow: true,
        content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "setting.updateInfo.confirmMessage"
        }),
        onConfirm: function onConfirm() {
          dispatch(updateUserInfo(trimObjectValues(values), avatar.file));
        }
      }));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onClickBackHome = function onClickBackHome() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(goBackHomePage());
      }
    }));
  };

  var onChangeCity = function onChangeCity(id, setFieldValue) {
    try {
      loadDitrictsByCity(id);
      setFieldValue('userDetails.district', '');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onChangeDistrict = function onChangeDistrict(id, setFieldValue) {
    try {
      loadWardsByDistrict(id);
      setFieldValue('userDetails.ward', '');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "mb-2"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "mr-2 my-25"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "users-avatar-shadow rounded",
    object: true,
    src: avatar.url,
    alt: "user profile image",
    height: "84",
    width: "84"
  })), /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "mt-2",
    body: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.Media, {
    className: "font-medium-1 text-bold-600",
    style: {
      textTransform: 'uppercase'
    },
    tag: "p",
    heading: true
  }, user.fullName), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.accountCode"
  }), " : ", user.userCode), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-wrap"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
    tag: "label",
    className: "mr-1 mt-2",
    color: "primary",
    outline: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.Input, {
    type: "file",
    name: "file",
    id: "uploadImg",
    onChange: onChangeAvatar,
    hidden: true,
    accept: "image/*"
  }), /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.change"
  })))))), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(formik.Formik, {
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    initialValues: _extends({}, user, {
      dateOfBirth: user.dateOfBirth || moment().subtract(15, 'years').toISOString(),
      userDetails: userDetails,
      userSettings: userSettings
    })
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched,
        values = _ref.values,
        setFieldValue = _ref.setFieldValue;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      disabled: true,
      messageId: "register.fullname",
      fieldName: "fullName",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "3"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.idType",
      fieldName: "icType",
      options: IC_TYPES_OPTIONS,
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "3"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.nbrPer",
      fieldName: "icNumber",
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormDatePicker, {
      messageId: "completeInformation.dateOfBirth",
      fieldName: "dateOfBirth",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.gender",
      fieldName: "gender",
      disabled: true,
      options: GENDER_OPTIONS,
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      disabled: true,
      messageId: "register.phoneNumber",
      fieldName: "phoneNumber",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12",
      md: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "register.email",
      fieldName: "email",
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "12"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.address",
      fieldName: "userDetails.address",
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.province",
      fieldName: "userDetails.city",
      options: cities,
      onChange: function onChange(_ref2) {
        var id = _ref2.id;
        return onChangeCity(id, setFieldValue);
      },
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.district",
      fieldName: "userDetails.district",
      options: districts,
      onChange: function onChange(_ref3) {
        var id = _ref3.id;
        return onChangeDistrict(id, setFieldValue);
      },
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.ward",
      fieldName: "userDetails.ward",
      options: wards,
      errors: errors,
      touched: touched
    }))), values.userType === USER_TYPE.KD ? /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.bank",
      fieldName: "userDetails.bankName",
      options: banks,
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.branch",
      fieldName: "userDetails.bankBranch",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.accountNbr",
      fieldName: "userDetails.bankAccount",
      errors: errors,
      touched: touched
    }))) : '', /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      className: "d-flex justify-content-end  mt-2",
      sm: "12"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      type: "button",
      color: "secondary",
      onClick: onClickBackHome
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.home"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      className: "ml-2",
      type: "submit",
      color: "primary"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.saveChanges"
    })))));
  }), /*#__PURE__*/React__default.createElement(reactstrap.Row, null)));
};

var formSchema = Yup.object().shape({
  oldPassword: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "changePassword.oldPassword.required"
  })).matches(PASSWORD_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "changePassword.oldPassword.invalid"
    });
  }),
  newPassword: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "changePassword.newPassword.required"
  })).matches(PASSWORD_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "changePassword.newPassword.invalid"
    });
  }),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('newPassword'), null], /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "createPassword.passwordMustMatch"
  })).required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "changePassword.confirmPassword.required"
  }))
});

var ChangePassword = function ChangePassword() {
  var dispatch = reactRedux.useDispatch();

  var onClickSubmit = function onClickSubmit(values) {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.changePassword"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "changePassword.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(changePassword(values));
      }
    }));
  };

  var onClickBackHome = function onClickBackHome() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(goBackHomePage());
      }
    }));
  };

  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: ''
    },
    onSubmit: onClickSubmit,
    validationSchema: formSchema
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/React__default.createElement(formik.Form, {
      className: "mt-3"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      type: "password",
      messageId: "changePassword.oldPassword",
      fieldName: "oldPassword",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      type: "password",
      messageId: "changePassword.newPassword",
      fieldName: "newPassword",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      type: "password",
      messageId: "createPassword.enterThePassword",
      fieldName: "passwordConfirmation",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.1"
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.2"
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.3"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      className: "d-flex justify-content-end  mt-2",
      sm: "12"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      type: "button",
      color: "secondary",
      onClick: onClickBackHome
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.home"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      className: "ml-2",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.saveChanges"
    })))));
  });
};

var ShareWithFriends = function ShareWithFriends() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.customizer.appId === AppId.ELITE_APP ? state.auth.guest : state.auth;
  }),
      user = _useSelector.user;

  var _useState = React.useState(null),
      qrCodeInstance = _useState[0],
      setQRCodeInstance = _useState[1];

  var qrCode = React.useRef();
  var shareUrl = document.location.origin + "/home?refId=" + user.username;
  React.useEffect(function () {
    var options = {
      text: shareUrl,
      colorDark: '#106D5A',
      correctLevel: QRCode.CorrectLevel.H,
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC4zMTY3IDI0Ljk5MDFDMTguNTA1OCAyNC43OTkyIDE4LjcxODUgMjQuNjMyMSAxOC45MDc2IDI0LjQxNzNDMjEuMTA1NiAyMi4xOTc1IDIyLjY0MTggMTkuMzMzMyAyMy4xODU0IDE2LjExMTFDMjMuMzI3MiAxNS4yMjggMjMuNDIxNyAxNC4zMjEgMjMuNDIxNyAxMy40MTRDMjMuNDIxNyAxMy4wNzk4IDIzLjQyMTcgMTIuNzY5NSAyMy4zOTgxIDEyLjQ1OTNDMjMuMTYxOCA4LjU0NDg2IDIxLjQ4MzcgNS4wMTIzNSAxOC45MDc2IDIuNDEwN0MxOC43MTg1IDIuMjE5NzUgMTguNTI5NCAyLjAyODgxIDE4LjMxNjcgMS44Mzc4NkMxNy42NTQ5IDEuMjQxMTUgMTYuOTQ1OSAwLjY5MjE4MSAxNi4xODk2IDAuMjE0ODE1QzE1Ljc0MDUgLTAuMDcxNjA0OSAxNS4xNDk3IC0wLjA3MTYwNDkgMTQuNjc3IDAuMjE0ODE1QzEzLjkyMDcgMC42OTIxODEgMTMuMjExNyAxLjI0MTE1IDEyLjU0OTkgMS44Mzc4NkMxMi4zNjA4IDIuMDI4ODEgMTIuMTQ4MSAyLjE5NTg4IDExLjk1OSAyLjQxMDdDOS44MDgzIDQuNTgyNzIgOC4yNzIwNiA3LjM5OTE4IDcuNzA0ODMgMTAuNTQ5OEM3Ljk0MTE4IDEwLjQzMDUgOC4yMDExNiAxMC4zMTExIDguNDM3NSAxMC4xOTE4QzExLjc0NjMgOC42ODgwNyAxNy4zNDc3IDguMjM0NTcgMjAuMDY1NyAxMC45NTU2QzE4LjYwMDMgMTAuNDc4MiAxNy4wNDA0IDEwLjIzOTUgMTUuNDA5NyAxMC4yMzk1QzEzLjc3ODkgMTAuMjM5NSAxMi4yMTkgMTAuNTAyMSAxMC43NTM3IDEwLjk1NTZDOS41OTU1OSAxMS4zMzc0IDguNDg0NzcgMTEuODM4NyA3LjQ0NDg1IDEyLjQ1OTNDNi4zODEzIDEzLjEwMzcgNS4zODg2NiAxMy44OTE0IDQuNDkwNTUgMTQuNzk4NEMyLjMxNjE4IDE2Ljk5NDIgMC43Nzk5MzcgMTkuODgyMyAwLjIzNjM0NSAyMy4xMDQ1QzAuMDk0NTM3OCAyMy45ODc3IDAgMjQuODk0NiAwIDI1LjgwMTZDMCAyNS44NDk0IDAgMjUuODk3MSAwIDI1Ljk2ODdDMCAyNi40NyAwLjI4MzYxMyAyNi45MjM1IDAuNzMyNjY4IDI3LjE2MjFDMS41NTk4NyAyNy42MTU2IDIuNDM0MzUgMjcuOTczNyAzLjMzMjQ2IDI4LjI2MDFDNC43OTc3OSAyOC43Mzc0IDYuMzU3NjcgMjguOTc2MSA3Ljk4ODQ1IDI4Ljk3NjFDMTAuMDIxIDI4Ljk3NjEgMTEuOTU5IDI4LjU3MDQgMTMuNzU1MyAyNy44NTQzQzEzLjUxODkgMjcuNjg3MiAxMy4yODI2IDI3LjU0NCAxMy4wNDYyIDI3LjM3N0M5LjUwMTA1IDI0Ljg0NjkgNi42MTc2NSAyMC44ODQ4IDcuNjU3NTYgMTYuMTM1QzguMjI0NzkgMTkuMzU3MiA5Ljc2MTAzIDIyLjIyMTQgMTEuOTM1NCAyNC40NDEyQzEyLjEyNDUgMjQuNjMyMSAxMi4zMTM2IDI0LjgyMyAxMi41MjYzIDI1LjAxNEMxMy40MDA3IDI1LjgwMTYgMTQuMzY5NyAyNi41MTc3IDE1LjQwOTcgMjcuMDkwNUMxNy42MDc3IDI4LjMwNzggMjAuMTYwMiAyOS4wMjM5IDIyLjg1NDUgMjkuMDIzOUMyNC40ODUzIDI5LjAyMzkgMjYuMDQ1MiAyOC43NjEzIDI3LjUxMDUgMjguMzA3OEMyOC40MDg2IDI4LjAyMTQgMjkuMjgzMSAyNy42Mzk1IDMwLjExMDMgMjcuMjA5OUMzMC41NTkzIDI2Ljk3MTIgMzAuODQzIDI2LjUxNzcgMzAuODQzIDI1Ljk5MjZDMzAuODQzIDI1Ljk0NDkgMzAuODQzIDI1Ljg5NzEgMzAuODQzIDI1Ljg0OTRDMzAuODQzIDI0LjkxODUgMzAuNzcyMSAyNC4wMzU0IDMwLjYwNjYgMjMuMTUyM0MzMC4wMzk0IDE5LjkzIDI4LjUwMzIgMTcuMDY1OCAyNi4zMjg4IDE0Ljg0NjFDMjUuOTAzNCAxNC40MTY1IDI1LjQzMDcgMTMuOTg2OCAyNC45NTggMTMuNjA0OUMyNC45MTA3IDE4LjI4MzEgMjIuOTAxOCAyMy4xMDQ1IDE4LjMxNjcgMjQuOTkwMVpNMjAuMjc4NCAxNC4zNjg3QzIwLjA0MiAxNy40MjM5IDE4LjcxODUgMjAuMTkyNiAxNi43MDk2IDIyLjI0NTNDMTYuMzA3OCAyMi42NTEgMTUuODgyNCAyMy4wMzI5IDE1LjQzMzMgMjMuMzY3MUMxNC45ODQyIDIzLjAwOTEgMTQuNTU4OCAyMi42NTEgMTQuMTU3IDIyLjI0NTNDMTIuMTI0NSAyMC4xOTI2IDEwLjgwMDkgMTcuNDQ3NyAxMC41ODgyIDE0LjM2ODdDMTIuMDc3MiAxMy43MjQzIDEzLjczMTYgMTMuMzY2MyAxNS40NTY5IDEzLjM2NjNDMTcuMTU4NiAxMy4zNDI0IDE4Ljc4OTQgMTMuNzAwNCAyMC4yNzg0IDE0LjM2ODdaIiBmaWxsPSIjMTA2RDVBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzE2OSAyNC45ODk5QzE4LjUwNiAyNC43OTg5IDE4LjcxODcgMjQuNjMxOSAxOC45MDc4IDI0LjQ0MDlDMjEuMTA1OCAyMi4yMjEyIDIyLjY0MiAxOS4zNTcgMjMuMTg1NiAxNi4xMzQ3QzIzLjIwOTIgMTUuOTkxNSAyMy4yMzI5IDE1LjgyNDQgMjMuMjU2NSAxNS42ODEyQzIyLjgwNzQgMTMuNzQ3OSAyMS42NDkzIDEyLjA3NzEgMjAuMDY1OCAxMC45NTUzQzE4LjYwMDUgMTAuNDc3OSAxNy4wNDA2IDEwLjIzOTMgMTUuNDMzNSAxMC4yMzkzQzEzLjkyMDkgMTAuMjM5MyAxMi40NTU1IDEwLjQ1NDEgMTEuMDYxMSAxMC44ODM3QzkuMjY0ODkgMTIuMTAxIDguMDEyMjcgMTMuODkxMSA3LjY4MTM4IDE2LjEzNDdDNy43MDUwMiAxNi4wNjMxIDcuNjU3NzUgMTYuMjA2MyA3LjY4MTM4IDE2LjEzNDdDOC4yNDg2MSAxOS4zNTcgOS43ODQ4NSAyMi4yMjEyIDExLjk1OTIgMjQuNDQwOUMxMi4xMDEgMjQuNTg0MSAxMi4yNjY1IDI0Ljc1MTIgMTIuNDMxOSAyNC44OTQ0QzEzLjM3NzMgMjUuMzAwMiAxNC40MTcyIDI1LjUxNSAxNS41MDQ0IDI1LjUxNUMxNi40OTcgMjUuNTE1IDE3LjQ0MjQgMjUuMzI0IDE4LjMxNjkgMjQuOTg5OVpNMTQuMTMzNiAyMi4yMjEyQzEyLjEwMSAyMC4xNjg1IDEwLjc3NzUgMTcuNDIzNiAxMC41NjQ4IDE0LjM0NDZDMTIuMDUzOCAxMy43MDAyIDEzLjcwODIgMTMuMzQyMSAxNS40MzM1IDEzLjM0MjFDMTcuMTU4OCAxMy4zNDIxIDE4LjgxMzIgMTMuNzAwMiAyMC4zMDIyIDE0LjM0NDZDMjAuMDY1OCAxNy4zOTk4IDE4Ljc0MjMgMjAuMTY4NSAxNi43MzM0IDIyLjIyMTJDMTYuMzMxNiAyMi42MjY5IDE1LjkwNjIgMjMuMDA4OCAxNS40NTcxIDIzLjM0M0MxNC45NjA4IDIzLjAwODggMTQuNTM1NCAyMi42MjY5IDE0LjEzMzYgMjIuMjIxMloiIGZpbGw9IiMxMDZENUEiLz4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjMxNjkgMjQuOTg5OUMxOC41MDYgMjQuNzk4OSAxOC43MTg3IDI0LjYzMTkgMTguOTA3OCAyNC40NDA5QzIxLjEwNTggMjIuMjIxMiAyMi42NDIgMTkuMzU3IDIzLjE4NTYgMTYuMTM0N0MyMy4yMDkyIDE1Ljk5MTUgMjMuMjMyOSAxNS44MjQ0IDIzLjI1NjUgMTUuNjgxMkMyMi44MDc0IDEzLjc0NzkgMjEuNjQ5MyAxMi4wNzcxIDIwLjA2NTggMTAuOTU1M0MxOC42MDA1IDEwLjQ3NzkgMTcuMDQwNiAxMC4yMzkzIDE1LjQzMzUgMTAuMjM5M0MxMy45MjA5IDEwLjIzOTMgMTIuNDU1NSAxMC40NTQxIDExLjA2MTEgMTAuODgzN0M5LjI2NDg5IDEyLjEwMSA4LjAxMjI3IDEzLjg5MTEgNy42ODEzOCAxNi4xMzQ3QzcuNzA1MDIgMTYuMDYzMSA3LjY1Nzc1IDE2LjIwNjMgNy42ODEzOCAxNi4xMzQ3QzguMjQ4NjEgMTkuMzU3IDkuNzg0ODUgMjIuMjIxMiAxMS45NTkyIDI0LjQ0MDlDMTIuMTAxIDI0LjU4NDEgMTIuMjY2NSAyNC43NTEyIDEyLjQzMTkgMjQuODk0NEMxMy4zNzczIDI1LjMwMDIgMTQuNDE3MiAyNS41MTUgMTUuNTA0NCAyNS41MTVDMTYuNDk3IDI1LjUxNSAxNy40NDI0IDI1LjMyNCAxOC4zMTY5IDI0Ljk4OTlaTTE0LjEzMzYgMjIuMjIxMkMxMi4xMDEgMjAuMTY4NSAxMC43Nzc1IDE3LjQyMzYgMTAuNTY0OCAxNC4zNDQ2QzEyLjA1MzggMTMuNzAwMiAxMy43MDgyIDEzLjM0MjEgMTUuNDMzNSAxMy4zNDIxQzE3LjE1ODggMTMuMzQyMSAxOC44MTMyIDEzLjcwMDIgMjAuMzAyMiAxNC4zNDQ2QzIwLjA2NTggMTcuMzk5OCAxOC43NDIzIDIwLjE2ODUgMTYuNzMzNCAyMi4yMjEyQzE2LjMzMTYgMjIuNjI2OSAxNS45MDYyIDIzLjAwODggMTUuNDU3MSAyMy4zNDNDMTQuOTYwOCAyMy4wMDg4IDE0LjUzNTQgMjIuNjI2OSAxNC4xMzM2IDIyLjIyMTJaIiBmaWxsPSIjMTA2RDVBIi8+CjwvZz4KPC9zdmc+Cg==',
      dotScale: 0.5
    };
    setQRCodeInstance(new QRCode(qrCode.current, options));
  }, []);

  var onClickCopy = function onClickCopy() {
    try {
      return Promise.resolve(navigator.clipboard.writeText(shareUrl)).then(function () {
        toastSuccess( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "setting.copySuccess"
        }));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onClickDownloadQRCode = function onClickDownloadQRCode() {
    var canvas = document.querySelector('#qrcode canvas');
    var pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    var downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'inon-qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  var onChangeQRCode = function onChangeQRCode(e) {
    qrCodeInstance.makeCode(e.target.value);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "text-center my-4"
  }, /*#__PURE__*/React__default.createElement("div", {
    id: "qrcode",
    ref: qrCode
  }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("span", {
    className: "text-primary cursor-pointer",
    onClick: onClickDownloadQRCode
  }, /*#__PURE__*/React__default.createElement(Icon.Download, {
    size: 24
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center justify-content-center mt-3"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Input, {
    defaultValue: shareUrl,
    onChange: onChangeQRCode,
    disabled: user.groupId !== USER_ROLE.ADMIN
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "cursor-pointer ml-2 text-primary",
    onClick: onClickCopy
  }, /*#__PURE__*/React__default.createElement(Icon.Clipboard, null)))));
};

var AccountSettings = function AccountSettings(props) {
  var _useState = React.useState('account-info'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.customizer;
  }),
      appId = _useSelector.appId;

  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    return setActiveTab(props.activeTab);
  }, [props.activeTab]);
  return /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Card, null, /*#__PURE__*/React__default.createElement(reactstrap.CardHeader, null, /*#__PURE__*/React__default.createElement(reactstrap.CardTitle, {
    className: "text-uppercase"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: 'setting.personalSetting'
  }))), /*#__PURE__*/React__default.createElement(reactstrap.CardBody, {
    className: "pt-2"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Nav, {
    tabs: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: classnames({
      active: activeTab === 'account-info'
    }),
    onClick: function onClick() {
      if (appId !== 'APP_NO1') {
        history.push('/account-info');
      } else history.push('/app/account-info');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.User, {
    size: 16
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.accountInformation"
  })))), /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: classnames({
      active: activeTab === 'change-password'
    }),
    onClick: function onClick() {
      if (appId !== 'APP_NO1') {
        history.push('/change-password');
      } else history.push('/app/change-password');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Lock, {
    size: 16
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.changePassword"
  })))), /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: classnames({
      active: activeTab === 'share-with-friends'
    }),
    onClick: function onClick() {
      if (appId !== 'APP_NO1') {
        history.push('/share-with-friends');
      } else history.push('/app/share-with-friends');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Link, {
    size: 16
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.shareWithFriends"
  }))))), /*#__PURE__*/React__default.createElement(reactstrap.TabContent, {
    activeTab: activeTab
  }, /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "account-info"
  }, /*#__PURE__*/React__default.createElement(UserAccountTab, null)), /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "change-password"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    md: "6",
    sm: "11",
    className: "mx-auto"
  }, /*#__PURE__*/React__default.createElement(ChangePassword, null))), /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "share-with-friends"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    md: "6",
    sm: "11",
    className: "mx-auto"
  }, /*#__PURE__*/React__default.createElement(ShareWithFriends, null))))))));
};

var Radio = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Radio, _React$Component);

  function Radio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: classnames("vx-radio-con " + this.props.className + " vx-radio-" + this.props.color)
    }, /*#__PURE__*/React__default.createElement("input", {
      type: "radio",
      defaultChecked: this.props.defaultChecked,
      value: this.props.value,
      disabled: this.props.disabled,
      name: this.props.name,
      onClick: this.props.onClick,
      onChange: this.props.onChange,
      ref: this.props.ref,
      checked: this.props.checked
    }), /*#__PURE__*/React__default.createElement("span", {
      className: classnames("vx-radio", {
        "vx-radio-sm": this.props.size === "sm",
        "vx-radio-lg": this.props.size === "lg"
      })
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "vx-radio--border"
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "vx-radio--circle"
    })), /*#__PURE__*/React__default.createElement("span", null, this.props.label));
  };

  return Radio;
}(React__default.Component);

var LanguageTab = function LanguageTab() {
  var dispatch = reactRedux.useDispatch();
  var intl = reactIntl.useIntl();

  var _useState = React.useState(localStorage.getItem('language')),
      lang = _useState[0],
      setLang = _useState[1];

  var onClickBackHome = function onClickBackHome() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(goBackHomePage());
      }
    }));
  };

  var onClickSaveChange = function onClickSaveChange(context) {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.language"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "generalInfo.changeLanguage.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(changeLanguageSetting(lang, function () {
          return context.switchLanguage(lang);
        }));
      }
    }));
  };

  return /*#__PURE__*/React__default.createElement(Context.Consumer, null, function (context) {
    return /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      className: "mt-3"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      className: "mx-auto col-6"
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Radio, {
      label: intl.formatMessage({
        id: 'navbar.language.vi'
      }),
      color: "primary",
      onChange: function onChange() {
        return setLang('vi');
      },
      defaultChecked: context.state.locale === 'vi',
      name: "lang"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(Radio, {
      label: intl.formatMessage({
        id: 'navbar.language.en'
      }),
      color: "primary",
      onChange: function onChange() {
        return setLang('en');
      },
      defaultChecked: context.state.locale === 'en',
      name: "lang"
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      className: "d-flex justify-content-end mt-3",
      sm: "12"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      type: "button",
      color: "secondary",
      onClick: onClickBackHome
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.home"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      className: "ml-2",
      onClick: function onClick() {
        return onClickSaveChange(context);
      },
      color: "primary"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.saveChanges"
    }))));
  });
};

function useDeviceDetect() {
  var _React$useState = React__default.useState(false),
      isMobile = _React$useState[0],
      setMobile = _React$useState[1];

  React__default.useEffect(function () {
    var userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    var mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setMobile(mobile);
  }, []);
  return {
    isMobile: isMobile
  };
}

var ContactTab = function ContactTab() {
  var _useDeviceDetect = useDeviceDetect(),
      isMobile = _useDeviceDetect.isMobile;

  var dispatch = reactRedux.useDispatch();

  var onClickBackHome = function onClickBackHome() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: function onConfirm() {
        dispatch(goBackHomePage());
      }
    }));
  };

  var onClickCall = function onClickCall() {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.call"
      }),
      isShow: true,
      content: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "setting.call.confirmMessage",
        values: {
          phoneNumber: CONTACT_PHONE
        }
      }),
      onConfirm: function onConfirm() {
        window.open("tel:0899300800", '_blank');
      }
    }));
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    lg: "4",
    md: "6",
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Card, null, /*#__PURE__*/React__default.createElement(reactstrap.CardBody, {
    className: "w-300px mx-auto"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "mailto:lienhe@inon.vn",
    target: "_blank"
  }, "lienhe@inon.vn")), /*#__PURE__*/React__default.createElement("div", {
    className: "card-btns d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
    className: "gradient-light-primary text-white"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "text-white",
    href: "mailto:lienhe@inon.vn",
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.sendEmail"
  }))))))), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    lg: "4",
    md: "6",
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Card, null, /*#__PURE__*/React__default.createElement(reactstrap.CardBody, {
    className: "w-300px mx-auto"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React__default.createElement("h5", null, CONTACT_PHONE)), /*#__PURE__*/React__default.createElement("div", {
    className: "card-btns d-flex justify-content-center mt-2"
  }, isMobile ? /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
    className: "gradient-light-primary text-white",
    onClick: onClickCall
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.call"
  })) : ''))))), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    className: "d-flex justify-content-end flex-wrap mt-2",
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickBackHome
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.home"
  })))));
};

var GeneralInfo = function GeneralInfo(props) {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.customizer;
  }),
      appId = _useSelector.appId;

  var _useState = React.useState('terms-and-condition'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    return setActiveTab(props.activeTab);
  }, [props.activeTab]);
  return /*#__PURE__*/React__default.createElement(reactstrap.Row, {
    className: "general-info"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    sm: "12"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Card, null, /*#__PURE__*/React__default.createElement(reactstrap.CardHeader, null, /*#__PURE__*/React__default.createElement(reactstrap.CardTitle, {
    className: "text-uppercase"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: 'setting.generalInformation'
  }))), /*#__PURE__*/React__default.createElement(reactstrap.CardBody, {
    className: "pt-2"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Nav, {
    tabs: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: classnames({
      active: activeTab === 'language'
    }),
    onClick: function onClick() {
      if (appId === 'APP_NO1') {
        history.push('/app/language');
      } else history.push('/language');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.Globe, {
    size: 16
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.language"
  })))), /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: classnames({
      active: activeTab === 'contact'
    }),
    onClick: function onClick() {
      if (appId === 'APP_NO1') {
        history.push('/app/contact');
      } else history.push('/contact');
    }
  }, /*#__PURE__*/React__default.createElement(Icon.MessageSquare, {
    size: 16
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "setting.contact"
  }))))), /*#__PURE__*/React__default.createElement(reactstrap.TabContent, {
    activeTab: activeTab
  }, /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "language"
  }, /*#__PURE__*/React__default.createElement(LanguageTab, null)), /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "contact"
  }, /*#__PURE__*/React__default.createElement(ContactTab, null)))))));
};

var CheckBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CheckBox, _React$Component);

  function CheckBox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CheckBox.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "vx-checkbox-con " + (this.props.className ? this.props.className : '') + " vx-checkbox-" + this.props.color
    }, /*#__PURE__*/React__default.createElement("input", {
      type: "checkbox",
      defaultChecked: this.props.defaultChecked,
      checked: this.props.checked,
      value: this.props.value,
      disabled: this.props.disabled,
      onClick: this.props.onClick ? this.props.onClick : null,
      onChange: this.props.onChange ? this.props.onChange : null
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "vx-checkbox vx-checkbox-" + (this.props.size ? this.props.size : 'md')
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "vx-checkbox--check"
    }, this.props.icon)), /*#__PURE__*/React__default.createElement("span", null, this.props.label));
  };

  return CheckBox;
}(React__default.Component);

var SocialLogin = function SocialLogin(_ref) {
  var isLogin = _ref.isLogin,
      isRemeberMe = _ref.isRemeberMe;

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      isGuest = _useSelector.isGuest;

  var _useState = React.useState(false),
      isOpenModal = _useState[0],
      setIsOpenModal = _useState[1];

  var _useState2 = React.useState(false),
      isOpenSocialNetworkModal = _useState2[0],
      setIsOpenSocialNetworkModal = _useState2[1];

  var _useState3 = React.useState({}),
      userInfo = _useState3[0],
      setUserInfo = _useState3[1];

  var _useState4 = React.useState(),
      connectType = _useState4[0],
      setConnectType = _useState4[1];

  var dispatch = reactRedux.useDispatch();

  var openAddInfoModal = function openAddInfoModal(userInfo) {
    toggleModal();
    setUserInfo(userInfo);
  };

  var openRequiredConnectSocialNetworkPopup = function openRequiredConnectSocialNetworkPopup() {
    toggleSocialNetworkModal();
  };

  var handleFBLogin = function handleFBLogin(data) {
    setConnectType("FACEBOOK");

    if (data.accessToken) {
      dispatch(socialLogin({
        socialId: data.id,
        email: data.email,
        picture: data.picture.data.url,
        name: data.name,
        provider: LOGIN_METHODS.FACEBOOK
      }, LOGIN_METHODS.FACEBOOK, isGuest, isRemeberMe, openAddInfoModal, openRequiredConnectSocialNetworkPopup));
    }
  };

  var handleGoogleLogin = function handleGoogleLogin(data) {
    setConnectType("GOOGLE");
    var profileObj = data.profileObj;
    dispatch(socialLogin({
      socialId: profileObj.googleId,
      email: profileObj.email,
      picture: profileObj.imageUrl,
      name: profileObj.name,
      provider: LOGIN_METHODS.GOOGLE
    }, LOGIN_METHODS.GOOGLE, isGuest, isRemeberMe, openAddInfoModal, openRequiredConnectSocialNetworkPopup));
  };

  var toggleModal = function toggleModal() {
    setIsOpenModal(function (prevState) {
      return !prevState;
    });
  };

  var toggleSocialNetworkModal = function toggleSocialNetworkModal() {
    setIsOpenSocialNetworkModal(function (prevState) {
      return !prevState;
    });
  };

  var onSubmit = function onSubmit(values, validateForm) {
    try {
      return Promise.resolve(validateForm()).then(function (errors) {
        if (Object.keys(errors).length) {
          return;
        }

        dispatch(socialLogin(_extends({}, userInfo, {
          email: values.email,
          phoneNumber: values.phoneNumber
        }), LOGIN_METHODS.FACEBOOK, openAddInfoModal));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onClickCancel = function onClickCancel() {
    toggleModal();
  };

  var validationSchema = Yup.object().shape({
    email: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.email.required"
    })).email( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.email.invalid"
    })),
    phoneNumber: Yup.string().matches(PHONE_REGEX, function () {
      return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "register.phoneNumber.invalid"
      });
    }).required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.phoneNumber.required"
    }))
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "social-login"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "social-login-btn"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: isLogin ? 'socialLogin.loginWith' : 'socialLogin.registerWith'
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React__default.createElement(FacebookLogin, {
    type: "button",
    appId: FB_APP_ID,
    cssClass: "fb-login-button",
    disableMobileRedirect: true,
    render: function render(_ref2) {
      var onClick = _ref2.onClick;
      return /*#__PURE__*/React__default.createElement("div", {
        onClick: onClick,
        className: "cursor-pointer"
      }, /*#__PURE__*/React__default.createElement("img", {
        alt: "facebook",
        src: IMAGE.FB_LOGO
      }));
    },
    fields: "name,email,picture",
    callback: handleFBLogin
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React__default.createElement(GoogleLogin, {
    clientId: GOOGLE_APP_ID,
    onSuccess: handleGoogleLogin,
    render: function render(_ref3) {
      var onClick = _ref3.onClick;
      return /*#__PURE__*/React__default.createElement("div", {
        onClick: onClick,
        className: "cursor-pointer"
      }, /*#__PURE__*/React__default.createElement("img", {
        alt: "google",
        src: IMAGE.GOOGLE_LOGO
      }));
    },
    cookiePolicy: 'single_host_origin'
  })))), /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      email: userInfo.email || '',
      phoneNumber: userInfo.phoneNumber || ''
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  }, function (_ref4) {
    var errors = _ref4.errors,
        touched = _ref4.touched,
        validateForm = _ref4.validateForm,
        values = _ref4.values;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
      isOpen: isOpenModal,
      className: "modal-dialog-centered"
    }, /*#__PURE__*/React__default.createElement(reactstrap.ModalHeader, {
      toggle: toggleModal
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "socialLogin.addInfo"
    })), /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default.createElement("i", null, /*#__PURE__*/React__default.createElement("small", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "socialLogin.addInfo.info"
    })))), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "email",
      disabled: userInfo.email,
      errors: errors,
      touched: touched,
      messageId: "register.email"
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "phoneNumber",
      disabled: userInfo.phoneNumber,
      errors: errors,
      touched: touched,
      messageId: "register.phoneNumber"
    })), /*#__PURE__*/React__default.createElement(reactstrap.ModalFooter, null, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      type: "button",
      color: "secondary",
      onClick: onClickCancel
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.cancel"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
      color: "primary",
      onClick: function onClick() {
        return onSubmit(values, validateForm);
      }
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.ok"
    })))));
  }), /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
    isOpen: isOpenSocialNetworkModal,
    toggle: function toggle() {
      return setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal);
    },
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, null, connectType === 'FACEBOOK' ? /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "socialLogin.requireConnectFB"
  }) : /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "socialLogin.requireConnectGoogle"
  })), /*#__PURE__*/React__default.createElement(reactstrap.ModalFooter, null, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    color: "secondary",
    onClick: function onClick() {
      return setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal);
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.cancel"
  })), ' ', /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    color: "primary",
    onClick: function onClick() {
      return setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal);
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "common.ok"
  })), ' ')));
};

// var AppSelection = function AppSelection(_ref) {
//   var isLogin = _ref.isLogin;

//   var _useSelector = reactRedux.useSelector(function (state) {
//     return state.auth;
//   }),
//       isGuest = _useSelector.isGuest;

//   var dispatch = reactRedux.useDispatch();

//   var onClickChangeAppType = function onClickChangeAppType(value) {
//     dispatch(changeIsGuest(value));
//   };

//   return /*#__PURE__*/React__default.createElement("div", {
//     className: "text-center mt-2 mb-3"
//   }, /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
//     id: isLogin ? 'socialLogin.youLoginAs' : 'socialLogin.youRegisterAs'
//   })), /*#__PURE__*/React__default.createElement(reactstrap.ButtonGroup, {
//     className: "w-100"
//   }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
//     className: "btn-app-selection left",
//     active: !isGuest,
//     type: "button",
//     onClick: function onClick() {
//       return onClickChangeAppType(false);
//     }
//   }, /*#__PURE__*/React__default.createElement("div", {
//     className: "icon mr-1"
//   }, /*#__PURE__*/React__default.createElement("svg", {
//     width: "40",
//     height: "40",
//     viewBox: "0 0 40 40",
//     fill: "none",
//     xmlns: "http://www.w3.org/2000/svg"
//   }, /*#__PURE__*/React__default.createElement("path", {
//     d: "M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M20 35V35.0167",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M5 15V15.0167",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M35 15V15.0167",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M13.3333 33.4999C11.0589 32.3906 9.1021 30.7238 7.64506 28.6548C6.18802 26.5858 5.2781 24.1818 5 21.6666",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M26.6663 33.4999C28.9407 32.3906 30.8975 30.7238 32.3545 28.6548C33.8116 26.5858 34.7215 24.1818 34.9996 21.6666",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M10.333 8.33345C13.0132 6.14004 16.3697 4.94164 19.833 4.94164C23.2963 4.94164 26.6529 6.14004 29.333 8.33345",
//     stroke: !isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }))), /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
//     id: "socialLogin.agent"
//   })), /*#__PURE__*/React__default.createElement(reactstrap.Button, {
//     className: "btn-app-selection right",
//     active: isGuest,
//     onClick: function onClick() {
//       return onClickChangeAppType(true);
//     },
//     type: "button"
//   }, /*#__PURE__*/React__default.createElement("div", {
//     className: "icon mr-1"
//   }, /*#__PURE__*/React__default.createElement("svg", {
//     width: "40",
//     height: "40",
//     viewBox: "0 0 40 40",
//     fill: "none",
//     xmlns: "http://www.w3.org/2000/svg"
//   }, /*#__PURE__*/React__default.createElement("path", {
//     d: "M20.0005 18.4999C23.3143 18.4999 26.0007 15.8136 26.0007 12.4997C26.0007 9.1859 23.3143 6.49951 20.0005 6.49951C16.6866 6.49951 14.0002 9.1859 14.0002 12.4997C14.0002 15.8136 16.6866 18.4999 20.0005 18.4999Z",
//     stroke: isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }), /*#__PURE__*/React__default.createElement("path", {
//     d: "M10.9993 33.5004V30.5003C10.9993 28.9089 11.6314 27.3828 12.7567 26.2575C13.8819 25.1322 15.4081 24.5001 16.9995 24.5001H22.9997C24.5911 24.5001 26.1172 25.1322 27.2425 26.2575C28.3678 27.3828 28.9999 28.9089 28.9999 30.5003V33.5004",
//     stroke: isGuest ? '#73C14F' : '#587471',
//     "stroke-width": "2",
//     "stroke-linecap": "round",
//     "stroke-linejoin": "round"
//   }))), /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
//     id: "socialLogin.personal"
//   }))));
// };
var AppSelection = function AppSelection(_ref) {

};
var formSchema$1 = Yup.object().shape({
  username: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "login.username.required"
  })),
  password: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "login.password.required"
  })).matches(PASSWORD_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.password.invalid"
    });
  })
});

var Login = function Login() {
  var _useState = React.useState(null),
      rememberMe = _useState[0],
      setRememberMe = _useState[1];

  var _useState2 = React.useState(false),
      isRemeberMe = _useState2[0],
      setIsRemeberMe = _useState2[1];

  var dispatch = reactRedux.useDispatch();

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      isGuest = _useSelector.isGuest;

  React.useEffect(function () {
    var user = JSON.parse(localStorage.getItem(REMEMBER_ME_TOKEN));

    if (user) {
      setRememberMe(user);
    }
  }, []);

  var onSubmit = function onSubmit(values, actions) {
    dispatch(loginAction({
      username: trimValue(values.username),
      password: values.password,
      isGuest: isGuest,
      isRemeberMe: isRemeberMe
    }));
    actions.setSubmitting(false);
  };

  var onClickNotMe = function onClickNotMe() {
    localStorage.removeItem(REMEMBER_ME_TOKEN);
    setRememberMe(null);
  };

  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    enableReinitialize: true,
    initialValues: {
      username: rememberMe ? rememberMe.username : '',
      password: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$1
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement(AppSelection, {
      isLogin: true
    }), rememberMe ? /*#__PURE__*/React__default.createElement("h4", {
      className: "text-center mb-2"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "login.sayHi",
      values: {
        name: rememberMe.name
      }
    })) : /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "login.username",
      fieldName: "username",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
      className: "form-label-group position-relative"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "login.password"
    }, function (msg) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(formik.FastField, {
        name: "password"
      }, function (_ref2) {
        var field = _ref2.field,
            form = _ref2.form;
        return /*#__PURE__*/React__default.createElement(reactstrap.Input, _extends({
          type: "password",
          className: "form-control " + (errors.password && touched.password && 'is-invalid'),
          placeholder: msg
        }, field, {
          onChange: function onChange(e) {
            return form.setFieldValue('password', e.target.value);
          }
        }));
      }), errors.password && touched.password ? /*#__PURE__*/React__default.createElement("div", {
        className: "text-danger"
      }, errors.password) : null, /*#__PURE__*/React__default.createElement(reactstrap.Label, null, msg));
    })), /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
      className: "d-flex justify-content-between align-items-center"
    }, rememberMe ? /*#__PURE__*/React__default.createElement("a", {
      className: "text-dark-green",
      onClick: onClickNotMe
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "login.notMe"
    })) : /*#__PURE__*/React__default.createElement(CheckBox, {
      color: "primary",
      icon: /*#__PURE__*/React__default.createElement(Icon.Check, {
        className: "vx-icon",
        size: 16
      }),
      label: /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "login.rememberMe"
      }),
      onChange: function onChange(e) {
        return setIsRemeberMe(e.target.checked);
      },
      defaultChecked: isRemeberMe
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "divider",
      style: {
        height: '30px'
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "float-right"
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      to: "/forgot-password",
      className: "text-secondary font-weight-bold"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "forgotPassword"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-center"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "login"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(SocialLogin, {
      isLogin: true,
      isRemeberMe: isRemeberMe
    })));
  });
};

var formSchema$2 = Yup.object().shape({
  fullName: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.fullname.required"
  })).matches(NAME_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.fullname.invalid"
    });
  }),
  email: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.email.required"
  })).email( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.email.invalid"
  })),
  phoneNumber: Yup.string().matches(PHONE_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.phoneNumber.invalid"
    });
  }).required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.phoneNumber.required"
  })),
  refCode: Yup.string().length(10, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.refCode.invalid"
    });
  }).matches(PHONE_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.refCode.invalid"
    });
  })
});

var Register = function Register() {
  var _guest$user, _guest$user2, _guest$user3;

  var _useState = React.useState(false),
      isAppcepted = _useState[0],
      setIsAppcepted = _useState[1];

  var _useState2 = React.useState(false),
      isNotApccepted = _useState2[0],
      setIsNotAccepted = _useState2[1];

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      isGuest = _useSelector.isGuest,
      registerInfo = _useSelector.register,
      guest = _useSelector.guest;

  var dispatch = reactRedux.useDispatch();
  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: function callback(recaptchaToken) {
        dispatch(register(_extends({}, registerInfo.user, {
          recaptchaToken: recaptchaToken
        })));
      }
    });
  }, []);

  var onSubmit = function onSubmit(values) {
    try {
      if (!isAppcepted) {
        setIsNotAccepted(true);
        return Promise.resolve();
      }

      var data = _extends({}, values, {
        isGuest: isGuest
      });

      dispatch(register(data));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var ontoggleAccepted = function ontoggleAccepted(checked) {
    setIsAppcepted(checked);
    setIsNotAccepted(!checked);
  };

  var onChangeFullName = function onChangeFullName(e, form) {
    var value = e.target.value.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    form.setFieldValue('fullName', value);
  };

  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      fullName: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user = guest.user) === null || _guest$user === void 0 ? void 0 : _guest$user.fullName,
      email: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user2 = guest.user) === null || _guest$user2 === void 0 ? void 0 : _guest$user2.email,
      phoneNumber: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user3 = guest.user) === null || _guest$user3 === void 0 ? void 0 : _guest$user3.phoneNumber,
      refCode: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$2
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement(AppSelection, null), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "fullName",
      errors: errors,
      touched: touched,
      onChange: onChangeFullName,
      messageId: "register.fullname"
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "email",
      errors: errors,
      touched: touched,
      messageId: "register.email"
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "phoneNumber",
      errors: errors,
      touched: touched,
      messageId: "register.phoneNumber"
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      fieldName: "refCode",
      errors: errors,
      touched: touched,
      messageId: "register.refCode"
    }), /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, null, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement(CheckBox, {
      color: "primary",
      icon: /*#__PURE__*/React__default.createElement(Icon.Check, {
        className: "vx-icon",
        size: 16
      }),
      onChange: function onChange(e) {
        return ontoggleAccepted(e.target.checked);
      },
      defaultChecked: isAppcepted
    }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.agreeWith"
    }), ' ', /*#__PURE__*/React__default.createElement("a", {
      className: "text-primary"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.policyAndCondition"
    })), ' ', /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.useService"
    }))), isNotApccepted ? /*#__PURE__*/React__default.createElement("div", {
      className: "text-danger"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.mustAppcepted"
    })) : null, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-center mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register"
    })))), isGuest ? /*#__PURE__*/React__default.createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement(SocialLogin, null)) : null);
  });
};

var formSchema$3 = Yup.object().shape({
  username: Yup.string().matches(PHONE_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "login.username.invalid"
    });
  }).required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "forgotPassword.username.required"
  })),
  email: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "forgotPassword.email.required"
  })).email( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register.email.invalid"
  }))
});

var ForgotPassword = function ForgotPassword() {
  var _useState = React.useState(false),
      isModalOpen = _useState[0],
      setIsOpenModal = _useState[1];

  var _useState2 = React.useState(''),
      emailSuggestion = _useState2[0],
      setEmailSuggestion = _useState2[1];

  var dispatch = reactRedux.useDispatch();

  var onSubmit = function onSubmit(values, actions) {
    dispatch(forgotPassword(values));
  };

  var onClickSuggestion = function onClickSuggestion(username) {
    try {
      return Promise.resolve(AuthService.getSuggestionEmail(username)).then(function (res) {
        if (res.status === 200) {
          setEmailSuggestion(res.data);
          toggleModal();
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var toggleModal = function toggleModal() {
    setIsOpenModal(!isModalOpen);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      username: '',
      email: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$3
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched,
        values = _ref.values;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement("h1", {
      className: "landing-page-title"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "forgotPassword"
    })), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "forgotPassword.username",
      fieldName: "username",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement(reactstrap.FormGroup, {
      className: "form-label-group position-relative"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "forgotPassword.email"
    }, function (msg) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(formik.Field, {
        name: "email"
      }, function (_ref2) {
        var field = _ref2.field,
            form = _ref2.form;
        return /*#__PURE__*/React__default.createElement(reactstrap.Input, _extends({
          className: "" + (errors.email && touched.email && 'is-invalid not-show-icon'),
          placeholder: msg
        }, field, {
          onChange: function onChange(e) {
            return form.setFieldValue('email', e.target.value ? e.target.value.trim() : '');
          }
        }));
      }), errors.email && touched.email ? /*#__PURE__*/React__default.createElement("div", {
        className: "text-danger"
      }, errors.email) : null, values.username ? /*#__PURE__*/React__default.createElement("div", {
        className: "form-control-position text-primary cursor-pointer",
        onClick: function onClick() {
          return onClickSuggestion(values.username);
        }
      }, /*#__PURE__*/React__default.createElement(Icon.Sun, {
        size: 15
      })) : '', /*#__PURE__*/React__default.createElement(reactstrap.Label, null, msg));
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "col-md-4"
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      to: '/'
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      className: "btn-second"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "common.back"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "col-md-4"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "forgotPassword.verify"
    })))));
  }), /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
    isOpen: isModalOpen,
    toggle: toggleModal,
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, {
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/React__default.createElement("div", null, !emailSuggestion ? /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "forgotPassword.notFoundEmailSuggestion"
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "forgotPassword.yourEmailIs"
  }), ":", ' ', /*#__PURE__*/React__default.createElement("b", null, emailSuggestion))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
    color: "primary",
    onClick: toggleModal
  }, "OK"), ' ')))));
};

var formSchema$4 = Yup.object().shape({
  password: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "createPassword.password.required"
  })).matches(PASSWORD_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.password.invalid"
    });
  }),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "createPassword.passwordMustMatch"
  })).required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "createPassword.password.required"
  }))
});

var CreatePassword = function CreatePassword(_ref) {
  var _ref$isCreatePassword = _ref.isCreatePassword,
      isCreatePassword = _ref$isCreatePassword === void 0 ? false : _ref$isCreatePassword;
  var history = reactRouterDom.useHistory();
  var dispatch = reactRedux.useDispatch();
  React.useEffect(function () {
    isCreatePassword ? setRegisterToken() : setResetPassword();
  }, []);

  var onClickContinue = function onClickContinue(values) {
    if (isCreatePassword) {
      dispatch(createPassword(values.password));
    } else {
      dispatch(resetPassword(values.password));
    }
  };

  var setRegisterToken = function setRegisterToken() {
    var code = new URLSearchParams(document.location.search).get('registerToken');

    if (code) {
      dispatch(saveRegisterToken(code));
      history.replace(history.location.pathname);
    }
  };

  var setResetPassword = function setResetPassword() {
    var code = new URLSearchParams(document.location.search).get('resetToken');

    if (code) {
      dispatch(saveResetPasswordToken(code));
      history.replace(history.location.pathname);
    }
  };

  return /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: onClickContinue,
    validationSchema: formSchema$4
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement("div", {
      className: "text-center mb-3"
    }, /*#__PURE__*/React__default.createElement("h1", {
      className: "landing-page-title"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.title"
    }))), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      type: "password",
      messageId: "login.password",
      fieldName: "password",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      type: "password",
      messageId: "createPassword.enterThePassword",
      fieldName: "passwordConfirmation",
      errors: errors,
      touched: touched
    }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.1"
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.2"
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "createPassword.condition.3"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-center mt-2"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: isCreatePassword ? 'createPassword.continutes' : 'createPassword.done'
    }))));
  });
};

var VerifyOtp = function VerifyOtp() {
  var _useState = React.useState(''),
      otp = _useState[0],
      setOtp = _useState[1];

  var registerInfo = reactRedux.useSelector(function (state) {
    return state.auth.register;
  });
  var dispatch = reactRedux.useDispatch();
  var history = reactRouterDom.useHistory();
  var intl = reactIntl.useIntl();
  var NUM_INPUTS = 6;
  React.useEffect(function () {}, []);

  var onChangeOtp = function onChangeOtp(value) {
    setOtp(value);
  };

  var onClickVerify = function onClickVerify() {
    dispatch(verifyPhoneNumber(_extends({}, registerInfo.user, {
      code: otp
    })));
  };

  var onClickGetOtp = function onClickGetOtp() {
    window.recaptchaVerifier.verify().then(function (value) {
      if (value === registerInfo.user.recaptchaToken) {
        toastError("Mã Otp đã được gửi đến điện thoại của bạn!");
      }
    });
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React__default.createElement("h1", {
    className: "landing-page-title"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.phoneNumberVerification"
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "mt-2 text-dark-green-2",
    dangerouslySetInnerHTML: {
      __html: intl.formatMessage({
        id: 'verifyAccount.otp.info'
      }, {
        phoneNumber: registerInfo.user.phoneNumber
      })
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "w-100 d-flex justify-content-center my-2"
  }, /*#__PURE__*/React__default.createElement(OtpInput, {
    inputStyle: "otp-input",
    value: otp,
    onChange: onChangeOtp,
    isInputNum: true,
    shouldAutoFocus: true,
    numInputs: NUM_INPUTS,
    separator: /*#__PURE__*/React__default.createElement("span", {
      className: "ml-2"
    })
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
    className: "w-100",
    color: 'primary',
    onClick: onClickVerify,
    disabled: otp.length !== NUM_INPUTS
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.otp.verify"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.didNotReceiveCode"
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "text-secondary font-weight-bold cursor-pointer",
    onClick: onClickGetOtp,
    style: {
      marginLeft: '3px'
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.tryAgain"
  })))));
};

var LandingPageHeader = function LandingPageHeader() {
  return /*#__PURE__*/React__default.createElement(Context.Consumer, null, function (context) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://inon.vn/"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "d-block d-lg-none"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: IMAGE.LOGO,
      alt: "logo"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "languages d-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement(reactstrap.UncontrolledButtonDropdown, {
      direction: "left"
    }, /*#__PURE__*/React__default.createElement(reactstrap.DropdownToggle, {
      color: "primary",
      tag: "div",
      className: "cursor-pointer"
    }, context.state.locale === 'en' ? /*#__PURE__*/React__default.createElement("img", {
      alt: "usa-icon",
      className: "cursor-pointer",
      src: "https://img.icons8.com/color/48/000000/usa.png"
    }) : /*#__PURE__*/React__default.createElement("img", {
      alt: "vn-icon",
      src: "https://img.icons8.com/color/48/000000/vietnam.png"
    })), /*#__PURE__*/React__default.createElement(reactstrap.DropdownMenu, null, /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
      tag: "div",
      className: "text-center",
      onClick: function onClick() {
        return context.switchLanguage('en');
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      alt: "usa-icon",
      className: "cursor-pointer",
      src: "https://img.icons8.com/color/48/000000/usa.png"
    })), /*#__PURE__*/React__default.createElement(reactstrap.DropdownItem, {
      tag: "div",
      className: "d-flex justify-content-center",
      onClick: function onClick() {
        return context.switchLanguage('vi');
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      alt: "vn-icon",
      src: "https://img.icons8.com/color/48/000000/vietnam.png"
    })))))));
  });
};

var CompleteInforValidate = Yup.object().shape({
  icNumber: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.nbrPer.required"
  })).when('icType', {
    is: 'CMND',
    then: Yup.string().matches(PERSONAL_ID_REGEX, function () {
      return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "completeInformation.nbrPer.invalid"
      });
    })
  }).when('icType', {
    is: 'CCCD',
    then: Yup.string().matches(CITIZEN_INDENTIFY_REGEX, function () {
      return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "completeInformation.nbrPer.invalid"
      });
    })
  }).when('icType', {
    is: 'HC',
    then: Yup.string().matches(PASSPORT_REGEX, function () {
      return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "completeInformation.nbrPer.invalid"
      });
    })
  }),
  dateOfBirth: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.dateOfBirth.required"
  })),
  address: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.address.required"
  })),
  bankName: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.bank.required"
  })),
  bankBranch: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.branch.required"
  })),
  bankNumber: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.accountNbr.required"
  })),
  city: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.province.required"
  })),
  ward: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.ward.required"
  })),
  district: Yup.string().required( /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "completeInformation.district.required"
  })),
  refCode: Yup.string().matches(PHONE_REGEX, function () {
    return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "register.refCode.invalid"
    });
  })
});

var CompleteInformation = function CompleteInformation() {
  var user = reactRedux.useSelector(function (state) {
    return state.auth.register.user;
  });

  var _useCityList = useCityList(VN_COUNTRY_CODE),
      cities = _useCityList.cities;

  var _useDistrictList = useDistrictList(cities[0] ? cities[0].id : null),
      districts = _useDistrictList.districts,
      loadDitrictsByCity = _useDistrictList.loadDitrictsByCity;

  var _useWardList = useWardList(districts[0] ? districts[0].id : null),
      wards = _useWardList.wards,
      loadWardsByDistrict = _useWardList.loadWardsByDistrict;

  var _useBankList = useBankList(),
      banks = _useBankList.banks;

  var dispatch = reactRedux.useDispatch();

  var onSubmit = function onSubmit(values) {
    dispatch(compeleteInfo(trimObjectValues(values)));
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "complete-info"
  }, /*#__PURE__*/React__default.createElement(formik.Formik, {
    enableReinitialize: true,
    initialValues: {
      icType: 'CMND',
      icNumber: '',
      dateOfBirth: '',
      gender: 'MALE',
      city: '',
      district: '',
      ward: '',
      address: '',
      bankName: '',
      bankBranch: '',
      bankNumber: '',
      refCode: user.refByUser
    },
    validationSchema: CompleteInforValidate,
    onSubmit: onSubmit
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement("h1", {
      className: "landing-page-title"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "completeInformation.title"
    })), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "6",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.idType",
      fieldName: "icType",
      options: IC_TYPES_OPTIONS,
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "6",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.nbrPer",
      fieldName: "icNumber",
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "6",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormDatePicker, {
      messageId: "completeInformation.dateOfBirth",
      fieldName: "dateOfBirth",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "6"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.gender",
      fieldName: "gender",
      defaultValue: GENDER_OPTIONS[0],
      options: GENDER_OPTIONS,
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.province",
      fieldName: "city",
      options: cities,
      onChange: function onChange(_ref2) {
        var id = _ref2.id;
        return loadDitrictsByCity(id);
      },
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.district",
      fieldName: "district",
      options: districts,
      onChange: function onChange(_ref3) {
        var id = _ref3.id;
        return loadWardsByDistrict(id);
      },
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.ward",
      fieldName: "ward",
      options: wards,
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "8",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.address",
      fieldName: "address",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4",
      className: "mb-1"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.gif",
      fieldName: "refCode",
      isRequired: false
    }))), /*#__PURE__*/React__default.createElement(reactstrap.Row, null, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroupSelect, {
      messageId: "completeInformation.bank",
      fieldName: "bankName",
      options: banks,
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.branch",
      fieldName: "bankBranch",
      errors: errors,
      touched: touched
    })), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      sm: "4"
    }, /*#__PURE__*/React__default.createElement(BaseFormGroup, {
      messageId: "completeInformation.accountNbr",
      fieldName: "bankNumber",
      errors: errors,
      touched: touched
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex justify-content-center mt-4"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "col-sm-5 col-md-4"
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      to: "/create-password"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      className: "btn-second",
      type: "button"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "completeInformation.back"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "col-sm-5 col-md-4"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
      color: "primary",
      type: "submit"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "completeInformation.done"
    })))));
  }));
};

var VerifyAccount = function VerifyAccount() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth.verifyAccount;
  }),
      status = _useSelector.status;

  var dispatch = reactRedux.useDispatch();
  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var token = urlParams.get('token');
    dispatch(verifyAccount(token));
  }, [history]);

  var renderVerifyStatus = function renderVerifyStatus() {
    if (status === 'SUCCESS') {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        style: {
          width: '100px'
        },
        className: "mx-auto"
      }, /*#__PURE__*/React__default.createElement("img", {
        src: IMAGE.CHECK_ICON,
        className: "img-fluid",
        alt: "success-icon"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "verifyAccount.success"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React__default.createElement(reactstrap.Button.Ripple, {
        onClick: function onClick() {
          return history.push('/reset-password');
        }
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "verifyAccount.createPassword"
      }))));
    } else {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        style: {
          width: '100px'
        },
        className: "mx-auto"
      }, /*#__PURE__*/React__default.createElement("img", {
        src: IMAGE.FAIL_ICON,
        className: "img-fluid",
        alt: "failure-icon"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "verifyAccount.fail"
      })));
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "verify-account"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/React__default.createElement("h4", {
    className: "font-weight-bold text-white"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.title"
  })), !status ? /*#__PURE__*/React__default.createElement("div", {
    className: "mt-4 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Spinner, {
    color: "primary"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "ml-1"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "verifyAccount.loading"
  }))) : /*#__PURE__*/React__default.createElement("div", {
    className: "text-center p-2"
  }, renderVerifyStatus())));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n\n  .landing-page-bg {\n    background-image: url('", "');\n    background-size: cover;\n    background-position: center;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var PageStyle = styled.div(_templateObject$1(), IMAGE.LANDING_PAGE_BG);

var LandingPage = function LandingPage(props) {
  var _useState = React.useState(''),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    setActiveTab(props.activeTab || 'login');
  }, [props.activeTab]);

  var TabView = function TabView() {
    switch (activeTab) {
      case 'login':
        return /*#__PURE__*/React__default.createElement(Login, null);

      case 'register':
        return /*#__PURE__*/React__default.createElement(Register, null);

      case 'forgot-password':
        return /*#__PURE__*/React__default.createElement(ForgotPassword, null);

      case 'reset-password':
      case 'provide-new-password':
        return /*#__PURE__*/React__default.createElement(CreatePassword, null);

      case 'create-password':
        return /*#__PURE__*/React__default.createElement(CreatePassword, {
          isCreatePassword: true
        });

      case 'verify-otp':
        return /*#__PURE__*/React__default.createElement(VerifyOtp, null);

      case 'verify-account':
        return /*#__PURE__*/React__default.createElement(VerifyAccount, null);

      case 'complete-information':
        return /*#__PURE__*/React__default.createElement(CompleteInformation, null);

      default:
        return '';
    }
  };

  var goToLink = function goToLink(link) {
    return history.push(link);
  };

  return /*#__PURE__*/React__default.createElement(PageStyle, null, /*#__PURE__*/React__default.createElement("div", {
    className: "landing-page"
  }, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
    className: "w-100 m-0",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    lg: 5,
    className: "d-none d-lg-block landing-page-bg"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "logo mx-auto"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://inon.vn/"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: IMAGE.LOGO,
    alt: "logo"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "info-text"
  }, /*#__PURE__*/React__default.createElement("h3", {
    className: "text-white"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "landingPage.welcomeText"
  })), /*#__PURE__*/React__default.createElement("p", {
    className: "text-white mt-2"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "landingPage.slogan"
  })), /*#__PURE__*/React__default.createElement("small", {
    className: "d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.1611 9.32831L11.3406 10.4239L10.7463 10.9441C10.0018 11.5954 9.05084 11.9543 8.06866 11.9543C5.86182 11.9543 4.06641 10.1959 4.06641 8.03464C4.06641 5.87835 5.86182 4.12402 8.06866 4.12402C9.05164 4.12402 9.99942 4.47951 10.7372 5.12504L11.3098 5.62613L10.1794 6.75711L9.67753 6.3137C9.24575 5.93239 8.67448 5.72235 8.06866 5.72235C6.74313 5.72235 5.66473 6.75966 5.66473 8.03457C5.66473 9.31457 6.74313 10.3559 8.06866 10.3559C8.66779 10.3559 9.23913 10.1426 9.67753 9.7553L10.1611 9.32831Z",
    fill: "#E7EBEB"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.5",
    stroke: "#E7EBEB"
  })), /*#__PURE__*/React__default.createElement("span", {
    style: {
      marginLeft: '2px'
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "landingPage.copyRight",
    values: {
      year: new Date().getFullYear()
    }
  }))))), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
    className: "mx-auto",
    sm: 12,
    lg: 7
  }, /*#__PURE__*/React__default.createElement("div", {
    className: activeTab === 'complete-information' ? 'main-content wider' : 'main-content'
  }, /*#__PURE__*/React__default.createElement(LandingPageHeader, null), activeTab === 'login' || activeTab === 'register' ? /*#__PURE__*/React__default.createElement("div", {
    className: "lg-content-header d-flex cursor-pointer mt-3"
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      return goToLink('/login');
    },
    className: classnames('col-6 text-center tab-control', {
      active: activeTab === 'login'
    })
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "login"
  })), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      return goToLink('/register');
    },
    className: classnames('col-6 text-center tab-control', {
      active: activeTab === 'register'
    })
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "register"
  }))) : null, /*#__PURE__*/React__default.createElement("div", {
    className: activeTab === 'login' || activeTab === 'register' ? '' : 'lg-content'
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/React__default.createElement(TabView, null))), /*#__PURE__*/React__default.createElement("div", {
    id: "recaptcha-container"
  }))))));
};

var ConfirmAlert = function ConfirmAlert() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.ui.confirmAlert;
  }),
      title = _useSelector.title,
      isShow = _useSelector.isShow,
      content = _useSelector.content,
      onConfirm = _useSelector.onConfirm,
      onCancel = _useSelector.onCancel,
      confirmBtnText = _useSelector.confirmBtnText,
      cancelBtnText = _useSelector.cancelBtnText,
      otherConfigs = _objectWithoutPropertiesLoose(_useSelector, ["title", "isShow", "content", "onConfirm", "onCancel", "confirmBtnText", "cancelBtnText"]);

  var dispatch = reactRedux.useDispatch();
  var intl = reactIntl.useIntl();

  var onClickConfirm = function onClickConfirm() {
    if (onConfirm) {
      onConfirm();
    }

    dispatch(hideConfirmAlert());
  };

  var onClickCancel = function onClickCancel() {
    if (onCancel) {
      onCancel();
    }

    dispatch(hideConfirmAlert());
  };

  return /*#__PURE__*/React__default.createElement(SweetAlert, _extends({
    title: title,
    show: isShow,
    showCancel: true,
    reverseButtons: true,
    btnSize: "md",
    cancelBtnBsStyle: "secondary",
    confirmBtnText: confirmBtnText || intl.formatMessage({
      id: 'common.ok'
    }),
    cancelBtnText: cancelBtnText || intl.formatMessage({
      id: 'common.cancel'
    }),
    onConfirm: onClickConfirm,
    onCancel: onClickCancel
  }, otherConfigs), content);
};

var CheckLocationChange = function CheckLocationChange() {
  var history = reactRouterDom.useHistory();
  var dispatch = reactRedux.useDispatch();

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.customizer;
  }),
      appId = _useSelector.appId;

  var _useSelector2 = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      authToken = _useSelector2.authToken;

  React.useEffect(function () {
    var id;

    if (window.location.href.includes('/app/')) {
      id = AppId.APP_NO1;
    } else if (window.location.href.includes('/insurance/')) {
      id = AppId.INSURANCE_APP;
    } else if (window.location.href.includes('/supplement/')) {
      id = AppId.SUPPLEMENT_APP;
    } else {
      id = AppId.ELITE_APP;
    }

    if (appId !== id) {
      dispatch(setAppId(id));
    }

    if ([AppId.APP_NO1, AppId.SUPPLEMENT_APP, AppId.INSURANCE_APP].indexOf(id) >= 0 && !authToken) {
      history.push('/');
    }
  }, [history.location.pathname]);
  return /*#__PURE__*/React__default.createElement("span", null);
};

var ConnectWithSocial = function ConnectWithSocial() {
  var dispatch = reactRedux.useDispatch();

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth.user;
  }),
      id = _useSelector.id;

  var _useSelector2 = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      userFacebookAuth = _useSelector2.userFacebookAuth,
      userGoogleAuth = _useSelector2.userGoogleAuth;

  React.useEffect(function () {
    if (id) {
      dispatch(getUserSocial(id)).then();
    }
  }, [id]);

  var connectWithGoogle = function connectWithGoogle(data) {
    var profileObj = data.profileObj;

    if (data.accessToken) {
      dispatch(connectWithSocialNetwork({
        socialId: profileObj.googleId,
        email: profileObj.email,
        picture: profileObj.imageUrl,
        name: profileObj.name,
        provider: LOGIN_METHODS.GOOGLE
      }, id));
    }
  };

  var connectWithFacebook = function connectWithFacebook(data) {
    if (data.accessToken) {
      dispatch(connectWithSocialNetwork({
        socialId: data.id,
        email: data.email,
        name: data.name,
        picture: data.picture.data.url,
        provider: LOGIN_METHODS.FACEBOOK
      }, id));
    }
  };

  return /*#__PURE__*/React__default.createElement(reactstrap.Card, {
    className: "connect-with-social p-1"
  }, /*#__PURE__*/React__default.createElement(reactstrap.CardBody, null, /*#__PURE__*/React__default.createElement("h4", {
    className: "text-uppercase mb-2"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "connectWithSocial.connectAccount"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center mb-1"
  }, (userFacebookAuth === null || userFacebookAuth === void 0 ? void 0 : userFacebookAuth.picture) ? /*#__PURE__*/React__default.createElement("img", {
    src: userFacebookAuth.picture,
    className: "width-50 height-50 mr-2 rounded-circle border",
    alt: ""
  }) : /*#__PURE__*/React__default.createElement("img", {
    className: "mr-2",
    alt: "facebook",
    src: "https://sit2.inon.vn/resources/images/fb-icon.svg"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "mr-2 width-100 font-weight-bold"
  }, (userFacebookAuth === null || userFacebookAuth === void 0 ? void 0 : userFacebookAuth.name) || "Facebook"), /*#__PURE__*/React__default.createElement(FacebookLogin, {
    type: "button",
    appId: FB_APP_ID,
    cssClass: "fb-login-button",
    disableMobileRedirect: true,
    render: function render(_ref) {
      var onClick = _ref.onClick;
      return /*#__PURE__*/React__default.createElement("div", {
        onClick: onClick,
        className: "cursor-pointer"
      }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
        color: "primary"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "connectWithSocial.connect"
      })));
    },
    fields: "name,email,picture",
    callback: connectWithFacebook
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center"
  }, (userGoogleAuth === null || userGoogleAuth === void 0 ? void 0 : userGoogleAuth.picture) ? /*#__PURE__*/React__default.createElement("img", {
    className: "width-50 height-50 mr-2 rounded-circle border",
    src: userGoogleAuth.picture,
    alt: ""
  }) : /*#__PURE__*/React__default.createElement("img", {
    className: "mr-2",
    alt: "google",
    src: "https://sit2.inon.vn/resources/images/google-icon.svg"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "mr-2 width-100 font-weight-bold"
  }, (userGoogleAuth === null || userGoogleAuth === void 0 ? void 0 : userGoogleAuth.name) || "Google"), /*#__PURE__*/React__default.createElement(GoogleLogin, {
    clientId: GOOGLE_APP_ID,
    onSuccess: connectWithGoogle,
    render: function render(_ref2) {
      var onClick = _ref2.onClick;
      return /*#__PURE__*/React__default.createElement("div", {
        onClick: onClick,
        className: "cursor-pointer"
      }, /*#__PURE__*/React__default.createElement(reactstrap.Button, {
        color: "primary"
      }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
        id: "connectWithSocial.connect"
      })));
    },
    cookiePolicy: 'single_host_origin'
  }))));
};

var BonusHistoryService = function BonusHistoryService() {};

BonusHistoryService.getBonusTransactionByUser = function (userId) {
  return HttpClient.get(API_GET_ALL_BONUS_TRANSACTION_BY_USER + "/" + userId);
};

BonusHistoryService.getBonusDrawvalTransactionByUser = function (userId) {
  return HttpClient.get(API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER + "/" + userId);
};

var DOTS = '...';

var range = function range(start, end) {
  var length = end - start + 1;
  return Array.from({
    length: length
  }, function (_, idx) {
    return idx + start;
  });
};

var usePagination = function usePagination(_ref) {
  var totalCount = _ref.totalCount,
      pageSize = _ref.pageSize,
      _ref$siblingCount = _ref.siblingCount,
      siblingCount = _ref$siblingCount === void 0 ? 1 : _ref$siblingCount,
      currentPage = _ref.currentPage;
  var paginationRange = React.useMemo(function () {
    var totalPageCount = Math.ceil(totalCount / pageSize);
    var totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    var shouldShowLeftDots = leftSiblingIndex > 2;
    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    var firstPageIndex = 1;
    var lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      var leftItemCount = 1 + 2 * siblingCount;
      var leftRange = range(1, leftItemCount);
      return [].concat(leftRange, [DOTS, totalPageCount]);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      var rightItemCount = 1 + 2 * siblingCount;
      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS].concat(rightRange);
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS].concat(middleRange, [DOTS, lastPageIndex]);
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

var Pagination = function Pagination(props) {
  var _classnames;

  var onPageChange = props.onPageChange,
      totalCount = props.totalCount,
      _props$siblingCount = props.siblingCount,
      siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount,
      currentPage = props.currentPage,
      pageSize = props.pageSize,
      className = props.className;
  var paginationRange = usePagination({
    currentPage: currentPage,
    totalCount: totalCount,
    siblingCount: siblingCount,
    pageSize: pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  var onNext = function onNext() {
    onPageChange(currentPage + 1);
  };

  var onPrevious = function onPrevious() {
    onPageChange(currentPage - 1);
  };

  var lastPage = paginationRange[paginationRange.length - 1];
  return /*#__PURE__*/React__default.createElement("ul", {
    className: classnames('pagination-container', (_classnames = {}, _classnames[className] = className, _classnames))
  }, /*#__PURE__*/React__default.createElement("li", {
    className: classnames('pagination-item', {
      disabled: currentPage === 1
    }),
    onClick: onPrevious
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "arrow left"
  })), paginationRange.map(function (pageNumber) {
    if (pageNumber === DOTS) {
      return /*#__PURE__*/React__default.createElement("li", {
        className: "pagination-item dots"
      }, "\u2026");
    }

    return /*#__PURE__*/React__default.createElement("li", {
      className: classnames('pagination-item', {
        selected: pageNumber === currentPage
      }),
      onClick: function onClick() {
        return onPageChange(pageNumber);
      }
    }, pageNumber);
  }), /*#__PURE__*/React__default.createElement("li", {
    className: classnames('pagination-item', {
      disabled: currentPage === lastPage
    }),
    onClick: onNext
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "arrow right"
  })));
};

var PageSize = 5;

var BonusPointItem = function BonusPointItem(_ref) {
  var items = _ref.items;

  var _useState = React.useState(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var currentTableData = React.useMemo(function () {
    var firstPageIndex = (currentPage - 1) * PageSize;
    var lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  var getIconByContractName = function getIconByContractName(contractName) {
    if (contractName) {
      var contractType = contractName.substr(0, 2);

      switch (contractType) {
        case "MC":
          return "https://sit2.inon.vn/resources/images/motor-icon.svg";

        case "CC":
          return "https://sit2.inon.vn/resources/images/nav-car-icon.svg";

        case "PH":
          return "https://sit2.inon.vn/resources/images/bonus-home-insurance.png";

        case "VT":
          return "https://sit2.inon.vn/resources/images/nav-people-icon.svg";

        case "HC":
          return "https://sit2.inon.vn/resources/images/nav-people-icon.svg";

        default:
          return "https://sit2.inon.vn/resources/images/motor-icon.svg";
      }
    }
  };

  var getIconByBonusWithDrawvalType = function getIconByBonusWithDrawvalType(bonusWithDrawvalType) {
    switch (bonusWithDrawvalType) {
      case 1:
        return "https://sit2.inon.vn/resources/images/bonus-payment-contract.png";

      case 2:
        return "https://sit2.inon.vn/resources/images/bonus-withdrawval.png";

      case 3:
        return "https://sit2.inon.vn/resources/images/bonus-gift.png";

      default:
        return "https://sit2.inon.vn/resources/images/bonus-pament-contract.png";
    }
  };

  var getTitleByBonusWithDrawvalType = function getTitleByBonusWithDrawvalType(bonusWithDrawvalType) {
    switch (bonusWithDrawvalType) {
      case 1:
        return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "bonusPoint.paymentContract"
        });

      case 2:
        return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "bonusPoint.withDrawval"
        });

      case 3:
        return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "bonusPoint.gift"
        });

      default:
        return /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
          id: "bonusPoint.paymentContract"
        });
    }
  };

  return /*#__PURE__*/React__default.createElement("div", null, currentTableData ? currentTableData.map(function (item) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center justify-content-sm-between bonus-trans-item border-bottom p-1 p-md-2"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "bonus-trans-item__icon width-100 d-none d-md-block"
    }, item.bonusWithDrawvalTypeDTO !== undefined ? /*#__PURE__*/React__default.createElement("img", {
      className: "width-50 height-50",
      src: getIconByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id),
      alt: ""
    }) : /*#__PURE__*/React__default.createElement("img", {
      className: "width-50 height-50",
      src: getIconByContractName(item.contractName),
      alt: ""
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "bonus-trans-item__content flex-grow-1"
    }, item.bonusWithDrawvalTypeDTO !== undefined ? /*#__PURE__*/React__default.createElement("div", {
      className: "__title mb-1"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "font-medium-2 mb-1"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "menu.contract"
    }), " ", item.contractName), /*#__PURE__*/React__default.createElement("div", null, getTitleByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id))) : /*#__PURE__*/React__default.createElement("div", {
      className: "__title mb-1"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "font-medium-2 mb-1"
    }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "menu.contract"
    }), " ", item.contractName), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
      id: "bonusPoint.bonus"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "__created-date font-small-2"
    }, moment(item.createdDate).format('DD/MM/YYYY'))), /*#__PURE__*/React__default.createElement("div", {
      className: "bonus-trans-item__value width-200 font-medium-4 text-right"
    }, item.bonusWithDrawvalTypeDTO ? /*#__PURE__*/React__default.createElement("span", null, "- ", numberFormat(item.value)) : /*#__PURE__*/React__default.createElement("span", {
      className: "text-success"
    }, "+ ", numberFormat(item.bonusValue))));
  }) : null, /*#__PURE__*/React__default.createElement(Pagination, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: items.length,
    pageSize: PageSize,
    onPageChange: function onPageChange(page) {
      return setCurrentPage(page);
    }
  }));
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  padding: 3rem;\n  top: 0;\n  left: 0;\n\n  .bonus-point__title {\n    text-transform: uppercase;\n    font-weight: bold;\n    margin-bottom: 1rem;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var BonusPointMainStyled = styled.div(_templateObject$2());

var BonusPoint = function BonusPoint() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.auth;
  }),
      user = _useSelector.user;

  var _useState = React.useState('1'),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = React.useState(),
      bonusPointHistory = _useState2[0],
      setBonusPointHistory = _useState2[1];

  var _useState3 = React.useState(),
      bonusPointReceived = _useState3[0],
      setBonusPointReceived = _useState3[1];

  var _useState4 = React.useState(),
      bonusPointUsed = _useState4[0],
      setBonusPointUsed = _useState4[1];

  var _useState5 = React.useState(),
      bonusPointTotal = _useState5[0],
      setBonusPointTotal = _useState5[1];

  var toggle = function toggle(tab) {
    if (active !== tab) {
      setActive(tab);
    }
  };

  var getBonusPointData = function getBonusPointData() {
    try {
      return Promise.resolve(BonusHistoryService.getBonusTransactionByUser(user.id)).then(function (bonusPointReceivedData) {
        return Promise.resolve(BonusHistoryService.getBonusDrawvalTransactionByUser(user.id)).then(function (bonusPointUsedData) {
          var bonusPointReceived = 0;

          if (bonusPointReceivedData.status === 200) {
            setBonusPointReceived(bonusPointReceivedData.data);
            bonusPointReceived = bonusPointReceivedData.data.map(function (item) {
              return item.bonusValue;
            }).reduce(function (x, y) {
              return parseFloat(x) + parseFloat(y);
            });
          }

          var bonusPointUsed = 0;

          if (bonusPointUsedData.status === 200) {
            setBonusPointUsed(bonusPointUsedData.data);
            bonusPointUsed = bonusPointUsedData.data.map(function (item) {
              return item.value;
            }).reduce(function (x, y) {
              return parseFloat(x) + parseFloat(y);
            });
          }

          setBonusPointTotal((bonusPointReceived - bonusPointUsed).toFixed(2));
          var bonusHistoryData = bonusPointReceivedData.data.concat(bonusPointUsedData.data);
          var sortedData = bonusHistoryData.sort(function (a, b) {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
          });
          setBonusPointHistory(sortedData);
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  React.useEffect(function () {
    getBonusPointData().then();
  }, []);
  return /*#__PURE__*/React__default.createElement(reactstrap.Card, null, /*#__PURE__*/React__default.createElement(reactstrap.CardHeader, {
    className: "justify-content-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bonus-point position-relative"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: RESOURCE_URL + 'bonus-point-bg.svg',
    alt: "",
    className: "d-none d-md-block"
  }), /*#__PURE__*/React__default.createElement("img", {
    src: RESOURCE_URL + 'bonus-point-mobile-bg.png',
    alt: "",
    className: "d-block d-md-none"
  }), /*#__PURE__*/React__default.createElement(BonusPointMainStyled, null, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bonus-point__title"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "bonusPoint.availablePoint"
  })), /*#__PURE__*/React__default.createElement(Icon.DollarSign, null)), /*#__PURE__*/React__default.createElement("h2", {
    className: "bonus-point__number font-weight-bolder mb-2 text-success"
  }, numberFormat(bonusPointTotal)), /*#__PURE__*/React__default.createElement("div", {
    className: "bonus-point__description"
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "bonusPoint.uses"
  }))))), /*#__PURE__*/React__default.createElement(reactstrap.CardBody, null, /*#__PURE__*/React__default.createElement(reactstrap.Nav, {
    tabs: true,
    justified: true
  }, /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: "text-uppercase",
    active: active === '1',
    onClick: function onClick() {
      toggle('1');
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "bonusPoint.history"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: "text-uppercase",
    active: active === '2',
    onClick: function onClick() {
      toggle('2');
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "bonusPoint.received"
  }))), /*#__PURE__*/React__default.createElement(reactstrap.NavItem, null, /*#__PURE__*/React__default.createElement(reactstrap.NavLink, {
    className: "text-uppercase",
    active: active === '3',
    onClick: function onClick() {
      toggle('3');
    }
  }, /*#__PURE__*/React__default.createElement(reactIntl.FormattedMessage, {
    id: "bonusPoint.used"
  })))), /*#__PURE__*/React__default.createElement(reactstrap.TabContent, {
    className: "py-50",
    activeTab: active
  }, /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "1"
  }, bonusPointHistory ? /*#__PURE__*/React__default.createElement(BonusPointItem, {
    items: bonusPointHistory
  }) : null), /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "2"
  }, bonusPointReceived ? /*#__PURE__*/React__default.createElement(BonusPointItem, {
    items: bonusPointReceived
  }) : null), /*#__PURE__*/React__default.createElement(reactstrap.TabPane, {
    tabId: "3"
  }, bonusPointUsed ? /*#__PURE__*/React__default.createElement(BonusPointItem, {
    items: bonusPointUsed
  }) : null))));
};

var AppRouter = function AppRouter(props) {
  var checkLoginStatus = props.checkLoginStatus,
      appId = props.appId,
      user = props.user,
      loginStatus = props.loginStatus,
      isAuthentication = props.isAuthentication,
      guest = props.guest,
      authToken = props.authToken,
      children = props.children,
      history = props.history,
      message = props.message;
  React.useEffect(function () {
    var urlParams = new URLSearchParams(document.location.search);
    var code = guest.authToken || authToken;
    var redirectUrl = urlParams.get('redirectUrl');

    if (code && loginStatus !== LOGIN_STATUS.SUCCESS) {
      checkLoginStatus(code, redirectUrl);
    }
  }, [authToken]);
  var appMessage = {
    en: _extends({}, messages_en, message.en),
    vi: _extends({}, messages_vi, message.vi)
  };
  var settingRoutes = [{
    path: 'account-info',
    component: AccountSettings
  }, {
    path: 'change-password',
    component: AccountSettings
  }, {
    path: 'share-with-friends',
    component: AccountSettings
  }, {
    path: 'terms-and-condition',
    component: GeneralInfo
  }, {
    path: 'privacy-policy',
    component: GeneralInfo
  }, {
    path: 'language',
    component: GeneralInfo
  }, {
    path: 'contact',
    component: GeneralInfo
  }, {
    path: 'connect-with-social',
    component: ConnectWithSocial
  }, {
    path: 'bonus-point',
    component: BonusPoint
  }];
  var landingPageRoutes = [{
    path: 'login'
  }, {
    path: 'register'
  }, {
    path: 'forgot-password'
  }, {
    path: 'provide-new-password'
  }, {
    path: 'reset-password'
  }, {
    path: 'verify-account'
  }, {
    path: 'verify-otp'
  }, {
    path: 'create-password'
  }, {
    path: 'complete-information'
  }];
  return /*#__PURE__*/React__default.createElement(IntlProviderWrapper, {
    locale: user && user.userSettings ? user.userSettings.language.toLowerCase() : localStorage.getItem('language'),
    appMessage: appMessage
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Router, {
    history: history
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    path: "/",
    render: function render(props) {
      return isAuthentication && appId !== AppId.ELITE_APP ? /*#__PURE__*/React__default.createElement(Layout$1, _extends({}, props, {
        appId: appId
      }), /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, settingRoutes.map(function (item) {
        return /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
          key: item.path,
          path: "/app/" + item.path,
          render: function render() {
            return /*#__PURE__*/React__default.createElement(item.component, {
              activeTab: item.path
            });
          }
        });
      }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
        path: "/",
        render: function render() {
          return children;
        }
      }))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, landingPageRoutes.map(function (item) {
        return /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
          key: item.path,
          path: "/" + item.path,
          render: function render() {
            return /*#__PURE__*/React__default.createElement(LandingPage, {
              activeTab: item.path
            });
          }
        });
      }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
        path: "/social-login",
        component: SocialLogin
      }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
        path: "/",
        render: function render() {
          return children;
        }
      })));
    }
  })), /*#__PURE__*/React__default.createElement(CheckLocationChange, null)), /*#__PURE__*/React__default.createElement(reactToastify.ToastContainer, {
    hideProgressBar: true,
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true
  }), /*#__PURE__*/React__default.createElement(ConfirmAlert, null));
};

var mapStateToProps$3 = function mapStateToProps(state) {
  return {
    isAuthentication: !!state.auth.authToken,
    authToken: state.auth.authToken,
    guest: state.auth.guest,
    loginStatus: state.auth.loginStatus,
    user: state.auth.user,
    appId: state.customizer.appId
  };
};

var AppRouter$1 = reactRedux.connect(mapStateToProps$3, {
  checkLoginStatus: checkLoginStatus,
  loginAction: loginAction,
  changeIsGuest: changeIsGuest,
  logoutAction: logoutAction,
  setAppId: setAppId
})(AppRouter);

TopBarProgress.config({
  shadowBlur: 5,
  barThickness: 5
});

var LoadingSpinner = function LoadingSpinner() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.ui;
  }),
      isLoading = _useSelector.isLoading;

  return isLoading ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "app-loading"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "load-icon"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "loader"
  }), /*#__PURE__*/React__default.createElement("img", {
    alt: "InOn-logo",
    src: RESOURCE_URL + "InOn-logo.svg"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "fade"
  }))) : null;
};

var RippleButton = function RippleButton(_ref) {
  var rippleColor = _ref.rippleColor,
      during = _ref.during,
      block = _ref.block,
      rest = _objectWithoutPropertiesLoose(_ref, ["rippleColor", "during", "block"]);

  return /*#__PURE__*/React__default.createElement(Ripples, {
    color: rippleColor ? rippleColor : "rgba(255, 255, 255, .5)",
    during: during,
    className: "" + (block ? "d-block" : "")
  }, /*#__PURE__*/React__default.createElement(reactstrap.Button, rest));
};

RippleButton.propTypes = _extends({}, reactstrap.Button.propTypes, {
  rippleColor: PropTypes.string,
  during: PropTypes.number
});
reactstrap.Button.Ripple = RippleButton;

var isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

var App = function App(_ref) {
  var children = _ref.children,
      appId = _ref.appId,
      appReducer = _ref.appReducer,
      message = _ref.message,
      apiBaseUrl = _ref.apiBaseUrl,
      history = _ref.history;
  var middlewares = [thunk, createDebounce()];
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  var store = redux.createStore(rootReducer(appReducer), {}, composeEnhancers(redux.applyMiddleware.apply(void 0, middlewares)));
  var persistor = reduxPersist.persistStore(store);
  setBaseHistory(history);
  setUpHttpClient(store, apiBaseUrl);
  firebase.initializeApp(FIRE_BASE_CONFIGS);
  return /*#__PURE__*/React__default.createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default.createElement(react.PersistGate, {
    loading: null,
    persistor: persistor
  }, /*#__PURE__*/React__default.createElement(LoadingSpinner, null), /*#__PURE__*/React__default.createElement(AppRouter$1, {
    message: message,
    appId: appId,
    history: history,
    children: children
  })));
};

unregister();

var FallbackSpinner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FallbackSpinner, _React$Component);

  function FallbackSpinner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FallbackSpinner.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "fallback-spinner"
    }, /*#__PURE__*/React__default.createElement("img", {
      className: "fallback-logo",
      src: IMAGE.INON_LOGO,
      alt: "logo"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "effect-1 effects"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "effect-2 effects"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "effect-3 effects"
    })));
  };

  return FallbackSpinner;
}(React__default.Component);

var defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 3,
  integerLimit: 13,
  allowNegative: false,
  allowLeadingZeroes: false
};

var CurrencyInput = function CurrencyInput(_ref) {
  var maskOptions = _ref.maskOptions,
      placeholder = _ref.placeholder,
      inputProps = _objectWithoutPropertiesLoose(_ref, ["maskOptions", "placeholder"]);

  var _useIntl = reactIntl.useIntl(),
      formatMessage = _useIntl.formatMessage;

  var currencyMask = createNumberMask(_extends({}, defaultMaskOptions, maskOptions));
  return /*#__PURE__*/React__default.createElement(MaskedInput, _extends({
    mask: currencyMask,
    placeholder: formatMessage({
      id: placeholder
    })
  }, inputProps));
};

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {}
};
CurrencyInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
    integerLimit: PropTypes.number
  })
};

var ReactTable = function ReactTable(props) {
  var intl = reactIntl.useIntl();
  return /*#__PURE__*/React__default.createElement(Table, _extends({
    previousText: intl.formatMessage({
      id: 'common.table.previous'
    }),
    nextText: intl.formatMessage({
      id: 'common.table.next'
    }),
    noDataText: intl.formatMessage({
      id: 'common.table.noData'
    }),
    pageText: intl.formatMessage({
      id: 'common.table.page'
    }),
    ofText: intl.formatMessage({
      id: 'common.table.of'
    }),
    rowsText: intl.formatMessage({
      id: 'common.table.rows'
    })
  }, props));
};

var usePageAuthorities = function usePageAuthorities() {
  var _useState = React.useState([]),
      authorities = _useState[0],
      setAuthorities = _useState[1];

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.navbar;
  }),
      userRoles = _useSelector.userRoles,
      roles = _useSelector.roles;

  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    var roleList = roles.filter(function (item) {
      return history.location.pathname.includes(item.menuPath);
    });

    if (!roleList.length) {
      return;
    }

    roleList.sort(function (a, b) {
      return a.id - b.id;
    });
    var lastRole = roleList[roleList.length - 1];
    var userRoleList = userRoles.filter(function (item) {
      return item.roleId === lastRole.id;
    });
    var authList = userRoleList.map(function (item) {
      return item.authority;
    });
    setAuthorities(authList);
  }, [userRoles, roles, history.location.pathname]);
  return authorities;
};

Object.defineProperty(exports, 'FormattedMessage', {
  enumerable: true,
  get: function () {
    return reactIntl.FormattedMessage;
  }
});
Object.defineProperty(exports, 'toast', {
  enumerable: true,
  get: function () {
    return reactToastify.toast;
  }
});
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () {
    return reactstrap.Button;
  }
});
exports.AccountSettings = AccountSettings;
exports.AppId = AppId;
exports.AutoComplete = Autocomplete;
exports.BaseApp = App;
exports.BaseAppConfigs = appConfigs;
exports.BaseAppUltils = index;
exports.BaseFormDatePicker = BaseFormDatePicker;
exports.BaseFormGroup = BaseFormGroup;
exports.BaseFormGroupSelect = BaseFormGroupSelect;
exports.Bells = Bells;
exports.Checkbox = CheckBox;
exports.CurrencyInput = CurrencyInput;
exports.DatePicker = DatePicker;
exports.FallbackSpinner = FallbackSpinner;
exports.GeneralInfo = GeneralInfo;
exports.HttpClient = HttpClient;
exports.LandingPage = LandingPage;
exports.Radio = Radio;
exports.ReactTable = ReactTable;
exports.Select = Select;
exports.changeIsGuest = changeIsGuest;
exports.goBackHomePage = goBackHomePage;
exports.goToAgencyApp = goToAgencyApp;
exports.hideConfirmAlert = hideConfirmAlert;
exports.logoutAction = logoutAction;
exports.showConfirmAlert = showConfirmAlert;
exports.useBankList = useBankList;
exports.useCityList = useCityList;
exports.useDeviceDetect = useDeviceDetect;
exports.useDistrictList = useDistrictList;
exports.usePageAuthorities = usePageAuthorities;
exports.useWardList = useWardList;
exports.useWindowDimensions = useWindowDimensions;
