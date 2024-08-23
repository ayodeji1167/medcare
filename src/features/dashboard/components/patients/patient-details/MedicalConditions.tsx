import {
  Center,
  Flex,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function MedicalConditions() {
  return (
    <SimpleGrid gap={'1.5rem'} columns={2}>
      <GridItem
        p={'1.5rem'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        bg={'white'}
        rounded={'.5rem'}
        pt={'1.9rem'}
      >
        <Text mb={'.8rem'} fontSize={'.75rem'} fontWeight={500}>
          Current Medical Conditions
        </Text>
        <Stack spacing={'.8rem'} py={'.8rem'}>
          <Text fontSize={'.75rem'}>Hypertension</Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Diagnosed: March 2018
          </Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Treatment Plan: Medication (Lisinopril)
          </Text>
          <Flex alignItems={'center'} gap={'.5rem'}>
            <Text color={'#9F9F9F'} fontSize={'.75rem'}>
              Status:
            </Text>
            <Center w={'2.6rem'} h={'1.5rem'} bg={'#E9F1FE'} rounded={'.25rem'}>
              <Text size={'sm'} color={'primary.500'}>
                Stable
              </Text>
            </Center>
          </Flex>
        </Stack>
      </GridItem>
      <GridItem
        p={'1.5rem'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        bg={'white'}
        rounded={'.5rem'}
        pt={'1.9rem'}
      >
        <Flex
          mb={'.8rem'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'.75rem'} fontWeight={500}>
            Current Medications{' '}
          </Text>
          <Center
            border={'1px solid #2075F6'}
            h={'1.5rem'}
            w={'3.6rem'}
            rounded={'.25rem'}
            fontSize={'.75rem'}
            fontWeight={500}
            color={'#2075F6'}
            cursor={'pointer'}
          >
            View all
          </Center>
        </Flex>
        <Stack spacing={'.8rem'} py={'.8rem'}>
          <Text fontSize={'.75rem'}>Metformin</Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Dosage: 500 mg{' '}
          </Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Frequency: Twice daily{' '}
          </Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Prescribing Physician: Dr. John Doe{' '}
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        p={'1.5rem'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        bg={'white'}
        rounded={'.5rem'}
        pt={'1.9rem'}
      >
        <Flex
          mb={'.8rem'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'.75rem'} fontWeight={500}>
            Allergies
          </Text>
          <Center
            border={'1px solid #2075F6'}
            h={'1.5rem'}
            w={'3.6rem'}
            rounded={'.25rem'}
            fontSize={'.75rem'}
            fontWeight={500}
            color={'#2075F6'}
            cursor={'pointer'}
          >
            View all
          </Center>
        </Flex>
        <Stack spacing={'.8rem'} py={'.8rem'}>
          <Text fontSize={'.75rem'}>Penicillin</Text>

          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Reaction: Rash
          </Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Severity: Moderate
          </Text>
        </Stack>
      </GridItem>
      <GridItem
        p={'1.5rem'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        bg={'white'}
        rounded={'.5rem'}
        pt={'1.9rem'}
      >
        <Flex
          mb={'.8rem'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'.75rem'} fontWeight={500}>
            Recent Test Results
          </Text>
          <Center
            border={'1px solid #2075F6'}
            h={'1.5rem'}
            w={'3.6rem'}
            rounded={'.25rem'}
            fontSize={'.75rem'}
            fontWeight={500}
            color={'#2075F6'}
            cursor={'pointer'}
          >
            View all
          </Center>
        </Flex>
        <Stack spacing={'.8rem'} py={'.8rem'}>
          <Text fontSize={'.75rem'}>Recent Test Results</Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Date: May 2024
          </Text>
          <Text color={'#9F9F9F'} fontSize={'.75rem'}>
            Result: Normal
          </Text>
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
}
