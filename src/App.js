import React from 'react'
import './App.css'

import {
  BaseTable,
  TableWithHeadings,
  TableWithHiding,
  TableWithFiltering,
  TableWithSorting,
  FullyEnhancedBasicTable,
} from './basic-tables'
import { createSorter } from './table-utilities'
import { mockData } from './services/mock-data'

function App() {
  const sorter = createSorter()
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
        <TableWithHiding data={mockData} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">Table with Filtering</div>
        <TableWithFiltering data={mockData} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">Table with Sorting</div>
        <TableWithSorting data={mockData} sorter={sorter} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">Fully Enhanced Basic Table</div>
        <FullyEnhancedBasicTable data={mockData} sorter={sorter} />
      </div>
    </div>
  )
}

export default App
