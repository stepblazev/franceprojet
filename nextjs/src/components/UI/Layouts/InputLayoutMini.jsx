import { Flex, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';

const InputLayoutMini = ({ children, errors, width = '100%', errorsText}) => {
    return (
        
        <Flex flexDir={'column'} gap={'25px'} w={width || '100%' }>
            <Flex flexDir={'column'} gap={'8px'}>
               {children}
            {errors && <Text fontSize={'12px'} fontWeight={'400'} lineHeight={'20px'} paddingLeft={'4px'} color={'red'}>{errors}</Text>}
           </Flex>
         
        </Flex>
        
        
    );
};

export default InputLayoutMini;


