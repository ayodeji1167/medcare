import CustomSelect from '@/components/input/CustomSelect';
import { departmentOptions } from '@/data/options';
import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { ReactComponent as RightIcon } from '@/assets/icons/patients/arrow-right.svg';
import { ReactComponent as LeftIcon } from '@/assets/icons/patients/arrow-left.svg';
import CustomTable from '@/components/table/CustomTable';
import { columnDef } from './column-def';
import { patients } from '@/data/patients';

export function Patients() {
  return (
    <Box pt={'2.5rem'}>
      <Text fontSize={'1.5rem'} fontWeight={600}>
        Patients
      </Text>
      <Box
        mt={'1.5rem'}
        p={'1.5rem'}
        boxShadow="0px 4px 50px 0px #E9F1FEB2"
        rounded={'.5rem'}
        mb={'4rem'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap={'1rem'} alignItems={'center'}>
            <Text fontWeight={500}>Filter by:</Text>
            <Box w={'14rem'}>
              <CustomSelect
                placeholder="Department"
                onChange={() => ''}
                options={departmentOptions}
                controlStyle={{
                  width: '100%',
                  height: `2rem`,
                  minHeight: `2rem`,
                  borderRadius: `6.2rem`,
                  fontSize: `.75rem`,
                  border: '1px solid #BFBFBF',
                  boxShadow: 'none',
                }}
              />
            </Box>
          </Flex>

          <Flex alignItems={'center'}>
            <Text fontSize={'.75rem'} alignItems={'center'}>
              1 - 10 of 1,123 patients
            </Text>
            <Flex alignItems={'center'} gap={'1rem'}>
              <Center w={'1.5rem'} cursor={'pointer'}>
                <Icon boxSize={'.625rem'} as={LeftIcon} color={'#EAEAEA'} />
              </Center>
              <Center w={'1.5rem'} cursor={'pointer'}>
                <Icon boxSize={'.625rem'} as={RightIcon} color={'#2075F6'} />
              </Center>
            </Flex>
          </Flex>
        </Flex>

        <CustomTable
          data={patients}
          columnDef={columnDef}
          thProps={{
            pl: 0,
          }}
          tdProps={{
            pt: '1rem',
          }}
        />
      </Box>
    </Box>
  );
}
