import {
  Table,
  withHeadings,
  withHiding,
  withFiltering,
  withSorting,
} from '@collineargroup/collinear-table-builder'

export const BaseTable = Table

export const TableWithHeadings = withHeadings(Table)

export const TableWithHiding = withHeadings(withHiding(Table))

export const TableWithFiltering = withHeadings(withFiltering(Table))

export const TableWithSorting = withHeadings(withSorting(Table))

export const FullyEnhancedBasicTable = withHeadings(
  withSorting(withHiding(withFiltering(Table))),
)
