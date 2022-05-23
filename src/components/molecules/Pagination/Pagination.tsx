/* eslint-disable react/jsx-props-no-spreading */

import TablePagination, {
  TablePaginationProps,
} from '@mui/material/TablePagination'

export interface IPaginationProps {}

const Pagination = ({
  count,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  ...props
}: TablePaginationProps) => (
  <TablePagination
    component='div'
    count={count}
    page={page}
    // className='overflow-hidden border-2 border-l divide-x divide-white'
    onPageChange={onPageChange}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={onRowsPerPageChange}
    classes={{
      root: 'overflow-hidden',
      displayedRows: 'font-sans',
      selectLabel: 'font-sans',
      toolbar: 'min-h-min  ',
      actions: ' border-l border-white',
    }}
    {...props}
  />
)

export default Pagination
