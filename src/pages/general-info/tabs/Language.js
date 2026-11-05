import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Radio from '../../../components/Radio'
import { useDispatch } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'
import { goBackHomePage } from '../../../redux/actions/navbar/Index'
import { IntlContext } from '../../../utility/context/Internationalization'
import { changeLanguageSetting } from '../../../redux/actions/auth'
import { showConfirmAlert } from '../../../redux/actions/ui/Index'

const LanguageTab = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const [lang, setLang] = useState(localStorage.getItem('language'))

  const onClickBackHome = () => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='common.home' />,
        isShow: true,
        content: <FormattedMessage id='common.backHome.confirmMessage' />,
        onConfirm: () => {
          dispatch(goBackHomePage())
        }
      })
    )
  }

  const onClickSaveChange = (context) => {
    dispatch(
      showConfirmAlert({
        title: <FormattedMessage id='setting.language' />,
        isShow: true,
        content: <FormattedMessage id='generalInfo.changeLanguage.confirmMessage' />,
        onConfirm: () => {
          dispatch(changeLanguageSetting(lang, () => context.switchLanguage(lang)))
        }
      })
    )
  }

  return (
    <IntlContext.Consumer>
      {(context) => (
        <Row className='mt-3'>
          <Col className='mx-auto col-6'>
            <div>
              <Radio
                label={intl.formatMessage({ id: 'navbar.language.vi' })}
                color='primary'
                onChange={() => setLang('vi')}
                defaultChecked={context.state.locale === 'vi'}
                name='lang'
              />
            </div>
            <div className='mt-2'>
              <Radio
                label={intl.formatMessage({ id: 'navbar.language.en' })}
                color='primary'
                onChange={() => setLang('en')}
                defaultChecked={context.state.locale === 'en'}
                name='lang'
              />
            </div>
          </Col>
          <Col className='d-flex justify-content-end mt-3' sm='12'>
            <Button.Ripple
              type='button'
              color='secondary'
              onClick={onClickBackHome}
            >
              <FormattedMessage id={`common.home`} />
            </Button.Ripple>

            <Button.Ripple
              className='ml-2'
              onClick={() => onClickSaveChange(context)}
              color='primary'
            >
              <FormattedMessage id={`common.saveChanges`} />
            </Button.Ripple>
          </Col>
        </Row>
      )}
    </IntlContext.Consumer>
  )
}
export default LanguageTab
