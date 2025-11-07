import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';;


const Partners = () => {
    const partners = [{
            partner: '/lafarge.png',
        }, {
            partner: '/gobain.png',
        }, {
            partner: '/rochebobois.png',
        }, {
            partner: '/grone.png',
        }];
        
    return (
        <Flex
            as={'section'}
            mt={'80px'}
            justifyContent={'center'}
            bgColor={'#2E3083'}
            py={{ base: '24px', xmini: '65px' }}
            w={'100%'}
            display={'flex'}
            overflow={'hidden'}
            userSelect={'none'}
        >
            <Swiper
                slidesPerView={'4'}
                spaceBetween={32}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 3,
                    },
                    730: {
                        slidesPerView: 4,
                    }
                }}

                autoplay={{
                    delay: 0,
                    "disableOnInteraction": true,
                    // "pauseOnMouseEnter": true,
                    "stopOnLastSlide": false,
                    // "waitForTransition": true
                }}
                // a11y={true}
                // grabCursor={true}
                loopedSlides={4}
                modules={[Autoplay]}
                // className="mySwiper"
                speed={5000}

            // thumbs
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={crypto.randomUUID()} className='swiper-slide-custom' style={{ backgroundColor: '#2E3083', alignItems: 'center', justifyContent: 'center' }}>
                        <Flex  alignItems={'center!important'} justifyContent={'center'} bgColor={'#2E3083'} h={{ base: '64px', xxsm: '100px' }} >
                            <Image bgColor={'#2E3083'} w={'98%'} h={'98%'} objectFit={'contain'} src={partner.partner} alt={partner.partner + index} />
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
};

export default Partners;
