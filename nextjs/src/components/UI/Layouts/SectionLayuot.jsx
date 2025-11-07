import { Flex } from '@chakra-ui/react';
import React from 'react';

const SectionLayuot = ({ children, props }) => {
    return (
        <Flex  as={'section'} mt={{ base: '70px', md: "120px" ,lg:'180px' }} w={'100%'} px={{ base: '15px', md: '30px', lg: '40px' }} alignItems={'center'} flexDir={'column'} {...props}>
            {children}
        </Flex>
    );
};

export default SectionLayuot;