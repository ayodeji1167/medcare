import { Box, Center, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { ReactComponent as CalendarIcon } from '@/assets/icons/dashboard/black-calendar.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/dashboard/location.svg';
import { ReactComponent as DotIcon } from '@/assets/icons/dashboard/dot.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/dashboard/user.svg';
function CountDownItem({ value }: { value: number }) {
  return (
    <Center
      h={'1.5rem'}
      w={'1.375rem'}
      bg={'#E9F1FE'}
      color={'primary.500'}
      fontWeight={'600'}
      fontSize={'.75rem'}
      rounded={'.25rem'}
    >
      {value}
    </Center>
  );
}
export default function NextAppointment() {
  return (
    <Box
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      p={'1.5rem'}
      rounded={'.5rem'}
      h={'14rem'}
      bg={'white'}
    >
      <Text mb={'1rem'} variant={'componentHeading'}>
        Next appointment
      </Text>
      <Flex alignItems={'center'}>
        <Stack>
          <Text variant={'grey'} fontSize={'.5rem'}>
            Countdown
          </Text>
          <Flex alignItems={'center'} gap={'.25rem'}>
            <CountDownItem value={13} />
            <Text fontWeight={600} color={'primary.500'}>
              :
            </Text>
            <CountDownItem value={43} />
            <Text fontWeight={600} color={'primary.500'}>
              :
            </Text>
            <CountDownItem value={12} />
          </Flex>
        </Stack>

        <Flex ml={'auto'} alignItems={'center'} gap={'.75rem'} mt={'1rem'}>
          <Icon boxSize={'.8rem'} as={LocationIcon} />
          <Center w={'2.6rem'} h={'1.5rem'} bg={'#E9F1FE'} rounded={'.25rem'}>
            <Text size={'sm'} color={'primary.500'}>
              Online
            </Text>
          </Center>
        </Flex>
      </Flex>

      <Box mt={'1rem'}>
        <Flex mb={'.5rem'} gap={'.52rem'} alignItems={'center'}>
          <Icon boxSize={'.8rem'} as={UserIcon} />
          <Flex gap={'.25rem'} alignItems={'center'}>
            <Text variant={'grey'} size={'sm'}>
              Dr In-charge:
            </Text>
            <Text variant={'grey'} size={'sm'}>
              Dr. Abel Damina
            </Text>
          </Flex>
        </Flex>
        <Flex gap={'.52rem'} alignItems={'center'}>
          <Icon boxSize={'.8rem'} as={CalendarIcon} />
          <Flex gap={'.25rem'} alignItems={'center'}>
            <Text variant={'grey'} size={'sm'}>
              10 Nov, 2024
            </Text>
            <Icon boxSize={'.3rem'} as={DotIcon} />
            <Text variant={'grey'} size={'sm'}>
              12:00pm WAT
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Flex alignItems={'center'} gap={'.75rem'} mt={'1rem'}>
        <Icon boxSize={'.8rem'} as={LocationIcon} />
        <Center w={'2.6rem'} h={'1.5rem'} bg={'#E9F1FE'} rounded={'.25rem'}>
          <Text size={'sm'} color={'primary.500'}>
            Online
          </Text>
        </Center>
      </Flex>
    </Box>
  );
}
