import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import Logo from '../../assets/Logo.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin-icon.svg';
import LogoMini from '../../assets/Logo-mini.svg';
import Link from 'next/link';
const Footer = () => {
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const [isMobile] = useMediaQuery([
        "(max-width: 430px)"
    ]);

    const router = useRouter();
    return (
        <footer>
            <Flex w={'100%'} justifyContent={'space-evenly'} flexDir={'column'} alignItems='center' py={'24px'} gap={{ base: '20px', xsm: '40px' }} px={{ base: '80px', md: '100px', lg: '140px' }}>
                {!isMobile &&
                    <Flex gap={'10px'} flexDir={'row'}>
                        <Link href={'/'} aria-label={`Linkedin`}> <Linkedin /></Link>
                        <Link href={'/'} aria-label={`Instagram`}> <Instagram /></Link>
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
                        <Link href={'/'} aria-label={`Linkedin`}> <Linkedin /></Link>
                        <Link href={'/'} aria-label={`Instagram`}> <Instagram /></Link>
                    </Flex>
                }
                <Box display={{ base: 'none', xsm: 'block' }}><Link href={'/'} aria-label={`Logo`}> <Logo /></Link></Box>
                <Box display={{ base: 'block', xsm: 'none' }}><Link href={'/'} aria-label={`LogoMini`}> <LogoMini /></Link></Box>
                <Text display={{ base: 'block', xsm: 'none' }} textAlign={'center'} fontSize={{ base: '12px' }} color={'#999999'} lineHeight={'20px'} dangerouslySetInnerHTML={{ __html: t('copyWrite') }} />

            </Flex>


        </footer>
    );
};

export default Footer;