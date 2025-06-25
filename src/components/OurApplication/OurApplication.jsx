import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const OurApplication = () => {
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();
    return (
        <SectionLayuot props={{ display: 'flex', mt: '150px', pl: { base: '30px', desk: '0px!important' }, id: 'application' }}>
            <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }} justifyContent={{ base: 'center', desk: 'end' }} mb={{ base: '32px', desk: '0px', xsm: '80px' }}>
                <Text as={'h2'} w={{ base: '90%', desk: '50%' }} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={{ base: 'center', desk: 'left' }} lineHeight={{ base: '43.58px', md: '66px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('ourApplication')}</Text>

            </Flex>
            <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }} alignItems={{ base: 'flex-start', desk: 'center' }} flexDir={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
                {/* <Text as={'p'} w={{base: '100%',lg:'50%', xlg:'60%'}} fontSize={'16px'} fontWeight={600} lineHeight={'22px'} textAlign={'left'} color={'#2E3083'} dangerouslySetInnerHTML={{ __html: t().aboutFranceProjetDesc }} /> */}
                <Image display={{ base: 'none', xlg: 'block' }} w={{ base: '100%', lg: '40%', desk: '55%' }} src={'/phones.png'} alt={'ourApplication1'} />
                <Flex flexDir={{ base: 'column' }} gap={{ base: '30px', xl: '90px' }} w={{ base: '100%', xlg: '60%', desk: '45%' }} >
                    <Flex w='100%' justifyContent={'space-between'} alignItems={{ base: 'center', xsm: 'flex-end' }} direction={{ base: 'column-reverse', xsm: 'row' }}>
                        <Box
                            alignItems={'center'}
                            w={{ base: '100%', xsm: '65%' }}
                            pl={'16px'}
                            borderLeft={'6px solid #D22827'}
                        >
                            <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={{ base: 500, xmini: 800 }} lineHeight={'24px'} textAlign={'left'} dangerouslySetInnerHTML={{ __html: t('ourApplicationDesc') }} />
                        </Box>
                        <Image w={{ base: '240px', xsm: '174px' }} src={'/qrcode.png'} alt={'ourApplication2'} />
                    </Flex>
                    <Flex w='100%' justifyContent={'space-around'} direction={{ base: 'column', xmini: 'row' }}>
                        <Image h={{ base: '74px' }} alignSelf={'flex-start'} src={'/appstore.png'} alt={'ourApplication3'} />
                        <Image mt={{ base: '12px', xmini: '0px' }} h={{ base: '74px' }} alignSelf={'flex-end'} src={'/googleplay.png'} alt={'ourApplication4'} />
                    </Flex>

                </Flex>
            </Flex>
        </SectionLayuot>
    );
};

export default OurApplication;