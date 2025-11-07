import { Heading } from '@chakra-ui/react';
import React from 'react';

const SectionHead = ({title, props}) => {
    return (
        <Heading as="h2" fontSize={{ base: "32px", md: "55px" }} lineHeight={{ base: "43.58px", md: "66px" }} fontWeight={{ base: "700", md: "800" }} {...props}  textAlign="center" >
            {title}
        </Heading>
    )
};

export default SectionHead;
