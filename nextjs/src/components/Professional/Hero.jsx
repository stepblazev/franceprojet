import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import FormOpenBtn from '../UI/Buttons/FormOpenBtn';
// import Stepper from '../UI/Modal/Stepper';
import JoinFranceprojet from '../UI/Modal/JoinFranceprojet';

const Hero = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { t } = useTranslation('common');
    return (
        <Box as={'section'} h={{ base: '850px', mini: '860px',  sm: '960px',xmob: '870px', xsm: '860px' ,md: '870px', lg: '870px',desk: '870px', xdesk: '870px' }} w={'100%'} overflowY={'hidden'}>
            <Flex justifyContent={'center'} flexDir={'column'} alignItems={'start'} h={'100%'} w={'100%'} >
                <Flex backgroundImage={{base:'url(/optimized/Background2_mob.webp)', xsm:'url(/optimized/Background2.webp)'}} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} flexDir={'column'}  justifyContent={{base:'center'}} alignItems={'start'} h={'100%'} w={'100%'}  px={{ base: '15px',sm: '50px',xmd: '80px',xlg: '100px',xdesk: '120px' }}  >

                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={600} lineHeight={'27px'} textAlign={'left'} mb={'30px'} textTransform={'uppercase'}>{t('franceProjet')}</Text>
                    <Flex flexDir={'column'} alignItems={'start'} maxW={'991px'} w={'100%'} gap={'72px'}>
                        <Text as={'h1'} color={'#2E3083'} fontSize={{ base: '36px', md: '65px' }} fontWeight={800} lineHeight={{ base: '45px', md: '78px' }} textAlign={'left'} >{t('discoverBestProjects')}</Text>

                        {/* <Text as={'p'} color={'#2E3083'} fontSize={{ base: '14px', md: '16px' }} fontWeight={800} lineHeight={{ base: '23px', md: '27px' }} textAlign={'left'} textTransform={'uppercase'} >{t('entrustYourProperty')}</Text> */}
                        <FormOpenBtn width={'260px'} bgColor={'#D22827'} onClick={onOpen}>
                            {t('createListing')}
                        </FormOpenBtn>
                    </Flex>
                    <Flex mt={'100px'} flexDir={'column'} maxW={'750px'} gap={'10px'} display={{ base: 'none', md: 'flex' }}
                    >
                        <Text as={'p'} color={'#D22827'} fontSize={'16px'} fontWeight={800} lineHeight={'19px'} textAlign={'left'} textTransform={'uppercase'} >{t('plentyProjectsAround')}</Text>
                        <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={400} lineHeight={'19px'} textAlign={'left'} >{t('determineWorkZone')}</Text>

                    </Flex>

                </Flex>

                <Flex mt={'75px'} px={{ base: '15px', md: '30px', lg: '40px' }} flexDir={'column'} maxW={'750px'} gap={'20px'} display={{ base: 'flex', md: 'none' }}
                >
                    <Text as={'p'} color={'#D22827'} fontSize={'16px'} fontWeight={800} lineHeight={'19px'} textAlign={'center'} textTransform={'uppercase'} >{t('plentyProjectsAround')}</Text>
                    <Text as={'p'} color={'#2E3083'} fontSize={'16px'} fontWeight={400} lineHeight={'19px'} textAlign={'center'} >{t('determineWorkZone')}</Text>

                </Flex>
            </Flex>


            <JoinFranceprojet isOpen={isOpen} onClose={onClose} />

        </Box>

    );
};



export default Hero;