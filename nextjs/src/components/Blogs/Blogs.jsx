import { useRouter } from 'next/router';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';

// import '@/styles/swiper.css'
import { Flex, Image,    Text, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getBlogs } from '@/pages/api/api';
import Link from 'next/link';
const Blogs = () => {
    // const { isMobile } = useDeviceDetect();
    const [isMobile, isDesk] = useMediaQuery([
        "(max-width: 577px)",
        "(min-width: 578px) and (max-width: 1024px)"
    ]);

    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const { locale } = useRouter();
    // console.log("🚀 ~ Blogs ~ router:", router)
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getBlogs(locale).then(res => {
            setBlogs(res);

        }).catch(error => {
            console.error('Error fetching blogs:', error);
        });



    }, [locale]);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <SectionLayuot props={{ display: { base: 'none', xsm: 'flex' } }}>
            <Text as={'h2'} fontSize={{ base: '32px', md: '55px' }} fontWeight={{ base: '700', md: '800' }} color={'#2E3083'} textAlign={'center'} lineHeight={{ base: '43.58px', md: '66px' }} mb={{ base: '42px', md: '72px' }} textTransform={{ base: 'none', md: 'uppercase' }}>{t('blogs')}</Text>
            <Flex w={{ base: '100%', mini: '90%', lg: '90%' }}>
                <Swiper

                    spaceBetween={35}
                    slidesPerView={isMobile ? 1 : isDesk ? 2 : 3}
                    // centeredSlides={true}
                    freeMode={true}
                    effect='fade'
                    pagination={pagination}
                    modules={[Pagination, Navigation, FreeMode, Thumbs]}
                    className="mySwiper2"
                // thumbs
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide key={crypto.randomUUID()}>

                            <Flex  flexDir={'column'} w={'100%'} alignItems={'flex-start'} mb={'30px'} justifyContent={'flex-start'}   >
                                <Flex flexDir={'column'} w={'100%'} flexGrow={1}> 
                                <Link href={`/blog/${blog.slug}`} _hover={{
                                    color: '#7B7EB7',
                                    textDecoration: ' none',
                                }}
                                aria-label={`/blog/${blog.slug}`}
                                >
                                    <Image src={blog.photo} alt={'image' + blog.slug} objectFit='cover' aspectRatio={'1/1'} _hover={{
                                        opacity: '0.8',
                                    }} />
                                    <Text as={'h4'} fontSize={{ base: '24px' }} mt={'17px'} _hover={{
                                        color: '#7B7EB7',
                                        // textDecoration: ' none',
                                    }} fontWeight={{ base: '600' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '33.58px' }}   >{blog.title}</Text>
                                </Link>
                                <Text as={'span'} fontSize={{ base: '15px' }} fontWeight={{ base: '400' }} color={'#2E3083'} textAlign={'left'} lineHeight={{ base: '21px' }}   >blog</Text>
                            </Flex>
                                </Flex>
                                
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Flex>
        </SectionLayuot>
    );
};

export default Blogs;