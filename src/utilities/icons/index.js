import React from 'react'
import { Icon } from 'react-icons-kit'
import { sortAsc } from 'react-icons-kit/fa/sortAsc'
import { sortDesc } from 'react-icons-kit/fa/sortDesc'
import { unsorted } from 'react-icons-kit/fa/unsorted'
import { gear } from 'react-icons-kit/fa/gear'
import { eye } from 'react-icons-kit/fa/eye'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import './icons.css'

const iconBuilder = (icon, className, key) => (
  <Icon className={className} key={key} icon={icon} />
)

export const SortAscendingIcon = iconBuilder(
  sortAsc,
  'sort-icon',
  'sort-asc-icon',
)

export const SortDescendingIcon = iconBuilder(
  sortDesc,
  'sort-icon',
  'sort-desc-icon',
)

export const SortDefaultIcon = iconBuilder(
  unsorted,
  'sort-icon',
  'sort-default-icon',
)

export const GearIcon = iconBuilder(gear, 'hide-control')

export const VisibleIcon = iconBuilder(eye, 'hide-dropdown-icon')

export const HiddenIcon = iconBuilder(eyeSlash, 'hide-dropdown-icon')
