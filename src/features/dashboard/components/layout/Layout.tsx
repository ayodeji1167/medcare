import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import TopNav from './TopNav';

export default function Layout({ children }: { children: ReactNode }) {
  const sidebarWidth = '16rem';
  return (
    <Box bg={'white'} overflowX={'hidden'}>
      <Box zIndex={3} position={'fixed'} w={'100%'} top={0} left={0}>
        <TopNav />
      </Box>
      <SimpleGrid
        columnGap={'1.5rem'}
        templateColumns={`${sidebarWidth} auto`}
        columns={2}
        pt={'5rem'}
      >
        <GridItem>
          <Box width={sidebarWidth} position={'fixed'} zIndex={2}>
            <SideBar />
          </Box>
        </GridItem>
        <GridItem>
          <Box pr={'1.5rem'} minH={'100vh'} w={'100%'}>
            {children}
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
