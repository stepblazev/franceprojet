import { Flex, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';

const InputLayout = ({ children, label, errors, required, width = 'fit-content', textsm = false }) => {
    return (
        
        <Flex flexDir={'column'} gap={'25px'} w={width || '100%' }>
            <Text fontSize={textsm ? '18px' : '24px'} fontWeight={'700'} lineHeight={'35px'} color={'#170F49'}>{label}{required ? <span style={{ color: 'red' }}>*</span> : ''}</Text>
           
            <Flex flexDir={'column'} gap={'8px'}>
               {children}
            {errors && <Text fontSize={'12px'} fontWeight={'400'} lineHeight={'20px'} color={'red'}>{errors}</Text>}
           </Flex>
         
        </Flex>
        
        
    );
};

export default InputLayout;


