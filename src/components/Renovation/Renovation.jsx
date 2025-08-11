import React from 'react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { Flex, Text,useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import FormOpenBtn from '../UI/Buttons/FormOpenBtn';
import Stepper from '../UI/Modal/Stepper';

const Renovation = () => {
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <SectionLayuot props={{display: 'flex', id: 'discover'}}>
            <Text as={'h2'} w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '80px', md: '85px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('ourRenovation')}</Text>
            <Flex w={{ base: '100%', xmini: '80%', lg: '70%' }} justifyContent={'center'} flexWrap={'nowrap'} flexDir={{ base: 'column', lg: 'row' }} >
                <Flex w={{ base: '100%', lg: '50%' }} p={{ base: '24px',  sm: '40px ', desk: '34px 40px' }} flexDir={'column'} justifyContent={'space-between'} bgColor={'white'} border={'1px solid #CECECE'} gap={{ base: '12px', sm: '20px', desk: '30px' }} >
                    <Text as={'h3'} fontSize={{ sm: '20px', desk: '26px' }} fontWeight={'700'} color={'#010101'} lineHeight={'31px'} >{t('ourBusiness')}</Text>
                    <Text fontSize={{ base: '12px', sm: '14px', desk: '16px' }} color={'#444444'} lineHeight={{ base: '1.5', sm: '28px' }} dangerouslySetInnerHTML={{ __html: t('ourBusinessDesc') }} />
                </Flex>
                <Flex w={{ base: '100%', lg: '50%' }} p={{ base: '24px', sm: '40px ', desk: '34px 40px' }} flexDir={'column'} justifyContent={'space-between'} bgColor={'#2E3083'} gap={{ base: '12px', sm: '20px', desk: '30px' }} >
                    <Text as={'h3'} fontSize={{ sm: '20px', desk: '26px' }} fontWeight={'700'} color={'#FFFFFF'} lineHeight={'31px'} >{t('ourCustom')}</Text>
                    <Text fontSize={{ base: '12px', sm: '14px', desk: '16px' }} color={'#FFFFFF'} lineHeight={{ base: '1.5', sm: '28px' }} dangerouslySetInnerHTML={{ __html: t('ourCustomDesc') }} />
                </Flex>
            </Flex>
            <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={600} lineHeight={'22px'} textAlign={'center'} my={'38px'}>{t('requestsAndSend')}</Text>
            <FormOpenBtn width={'320px'} bgColor={'#2E3083'} onClick={onOpen}  >
                {t('freeEstimate')}
            </FormOpenBtn>
            <Stepper isOpen={isOpen} onClose={onClose}/>

        </SectionLayuot>
    );
    


};

export default Renovation;