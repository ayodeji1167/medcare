import { lineChartData, lineChartOptions, stats } from '@/data/dashboard';
import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { ReactComponent as IncreaseIcon } from '@/assets/icons/dashboard/increase.svg';
import { ReactComponent as DecreaseIcon } from '@/assets/icons/dashboard/decrease.svg';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function StatItem({ description, value, percentage, icon, increased }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      flex={1}
      rounded={'.5rem'}
      h={'3.75rem'}
      p={'.5rem'}
      bg={isHovered ? 'primary.500' : 'transparent'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex mb={'.5rem'} alignItems={'center'} gap={'.5rem'}>
        <Center bg={'#E9F1FE'} boxSize={'1rem'} rounded={'.25rem'}>
          <Icon boxSize={'.5rem'} as={icon} />
        </Center>
        <Text color={isHovered ? 'white' : '#9F9F9F'} fontSize={'.5rem'}>
          {description}
        </Text>
      </Flex>

      <Flex alignItems={'center'} gap={'.5rem'}>
        <Text color={isHovered ? 'white' : '#2F2F2F'} fontWeight={600}>
          {value}
        </Text>
        <Center
          bg={isHovered ? 'white' : 'transparent'}
          h={'1.25rem'}
          rounded={'.25rem'}
          w={'2.5rem'}
          gap={'.1rem'}
        >
          <Icon
            boxSize={'.3rem'}
            as={increased ? IncreaseIcon : DecreaseIcon}
          />
          <Text
            fontWeight={600}
            fontSize={'.5rem'}
            color={increased ? '#169D00' : '#D50000'}
          >
            {percentage}%
          </Text>
        </Center>
      </Flex>
    </Box>
  );
}
export default function Chart() {
  const [chartData, setChartData] = useState<any>([]);
  const [chartOptions, setChartOptions] = useState<any>({});
  const [duration, setDuration] = useState('monthly');

  useEffect(() => {
    setChartData(lineChartData);
    setChartOptions(lineChartOptions);
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <Box
      p={'1.5rem'}
      boxShadow="0px 4px 50px 0px #E9F1FEB2"
      h={'34rem'}
      bg={'white'}
      rounded={'1.5rem'}
    >
      <Text
        mb={'1.5rem'}
        fontWeight={500}
        color={'#2F2F2F'}
        fontSize={'.875rem'}
      >
        Patient summary
      </Text>
      <Flex gap={'1.6rem'}>
        {stats.map((item) => (
          <StatItem {...item} key={item.description + '' + item.value} />
        ))}
      </Flex>
      <Box height={'17rem'} mt={'1.5rem'}>
        <ReactApexChart
          options={chartOptions}
          series={chartData}
          type="area"
          width="100%"
          height="100%"
        />
      </Box>

      <Flex px={'1.5rem'} mt={'2rem'} alignItems={'center'} gap={'1.6rem'}>
        {['today', 'weekly', 'monthly', 'yearly'].map((item) => {
          const isActive = item == duration;
          return (
            <Center
              rounded={'.5rem'}
              flex={1}
              bg={isActive ? 'primary.500' : 'transparent'}
              key={item}
              textTransform={'capitalize'}
              color={isActive ? 'white' : '#2F2F2F'}
              fontSize={'.75rem'}
              h={'2.5rem'}
              onClick={() => setDuration(item)}
              cursor={'pointer'}
              fontWeight={isActive ? 600 : 400}
            >
              {item?.toLowerCase()}
            </Center>
          );
        })}
      </Flex>
    </Box>
  );
}
