import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const usePageAuthorities = () => {
  const [authorities, setAuthorities] = useState([])
  const { userRoles, roles } = useSelector((state) => state.navbar)
  const history = useHistory()
  useEffect(() => {
    const roleList = roles.filter((item) => history.location.pathname.includes(item.menuPath))
    if (!roleList.length) {
      return
    }
    roleList.sort((a, b) => a.id - b.id)
    const lastRole = roleList[roleList.length - 1]
    const userRoleList = userRoles.filter((item) => item.roleId === lastRole.id)
    const authList = userRoleList.map((item) => item.authority)
    setAuthorities(authList)
  }, [userRoles, roles, history.location.pathname])
  return authorities
}
