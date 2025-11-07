import React from 'react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Key from '../../assets/red_key.svg'
import Valik from '../../assets/red_valik.svg'
import Kaska from '../../assets/red_kaska.svg'
const Advantages = () => {
    const { t } = useTranslation('common');
    return (
        <SectionLayuot props={{ px: { base: '0px', sm: '30px', lg: '40px', desk: '60px' }, mt: { base: '30px', md: "50px", lg: '90px' } }}>
            {/* <Text as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#d22827'} textAlign={'center'} px={{ base: '30px', sm: '0px' }} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('advantagesFrancePartner')}</Text> */}
            <Flex alignItems={{ base: 'flex-start' }} w={'100%'} flexDir={{ base: 'column', xmd: 'row' }} justifyContent={'space-between'} >
                <Flex pos={'relative'} w={{ base: '100%', xmd: '40%', lg: '50%', desk: '40%' }} h={'100%'} justifyContent={'center'} p={{ base: '0 0 30px 0', xmd: '20px 30px' }}>
                    <Image objectFit={'cover'} w={{ base: '60%', desk: '100%' }} h={'100%'} flex={'1'} src={'/advantage1.png'} alt={'advantage-france-projet1'} />
                    <Box w={{ base: '50%' }} display={{ base: 'none', xmd: 'block' }} pos={'absolute'} left={'0'} top={'0'} h={{ base: '50%' }} borderLeft={'2px solid #D22827'} borderTop={'2px solid #D22827'} />
                    <Box w={{ base: '5%' }} display={{ base: 'none', xmd: 'block' }} pos={'absolute'} bg={'white'} left={'-3px'} top={'-10px'} h={{ base: '10%' }} borderLeft={'4px solid #fff'} borderTop={'4px solid #fff'} />
                </Flex>

                <Flex px={{ base: '30px', sm: '0px' }} w={{ base: '100%', xmd: '60%', lg: '50%', desk: '60%' }} flexDir={'column'} justifyContent={'center'} gap={'30px'}>
                    <Text as={'h3'} fontSize={{ base: '19px', xsm: '24px' }} fontWeight={800} lineHeight={'normal'} textAlign={'left'} textTransform={'uppercase'} color={'#d22827'} dangerouslySetInnerHTML={{ __html: t('stockHomeRoom') }} />
                    <Text as={'p'} fontSize={{ base: '14px', xsm: '16px' }} fontWeight={500} lineHeight={'normal'} textAlign={'left'} color={'#2E3083'} dangerouslySetInnerHTML={{ __html: t('stockHomeRoomDescr') }} />
                </Flex>
            </Flex>
            <Flex position={'relative'} alignItems={{ base: 'flex-start' }} w={'100%'} mt={'40px'} flexDir={{ base: 'column-reverse', xmd: 'row' }} justifyContent={'space-between'} gap={{ base: '0px', xmd: '30px' }}>

                <Flex px={{ base: '30px', sm: '0px' }} w={{ base: '100%', xmd: '60%', lg: '50%', desk: '60%' }} flexDir={'column'} h={'auto'} >
                    <Flex flexDir={'column'} gap={{ base: '30px' }}>
                        <Text as={'h3'} fontSize={{ base: '19px', xsm: '24px' }} fontWeight={800} lineHeight={'normal'} textAlign={'left'} textTransform={'uppercase'} color={'#d22827'} dangerouslySetInnerHTML={{ __html: t('findYourStyleHarmoniousChoices') }} />
                        <Text as={'p'} fontSize={{ base: '14px', xsm: '16px' }} fontWeight={500} lineHeight={'normal'} textAlign={'left'} color={'#2E3083'} dangerouslySetInnerHTML={{ __html: t('findYourStyleHarmoniousChoicesDescr') }} />
                    </Flex>
                    <Flex gap={'30px'} position={'absolute'} display={{ base: 'none', maxlg: 'flex' }} bottom={'0'} left={'0'}>
                        <Key />
                        <Valik />
                        <Kaska />
                    </Flex>
                </Flex>
                <Flex pos={'relative'} w={{ base: '100%', xmd: '40%', lg: '50%', desk: '40%' }} h={'100%'} justifyContent={'center'} p={{ base: '0 0 30px 0', xmd: '20px 30px' }}>
                    <Image objectFit={'cover'} w={{ base: '60%', desk: '100%' }} h={'100%'} flex={'1'} src={'/advantage2.png'} alt={'advantage-france-projet2'} />
                    <Box w={{ base: '50%' }} display={{ base: 'none', xmd: 'block' }} pos={'absolute'} left={'0'} top={'0'} h={{ base: '50%' }} borderLeft={'2px solid #D22827'} borderTop={'2px solid #D22827'} />
                    <Box w={{ base: '5%' }} display={{ base: 'none', xmd: 'block' }} pos={'absolute'} bg={'white'} left={'-3px'} top={'-10px'} h={{ base: '10%' }} borderLeft={'4px solid #fff'} borderTop={'4px solid #fff'} />
                </Flex>


            </Flex>
        </SectionLayuot >
    );
};

export default Advantages;


