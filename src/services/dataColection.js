import {
    API_GET_BANKS,
  API_GET_CITIES_BY_COUNTRY,
  API_GET_DISTRICTS_BY_CITY,
  API_GET_WARDS_BY_CITY
} from '../configs/app-configs'
import HttpClient from '../utility/HttpClient'

export class DataColetionService {
  static async getCitiesByCountry(countryId, locale) {
    const res = await HttpClient.get(API_GET_CITIES_BY_COUNTRY, {
      params: { countryId },
      isBackgroundRequest: true
    })
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale)
    }
    return []
  }

  static async getDistrictByCity(cityId , locale) {
    const res = await HttpClient.get(API_GET_DISTRICTS_BY_CITY, {
      params: { cityId },
      isBackgroundRequest: true
    })
    if (res.status === 200) {
      return mapDataToSelectOptions(res.data, locale)
    }
    return []
  }

  static async getWardsByDistrict(districtId , locale) {
    const res = await HttpClient.get(API_GET_WARDS_BY_CITY, {
        params: { districtId },
        isBackgroundRequest: true
      })
      if (res.status === 200) {
        return mapDataToSelectOptions(res.data, locale)
      }
      return []
  }

  static async getAllBanks(locale) {
    const res = await HttpClient.get(API_GET_BANKS, {
        isBackgroundRequest: true
      })
      if (res.status === 200) {
        return mapDataToSelectOptions(res.data, locale)
      }
      return []
  }
}

export const mapDataToSelectOptions = (data, lang) => {
  return data.map((item) => ({ value: item.id + '', id : item.id, label: item[lang === 'vi' ? 'vn' : 'en'] || item.vn }))
}
