import { useRouter } from 'next/router';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';

// import '@/styles/swiper.css'
import { Flex, Image,  Text, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getNews } from '@/pages/api/api';
import Link from 'next/link';

const Trends = ({ untitled = false, px }) => {
    // const { isMobile } = useDeviceDetect();
    const [isMobile, isDesk] = useMediaQuery([
        "(max-width: 577px)",
        "(min-width: 578px) and (max-width: 1024px)"
    ]);

    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        getNews(router.locale).then(res => {
            setNews(res.data);

        }).catch(error => {
            console.error('Error fetching news:', error);
        });
    }, [router.locale]);
    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <SectionLayuot props={px && {px: px}}>
            <Text display={untitled ? 'none' : 'block'} as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('trends')}</Text>

            <Flex w={router.pathname === '/news/[id]' ? '100%' : { base: '100%', mini: '100%', sm: '90%', lg: '90%' }}

            >
                <Swiper

                    spaceBetween={35}
                    slidesPerView={isMobile ? 1 : isDesk ? 2 : 3}
                    // centeredSlides={true}
                    freeMode={true}
                    effect='fade'
                    pagination={pagination}
                    modules={[Pagination, Navigation, FreeMode, Thumbs]}
                    thumbs
                    className="mySwiper2"

                >

                    {router.asPath !== `/news/${router.query.id}` ? (

                        news.map((news) => (
                            <SwiperSlide  key={crypto.randomUUID()} >
                                <Flex flexDir={'column'} w={'100%'} alignItems={'flex-start'} mb={'30px'} justifyContent={'flex-start'}   >
                                    {/* <Image src="/tendances1.png" alt="project1" objectFit='cover' aspectRatio={'1/1'} />
                   <Text as={'h4'} fontSize={{ base: '24px' }} mt={'17px'} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '33.58px' }}   >Une journée avec une Architecte d’Interieur</Text> */}
                                    <Link href={`/news/${news.slug}`} _hover={{
                                        color: '#7B7EB7',
                                        textDecoration: ' none',
                                    }} className='link'
                                    aria-label={`/news/${news.slug}`}
                                    >
                                        <Image src={news.photo} alt={'image' + news.slug} objectFit='cover' aspectRatio={'1/1'} _hover={{
                                            opacity: '0.8',
                                            // textDecoration: ' none',
                                        }} />


                                        <Text as={'h4'} fontSize={{ base: '24px' }} mt={'17px'} _hover={{
                                            color: '#7B7EB7',
                                            // textDecoration: ' none',
                                        }} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '33.58px' }}   >{news.title}</Text>

                                    </Link>
                                    <Text as={'span'} fontSize={{ base: '15px' }} fontWeight={{ base: '400' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '21px' }}>news</Text>
                                </Flex>

                            </SwiperSlide>
                        ))
                    )
                        :
                        (
                            news.filter(news => news.slug !== router.query.id).map((news) => (
                                <SwiperSlide  key={crypto.randomUUID()} >
                                    <Flex flexDir={'column'} w={'100%'} alignItems={'flex-start'} mb={'30px'} justifyContent={'flex-start'}   >
                                        {/* <Image src="/tendances1.png" alt="project1" objectFit='cover' aspectRatio={'1/1'} />
                   <Text as={'h4'} fontSize={{ base: '24px' }} mt={'17px'} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '33.58px' }}   >Une journée avec une Architecte d’Interieur</Text> */}
                                        <Link href={`/news/${news.slug}`} _hover={{
                                            color: '#7B7EB7',
                                            textDecoration: ' none',
                                        }} className='link'
                                    aria-label={`/news/${news.slug}`}
                                        
                                        >
                                            <Image src={news.photo} alt={'image' + news.slug} objectFit='cover' aspectRatio={'1/1'} _hover={{
                                                opacity: '0.8',
                                                // textDecoration: ' none',
                                            }} />


                                            <Text as={'h4'} fontSize={{ base: '24px' }} mt={'17px'} _hover={{
                                                color: '#7B7EB7',
                                                // textDecoration: ' none',
                                            }} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '33.58px' }}   >{news.title}</Text>

                                        </Link>
                                        <Text as={'span'} fontSize={{ base: '15px' }} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '21px' }}>news</Text>
                                    </Flex>

                                </SwiperSlide>
                            ))
                        )
                    }



                </Swiper>
            </Flex>
        </SectionLayuot>
    );
};

export default Trends;