import { useMemo, useState } from 'react'
import { numberFormat } from '../../utility'
import moment from 'moment'
import Pagination from '../../components/Pagination'
import { FormattedMessage } from 'react-intl'
import React from 'react'

export let PageSize = 5

const BonusPointItem = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return items.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])
  const getIconByContractName = (contractName) => {
    if (contractName) {
      const contractType = contractName.substr(0, 2)
      switch (contractType) {
        case 'MC':
          return 'https://sit2.bmktech.vn/resources/images/motor-icon.svg'
        case 'CC':
          return 'https://sit2.bmktech.vn/resources/images/nav-car-icon.svg'
        case 'PH':
          return 'https://sit2.bmktech.vn/resources/images/bonus-home-insurance.png'
        case 'VT':
          return 'https://sit2.bmktech.vn/resources/images/nav-people-icon.svg'
        case 'HC':
          return 'https://sit2.bmktech.vn/resources/images/nav-people-icon.svg'
        default:
          return 'https://sit2.bmktech.vn/resources/images/motor-icon.svg'
      }
    }
  }
  const getIconByBonusWithDrawvalType = (bonusWithDrawvalType) => {
    switch (bonusWithDrawvalType) {
      case 1:
        return 'https://sit2.bmktech.vn/resources/images/bonus-payment-contract.png'
      case 2:
        return 'https://sit2.bmktech.vn/resources/images/bonus-withdrawval.png'
      case 3:
        return 'https://sit2.bmktech.vn/resources/images/bonus-gift.png'
      default:
        return 'https://sit2.bmktech.vn/resources/images/bonus-pament-contract.png'
    }
  }
  const getTitleByBonusWithDrawvalType = (bonusWithDrawvalType) => {
    switch (bonusWithDrawvalType) {
      case 1:
        return <FormattedMessage id='bonusPoint.paymentContract' />
      case 2:
        return <FormattedMessage id='bonusPoint.withDrawval' />
      case 3:
        return <FormattedMessage id='bonusPoint.gift' />
      default:
        return <FormattedMessage id='bonusPoint.paymentContract' />
    }
  }
  return (
    <div>
      {currentTableData
        ? currentTableData.map((item) => (
            <div className='d-flex align-items-center justify-content-sm-between bonus-trans-item border-bottom p-1 p-md-2'>
              <div className='bonus-trans-item__icon width-100 d-none d-md-block'>
                {item.bonusWithDrawvalTypeDTO !== undefined ? (
                  <img
                    className='width-50 height-50'
                    src={getIconByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id)}
                    alt=''
                  />
                ) : (
                  <img
                    className='width-50 height-50'
                    src={getIconByContractName(item.contractName)}
                    alt=''
                  />
                )}
              </div>
              <div className='bonus-trans-item__content flex-grow-1'>
                {item.bonusWithDrawvalTypeDTO !== undefined ? (
                  <div className='__title mb-1'>
                    <div className='font-medium-2 mb-1'>
                      <FormattedMessage id='menu.contract' /> {item.contractName}
                    </div>
                    <div>{getTitleByBonusWithDrawvalType(item.bonusWithDrawvalTypeDTO.id)}</div>
                  </div>
                ) : (
                  <div className='__title mb-1'>
                    <div className='font-medium-2 mb-1'>
                      <FormattedMessage id='menu.contract' /> {item.contractName}
                    </div>
                    <div>
                      <FormattedMessage id='bonusPoint.bonus' />
                    </div>
                  </div>
                )}
                <div className='__created-date font-small-2'>
                  {moment(item.createdDate).format('DD/MM/YYYY')}
                </div>
              </div>
              <div className='bonus-trans-item__value width-200 font-medium-4 text-right'>
                {item.bonusWithDrawvalTypeDTO ? (
                  <span>
                    {'- '}
                    {numberFormat(item.value)}
                  </span>
                ) : (
                  <span className='text-success'>
                    {'+ '}
                    {numberFormat(item.bonusValue)}
                  </span>
                )}
              </div>
            </div>
          ))
        : null}
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={items.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default BonusPointItem
