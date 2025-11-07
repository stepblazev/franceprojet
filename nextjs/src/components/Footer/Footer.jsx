import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import Logo from '../../assets/Logo.svg';
import LogoMini from '../../assets/Logo-mini.svg';
import Link from 'next/link';

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import useIsHomePage from '@/hooks/useIsHomePage';

const Footer = () => {
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const [isMobile] = useMediaQuery([
        "(max-width: 430px)"
    ]);

    const router = useRouter();
    const isHome = useIsHomePage();
    
    return (
        <footer>
            <Flex w={'100%'} justifyContent={'space-evenly'} flexDir={'column'} alignItems='center' py={'24px'} gap={{ base: '20px', xsm: '40px' }} px={{ base: '80px', md: '100px', lg: '140px' }}>
                {!isMobile &&
                    <Flex gap={'10px'} flexDir={'row'} alignItems={'center'}>
                        <Link className='social-link' target={'_blank'} href={'https://www.instagram.com/franceprojet?igsh=MTllaWg1c3d6ZDV1cA=='} aria-label={`Instagram`}>
                            <RiInstagramFill />
                        </Link>
                        <Link className='social-link' target={'_blank'} href={'https://www.facebook.com/share/1FAfR6T58s/?mibextid=wwXIfr'} aria-label={`Facebook`}>
                            <FaFacebook />
                        </Link>
                    </Flex>
                }

                <Flex justifyContent={{ base: 'center', smdesk: 'space-evenly' }} w={'100%'} gap={{ base: '15px', xsm: '25px', xxlg: '30px' }} flexWrap={'wrap'}>
                    <Link href='/#discover'   >
                        <Flex
                            alignItems={'center'}
                            cursor={'pointer'}
                        >
                            <Text
                                textTransform={'uppercase'}

                                color={'#2E3083'}

                                fontSize={{ base: '10px', xsm: '16px' }}
                                fontWeight={'700'}
                                lineHeight={{ base: '18px', xsm: '28px' }}
                                _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',
                                }}
                            >
                                {t('discover')}
                            </Text>
                        </Flex>
                    </Link>

                    <Link href='/#realisation'   >
                        <Flex
                            alignItems={'center'}
                            cursor={'pointer'}
                        >
                            <Text
                                textTransform={'uppercase'}

                                color={'#2E3083'}

                                fontSize={{ base: '10px', xsm: '16px' }}
                                fontWeight={'700'}
                                lineHeight={{ base: '18px', xsm: '28px' }}
                                _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',

                                }}
                            >
                                {t('realisation')}
                            </Text>
                        </Flex>
                    </Link>

                    <Link href='/#application'   >
                        <Flex
                            alignItems={'center'}
                            cursor={'pointer'}
                        >
                            <Text
                                textTransform={'uppercase'}

                                color={'#2E3083'}

                                fontSize={{ base: '10px', xsm: '16px' }}
                                fontWeight={'700'}
                                lineHeight={{ base: '18px', xsm: '28px' }}
                                _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',

                                }}
                            >
                                {t('application')}
                            </Text>
                        </Flex>
                    </Link>

                    <Link href='/#contact'   >
                        <Flex
                            alignItems={'center'}
                            cursor={'pointer'}
                        >
                            <Text


                                color={'#2E3083'}
                                textTransform={'uppercase'}

                                fontSize={{ base: '10px', xsm: '16px' }}
                                fontWeight={'700'}
                                lineHeight={{ base: '18px', xsm: '28px' }}
                                _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',

                                }}
                            >
                                {t('contact')}
                            </Text>
                        </Flex>
                    </Link>
                    <Link href='/#contact'   >
                        <Flex
                            alignItems={'center'}
                            cursor={'pointer'}
                        >
                            <Text


                                color={'#2E3083'}
                                textTransform={'uppercase'}

                                fontSize={{ base: '10px', xsm: '16px' }}
                                fontWeight={'700'}
                                lineHeight={{ base: '18px', xsm: '28px' }}
                                _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',

                                }}
                            >
                                {t('connection')}
                            </Text>
                        </Flex>
                    </Link>
                    {
                        router.pathname !== '/policy' &&
                        <Link href='/policy'   >
                            <Flex
                                alignItems={'center'}
                                cursor={'pointer'}
                            >
                                <Text

                                    color={'#2E3083'}
                                    textTransform={'uppercase'}

                                    fontSize={{ base: '10px', xsm: '16px' }}
                                    fontWeight={'700'}
                                    lineHeight={{ base: '18px', xsm: '28px' }}
                                    whiteSpace={'nowrap'}
                                    _hover={{
                                        color: '#7B7EB7',
                                        textDecoration: ' none',

                                    }}
                                >
                                    {t('privacyPolicy')}
                                </Text>
                            </Flex>
                        </Link>
                    }

                    {
                        router.pathname !== '/legal' &&
                        <Link href='/legal'>
                            <Flex
                                alignItems={'center'}
                                cursor={'pointer'}
                            >
                                <Text
                                    color={'#2E3083'}
                                    textTransform={'uppercase'}

                                    fontSize={{ base: '10px', xsm: '16px' }}
                                    fontWeight={'700'}
                                    lineHeight={{ base: '18px', xsm: '28px' }}
                                    whiteSpace={'nowrap'}

                                    _hover={{
                                        color: '#7B7EB7',
                                        textDecoration: ' none',

                                    }}
                                >
                                    {t('legalNotice')}
                                </Text>
                            </Flex>
                        </Link>
                    }


                </Flex>
                {isMobile &&
                    <Flex gap={'10px'} flexDir={'row'}>
                        <Link className='social-link' target={'_blank'} href={'https://www.instagram.com/franceprojet?igsh=MTllaWg1c3d6ZDV1cA=='} aria-label={`Instagram`} title={'Instagram'}>
                            <RiInstagramFill />
                        </Link>
                        <Link className='social-link' target={'_blank'} href={'https://www.facebook.com/share/1FAfR6T58s/?mibextid=wwXIfr'} aria-label={`Facebook`} title={'Facebook'}>
                            <FaFacebook />
                        </Link>
                    </Flex>
                }
                <Box display={{ base: 'none', xsm: 'block' }}>
                    {!isHome && <Link href={'/'} aria-label='Logo'><Logo /></Link>}
                    {isHome && <Box aria-label='Logo'><Logo /></Box>}
                </Box>
                <Box display={{ base: 'block', xsm: 'none' }}>
                    {!isHome && <Link href={'/'} aria-label='LogoMini'><LogoMini /></Link>}
                    {isHome && <Box aria-label='LogoMini'><LogoMini /></Box>}
                </Box>
                <Text display={{ base: 'block', xsm: 'none' }} textAlign={'center'} fontSize={{ base: '12px' }} color={'#999999'} lineHeight={'20px'} dangerouslySetInnerHTML={{ __html: t('copyWrite') }} />

            </Flex>


        </footer>
    );
};

export default Footer;