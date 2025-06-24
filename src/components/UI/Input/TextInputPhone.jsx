import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { IMaskInput } from 'react-imask';

const TextInputPhone = ({ field, errors, placeholder, rightIcon, mask }) => {
  return (
    <InputGroup>
      <IMaskInput 
        {...field} 
        mask={mask} 
        placeholder={placeholder} 
        style={{
          height: '66px',
          backgroundColor: '#FFF',
          width: '284px',
          boxShadow: '0px 2px 6px 0px #13124212',
          padding: '15px 0',
          borderRadius: '0px',
          paddingLeft: '10px',
          border: `1px solid ${errors ? '#EFF0F6' : '#ECF0F5'}`,
          outline: 'none!important',

          '::placeholder': {
            color: '#999',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '20px',
            textAlign: 'center'
          }
        }} 
      />
      <InputRightElement right={'15px!important'} top={"10px!important"} >{rightIcon}</InputRightElement>
    </InputGroup>

  );
};

export default TextInputPhone;



// import React from 'react';
// import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
// import { IMaskInput } from 'react-imask';

// const CustomInputPhone = ({ field, placeholder, mask, errors, px }) => {
//   return (
//     <InputGroup>

//     </InputGroup>
//   );
// };

// export default CustomInputPhone;

