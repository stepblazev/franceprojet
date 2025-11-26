import Logo from '../../assets/Logo.svg';
import User from '../../assets/User.svg';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import LogoMini from '../../assets/Logo-mini.svg';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import FormOpenBtn from '../UI/Buttons/FormOpenBtn';
import Stepper from '../UI/Modal/Stepper';
import SelectLocal from './SelectLocal';
import ReturnBtn from '../UI/Buttons/ReturnBtn';
import JoinFranceprojet from '../UI/Modal/JoinFranceprojet';
import Link from 'next/link';
import useIsHomePage from '@/hooks/useIsHomePage';

const Header = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const { isOpen, onClose, onOpen } = useDisclosure()
    const isHome = useIsHomePage();
    
    const handelClick = () => {
        if (router.pathname !== '/professional') {
            router.push('/professional')
        }
        else if (router.pathname === '/professional') {
            router.push('/')
        }
    }
    
    return (
        <header className='header'>
            <Flex justifyContent='space-between' flexGrow={0} alignItems='center' h='75px' px={{ base: '10px', md: '20px', lg: '30px' }} borderBottom='3px solid #2E3083'>
                <Flex alignItems='center' justifyContent='space-between' w='100%' display={{ base: 'flex', xlg: 'none' }}>
                    <Box display={{ base: 'none', sm: 'block' }}>
                        {!isHome && <Link href={'/'} aria-label='Logo'><Logo /></Link>}
                        {isHome && <Box aria-label='Logo'><Logo /></Box>}
                    </Box>
                    <Box display={{ base: 'block', sm: 'none' }}>
                        {!isHome && <Link href={'/'} aria-label='LogoMini'><LogoMini /></Link>}
                        {isHome && <Box aria-label='LogoMini'><LogoMini /></Box>}
                    </Box>
                    <BurgerMenu />
                </Flex>

                <Flex alignItems='center' justifyContent='space-between' w='100%'
                    display={{ base: 'none', xlg: 'flex' }}
                    gap={'20px'}
                >

                    <Box display={{ base: 'none', desk: 'block' }}>
                        {!isHome && <Link href={'/'} aria-label='Logo'><Logo /></Link>}
                        {isHome && <Box aria-label='Logo'><Logo /></Box>}
                    </Box>
                    <Box display={{ base: 'block', desk: 'none' }}>
                        {!isHome && <Link href={'/'} aria-label='LogoMini'><LogoMini /></Link>}
                        {isHome && <Box aria-label='LogoMini'><LogoMini /></Box>}
                    </Box>
                    <Menu />
                    <Flex gap={'20px'} alignItems={'center'} maxW={'120px'} w={'100%'} justifyContent={'space-between'}>
                        <Link w={'30px'} h={'30px'} href={'#'} > <User /></Link>

                        <SelectLocal />
                    </Flex>
                    <Flex gap={{ base: '20px', md: '30px', lg: '30px', desk: '30px' }} >

                        <ReturnBtn text={router.pathname === '/professional' ? t('individual') : t('professional')} onClick={handelClick} />

                        <FormOpenBtn width={{ base: '200px', xxlg: '240px' }} bgColor={router.pathname !== '/professional' ? '#2E3083' : '#D22827'} onClick={onOpen} >
                            {router.pathname === '/professional' ? t('joinFranceprojet') : t('estimate_my_project')}
                        </FormOpenBtn>
                    </Flex>
                </Flex>
            </Flex>
            {
                router.pathname === '/professional'
                    ?
                    <JoinFranceprojet isOpen={isOpen} onClose={onClose} />
                    :
                    <Stepper isOpen={isOpen} onClose={onClose} />
            }
        </header>
    );
};

export default Header;