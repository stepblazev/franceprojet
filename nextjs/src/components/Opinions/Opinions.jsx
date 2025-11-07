import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../assets/google.svg';
import Red from '../../assets/red_circle.svg';
import Star from '../../assets/star_hero.svg';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';

const Opinions = ({display}) => {
    // const { isMobile } = useDeviceDetect();
    const [isMobile] = useMediaQuery([
        "(max-width: 730px)"      
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
        <SectionLayuot props={{ display: display }} >
            <Text as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('opinionsTitle')}</Text>
            <Flex w={{ base: '100%', mini: '100%', sm: '100%', lg: '90%' }}
            >
                <Swiper
                    spaceBetween={35}
                    slidesPerView={isMobile ? 1 : 2}
                    // centeredSlides={true}
                    freeMode={true}
                    effect='fade'
                    pagination={pagination}
                    modules={[Pagination, Navigation, FreeMode, Thumbs]}
                    className="mySwiper2"
                    thumbs
                >
                    <SwiperSlide >
                        <Flex mb={'50px'}  padding={{base: '30px 20px ',desk:'40px 10px 10px 40px'}} flexDir={'column'} h={{ base:'560px', lg: '386px' }} bgColor={'#F5F5F5'} w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}   >
                            <Logo />
                            <Text as={'p'} fontSize={'16px'} fontWeight={'400'} color={'#454545'} textAlign={'left'} lineHeight={'27.2px'}>I recently used a construction service for a home renovation project, and I couldn't be happier with the results. The team was professional, efficient, and knowledgeable throughout the entire process. They communicated with me regularly to ensure that everything was going according to plan and made sure that any issues were promptly addressed. </Text>

                            <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                <Flex alignItems={'flex-start'} justifyContent={'space-between'} gap={'20px'}>
                                    <Red />
                                    <Flex flexDir={'column'} gap={'5px'} justifyContent={'flex-start'}>
                                        <Text as={'p'} fontSize={'24px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'33.2px'}>Andrew Stunker</Text>
                                        <Text as={'p'} fontSize={'16px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'22.2px'}>{t('apartmentLyon')}</Text>
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

                    </SwiperSlide>

                    <SwiperSlide >
                        <Flex mb={'50px'} padding={{base: '30px 20px ',desk:'40px 10px 10px 40px'}} flexDir={'column'} h={{ base:'560px', lg: '386px' }} bgColor={'#F5F5F5'} w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}   >
                            <Logo />
                            <Text as={'p'} fontSize={'16px'} fontWeight={'400'} color={'#454545'} textAlign={'left'} lineHeight={'27.2px'}>I recently used a construction service for a home renovation project, and I couldn't be happier with the results. The team was professional, efficient, and knowledgeable throughout the entire process. They communicated with me regularly to ensure that everything was going according to plan and made sure that any issues were promptly addressed. </Text>

                            <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                <Flex alignItems={'flex-start'} justifyContent={'space-between'} gap={'20px'}>
                                    <Red />
                                    <Flex flexDir={'column'} gap={'5px'} justifyContent={'flex-start'}>
                                        <Text as={'p'} fontSize={'24px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'33.2px'}>Andrew Stunker</Text>
                                        <Text as={'p'} fontSize={'16px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'22.2px'}>{t('apartmentLyon')}</Text>
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



                    </SwiperSlide>
                    <SwiperSlide >
                        <Flex padding={{base: '30px 20px ',desk:'40px 10px 10px 40px'}} flexDir={'column'} h={{ base:'560px', lg: '386px' }} bgColor={'#F5F5F5'} w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}   >
                            <Logo />
                            <Text as={'p'} fontSize={'16px'} fontWeight={'400'} color={'#454545'} textAlign={'left'} lineHeight={'27.2px'}>I recently used a construction service for a home renovation project, and I couldn't be happier with the results. The team was professional, efficient, and knowledgeable throughout the entire process. They communicated with me regularly to ensure that everything was going according to plan and made sure that any issues were promptly addressed. </Text>

                            <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                <Flex alignItems={'flex-start'} justifyContent={'space-between'} gap={'20px'}>
                                    <Red />
                                    <Flex flexDir={'column'} gap={'5px'} justifyContent={'flex-start'}>
                                        <Text as={'p'} fontSize={'24px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'33.2px'}>Andrew Stunker</Text>
                                        <Text as={'p'} fontSize={'16px'} fontWeight={'600'} color={'#454545'} textAlign={'left'} lineHeight={'22.2px'}>{t('apartmentLyon')}</Text>
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



                    </SwiperSlide>

                </Swiper>
            </Flex>
        </SectionLayuot>
    );
};

export default Opinions;