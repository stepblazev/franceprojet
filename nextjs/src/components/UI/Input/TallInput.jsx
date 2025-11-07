import React from 'react';
import { Input, InputGroup } from '@chakra-ui/react';

const TallInput = ({ field, errors }) => {
    return (
        <InputGroup w={'100%'}>
        <Input {...field}
          h={"41px"}
          type={'text'}
          py={'8px'}
        //   px={px}
          borderRadius={"0px"}
          boxShadow={'0px 2px 6px 0px #13124212'}
          bgColor={'#FFF'}
        //   placeholder={placeholder}
        //   _placeholder={{ color: '#999999', fontSize: '18px', fontWeight: '500', lineHeight: '20px' }}
          w={'100%'} border={`1px solid ${errors ? '#EFF0F6' : 'ECF0F5'}`} />
   
  
  
      </InputGroup>
    );
};

export default TallInput;