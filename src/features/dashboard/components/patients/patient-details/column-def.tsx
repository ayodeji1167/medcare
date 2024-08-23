import { Box } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();
export const columnDef = [
  columnHelper.accessor('id', {
    header: 'Patient ID',
    id: 'Patient ID',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),

  columnHelper.accessor('conditionName', {
    header: 'Condition name',
    id: 'conditionName',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
  columnHelper.display({
    header: 'Patient name',
    id: 'Patient name',
    cell: (props) => (
      <Box>
        {props.row.original.firstName}
        {props.row.original.lastName}
      </Box>
    ),
  }),
  columnHelper.accessor('relationship', {
    header: 'Relationship',
    id: 'relationship',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
];
