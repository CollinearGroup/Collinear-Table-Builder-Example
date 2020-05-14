import React from 'react'
import './App.css'

import {
  BaseTable,
  TableWithHeadings,
  TableWithHiding,
  TableWithFiltering,
} from './table-components'
import { mockData } from './services/mock-data'

function App() {
  return (
    <div className="App">
      <div className="example-segment">
        <div className="table-example-title">Base Table</div>
        <BaseTable data={mockData} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">Table with Headings</div>
        <TableWithHeadings data={mockData} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">Table with Hiding</div>
        <div style={{ position: 'relative' }}>
          <TableWithHiding data={mockData} />
        </div>
      </div>
    </div>
  )
}

export default App
