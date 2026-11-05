import React from 'react'
import {FormattedMessage} from 'react-intl'
import AppId from './appId'

export const API_BASE_URL = 'https://api.bmktech.vn'
export const API_BASE_SIT_URL = 'https://apisit.bmktech.vn'
export const RESOURCE_URL = 'https://sit2.bmktech.vn/resources/images/'
export const FB_APP_ID = '2651185198505964'
export const GOOGLE_APP_ID = '400818618331-k9ptcdcgr99po0g5q5mh8e5ekodgj61n.apps.googleusercontent.com'
// export const API_BASE_URL = 'https://apidev.inon.vn'
export const API_LOGIN_URL = '/api/authenticate'
export const API_LOGOUT_URL = '/api/logout'
export const API_GUEST_SOCIAL_LOGIN = '/api/social-login/guest'
export const API_PARTNER_SOCIAL_LOGIN = '/api/social-login/partner'
export const API_CHANGE_PASSWORD = '/api/change-password'
export const API_REGISTER = '/nth/onboarding/api/authenticate/register'
export const API_VERIFY_ACCOUNT = '/nth/onboarding/api/authenticate/verify-account'
export const API_VERIFY_PHONENUMBER = '/nth/onboarding/api/authenticate/verify-phone-number'
export const API_GET_USER = '/nth/user/api/users'
export const API_USER_SETTINGS = '/nth/user/api/user-settings'
export const API_UPDATE_USER_INFO = '/nth/user/api/update-user-info'
export const API_GET_NAV_CONFIGS = '/nth/accesscontrol/api/roles'
export const API_GET_USER_ROLES = '/nth/accesscontrol/api/user-group-roles'
export const API_CREATE_PASSWORD =
  '/nth/onboarding/api/authenticate/create-new-password'
export const API_GET_USER_BY_REGISTER_TOKEN =
  '/nth/onboarding/api/authenticate/get-partner'
export const API_COMPLETE_INFO =
  '/nth/onboarding/api/authenticate/complete-info'
export const API_FORGOT_PASSWORD = '/api/authenticate/forgot-password'
export const API_RESET_PASSWORD = '/api/authenticate/reset-password'
export const API_EMAIL_SUGGESTION = '/nth/user/api/authenticate/email-suggestion'
export const API_GET_MY_NOTIFICATIONS = '/nth/notification/api/my-notification'
export const API_CHECK_NEW_NOTIFICATIONS = '/nth/notification/api/authenticate/notifications-es'
export const API_GET_NOTIFICATION_FROM_ESPUBLIC = '/nth/notification/api/authenticate/user-notifications-es'
export const API_UPDATE_NOTIFICATION = '/nth/notification/api/authenticate/my-notifications/status'
export const API_UPDATE_ALL_NOTIFICATION_STATUS = '/nth/notification/api/authenticate/my-notifications-status'
export const API_SSE_SUBSCRIBE_NOTIFICATION = '/nth/notification/api/notifications/subscribe'
export const API_GET_ALL_BONUS_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-transaction/by-user'
export const API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER = '/nth/bonusmanager/api/bonus-with-drawval-transactions/by-user'
export const API_GET_USER_SOCIAL = '/api/user-social-network'
export const API_GET_BONUS_BY_USER_ID = '/nth/bonusmanager/api/userBonusBalance'

export const API_R_200 = 200

export const API_GET_CITIES_BY_COUNTRY =
  '/nth/datacollection/api/citiesbycountry'
export const API_GET_DISTRICTS_BY_CITY =
  '/nth/datacollection/api/districtsbycity'
export const API_GET_WARDS_BY_CITY = '/nth/datacollection/api/wardsbydistrict'
export const API_GET_BANKS = '/nth/datacollection/api/allBanks'

export const API_UPLOAD_FILE = '/nth/file/api/upload'
export const API_GET_FILE = '/nth/file/api/file'

export const MAX_MOBILE_WIDTH = 768
export const MAX_TABLET_WIDTH = 1024
export const REMEMBER_ME_TOKEN = 'rememberMe'

export const VN_COUNTRY_CODE = 192

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*])).{8,}$/gm
export const PHONE_REGEX = /^\b(84|0[3|5|7|8|9])+([0-9]{8})\b$/g
export const PERSONAL_ID_REGEX = /^(\d{9}|\d{12})$/
export const CITIZEN_INDENTIFY_REGEX = /^(\d{12})$/
export const PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/
export const NAME_REGEX = /^([ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếềìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý0-9A-Za-z_. ])+$/g
export const TERMS_PDF = 'https://sit2.bmktech.vn/resources/pdf/terms-and-conditions.pdf'
export const POLICY_PDF = 'https://doc.bmktech.vn/privacy-policy'

export const FIRE_BASE_CONFIGS = {
  apiKey: "AIzaSyCvWX-pLEPOxjwp2AJq3_t11JQjRMKtaT8",
  authDomain: "inonvn.firebaseapp.com",
  projectId: "inonvn",
  storageBucket: "inonvn.appspot.com",
  messagingSenderId: "316619339575",
  appId: "1:316619339575:web:a44ffe85ab9b3619f88cb2",
  measurementId: "G-9NZ14LNF58"
};

export const AUTHORITIES = {
  VIEW: 'view',
  EDIT: 'edit',
  APPROVE: 'approve',
  CREATE: 'create',
}

export const LOGIN_METHODS = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  PASSWORD: 'PASSWORD',
}

export const API_TIME_OUT = 5 * 60 * 1000;

export const MAX_FILE_SIZE = 5; // MB

export const CONTACT_PHONE = '0966.530.550'

export const SESSION_TIMEOUT = 30 // mins

export const DATE_TIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'
export const ANDROID_APP_LINK = 'https://play.google.com/store/apps/details?id=com.inon.vn'
export const IOS_APP_LINK = 'https://apps.apple.com/app/id1574202853'

export const LOGIN_STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const USER_TYPE = {
  KD: 'KD',
  HTKD: 'HTKD'
}

export const GENDER_OPTIONS = [
  {value: 'MALE', label: <FormattedMessage id='common.gender.male'/>},
  {value: 'FEMALE', label: <FormattedMessage id='common.gender.female'/>},
  {value: 'OTHERS', label: <FormattedMessage id='common.gender.other'/>}
]

export const IC_TYPES_OPTIONS = [
  {value: 'HC', label: <FormattedMessage id='common.icType.passport'/>},
  {
    value: 'CMND',
    label: <FormattedMessage id='common.icType.personalID'/>
  },
  {
    value: 'CCCD',
    label: <FormattedMessage id='common.icType.citizenIdentify'/>
  }
]

export const getExternalAppUrl = (appId, url) => {
  switch (appId) {
    case AppId.APP_NO1:
      return `/app${url}`
    case AppId.INSURANCE_APP:
      return `/insurance${url}`
    case AppId.SUPPLEMENT_APP:
      return `/supplement${url}`
    case AppId.ELITE_APP:
      return `${url}`
  }
}

export const getContextPath = (appId) => {
  switch (appId) {
    case AppId.APP_NO1:
      return 'app'
    case AppId.INSURANCE_APP:
      return 'insurance'
    case AppId.SUPPLEMENT_APP:
      return 'supplement'
    case AppId.ELITE_APP:
      return ''
  }
}

export const getPropObject = (obj, prop) => {
  if (!obj) {
    return null
  }
  return prop.split('.').reduce((r, e) => {
    return r ? r[e] : null
  }, obj)
}

export const USER_ROLE = {
  ADMIN: 'AD.IO',
  KD: 'KD.IO',
  HTKD: 'HT.IO',
  KT: 'KT.IO',
  VH: 'VH.IO',
  BANCA: 'BANCA.MNG',
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
}

export const IMAGE = {
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
  FAIL_ICON: RESOURCE_URL + 'fail_icon.png',
}

export const NAV_ICONS = ['help-center', 'support 24/7']
