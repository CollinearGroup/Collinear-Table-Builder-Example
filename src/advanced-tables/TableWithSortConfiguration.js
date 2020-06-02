import {
  Table,
  withHeadings,
  withSorting,
} from '@collineargroup/collinear-table-builder'

import {
  SortAscendingIcon,
  SortDescendingIcon,
  SortDefaultIcon,
} from '../utilities'

const TableWithSortingConfiguration = withHeadings(
  withSorting(Table, {
    sortAscendingIcon: SortAscendingIcon,
    sortDescendingIcon: SortDescendingIcon,
    unsortedIcon: SortDefaultIcon,
  }),
)

export default TableWithSortingConfiguration
