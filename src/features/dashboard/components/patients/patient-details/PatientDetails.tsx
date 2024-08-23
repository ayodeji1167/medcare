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
      <Text mb={'1rem'} fontSize={'1.5rem'} fontWeight={600}>
        Patients
      </Text>
      <Flex gap={'1.5rem'}>
        <Stack spacing={'1.5rem'} flexBasis={'30%'}>
          <PersonalInformation />
          <NextAppointment />
          <Schedule />
        </Stack>

        <Stack spacing={'1.5rem'} flex={1}>
          <MedicalInformation />
          <Flex gap={'.5rem'}>
            <Text color={'#9F9F9F'} fontSize={'.75rem'}>
              Last updated:
            </Text>
            <Text fontSize={'.75rem'}>23 November, 2023</Text>
          </Flex>
          <MedicalConditions />
          <MedicalHistory />
        </Stack>
      </Flex>
    </Box>
  );
}
