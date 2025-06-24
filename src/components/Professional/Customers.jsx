import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../assets/logoipsum.svg';
import Red from '../../assets/red_circle.svg';
import Star from '../../assets/star_hero.svg';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';
import Kaska from '../../assets/red_kaska.svg'
import RedStars from '../../assets/red_group_stars.svg'

const Customers = ({ display }) => {
    // const { isMobile } = useDeviceDetect();
    const [isMobile] = useMediaQuery([
        "(max-width: 530px)"
    ]);

    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const router = useRouter();

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <SectionLayuot props={{ px: { base: '0px', sm: '30px', md: '0px' }, mt: { base: '50px', md: "70px", lg: '100px' } }} >
            <Text w={'85%'} as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#D22E2E'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} >{isMobile ? t('professionalsSay') : t('opinionsProfessionals')}</Text>

            <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '100%' }}

            >
                <Swiper

                    spaceBetween={5}
                    slidesPerView={1}
                    // centeredSlides={true}
                    // freeMode={true}
                    // effect='fade'
                    pagination={pagination}
                    modules={[Pagination, Navigation, FreeMode, Thumbs]}
                    className="mySwiperCustomer"
                    thumbs
                >
                    <SwiperSlide  >
                        <Flex mb={'70px'} h={{ base: '550px', xmd: '410px' }} w={'100%'} alignItems={'flex-start'}   >
                            <Flex display={{ base: 'none', xmd: 'flex' }} bgColor={'#D22827'} pos={'relative'} w={{ base: '100%', xmd: '40%', lg: '50%', desk: '45%' }} h={'100%'} p={{ base: '40px 50px 40px 40px' }} alignItems={'center'}>
                                <Text w={{ base: '60%', lg: '70%' }} fontSize={{ base: '22px', lg: '36px' }} fontWeight={{ base: '700', md: '800' }} color={'#ffff'} textAlign={'left'} lineHeight={{ base: 'normal' }}>{t('constructionProjectsInYourArea')}</Text>
                                <Image src='/customer1.png' alt={'customer'} position={'absolute'} right={'-5%'} top={'10%'} w={{ base: '213px!important' }} h={'100%'} />
                            </Flex>

                            <Flex bgColor={{ base: '#ffff', xmd: '#F5F5F5' }} w={{ base: '100%', xmd: '60%', lg: '50%', desk: '55%' }} h={'100%'} flexDir={'column'} p={{ base: '40px 50px 40px 40px' }} justifyContent={'space-between'} gap={{ base: '20px', xmd: '0px' }}>
                                <Box display={{ base: 'none', xmd: 'block' }}>
                                    <Logo />
                                </Box>
                                <Flex display={{ base: 'flex', xmd: 'none' }} justifyContent={'center'} pos={'relative'}>

                                    <Box w={{ base: '213px!important' }} h={'319px!important'} pos={'relative'}>

                                        <Image src='/customer1.png' alt={'customer2'} w={'100%'} h={'100%'} />
                                        <Box pos={'absolute'} left={'10%'} bottom={'5%'}>
                                            <RedStars />
                                        </Box>
                                    </Box>
                                    <Box pos={'absolute'} right={{ base: '-15%', xmob: '-10%', mini: '0%' }} bottom={'-3%'}>
                                        <Kaska />

                                    </Box>
                                </Flex>

                                <Text as={'p'} fontSize={'16px'} fontWeight={'400'} color={'#454545'} textAlign={'left'} lineHeight={'27.2px'}>{t('opinionsProfessionalsDescr')}</Text>

                                <Flex display={{ base: 'none', xmd: 'flex' }} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                    <Kaska />
                                    <Flex alignItems={'flex-start'} justifyContent={'space-between'} gap={'20px'}>

                                        <Flex flexDir={'column'} gap={'5px'} justifyContent={'flex-start'}>
                                            <Text as={'p'} fontSize={'24px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'33.2px'}>Andrew Stunker</Text>
                                            <Text as={'p'} fontSize={'16px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'22.2px'}>{t('franceProjetMemberSince')}</Text>
                                        </Flex>
                                    </Flex>

                                    <Flex gap={'8px'} display={{ base: 'none', desk: 'flex' }}>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />

                                    </Flex>


                                </Flex>
                            </Flex>

                        </Flex>



                    </SwiperSlide>
                    <SwiperSlide  >
                        <Flex mb={'70px'} h={{ base: '550px', xmd: '410px' }} w={'100%'} alignItems={'flex-start'}   >
                            <Flex display={{ base: 'none', xmd: 'flex' }} bgColor={'#D22827'} pos={'relative'} w={{ base: '100%', xmd: '40%', lg: '50%', desk: '45%' }} h={'100%'} p={{ base: '40px 50px 40px 40px' }} alignItems={'center'}>
                                <Text w={{ base: '60%', lg: '70%' }} fontSize={{ base: '22px', lg: '36px' }} fontWeight={{ base: '700', md: '800' }} color={'#ffff'} textAlign={'left'} lineHeight={{ base: 'normal' }}>{t('constructionProjectsInYourArea')}</Text>
                                <Image src='/customer1.png' alt={'customer'} position={'absolute'} right={'-5%'} top={'10%'} w={{ base: '213px!important' }} h={'100%'} />
                            </Flex>

                            <Flex bgColor={{ base: '#ffff', xmd: '#F5F5F5' }} w={{ base: '100%', xmd: '60%', lg: '50%', desk: '55%' }} h={'100%'} flexDir={'column'} p={{ base: '40px 50px 40px 40px' }} justifyContent={'space-between'} gap={{ base: '20px', xmd: '0px' }}>
                                <Box display={{ base: 'none', xmd: 'block' }}>
                                    <Logo />
                                </Box>
                                <Flex display={{ base: 'flex', xmd: 'none' }} justifyContent={'center'} pos={'relative'}>

                                    <Box w={{ base: '213px!important' }} h={'319px!important'} pos={'relative'}>

                                        <Image src='/customer1.png' alt={'customer'} w={'100%'} h={'100%'} />
                                        <Box pos={'absolute'} left={'10%'} bottom={'5%'}>
                                            <RedStars />
                                        </Box>
                                    </Box>
                                    <Box pos={'absolute'} right={{ base: '-15%', xmob: '-10%', mini: '0%' }} bottom={'-3%'}>
                                        <Kaska />

                                    </Box>
                                </Flex>

                                <Text as={'p'} fontSize={'16px'} fontWeight={'400'} color={'#454545'} textAlign={'left'} lineHeight={'27.2px'}>{t('opinionsProfessionalsDescr')}</Text>

                                <Flex display={{ base: 'none', xmd: 'flex' }} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                    <Kaska />
                                    <Flex alignItems={'flex-start'} justifyContent={'space-between'} gap={'20px'}>

                                        <Flex flexDir={'column'} gap={'5px'} justifyContent={'flex-start'}>
                                            <Text as={'p'} fontSize={'24px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'33.2px'}>Andrew Stunker</Text>
                                            <Text as={'p'} fontSize={'16px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'22.2px'}>{t('franceProjetMemberSince')}</Text>
                                        </Flex>
                                    </Flex>

                                    <Flex gap={'8px'} display={{ base: 'none', desk: 'flex' }}>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />

                                    </Flex>


                                </Flex>
                            </Flex>

                        </Flex>



                    </SwiperSlide>

                </Swiper>
            </Flex>
        </SectionLayuot>
    );
};

export default Customers;