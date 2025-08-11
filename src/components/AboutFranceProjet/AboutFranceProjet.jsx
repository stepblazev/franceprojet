import { Box, Flex, Image, Text } from '@chakra-ui/react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next'
const AboutFranceProjet = () => {
    const { t } = useTranslation('common');
    return (
        <SectionLayuot props={{display: 'flex'}}>
            <Box w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }}>
                               <Text as={'h2'} fontSize={{ base: '32px', md: '55px' }}  fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('aboutFranceProjet')}</Text>
                <Flex alignItems={{base:'center',desk:'flex-start'}} w={'100%'}  flexDir={{base: 'column', desk:'row'}} justifyContent={'space-between'} gap={{base:'40px',desk:'80px'}}>
                    <Text   as={'p'} w={{base: '100%',desk:'60%', desk:'60%'}} fontSize={{ base: '14px', md: '21px' }} fontWeight={600} lineHeight={{ base: '1.5', md: '31px' }} textAlign={'left'} color={'#2E3083'} dangerouslySetInnerHTML={{ __html: t('aboutFranceProjetDesc') }} />
                    <Flex  w={{base: '100%',lg:'60%',desk:'40%'}} h={'100%'} justifyContent={'center'}>
                    <Image objectFit={'cover'} w={{base: '60%',desk:'100%'}} h={'100%'} flex={'1'} src={'/aboutFranceProjet.png'} alt={'about-france-projet'} />

                    </Flex>

                </Flex>
            </Box>

        </SectionLayuot>
    );
};

export default AboutFranceProjet;