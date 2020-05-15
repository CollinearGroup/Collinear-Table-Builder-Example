import { buildTableWithHiding } from '../table-builders'

import React from 'react'
import { mockData } from '../services/mock-data'

let setHidden
let onHiddenUpdate
const EnhancedTable = buildTableWithHiding({
  stateHandler: (setState, onUpdate) => {
    setHidden = setState
    onHiddenUpdate = onUpdate
  },
})

const TableWithHidingConfiguration = () => {
  onHiddenUpdate((value) => console.log(value))
  setHidden(['city'])

  return <EnhancedTable data={mockData} />
}

export default TableWithHidingConfiguration
