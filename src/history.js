import { createBrowserHistory } from 'history'
export let history = createBrowserHistory({ basename: '' })

export const setBaseHistory = (appHistory) => {
    history = appHistory
}
