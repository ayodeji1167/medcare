import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { ReactComponent as TempIcon } from '@/assets/icons/patients/temperature.svg';
import { ReactComponent as BpIcon } from '@/assets/icons/patients/blood-pressure.svg';
import { ReactComponent as BsIcon } from '@/assets/icons/patients/blood-sugar.svg';
import { ReactComponent as HrpIcon } from '@/assets/icons/patients/heart-rate.svg';
function Item({ name, value, icon, unit }) {
  return (
    <Box h={'3.6rem'} p={'.5rem'}>
      <Flex mb={'.6rem'} gap={'.5rem'} alignItems={'center'}>
        <Center boxSize={'1rem'} bg={'#E9F1FE'} rounded={'.25rem'}>
          <Icon boxSize={'.5rem'} as={icon} />
        </Center>
        <Text color={'#9F9F9F'} fontSize={'.5rem'}>
          {name}
        </Text>
      </Flex>
      <Flex gap={'.15rem'} alignItems={'flex-end'}>
        <Text fontSize={'1.1rem'} lineHeight={'1.1rem'} fontWeight={600}>
          {value}
        </Text>
        <Text fontSize={'.5rem'} color={'#9F9F9F'} fontWeight={600}>
          {unit}
        </Text>
      </Flex>
    </Box>
  );
}

export default function MedicalInformation() {
  return (
    <Box>
      <Flex
        mb={'1.5rem'}
        bg={'white'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        rounded={'.5rem'}
        py={'1rem'}
        px={'1.5rem'}
        alignItems={'center'}
        h={'5.6rem'}
      >
        <Box flex={1}>
          <Item name="Body temperature" value="36.5" unit="c" icon={TempIcon} />
        </Box>
        <Box flex={1}>
          <Item
            name="Blood pressure"
            value="80/120"
            unit="mmHg"
            icon={BpIcon}
          />
        </Box>
        <Box flex={1}>
          <Item name="Heart beat rate" value="80" unit="bpm" icon={HrpIcon} />
        </Box>
        <Box flex={1}>
          <Item name="Blood sugar" value="100" unit="mg/dl" icon={BsIcon} />
        </Box>
      </Flex>

      <Flex
        bg={'white'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        rounded={'.5rem'}
        py={'1rem'}
        px={'1.5rem'}
        alignItems={'center'}
        gap={'1.6rem'}
        justifyContent={'space-between'}
      >
        {[
          'Medical info',
          'Hospital stay info',
          'Medical history',
          'Reports',
        ].map((item) => {
          return (
            <Center
              flex={1}
              h={'2.5rem'}
              rounded={'.5rem'}
              color={'#2F2F2F'}
              fontSize={'.75rem'}
              cursor={'pointer'}
              _hover={{
                color: 'white',
                bg: 'primary.500',
                fontWeight: 600,
              }}
            >
              {item}
            </Center>
          );
        })}
      </Flex>
    </Box>
  );
}
