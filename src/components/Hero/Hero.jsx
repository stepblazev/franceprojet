import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { useRouter } from 'next/router';
import Star from '../../assets/star_hero.svg';
import FormOpenBtn from '../UI/Buttons/FormOpenBtn';
import Stepper from '../UI/Modal/Stepper';
import { useTranslation } from 'next-i18next';

const Hero = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { t } = useTranslation('common');
    return (
        <Box as={'section'}  h={{ base: '797px', md: '742px' }} w={'100%'} >
            <Flex  justifyContent={'center'} flexDir={'column'} alignItems={'start'} h={'100%'} w={'100%'} >
            <Flex  backgroundImage={'url(/optimized/Background.webp)'} backgroundRepeat={'no-repeat'} backgroundPosition={'right'}  flexDir={'column'} justifyContent={'center'} alignItems={'start'} h={'100%'} w={'100%'} px={{ base: '15px',sm: '50px',xmd: '80px',xlg: '100px',xdesk: '120px' }} >
               
                <Text as={'p'} display={{ base: 'none', xmd: 'block' }} color={'#2E3083'} fontSize={'16px'} fontWeight={600} lineHeight={'27px'} textAlign={'left'} mb={'30px'} textTransform={'uppercase'}>{t('franceProjet')}</Text>
                <Flex flexDir={'column'} alignItems={'start'} maxW={'991px'} w={'100%'} gap={'35px'}>
                    <Text as={'h1'} color={'#2E3083'} fontSize={{ base: '26px', md: '65px' }} fontWeight={800} lineHeight={{ base: '35px', md: '78px' }} textAlign={'left'} >{t('letsBuild')}</Text>
                    <Flex gap={'12px'} alignItems={'center'}>
                        <Flex gap={'8px'}>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />

                        </Flex>

                        <Text as={'p'} color={'#2E3083'} fontSize={'13px'} fontWeight={600} lineHeight={'18px'} textAlign={'left'} >{t('reviews')}</Text>
                    </Flex>
                    <Text as={'p'} color={'#2E3083'} fontSize={{ base: '14px', md: '16px' }} fontWeight={800} lineHeight={{ base: '23px', md: '27px' }} textAlign={'left'} textTransform={'uppercase'} >{t('entrustYourProperty')}</Text>
                    <FormOpenBtn width={'297px'} bgColor={'#2E3083'} onClick={onOpen}>
                        {t('estimate_my_project')}
                    </FormOpenBtn>
                </Flex>
                <Flex mt={'100px'} flexDir={'column'} maxW={'750px'} gap={'20px'} display={{ base: 'none', md: 'flex' }}
                >
                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={800} lineHeight={'19px'} textAlign={'left'} textTransform={'uppercase'} >{t('yourProperty')}</Text>
                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={600} lineHeight={'19px'} textAlign={'left'} >{t('expertPropertyRenovation')}</Text>

                </Flex>

                </Flex>

                <Flex mt={'75px'} px={{ base: '15px', md: '30px', lg: '40px' }}  flexDir={'column'}  maxW={'750px'} gap={'20px'} display={{ base: 'flex', md: 'none' }}
                >
                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={800} lineHeight={'19px'} textAlign={'center'} textTransform={'uppercase'} >{t('yourProperty')}</Text>
                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={600} lineHeight={'19px'} textAlign={'center'} >{t('expertPropertyRenovation')}</Text>

                </Flex>
            </Flex>

        
            <Stepper isOpen={isOpen} onClose={onClose}/>

        </Box>

    );
};



export default Hero;