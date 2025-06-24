import React from 'react';
import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';

const CustomInput = ({ field, placeholder, type, errors, px, errorsText }) => {
  return (
        <InputGroup>
          <Input
            {...field}
            value={field.value || ''}
            h={"41px"}
            py={'8px'}
            px={px}
            textAlign={'center'}
            borderRadius={"0px"}
            boxShadow={'0px 2px 6px 0px #13124212'}
            bgColor={'#FFF'}
            placeholder={placeholder}
            _placeholder={{ color: '#999999', fontSize: '18px', fontWeight: '500', lineHeight: '20px', textAlign: 'center' }}
            w={'100%'} border={`1px solid ${errors ? '#EFF0F6' : '#ECF0F5'}`}

          />
        </InputGroup>

  );
};

export default CustomInput;