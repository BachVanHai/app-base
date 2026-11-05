import React, {useState} from 'react'
import {Card, CardBody, CardHeader, CardTitle, Collapse} from 'reactstrap'
import classnames from 'classnames'
import {FormattedMessage, useIntl} from 'react-intl'
import {ChevronDown} from 'react-feather'

const InfoItems = ({data, type}) => {
  const intl = useIntl()
  const [state, setState] = useState({
    collapseID: '',
    status: 'Closed'
  })

  const toggleCollapse = (collapseID) => {
    collapseID = state.collapseID !== collapseID ? collapseID : ''
    setState({...state, collapseID})
  }

  const onEntered = (id) => {
    if (id === state.collapseID) setState({...state, status: 'Opened'})
  }
  const onEntering = (id) => {
    if (id === state.collapseID) setState({...state, status: 'Opening...'})
  }

  const onExited = (id) => {
    if (id === state.collapseID) setState({...state, status: 'Closed'})
  }

  const onExiting = (id) => {
    if (id === state.collapseID) setState({...state, status: 'Closing...'})
  }
  return data.map((item1) => (
    <div className='collapse-margin' key={item1.id}>
      <Card
        onClick={() => toggleCollapse(item1.id)}
        className={classnames({
          'collapse-collapsed':
            state.status === 'Closed' && state.collapseID === item1.id,
          'collapse-shown':
            state.status === 'Opened' && state.collapseID === item1.id,
          closing:
            state.status === 'Closing...' && state.collapseID === item1.id,
          opening:
            state.status === 'Opening...' && state.collapseID === item1.id
        })}
      >
        <CardHeader className='p-1'>
          <CardTitle className='lead collapse-title collapsed col-11 p-0"'>
            <FormattedMessage id={`generalInfo.${type}.${item1.id}`}/>
          </CardTitle>
          <ChevronDown size={15} className='collapse-icon'/>
        </CardHeader>
        <Collapse
          isOpen={item1.id === state.collapseID}
          onEntering={() => onEntering(item1.id)}
          onEntered={() => onEntered(item1.id)}
          onExiting={() => onExiting(item1.id)}
          onExited={() => onExited(item1.id)}
        >
          <CardBody>
            {item1.items.map((item2) => (
              <React.Fragment>
                <p
                  className='ml-1'
                  key={item2.id}
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: `generalInfo.${type}.${item1.id}.${item2.id}`
                    })
                  }}
                />
                {item2.items
                  ? item2.items.map((item3) => (
                    <p
                      className='ml-2'
                      key={item3.id}
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                          id: `generalInfo.${type}.${item1.id}.${item2.id}.${item3.id}`
                        })
                      }}
                    />
                  ))
                  : ''}
              </React.Fragment>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </div>
  ))
}

export default InfoItems
