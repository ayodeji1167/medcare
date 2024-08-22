import { getStatusColor } from '@/utils/get-color';
import { BoxProps, Center } from '@chakra-ui/react';
import React, { useCallback } from 'react';

export default function Status({
  name,
  ...props
}: { name?: string } & BoxProps) {
  const getColorFun = useCallback(() => getStatusColor(name || ''), [name]);
  return (
    <Center
      bg={getColorFun()?.bg}
      rounded={'.25rem'}
      h={'1.25rem'}
      fontSize={'.5rem'}
      color={getColorFun()?.text}
      textTransform={'capitalize'}
      px={'.25rem'}
      {...props}
    >
      {name}
    </Center>
  );
}
