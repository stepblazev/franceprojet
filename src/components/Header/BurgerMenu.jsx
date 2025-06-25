'use client'
import { Box, Drawer, Flex, Link, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import {
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader
} from "@chakra-ui/react";
import { useTranslation } from 'next-i18next';
import LogoMini from '../../assets/Logo-mini.svg';
import Logo from '../../assets/Logo.svg';
import SelectLocal from './SelectLocal';
import { IoMdMenu } from "react-icons/io";

const BurgerMenu = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const MenuModalAction = useDisclosure();
    const btnRef = useRef();



    return (
        <>
            <Box
                className='burger-menu'
                display={router.pathname !== '/' ? { base: 'block', xdesk: 'none' } : { base: 'block', xlg: 'none' }}
                onClick={MenuModalAction.onOpen}
                ref={btnRef}
            >
                <IoMdMenu />
            </Box>
            <Drawer
                isOpen={MenuModalAction.isOpen}
                placement='top'
                onClose={MenuModalAction.onClose}
                finalFocusRef={btnRef}
                size={'full'}
            >
                <DrawerContent bgColor={'#7B7EB7'} justifyContent={'center'} alignItems={'center'} width={'100%'} h={'100vh'}  >
                    <DrawerCloseButton color={'#FFFFFF'} mt={'9px'} mr={'20px'} />
                    <DrawerHeader alignItems={'center'} w={'100%'} flexDir={'row'} pt={'20px'}>
                        <Flex style={{ alignItems: 'center' }} flexDir={'row'} justifyContent={'space-between'} w={'80%'} gap={'20px'}>
                            <Link href={'/'} display={{ base: 'none', sm: 'block' }} aria-label={`Logo`}> <Logo /></Link>
                            <Link href={'/'} display={{ base: 'block', sm: 'none' }} aria-label={`LogoMini`}> <LogoMini /></Link>
                            <SelectLocal isBurgerMenuOpen={MenuModalAction.isOpen} />
                        </Flex>

                    </DrawerHeader>

                    <DrawerBody>
                        {router.pathname !== '/professional'
                        ?
                        <Flex flexDir={'column'} w={'100%'} mb={'20vh'} h={'70%'} justifyContent={'center'}>

                            <Link
                                href='/#discover'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }} >
                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'uppercase'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('discover')}
                                </Text>

                            </Link>
                            <Link
                                href='/#realisation'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }} >
                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'uppercase'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('realisation')}
                                </Text>

                            </Link>
                            <Link
                                href='/#application'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }} >
                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'uppercase'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('application')}
                                </Text>

                            </Link>
                            <Link
                                href='/#contact'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }} >
                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'uppercase'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('contact')}
                                </Text>

                            </Link>

                            <Link
                                href='/professional'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }}
                            >

                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'uppercase'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('professional')}

                                </Text>

                            </Link>
                        </Flex>
                        :
                        <Flex flexDir={'column'} w={'100%'} mb={'20vh'} h={'70%'} justifyContent={'center'}>


                            <Link
                                href='#'
                                p={'12px 16px'}
                                w={'100%'}
                                _hover={{
                                    color: '#454545'
                                }}
                            >

                                <Text
                                    onClick={MenuModalAction.onClose}
                                    ml={'10px'}
                                    fontSize={'24px'}
                                    fontWeight={'600'}
                                    lineHeight={'32px'}
                                    color={'#FFFFFF'}
                                    textDecoration={'capitalize'}
                                    alignItems={'center'}
                                    cursor={'pointer'}
                                    _hover={{
                                        color: '#454545'
                                    }}

                                >
                                    {t('individual')}

                                </Text>

                            </Link>
                        </Flex>
                        }


                    </DrawerBody>


                </DrawerContent>
            </Drawer>

        </>
    );
};

export default BurgerMenu;


