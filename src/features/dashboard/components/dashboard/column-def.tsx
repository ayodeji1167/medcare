import Status from '@/components/ui/Status';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();
export const columnDef = [
  columnHelper.display({
    header: 'Patient name',
    id: 'Patient name',
    cell: (props) => {
      const data = props.row.original;
      return (
        <Flex alignItems={'center'}>
          <Box mr={'.5rem'} w={'2.5rem'}>
            <Image
              src={data?.image}
              alt="doctor-image"
              rounded={'100%'}
              h={'100%'}
              w={'100%'}
            />
          </Box>
          <Box>
            <Text lineHeight={'1rem'} fontSize={'md'} fontWeight={600}>
              {data.firstName} {data.lastName}
            </Text>
            <Flex alignItems={'center'} gap={'.5rem'}>
              <Text lineHeight={'1rem'} variant={'grey'} fontSize={'.5rem'}>
                Gender: {data.gender}
              </Text>
              <Text lineHeight={'1rem'} variant={'grey'} fontSize={'.5rem'}>
                Age: {data.age}
              </Text>
            </Flex>
          </Box>
        </Flex>
      );
    },
  }),
  columnHelper.accessor('id', {
    header: 'Patient ID',
    id: 'Patient ID',
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
  columnHelper.accessor('time', {
    header: 'Time',
    id: 'Time',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
  columnHelper.accessor('type', {
    header: 'Type',
    id: 'Type',
    cell: (info) => <Box>{info.getValue()}</Box>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    id: 'status',
    cell: (info) => <Status name={info.getValue()} />,
  }),
];
