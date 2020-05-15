import {
  Table,
  withHeadings,
  withHiding,
} from '@collineargroup/collinear-table-builder'

export const buildTableWithHiding = (config = {}) =>
  withHeadings(withHiding(Table, config))

export const buildTableWithHeadings = (config = {}) =>
  withHeadings(Table, config)
