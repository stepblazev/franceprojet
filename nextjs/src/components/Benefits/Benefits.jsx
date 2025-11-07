import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import SectionLayuot from '../UI/Layouts/SectionLayuot';

const Benefits = () => {
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();
    return (

        <SectionLayuot>
            <Text as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '80px', md: '85px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('mission')}</Text>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', xmini: 'repeat(2, 1fr)', desk: 'repeat(4, 1fr)' }}
                gap={{ base: '24px', md: '20px', desk: "5px" }}
                w={{ base: '100%',xlg: '95%' }}
                justifyItems={{ base: 'center', md: 'end', desk: 'center' }}
                alignItems={'start'}
            >
                <GridItem as={'div'} display={{ base: 'flex' }} flexDir={'column'} alignItems={'center'} px={'30px'}  bgImage={{ base: 'none', md: '/hero_backgr_1.png' }} bgRepeat={'no-repeat'} bgPosition={'center'} >
                    <Image alt={'accompagnement'} src={'/accompagnement.png'} w={{ base: '126px', md: '173px' }} h={{ base: '91px', md: '123px' }} />
                    <Text as={'h3'} fontSize={{ base: '15px', md: '24px' }} mt={{ base: "8px", md: "27px" }} mb={{ base: "23px", md: "27px" }} fontWeight={800} lineHeight={{ base: '18px', md: '29px' }} textAlign={'center'} color={'#2E3083'}>{t('support')}</Text>
                    <Text as={'p'} fontSize={{ base: '11px', md: '16px' }} fontWeight={400} lineHeight={{ base: '16px', md: '28px' }} textAlign={{ base: 'center', md: 'left' }} color={'#444444'}>{t('supportDiscription')}</Text>
                </GridItem>
                <GridItem as={'div'} display={{ base: 'flex' }} justifySelf={{ base: 'center', md: 'start', desk: 'center' }} flexDir={'column'} alignItems={'center'} justifyContent={'flex-start'} px={'30px'}  bgImage={{ base: 'none', md: '/hero_backgr_2.png' }} bgRepeat={'no-repeat'} bgPosition={'center'} >
                    <Image alt={'transparence'} src={'/transparence.png'} w={{ base: '126px', md: '173px' }} h={{ base: '91px', md: '123px' }} />
                    <Text as={'h3'} fontSize={{ base: '15px', md: '24px' }} mt={{ base: "8px", md: "27px" }} mb={{ base: "23px", md: "27px" }} fontWeight={800} lineHeight={{ base: '18px', md: '29px' }} textAlign={'center'} color={'#2E3083'}>{t('transparency')}</Text>
                    <Text as={'p'} fontSize={{ base: '11px', md: '16px' }} fontWeight={400} lineHeight={{ base: '16px', md: '28px' }} textAlign={{ base: 'center', md: 'left' }} color={'#444444'}>{t('transparencyDiscription')}</Text>
                </GridItem>
                <GridItem as={'div'} display={{ base: 'flex' }} flexDir={'column'} alignItems={'center'} px={'30px'}  bgImage={{ base: 'none', md: '/hero_backgr_1.png' }} bgRepeat={'no-repeat'} bgPosition={'center'} >
                    <Image alt={'sér'} src={'/sérénité.png'} w={{ base: '126px', md: '173px' }} h={{ base: '91px', md: '123px' }} />
                    <Text as={'h3'} fontSize={{ base: '15px', md: '24px' }} mt={{ base: "8px", md: "27px" }} mb={{ base: "23px", md: "27px" }} fontWeight={800} lineHeight={{ base: '18px', md: '29px' }} textAlign={'center'} color={'#2E3083'}>{t('peaceOfMind')}</Text>
                    <Text as={'p'} fontSize={{ base: '11px', md: '16px' }} fontWeight={400} lineHeight={{ base: '16px', md: '28px' }} textAlign={{ base: 'center', md: 'left' }} color={'#444444'}> {t('peaceOfMindDiscription')}</Text>
                </GridItem>
                <GridItem as={'div'} display={{ base: 'flex' }} justifySelf={{ base: 'center', md: 'start', desk: 'center' }} flexDir={'column'} alignItems={'center'} px={'30px'}  bgImage={{ base: 'none', md: '/hero_backgr_2.png' }} bgRepeat={'no-repeat'} bgPosition={'center'} >
                    <Image alt={'durité'} src={'/durabilité.png'} w={{ base: '126px', md: '173px' }} h={{ base: '91px', md: '123px' }} />
                    <Text as={'h3'} fontSize={{ base: '15px', md: '24px' }} mt={{ base: "8px", md: "27px" }} mb={{ base: "23px", md: "27px" }} fontWeight={800} lineHeight={{ base: '18px', md: '29px' }} textAlign={'center'} color={'#2E3083'}>{t('sustainability')}</Text>
                    <Text as={'p'} fontSize={{ base: '11px', md: '16px' }} fontWeight={400} lineHeight={{ base: '16px', md: '28px' }} textAlign={{ base: 'center', md: 'left' }} color={'#444444'}>{t('sustainabilityDiscription')}</Text>
                </GridItem>
            </Grid>
        </SectionLayuot>
    );
};

export default Benefits;

