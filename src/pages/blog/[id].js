'use client';
import Contact from '@/components/Contact/Contact';
import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { useEffect } from 'react';

import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Image, Text } from '@chakra-ui/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { getBlogs } from '../api/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loader from '@/components/UI/Loader';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const index = ({ blogs }) => {
    const { t } = useTranslation('common');
    // console.log('🚀 ~ index ~ blogs:', blogs);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperRef, setSwiperRef] = useState(null);

    //   const slideTo = (index) => {
    //     swiperRef.slideTo(index - 1, 0);
    //   };
    useEffect(() => {
        if (swiperRef) {
            swiperRef.slideTo(1, 0);
        }
    }, [swiperRef]);

    return (
        <>
        <Head>
            <title>{t('blogs')}</title>
            <meta property="og:title" content={t('blogs')} />
            <meta property="og:description" content={t('meta:description')} />
        </Head>
        <main>
            <SectionLayuot props={{ mt: '20px' }}>
                <Text 
                    as={'h1'}
                    fontSize={{ base: '24px', xsm: '36px' }}
                    fontWeight={{ base: '700' }}
                    color={'#2E3083'}
                    textTransform={'uppercase'}
                >
                    {t('blogs')}
                </Text>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    fadeEffect={true}
                    // freeMode={true}
                    onSwiper={setSwiperRef}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper4"
                >
                    {blogs?.map(blog => (
                        <SwiperSlide key={crypto.randomUUID()} >
                            <Flex
                                flexDir={'column'}
                                w={'100%'}
                                alignItems={'start'}
                                justifyContent={'start'}
                            >
                                <Text
                                    as={'p'}
                                    fontSize={{ base: '20px', xsm: '32px' }}
                                    fontWeight={{ base: '700' }}
                                    color={'#2E3083'}
                                    textAlign={'left'}
                                    lineHeight={{
                                        base: 'normal',
                                        xsm: '43.58px',
                                    }}
                                    mb={{ base: '20px', xsm: '42px' }}
                                    textTransform={{ base: 'none' }}
                                >
                                    {blog.title}
                                </Text>

                                <Image
                                    src={blog.photo}
                                    alt={'image' + blog.slug}
                                    borderRadius={'10px'
                                }
                                />
                                <Text
                                    as={'p'}
                                    w={{ base: '100%' }}
                                    fontSize={{ base: '16px', lg: '22px' }}
                                    fontWeight={700}
                                    lineHeight={{ base: '20px', lg: '26px' }}
                                    textAlign={'left'}
                                    mt={'30px'}
                                    color={'#2E3083'}
                                    dangerouslySetInnerHTML={{
                                        __html: blog.text,
                                    }}
                                ></Text>
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    // navigation={true}

                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper3"
                >
                    {blogs?.map(blog => (
                        <SwiperSlide key={crypto.randomUUID()} >
                            <Image
                                objectFit={'contain'}
                                src={blog.photo}
                                alt={'image' + blog.slug}
                                borderRadius={'10px'}
                                aspectRatio={'16/9'}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SectionLayuot>
            <Contact />
        </main>
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true, // Render page at runtime for unmatched paths
    };
}
// export async function getStaticPaths({locale}) {
//     // Fetch the IDs of blogs from your API or any data source
//     const blogs = await getBlogs(locale || 'fr'); // Adjust based on your API function

//     // Map the blog IDs to the paths
//     const paths = blogs.map((blog) => ({
//         params: { id: blog.slug },
//     }));

//     return {
//         paths,
//         fallback: true // Set fallback to true if you want to render the page for unmatched paths at runtime
//     };
// }
// export async function getStaticProps({ locale }) {
//     // const id = params.id;
//     const blogsData = await getBlogs(locale || 'fr');
//     if (blogsData) {
//         return {
//             props: {
//                 blogs: blogsData,
//                 ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
//             },
//         };
//       } else {
//         return <Loader/>

//       }

// }
export async function getStaticProps({ locale }) {
    try {
        const blogsData = await getBlogs(locale ?? 'fr');

        if (!blogsData) {
            return {
                notFound: true, // or handle the case where data is not available
            };
        }

        return {
            props: {
                blogs: blogsData,
                ...(await serverSideTranslations(locale ?? 'fr', ['common', 'meta'])),
            },
        };
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return {
            notFound: true, // or handle the error case
        };
    }
}

export default index;
