'use client';
import React from 'react';
// import Select from 'react-select';
import { Text, useBreakpointValue } from '@chakra-ui/react';
import CreatableSelect from 'react-select/creatable';

interface CustomSelectProps {
  options: Array<any>;
  value?: any;
  onChange: (value: { label: any; value: any }) => void;
  onCreateOption?: (value: any) => void;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  selectedOption?: any;
  setSelectedOption?: any;
  defaultValue?: any;
  controlStyle?: any;
  isMulti?: boolean;
}

export default function CustomSelect({
  options,
  onChange,
  placeholder,
  isDisabled,
  label,
  selectedOption,
  defaultValue,
  onCreateOption,
  controlStyle,
  isMulti,
}: CustomSelectProps) {
  // const [selectedValue, setSelectedValue] = useState(value);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleSelectChange = (selectedOption: { label: any; value: any }) => {
    // setSelectedValue(selectedOption);
    onChange(selectedOption); // Pass value to parent component
  };

  return (
    <div>
      <Text
        fontFamily={'body'}
        fontWeight={{ base: '600' }}
        fontSize={{ base: '1rem' }}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {label}
      </Text>
      <CreatableSelect
        id="select-custom"
        isMulti={isMulti}
        value={selectedOption}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder || 'Select an option'}
        isDisabled={isDisabled || false}
        onCreateOption={onCreateOption}
        styles={{
          control: (base) => ({
            ...base,
            width: '100%',
            minHeight: `${isDesktop ? '2.5rem' : '2.5rem'}`,
            borderRadius: `.5rem`,
            fontSize: `${isDesktop ? '1rem' : '1rem'}`,
            border: '1px solid #636D79',
            ...controlStyle,
          }),
        }}
      />
    </div>
  );
}
