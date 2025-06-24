import { Heading } from '@chakra-ui/react';
import React from 'react';

const ContentHead = ({title,color}) => {
    return (
    <Heading as="h4" fontSize={{ base: "15px", md: "24px" }} lineHeight={{ base: "18px", md: "29px" }} fontWeight="400" color={color}>
       {title}
    </Heading>
    )
};

export default ContentHead;






