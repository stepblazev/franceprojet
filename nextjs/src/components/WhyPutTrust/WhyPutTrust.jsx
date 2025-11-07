import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

const WhyPutTrust = () => {
    const [isMobile] = useMediaQuery([
        "(max-width: 630px)"
    ]);

    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();
    return (
        <Flex as={'section'} mt={'80px'} pb={'40px'} flexDir={'column'} justifyContent={'center'} bgColor={'#2E3083'} w={'100%'} color={'white'} mb={{ base: '96px', xsm: '104px' }}>
            <Text as={'h2'} p={"28px 20px 45px"} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{!isMobile ? t('putЕrusеFranceProjet') : t('putЕrusеFranceProjetShort')}</Text>
            <Flex                 w={'100%'}
                px={'30px'} justifyContent={'center'}>
            <Flex
                gap={'30px'}
                
                flexDir={{ base: 'column', xlg: 'row' }}
                w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }}
                alignItems={{ base: 'center', xlg: 'flex-start' }}
                justifyContent={{ base: 'space-between', desk: 'space-around' }}
            >
                <Flex
                    h={'70px'}
                    alignItems={'center'}
                    w={'351px'}
                    pl={'16px'}
                    borderLeft={'6px solid #FFFFFF'}

                >
                    <Text as={'p'}   fontSize={'16px'} fontWeight={600} lineHeight={'19.2px'} textAlign={'left'}>{t('tenYearGuaranteed')}</Text>
                </Flex>
                <Flex
                    h={'70px'}
                    alignItems={'center'}
                    w={'351px'}
                    pl={'16px'}
                    borderLeft={'6px solid #FFFFFF'}
                >
                    <Text as={'p'}   fontSize={'16px'} fontWeight={600} lineHeight={'19.2px'} textAlign={'left'}>{t('methodAndRigor')}</Text>
                </Flex>
                <Flex
                    h={'70px'}
                    alignItems={'center'}
                    w={'351px'}
                    pl={'16px'}
                    borderLeft={'6px solid #FFFFFF'}
                >
                    <Text as={'p'}   fontSize={'16px'} fontWeight={600} lineHeight={'19.2px'} textAlign={'left'}>{t('overProjects')}</Text>
                </Flex>
            </Flex>
            </Flex>

            <Flex
                w={'100%'}
                pt={'60px'}
                justifyContent={'space-between'}
                // columnGap={"125px"}
            px={'30px'}
            display={{ base: 'flex', xsm: 'none' }}
            // overflow={'hidden'}
            >
                <Image h={{base:'20px',sm:'25px'}} w={'15%'} src='/lafarge.png' alt='lafarge' />
                <Image h={{base:'25px',sm:'29px'}} w={'19%'} src='/gobain.png' alt='gobain' />
                <Image h={{base:'20px',sm:'25px'}} w={'27%'} src='/rochebobois.png' alt='rochebobois' />
                <Image h={{base:'20px',sm:'25px'}} w={'15%'}  src='/grone.png' alt='grone' />

                
            </Flex>
        </Flex>
    );
};


export default WhyPutTrust;