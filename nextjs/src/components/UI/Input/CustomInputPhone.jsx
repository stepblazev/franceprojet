
import React from 'react';
import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { IMaskInput } from 'react-imask';

const CustomInputPhone = ({ field, placeholder, mask, errors, px }) => {
  return (
    <InputGroup>
      <IMaskInput 
        {...field} 
        mask={mask} 
        placeholder={placeholder} 
        style={{
          height: '41px',
          backgroundColor: '#FFF',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0px 2px 6px 0px #13124212',
          padding: '8px 0',
          border: `1px solid ${errors ? '#EFF0F6' : '#ECF0F5'}`,
          '::placeholder': {
            color: '#000',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '20px',
            textAlign: 'center'
          }
        }} 
      />
    </InputGroup>
  );
};

export default CustomInputPhone;

