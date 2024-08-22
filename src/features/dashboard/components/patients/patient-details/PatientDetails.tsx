import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import PersonalInformation from './PersonalInformation';
import Schedule from '../../dashboard/Schedule';
import MedicalInformation from './MedicalInformation';
import MedicalConditions from './MedicalConditions';
import MedicalHistory from './MedicalHistory';
import NextAppointment from './NextAppointment';

export function PatientDetails() {
  return (
    <Box pt={'2.5rem'}>
      <Text fontSize={'1.5rem'} fontWeight={600}>
        Patients
      </Text>
      <Flex gap={'1.5rem'}>
        <Stack spacing={'1.5rem'} flexBasis={'30%'}>
          <PersonalInformation />
          <NextAppointment />
          <Schedule />
        </Stack>

        <Stack flex={1}>
          <MedicalInformation />
          <Flex>
            <Text>Last updated:</Text>
            <Text>23 November, 2023</Text>
          </Flex>
          <MedicalConditions />
          <MedicalHistory />
        </Stack>
      </Flex>
    </Box>
  );
}
