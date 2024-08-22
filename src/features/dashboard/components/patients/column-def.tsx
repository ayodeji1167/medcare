import Status from '@/components/ui/Status';
import { Box, Flex, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper<any>();
export const columnDef = [
  columnHelper.accessor('id', {
    header: 'Patient ID',
    id: 'Patient ID',
    cell: (info) => (
      <Link to={`/patients/${String(info.getValue()).slice(1)}`}>
        <Box>{info.getValue()}</Box>
      </Link>
    ),
  }),
  columnHelper.display({
    header: 'Patient name',
    id: 'patient-name',
    cell: (props) => {
      const data = props.row.original;
      return (
        <Link to={`/patients/${String(data.id).slice(1)}`}>
          <Box cursor={'pointer'}>
            <Box>
              {data.firstName} {data.lastName}
            </Box>
            <Flex alignItems={'center'} gap={'.5rem'}>
              <Text lineHeight={'1rem'} variant={'grey'} fontSize={'.5rem'}>
                Gender: {data.gender}
              </Text>
              <Text lineHeight={'1rem'} variant={'grey'} fontSize={'.5rem'}>
                Age: {data.age}
              </Text>
            </Flex>
          </Box>
        </Link>
      );
    },
  }),
  columnHelper.accessor('lastCheckedIn', {
    header: 'Last check in',
    id: 'Last check in',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
  columnHelper.accessor('diagnosedWith', {
    header: 'Diagnose with',
    id: 'Diagnose with',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
  columnHelper.display({
    header: 'Dr in-charge',
    id: 'Dr in-charge',
    cell: (props) => {
      const data = props.row.original;
      return (
        <Box>
          <Box lineHeight={'1rem'}>{data.drInCharge}</Box>
          <Text lineHeight={'1rem'} variant={'grey'} fontSize={'.5rem'}>
            {data.department}
          </Text>
        </Box>
      );
    },
  }),

  columnHelper.accessor('status', {
    header: 'Status',
    id: 'status',
    cell: (info) => <Status name={info.getValue()} />,
  }),
];
