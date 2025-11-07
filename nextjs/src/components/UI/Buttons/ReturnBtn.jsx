import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Arrows from '../../../assets/icon-arrows.svg';
const ReturnBtn = ({text, onClick }) => {
    const router = useRouter();
   
    return (
    <Button onClick={onClick} w={{base: '175px', xxlg:'197px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'10px'} _hover={{opacity: 0.8}} h={{base: '40px', xxlg:'52px'}} bgColor={router.pathname === '/professional' ? '#2E3083' : '#D22827'} color={'white'} border={'none'} borderRadius={'0px'}>
         <Box>
            <Arrows/>
         </Box>
            {text}
        </Button>
    );
};


export default ReturnBtn;