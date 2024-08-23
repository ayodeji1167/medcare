import CustomTable from '@/components/table/CustomTable';
import { medicalHistory } from '@/data/medical-history';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { columnDef } from './column-def';

export default function MedicalHistory() {
  return (
    <Box
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      rounded={'.5rem'}
      p={'1.5rem'}
      pb={0}
    >
      <Text fontWeight={500} fontSize={'.75rem'}>
        Family medical history
      </Text>
      <CustomTable
        thProps={{
          pl: 0,
        }}
        tdProps={{
          pt: '1rem',
        }}
        data={medicalHistory}
        columnDef={columnDef}
      />
    </Box>
  );
}
