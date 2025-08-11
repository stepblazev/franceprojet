import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const OurApplication = () => {
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const router = useRouter();
    return (
        <SectionLayuot props={{  mt: { base: '50px', md: "70px", lg: '100px' } , pl: { base: '30px', lg: '0px!important' }}}>

            <Text as={'h2'} display={{ base: 'none', md: 'block' }} mb={{ base: '80px'}} w={{ base: '90%', desk: '70%' }} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#D22827'} textAlign={{ base: 'center' }} lineHeight={{ base: '43.58px', md: '66px' }} >{t('projectTrackingApplicationCustomers')}</Text>

            <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }}  alignItems={{ base: 'flex-end', xlg: 'center' }} flexDir={{ base: 'column', lg: 'row' }} justifyContent={'space-between'} >
                {/* <Text as={'p'} w={{base: '100%',lg:'50%', xlg:'60%'}} fontSize={'16px'} fontWeight={600} lineHeight={'22px'} textAlign={'left'} color={'#2E3083'} dangerouslySetInnerHTML={{ __html: t().aboutFranceProjetDesc }} /> */}
               <Flex w={{ base: '100%', lg:  '55%' }}  pos={'relative'}>

                <Image display={{ base: 'block', lg: 'none' }} w='90%' src={'/phones_profi_mini.png'} alt={'ourApplication1'} />
                <Image display={{ base: 'none', lg: 'block' }} w='100%' src={'/phones_profi.png'} alt={'ourApplication2'} />
            <Image display={{ base: 'block', lg: 'none' }} right={{base:'0px',sm:'20px'}}  bottom={'10px'} pos={'absolute'} w={{ base:'84px' }} h={{ base: '84px' }} src={'/qrcode.png'} alt={'ourApplication3'} />
              
               </Flex>
                
                <Flex flexDir={{ base: 'column' }} gap={{ base: '30px', xl: '90px' }} w={{ base: '100%', xlg:  '45%' }} >
                    <Flex w='100%' justifyContent={'space-between'} alignItems={'flex-end'} gap={{ base: '30px', xl: '90px' }}>
                        <Box
                            //   h={'70px'}
                            alignItems={'center'}
                            w={{base:'100%',sm:'80%',lg:'65%'}}
                            pl={'16px'}
                            borderLeft={'6px solid #D22827'}
                        >

                            <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={800} lineHeight={'24px'} textAlign={'left'} dangerouslySetInnerHTML={{ __html: t('scheduleHelpOptimize') }} />

                        </Box>
                        <Image w={{ base:'154px' }} h={{ base: '154px' }} display={{ base: 'none', lg: 'block' }} src={'/qrcode.png'} alt={'ourApplication5'} />

                    </Flex>
                    <Flex w='100%' justifyContent={'space-evenly'} gap={{ base: '20px', xl: '50px' }}>
                        <Link href={'https://apps.apple.com/cg/app/france-projet/id6449452861'} target='_blank'>
                            <Image w={{ base: '92px',xsm:'236px' }} h={{ base: '30px',xsm:'74px' }} src={'/appstore.png'} alt={'ourApplication6'} />
                        </Link>
                        <Link href={'https://play.google.com/store/apps/details?id=com.parisconstruction.app&pcampaignid=web_share'} target='_blank'>
                            <Image w={{ base: '92px',xsm:'236px' }} h={{ base: '30px',xsm:'74px' }} src={'/googleplay.png'} alt={'ourApplication7'} />
                        </Link>
                    </Flex>

                </Flex>
            </Flex>
        </SectionLayuot>
    );
};

export default OurApplication;