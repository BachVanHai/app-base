import { FormattedMessage, useIntl, IntlProvider } from 'react-intl';
export { FormattedMessage } from 'react-intl';
import React, { useState, useEffect, Component, PureComponent, useCallback, useRef, useMemo } from 'react';
import { createBrowserHistory } from 'history';
import Axios from 'axios';
import 'axios-extensions';
import * as Icon from 'react-feather';
import { Info, Check, AlertTriangle, User, Lock, Link, Users, Aperture, FileText, Shield, Globe, HelpCircle, MessageSquare, Power, Bell, DollarSign, Search, X, Menu, Home, List, PlusCircle, Gift, ArrowUp, Disc, Circle, ChevronRight, Download, Clipboard, Sun } from 'react-feather';
import { toast, ToastContainer } from 'react-toastify';
export { toast } from 'react-toastify';
import moment from 'moment';
import { FormGroup, Label, DropdownMenu, DropdownItem, Media, UncontrolledButtonDropdown, DropdownToggle, ButtonDropdown, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Button, NavItem, NavLink, UncontrolledDropdown, Navbar as Navbar$1, Input, Row, Col, Card, CardHeader, CardTitle, CardBody, Nav, TabContent, TabPane, ButtonGroup, Spinner } from 'reactstrap';
export { Button } from 'reactstrap';
import { useDispatch, useSelector, connect, Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { useHistory, Link as Link$1, Router, Switch, Route } from 'react-router-dom';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'moment/locale/vi';
import styled from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Hammer from 'react-hammerjs';
import { object, string, ref } from 'yup';
import { Field, Formik, Form, FastField } from 'formik';
import Flatpickr from 'react-flatpickr';
import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import QRCode from 'easyqrcodejs';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import firebase from 'firebase';
import OtpInput from 'react-otp-input';
import SweetAlert from 'react-bootstrap-sweetalert';
import TopBarProgress from 'react-topbar-progress-indicator';
import Ripples from 'react-ripples';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import Table from 'react-table';

const AppId = {
  APP_NO1: 'APP_NO1',
  INSURANCE_APP: 'INSURANCE_APP',
  SUPPLEMENT_APP: 'SUPPLEMENT_APP',
  ELITE_APP: 'ELITE_APP',
  DIVAY_APP: 'DIVAY_APP'
};

const API_BASE_URL = 'https://api.inon.vn';
const RESOURCE_URL = 'https://sit2.inon.vn/resources/images/';
const FB_APP_ID = '2651185198505964';
const GOOGLE_APP_ID = '400818618331-k9ptcdcgr99po0g5q5mh8e5ekodgj61n.apps.googleusercontent.com';
const API_LOGIN_URL = '/api/authenticate';
const API_LOGOUT_URL = '/api/logout';
const API_GUEST_SOCIAL_LOGIN = '/api/social-login/guest';
const API_PARTNER_SOCIAL_LOGIN = '/api/social-login/partner';
const API_CHANGE_PASSWORD = '/api/change-password';
const API_REGISTER = '/nth/onboarding/api/authenticate/register';
const API_VERIFY_ACCOUNT = '/nth/onboarding/api/authenticate/verify-account';
const API_VERIFY_PHONENUMBER = '/nth/onboarding/api/authenticate/verify-phone-number';
const API_GET_USER = '/nth/user/api/users';
const API_USER_SETTINGS = '/nth/user/api/user-settings';
const API_UPDATE_USER_INFO = '/nth/user/api/update-user-info';
const API_GET_NAV_CONFIGS = '/nth/accesscontrol/api/roles';
const API_GET_USER_ROLES = '/nth/accesscontrol/api/user-group-roles';
const API_CREATE_PASSWORD = '/nth/onboarding/api/authenticate/create-new-password';
const API_GET_USER_BY_REGISTER_TOKEN = '/nth/onboarding/api/authenticate/get-partner';
const API_COMPLETE_INFO = '/nth/onboarding/api/authenticate/complete-info';
const API_FORGOT_PASSWORD = '/api/authenticate/forgot-password';
const API_RESET_PASSWORD = '/api/authenticate/reset-password';
const API_EMAIL_SUGGESTION = '/nth/user/api/authenticate/email-suggestion';
const API_GET_MY_NOTIFICATIONS = '/nth/notification/api/my-notification';
const API_CHECK_NEW_NOTIFICATIONS = '/nth/notification/api/authenticate/notifications-es';
const API_GET_NOTIFICATION_FROM_ESPUBLIC = '/nth/notification/api/authenticate/user-notifications-es';
const API_UPDATE_NOTIFICATION = '/nth/notification/api/authenticate/my-notifications/status';
const API_UPDATE_ALL_NOTIFICATION_STATUS = '/nth/notification/api/authenticate/my-notifications-status';
const API_GET_ALL_BONUS_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-transaction/by-user';
const API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-with-drawval-transactions/by-user';
const API_GET_USER_SOCIAL = '/api/user-social-network';
const API_GET_BONUS_BY_USER_ID = '/nth/bonusmanager/api/userBonusBalance';
const API_R_200 = 200;
const API_GET_CITIES_BY_COUNTRY = '/nth/datacollection/api/citiesbycountry';
const API_GET_DISTRICTS_BY_CITY = '/nth/datacollection/api/districtsbycity';
const API_GET_WARDS_BY_CITY = '/nth/datacollection/api/wardsbydistrict';
const API_GET_BANKS = '/nth/datacollection/api/allBanks';
const API_UPLOAD_FILE = '/nth/file/api/upload';
const API_GET_FILE = '/nth/file/api/file';
const MAX_MOBILE_WIDTH = 768;
const MAX_TABLET_WIDTH = 1024;
const REMEMBER_ME_TOKEN = 'rememberMe';
const VN_COUNTRY_CODE = 192;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*])).{8,}$/gm;
const PHONE_REGEX = /^\b(84|0[3|5|7|8|9])+([0-9]{8})\b$/g;
const PERSONAL_ID_REGEX = /^(\d{9}|\d{12})$/;
const CITIZEN_INDENTIFY_REGEX = /^(\d{12})$/;
const PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;
const NAME_REGEX = /^([ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếềìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý0-9A-Za-z_. ])+$/g;
const TERMS_PDF = 'https://sit2.inon.vn/resources/pdf/terms-and-conditions.pdf';
const POLICY_PDF = 'https://doc.inon.vn/privacy-policy';
const FIRE_BASE_CONFIGS = {
  apiKey: "AIzaSyCvWX-pLEPOxjwp2AJq3_t11JQjRMKtaT8",
  authDomain: "inonvn.firebaseapp.com",
  projectId: "inonvn",
  storageBucket: "inonvn.appspot.com",
  messagingSenderId: "316619339575",
  appId: "1:316619339575:web:a44ffe85ab9b3619f88cb2",
  measurementId: "G-9NZ14LNF58"
};
const AUTHORITIES = {
  VIEW: 'view',
  EDIT: 'edit',
  APPROVE: 'approve',
  CREATE: 'create'
};
const LOGIN_METHODS = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  PASSWORD: 'PASSWORD'
};
const API_TIME_OUT = 5 * 60 * 1000;
const MAX_FILE_SIZE = 5;
const CONTACT_PHONE = '0899.300.800';
const SESSION_TIMEOUT = 30;
const DATE_TIME_FORMAT = 'YYYY/MM/DD HH:mm:ss';
const ANDROID_APP_LINK = 'https://play.google.com/store/apps/details?id=com.inon.vn';
const IOS_APP_LINK = 'https://apps.apple.com/app/id1574202853';
const LOGIN_STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};
const USER_TYPE = {
  KD: 'KD',
  HTKD: 'HTKD'
};
const GENDER_OPTIONS = [{
  value: 'MALE',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.gender.male"
  })
}, {
  value: 'FEMALE',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.gender.female"
  })
}, {
  value: 'OTHERS',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.gender.other"
  })
}];
const IC_TYPES_OPTIONS = [{
  value: 'HC',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.icType.passport"
  })
}, {
  value: 'CMND',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.icType.personalID"
  })
}, {
  value: 'CCCD',
  label: /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.icType.citizenIdentify"
  })
}];
const getExternalAppUrl = (appId, url) => {
  switch (appId) {
    case AppId.APP_NO1:
      return `/app${url}`;
    case AppId.INSURANCE_APP:
      return `/insurance${url}`;
    case AppId.SUPPLEMENT_APP:
      return `/supplement${url}`;
    case AppId.ELITE_APP:
      return `${url}`;
  }
};
const getContextPath = appId => {
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
const getPropObject = (obj, prop) => {
  if (!obj) {
    return null;
  }
  return prop.split('.').reduce((r, e) => {
    return r ? r[e] : null;
  }, obj);
};
const USER_ROLE = {
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
const IMAGE = {
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
const NAV_ICONS = ["help-center", "support 24/7"];

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
    API_GET_BONUS_BY_USER_ID: API_GET_BONUS_BY_USER_ID,
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

let history = createBrowserHistory({
  basename: ''
});
const setBaseHistory = appHistory => {
  history = appHistory;
};

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
const trimValue = value => {
  return value ? value.trim() : '';
};
const bytesToMb = bytes => {
  return Math.round(bytes / Math.pow(1024, 2), 2);
};
const trimObjectValues = (object, excludeKeys = []) => {
  if (!object) {
    return;
  }
  Object.keys(object).forEach(key => {
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
const numberFormat = value => {
  return Intl.NumberFormat().format(value);
};
const toastError = message => {
  toast.info( /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1 p-0"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 24
  })), /*#__PURE__*/React.createElement("p", {
    className: "mx-1 my-0"
  }, message)));
};
const toastSuccess = message => {
  toast.success( /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1 p-0"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 24
  })), /*#__PURE__*/React.createElement("p", {
    className: "mx-1 my-0"
  }, message)));
};
const toastInfo = message => {
  toast.info( /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1 p-0"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 24
  })), /*#__PURE__*/React.createElement("p", {
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
    toastSuccess: toastSuccess,
    toastInfo: toastInfo
};

const SHOW_LOADING_BAR = 'SHOW_LOADING_BAR';
const HIDE_LOADING_BAR = 'HIDE_LOADING_BAR';
const SHOW_CONFIRM_ALERT = 'SHOW_CONFIRM_ALERT';
const HIDE_CONFIRM_ALERT = 'HIDE_CONFIRM_ALERT';
const showConfirmAlert = configs => {
  return dispatch => dispatch({
    type: SHOW_CONFIRM_ALERT,
    payload: configs
  });
};
const hideConfirmAlert = () => {
  return dispatch => dispatch({
    type: HIDE_CONFIRM_ALERT
  });
};

const HttpClient = Axios.create({
  timeout: API_TIME_OUT
});
HttpClient.defaults.headers['Content-Type'] = 'application/json';
const setUpHttpClient = (store, apiBaseUrl) => {
  let deviceId = localStorage.getItem('deviceId');
  let language = localStorage.getItem('language');
  if (!deviceId) {
    deviceId = generateUUID();
    localStorage.setItem('deviceId', deviceId);
  }
  if (!language) {
    localStorage.setItem('language', 'vi');
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      localStorage.setItem('latitude', position.coords.latitude);
      localStorage.setItem('longitude', position.coords.longitude);
    });
  }
  HttpClient.defaults.baseURL = apiBaseUrl || API_BASE_URL;
  HttpClient.interceptors.request.use(config => {
    const token = store.getState().auth.guest.authToken || store.getState().auth.authToken;
    const sessionExpireTime = store.getState().auth.sessionExpireTime;
    language = localStorage.getItem('language');
    if (token) {
      store.dispatch(changeActionExpireTime());
      config.headers.Authorization = `Bearer ${token}`;
      const isSessionExpired = moment().isAfter(moment(sessionExpireTime));
      if (sessionExpireTime && isSessionExpired) {
        toastError( /*#__PURE__*/React.createElement(FormattedMessage, {
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
  HttpClient.interceptors.response.use(response => {
    if (response && !response.config.isBackgroundRequest) {
      store.dispatch({
        type: HIDE_LOADING_BAR,
        payload: response.config.requestUUID
      });
    }
    return response;
  }, e => {
    store.dispatch({
      type: HIDE_LOADING_BAR,
      payload: 'ALL'
    });
    if (!e.response) {
      return e;
    }
    switch (e.response.status) {
      case 400:
        toastInfo(e.response.data.message || /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "common.error.400"
        }));
        break;
      case 403:
        if (e.response.data.error === 'Forbidden') {
          return e.response;
        }
        toastInfo(e.response.data.message || /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "common.sessionExpired"
        }));
        store.dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
        break;
      case 500:
        toastInfo( /*#__PURE__*/React.createElement(FormattedMessage, {
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

class AuthService {}
AuthService.login = user => {
  return HttpClient.post(API_LOGIN_URL, user);
};
AuthService.guestSocialLogin = data => {
  return HttpClient.post(API_GUEST_SOCIAL_LOGIN, data);
};
AuthService.partnerSocialLogin = data => {
  return HttpClient.post(API_PARTNER_SOCIAL_LOGIN, data);
};
AuthService.getUserInfo = (username, authToken) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  return HttpClient.get(`${API_GET_USER}/${username}`, {
    headers
  });
};
AuthService.getUserByRegisterToken = registerToken => {
  return HttpClient.get(`${API_GET_USER_BY_REGISTER_TOKEN}/${registerToken}`);
};
AuthService.compeleteInfo = user => {
  return HttpClient.post(`${API_COMPLETE_INFO}`, user);
};
AuthService.logout = userId => {
  return HttpClient.post(`${API_LOGOUT_URL}/${userId}`);
};
AuthService.createPassword = (password, registerToken) => {
  return HttpClient.post(API_CREATE_PASSWORD, {
    password,
    registerToken
  });
};
AuthService.register = user => {
  return HttpClient.post(API_REGISTER, user);
};
AuthService.checkLoginByToken = () => {
  return HttpClient.get(API_LOGIN_URL);
};
AuthService.getSuggestionEmail = username => {
  return HttpClient.get(`${API_EMAIL_SUGGESTION}/${username}`);
};
AuthService.forgotPassword = (username, email) => {
  return HttpClient.post(API_FORGOT_PASSWORD, {
    username,
    email
  });
};
AuthService.resetPassword = (password, resetToken) => {
  return HttpClient.post(API_RESET_PASSWORD, {
    password,
    resetToken
  });
};
AuthService.updateUserInfo = user => {
  return HttpClient.put(API_UPDATE_USER_INFO, user);
};
AuthService.changePassword = value => {
  return HttpClient.post(API_CHANGE_PASSWORD, value);
};
AuthService.changeUserSetting = value => {
  return HttpClient.put(API_USER_SETTINGS, value);
};
AuthService.verifyAccount = token => {
  return HttpClient.post(`${API_VERIFY_ACCOUNT}/${token}`);
};
AuthService.verifyPhoneNumber = value => {
  return HttpClient.post(`${API_VERIFY_PHONENUMBER}`, value);
};
AuthService.getUserSocial = userId => {
  return HttpClient.get(`${API_GET_USER_SOCIAL}/${userId}`);
};
AuthService.connectWithSocialNetwork = (data, userId) => {
  return HttpClient.post(`${API_GET_USER_SOCIAL}/${userId}`, data);
};
AuthService.updateAvatar = async (user, file) => {
  const formData = new FormData();
  formData.append('fileInfo', new Blob([JSON.stringify({
    userId: user.id,
    docType: 'AVATAR'
  })], {
    type: 'application/json'
  }));
  formData.append('file', file);
  const res = await HttpClient.post(API_UPLOAD_FILE, formData);
  if (res.status === 200) {
    return HttpClient.defaults.baseURL + API_GET_FILE + '?fileCode=' + res.data.code;
  }
  return '';
};

const mapRoleListToNavConfigs = (roleList = []) => {
  if (!roleList.length) {
    return [];
  }
  roleList = roleList.filter(item => item.order < 1000);
  const mapRoles = new Map();
  roleList.forEach(role => {
    const listRole = mapRoles.get(role.parentId);
    const itemNav = mapRoleToNavItem(role);
    if (listRole) {
      listRole.push(itemNav);
      mapRoles.set(role.parentId, listRole);
    } else {
      mapRoles.set(role.parentId, [itemNav]);
    }
  });
  const parentList = mapRoles.get(null);
  return parentList.map(item => {
    item.children = mapRoles.get(item.id + '');
    return item;
  });
};
const mapRoleToNavItem = role => {
  const IconTag = Icon[role.icon];
  const item = {};
  item.id = role.id;
  item.type = 'item';
  item.code = role.code;
  item.appId = role.appId;
  item.title = `menu.${role.keyLang}`;
  item.description = role.description;
  item.icon = /*#__PURE__*/React.createElement(IconTag, {
    size: 20
  });
  item.navLink = getExternalAppUrl(role.appId, role.menuPath);
  if (role.isHighlight) {
    item.badge = 'primary';
    item.badgeText = 'new';
  }
  return item;
};
const getNativgationConfig = navConfigs => {
  navConfigs = mapRoleListToNavConfigs(navConfigs);
  return navConfigs.map(item => {
    item.isExternalApp = false;
    if (item.children) {
      item.children.map(child => child.isExternalApp = false);
      if (item.children.length === 1) {
        item.navLink = item.children[0].navLink;
      } else {
        item.type = 'collapse';
      }
    }
    return item;
  });
};

class NavBarService {}
NavBarService.getNativagtion = () => {
  return HttpClient.get(API_GET_NAV_CONFIGS, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};
NavBarService.getUserGroupRole = groupId => {
  return HttpClient.get(`${API_GET_USER_ROLES}/${groupId}`, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};

const LOAD_NATIVGATION = 'LOAD_NATIVGATION';
const LOAD_USER_ROLE = 'LOAD_USER_ROLE';
const loadNavigation = () => {
  return async dispatch => {
    try {
      const res = await NavBarService.getNativagtion();
      if (!res || !res.data) {
        return;
      }
      dispatch(loadUserRoles());
      const roles = res.data || [];
      const navConfigs = getNativgationConfig(roles);
      dispatch({
        type: LOAD_NATIVGATION,
        payload: {
          navConfigs,
          roles
        }
      });
    } catch (e) {}
  };
};
const loadUserRoles = () => {
  return async (dispatch, getState) => {
    const {
      groupId
    } = getState().auth.user;
    if (!groupId) {
      return;
    }
    const res = await NavBarService.getUserGroupRole(groupId);
    if (res.status === 200) {
      dispatch({
        type: LOAD_USER_ROLE,
        payload: res.data
      });
    }
  };
};
const goBackHomePage = () => {
  return async (dispatch, getState) => {
    var _getState, _getState$auth;
    const {
      authToken
    } = ((_getState = getState()) === null || _getState === void 0 ? void 0 : (_getState$auth = _getState.auth) === null || _getState$auth === void 0 ? void 0 : _getState$auth.guest) || {};
    if (authToken) {
      history.push('/home');
    } else {
      history.push('/app/home');
    }
  };
};

const LOGIN_ACTION = 'LOGIN_ACTION';
const LOGIN_FAIL_ACTION = 'LOGIN_FAIL_ACTION';
const LOGOUT_ACTION = 'LOGOUT_ACTION';
const SAVE_REGISTER_TOKEN = 'SAVE_REGISTER_TOKEN';
const SAVE_RESET_PASSWORD_TOKEN = 'SAVE_RESET_PASSWORD_TOKEN';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CHANGE_SESSION_EXPIRE_TIME = 'CHANGE_SESSION_EXPIRE_TIME';
const CHANGE_VERIFY_ACCOUNT_STATUS = 'CHANGE_VERIFY_ACCOUNT_STATUS';
const CHANGE_IS_GUEST = 'CHANGE_IS_GUEST';
const GOTO_GUEST_APP = 'GOTO_GUEST_APP';
const GOTO_AGENCY_APP = 'GOTO_AGENCY_APP';
const UPDATE_USER_SOCIAL = 'UPDATE_USER_SOCIAL';
const UPDATE_USER_FACEBOOK_AUTH = 'UPDATE_USER_FACEBOOK_AUTH';
const UPDATE_USER_GOOGLE_AUTH = 'UPDATE_USER_GOOGLE_AUTH';
const UPDATE_USER_AVATAR = 'UPDATE_USER_AVATAR';
const checkLoginStatus = (authToken, redirectUrl) => {
  return async (dispatch, getState) => {
    try {
      let response = await AuthService.checkLoginByToken();
      const {
        appId
      } = getState().customizer;
      const {
        username
      } = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user;
      if (response.status === API_R_200 && username) {
        response = await AuthService.getUserInfo(username, authToken);
        const payload = appId === AppId.ELITE_APP ? {
          guest: {
            authToken,
            user: response.data || {}
          }
        } : {
          authToken,
          user: response.data || {}
        };
        dispatch(loadNavigation());
        dispatch({
          type: LOGIN_ACTION,
          payload
        });
      } else {
        dispatch({
          type: LOGOUT_ACTION
        });
        history.push('/login');
      }
    } catch (error) {
      dispatch({
        type: LOGOUT_ACTION
      });
      history.push('/login');
    }
  };
};
const loginAction = user => {
  return async (dispatch, getState) => {
    user.rememberMe = user.isRemeberMe;
    let response = await AuthService.login(user);
    const {
      isGuest
    } = getState().auth;
    if (response.status === API_R_200) {
      const authToken = response.data.id_token;
      response = await AuthService.getUserInfo(user.username, authToken);
      if (user.isRemeberMe) {
        localStorage.setItem(REMEMBER_ME_TOKEN, JSON.stringify({
          username: user.username,
          name: response.data.fullName
        }));
      }
      const {
        userSettings,
        groupId
      } = response.data;
      if (userSettings) {
        localStorage.setItem('language', userSettings.language.toLowerCase());
      }
      if (isGuest) {
        dispatch({
          type: LOGIN_ACTION,
          payload: {
            guest: {
              authToken,
              loginMethod: LOGIN_METHODS.PASSWORD,
              type: 'PASSWORD',
              user: response.data || {}
            }
          }
        });
      } else {
        if (groupId === USER_ROLE.KHCN) {
          dispatch(showConfirmAlert({
            title: /*#__PURE__*/React.createElement(FormattedMessage, {
              id: "login.registerPartner"
            }),
            isShow: true,
            content: /*#__PURE__*/React.createElement(FormattedMessage, {
              id: "login.needRegisterPartner"
            }),
            onConfirm: () => {
              history.push('/register');
            }
          }));
          return;
        }
        dispatch(loadNavigation());
        dispatch({
          type: LOGIN_ACTION,
          payload: {
            authToken,
            type: 'PASSWORD',
            user: response.data || []
          }
        });
      }
      redirectMainApp(isGuest);
    } else {
      dispatch({
        type: LOGOUT_ACTION
      });
    }
  };
};
const socialLogin = (data, loginMethod, isGuest, isRemeberMe, openAddInfoPopup, openRequiredConnectSocialNetworkPopup) => {
  return async dispatch => {
    let res;
    if (!isGuest) {
      res = await AuthService.partnerSocialLogin(data);
      if (res.status === API_R_200) {
        debugger;
        const isConnectSocialNetwork = res.data.isConnectSocialNetwork;
        if (!isConnectSocialNetwork) {
          openRequiredConnectSocialNetworkPopup();
          return;
        }
        const authToken = res.data.idToken;
        res = await AuthService.getUserInfo(res.data.username, authToken);
        if (isRemeberMe) {
          localStorage.setItem(REMEMBER_ME_TOKEN, JSON.stringify({
            username: res.data.username,
            name: res.data.fullName
          }));
        }
        const {
          userSettings
        } = res.data;
        if (userSettings) {
          localStorage.setItem('language', userSettings.language.toLowerCase());
        }
        dispatch(loadNavigation());
        dispatch({
          type: LOGIN_ACTION,
          payload: {
            authToken,
            type: 'PASSWORD',
            user: res.data || []
          }
        });
        history.push('/app/home');
      } else {
        dispatch({
          type: LOGOUT_ACTION
        });
      }
    } else {
      res = await AuthService.guestSocialLogin(data);
      if (!res || !res.data) {
        return;
      }
      if (res.data.data && !res.data.idToken) {
        openAddInfoPopup(res.data.data);
        return;
      }
      const authToken = res.data.idToken;
      res = await AuthService.getUserInfo(res.data.username, authToken);
      dispatch({
        type: LOGIN_ACTION,
        payload: {
          guest: {
            authToken,
            loginMethod,
            type: 'PASSWORD',
            user: res.data || {}
          }
        }
      });
      dispatch(goBackHomePage());
    }
  };
};
const connectWithSocialNetwork = (data, userId) => {
  return async dispatch => {
    const res = await AuthService.connectWithSocialNetwork(data, userId);
    if (res && res.status === 200) {
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "connectWithSocial.success"
      }));
      if (data.provider === "FACEBOOK") {
        dispatch(updateUserFacebookAuth(res.data));
      } else {
        dispatch(updateUserGoogleAuth(res.data));
      }
    }
  };
};
const updateUserFacebookAuth = data => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER_FACEBOOK_AUTH,
      payload: data
    });
  };
};
const updateUserGoogleAuth = data => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER_GOOGLE_AUTH,
      payload: data
    });
  };
};
const changeIsGuest = isGuest => {
  return dispatch => {
    dispatch({
      type: CHANGE_IS_GUEST,
      payload: isGuest
    });
  };
};
const goToGuestApp = () => {
  return dispatch => {
    dispatch({
      type: GOTO_GUEST_APP
    });
    redirectMainApp(true);
  };
};
const goToAgencyApp = () => {
  return dispatch => {
    dispatch({
      type: GOTO_AGENCY_APP
    });
    redirectMainApp(false);
  };
};
const createPassword = password => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.createPassword(password, getState().auth.register.token);
      if (response.status === 200 && response.data) {
        history.push('/complete-information');
      }
    } catch (error) {}
  };
};
const register = (values, isGuest) => {
  return async () => {
    try {
      const res = await AuthService.register(trimObjectValues(values));
      if (res.status === 200 && res.data) {
        toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "register.registerSuccess"
        }));
        history.push('/login');
      }
    } catch (error) {}
  };
};
const compeleteInfo = user => {
  return async (dispatch, getState) => {
    try {
      user.registerToken = getState().auth.register.token;
      const response = await AuthService.compeleteInfo(user);
      if (response.status === 200 && response.data) {
        toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "completeInformation.success"
        }));
        history.push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const saveRegisterToken = registerToken => {
  return async dispatch => {
    const response = await AuthService.getUserByRegisterToken(registerToken);
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
  };
};
const saveResetPasswordToken = token => {
  return dispatch => {
    dispatch({
      type: SAVE_RESET_PASSWORD_TOKEN,
      payload: token
    });
  };
};
const forgotPassword = ({
  username,
  email
}) => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.forgotPassword(username, email);
      if (response.status === 200 && response.data) {
        toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "forgotPassword.successfull"
        }));
        dispatch({
          type: SAVE_RESET_PASSWORD_TOKEN,
          payload: ''
        });
        history.push('/login');
      }
    } catch (error) {}
  };
};
const resetPassword = password => {
  return async (dispatch, getState) => {
    try {
      const response = await AuthService.resetPassword(password, getState().auth.resetPasswordToken);
      if (response.status === 200 && response.data) {
        toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "createPassword.resetSuccessFul"
        }));
        dispatch({
          type: SAVE_RESET_PASSWORD_TOKEN,
          payload: ''
        });
        history.push('/login');
      }
    } catch (error) {}
  };
};
const logoutAction = () => {
  return async (dispatch, getState) => {
    const {
      id
    } = getState().auth.user;
    await AuthService.logout(id);
    dispatch({
      type: LOGOUT_ACTION
    });
    history.push('/login');
  };
};
const updateUserInfo = (user, avatarImage) => {
  return async dispatch => {
    if (avatarImage) {
      const url = await AuthService.updateAvatar(user, avatarImage);
      user.userSettings.avatar = url || user.userSettings.avatar;
    }
    const res = await AuthService.updateUserInfo(user);
    if (res.status === 200) {
      dispatch({
        type: UPDATE_USER_INFO,
        payload: res.data
      });
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.updateInfo.success"
      }));
      dispatch(goBackHomePage());
    }
  };
};
const changePassword = ({
  oldPassword,
  newPassword
}) => {
  return async dispatch => {
    const res = await AuthService.changePassword({
      oldPassword,
      newPassword
    });
    if (res.status === 200) {
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "changePassword.success"
      }));
      dispatch(goBackHomePage());
    }
  };
};
const changeLanguageSetting = (lang, callBack) => {
  return async (dispatch, getState) => {
    const {
      appId
    } = getState().customizer;
    const {
      userSettings = {}
    } = appId === AppId.ELITE_APP ? getState().auth.guest.user : getState().auth.user;
    const value = {
      ...userSettings,
      language: lang.toUpperCase()
    };
    const res = await AuthService.changeUserSetting(value);
    if (res.status === 200) {
      callBack();
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "generalInfo.changeLanguage.success"
      }));
      dispatch(goBackHomePage());
    }
  };
};
const changeActionExpireTime = () => {
  return dispatch => {
    dispatch({
      type: CHANGE_SESSION_EXPIRE_TIME
    });
  };
};
const verifyAccount = token => {
  return async dispatch => {
    const res = await AuthService.verifyAccount(token);
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
          token,
          status: 'FAIL'
        }
      });
    }
  };
};
const verifyPhoneNumber = values => {
  return async dispatch => {
    const res = await AuthService.verifyPhoneNumber(values);
    if (res.status === 200) {
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "verifyAccount.otp.registerSuccess"
      }));
      history.push('/login');
    }
  };
};
const getUserSocial = userId => {
  return async dispatch => {
    const res = await AuthService.getUserSocial(userId);
    if (res.status === 200) {
      debugger;
      const data = res.data;
      if (data.length > 0) {
        const userAuthGoogle = data.find(item => item.provider === 'GOOGLE');
        if (userAuthGoogle) {
          dispatch({
            type: UPDATE_USER_GOOGLE_AUTH,
            payload: userAuthGoogle
          });
        }
        const userAuthFacebook = data.find(item => item.provider === 'FACEBOOK');
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
  };
};
const redirectMainApp = isGuest => {
  if (isGuest) {
    history.push('/');
  } else {
    history.push('/app/home');
  }
};

const themeConfig = {
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

const customizerReducer = (state = {
  ...themeConfig
}, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme
      };
    case 'SET_APP_ID':
      return {
        ...state,
        appId: action.appId
      };
    case 'COLLAPSE_SIDEBAR':
      return {
        ...state,
        sidebarCollapsed: action.value
      };
    case 'CHANGE_NAVBAR_COLOR':
      return {
        ...state,
        navbarColor: action.color
      };
    case 'CHANGE_NAVBAR_TYPE':
      return {
        ...state,
        navbarType: action.style
      };
    case 'CHANGE_FOOTER_TYPE':
      return {
        ...state,
        footerType: action.style
      };
    case 'CHANGE_MENU_COLOR':
      return {
        ...state,
        menuTheme: action.style
      };
    case 'HIDE_SCROLL_TO_TOP':
      return {
        ...state,
        hideScrollToTop: action.value
      };
    default:
      return state;
  }
};

const authInitialState = {
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
const authReducers = (state = {
  ...authInitialState
}, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      {
        return {
          ...state,
          ...action.payload,
          loginStatus: LOGIN_STATUS.SUCCESS
        };
      }
    case LOGOUT_ACTION:
      {
        return {
          ...authInitialState
        };
      }
    case LOGIN_FAIL_ACTION:
      {
        return {
          ...state,
          loginStatus: LOGIN_STATUS.FAIL
        };
      }
    case SAVE_REGISTER_TOKEN:
      {
        return {
          ...state,
          register: action.payload
        };
      }
    case SAVE_RESET_PASSWORD_TOKEN:
      {
        return {
          ...state,
          resetPasswordToken: action.payload
        };
      }
    case UPDATE_USER_INFO:
      {
        if (!state.guest.user) {
          return {
            ...state,
            user: action.payload
          };
        } else {
          return {
            ...state,
            guest: {
              ...state.guest,
              user: action.payload
            }
          };
        }
      }
    case CHANGE_SESSION_EXPIRE_TIME:
      {
        return {
          ...state,
          sessionExpireTime: moment().add(SESSION_TIMEOUT, 'minutes').format(DATE_TIME_FORMAT)
        };
      }
    case CHANGE_IS_GUEST:
      {
        return {
          ...state,
          isGuest: action.payload
        };
      }
    case CHANGE_VERIFY_ACCOUNT_STATUS:
      {
        return {
          ...state,
          resetPasswordToken: action.payload.token,
          verifyAccount: {
            ...state.verifyAccount,
            ...action.payload
          }
        };
      }
    case GOTO_AGENCY_APP:
      {
        return {
          ...state,
          guest: {},
          user: state.guest.user,
          authToken: state.guest.authToken
        };
      }
    case GOTO_GUEST_APP:
      {
        return {
          ...state,
          guest: {
            user: state.user,
            authToken: state.authToken
          },
          user: '',
          authToken: ''
        };
      }
    case UPDATE_USER_SOCIAL:
      {
        return {
          ...state,
          userSocial: action.payload
        };
      }
    case UPDATE_USER_FACEBOOK_AUTH:
      {
        return {
          ...state,
          userFacebookAuth: action.payload
        };
      }
    case UPDATE_USER_GOOGLE_AUTH:
      {
        return {
          ...state,
          userGoogleAuth: action.payload
        };
      }
    case UPDATE_USER_AVATAR:
      {
        const userSettings = state.user.userSettings;
        userSettings.avatar = action.payload;
        return {
          ...state,
          user: {
            ...state.user,
            userSettings
          }
        };
      }
    default:
      return state;
  }
};

const initialState = {
  navConfigs: [],
  roles: [],
  userRoles: []
};
const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NATIVGATION:
      return {
        ...state,
        navConfigs: action.payload.navConfigs,
        roles: action.payload.roles
      };
    case LOAD_USER_ROLE:
      return {
        ...state,
        userRoles: action.payload
      };
    default:
      return state;
  }
};

const DEFAULT_CONFIRM_ALERT = {
  title: '',
  isShow: false,
  content: '',
  onConfirm: () => {},
  onCancel: () => {}
};
const initialState$1 = {
  loading: new Set(),
  isLoading: false,
  confirmAlert: {
    ...DEFAULT_CONFIRM_ALERT
  }
};
const uiReducer = (state = initialState$1, action) => {
  let loadingSet = new Set(state.loading.values());
  switch (action.type) {
    case SHOW_LOADING_BAR:
      loadingSet.add(action.payload);
      return {
        ...state,
        isLoading: !!loadingSet.size,
        loading: loadingSet
      };
    case HIDE_LOADING_BAR:
      if (action.payload === 'ALL') {
        loadingSet = new Set();
      } else {
        loadingSet.delete(action.payload);
      }
      return {
        ...state,
        isLoading: !!loadingSet.size,
        loading: loadingSet
      };
    case SHOW_CONFIRM_ALERT:
      return {
        ...state,
        confirmAlert: {
          isShow: true,
          ...state.confirmAlert,
          ...action.payload
        }
      };
    case HIDE_CONFIRM_ALERT:
      return {
        ...state,
        confirmAlert: {
          ...DEFAULT_CONFIRM_ALERT
        }
      };
    default:
      return state;
  }
};

class NotificationService {}
NotificationService.getMyNotifications = () => {
  return HttpClient.get(API_GET_NOTIFICATION_FROM_ESPUBLIC, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};
NotificationService.checkNewNotification = () => {
  return HttpClient.get(API_CHECK_NEW_NOTIFICATIONS, {
    params: {
      uuid: generateUUID()
    },
    isBackgroundRequest: true
  });
};
NotificationService.updateNotification = notification => {
  return HttpClient.put(API_UPDATE_NOTIFICATION, notification, {
    isBackgroundRequest: true
  });
};
NotificationService.updateAllNotificationStatus = notifications => {
  return HttpClient.put(API_UPDATE_ALL_NOTIFICATION_STATUS, notifications, {
    params: {
      isBackgroundRequest: true
    }
  });
};

const LOAD_MY_NOTIFICATIONS = 'LOAD_MY_NOTIFICATIONS';
const RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS';
const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
const UPDATE_ALL_NOTIFICATIONS = 'UPDATE_ALL_NOTIFICATIONS';
const getMyNotifications = () => {
  return async dispatch => {
    const res = await NotificationService.getMyNotifications();
    if (!res || res.status !== 200) {
      return;
    }
    dispatch({
      type: LOAD_MY_NOTIFICATIONS,
      payload: res.data
    });
  };
};
const checkReceiveNewNotification = () => {
  return async () => {
    const res = await NotificationService.checkNewNotification();
    if (!res || res.status !== 200) {
      return;
    }
    return res.data;
  };
};
const updateNotification = notification => {
  return async dispatch => {
    const res = await NotificationService.updateNotification(notification);
    if (!res || res.status !== 200) return;
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: notification
    });
  };
};
const updateAllNotifications = (newNotificationsRequest, status) => {
  return async dispatch => {
    const res = await NotificationService.updateAllNotificationStatus(newNotificationsRequest);
    if (!res || res.status !== 200) return;
    dispatch({
      type: UPDATE_ALL_NOTIFICATIONS,
      payload: status
    });
  };
};

const initialState$2 = {
  notifications: [],
  newNotifications: []
};
const notificationReducer = (state = {
  ...initialState$2
}, action) => {
  const notifications = [...state.notifications];
  let newNotifications;
  switch (action.type) {
    case LOAD_MY_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };
    case RECEIVE_NEW_NOTIFICATIONS:
      return {
        ...state,
        newNotifications: action.payload
      };
    case UPDATE_NOTIFICATION:
      newNotifications = notifications.map(item => {
        if (item.id === action.payload.id) {
          item.deleted = action.payload.deleted;
          item.read = action.payload.read;
        }
        return item;
      });
      return {
        ...state,
        notifications: newNotifications
      };
    case UPDATE_ALL_NOTIFICATIONS:
      if (action.payload === 'DELETE') {
        newNotifications = notifications.map(item => {
          item.deleted = true;
          item.read = true;
          return item;
        });
      } else {
        newNotifications = notifications.map(item => {
          item.deleted = false;
          item.read = action.payload;
          return item;
        });
      }
      return {
        ...state,
        notifications: newNotifications
      };
    default:
      return state;
  }
};

const rootReducer = appReducer => combineReducers({
  customizer: customizerReducer,
  ui: uiReducer,
  auth: persistReducer({
    storage,
    key: 'root',
    blacklist: ['loginStatus']
  }, authReducers),
  navbar: navbarReducer,
  notifications: notificationReducer,
  app: appReducer
});

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.onSuggestionItemClick = (item, e) => {
      if (this.props.onSuggestionClick) {
        this.props.onSuggestionClick(item, e);
      }
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: e.currentTarget.innerText
      });
    };
    this.onSuggestionItemHover = index => {
      this.setState({
        activeSuggestion: index
      });
    };
    this.onChange = e => {
      const userInput = e.currentTarget.value;
      this.setState({
        activeSuggestion: 0,
        showSuggestions: true,
        userInput
      });
      if (e.target.value < 1) {
        this.setState({
          showSuggestions: false
        });
      }
    };
    this.onInputClick = e => {
      e.stopPropagation();
    };
    this.onKeyDown = e => {
      const {
        activeSuggestion,
        showSuggestions,
        userInput
      } = this.state;
      const filterKey = this.props.filterKey;
      let suggestionList = ReactDOM.findDOMNode(this.suggestionList);
      if (e.keyCode === 38 && activeSuggestion !== 0) {
        this.setState({
          activeSuggestion: activeSuggestion - 1
        });
        if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion <= this.filteredData.length / 2) {
          suggestionList.scrollTop = 0;
        }
      } else if (e.keyCode === 40 && activeSuggestion < this.filteredData.length - 1) {
        this.setState({
          activeSuggestion: activeSuggestion + 1
        });
        if (e.target.value.length > -1 && suggestionList !== null && activeSuggestion >= this.filteredData.length / 2) {
          suggestionList.scrollTop = suggestionList.scrollHeight;
        }
      } else if (e.keyCode === 27) {
        this.setState({
          showSuggestions: false,
          userInput: ''
        });
      } else if (e.keyCode === 13 && showSuggestions) {
        this.onSuggestionItemClick(this.filteredData[activeSuggestion], e);
        this.setState({
          userInput: this.filteredData[activeSuggestion][filterKey],
          showSuggestions: false
        });
      } else {
        return;
      }
      if (this.props.onKeyDown !== undefined && this.props.onKeyDown !== null && this.props.onKeyDown) {
        this.props.onKeyDown(e, userInput);
      }
    };
    this.renderGroupedSuggestion = arr => {
      const {
        filterKey,
        customRender
      } = this.props;
      const {
        onSuggestionItemClick,
        onSuggestionItemHover,
        state: {
          activeSuggestion,
          userInput
        }
      } = this;
      let renderSuggestion = (item, i) => {
        if (!customRender) {
          return /*#__PURE__*/React.createElement("li", {
            className: classnames('suggestion-item', {
              active: this.filteredData.indexOf(item) === activeSuggestion
            }),
            key: item[filterKey],
            onClick: e => onSuggestionItemClick(item, e),
            onMouseEnter: () => {
              this.onSuggestionItemHover(this.filteredData.indexOf(item));
            }
          }, item[filterKey]);
        } else if (customRender) {
          return customRender(item, i, this.filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
        } else {
          return null;
        }
      };
      return arr.map((item, i) => {
        return renderSuggestion(item, i);
      });
    };
    this.renderUngroupedSuggestions = () => {
      const {
        filterKey,
        suggestions,
        customRender,
        suggestionLimit
      } = this.props;
      const {
        onSuggestionItemClick,
        onSuggestionItemHover,
        state: {
          activeSuggestion,
          userInput
        }
      } = this;
      this.filteredData = [];
      let sortSingleData = suggestions.filter(i => {
        let startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
          includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());
        if (startCondition) {
          return startCondition;
        } else if (!startCondition && includeCondition) {
          return includeCondition;
        } else {
          return null;
        }
      }).slice(0, suggestionLimit);
      this.filteredData.push(...sortSingleData);
      return sortSingleData.length ? sortSingleData.map((suggestion, index) => {
        if (!customRender) {
          return /*#__PURE__*/React.createElement("li", {
            className: classnames('suggestion-item', {
              active: this.filteredData.indexOf(suggestion) === activeSuggestion
            }),
            key: suggestion[filterKey],
            onClick: e => onSuggestionItemClick(suggestion, e),
            onMouseEnter: () => this.onSuggestionItemHover(this.filteredData.indexOf(suggestion))
          }, suggestion[filterKey]);
        } else if (customRender) {
          return customRender(suggestion, index, this.filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover, userInput);
        } else {
          return null;
        }
      }) : /*#__PURE__*/React.createElement("li", {
        className: "suggestion-item no-result"
      }, /*#__PURE__*/React.createElement(AlertTriangle, {
        size: 15
      }), ' ', /*#__PURE__*/React.createElement("span", {
        className: "align-middle ml-50"
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: 'common.noResults'
      })));
    };
    this.renderSuggestions = () => {
      const {
        filterKey,
        grouped,
        filterHeaderKey,
        suggestions
      } = this.props;
      const {
        renderUngroupedSuggestions,
        state: {
          userInput
        }
      } = this;
      if (grouped === undefined || grouped === null || !grouped) {
        return renderUngroupedSuggestions();
      } else {
        this.filteredData = [];
        return suggestions.map(suggestion => {
          let sortData = suggestion.data.filter(i => {
            let startCondition = i[filterKey].toLowerCase().startsWith(userInput.toLowerCase()),
              includeCondition = i[filterKey].toLowerCase().includes(userInput.toLowerCase());
            if (startCondition) {
              return startCondition;
            } else if (!startCondition && includeCondition) {
              return includeCondition;
            } else {
              return null;
            }
          }).slice(0, suggestion.searchLimit);
          this.filteredData.push(...sortData);
          return /*#__PURE__*/React.createElement(React.Fragment, {
            key: suggestion[filterHeaderKey]
          }, /*#__PURE__*/React.createElement("li", {
            className: "suggestion-item suggestion-title text-primary text-bold-600"
          }, suggestion[filterHeaderKey]), sortData.length ? this.renderGroupedSuggestion(sortData) : /*#__PURE__*/React.createElement("li", {
            className: "suggestion-item no-result"
          }, /*#__PURE__*/React.createElement(AlertTriangle, {
            size: 15
          }), ' ', /*#__PURE__*/React.createElement("span", {
            className: "align-middle ml-50"
          }, "No Result")));
        });
      }
    };
    this.clearInput = val => {
      if (this.props.clearInput && !val) {
        this.setState({
          userInput: ''
        });
      }
    };
    this.handleExtenalClick = e => {
      let {
        container
      } = this.refs;
      const {
        target
      } = e;
      if (target !== container && !container.contains(target)) {
        this.setState({
          showSuggestions: false
        });
        if (this.props.externalClick) this.props.externalClick(e);
      }
    };
    this.state = {
      activeSuggestion: 0,
      showSuggestions: false,
      userInput: '',
      focused: false,
      openUp: false
    };
    this.filteredData = [];
    document.body.addEventListener('click', this.handleExtenalClick);
  }
  componentDidUpdate(prevProps, prevState) {
    let textInput = ReactDOM.findDOMNode(this.input);
    let {
      autoFocus,
      onSuggestionsShown,
      clearInput
    } = this.props;
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
  }
  componentDidMount() {
    if (this.props.defaultSuggestions && this.state.focused) {
      this.setState({
        showSuggestions: true
      });
    }
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleExtenalClick);
  }
  render() {
    const {
      onChange,
      onKeyDown,
      state: {
        showSuggestions,
        userInput,
        openUp
      }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions) {
      suggestionsListComponent = /*#__PURE__*/React.createElement(PerfectScrollbar, {
        className: classnames('suggestions-list', {
          'open-up': openUp
        }),
        ref: el => this.suggestionList = el,
        component: "ul",
        options: {
          wheelPropagation: false
        }
      }, this.renderSuggestions());
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "vx-autocomplete-container",
      ref: "container"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "form-label-group position-relative"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: e => {
        onChange(e);
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      },
      onKeyDown: e => onKeyDown(e),
      value: userInput,
      className: `vx-autocomplete-search ${this.props.className ? this.props.className : ''}`,
      placeholder: this.props.placeholder,
      onClick: this.onInputClick,
      ref: el => {
        return this.input = el;
      },
      onFocus: e => {
        this.setState({
          focused: true
        });
      },
      autoFocus: this.props.autoFocus,
      onBlur: e => {
        if (this.props.onBlur) this.props.onBlur(e);
        this.setState({
          focused: false
        });
      }
    }), /*#__PURE__*/React.createElement(Label, null, this.props.placeholder), suggestionsListComponent));
  }
}
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

const UserDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleNavigation = (e, path) => {
    e.preventDefault();
    history.push(path);
  };
  const onClickGoToGuestApp = e => {
    e.preventDefault();
    dispatch(goToGuestApp());
  };
  const onClickLogout = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "navbar.logout"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "navbar.logout.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(logoutAction());
      }
    }));
  };
  return /*#__PURE__*/React.createElement(DropdownMenu, {
    right: true
  }, /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/account-info')
  }, /*#__PURE__*/React.createElement(User, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.accountInformation"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/change-password')
  }, /*#__PURE__*/React.createElement(Lock, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.changePassword"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/share-with-friends')
  }, /*#__PURE__*/React.createElement(Link, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.shareWithFriends"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    divider: true
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => onClickGoToGuestApp(e)
  }, /*#__PURE__*/React.createElement(Users, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.goToGuestApp"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    divider: true
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/connect-with-social')
  }, /*#__PURE__*/React.createElement(Aperture, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.connectSocial"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    target: '_blank',
    href: TERMS_PDF
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.termAndCondition"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    target: '_blank',
    href: POLICY_PDF
  }, /*#__PURE__*/React.createElement(Shield, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.privacyPolicy"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/language')
  }, /*#__PURE__*/React.createElement(Globe, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.language"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/help-center')
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.helpCenter"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    href: "#",
    onClick: e => handleNavigation(e, '/app/contact')
  }, /*#__PURE__*/React.createElement(MessageSquare, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.contact"
  }))), /*#__PURE__*/React.createElement(DropdownItem, {
    divider: true
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    onClick: onClickLogout
  }, /*#__PURE__*/React.createElement(Power, {
    size: 14,
    className: "mr-50"
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "navbar.logout"
  }))));
};

let _ = t => t,
  _t,
  _t2,
  _t3;
const MediaCustom = styled.div(_t || (_t = _`
  display: flex;
  justify-content: space-between;

  .media {
    .notification-icon {
      border-radius: 50%;
      background-color: rgb(237 237 237);

      img {
        width: 50px;
      }
    }

    .media-body {
      width: 150px;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .media-unread {
    color: black;
    font-weight: bold;
  }
`));
const CustomImage = styled.img(_t2 || (_t2 = _`
  width: 20px;
  height: 20px;
`));
const CustomDropdown = styled.div(_t3 || (_t3 = _`

  .dropdown-item {
    width: 100% !important;
  }

  .dropleft {
    .dropdown-menu::before {
      display: none;
    }
  }

`));
const Notifications = ({
  notifications,
  openModal,
  openDeleteAllModal,
  onClickUpdateAllNotifications
}) => {
  const dispatch = useDispatch();
  const onClickOpenNotification = async notification => {
    openModal(notification);
    dispatch(updateNotification(createNotificationRequest(notification, true)));
  };
  const onClickUpdateNotification = (notification, status) => {
    dispatch(updateNotification(createNotificationRequest(notification, status)));
  };
  const createNotificationRequest = (notification, status) => {
    const newNotification = {};
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
  const getNotificationType = item => {
    if (item['notificationType'] === 'SYSTEM') {
      return /*#__PURE__*/React.createElement("img", {
        src: "https://sit2.inon.vn/resources/images/system-notification.png",
        alt: "System notification"
      });
    } else if (item['notificationType'] === 'USER') {
      return /*#__PURE__*/React.createElement("img", {
        src: "https://sit2.inon.vn/resources/images/user-notification.png",
        alt: "User notification"
      });
    } else return /*#__PURE__*/React.createElement("img", {
      src: "https://sit2.inon.vn/resources/images/promotion-notification.png",
      alt: "Promotion notification"
    });
  };
  const getNumberNotifications = notifications => {
    const notificationsValid = notifications.filter(item => item.deleted === false);
    return notificationsValid.length;
  };
  const getNotificationsValid = notifications => {
    return notifications.filter(item => item.deleted === false).sort((a, b) => new Date(b.sendDate) - new Date(a.sendDate));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "dropdown-menu-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-header mt-0 text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "notification-title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.notification"
  })), /*#__PURE__*/React.createElement("span", null, "(", getNumberNotifications(notifications), ")")), /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer",
    onClick: () => onClickUpdateAllNotifications(true)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.readAll"
  }))), /*#__PURE__*/React.createElement(PerfectScrollbar, {
    className: "media-list overflow-hidden position-relative",
    options: {
      wheelPropagation: false
    }
  }, getNotificationsValid(notifications).length > 0 ? getNotificationsValid(notifications).map(item => /*#__PURE__*/React.createElement(MediaCustom, {
    key: item.id
  }, /*#__PURE__*/React.createElement(Media, {
    className: item.read === true ? 'media-read' : 'media-unread'
  }, /*#__PURE__*/React.createElement(Media, {
    left: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "notification-icon"
  }, getNotificationType(item))), /*#__PURE__*/React.createElement(Media, {
    onClick: () => onClickOpenNotification(item),
    body: true
  }, /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: item.title
    }
  }), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: item.shortContent
    }
  }), /*#__PURE__*/React.createElement("small", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement("time", {
    dateTime: item.sendDate
  }, moment().diff(moment(item.sendDate), 'days') >= 1 ? moment(item.sendDate).format("DD/MM/YYYY") : moment(item.sendDate).fromNow()))), /*#__PURE__*/React.createElement(Media, {
    right: true,
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement(CustomDropdown, null, /*#__PURE__*/React.createElement(UncontrolledButtonDropdown, {
    direction: "left"
  }, /*#__PURE__*/React.createElement(DropdownToggle, {
    tag: "span"
  }, /*#__PURE__*/React.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/React.createElement(CustomImage, {
    src: "https://sit2.inon.vn/resources/images/ellipsis-v-solid.png",
    alt: ""
  }))), /*#__PURE__*/React.createElement(DropdownMenu, null, item.read ? /*#__PURE__*/React.createElement(DropdownItem, {
    onClick: () => onClickUpdateNotification(item, false)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "navbar.notifications.markAsUnRead"
  })) : /*#__PURE__*/React.createElement(DropdownItem, {
    onClick: () => onClickUpdateNotification(item, true)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "navbar.notifications.markAsRead"
  })), /*#__PURE__*/React.createElement(DropdownItem, {
    onClick: () => onClickUpdateNotification(item, 'DELETE')
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "navbar.notifications.delete"
  }))))))))) : /*#__PURE__*/React.createElement(Media, {
    className: "justify-content-center font-weight-bold"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "navbar.notifications.noNewNotifications"
  }))), getNotificationsValid(notifications).length > 0 && /*#__PURE__*/React.createElement("li", {
    className: "dropdown-menu-footer",
    onClick: () => openDeleteAllModal()
  }, /*#__PURE__*/React.createElement(DropdownItem, {
    tag: "a",
    className: "p-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "align-middle font-weight-bold"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.deleteAll"
  })))));
};

const Bells = () => {
  const dispatch = useDispatch();
  const {
    notifications
  } = useSelector(state => state.notifications);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [numberNewNotification, setNumberNewNotification] = useState(0);
  const [notification, setNotification] = useState(null);
  const [centeredModal, setCenteredModal] = useState(false);
  useEffect(() => {
    dispatch(getMyNotifications());
    const intervalId = setInterval(() => {
      dispatch(getMyNotifications());
    }, 30000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const newNotifications = notifications.filter(item => item.read === false && item.deleted === false);
    setNumberNewNotification(newNotifications.length);
  }, [notifications]);
  useEffect(() => {
    const notifications = dispatch(checkReceiveNewNotification());
    checkNewNotifications(notifications);
    const intervalId = setInterval(() => {
      const notifications = dispatch(checkReceiveNewNotification());
      checkNewNotifications(notifications);
    }, 30000);
    return () => clearInterval(intervalId);
  }, []);
  const toggleDropdown = () => {
    if (!notificationModal) {
      setDropdownOpen(!dropdownOpen);
    }
  };
  const openModal = notification => {
    setNotificationModal(true);
    setNotification(notification);
  };
  const openDeleteAllModal = () => {
    setCenteredModal(!centeredModal);
  };
  const checkNewNotifications = newNotifications => {
    if (newNotifications.length > 0) {
      toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "navbar.notifications.newNotificationNotice"
      }));
    }
  };
  const onClickUpdateAllNotifications = status => {
    let newNotificationsRequest;
    if (status === 'DELETE') {
      newNotificationsRequest = notifications.map(item => {
        const notification = {};
        notification.id = item.id;
        notification.deleted = true;
        notification.read = true;
        notification.notificationTemplateHisId = item.notificationTemplateHisId;
        notification.templateId = item.templateId;
        return notification;
      });
    } else {
      newNotificationsRequest = notifications.map(item => {
        const notification = {};
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonDropdown, {
    isOpen: dropdownOpen,
    toggle: toggleDropdown,
    tag: "li",
    className: "dropdown-notification nav-item"
  }, /*#__PURE__*/React.createElement(DropdownToggle, {
    tag: "a",
    className: "nav-link nav-link-label"
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "text-primary",
    size: 22
  }), /*#__PURE__*/React.createElement(Badge, {
    pill: true,
    color: "primary",
    className: "badge-up"
  }, numberNewNotification)), /*#__PURE__*/React.createElement(DropdownMenu, {
    tag: "ul",
    right: true,
    className: "dropdown-menu-media"
  }, /*#__PURE__*/React.createElement(Notifications, {
    notifications: notifications,
    openModal: openModal,
    openDeleteAllModal: openDeleteAllModal,
    onClickUpdateAllNotifications: onClickUpdateAllNotifications
  }))), notification && /*#__PURE__*/React.createElement(Modal, {
    className: "modal-lg modal-dialog-centered custom-modal-notification",
    isOpen: notificationModal
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    toggle: () => setNotificationModal(!notificationModal)
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-weight-bold",
    dangerouslySetInnerHTML: {
      __html: notification.title
    }
  })), /*#__PURE__*/React.createElement(ModalBody, {
    className: "overflow-auto"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: notification.content
    }
  }))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: centeredModal,
    toggle: () => setCenteredModal(!centeredModal),
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.confirmDeleteAll"
  })), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    onClick: () => {
      onClickUpdateAllNotifications('DELETE');
      setCenteredModal(!centeredModal);
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.ok"
  })), ' ', /*#__PURE__*/React.createElement(Button, {
    onClick: () => setCenteredModal(!centeredModal)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.cancel"
  })))));
};

const NavbarUser = props => {
  let {
    userSettings,
    userDetails,
    ...user
  } = useSelector(state => state.auth.user);
  let {
    appId
  } = useSelector(state => state.customizer);
  let {
    roles = []
  } = useSelector(state => state.navbar);
  const [navbarSearch, setNavbarSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const intl = useIntl();
  userSettings = userSettings || {};
  useEffect(() => {
    let roleData = [];
    if (Array.isArray(roles)) {
      roleData = [...roles];
    }
    const newSuggestions = roleData.map(item => {
      item.name = intl.formatMessage({
        id: `menu.${item.keyLang}`,
        defaultMessage: item.description
      });
      item.isExternalApp = false;
      item.navLinkExternal = getExternalAppUrl(item.appId, item.menuPath);
      return item;
    });
    setSuggestions(newSuggestions);
  }, [roles]);
  const handleNavbarSearch = () => {
    setNavbarSearch(prevState => !prevState);
  };
  const handleNavigation = (e, path) => {
    e.preventDefault();
    history.push(path);
  };
  const onSuggestionItemClick = item => {
    history.push(item.navLinkExternal);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "nav navbar-nav navbar-nav-user float-right"
  }, /*#__PURE__*/React.createElement(NavItem, {
    className: "nav-search"
  }, /*#__PURE__*/React.createElement(NavLink, {
    className: "nav-link-search pt-2",
    onClick: e => handleNavigation(e, '/app/bonus-point')
  }, /*#__PURE__*/React.createElement(DollarSign, {
    size: 21,
    color: "#338955"
  }))), /*#__PURE__*/React.createElement(NavItem, {
    className: "nav-search",
    onClick: handleNavbarSearch
  }, /*#__PURE__*/React.createElement(NavLink, {
    className: "nav-link-search pt-2"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 21,
    "data-tour": "search"
  })), /*#__PURE__*/React.createElement("div", {
    className: classnames('search-input', {
      open: navbarSearch,
      'd-none': navbarSearch === false
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-input-icon"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 17,
    className: "primary"
  })), /*#__PURE__*/React.createElement(Autocomplete, {
    className: "form-control",
    suggestions: suggestions,
    filterKey: "name",
    onSuggestionClick: onSuggestionItemClick,
    autoFocus: true,
    clearInput: navbarSearch,
    externalClick: () => {
      setNavbarSearch(false);
    },
    onKeyDown: e => {
      if (e.keyCode === 27 || e.keyCode === 13) {
        setNavbarSearch(false);
        props.handleAppOverlay('');
      }
    },
    customRender: (item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) => {
      const IconTag = Icon[item.icon ? item.icon : 'X'];
      return /*#__PURE__*/React.createElement("li", {
        className: classnames('suggestion-item', {
          active: filteredData.indexOf(item) === activeSuggestion
        }),
        key: i,
        onClick: e => onSuggestionItemClick(item, e),
        onMouseEnter: () => onSuggestionItemHover(filteredData.indexOf(item))
      }, /*#__PURE__*/React.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/React.createElement(IconTag, {
        size: 17
      }), /*#__PURE__*/React.createElement("div", {
        className: "ml-2"
      }, item.name)));
    },
    onSuggestionsShown: userInput => {
      if (navbarSearch) {
        props.handleAppOverlay(userInput);
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "search-input-close"
  }, /*#__PURE__*/React.createElement(X, {
    size: 24,
    onClick: e => {
      e.stopPropagation();
      setNavbarSearch(false);
      props.handleAppOverlay('');
    }
  })))), /*#__PURE__*/React.createElement(Bells, null), /*#__PURE__*/React.createElement(UncontrolledDropdown, {
    tag: "li",
    className: "dropdown-user nav-item"
  }, /*#__PURE__*/React.createElement(DropdownToggle, {
    tag: "a",
    className: "nav-link dropdown-user-link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-nav d-sm-flex d-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-name text-bold-600 mb-0"
  }, user.fullName)), /*#__PURE__*/React.createElement("span", {
    "data-tour": "user"
  }, /*#__PURE__*/React.createElement("img", {
    src: userSettings.avatar || '',
    className: "round",
    height: "40",
    width: "40",
    alt: "avatar"
  }))), /*#__PURE__*/React.createElement(UserDropdown, null))));
};

const ThemeNavbar = props => {
  const colorsArr = ['primary', 'danger', 'success', 'info', 'warning', 'dark'];
  const navbarTypes = ['floating', 'static', 'sticky', 'hidden'];
  const history = useHistory();
  const onClickRedirectToPage = item => {
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
      case "bonus":
        history.replace('/app/bonus-point');
        break;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "content-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "header-navbar-shadow"
  }), /*#__PURE__*/React.createElement(Navbar$1, {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-container content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-collapse d-flex justify-content-between align-items-center",
    id: "navbar-mobile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookmark-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-auto float-left bookmark-wrapper d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav d-xl-none"
  }, /*#__PURE__*/React.createElement(NavItem, {
    className: "mobile-menu mr-auto"
  }, /*#__PURE__*/React.createElement(NavLink, {
    className: "nav-menu-main menu-toggle hidden-xs is-active",
    onClick: props.sidebarVisibility
  }, /*#__PURE__*/React.createElement(Menu, {
    className: "ficon"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "nav navbar-nav d-none d-xl-flex bookmark-icons"
  }, NAV_ICONS.map((item, index) => /*#__PURE__*/React.createElement(NavItem, {
    key: index
  }, /*#__PURE__*/React.createElement("img", {
    onClick: () => onClickRedirectToPage(item),
    style: {
      width: '58px',
      height: '58px'
    },
    className: "img-fluid cursor-pointer",
    src: IMAGE[`NAV_ICON_${index + 1}`],
    alt: ""
  })))))), /*#__PURE__*/React.createElement(NavbarUser, {
    handleAppOverlay: props.handleAppOverlay,
    onClickRedirectToPage: onClickRedirectToPage
  }))))));
};
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: !!state.auth.name,
    roles: state.navbar.roles,
    authToken: state.auth.authToken
  };
};
var Navbar = connect(mapStateToProps, {
  logoutAction
})(ThemeNavbar);

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

const Footer = props => {
  const [footerHide, setfooterHide] = useState(false);
  const [currentHeight] = useState(window.innerHeight);
  const {
    width
  } = useWindowDimensions();
  const history = useHistory();
  const dispatch = useDispatch();
  const goToPage = (e, navLink) => {
    history.push(navLink);
  };
  const onClickBackHome = e => {
    e.preventDefault();
    dispatch(goBackHomePage());
  };
  React.useEffect(() => {
    const footerHideCallback = () => {
      if (window.innerHeight !== currentHeight) {
        setfooterHide(true);
        return;
      }
      setfooterHide(false);
    };
    window.addEventListener('resize', footerHideCallback);
    return () => {
      window.removeEventListener("resize", footerHideCallback);
    };
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    className: `w-100 justify-content-end ${footerHide ? 'd-none' : 'd-flex'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames('footer footer-light', {
      'd-none': width < MAX_MOBILE_WIDTH
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "float-md-left d-block d-md-inline-block mt-25"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "footer.copyRight",
    values: {
      year: new Date().getFullYear()
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "footer.companySlogan"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "float-md-right d-none d-md-block"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mr-1",
    href: IOS_APP_LINK,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE.DOWNLOAD_APP_IOS,
    alt: "DOWNLOAD ON APP STORE"
  })), /*#__PURE__*/React.createElement("a", {
    href: ANDROID_APP_LINK,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE.DOWNLOAD_APP_ANDROID,
    alt: "DOWNLOAD ON APP I"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: classnames('footer footer-light footer-mobile text-center', {
      'd-none': width >= MAX_MOBILE_WIDTH
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(Home, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.home"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => goToPage(e, '/insurance/contracts')
  }, /*#__PURE__*/React.createElement(List, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.contract"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "position-relative w-25"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => goToPage(e, '/insurance/buy-insurance')
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE.BUY_INSURANCE,
    className: "buy-insurance",
    alt: ""
  }), /*#__PURE__*/React.createElement(PlusCircle, {
    style: {
      visibility: 'hidden'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.buyInsurance"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(Gift, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.promotion"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-25"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => history.push('/app/contact')
  }, /*#__PURE__*/React.createElement(MessageSquare, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.contact"
  }))))), props.hideScrollToTop === false ? /*#__PURE__*/React.createElement(ScrollToTop, {
    showUnder: 160
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    className: "btn-icon scroll-top d-none d-md-block"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    size: 15
  }))) : null);
};

const changeTheme = theme => {
  return dispatch => dispatch({
    type: "CHANGE_THEME",
    theme
  });
};
const setAppId = appId => {
  return dispatch => dispatch({
    type: "SET_APP_ID",
    appId
  });
};
const collapseSidebar = value => {
  return dispatch => dispatch({
    type: "COLLAPSE_SIDEBAR",
    value
  });
};
const changeNavbarColor = color => {
  return dispatch => dispatch({
    type: "CHANGE_NAVBAR_COLOR",
    color
  });
};
const changeNavbarType = style => {
  return dispatch => dispatch({
    type: "CHANGE_NAVBAR_TYPE",
    style
  });
};
const changeFooterType = style => {
  return dispatch => dispatch({
    type: "CHANGE_FOOTER_TYPE",
    style
  });
};
const changeMenuColor = style => {
  return dispatch => dispatch({
    type: "CHANGE_MENU_COLOR",
    style
  });
};
const hideScrollToTop = value => {
  return dispatch => dispatch({
    type: "HIDE_SCROLL_TO_TOP",
    value
  });
};

const SidebarHeader = props => {
  const {
    toggleSidebarMenu,
    activeTheme,
    collapsed,
    toggle,
    sidebarVisibility,
    menuShadow
  } = props;
  const dispatch = useDispatch();
  const onClickHome = () => {
    dispatch(goBackHomePage());
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-header"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav navbar-nav flex-row"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item my-auto mr-auto cursor-pointer",
    onClick: onClickHome
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid logo-img",
    src: IMAGE.LOGO_NO_TEXT,
    alt: "logo"
  }), /*#__PURE__*/React.createElement("img", {
    className: "img-fluid logo-text",
    src: IMAGE.LOGO_TEXT,
    alt: "logo"
  })), /*#__PURE__*/React.createElement("li", {
    className: "nav-item nav-toggle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-link modern-nav-toggle"
  }, collapsed === false ? /*#__PURE__*/React.createElement(Disc, {
    onClick: () => {
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
  }) : /*#__PURE__*/React.createElement(Circle, {
    onClick: () => {
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
  }), /*#__PURE__*/React.createElement(X, {
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
  })))), /*#__PURE__*/React.createElement("div", {
    className: classnames('shadow-bottom', {
      'd-none': menuShadow === false
    })
  }));
};

class SideMenuGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeItem: this.props.activePath
    };
    this.handleActiveItem = url => {
      this.setState({
        activeItem: url
      });
    };
    this.flag = true;
    this.parentArray = [];
    this.childObj = {};
  }
  componentDidUpdate(prevProps, prevState) {
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
  }
  renderChild(item, activeGroup, handleGroupClick, handleActiveItem, parent) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "menu-content"
    }, item.children ? item.children.map(child => {
      const CustomAnchorTag = child.isExternalApp ? `a` : Link$1;
      if (!this.parentArray.includes(item.id) && this.flag) {
        this.parentArray.push(item.id);
      }
      if (child.navlink && child.collapsed) {
        this.props.collapsedMenuPaths(child.navLink);
      }
      if (this.props.activeItemState === child.navLink) {
        this.childObj = child;
        this.props.parentArr.push(this.parentArray);
        this.flag = false;
      }
      if (child.permissions && child.permissions.includes(this.props.currentUser) || child.permissions === undefined) {
        return /*#__PURE__*/React.createElement("li", {
          key: child.id,
          className: classnames({
            hover: this.props.hoverIndex === child.id,
            'has-sub': child.type === 'collapse',
            open: child.type === 'collapse' && activeGroup.includes(child.id),
            'sidebar-group-active': this.props.currentActiveGroup.includes(child.id),
            active: this.props.activeItemState === child.navLink && child.type === 'item' || item.parentOf && item.parentOf.includes(this.props.activeItemState),
            disabled: child.disabled
          }),
          onClick: e => {
            e.stopPropagation();
            handleGroupClick(child.id, item.id, child.type);
            if (child.navLink && child.navLink !== undefined) {
              handleActiveItem(child.navLink);
            }
            if (this.props.deviceWidth <= 1200 && child.type === 'item') {
              this.props.toggleMenu();
            }
          }
        }, /*#__PURE__*/React.createElement(CustomAnchorTag, {
          className: classnames({
            'd-flex justify-content-between': child.type === 'collapse'
          }),
          to: child.navLink && child.type === 'item' ? child.navLink : '',
          href: this.props.getItemLink(child),
          onMouseEnter: () => {
            this.props.handleSidebarMouseEnter(child.id);
          },
          onMouseLeave: () => {
            this.props.handleSidebarMouseEnter(child.id);
          },
          key: child.id,
          onClick: e => {
            return child.type === 'collapse' ? e.preventDefault() : '';
          },
          target: child.newTab ? '_blank' : undefined
        }, /*#__PURE__*/React.createElement("div", {
          className: "menu-text"
        }, child.icon, /*#__PURE__*/React.createElement("span", {
          className: "menu-item menu-title"
        }, /*#__PURE__*/React.createElement(FormattedMessage, {
          id: child.title
        }))), child.badge ? /*#__PURE__*/React.createElement(Badge, {
          color: child.badge,
          className: "float-right mr-2",
          pill: true
        }, child.badgeText) : '', child.type === 'collapse' ? /*#__PURE__*/React.createElement(ChevronRight, {
          className: "menu-toggle-icon",
          size: 13
        }) : ''), child.children ? this.renderChild(child, activeGroup, handleGroupClick, handleActiveItem, item.id) : '');
      } else if (child.navLink === this.props.activePath && !child.permissions.includes(this.props.currentUser)) {
        return this.props.redirectUnauthorized();
      } else {
        return null;
      }
    }) : null);
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderChild(this.props.group, this.props.activeGroup, this.props.handleGroupClick, this.props.handleActiveItem, null));
  }
}

class SideMenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      isHovered: false,
      activeGroups: [],
      currentActiveGroup: [],
      tempArr: []
    };
    this.handleGroupClick = (id, parent = null, type = '') => {
      let open_group = this.state.activeGroups;
      let active_group = this.state.currentActiveGroup;
      let temp_arr = this.state.tempArr;
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
          let temp = open_group.filter(function (obj) {
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
      this.setState({
        activeGroups: open_group,
        tempArr: temp_arr,
        currentActiveGroup: active_group
      });
    };
    this.initRender = parentArr => {
      this.setState({
        activeGroups: parentArr.slice(0),
        currentActiveGroup: parentArr.slice(0),
        flag: false
      });
    };
    this.getItemLink = item => {
      return item.isExternalApp ? getExternalAppUrl(item.appId, item.navLink) : '';
    };
    this.parentArr = [];
    this.collapsedPath = null;
  }
  componentDidMount() {
    this.initRender(this.parentArr[0] || []);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activePath !== this.props.activePath || prevProps.navConfigs !== this.props.navConfigs) {
      if (this.collapsedMenuPaths !== null) {
        this.props.collapsedMenuPaths(this.collapsedMenuPaths);
      }
      this.initRender(this.parentArr[0] ? this.parentArr[this.parentArr.length - 1] : []);
    }
  }
  render() {
    const menuItems = this.props.navConfigs.map(item => {
      const CustomAnchorTag = item.isExternalApp ? `a` : Link$1;
      if (item.type === 'groupHeader') {
        return /*#__PURE__*/React.createElement("li", {
          className: "navigation-header",
          key: `group-header-${item.groupTitle}`
        }, /*#__PURE__*/React.createElement("span", null, item.groupTitle));
      }
      let renderItem = /*#__PURE__*/React.createElement("li", {
        className: classnames('nav-item', {
          'has-sub': item.type === 'collapse',
          open: this.state.activeGroups.includes(item.id),
          'sidebar-group-active': this.state.currentActiveGroup.includes(item.id),
          hover: this.props.hoverIndex === item.id,
          active: this.props.activeItemState === item.navLink && item.type === 'item' || item.parentOf && item.parentOf.includes(this.props.activeItemState),
          disabled: item.disabled
        }),
        key: item.id,
        onClick: e => {
          e.stopPropagation();
          if (item.type === 'item') {
            this.props.handleActiveItem(item.navLink);
            this.handleGroupClick(item.id, null, item.type);
            if (this.props.deviceWidth <= 1200 && item.type === 'item') {
              this.props.toggleMenu();
            }
          } else {
            this.handleGroupClick(item.id, null, item.type);
          }
        }
      }, /*#__PURE__*/React.createElement(CustomAnchorTag, {
        to: item.filterBase ? item.filterBase : item.navLink && item.type === 'item' ? item.navLink : '',
        href: this.getItemLink(item),
        className: `d-flex ${item.badgeText ? 'justify-content-between' : 'justify-content-start'}`,
        onMouseEnter: () => {
          this.props.handleSidebarMouseEnter(item.id);
        },
        onMouseLeave: () => {
          this.props.handleSidebarMouseEnter(item.id);
        },
        key: item.id,
        onClick: e => {
          return item.type === 'collapse' ? e.preventDefault() : '';
        },
        target: item.newTab ? '_blank' : undefined
      }, /*#__PURE__*/React.createElement("div", {
        className: "menu-text"
      }, item.icon, /*#__PURE__*/React.createElement("span", {
        className: "menu-item menu-title"
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: item.title,
        defaultMessage: item.description
      }))), item.badge ? /*#__PURE__*/React.createElement("div", {
        className: "menu-badge"
      }, /*#__PURE__*/React.createElement(Badge, {
        color: item.badge,
        className: "mr-1",
        pill: true
      }, item.badgeText)) : '', item.type === 'collapse' ? /*#__PURE__*/React.createElement(ChevronRight, {
        className: "menu-toggle-icon",
        size: 13
      }) : ''), item.type === 'collapse' ? /*#__PURE__*/React.createElement(SideMenuGroup, {
        group: item,
        handleGroupClick: this.handleGroupClick,
        activeGroup: this.state.activeGroups,
        handleActiveItem: this.props.handleActiveItem,
        activeItemState: this.props.activeItemState,
        handleSidebarMouseEnter: this.props.handleSidebarMouseEnter,
        activePath: this.props.activePath,
        hoverIndex: this.props.hoverIndex,
        initRender: this.initRender,
        parentArr: this.parentArr,
        triggerActive: undefined,
        currentActiveGroup: this.state.currentActiveGroup,
        getItemLink: this.getItemLink,
        permission: this.props.permission,
        currentUser: this.props.currentUser,
        redirectUnauthorized: this.redirectUnauthorized,
        collapsedMenuPaths: this.props.collapsedMenuPaths,
        toggleMenu: this.props.toggleMenu,
        deviceWidth: this.props.deviceWidth
      }) : '');
      if (item.navLink && item.collapsed !== undefined && item.collapsed === true) {
        this.collapsedPath = item.navLink;
        this.props.collapsedMenuPaths(item.navLink);
      }
      if (item.type === 'collapse' || item.type === 'external-link' || item.type === 'item' && item.permissions && item.permissions.includes(this.props.currentUser.role) || item.permissions === undefined) {
        return renderItem;
      } else if (item.type === 'item' && item.navLink === this.props.activePath && !item.permissions.includes(this.props.currentUser.role)) {
        return this.redirectUnauthorized();
      }
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, menuItems);
  }
}

class Sidebar extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      width: window.innerWidth,
      activeIndex: null,
      hoveredMenuItem: null,
      activeItem: this.props.activePath,
      menuShadow: false,
      ScrollbarTag: PerfectScrollbar
    };
    this.mounted = false;
    this.updateWidth = () => {
      if (this.mounted) {
        this.setState(prevState => ({
          width: window.innerWidth
        }));
        this.checkDevice();
      }
    };
    this.checkDevice = () => {
      var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
      var mq = function (query) {
        return window.matchMedia(query).matches;
      };
      if ("ontouchstart" in window || window.DocumentTouch) {
        this.setState({
          ScrollbarTag: "div"
        });
      } else {
        this.setState({
          ScrollbarTag: PerfectScrollbar
        });
      }
      var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
      return mq(query);
    };
    this.changeActiveIndex = id => {
      if (id !== this.state.activeIndex) {
        this.setState({
          activeIndex: id
        });
      } else {
        this.setState({
          activeIndex: null
        });
      }
    };
    this.handleSidebarMouseEnter = id => {
      if (id !== this.state.hoveredMenuItem) {
        this.setState({
          hoveredMenuItem: id
        });
      } else {
        this.setState({
          hoveredMenuItem: null
        });
      }
    };
    this.handleActiveItem = url => {
      this.setState({
        activeItem: url
      });
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.activePath !== state.activeItem) {
      return {
        activeItem: props.activePath
      };
    }
    return null;
  }
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      if (window !== "undefined") {
        window.addEventListener("resize", this.updateWidth, false);
      }
      this.checkDevice();
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    let {
      toggleSidebarMenu,
      visibilityState,
      sidebarHover,
      toggle,
      color,
      sidebarVisibility,
      activeTheme,
      collapsed,
      activePath,
      sidebarState,
      currentLang,
      permission,
      currentUser,
      collapsedMenuPaths
    } = this.props;
    let {
      menuShadow,
      activeIndex,
      hoveredMenuItem,
      activeItem,
      ScrollbarTag
    } = this.state;
    let scrollShadow = (container, dir) => {
      if (container && dir === "up" && container.scrollTop >= 100) {
        this.setState({
          menuShadow: true
        });
      } else if (container && dir === "down" && container.scrollTop < 100) {
        this.setState({
          menuShadow: false
        });
      } else {
        return;
      }
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hammer, {
      onSwipe: e => {
        sidebarVisibility();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "menu-swipe-area d-xl-none d-block vh-100"
    })), /*#__PURE__*/React.createElement("div", {
      className: classnames(`main-menu menu-fixed menu-light menu-accordion menu-shadow theme-${activeTheme}`, {
        collapsed: sidebarState === true,
        "hide-sidebar": this.state.width < 1200 && visibilityState === false
      }),
      onMouseEnter: () => sidebarHover(false),
      onMouseLeave: () => sidebarHover(true)
    }, /*#__PURE__*/React.createElement(SidebarHeader, {
      toggleSidebarMenu: toggleSidebarMenu,
      toggle: toggle,
      sidebarBgColor: color,
      sidebarVisibility: sidebarVisibility,
      activeTheme: activeTheme,
      collapsed: collapsed,
      menuShadow: menuShadow,
      activePath: activePath
    }), /*#__PURE__*/React.createElement(ScrollbarTag, Object.assign({
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
      onScrollDown: container => scrollShadow(container, "down"),
      onScrollUp: container => scrollShadow(container, "up"),
      onYReachStart: () => menuShadow === true && this.setState({
        menuShadow: false
      })
    }), /*#__PURE__*/React.createElement(Hammer, {
      onSwipe: () => {
        sidebarVisibility();
      }
    }, /*#__PURE__*/React.createElement("ul", {
      className: "navigation navigation-main"
    }, /*#__PURE__*/React.createElement(SideMenuContent, {
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
  }
}
const mapStateToProps$1 = state => {
  return {
    currentUser: state.auth,
    appId: state.customizer.appId,
    navConfigs: state.navbar.navConfigs
  };
};
var Sidebar$1 = connect(mapStateToProps$1)(Sidebar);

class Layout extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      width: window.innerWidth,
      sidebarState: this.props.customizer.sidebarCollapsed,
      layout: this.props.customizer.theme,
      collapsedContent: this.props.customizer.sidebarCollapsed,
      sidebarHidden: false,
      currentLang: 'en',
      appOverlay: false,
      customizer: false,
      currRoute: ''
    };
    this.collapsedPaths = [];
    this.mounted = false;
    this.updateWidth = () => {
      if (this.mounted) {
        this.setState(prevState => ({
          width: window.innerWidth
        }));
      }
    };
    this.handleCustomizer = bool => {
      this.setState({
        customizer: bool
      });
    };
    this.handleCollapsedMenuPaths = item => {
      let collapsedPaths = this.collapsedPaths;
      if (!collapsedPaths.includes(item)) {
        collapsedPaths.push(item);
        this.collapsedPaths = collapsedPaths;
      }
    };
    this.toggleSidebarMenu = val => {
      this.setState({
        sidebarState: !this.state.sidebarState,
        collapsedContent: !this.state.collapsedContent
      });
    };
    this.sidebarMenuHover = val => {
      this.setState({
        sidebarState: val
      });
    };
    this.handleSidebarVisibility = () => {
      if (this.mounted) {
        if (window !== undefined) {
          window.addEventListener('resize', () => {
            if (this.state.sidebarHidden) {
              this.setState({
                sidebarHidden: !this.state.sidebarHidden
              });
            }
          });
        }
        this.setState({
          sidebarHidden: !this.state.sidebarHidden
        });
      }
    };
    this.handleCurrentLanguage = lang => {
      this.setState({
        currentLang: lang
      });
    };
    this.handleAppOverlay = value => {
      if (value.length > 0) {
        this.setState({
          appOverlay: true
        });
      } else if (value.length < 0 || value === '') {
        this.setState({
          appOverlay: false
        });
      }
    };
    this.handleAppOverlayClick = () => {
      this.setState({
        appOverlay: false
      });
    };
  }
  componentDidMount() {
    this.mounted = true;
    let {
      location: {
        pathname
      },
      customizer: {
        theme,
        direction
      }
    } = this.props;
    if (this.mounted) {
      if (window !== 'undefined') {
        window.addEventListener('resize', this.updateWidth, false);
      }
      if (this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true);
      }
      let layout = theme;
      let dir = direction;
      if (dir === 'rtl') document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');else document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      return layout === 'dark' ? document.body.classList.add('dark-layout') : layout === 'semi-dark' ? document.body.classList.add('semi-dark-layout') : null;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let {
      location: {
        pathname
      },
      customizer: {
        theme,
        sidebarCollapsed
      }
    } = this.props;
    let layout = theme;
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
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const appProps = this.props.customizer;
    const menuThemeArr = ['primary', 'success', 'danger', 'info', 'warning', 'dark'];
    const sidebarProps = {
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
    const navbarProps = {
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
    const footerProps = {
      appId: this.props.appId,
      footerType: appProps.footerType,
      hideScrollToTop: appProps.hideScrollToTop
    };
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(`wrapper vertical-layout theme-${appProps.menuTheme}`, {
        'menu-collapsed': this.state.collapsedContent === true && this.state.width >= 1200,
        'fixed-footer': appProps.footerType === 'sticky',
        'navbar-static': appProps.navbarType === 'static',
        'navbar-sticky': appProps.navbarType === 'sticky',
        'navbar-floating': appProps.navbarType === 'floating',
        'navbar-hidden': appProps.navbarType === 'hidden',
        'theme-primary': !menuThemeArr.includes(appProps.menuTheme)
      })
    }, /*#__PURE__*/React.createElement(Sidebar$1, sidebarProps), /*#__PURE__*/React.createElement("div", {
      className: classnames('app-content content', {
        'show-overlay': this.state.appOverlay === true
      }),
      onClick: this.handleAppOverlayClick
    }, /*#__PURE__*/React.createElement(Navbar, navbarProps), /*#__PURE__*/React.createElement("div", {
      className: "content-wrapper pb-4 pb-md-0"
    }, this.props.children)), /*#__PURE__*/React.createElement(Footer, footerProps), /*#__PURE__*/React.createElement("div", {
      className: "sidenav-overlay",
      onClick: this.handleSidebarVisibility
    }));
  }
}
const mapStateToProps$2 = state => {
  return {
    customizer: state.customizer
  };
};
var Layout$1 = connect(mapStateToProps$2, {
  changeTheme,
  collapseSidebar,
  changeNavbarColor,
  changeNavbarType,
  changeFooterType,
  changeMenuColor,
  hideScrollToTop
})(Layout);

const Context = React.createContext();
class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      locale: this.props.locale,
      messages: this.props.appMessage[this.props.locale]
    };
  }
  render() {
    const {
      children
    } = this.props;
    const {
      locale,
      messages
    } = this.state;
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: {
        state: this.state,
        switchLanguage: language => {
          localStorage.setItem('language', language);
          this.setState({
            locale: language,
            messages: this.props.appMessage[language]
          });
        }
      }
    }, /*#__PURE__*/React.createElement(IntlProvider, {
      key: locale,
      locale: locale,
      messages: messages,
      defaultLocale: "vi"
    }, children));
  }
}

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
	"common.error.400": "The system is updating, please contact InOn for instructions!",
	"common.error.500": "The system is updating, please contact InOn for instructions!",
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
	"common.error.400": "Hệ thống đang trong quá trình cập nhật, vui lòng liên hệ InOn để được hướng dẫn!",
	"common.error.500": "Hệ thống đang cập nhật, vui lòng liên hệ InOn để được hướng dẫn!",
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
	"menu.newContract": "Thêm mới hợp đồng",
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
	"setting.notificationDetail": "Chi tiết thông báo",
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

const BaseFormGroup = ({
  fieldName,
  errors,
  touched,
  messageId,
  type,
  className,
  maxLength,
  disabled,
  onChange,
  isShowErrorMessage: _isShowErrorMessage = true,
  isRequired: _isRequired = true
}) => {
  const onBlur = (e, form) => {
    form.handleBlur(e);
    let {
      value
    } = e.target;
    value = value.trim();
    form.setFieldValue(fieldName, value);
  };
  const handleChange = (e, form) => {
    form.handleChange(e);
    if (onChange) {
      onChange(e, form);
    }
  };
  return /*#__PURE__*/React.createElement(FormGroup, {
    className: `form-label-group position-relative ${className}`
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: messageId
  }, msg => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    name: fieldName
  }, ({
    field,
    form
  }) => /*#__PURE__*/React.createElement(Input, Object.assign({
    className: `form-control ${_isRequired && getPropObject(form.errors, fieldName) && getPropObject(form.touched, fieldName) && 'is-invalid'}`
  }, field, {
    type: type,
    disabled: disabled,
    maxLength: maxLength,
    value: field.value,
    placeholder: msg,
    onBlur: e => onBlur(e, form),
    onChange: e => handleChange(e, form)
  }))), _isRequired && _isShowErrorMessage && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, getPropObject(errors, fieldName)) : null, /*#__PURE__*/React.createElement(Label, null, msg))));
};

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
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
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
function debounce(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
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
    return undefined;
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
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
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
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
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
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return pad(date.getFullYear(), 4); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
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
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
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
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}

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

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
    self.onMouseOver = onMouseOver;
    self._createElement = createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
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
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
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
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                compareDates(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = getDefaultHours(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
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
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = parseSeconds(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
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
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
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
    function onYearInput(event) {
        var eventTarget = getEventTarget(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
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
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
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
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
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
    function timeIncrement(e) {
        var eventTarget = getEventTarget(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
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
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
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
            i % 7 === 6) {
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
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
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
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        clearNode(self.daysContainer);
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
        var defaults = getDefaultHours(self.config);
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
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
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
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
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
            var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
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
            self._handlers[i].remove();
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
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = getEventTarget(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
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
                    self.selectedDates.length === 1)
                    self.clear(false);
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
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
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
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
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
                self.close();
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
                case 27:
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
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
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
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
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
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
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
        });
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
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
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
                !self.config.enable &&
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
        tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
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
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
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
            if (!sheet.cssRules)
                continue;
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
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
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
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
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
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
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
        updatePositionElement();
    }
    function updatePositionElement() {
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
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
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
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                compareDates(selectedDate, date) === 0)
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
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
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
function _flatpickr(nodeList, config) {
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
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
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
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
              "Tháng mười một",
              "Tháng mười hai",
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

const DatePicker = props => {
  const intl = useIntl();
  return /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React.createElement(Flatpickr, {
    options: {
      disableMobile: true,
      allowInput: false,
      locale: intl.locale === 'vi' ? flatpickr.l10ns.vn : '',
      ...props.options
    },
    disabled: props.disabled,
    placeholder: props.placeholder,
    "data-enable-time": true,
    className: `form-control position-relative bg-white flatpickr-input ${props.className}`,
    value: props.value,
    onClose: () => props.onClose && props.onClose(),
    onChange: date => props.onChange && props.onChange(date)
  }), /*#__PURE__*/React.createElement(Label, null, props.placeholder), props.errors && props.touched && props.isShowErrorMessage && getPropObject(props.errors, props.fieldName) && getPropObject(props.touched, props.fieldName) ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, getPropObject(props.errors, props.fieldName)) : null);
};

const BaseFormDatePicker = ({
  fieldName,
  errors,
  touched,
  messageId,
  className,
  options,
  onChange,
  disabled,
  isShowErrorMessage,
  isRequired: _isRequired = true
}) => {
  const defaultOptions = {
    dateFormat: 'm/d/Y'
  };
  const intl = useIntl();
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Field, {
    name: fieldName
  }, ({
    field,
    form
  }) => /*#__PURE__*/React.createElement(DatePicker, {
    className: `form-control position-relative ${!disabled ? 'bg-white' : ''} ${_isRequired && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) && 'is-invalid'} ${className}`,
    placeholder: messageId ? intl.formatMessage({
      id: messageId
    }) : '',
    isShowErrorMessage: isShowErrorMessage,
    fieldName: fieldName,
    notRequired: !_isRequired,
    errors: errors,
    disabled: disabled,
    touched: touched,
    value: field.value,
    options: options || defaultOptions,
    onChange: date => {
      form.setFieldValue(fieldName, date[0]);
      if (onChange) {
        onChange(date, form);
      }
    }
  })));
};

const Select = props => {
  const [inputValue, setInputValue] = useState(props.value);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);
  const onChange = (e, actions) => {
    if (props.onChange) {
      props.onChange(e, actions);
    }
    if (props.isMulti) {
      setInputValue(e ? e.map(item => item.value).join() : '');
    } else {
      setInputValue(e ? e.value : '');
    }
    setIsFocused(false);
  };
  const onFocus = e => {
    if (props.onFocus) {
      props.onFocus(e);
    }
    setIsFocused(true);
  };
  const onBlur = e => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    setIsFocused(false);
  };
  const SelectComponent = useCallback(componentProps => {
    const newProps = {
      ...componentProps
    };
    if (props.isMulti) {
      let values = props.value || '';
      if (typeof props.value !== 'string') {
        values = '';
      }
      newProps.value = props.options.filter(item => values.split(',').includes(String(item.value)));
    }
    switch (props.type) {
      case 'creatable':
        return /*#__PURE__*/React.createElement(CreatableSelect, newProps);
      case 'async':
        return /*#__PURE__*/React.createElement(AsyncSelect, newProps);
      default:
        return /*#__PURE__*/React.createElement(ReactSelect, newProps);
    }
  }, [props.options, props.value]);
  return /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React.createElement(SelectComponent, Object.assign({}, props, {
    isDisabled: props.disabled,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    theme: theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#338955'
      }
    })
  })), props.required && props.isShowErrorMessage ? getPropObject(props.errors, props.fieldName) && getPropObject(props.touched, props.fieldName) ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, getPropObject(props.errors, props.fieldName)) : null : '', /*#__PURE__*/React.createElement("input", {
    className: "d-none",
    placeholder: props.placeholder,
    value: inputValue
  }), inputValue ? /*#__PURE__*/React.createElement(Label, {
    className: classnames({
      'text-primary': isFocused
    }, props.marginLabel)
  }, props.placeholder) : '');
};

const BaseFormGroupSelect = ({
  fieldName,
  errors,
  touched,
  messageId,
  options,
  defaultValue,
  isRequired: _isRequired = true,
  isAsync,
  disabled,
  onChange,
  loadOptions,
  type,
  isShowErrorMessage: _isShowErrorMessage = true,
  defaultOptions,
  marginLabel
}) => {
  const intl = useIntl();
  return /*#__PURE__*/React.createElement(Field, {
    name: fieldName
  }, ({
    field,
    form
  }) => /*#__PURE__*/React.createElement(Select, {
    placeholder: intl.formatMessage({
      id: messageId
    }),
    className: `${_isRequired && getPropObject(errors, fieldName) && getPropObject(touched, fieldName) && 'is-invalid'}`,
    type: type,
    isShowErrorMessage: _isShowErrorMessage,
    classNamePrefix: "Select",
    fieldName: fieldName,
    required: _isRequired,
    value: options.find(item => item.value === field.value),
    defaultValue: defaultValue,
    disabled: disabled,
    errors: errors,
    isAsync: isAsync,
    loadOptions: loadOptions,
    defaultOptions: defaultOptions,
    touched: touched,
    options: options,
    onChange: e => {
      form.setFieldValue(fieldName, e.value);
      if (onChange) {
        onChange(e, form);
      }
    },
    marginLabel: marginLabel
  }));
};

class DataColetionService {
  static async getCitiesByCountry(countryId, locale) {
    const res = await HttpClient.get(API_GET_CITIES_BY_COUNTRY, {
      params: {
        countryId
      },
      isBackgroundRequest: true
    });
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale);
    }
    return [];
  }
  static async getDistrictByCity(cityId, locale) {
    const res = await HttpClient.get(API_GET_DISTRICTS_BY_CITY, {
      params: {
        cityId
      },
      isBackgroundRequest: true
    });
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale);
    }
    return [];
  }
  static async getWardsByDistrict(districtId, locale) {
    const res = await HttpClient.get(API_GET_WARDS_BY_CITY, {
      params: {
        districtId
      },
      isBackgroundRequest: true
    });
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale);
    }
    return [];
  }
  static async getAllBanks(locale) {
    const res = await HttpClient.get(API_GET_BANKS, {
      isBackgroundRequest: true
    });
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale);
    }
    return [];
  }
}
const mapDataToSelectOptions = (data, lang) => {
  return data.map(item => ({
    value: item.id + '',
    id: item.id,
    label: item[lang === 'vi' ? 'vn' : 'en'] || item.vn
  }));
};

const useCityList = countryCode => {
  const [cities, setCities] = useState([]);
  const {
    locale
  } = useIntl();
  useEffect(() => {
    if (!countryCode) {
      return;
    }
    loadCitiesByCountry(countryCode);
  }, [countryCode]);
  const loadCitiesByCountry = async code => {
    const data = await DataColetionService.getCitiesByCountry(code, locale);
    setCities(data);
    return data;
  };
  return {
    cities,
    loadCitiesByCountry
  };
};
const useDistrictList = cityCode => {
  const [districts, setDistricts] = useState([]);
  const {
    locale
  } = useIntl();
  useEffect(() => {
    if (!cityCode) {
      return;
    }
    loadDitrictsByCity(cityCode);
  }, [cityCode]);
  const loadDitrictsByCity = async code => {
    const data = await DataColetionService.getDistrictByCity(code, locale);
    setDistricts(data);
    return data;
  };
  return {
    districts,
    loadDitrictsByCity
  };
};
const useWardList = districtCode => {
  const [wards, setWards] = useState([]);
  const {
    locale
  } = useIntl();
  useEffect(() => {
    if (!districtCode) {
      return;
    }
    loadWardsByDistrict(districtCode);
  }, [districtCode]);
  const loadWardsByDistrict = async code => {
    const data = await DataColetionService.getWardsByDistrict(code, locale);
    setWards(data);
    return data;
  };
  return {
    wards,
    loadWardsByDistrict
  };
};
const useBankList = () => {
  const [banks, setBanks] = useState([]);
  const {
    locale
  } = useIntl();
  useEffect(() => {
    loadBanks();
  }, []);
  const loadBanks = async () => {
    setBanks(await DataColetionService.getAllBanks(locale));
  };
  return {
    banks,
    loadBanks
  };
};

const validationSchema = object().shape({
  fullName: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.fullname.required"
  })).matches(NAME_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.fullname.invalid"
  })),
  email: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.email.required"
  })).email( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.email.invalid"
  }))
});
const UserAccountTab = () => {
  const {
    appId
  } = useSelector(state => state.customizer);
  let {
    userDetails = {},
    userSettings = {},
    ...user
  } = useSelector(state => appId !== AppId.ELITE_APP ? state.auth.user : state.auth.guest.user);
  const dispatch = useDispatch();
  const {
    cities
  } = useCityList(VN_COUNTRY_CODE);
  const {
    districts,
    loadDitrictsByCity
  } = useDistrictList(null);
  const {
    wards,
    loadWardsByDistrict
  } = useWardList(null);
  const {
    banks
  } = useBankList();
  const [avatar, setAvatar] = useState({
    url: userSettings.avatar,
    file: null
  });
  useEffect(() => {
    if (userDetails && userDetails.city) {
      loadDitrictsByCity(userDetails.city);
      loadWardsByDistrict(userDetails.district);
    }
  }, []);
  const onChangeAvatar = e => {
    const validTypeExtension = ['jpg', 'jpeg', 'bmp', 'gif', 'png', 'HEIF', 'HEVC', 'heic'];
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const fileType = file.type.split('/').pop().toLowerCase();
    if (validTypeExtension.indexOf(fileType) < 0) {
      toastError( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.updateInfo.imageTypeInvalid"
      }));
      return;
    }
    if (bytesToMb(file.size) >= MAX_FILE_SIZE) {
      toastError( /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.updateInfo.imageExceedSize",
        values: {
          size: MAX_FILE_SIZE
        }
      }));
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar({
        url: reader.result,
        file
      });
    };
  };
  const onSubmit = async values => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.accountInformation"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.updateInfo.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(updateUserInfo(trimObjectValues(values), avatar.file));
      }
    }));
  };
  const onClickBackHome = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(goBackHomePage());
      }
    }));
  };
  const onChangeCity = async (id, setFieldValue) => {
    loadDitrictsByCity(id);
    setFieldValue('userDetails.district', '');
  };
  const onChangeDistrict = async (id, setFieldValue) => {
    loadWardsByDistrict(id);
    setFieldValue('userDetails.ward', '');
  };
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "12"
  }, /*#__PURE__*/React.createElement(Media, {
    className: "mb-2"
  }, /*#__PURE__*/React.createElement(Media, {
    className: "mr-2 my-25"
  }, /*#__PURE__*/React.createElement(Media, {
    className: "users-avatar-shadow rounded",
    object: true,
    src: avatar.url,
    alt: "user profile image",
    height: "84",
    width: "84"
  })), /*#__PURE__*/React.createElement(Media, {
    className: "mt-2",
    body: true
  }, /*#__PURE__*/React.createElement(Media, {
    className: "font-medium-1 text-bold-600",
    style: {
      textTransform: 'uppercase'
    },
    tag: "p",
    heading: true
  }, user.fullName), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.accountCode"
  }), " : ", user.userCode), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    tag: "label",
    className: "mr-1 mt-2",
    color: "primary",
    outline: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "file",
    name: "file",
    id: "uploadImg",
    onChange: onChangeAvatar,
    hidden: true,
    accept: "image/*"
  }), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.change"
  })))))), /*#__PURE__*/React.createElement(Col, {
    sm: "12"
  }, /*#__PURE__*/React.createElement(Formik, {
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    initialValues: {
      ...user,
      dateOfBirth: user.dateOfBirth || moment().subtract(15, 'years').toISOString(),
      userDetails,
      userSettings
    }
  }, ({
    errors,
    touched,
    values,
    setFieldValue
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "6"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    disabled: true,
    messageId: "register.fullname",
    fieldName: "fullName",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "3"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.idType",
    fieldName: "icType",
    options: IC_TYPES_OPTIONS,
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "3"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.nbrPer",
    fieldName: "icNumber",
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "6"
  }, /*#__PURE__*/React.createElement(BaseFormDatePicker, {
    messageId: "completeInformation.dateOfBirth",
    fieldName: "dateOfBirth",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "6"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.gender",
    fieldName: "gender",
    disabled: true,
    options: GENDER_OPTIONS,
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "6"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    disabled: true,
    messageId: "register.phoneNumber",
    fieldName: "phoneNumber",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "12",
    md: "6"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "register.email",
    fieldName: "email",
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "12"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.address",
    fieldName: "userDetails.address",
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.province",
    fieldName: "userDetails.city",
    options: cities,
    onChange: ({
      id
    }) => onChangeCity(id, setFieldValue),
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.district",
    fieldName: "userDetails.district",
    options: districts,
    onChange: ({
      id
    }) => onChangeDistrict(id, setFieldValue),
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.ward",
    fieldName: "userDetails.ward",
    options: wards,
    errors: errors,
    touched: touched
  }))), values.userType === USER_TYPE.KD ? /*#__PURE__*/React.createElement(Row, {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.bank",
    fieldName: "userDetails.bankName",
    options: banks,
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.branch",
    fieldName: "userDetails.bankBranch",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.accountNbr",
    fieldName: "userDetails.bankAccount",
    errors: errors,
    touched: touched
  }))) : '', /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "d-flex justify-content-end  mt-2",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.home`
  })), /*#__PURE__*/React.createElement(Button.Ripple, {
    className: "ml-2",
    type: "submit",
    color: "primary"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.saveChanges`
  })))))), /*#__PURE__*/React.createElement(Row, null)));
};

const formSchema = object().shape({
  oldPassword: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "changePassword.oldPassword.required"
  })).matches(PASSWORD_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "changePassword.oldPassword.invalid"
  })),
  newPassword: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "changePassword.newPassword.required"
  })).matches(PASSWORD_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "changePassword.newPassword.invalid"
  })),
  passwordConfirmation: string().oneOf([ref('newPassword'), null], /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.passwordMustMatch"
  })).required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "changePassword.confirmPassword.required"
  }))
});
const ChangePassword = () => {
  const dispatch = useDispatch();
  const onClickSubmit = values => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.changePassword"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "changePassword.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(changePassword(values));
      }
    }));
  };
  const onClickBackHome = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(goBackHomePage());
      }
    }));
  };
  return /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: ''
    },
    onSubmit: onClickSubmit,
    validationSchema: formSchema
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    type: "password",
    messageId: "changePassword.oldPassword",
    fieldName: "oldPassword",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    type: "password",
    messageId: "changePassword.newPassword",
    fieldName: "newPassword",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    type: "password",
    messageId: "createPassword.enterThePassword",
    fieldName: "passwordConfirmation",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.1"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.2"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.3"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "d-flex justify-content-end  mt-2",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.home`
  })), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    className: "ml-2",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.saveChanges"
  }))))));
};

const ShareWithFriends = () => {
  const {
    user
  } = useSelector(state => state.customizer.appId === AppId.ELITE_APP ? state.auth.guest : state.auth);
  const [qrCodeInstance, setQRCodeInstance] = useState(null);
  const qrCode = useRef();
  const shareUrl = `${document.location.origin}/home?refId=${user.username}`;
  useEffect(() => {
    const options = {
      text: shareUrl,
      colorDark: '#106D5A',
      correctLevel: QRCode.CorrectLevel.H,
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC4zMTY3IDI0Ljk5MDFDMTguNTA1OCAyNC43OTkyIDE4LjcxODUgMjQuNjMyMSAxOC45MDc2IDI0LjQxNzNDMjEuMTA1NiAyMi4xOTc1IDIyLjY0MTggMTkuMzMzMyAyMy4xODU0IDE2LjExMTFDMjMuMzI3MiAxNS4yMjggMjMuNDIxNyAxNC4zMjEgMjMuNDIxNyAxMy40MTRDMjMuNDIxNyAxMy4wNzk4IDIzLjQyMTcgMTIuNzY5NSAyMy4zOTgxIDEyLjQ1OTNDMjMuMTYxOCA4LjU0NDg2IDIxLjQ4MzcgNS4wMTIzNSAxOC45MDc2IDIuNDEwN0MxOC43MTg1IDIuMjE5NzUgMTguNTI5NCAyLjAyODgxIDE4LjMxNjcgMS44Mzc4NkMxNy42NTQ5IDEuMjQxMTUgMTYuOTQ1OSAwLjY5MjE4MSAxNi4xODk2IDAuMjE0ODE1QzE1Ljc0MDUgLTAuMDcxNjA0OSAxNS4xNDk3IC0wLjA3MTYwNDkgMTQuNjc3IDAuMjE0ODE1QzEzLjkyMDcgMC42OTIxODEgMTMuMjExNyAxLjI0MTE1IDEyLjU0OTkgMS44Mzc4NkMxMi4zNjA4IDIuMDI4ODEgMTIuMTQ4MSAyLjE5NTg4IDExLjk1OSAyLjQxMDdDOS44MDgzIDQuNTgyNzIgOC4yNzIwNiA3LjM5OTE4IDcuNzA0ODMgMTAuNTQ5OEM3Ljk0MTE4IDEwLjQzMDUgOC4yMDExNiAxMC4zMTExIDguNDM3NSAxMC4xOTE4QzExLjc0NjMgOC42ODgwNyAxNy4zNDc3IDguMjM0NTcgMjAuMDY1NyAxMC45NTU2QzE4LjYwMDMgMTAuNDc4MiAxNy4wNDA0IDEwLjIzOTUgMTUuNDA5NyAxMC4yMzk1QzEzLjc3ODkgMTAuMjM5NSAxMi4yMTkgMTAuNTAyMSAxMC43NTM3IDEwLjk1NTZDOS41OTU1OSAxMS4zMzc0IDguNDg0NzcgMTEuODM4NyA3LjQ0NDg1IDEyLjQ1OTNDNi4zODEzIDEzLjEwMzcgNS4zODg2NiAxMy44OTE0IDQuNDkwNTUgMTQuNzk4NEMyLjMxNjE4IDE2Ljk5NDIgMC43Nzk5MzcgMTkuODgyMyAwLjIzNjM0NSAyMy4xMDQ1QzAuMDk0NTM3OCAyMy45ODc3IDAgMjQuODk0NiAwIDI1LjgwMTZDMCAyNS44NDk0IDAgMjUuODk3MSAwIDI1Ljk2ODdDMCAyNi40NyAwLjI4MzYxMyAyNi45MjM1IDAuNzMyNjY4IDI3LjE2MjFDMS41NTk4NyAyNy42MTU2IDIuNDM0MzUgMjcuOTczNyAzLjMzMjQ2IDI4LjI2MDFDNC43OTc3OSAyOC43Mzc0IDYuMzU3NjcgMjguOTc2MSA3Ljk4ODQ1IDI4Ljk3NjFDMTAuMDIxIDI4Ljk3NjEgMTEuOTU5IDI4LjU3MDQgMTMuNzU1MyAyNy44NTQzQzEzLjUxODkgMjcuNjg3MiAxMy4yODI2IDI3LjU0NCAxMy4wNDYyIDI3LjM3N0M5LjUwMTA1IDI0Ljg0NjkgNi42MTc2NSAyMC44ODQ4IDcuNjU3NTYgMTYuMTM1QzguMjI0NzkgMTkuMzU3MiA5Ljc2MTAzIDIyLjIyMTQgMTEuOTM1NCAyNC40NDEyQzEyLjEyNDUgMjQuNjMyMSAxMi4zMTM2IDI0LjgyMyAxMi41MjYzIDI1LjAxNEMxMy40MDA3IDI1LjgwMTYgMTQuMzY5NyAyNi41MTc3IDE1LjQwOTcgMjcuMDkwNUMxNy42MDc3IDI4LjMwNzggMjAuMTYwMiAyOS4wMjM5IDIyLjg1NDUgMjkuMDIzOUMyNC40ODUzIDI5LjAyMzkgMjYuMDQ1MiAyOC43NjEzIDI3LjUxMDUgMjguMzA3OEMyOC40MDg2IDI4LjAyMTQgMjkuMjgzMSAyNy42Mzk1IDMwLjExMDMgMjcuMjA5OUMzMC41NTkzIDI2Ljk3MTIgMzAuODQzIDI2LjUxNzcgMzAuODQzIDI1Ljk5MjZDMzAuODQzIDI1Ljk0NDkgMzAuODQzIDI1Ljg5NzEgMzAuODQzIDI1Ljg0OTRDMzAuODQzIDI0LjkxODUgMzAuNzcyMSAyNC4wMzU0IDMwLjYwNjYgMjMuMTUyM0MzMC4wMzk0IDE5LjkzIDI4LjUwMzIgMTcuMDY1OCAyNi4zMjg4IDE0Ljg0NjFDMjUuOTAzNCAxNC40MTY1IDI1LjQzMDcgMTMuOTg2OCAyNC45NTggMTMuNjA0OUMyNC45MTA3IDE4LjI4MzEgMjIuOTAxOCAyMy4xMDQ1IDE4LjMxNjcgMjQuOTkwMVpNMjAuMjc4NCAxNC4zNjg3QzIwLjA0MiAxNy40MjM5IDE4LjcxODUgMjAuMTkyNiAxNi43MDk2IDIyLjI0NTNDMTYuMzA3OCAyMi42NTEgMTUuODgyNCAyMy4wMzI5IDE1LjQzMzMgMjMuMzY3MUMxNC45ODQyIDIzLjAwOTEgMTQuNTU4OCAyMi42NTEgMTQuMTU3IDIyLjI0NTNDMTIuMTI0NSAyMC4xOTI2IDEwLjgwMDkgMTcuNDQ3NyAxMC41ODgyIDE0LjM2ODdDMTIuMDc3MiAxMy43MjQzIDEzLjczMTYgMTMuMzY2MyAxNS40NTY5IDEzLjM2NjNDMTcuMTU4NiAxMy4zNDI0IDE4Ljc4OTQgMTMuNzAwNCAyMC4yNzg0IDE0LjM2ODdaIiBmaWxsPSIjMTA2RDVBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzE2OSAyNC45ODk5QzE4LjUwNiAyNC43OTg5IDE4LjcxODcgMjQuNjMxOSAxOC45MDc4IDI0LjQ0MDlDMjEuMTA1OCAyMi4yMjEyIDIyLjY0MiAxOS4zNTcgMjMuMTg1NiAxNi4xMzQ3QzIzLjIwOTIgMTUuOTkxNSAyMy4yMzI5IDE1LjgyNDQgMjMuMjU2NSAxNS42ODEyQzIyLjgwNzQgMTMuNzQ3OSAyMS42NDkzIDEyLjA3NzEgMjAuMDY1OCAxMC45NTUzQzE4LjYwMDUgMTAuNDc3OSAxNy4wNDA2IDEwLjIzOTMgMTUuNDMzNSAxMC4yMzkzQzEzLjkyMDkgMTAuMjM5MyAxMi40NTU1IDEwLjQ1NDEgMTEuMDYxMSAxMC44ODM3QzkuMjY0ODkgMTIuMTAxIDguMDEyMjcgMTMuODkxMSA3LjY4MTM4IDE2LjEzNDdDNy43MDUwMiAxNi4wNjMxIDcuNjU3NzUgMTYuMjA2MyA3LjY4MTM4IDE2LjEzNDdDOC4yNDg2MSAxOS4zNTcgOS43ODQ4NSAyMi4yMjEyIDExLjk1OTIgMjQuNDQwOUMxMi4xMDEgMjQuNTg0MSAxMi4yNjY1IDI0Ljc1MTIgMTIuNDMxOSAyNC44OTQ0QzEzLjM3NzMgMjUuMzAwMiAxNC40MTcyIDI1LjUxNSAxNS41MDQ0IDI1LjUxNUMxNi40OTcgMjUuNTE1IDE3LjQ0MjQgMjUuMzI0IDE4LjMxNjkgMjQuOTg5OVpNMTQuMTMzNiAyMi4yMjEyQzEyLjEwMSAyMC4xNjg1IDEwLjc3NzUgMTcuNDIzNiAxMC41NjQ4IDE0LjM0NDZDMTIuMDUzOCAxMy43MDAyIDEzLjcwODIgMTMuMzQyMSAxNS40MzM1IDEzLjM0MjFDMTcuMTU4OCAxMy4zNDIxIDE4LjgxMzIgMTMuNzAwMiAyMC4zMDIyIDE0LjM0NDZDMjAuMDY1OCAxNy4zOTk4IDE4Ljc0MjMgMjAuMTY4NSAxNi43MzM0IDIyLjIyMTJDMTYuMzMxNiAyMi42MjY5IDE1LjkwNjIgMjMuMDA4OCAxNS40NTcxIDIzLjM0M0MxNC45NjA4IDIzLjAwODggMTQuNTM1NCAyMi42MjY5IDE0LjEzMzYgMjIuMjIxMloiIGZpbGw9IiMxMDZENUEiLz4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggb3BhY2l0eT0iMC42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjMxNjkgMjQuOTg5OUMxOC41MDYgMjQuNzk4OSAxOC43MTg3IDI0LjYzMTkgMTguOTA3OCAyNC40NDA5QzIxLjEwNTggMjIuMjIxMiAyMi42NDIgMTkuMzU3IDIzLjE4NTYgMTYuMTM0N0MyMy4yMDkyIDE1Ljk5MTUgMjMuMjMyOSAxNS44MjQ0IDIzLjI1NjUgMTUuNjgxMkMyMi44MDc0IDEzLjc0NzkgMjEuNjQ5MyAxMi4wNzcxIDIwLjA2NTggMTAuOTU1M0MxOC42MDA1IDEwLjQ3NzkgMTcuMDQwNiAxMC4yMzkzIDE1LjQzMzUgMTAuMjM5M0MxMy45MjA5IDEwLjIzOTMgMTIuNDU1NSAxMC40NTQxIDExLjA2MTEgMTAuODgzN0M5LjI2NDg5IDEyLjEwMSA4LjAxMjI3IDEzLjg5MTEgNy42ODEzOCAxNi4xMzQ3QzcuNzA1MDIgMTYuMDYzMSA3LjY1Nzc1IDE2LjIwNjMgNy42ODEzOCAxNi4xMzQ3QzguMjQ4NjEgMTkuMzU3IDkuNzg0ODUgMjIuMjIxMiAxMS45NTkyIDI0LjQ0MDlDMTIuMTAxIDI0LjU4NDEgMTIuMjY2NSAyNC43NTEyIDEyLjQzMTkgMjQuODk0NEMxMy4zNzczIDI1LjMwMDIgMTQuNDE3MiAyNS41MTUgMTUuNTA0NCAyNS41MTVDMTYuNDk3IDI1LjUxNSAxNy40NDI0IDI1LjMyNCAxOC4zMTY5IDI0Ljk4OTlaTTE0LjEzMzYgMjIuMjIxMkMxMi4xMDEgMjAuMTY4NSAxMC43Nzc1IDE3LjQyMzYgMTAuNTY0OCAxNC4zNDQ2QzEyLjA1MzggMTMuNzAwMiAxMy43MDgyIDEzLjM0MjEgMTUuNDMzNSAxMy4zNDIxQzE3LjE1ODggMTMuMzQyMSAxOC44MTMyIDEzLjcwMDIgMjAuMzAyMiAxNC4zNDQ2QzIwLjA2NTggMTcuMzk5OCAxOC43NDIzIDIwLjE2ODUgMTYuNzMzNCAyMi4yMjEyQzE2LjMzMTYgMjIuNjI2OSAxNS45MDYyIDIzLjAwODggMTUuNDU3MSAyMy4zNDNDMTQuOTYwOCAyMy4wMDg4IDE0LjUzNTQgMjIuNjI2OSAxNC4xMzM2IDIyLjIyMTJaIiBmaWxsPSIjMTA2RDVBIi8+CjwvZz4KPC9zdmc+Cg==',
      dotScale: 0.5
    };
    setQRCodeInstance(new QRCode(qrCode.current, options));
  }, []);
  const onClickCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toastSuccess( /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "setting.copySuccess"
    }));
  };
  const onClickDownloadQRCode = () => {
    const canvas = document.querySelector('#qrcode canvas');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'inon-qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const onChangeQRCode = e => {
    qrCodeInstance.makeCode(e.target.value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center my-4"
  }, /*#__PURE__*/React.createElement("div", {
    id: "qrcode",
    ref: qrCode
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-primary cursor-pointer",
    onClick: onClickDownloadQRCode
  }, /*#__PURE__*/React.createElement(Download, {
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center justify-content-center mt-3"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: shareUrl,
    onChange: onChangeQRCode,
    disabled: user.groupId !== USER_ROLE.ADMIN
  }), /*#__PURE__*/React.createElement("span", {
    className: "cursor-pointer ml-2 text-primary",
    onClick: onClickCopy
  }, /*#__PURE__*/React.createElement(Clipboard, null)))));
};

const AccountSettings = props => {
  const [activeTab, setActiveTab] = useState('account-info');
  const {
    appId
  } = useSelector(state => state.customizer);
  const history = useHistory();
  useEffect(() => setActiveTab(props.activeTab), [props.activeTab]);
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "12"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, {
    className: "text-uppercase"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: 'setting.personalSetting'
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(Nav, {
    tabs: true
  }, /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: classnames({
      active: activeTab === 'account-info'
    }),
    onClick: () => {
      if (appId !== 'APP_NO1') {
        history.push('/account-info');
      } else history.push('/app/account-info');
    }
  }, /*#__PURE__*/React.createElement(User, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.accountInformation"
  })))), /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: classnames({
      active: activeTab === 'change-password'
    }),
    onClick: () => {
      if (appId !== 'APP_NO1') {
        history.push('/change-password');
      } else history.push('/app/change-password');
    }
  }, /*#__PURE__*/React.createElement(Lock, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.changePassword"
  })))), /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: classnames({
      active: activeTab === 'share-with-friends'
    }),
    onClick: () => {
      if (appId !== 'APP_NO1') {
        history.push('/share-with-friends');
      } else history.push('/app/share-with-friends');
    }
  }, /*#__PURE__*/React.createElement(Link, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.shareWithFriends"
  }))))), /*#__PURE__*/React.createElement(TabContent, {
    activeTab: activeTab
  }, /*#__PURE__*/React.createElement(TabPane, {
    tabId: "account-info"
  }, /*#__PURE__*/React.createElement(UserAccountTab, null)), /*#__PURE__*/React.createElement(TabPane, {
    tabId: "change-password"
  }, /*#__PURE__*/React.createElement(Col, {
    md: "6",
    sm: "11",
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement(ChangePassword, null))), /*#__PURE__*/React.createElement(TabPane, {
    tabId: "share-with-friends"
  }, /*#__PURE__*/React.createElement(Col, {
    md: "6",
    sm: "11",
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement(ShareWithFriends, null))))))));
};

class Radio extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(`vx-radio-con ${this.props.className} vx-radio-${this.props.color}`)
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      defaultChecked: this.props.defaultChecked,
      value: this.props.value,
      disabled: this.props.disabled,
      name: this.props.name,
      onClick: this.props.onClick,
      onChange: this.props.onChange,
      ref: this.props.ref,
      checked: this.props.checked
    }), /*#__PURE__*/React.createElement("span", {
      className: classnames("vx-radio", {
        "vx-radio-sm": this.props.size === "sm",
        "vx-radio-lg": this.props.size === "lg"
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "vx-radio--border"
    }), /*#__PURE__*/React.createElement("span", {
      className: "vx-radio--circle"
    })), /*#__PURE__*/React.createElement("span", null, this.props.label));
  }
}

const LanguageTab = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [lang, setLang] = useState(localStorage.getItem('language'));
  const onClickBackHome = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(goBackHomePage());
      }
    }));
  };
  const onClickSaveChange = context => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.language"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "generalInfo.changeLanguage.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(changeLanguageSetting(lang, () => context.switchLanguage(lang)));
      }
    }));
  };
  return /*#__PURE__*/React.createElement(Context.Consumer, null, context => /*#__PURE__*/React.createElement(Row, {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement(Col, {
    className: "mx-auto col-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Radio, {
    label: intl.formatMessage({
      id: 'navbar.language.vi'
    }),
    color: "primary",
    onChange: () => setLang('vi'),
    defaultChecked: context.state.locale === 'vi',
    name: "lang"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(Radio, {
    label: intl.formatMessage({
      id: 'navbar.language.en'
    }),
    color: "primary",
    onChange: () => setLang('en'),
    defaultChecked: context.state.locale === 'en',
    name: "lang"
  }))), /*#__PURE__*/React.createElement(Col, {
    className: "d-flex justify-content-end mt-3",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.home`
  })), /*#__PURE__*/React.createElement(Button.Ripple, {
    className: "ml-2",
    onClick: () => onClickSaveChange(context),
    color: "primary"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.saveChanges`
  })))));
};

function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setMobile(mobile);
  }, []);
  return {
    isMobile
  };
}

const ContactTab = () => {
  const {
    isMobile
  } = useDeviceDetect();
  const dispatch = useDispatch();
  const onClickBackHome = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.home"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "common.backHome.confirmMessage"
      }),
      onConfirm: () => {
        dispatch(goBackHomePage());
      }
    }));
  };
  const onClickCall = () => {
    dispatch(showConfirmAlert({
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.call"
      }),
      isShow: true,
      content: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "setting.call.confirmMessage",
        values: {
          phoneNumber: CONTACT_PHONE
        }
      }),
      onConfirm: () => {
        window.open(`tel:0899300800`, '_blank');
      }
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement(Col, {
    lg: "4",
    md: "6",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, {
    className: "w-300px mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:lienhe@inon.com.vn",
    target: "_blank"
  }, "lienhe@inon.com.vn")), /*#__PURE__*/React.createElement("div", {
    className: "card-btns d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    className: "gradient-light-primary text-white"
  }, /*#__PURE__*/React.createElement("a", {
    className: "text-white",
    href: "mailto:lienhe@inon.com.vn",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `setting.sendEmail`
  }))))))), /*#__PURE__*/React.createElement(Col, {
    lg: "4",
    md: "6",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, {
    className: "w-300px mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React.createElement("h5", null, CONTACT_PHONE)), /*#__PURE__*/React.createElement("div", {
    className: "card-btns d-flex justify-content-center mt-2"
  }, isMobile ? /*#__PURE__*/React.createElement(Button.Ripple, {
    className: "gradient-light-primary text-white",
    onClick: onClickCall
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `setting.call`
  })) : ''))))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "d-flex justify-content-end flex-wrap mt-2",
    sm: "12"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickBackHome
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `common.home`
  })))));
};

const GeneralInfo = props => {
  const {
    appId
  } = useSelector(state => state.customizer);
  const [activeTab, setActiveTab] = useState('terms-and-condition');
  const history = useHistory();
  useEffect(() => setActiveTab(props.activeTab), [props.activeTab]);
  return /*#__PURE__*/React.createElement(Row, {
    className: "general-info"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: "12"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, {
    className: "text-uppercase"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: 'setting.generalInformation'
  }))), /*#__PURE__*/React.createElement(CardBody, {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(Nav, {
    tabs: true
  }, /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: classnames({
      active: activeTab === 'language'
    }),
    onClick: () => {
      if (appId === 'APP_NO1') {
        history.push('/app/language');
      } else history.push('/language');
    }
  }, /*#__PURE__*/React.createElement(Globe, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.language"
  })))), /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: classnames({
      active: activeTab === 'contact'
    }),
    onClick: () => {
      if (appId === 'APP_NO1') {
        history.push('/app/contact');
      } else history.push('/contact');
    }
  }, /*#__PURE__*/React.createElement(MessageSquare, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "align-middle ml-50"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "setting.contact"
  }))))), /*#__PURE__*/React.createElement(TabContent, {
    activeTab: activeTab
  }, /*#__PURE__*/React.createElement(TabPane, {
    tabId: "language"
  }, /*#__PURE__*/React.createElement(LanguageTab, null)), /*#__PURE__*/React.createElement(TabPane, {
    tabId: "contact"
  }, /*#__PURE__*/React.createElement(ContactTab, null)))))));
};

class CheckBox extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: `vx-checkbox-con ${this.props.className ? this.props.className : ''} vx-checkbox-${this.props.color}`
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      defaultChecked: this.props.defaultChecked,
      checked: this.props.checked,
      value: this.props.value,
      disabled: this.props.disabled,
      onClick: this.props.onClick ? this.props.onClick : null,
      onChange: this.props.onChange ? this.props.onChange : null
    }), /*#__PURE__*/React.createElement("span", {
      className: `vx-checkbox vx-checkbox-${this.props.size ? this.props.size : 'md'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "vx-checkbox--check"
    }, this.props.icon)), /*#__PURE__*/React.createElement("span", null, this.props.label));
  }
}

const SocialLogin = ({
  isLogin,
  isRemeberMe
}) => {
  const {
    isGuest
  } = useSelector(state => state.auth);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSocialNetworkModal, setIsOpenSocialNetworkModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [connectType, setConnectType] = useState();
  const dispatch = useDispatch();
  const openAddInfoModal = userInfo => {
    toggleModal();
    setUserInfo(userInfo);
  };
  const openRequiredConnectSocialNetworkPopup = () => {
    toggleSocialNetworkModal();
  };
  const handleFBLogin = data => {
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
  const handleGoogleLogin = data => {
    setConnectType("GOOGLE");
    const {
      profileObj
    } = data;
    dispatch(socialLogin({
      socialId: profileObj.googleId,
      email: profileObj.email,
      picture: profileObj.imageUrl,
      name: profileObj.name,
      provider: LOGIN_METHODS.GOOGLE
    }, LOGIN_METHODS.GOOGLE, isGuest, isRemeberMe, openAddInfoModal, openRequiredConnectSocialNetworkPopup));
  };
  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };
  const toggleSocialNetworkModal = () => {
    setIsOpenSocialNetworkModal(prevState => !prevState);
  };
  const onSubmit = async (values, validateForm) => {
    const errors = await validateForm();
    if (Object.keys(errors).length) {
      return;
    }
    dispatch(socialLogin({
      ...userInfo,
      email: values.email,
      phoneNumber: values.phoneNumber
    }, LOGIN_METHODS.FACEBOOK, openAddInfoModal));
  };
  const onClickCancel = () => {
    toggleModal();
  };
  const validationSchema = object().shape({
    email: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "register.email.required"
    })).email( /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "register.email.invalid"
    })),
    phoneNumber: string().matches(PHONE_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "register.phoneNumber.invalid"
    })).required( /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "register.phoneNumber.required"
    }))
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "social-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "social-login-btn"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: isLogin ? 'socialLogin.loginWith' : 'socialLogin.registerWith'
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React.createElement(FacebookLogin, {
    type: "button",
    appId: FB_APP_ID,
    cssClass: "fb-login-button",
    disableMobileRedirect: true,
    render: ({
      onClick
    }) => /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement("img", {
      alt: "facebook",
      src: IMAGE.FB_LOGO
    })),
    fields: "name,email,picture",
    callback: handleFBLogin
  }), /*#__PURE__*/React.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React.createElement(GoogleLogin, {
    clientId: GOOGLE_APP_ID,
    onSuccess: handleGoogleLogin,
    render: ({
      onClick
    }) => /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement("img", {
      alt: "google",
      src: IMAGE.GOOGLE_LOGO
    })),
    cookiePolicy: 'single_host_origin'
  })))), /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      email: userInfo.email || '',
      phoneNumber: userInfo.phoneNumber || ''
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  }, ({
    errors,
    touched,
    validateForm,
    values
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpenModal,
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    toggle: toggleModal
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.addInfo"
  })), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.addInfo.info"
  })))), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "email",
    disabled: userInfo.email,
    errors: errors,
    touched: touched,
    messageId: "register.email"
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "phoneNumber",
    disabled: userInfo.phoneNumber,
    errors: errors,
    touched: touched,
    messageId: "register.phoneNumber"
  })), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button.Ripple, {
    type: "button",
    color: "secondary",
    onClick: onClickCancel
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.cancel"
  })), /*#__PURE__*/React.createElement(Button.Ripple, {
    color: "primary",
    onClick: () => onSubmit(values, validateForm)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.ok"
  })))))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpenSocialNetworkModal,
    toggle: () => setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal),
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React.createElement(ModalBody, null, connectType === 'FACEBOOK' ? /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.requireConnectFB"
  }) : /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.requireConnectGoogle"
  })), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    color: "secondary",
    onClick: () => setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.cancel"
  })), ' ', /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    onClick: () => setIsOpenSocialNetworkModal(!isOpenSocialNetworkModal)
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.ok"
  })), ' ')));
};

const AppSelection = ({
  isLogin
}) => {
  const {
    isGuest
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onClickChangeAppType = value => {
    dispatch(changeIsGuest(value));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-2 mb-3"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: isLogin ? 'socialLogin.youLoginAs' : 'socialLogin.youRegisterAs'
  })), /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "w-100"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "btn-app-selection left",
    active: !isGuest,
    type: "button",
    onClick: () => onClickChangeAppType(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon mr-1"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 35V35.0167",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15V15.0167",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M35 15V15.0167",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.3333 33.4999C11.0589 32.3906 9.1021 30.7238 7.64506 28.6548C6.18802 26.5858 5.2781 24.1818 5 21.6666",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.6663 33.4999C28.9407 32.3906 30.8975 30.7238 32.3545 28.6548C33.8116 26.5858 34.7215 24.1818 34.9996 21.6666",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.333 8.33345C13.0132 6.14004 16.3697 4.94164 19.833 4.94164C23.2963 4.94164 26.6529 6.14004 29.333 8.33345",
    stroke: !isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.agent"
  })), /*#__PURE__*/React.createElement(Button, {
    className: "btn-app-selection right",
    active: isGuest,
    onClick: () => onClickChangeAppType(true),
    type: "button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon mr-1"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.0005 18.4999C23.3143 18.4999 26.0007 15.8136 26.0007 12.4997C26.0007 9.1859 23.3143 6.49951 20.0005 6.49951C16.6866 6.49951 14.0002 9.1859 14.0002 12.4997C14.0002 15.8136 16.6866 18.4999 20.0005 18.4999Z",
    stroke: isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.9993 33.5004V30.5003C10.9993 28.9089 11.6314 27.3828 12.7567 26.2575C13.8819 25.1322 15.4081 24.5001 16.9995 24.5001H22.9997C24.5911 24.5001 26.1172 25.1322 27.2425 26.2575C28.3678 27.3828 28.9999 28.9089 28.9999 30.5003V33.5004",
    stroke: isGuest ? '#73C14F' : '#587471',
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "socialLogin.personal"
  }))));
};


const formSchema$1 = object().shape({
  username: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login.username.required"
  })),
  password: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login.password.required"
  })).matches(PASSWORD_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.password.invalid"
  }))
});
const Login = () => {
  const [rememberMe, setRememberMe] = useState(null);
  const [isRemeberMe, setIsRemeberMe] = useState(false);
  const dispatch = useDispatch();
  const {
    isGuest
  } = useSelector(state => state.auth);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(REMEMBER_ME_TOKEN));
    if (user) {
      setRememberMe(user);
    }
  }, []);
  const onSubmit = (values, actions) => {
    dispatch(loginAction({
      username: trimValue(values.username),
      password: values.password,
      isGuest,
      isRemeberMe
    }));
    actions.setSubmitting(false);
  };
  const onClickNotMe = () => {
    localStorage.removeItem(REMEMBER_ME_TOKEN);
    setRememberMe(null);
  };
  return /*#__PURE__*/React.createElement(Formik, {
    enableReinitialize: true,
    initialValues: {
      username: rememberMe ? rememberMe.username : '',
      password: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$1
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(AppSelection, {
    isLogin: true
  }), rememberMe ? /*#__PURE__*/React.createElement("h4", {
    className: "text-center mb-2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login.sayHi",
    values: {
      name: rememberMe.name
    }
  })) : /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "login.username",
    fieldName: "username",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login.password"
  }, msg => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FastField, {
    name: "password"
  }, ({
    field,
    form
  }) => /*#__PURE__*/React.createElement(Input, Object.assign({
    type: "password",
    className: `form-control ${errors.password && touched.password && 'is-invalid'}`,
    placeholder: msg
  }, field, {
    onChange: e => form.setFieldValue('password', e.target.value)
  }))), errors.password && touched.password ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, errors.password) : null, /*#__PURE__*/React.createElement(Label, null, msg)))), /*#__PURE__*/React.createElement(FormGroup, {
    className: "d-flex justify-content-between align-items-center"
  }, rememberMe ? /*#__PURE__*/React.createElement("a", {
    className: "text-dark-green",
    onClick: onClickNotMe
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login.notMe"
  })) : /*#__PURE__*/React.createElement(CheckBox, {
    color: "primary",
    icon: /*#__PURE__*/React.createElement(Check, {
      className: "vx-icon",
      size: 16
    }),
    label: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "login.rememberMe"
    }),
    onChange: e => setIsRemeberMe(e.target.checked),
    defaultChecked: isRemeberMe
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider",
    style: {
      height: '30px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "float-right"
  }, /*#__PURE__*/React.createElement(Link$1, {
    to: "/forgot-password",
    className: "text-secondary font-weight-bold"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(SocialLogin, {
    isLogin: true,
    isRemeberMe: isRemeberMe
  }))));
};

const formSchema$2 = object().shape({
  fullName: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.fullname.required"
  })).matches(NAME_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.fullname.invalid"
  })),
  email: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.email.required"
  })).email( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.email.invalid"
  })),
  phoneNumber: string().matches(PHONE_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.phoneNumber.invalid"
  })).required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.phoneNumber.required"
  })),
  refCode: string().length(10, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.refCode.invalid"
  })).matches(PHONE_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.refCode.invalid"
  }))
});
const Register = () => {
  var _guest$user, _guest$user2, _guest$user3;
  const [isAppcepted, setIsAppcepted] = useState(false);
  const [isNotApccepted, setIsNotAccepted] = useState(false);
  const {
    isGuest,
    register: registerInfo,
    guest
  } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: recaptchaToken => {
        dispatch(register({
          ...registerInfo.user,
          recaptchaToken
        }));
      }
    });
  }, []);
  const onSubmit = async values => {
    if (!isAppcepted) {
      setIsNotAccepted(true);
      return;
    }
    const data = {
      ...values,
      isGuest
    };
    dispatch(register(data));
  };
  const ontoggleAccepted = checked => {
    setIsAppcepted(checked);
    setIsNotAccepted(!checked);
  };
  const onChangeFullName = (e, form) => {
    const value = e.target.value.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    form.setFieldValue('fullName', value);
  };
  return /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      fullName: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user = guest.user) === null || _guest$user === void 0 ? void 0 : _guest$user.fullName,
      email: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user2 = guest.user) === null || _guest$user2 === void 0 ? void 0 : _guest$user2.email,
      phoneNumber: isGuest ? '' : guest === null || guest === void 0 ? void 0 : (_guest$user3 = guest.user) === null || _guest$user3 === void 0 ? void 0 : _guest$user3.phoneNumber,
      refCode: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$2
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(AppSelection, null), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "fullName",
    errors: errors,
    touched: touched,
    onChange: onChangeFullName,
    messageId: "register.fullname"
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "email",
    errors: errors,
    touched: touched,
    messageId: "register.email"
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "phoneNumber",
    errors: errors,
    touched: touched,
    messageId: "register.phoneNumber"
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    fieldName: "refCode",
    errors: errors,
    touched: touched,
    messageId: "register.refCode"
  }), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    color: "primary",
    icon: /*#__PURE__*/React.createElement(Check, {
      className: "vx-icon",
      size: 16
    }),
    onChange: e => ontoggleAccepted(e.target.checked),
    defaultChecked: isAppcepted
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.agreeWith"
  }), ' ', /*#__PURE__*/React.createElement("a", {
    className: "text-primary"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.policyAndCondition"
  })), ' ', /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.useService"
  }))), isNotApccepted ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.mustAppcepted"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register"
  })))), isGuest ? /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(SocialLogin, null)) : null));
};

const formSchema$3 = object().shape({
  username: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.username.required"
  })),
  email: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.email.required"
  })).email( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.email.invalid"
  }))
});
const ForgotPassword = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [emailSuggestion, setEmailSuggestion] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    dispatch(forgotPassword(values));
  };
  const onClickSuggestion = async username => {
    const res = await AuthService.getSuggestionEmail(username);
    if (res.status === 200) {
      setEmailSuggestion(res.data);
      toggleModal();
    }
  };
  const toggleModal = () => {
    setIsOpenModal(!isModalOpen);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      username: '',
      email: ''
    },
    onSubmit: onSubmit,
    validationSchema: formSchema$3
  }, ({
    errors,
    touched,
    values
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement("h1", {
    className: "landing-page-title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword"
  })), /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "forgotPassword.username",
    fieldName: "username",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-label-group position-relative"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.email"
  }, msg => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    name: "email"
  }, ({
    field,
    form
  }) => /*#__PURE__*/React.createElement(Input, Object.assign({
    className: `${errors.email && touched.email && 'is-invalid not-show-icon'}`,
    placeholder: msg
  }, field, {
    onChange: e => form.setFieldValue('email', e.target.value ? e.target.value.trim() : '')
  }))), errors.email && touched.email ? /*#__PURE__*/React.createElement("div", {
    className: "text-danger"
  }, errors.email) : null, values.username ? /*#__PURE__*/React.createElement("div", {
    className: "form-control-position text-primary cursor-pointer",
    onClick: () => onClickSuggestion(values.username)
  }, /*#__PURE__*/React.createElement(Sun, {
    size: 15
  })) : '', /*#__PURE__*/React.createElement(Label, null, msg)))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement(Link$1, {
    to: '/'
  }, /*#__PURE__*/React.createElement(Button, {
    className: "btn-second"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "common.back"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.verify"
  })))))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isModalOpen,
    toggle: toggleModal,
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React.createElement(ModalBody, {
    className: "modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/React.createElement("div", null, !emailSuggestion ? /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.notFoundEmailSuggestion"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "forgotPassword.yourEmailIs"
  }), ":", ' ', /*#__PURE__*/React.createElement("b", null, emailSuggestion))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement(Button.Ripple, {
    color: "primary",
    onClick: toggleModal
  }, "OK"), ' ')))));
};

const formSchema$4 = object().shape({
  password: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.password.required"
  })).matches(PASSWORD_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.password.invalid"
  })),
  passwordConfirmation: string().oneOf([ref('password'), null], /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.passwordMustMatch"
  })).required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.password.required"
  }))
});
const CreatePassword = ({
  isCreatePassword: _isCreatePassword = false
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    _isCreatePassword ? setRegisterToken() : setResetPassword();
  }, []);
  const onClickContinue = values => {
    if (_isCreatePassword) {
      dispatch(createPassword(values.password));
    } else {
      dispatch(resetPassword(values.password));
    }
  };
  const setRegisterToken = () => {
    const code = new URLSearchParams(document.location.search).get('registerToken');
    if (code) {
      dispatch(saveRegisterToken(code));
      history.replace(history.location.pathname);
    }
  };
  const setResetPassword = () => {
    const code = new URLSearchParams(document.location.search).get('resetToken');
    if (code) {
      dispatch(saveResetPasswordToken(code));
      history.replace(history.location.pathname);
    }
  };
  return /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: onClickContinue,
    validationSchema: formSchema$4
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "landing-page-title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.title"
  }))), /*#__PURE__*/React.createElement(BaseFormGroup, {
    type: "password",
    messageId: "login.password",
    fieldName: "password",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement(BaseFormGroup, {
    type: "password",
    messageId: "createPassword.enterThePassword",
    fieldName: "passwordConfirmation",
    errors: errors,
    touched: touched
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.1"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.2"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "createPassword.condition.3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: _isCreatePassword ? 'createPassword.continutes' : 'createPassword.done'
  })))));
};

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const registerInfo = useSelector(state => state.auth.register);
  const dispatch = useDispatch();
  const history = useHistory();
  const intl = useIntl();
  const NUM_INPUTS = 6;
  useEffect(() => {}, []);
  const onChangeOtp = value => {
    setOtp(value);
  };
  const onClickVerify = () => {
    dispatch(verifyPhoneNumber({
      ...registerInfo.user,
      code: otp
    }));
  };
  const onClickGetOtp = () => {
    window.recaptchaVerifier.verify().then(value => {
      if (value === registerInfo.user.recaptchaToken) {
        toastError("Mã Otp đã được gửi đến điện thoại của bạn!");
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "landing-page-title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.phoneNumberVerification"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-dark-green-2",
    dangerouslySetInnerHTML: {
      __html: intl.formatMessage({
        id: 'verifyAccount.otp.info'
      }, {
        phoneNumber: registerInfo.user.phoneNumber
      })
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-100 d-flex justify-content-center my-2"
  }, /*#__PURE__*/React.createElement(OtpInput, {
    inputStyle: "otp-input",
    value: otp,
    onChange: onChangeOtp,
    isInputNum: true,
    shouldAutoFocus: true,
    numInputs: NUM_INPUTS,
    separator: /*#__PURE__*/React.createElement("span", {
      className: "ml-2"
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "w-100",
    color: 'primary',
    onClick: onClickVerify,
    disabled: otp.length !== NUM_INPUTS
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.otp.verify"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.didNotReceiveCode"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-secondary font-weight-bold cursor-pointer",
    onClick: onClickGetOtp,
    style: {
      marginLeft: '3px'
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.tryAgain"
  })))));
};

const LandingPageHeader = () => /*#__PURE__*/React.createElement(Context.Consumer, null, context => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "d-flex justify-content-between align-items-center"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://inon.vn/"
}, /*#__PURE__*/React.createElement("span", {
  className: "d-block d-lg-none"
}, /*#__PURE__*/React.createElement("img", {
  src: IMAGE.LOGO,
  alt: "logo"
}))), /*#__PURE__*/React.createElement("div", {
  className: "languages d-flex align-items-center"
}, /*#__PURE__*/React.createElement(UncontrolledButtonDropdown, {
  direction: "left"
}, /*#__PURE__*/React.createElement(DropdownToggle, {
  color: "primary",
  tag: "div",
  className: "cursor-pointer"
}, context.state.locale === 'en' ? /*#__PURE__*/React.createElement("img", {
  alt: "usa-icon",
  className: "cursor-pointer",
  src: "https://img.icons8.com/color/48/000000/usa.png"
}) : /*#__PURE__*/React.createElement("img", {
  alt: "vn-icon",
  src: "https://img.icons8.com/color/48/000000/vietnam.png"
})), /*#__PURE__*/React.createElement(DropdownMenu, null, /*#__PURE__*/React.createElement(DropdownItem, {
  tag: "div",
  className: "text-center",
  onClick: () => context.switchLanguage('en')
}, /*#__PURE__*/React.createElement("img", {
  alt: "usa-icon",
  className: "cursor-pointer",
  src: "https://img.icons8.com/color/48/000000/usa.png"
})), /*#__PURE__*/React.createElement(DropdownItem, {
  tag: "div",
  className: "d-flex justify-content-center",
  onClick: () => context.switchLanguage('vi')
}, /*#__PURE__*/React.createElement("img", {
  alt: "vn-icon",
  src: "https://img.icons8.com/color/48/000000/vietnam.png"
}))))))));

const CompleteInforValidate = object().shape({
  icNumber: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.nbrPer.required"
  })).when('icType', {
    is: 'CMND',
    then: string().matches(PERSONAL_ID_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "completeInformation.nbrPer.invalid"
    }))
  }).when('icType', {
    is: 'CCCD',
    then: string().matches(CITIZEN_INDENTIFY_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "completeInformation.nbrPer.invalid"
    }))
  }).when('icType', {
    is: 'HC',
    then: string().matches(PASSPORT_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "completeInformation.nbrPer.invalid"
    }))
  }),
  dateOfBirth: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.dateOfBirth.required"
  })),
  address: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.address.required"
  })),
  bankName: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.bank.required"
  })),
  bankBranch: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.branch.required"
  })),
  bankNumber: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.accountNbr.required"
  })),
  city: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.province.required"
  })),
  ward: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.ward.required"
  })),
  district: string().required( /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.district.required"
  })),
  refCode: string().matches(PHONE_REGEX, () => /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register.refCode.invalid"
  }))
});
const CompleteInformation = () => {
  const user = useSelector(state => state.auth.register.user);
  const {
    cities
  } = useCityList(VN_COUNTRY_CODE);
  const {
    districts,
    loadDitrictsByCity
  } = useDistrictList(cities[0] ? cities[0].id : null);
  const {
    wards,
    loadWardsByDistrict
  } = useWardList(districts[0] ? districts[0].id : null);
  const {
    banks
  } = useBankList();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(compeleteInfo(trimObjectValues(values)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "complete-info"
  }, /*#__PURE__*/React.createElement(Formik, {
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
  }, ({
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement("h1", {
    className: "landing-page-title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.title"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "6",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.idType",
    fieldName: "icType",
    options: IC_TYPES_OPTIONS,
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "6",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.nbrPer",
    fieldName: "icNumber",
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "6",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormDatePicker, {
    messageId: "completeInformation.dateOfBirth",
    fieldName: "dateOfBirth",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "6"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.gender",
    fieldName: "gender",
    defaultValue: GENDER_OPTIONS[0],
    options: GENDER_OPTIONS,
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "4",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.province",
    fieldName: "city",
    options: cities,
    onChange: ({
      id
    }) => loadDitrictsByCity(id),
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.district",
    fieldName: "district",
    options: districts,
    onChange: ({
      id
    }) => loadWardsByDistrict(id),
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.ward",
    fieldName: "ward",
    options: wards,
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "8",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.address",
    fieldName: "address",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4",
    className: "mb-1"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.gif",
    fieldName: "refCode",
    isRequired: false
  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroupSelect, {
    messageId: "completeInformation.bank",
    fieldName: "bankName",
    options: banks,
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.branch",
    fieldName: "bankBranch",
    errors: errors,
    touched: touched
  })), /*#__PURE__*/React.createElement(Col, {
    sm: "4"
  }, /*#__PURE__*/React.createElement(BaseFormGroup, {
    messageId: "completeInformation.accountNbr",
    fieldName: "bankNumber",
    errors: errors,
    touched: touched
  }))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-5 col-md-4"
  }, /*#__PURE__*/React.createElement(Link$1, {
    to: "/create-password"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "btn-second",
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.back"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-5 col-md-4"
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "completeInformation.done"
  })))))));
};

const VerifyAccount = () => {
  const {
    status
  } = useSelector(state => state.auth.verifyAccount);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    dispatch(verifyAccount(token));
  }, [history]);
  const renderVerifyStatus = () => {
    if (status === 'SUCCESS') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100px'
        },
        className: "mx-auto"
      }, /*#__PURE__*/React.createElement("img", {
        src: IMAGE.CHECK_ICON,
        className: "img-fluid",
        alt: "success-icon"
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "verifyAccount.success"
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React.createElement(Button.Ripple, {
        onClick: () => history.push('/reset-password')
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "verifyAccount.createPassword"
      }))));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100px'
        },
        className: "mx-auto"
      }, /*#__PURE__*/React.createElement("img", {
        src: IMAGE.FAIL_ICON,
        className: "img-fluid",
        alt: "failure-icon"
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "verifyAccount.fail"
      })));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "verify-account"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-weight-bold text-white"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.title"
  })), !status ? /*#__PURE__*/React.createElement("div", {
    className: "mt-4 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement(Spinner, {
    color: "primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "verifyAccount.loading"
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "text-center p-2"
  }, renderVerifyStatus())));
};

let _$1 = t => t,
  _t$1;
const PageStyle = styled.div(_t$1 || (_t$1 = _$1`

  .landing-page-bg {
    background-image: url('${0}');
    background-size: cover;
    background-position: center;
  }
`), IMAGE.LANDING_PAGE_BG);
const LandingPage = props => {
  const [activeTab, setActiveTab] = useState('');
  const history = useHistory();
  useEffect(() => {
    setActiveTab(props.activeTab || 'login');
  }, [props.activeTab]);
  const TabView = () => {
    switch (activeTab) {
      case 'login':
        return /*#__PURE__*/React.createElement(Login, null);
      case 'register':
        return /*#__PURE__*/React.createElement(Register, null);
      case 'forgot-password':
        return /*#__PURE__*/React.createElement(ForgotPassword, null);
      case 'reset-password':
      case 'provide-new-password':
        return /*#__PURE__*/React.createElement(CreatePassword, null);
      case 'create-password':
        return /*#__PURE__*/React.createElement(CreatePassword, {
          isCreatePassword: true
        });
      case 'verify-otp':
        return /*#__PURE__*/React.createElement(VerifyOtp, null);
      case 'verify-account':
        return /*#__PURE__*/React.createElement(VerifyAccount, null);
      case 'complete-information':
        return /*#__PURE__*/React.createElement(CompleteInformation, null);
      default:
        return '';
    }
  };
  const goToLink = link => history.push(link);
  return /*#__PURE__*/React.createElement(PageStyle, null, /*#__PURE__*/React.createElement("div", {
    className: "landing-page"
  }, /*#__PURE__*/React.createElement(Row, {
    className: "w-100 m-0",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    lg: 5,
    className: "d-none d-lg-block landing-page-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo mx-auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://inon.vn/"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE.LOGO,
    alt: "logo"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "info-text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "landingPage.welcomeText"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-white mt-2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "landingPage.slogan"
  })), /*#__PURE__*/React.createElement("small", {
    className: "d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.1611 9.32831L11.3406 10.4239L10.7463 10.9441C10.0018 11.5954 9.05084 11.9543 8.06866 11.9543C5.86182 11.9543 4.06641 10.1959 4.06641 8.03464C4.06641 5.87835 5.86182 4.12402 8.06866 4.12402C9.05164 4.12402 9.99942 4.47951 10.7372 5.12504L11.3098 5.62613L10.1794 6.75711L9.67753 6.3137C9.24575 5.93239 8.67448 5.72235 8.06866 5.72235C6.74313 5.72235 5.66473 6.75966 5.66473 8.03457C5.66473 9.31457 6.74313 10.3559 8.06866 10.3559C8.66779 10.3559 9.23913 10.1426 9.67753 9.7553L10.1611 9.32831Z",
    fill: "#E7EBEB"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.5",
    stroke: "#E7EBEB"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '2px'
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "landingPage.copyRight",
    values: {
      year: new Date().getFullYear()
    }
  }))))), /*#__PURE__*/React.createElement(Col, {
    className: "mx-auto",
    sm: 12,
    lg: 7
  }, /*#__PURE__*/React.createElement("div", {
    className: activeTab === 'complete-information' ? 'main-content wider' : 'main-content'
  }, /*#__PURE__*/React.createElement(LandingPageHeader, null), activeTab === 'login' || activeTab === 'register' ? /*#__PURE__*/React.createElement("div", {
    className: "lg-content-header d-flex cursor-pointer mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => goToLink('/login'),
    className: classnames('col-6 text-center tab-control', {
      active: activeTab === 'login'
    })
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "login"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => goToLink('/register'),
    className: classnames('col-6 text-center tab-control', {
      active: activeTab === 'register'
    })
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "register"
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: activeTab === 'login' || activeTab === 'register' ? '' : 'lg-content'
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/React.createElement(TabView, null))), /*#__PURE__*/React.createElement("div", {
    id: "recaptcha-container"
  }))))));
};

const ConfirmAlert = () => {
  const {
    title,
    isShow,
    content,
    onConfirm,
    onCancel,
    confirmBtnText,
    cancelBtnText,
    ...otherConfigs
  } = useSelector(state => state.ui.confirmAlert);
  const dispatch = useDispatch();
  const intl = useIntl();
  const onClickConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    dispatch(hideConfirmAlert());
  };
  const onClickCancel = () => {
    if (onCancel) {
      onCancel();
    }
    dispatch(hideConfirmAlert());
  };
  return /*#__PURE__*/React.createElement(SweetAlert, Object.assign({
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

const CheckLocationChange = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    appId
  } = useSelector(state => state.customizer);
  const {
    authToken
  } = useSelector(state => state.auth);
  useEffect(() => {
    let id;
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
  return /*#__PURE__*/React.createElement("span", null);
};

const ConnectWithSocial = () => {
  const dispatch = useDispatch();
  const {
    id
  } = useSelector(state => state.auth.user);
  const {
    userFacebookAuth,
    userGoogleAuth
  } = useSelector(state => state.auth);
  useEffect(() => {
    if (id) {
      dispatch(getUserSocial(id)).then();
    }
  }, [id]);
  const connectWithGoogle = data => {
    const {
      profileObj
    } = data;
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
  const connectWithFacebook = data => {
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
  return /*#__PURE__*/React.createElement(Card, {
    className: "connect-with-social p-1"
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("h4", {
    className: "text-uppercase mb-2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "connectWithSocial.connectAccount"
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center mb-1"
  }, userFacebookAuth !== null && userFacebookAuth !== void 0 && userFacebookAuth.picture ? /*#__PURE__*/React.createElement("img", {
    src: userFacebookAuth.picture,
    className: "width-50 height-50 mr-2 rounded-circle border",
    alt: ""
  }) : /*#__PURE__*/React.createElement("img", {
    className: "mr-2",
    alt: "facebook",
    src: "https://sit2.inon.vn/resources/images/fb-icon.svg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mr-2 width-100 font-weight-bold"
  }, (userFacebookAuth === null || userFacebookAuth === void 0 ? void 0 : userFacebookAuth.name) || "Facebook"), /*#__PURE__*/React.createElement(FacebookLogin, {
    type: "button",
    appId: FB_APP_ID,
    cssClass: "fb-login-button",
    disableMobileRedirect: true,
    render: ({
      onClick
    }) => /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement(Button, {
      color: "primary"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "connectWithSocial.connect"
    }))),
    fields: "name,email,picture",
    callback: connectWithFacebook
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, userGoogleAuth !== null && userGoogleAuth !== void 0 && userGoogleAuth.picture ? /*#__PURE__*/React.createElement("img", {
    className: "width-50 height-50 mr-2 rounded-circle border",
    src: userGoogleAuth.picture,
    alt: ""
  }) : /*#__PURE__*/React.createElement("img", {
    className: "mr-2",
    alt: "google",
    src: "https://sit2.inon.vn/resources/images/google-icon.svg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mr-2 width-100 font-weight-bold"
  }, (userGoogleAuth === null || userGoogleAuth === void 0 ? void 0 : userGoogleAuth.name) || "Google"), /*#__PURE__*/React.createElement(GoogleLogin, {
    clientId: GOOGLE_APP_ID,
    onSuccess: connectWithGoogle,
    render: ({
      onClick
    }) => /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement(Button, {
      color: "primary"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "connectWithSocial.connect"
    }))),
    cookiePolicy: 'single_host_origin'
  }))));
};

class BonusHistoryService {}
BonusHistoryService.getBonusTransactionByUser = userId => {
  return HttpClient.get(`${API_GET_ALL_BONUS_TRANSACTION_BY_USER}/${userId}`);
};
BonusHistoryService.getBonusDrawvalTransactionByUser = userId => {
  return HttpClient.get(`${API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER}/${userId}`);
};
BonusHistoryService.getBonusByUserId = userId => {
  return HttpClient.get(`${API_GET_BONUS_BY_USER_ID}/${userId}`);
};

const DOTS = '...';
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({
    length
  }, (_, idx) => idx + start);
};
const usePagination = ({
  totalCount,
  pageSize,
  siblingCount: _siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = _siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - _siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + _siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 1 + 2 * _siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 1 + 2 * _siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, _siblingCount, currentPage]);
  return paginationRange;
};

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return /*#__PURE__*/React.createElement("ul", {
    className: classnames('pagination-container', {
      [className]: className
    })
  }, /*#__PURE__*/React.createElement("li", {
    className: classnames('pagination-item', {
      disabled: currentPage === 1
    }),
    onClick: onPrevious
  }, /*#__PURE__*/React.createElement("div", {
    className: "arrow left"
  })), paginationRange.map(pageNumber => {
    if (pageNumber === DOTS) {
      return /*#__PURE__*/React.createElement("li", {
        className: "pagination-item dots"
      }, "\u2026");
    }
    return /*#__PURE__*/React.createElement("li", {
      className: classnames('pagination-item', {
        selected: pageNumber === currentPage
      }),
      onClick: () => onPageChange(pageNumber)
    }, pageNumber);
  }), /*#__PURE__*/React.createElement("li", {
    className: classnames('pagination-item', {
      disabled: currentPage === lastPage
    }),
    onClick: onNext
  }, /*#__PURE__*/React.createElement("div", {
    className: "arrow right"
  })));
};

let PageSize = 5;
const BonusPointItem = ({
  items
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const getIconByContractName = contractName => {
    if (contractName) {
      const contractType = contractName.substr(0, 2);
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
  const getIconByBonusWithDrawvalType = bonusWithDrawvalType => {
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
  const getTitleByBonusWithDrawvalType = bonusWithDrawvalType => {
    switch (bonusWithDrawvalType) {
      case 1:
        return /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "bonusPoint.paymentContract"
        });
      case 2:
        return /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "bonusPoint.withDrawval"
        });
      case 3:
        return /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "bonusPoint.gift"
        });
      default:
        return /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "bonusPoint.paymentContract"
        });
    }
  };
  return /*#__PURE__*/React.createElement("div", null, currentTableData ? currentTableData.map(item => /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center justify-content-sm-between bonus-trans-item border-bottom p-1 p-md-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bonus-trans-item__icon width-100 d-none d-md-block"
  }, item.bonusWithDrawvalTypeDTO !== undefined ? /*#__PURE__*/React.createElement("img", {
    className: "width-50 height-50",
    src: getIconByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id),
    alt: ""
  }) : /*#__PURE__*/React.createElement("img", {
    className: "width-50 height-50",
    src: getIconByContractName(item.contractName),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "bonus-trans-item__content flex-grow-1"
  }, item.bonusWithDrawvalTypeDTO !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: "__title mb-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium-2 mb-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.contract"
  }), " ", item.contractName), /*#__PURE__*/React.createElement("div", null, getTitleByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id))) : /*#__PURE__*/React.createElement("div", {
    className: "__title mb-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium-2 mb-1"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "menu.contract"
  }), " ", item.contractName), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bonusPoint.bonus"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "__created-date font-small-2"
  }, moment(item.createdDate).format('DD/MM/YYYY'))), /*#__PURE__*/React.createElement("div", {
    className: "bonus-trans-item__value width-200 font-medium-4 text-right"
  }, item.bonusWithDrawvalTypeDTO ? /*#__PURE__*/React.createElement("span", null, "- ", numberFormat(item.value)) : /*#__PURE__*/React.createElement("span", {
    className: "text-success"
  }, "+ ", numberFormat(item.bonusValue))))) : null, /*#__PURE__*/React.createElement(Pagination, {
    className: "pagination-bar",
    currentPage: currentPage,
    totalCount: items.length,
    pageSize: PageSize,
    onPageChange: page => setCurrentPage(page)
  }));
};

let _$2 = t => t,
  _t$2;
const BonusPointMainStyled = styled.div(_t$2 || (_t$2 = _$2`
  position: absolute;
  padding: 3rem;
  top: 0;
  left: 0;

  .bonus-point__title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`));
const BonusPoint = () => {
  const {
    user
  } = useSelector(state => state.auth);
  const [active, setActive] = useState('1');
  const [bonusPointHistory, setBonusPointHistory] = useState();
  const [bonusPointReceived, setBonusPointReceived] = useState();
  const [bonusPointUsed, setBonusPointUsed] = useState();
  const [bonusPointTotal, setBonusPointTotal] = useState();
  const [bonus, setBonus] = useState(0);
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const getBonusPointData = async () => {
    const bonusPointReceivedData = await BonusHistoryService.getBonusTransactionByUser(user.id);
    const bonusPointUsedData = await BonusHistoryService.getBonusDrawvalTransactionByUser(user.id);
    if (bonusPointReceivedData.status === 200) {
      setBonusPointReceived(bonusPointReceivedData.data);
    }
    let bonusPointUsed = 0;
    if (bonusPointUsedData.status === 200) {
      setBonusPointUsed(bonusPointUsedData.data);
    }
    setBonusPointTotal((bonusPointReceived - bonusPointUsed).toFixed(2));
    let bonusHistoryData = bonusPointReceivedData.data.concat(bonusPointUsedData.data);
    let sortedData = bonusHistoryData.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
    setBonusPointHistory(sortedData);
  };
  const getBonusForUserId = async () => {
    const res = await BonusHistoryService.getBonusByUserId(user.id);
    if (res.status === 200) {
      const total = String(res.data.totalBonusValue) || 0;
      const result = total.split(".")[0];
      setBonus(result);
    }
  };
  useEffect(() => {
    getBonusPointData().then();
    getBonusForUserId();
  }, []);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bonus-point position-relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: RESOURCE_URL + 'bonus-point-bg.svg',
    alt: "",
    className: "d-none d-md-block"
  }), /*#__PURE__*/React.createElement("img", {
    src: RESOURCE_URL + 'bonus-point-mobile-bg.png',
    alt: "",
    className: "d-block d-md-none"
  }), /*#__PURE__*/React.createElement(BonusPointMainStyled, null, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bonus-point__title"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bonusPoint.availablePoint"
  })), /*#__PURE__*/React.createElement(DollarSign, null)), /*#__PURE__*/React.createElement("h2", {
    className: "bonus-point__number font-weight-bolder mb-2 text-success"
  }, isNaN(bonus) ? 0 : numberFormat(bonus)), /*#__PURE__*/React.createElement("div", {
    className: "bonus-point__description"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bonusPoint.uses"
  }))))), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Nav, {
    tabs: true,
    justified: true
  }, /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: "text-uppercase",
    active: active === '1',
    onClick: () => {
      toggle('1');
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bonusPoint.history"
  }))), /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(NavLink, {
    className: "text-uppercase",
    active: active === '2',
    onClick: () => {
      toggle('2');
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bonusPoint.used"
  })))), /*#__PURE__*/React.createElement(TabContent, {
    className: "py-50",
    activeTab: active
  }, /*#__PURE__*/React.createElement(TabPane, {
    tabId: "1"
  }, bonusPointHistory ? /*#__PURE__*/React.createElement(BonusPointItem, {
    items: bonusPointHistory
  }) : null), /*#__PURE__*/React.createElement(TabPane, {
    tabId: "3"
  }, bonusPointUsed ? /*#__PURE__*/React.createElement(BonusPointItem, {
    items: bonusPointUsed
  }) : null))));
};

const AppRouter = props => {
  const {
    checkLoginStatus,
    appId,
    user,
    loginStatus,
    isAuthentication,
    guest,
    authToken,
    children,
    loadNavtigation,
    changeIsGuest,
    loadUserRoles,
    setAppId,
    history,
    message
  } = props;
  useEffect(() => {
    const urlParams = new URLSearchParams(document.location.search);
    const code = guest.authToken || authToken;
    const redirectUrl = urlParams.get('redirectUrl');
    if (code && loginStatus !== LOGIN_STATUS.SUCCESS) {
      checkLoginStatus(code, redirectUrl);
    }
  }, [authToken]);
  const appMessage = {
    en: {
      ...messages_en,
      ...message.en
    },
    vi: {
      ...messages_vi,
      ...message.vi
    }
  };
  const settingRoutes = [{
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
  const landingPageRoutes = [{
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
  return /*#__PURE__*/React.createElement(IntlProviderWrapper, {
    locale: user && user.userSettings ? user.userSettings.language.toLowerCase() : localStorage.getItem('language'),
    appMessage: appMessage
  }, /*#__PURE__*/React.createElement(Router, {
    history: history
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    render: props => isAuthentication && appId !== AppId.ELITE_APP ? /*#__PURE__*/React.createElement(Layout$1, _extends({}, props, {
      appId
    }), /*#__PURE__*/React.createElement(Switch, null, settingRoutes.map(item => /*#__PURE__*/React.createElement(Route, {
      key: item.path,
      path: `/app/${item.path}`,
      render: () => /*#__PURE__*/React.createElement(item.component, {
        activeTab: item.path
      })
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/",
      render: () => children
    }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Switch, null, landingPageRoutes.map(item => /*#__PURE__*/React.createElement(Route, {
      key: item.path,
      path: `/${item.path}`,
      render: () => /*#__PURE__*/React.createElement(LandingPage, {
        activeTab: item.path
      })
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/social-login",
      component: SocialLogin
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/",
      render: () => children
    })))
  })), /*#__PURE__*/React.createElement(CheckLocationChange, null)), /*#__PURE__*/React.createElement(ToastContainer, {
    hideProgressBar: true,
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true
  }), /*#__PURE__*/React.createElement(ConfirmAlert, null));
};
const mapStateToProps$3 = state => {
  return {
    isAuthentication: !!state.auth.authToken,
    authToken: state.auth.authToken,
    guest: state.auth.guest,
    loginStatus: state.auth.loginStatus,
    user: state.auth.user,
    appId: state.customizer.appId
  };
};
var AppRouter$1 = connect(mapStateToProps$3, {
  checkLoginStatus,
  loginAction,
  changeIsGuest,
  logoutAction,
  setAppId
})(AppRouter);

TopBarProgress.config({
  shadowBlur: 5,
  barThickness: 5
});
const LoadingSpinner = () => {
  const {
    isLoading
  } = useSelector(state => state.ui);
  return isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "app-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "load-icon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }), /*#__PURE__*/React.createElement("img", {
    alt: "InOn-logo",
    src: `${RESOURCE_URL}InOn-logo.svg`
  })), /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }))) : null;
};

const RippleButton = ({
  rippleColor,
  during,
  block,
  ...rest
}) => /*#__PURE__*/React.createElement(Ripples, {
  color: rippleColor ? rippleColor : "rgba(255, 255, 255, .5)",
  during: during,
  className: `${block ? "d-block" : ""}`
}, /*#__PURE__*/React.createElement(Button, rest));
RippleButton.propTypes = {
  ...Button.propTypes,
  rippleColor: PropTypes.string,
  during: PropTypes.number
};
Button.Ripple = RippleButton;

const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

const App = ({
  children,
  appId,
  appReducer,
  message,
  apiBaseUrl,
  history
}) => {
  const middlewares = [thunk, createDebounce()];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer(appReducer), {}, composeEnhancers(applyMiddleware(...middlewares)));
  const persistor = persistStore(store);
  setBaseHistory(history);
  setUpHttpClient(store, apiBaseUrl);
  firebase.initializeApp(FIRE_BASE_CONFIGS);
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(PersistGate, {
    loading: null,
    persistor: persistor
  }, /*#__PURE__*/React.createElement(LoadingSpinner, null), /*#__PURE__*/React.createElement(AppRouter$1, {
    message: message,
    appId: appId,
    history: history,
    children: children
  })));
};
unregister();

class FallbackSpinner extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "fallback-spinner"
    }, /*#__PURE__*/React.createElement("img", {
      className: "fallback-logo",
      src: IMAGE.INON_LOGO,
      alt: "logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/React.createElement("div", {
      className: "effect-1 effects"
    }), /*#__PURE__*/React.createElement("div", {
      className: "effect-2 effects"
    }), /*#__PURE__*/React.createElement("div", {
      className: "effect-3 effects"
    })));
  }
}

const defaultMaskOptions = {
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
const CurrencyInput = ({
  maskOptions,
  placeholder,
  ...inputProps
}) => {
  const {
    formatMessage
  } = useIntl();
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  });
  return /*#__PURE__*/React.createElement(MaskedInput, Object.assign({
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

const ReactTable = props => {
  const intl = useIntl();
  return /*#__PURE__*/React.createElement(Table, Object.assign({
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

const usePageAuthorities = () => {
  const [authorities, setAuthorities] = useState([]);
  const {
    userRoles,
    roles
  } = useSelector(state => state.navbar);
  const history = useHistory();
  useEffect(() => {
    const roleList = roles.filter(item => history.location.pathname.includes(item.menuPath));
    if (!roleList.length) {
      return;
    }
    roleList.sort((a, b) => a.id - b.id);
    const lastRole = roleList[roleList.length - 1];
    const userRoleList = userRoles.filter(item => item.roleId === lastRole.id);
    const authList = userRoleList.map(item => item.authority);
    setAuthorities(authList);
  }, [userRoles, roles, history.location.pathname]);
  return authorities;
};

export { AccountSettings, AppId, Autocomplete as AutoComplete, App as BaseApp, appConfigs as BaseAppConfigs, index as BaseAppUltils, BaseFormDatePicker, BaseFormGroup, BaseFormGroupSelect, Bells, CheckBox as Checkbox, CurrencyInput, DatePicker, FallbackSpinner, GeneralInfo, HttpClient, LandingPage, Radio, ReactTable, Select, changeIsGuest, goBackHomePage, goToAgencyApp, hideConfirmAlert, logoutAction, showConfirmAlert, useBankList, useCityList, useDeviceDetect, useDistrictList, usePageAuthorities, useWardList, useWindowDimensions };
