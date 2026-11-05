import HttpClient from '../utility/HttpClient'
import { API_GET_ALL_BONUS_TRANSACTION_BY_USER, API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER, API_GET_BONUS_BY_USER_ID } from '../configs/app-configs'

export class BonusHistoryService {
  static getBonusTransactionByUser = (userId) => {
    return HttpClient.get(`${API_GET_ALL_BONUS_TRANSACTION_BY_USER}/${userId}`)
  }
  static getBonusDrawvalTransactionByUser = (userId) => {
    return HttpClient.get(`${API_GET_ALL_BONUS_WITHDRAWVAL_TRANSACTION_BY_USER}/${userId}`)
  }
  static getBonusByUserId = (userId) => {
    return HttpClient.get(`${API_GET_BONUS_BY_USER_ID}/${userId}`)
  }
}
