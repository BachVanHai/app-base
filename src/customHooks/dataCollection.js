import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { DataColetionService } from '../services/dataColection'

export const useCityList = (countryCode) => {
  const [cities, setCities] = useState([])
  const { locale } = useIntl()

  useEffect(() => {
    if (!countryCode) {
      return
    }
    loadCitiesByCountry(countryCode)
  }, [countryCode])

  const loadCitiesByCountry = async (code) => {
    const data = await DataColetionService.getCitiesByCountry(code, locale)
    setCities(data)
    return data
  }

  return { cities, loadCitiesByCountry }
}

export const useDistrictList = (cityCode) => {
  const [districts, setDistricts] = useState([])
  const { locale } = useIntl()
  useEffect(() => {
    if (!cityCode) {
      return
    }
    loadDitrictsByCity(cityCode)
  }, [cityCode])

  const loadDitrictsByCity = async (code) => {
    const data = await DataColetionService.getDistrictByCity(code, locale)
    setDistricts(data)
    return data
  }

  return { districts, loadDitrictsByCity }
}

export const useWardList = (districtCode) => {
  const [wards, setWards] = useState([])
  const { locale } = useIntl()
  useEffect(() => {
    if (!districtCode) {
      return
    }
    loadWardsByDistrict(districtCode)
  }, [districtCode])

  const loadWardsByDistrict = async (code) => {
    const data = await DataColetionService.getWardsByDistrict(code, locale)
    setWards(data)
    return data
  }

  return { wards, loadWardsByDistrict }
}

export const useBankList = () => {
  const [banks, setBanks] = useState([])
  const { locale } = useIntl()
  useEffect(() => {
    loadBanks()
  }, [])

  const loadBanks = async () => {
    setBanks(await DataColetionService.getAllBanks(locale))
  }

  return { banks, loadBanks }
}
