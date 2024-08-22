import CustomTable from '@/components/table/CustomTable';
import { schedules } from '@/data/schedules';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { columnDef } from './column-def';

export default function TodaySchedule() {
  return (
    <Box
      bg={'white'}
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      gridRow={'2/4'}
      h={'24rem'}
      p={'1.5rem'}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontWeight={500} size={'md'}>
          Today’s scheldule
        </Text>
        <Text
          cursor={'pointer'}
          fontWeight={500}
          color={'primary.500'}
          size={'md'}
        >
          See all
        </Text>
      </Flex>

      <Box>
        <CustomTable columnDef={columnDef} data={schedules} />
      </Box>
    </Box>
  );
}
