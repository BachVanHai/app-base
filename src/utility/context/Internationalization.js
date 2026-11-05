import React from 'react'
import { IntlProvider } from 'react-intl'

const Context = React.createContext()

class IntlProviderWrapper extends React.Component {
  state = {
    locale: this.props.locale,
    messages: this.props.appMessage[this.props.locale]
  }

  render() {
    const { children } = this.props
    const { locale, messages } = this.state
    return (
      <Context.Provider
        value={{
          state: this.state,
          switchLanguage: (language) => {
            localStorage.setItem('language', language);
            this.setState({
              locale: language,
              messages: this.props.appMessage[language]
            })
          }
        }}
      >
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale='vi'
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    )
  }
}

export { IntlProviderWrapper, Context as IntlContext }
