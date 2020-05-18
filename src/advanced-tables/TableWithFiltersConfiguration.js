import {
  Table,
  withHeadings,
  withFiltering,
  customFilterBuilder,
  SelectionInput,
  NumericalInput,
  DateInput,
} from '@collineargroup/collinear-table-builder'

const filterComponents = customFilterBuilder
  .add('state', SelectionInput)
  .add('price', NumericalInput)
  .initialValue(0)
  .filter((a, b) => a >= b)
  .add('last_update', DateInput)
  .create()

export const TableWithFiltersConfiguration = withHeadings(
  withFiltering(Table, filterComponents),
)
