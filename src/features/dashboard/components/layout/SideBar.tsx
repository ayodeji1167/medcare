import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '@/assets/icons/sidebar/dashboard.svg';
import { ReactComponent as PatientsIcon } from '@/assets/icons/sidebar/patients.svg';
import { ReactComponent as MessagesIcon } from '@/assets/icons/sidebar/messages.svg';
import { ReactComponent as AppointmentsIcon } from '@/assets/icons/sidebar/appointments.svg';

function NavItem({ name, slug, icon, path }) {
  const { pathname } = useLocation();
  const finalPathname = pathname === '/' ? '/dashboard' : pathname;
  const isActivePath = finalPathname.includes(slug);
  return (
    <Link to={path}>
      <Flex
        pl={'1.1rem'}
        h={'3rem'}
        rounded={'.5rem'}
        gap={'.5rem'}
        bg={isActivePath ? 'primary.500' : 'transparent'}
        alignItems={'center'}
      >
        <Icon color={isActivePath ? 'white' : '#9F9F9F'} as={icon} />
        <Text
          fontWeight={isActivePath ? '600' : '400'}
          color={isActivePath ? 'white' : '#9F9F9F'}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
}
export default function SideBar() {
  return (
    <Box p={'1.5rem'} bg={'#E9F1FE'} h={'100vh'}>
      <Stack>
        <NavItem
          name={'Dashboard'}
          slug={'dashboard'}
          path={'/'}
          icon={DashboardIcon}
        />
        <NavItem
          name={'Patients'}
          slug={'patients'}
          path={'/patients'}
          icon={PatientsIcon}
        />
        <NavItem
          name={'Messages'}
          slug={'messages'}
          path={'/messages'}
          icon={MessagesIcon}
        />
        <NavItem
          name={'Appointments'}
          slug={'appointments'}
          path={'/appointments'}
          icon={AppointmentsIcon}
        />
      </Stack>
    </Box>
  );
}
