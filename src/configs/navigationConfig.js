import React from 'react'
import * as Icon from 'react-feather'
import {getExternalAppUrl} from "./app-configs";


const mapRoleListToNavConfigs = (roleList = []) => {
  if (!roleList.length) {
    return [];
  }
  roleList = roleList.filter((item) => item.order < 1000)
  const mapRoles = new Map()
  roleList.forEach((role) => {
    const listRole = mapRoles.get(role.parentId)
    const itemNav = mapRoleToNavItem(role)
    if (listRole) {
      listRole.push(itemNav)
      mapRoles.set(role.parentId, listRole)
    } else {
      mapRoles.set(role.parentId, [itemNav])
    }
  })
  const parentList = mapRoles.get(null)
  return parentList.map((item) => {
    item.children = mapRoles.get(item.id + '')
    return item
  })
}

const mapRoleToNavItem = (role) => {
  const IconTag = Icon[role.icon]
  const item = {}
  item.id = role.id
  item.type = 'item'
  item.code = role.code
  item.appId = role.appId
  item.title = `menu.${role.keyLang}`
  item.icon = <IconTag  size={20} />
  item.navLink = getExternalAppUrl(role.appId, role.menuPath)
  if (role.isHighlight) {
    item.badge = 'primary'
    item.badgeText = 'new'
  }
  return item
}

const getNativgationConfig = (appId, navConfigs) => {
  if (!navConfigs) {
    navConfigs = [...navigationConfig]
  } else {
    navConfigs = mapRoleListToNavConfigs(navConfigs)
  }
  return navConfigs.map((item) => {
    item.isExternalApp = false
    if (item.children) {
      item.children.map(
        (child) => (child.isExternalApp = false)
      )
      if (item.children.length === 1) {
        item.navLink = item.children[0].navLink
      } else {
        item.type = 'collapse'
      }
    }
    return item
  })
}

export default getNativgationConfig
