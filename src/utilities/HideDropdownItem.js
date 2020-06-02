import React from 'react'

import { VisibleIcon, HiddenIcon } from './'

export const HideDropdownItem = ({ heading, onClick, classNames }: Props) => {
  const [, formattedHeader, isVisible] = heading
  return (
    <div className={classNames.join(' ')} onClick={onClick}>
      {formattedHeader}
      {isVisible ? VisibleIcon : HiddenIcon}
    </div>
  )
}
