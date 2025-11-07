import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

const TextInput = ({ field, errors, placeholder, rightIcon, type }) => {
  const [showType, setShowType] = React.useState(false)
  const [isPass, setIsPass] = React.useState(type === 'password' ? true : false)

  return (
    <InputGroup>
      <Input {...field}
        h={"66px"}
        type={isPass ? showType ? 'text' : 'password' : type}
        py={'15px'}
        borderRadius={"0px"}
        boxShadow={'0px 2px 6px 0px #13124212'}
        bgColor={'#FFF'}
        placeholder={placeholder}
        _placeholder={{ color: '#999999', fontSize: '18px', fontWeight: '500', lineHeight: '20px' }}
        w={'284px'} border={`1px solid ${errors ? '#EFF0F6' : '#ECF0F5'}`} />
      {isPass
        ?
        <InputRightElement right={'15px!important'} cursor={'pointer'} top={"10px!important"} onClick={() => setShowType(!showType)}>{rightIcon}</InputRightElement>
        :
        <InputRightElement right={'15px!important'} top={"10px!important"} >{rightIcon}</InputRightElement>
      }
    </InputGroup>

  );
};

export default TextInput;