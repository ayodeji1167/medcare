import { defineStyleConfig } from '@chakra-ui/react';

// Define the base styles and variants for the Text component
export const Text = defineStyleConfig({
  baseStyle: {
    fontSize: { base: '15px', md: '15px', lg: '16px' },
    color: '#2F2F2F',
    fontWeight: 400,
  },
  variants: {
    grey: {
      color: '#9F9F9F',
    },
    componentHeading: {
      fontSize: '.875rem',
      fontWeight: 'medium',
      color: '#2F2F2F',
      lineHeight: '1rem',
    },
  },
  sizes: {
    sm: {
      fontSize: '.75rem',
    },
    md: {
      fontSize: '.875rem',
    },
    lg: {
      fontSize: '1rem',
    },
  },
  defaultProps: {
    size: 'md',
  },
});
