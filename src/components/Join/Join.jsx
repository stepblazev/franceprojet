import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import Key from '../../assets/key.svg'
import Enterprese from '../../assets/enterprice.svg'
import Architate from '../../assets/architecte.svg'
import Link from 'next/link';
const Join = () => {
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const router = useRouter();
    return (
        <>
            <SectionLayuot props={{ bgColor: { base: '#2e3083', xmini: '#fff' }, py: { base: '40px', xmini: '0' }, alignItems: { base: 'flex-start', xmini: 'center' }, }}>
                <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '85%' }} flexDirection={'column'} justifyContent={'center'}>
                <Text as={'h2'} w={{ base: '100%', desk: '50%' }} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={{ base: '#fff', xmini: '#2e3083' }} alignSelf={'center'} textAlign={{ base: 'center' }} lineHeight={{ base: '43.58px', md: '66px' }} textTransform={{ base: 'uppercase' }}>{t('joinUs')}</Text>
                <Text as={'h3'} display={{ base: 'none', xmini: 'block' }} w={'100%'} my={'30px'} fontSize={{ base: '32px', md: '36px' }} fontWeight={{ base: '600', md: '700' }} color={'#2E3083'} textAlign={{ base: 'left' }} lineHeight={{ base: '43.58px', md: '50px' }} textTransform={'lowercase'}>{t('youAre')}</Text>

                <Text as={'p'} w={'100%'} mt={'50px'} mb={'30px'}
                    display={{ base: 'block', xmini: 'none' }}

                    fontSize={'20px'} fontWeight={600} lineHeight={'32px'} textAlign={'left'} color={'#fff'} >{t('receiveConstructionArea')}</Text>
                <Link
                    className='joinLink'
                    href={'/professional'}

                >
                    {t('joinOurTeam')}


                </Link>

                <Flex
                    display={{ base: 'none', xmini: 'flex' }}
                    // color={'#2E3083'}
                    w={'100%'}
                    h={'100%'}
                    flexDir={{ base: 'column' }}

                >
                    <Flex
                        gap={{ base: '20px', xlg: '30px' }}
                        flexDir={{ base: 'column', lg: 'row' }}
                        w={'100%'}
                        alignItems={{ base: 'center', xlg: 'flex-start' }}
                        justifyContent={{ base: 'space-around' }}
                    >
                        <Flex
                            h={'100%'}
                            w={{ base: '70%', lg: '338px' }}
                            p={'16px 0 16px 16px'}
                            gap={{ base: '20px', xlg: '30px' }}
                            flexDir={'column'}
                            alignItems={'flex-start'}
                            bgColor={'#F5F5F5'}
                            borderLeft={'2px solid #D22827'}
                        >
                            <Key />
                            <Text as={'p'} fontSize='24px'
                                fontWeight='600'
                                lineHeight='33.6px'
                                textAlign='left'>{t('estateProfessional')}</Text>
                        </Flex>
                        <Flex
                            h={'100%'}
                            // alignItems={'center'}
                            w={{ base: '70%', lg: '338px' }}
                            bgColor={'#F5F5F5'}
                            gap={{ base: '20px', xlg: '30px' }}

                            flexDir={'column'}
                            p={'16px 0 16px 16px'}
                            alignItems={'flex-start'}
                            borderLeft={'2px solid #D22827'}
                        >
                            <Architate />

                            <Text as={'p'} fontSize='24px'
                                fontWeight='600'
                                lineHeight='33.6px'
                                textAlign='left'>{t('designer')}</Text>
                        </Flex>
                        <Flex
                            h={'100%'}
                            // alignItems={'center'}
                            w={{ base: '70%', lg: '338px' }}
                            p={'16px 0 16px 16px'}
                            bgColor={'#F5F5F5'}
                            gap={{ base: '20px', xlg: '30px' }}

                            flexDir={'column'}
                            alignItems={'flex-start'}

                            borderLeft={'2px solid #D22827'}
                        >
                            <Enterprese />

                            <Text as={'p'} fontSize='24px'
                                fontWeight='600'
                                lineHeight='33.6px'
                                textAlign='left' >{t('constructionCompany')}</Text>
                        </Flex>
                    </Flex>

                    <Flex w={'100%'} justifyContent={'center'} mt={'30px'} color={'#fff'}>
                        <Link
                            className='joinLinkDesk'
                            href={'/professional'}
                        >
                            {t('joinOurTeam')}
                        </Link>
                    </Flex>
                </Flex>
                </Flex>
               

            </SectionLayuot>



        </>

    );
};


export default Join;
