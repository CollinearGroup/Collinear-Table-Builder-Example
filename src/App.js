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
import {
  TableWithHidingConfiguration,
  TableWithHeadingsConfiguration,
} from './advanced-tables'
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
      <div className="example-segment">
        <div className="table-example-title">
          Table With Headings Configuration
        </div>
        <TableWithHeadingsConfiguration data={mockData} />
      </div>
      <div className="example-segment">
        <div className="table-example-title">
          Table With Hiding Configuration
        </div>
        <div className="table-example-description">
          The Hiding Configuration enables the capture of the "setHidden" and
          "onHiddenUpdate" methods. Here the "setHidden" is utilized to have the
          "city" column initially hidden. The "onHiddenUpdate" is being utilized
          to console.log the updated hidden columns.
        </div>
        <TableWithHidingConfiguration />
      </div>
    </div>
  )
}

export default App
