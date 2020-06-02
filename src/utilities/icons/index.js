import React from 'react'
import { Icon } from 'react-icons-kit'
import { sortAsc } from 'react-icons-kit/fa/sortAsc'
import { sortDesc } from 'react-icons-kit/fa/sortDesc'
import { unsorted } from 'react-icons-kit/fa/unsorted'
import './icons.css'

const sortIconBuilder = (icon, key) => (
  <div className="sort-icon" key={key}>
    <Icon icon={icon} />
  </div>
)

export const SortAscendingIcon = sortIconBuilder(sortAsc, 'sort-asc-icon')

export const SortDescendingIcon = sortIconBuilder(sortDesc, 'sort-desc-icon')

export const SortDefaultIcon = sortIconBuilder(unsorted, 'sort-default-icon')
