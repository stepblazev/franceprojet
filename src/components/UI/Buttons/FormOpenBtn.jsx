import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Arrow from '../../../assets/btn_arrow.svg';
const FormOpenBtn = ({ children, width, bgColor, props , onClick}) => {
    return (
        <Box
            _hover={{opacity: '0.7'}}
            as='button'
            cursor={'pointer'}
            display={'flex'}
            pos={'relative'}
            justifyContent={'start'}
            alignItems={'center'}
            flexWrap={'nowrap'}
            pl={'20px'}
            mr={'30px'}
            onClick={onClick}
            h={{base: '40px', xxlg:'52px'}} 
            bgColor={bgColor}
            w={width}
            borderRadius={'0px'}
            fontSize={'16px'}
            lineHeight={'20px'}
            fontWeight={600}
            color={'white'}
            {...props} >
            <Text display={'inline-block'} textAlign={'left'} maxW={'258px'}>{children}</Text>

            <Image  h={{base: '40px', xxlg:'52px'}}   alt='arrow' src='/btn_arrow2.png' position={'absolute'} right={'-33px!important'} top={'0'} />
        </Box>

    );
};

export default FormOpenBtn;

// width: 390px;
// height: 52px;


// width: 297px;
// height: 52px;

