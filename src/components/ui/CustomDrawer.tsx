import { ReactNode } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from '@chakra-ui/react';
export default function CustomDrawer({
  children,
  width,
  isOpen,
  onClose,
  header,
}: {
  children: ReactNode;
  width?: string;
  header: string;
  isOpen: boolean;
  onClose: any;
}) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent minW={width || '26rem'}>
        <DrawerCloseButton mt={'.5rem'} />
        <DrawerHeader
          fontWeight={500}
          paddingInline={'0'}
          fontSize={'1.12rem'}
          pl={'1.5rem'}
        >
          {header}
        </DrawerHeader>
        <Divider borderColor={'#EDEFF5'} />

        <DrawerBody paddingInline={'0'} px={'1.5rem'}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
