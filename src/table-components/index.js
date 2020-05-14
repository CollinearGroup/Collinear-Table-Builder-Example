import {
  Table,
  withHeadings,
  withHiding,
  withFiltering,
} from '@collineargroup/collinear-table-builder'

export const BaseTable = Table

export const TableWithHeadings = withHeadings(Table)

export const TableWithHiding = withHeadings(withHiding(Table))

export const TableWithFiltering = withHeadings(withFiltering(Table))
