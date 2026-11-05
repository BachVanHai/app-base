import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux";
import {changeIsGuest} from "../../redux/actions/auth";
import {FormattedMessage} from "react-intl";

const AppSelection = ({isLogin}) => {

  const {isGuest} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onClickChangeAppType = (value) => {
    dispatch(changeIsGuest(value))
  }

  return (
    <div className='text-center mt-2 mb-3'>
      <p>
       <FormattedMessage id={isLogin ? 'socialLogin.youLoginAs' : 'socialLogin.youRegisterAs'} />
      </p>
      <ButtonGroup className='w-100'>
        <Button className='btn-app-selection left' active={!isGuest} type='button'
                onClick={() => onClickChangeAppType(false)}>
          <div className='icon mr-1'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
              <path d="M20 35V35.0167" stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M5 15V15.0167" stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M35 15V15.0167" stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path
                d="M13.3333 33.4999C11.0589 32.3906 9.1021 30.7238 7.64506 28.6548C6.18802 26.5858 5.2781 24.1818 5 21.6666"
                stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M26.6663 33.4999C28.9407 32.3906 30.8975 30.7238 32.3545 28.6548C33.8116 26.5858 34.7215 24.1818 34.9996 21.6666"
                stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M10.333 8.33345C13.0132 6.14004 16.3697 4.94164 19.833 4.94164C23.2963 4.94164 26.6529 6.14004 29.333 8.33345"
                stroke={!isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
            </svg>
          </div>
          <FormattedMessage id='socialLogin.agent'/>
        </Button>
        <Button className='btn-app-selection right' active={isGuest} onClick={() => onClickChangeAppType(true)} type='button'>
          <div className='icon mr-1'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.0005 18.4999C23.3143 18.4999 26.0007 15.8136 26.0007 12.4997C26.0007 9.1859 23.3143 6.49951 20.0005 6.49951C16.6866 6.49951 14.0002 9.1859 14.0002 12.4997C14.0002 15.8136 16.6866 18.4999 20.0005 18.4999Z"
                stroke={isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M10.9993 33.5004V30.5003C10.9993 28.9089 11.6314 27.3828 12.7567 26.2575C13.8819 25.1322 15.4081 24.5001 16.9995 24.5001H22.9997C24.5911 24.5001 26.1172 25.1322 27.2425 26.2575C28.3678 27.3828 28.9999 28.9089 28.9999 30.5003V33.5004"
                stroke={isGuest ? '#73C14F' : '#587471'} stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
            </svg>
          </div>
          <FormattedMessage id='socialLogin.personal'/>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default AppSelection
