import React from 'react';
import { chakra, Flex, Text , Box} from '@chakra-ui/react';


const RadioCard = ({ icon = null, text, value, onChange, isChecked ,checkbox=false ,field}) => {
  const handleClick = () => {
    onChange(value);
  };

  return (
    <chakra.label cursor='pointer' onChange={handleClick} field={field}>
      <Flex
        alignItems={'center'}
        // justifyContent={icon ? 'space-evenly' : 'center'}
        border={isChecked ? '2px solid #2E3083' : '2px solid #EFF0F6'}
        w={284}
        h={115}
        mb={'30px'}
        gap={'20px'}
        p={'5px 20px'}
      >
         {checkbox &&
      (
        <Flex
        alignItems='center'
        justifyContent='center'
        border={isChecked ? '8px solid ':'2px solid'}
        borderColor='#2E3083'
         borderRadius={'50%'}
        w={'24px'}
        h={'24px'}
        // {...getCheckboxProps()}
      >
        {/* {isChecked && <Box w={2} h={2} bg='green.500'  borderRadius={'50%'}/>} */}
      </Flex>
     )

      }
        <Box w={'fit-content'}>
        {icon}

        </Box>
        <input type="radio" checked={isChecked} readOnly  hidden />
        <Text fontSize={'18px'} fontWeight={'600'} lineHeight={'20px'} color={'#2E3083'}>{text}</Text>
      </Flex>
    </chakra.label>
  );
};

export default RadioCard;


