import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';;



const Partners = () => {

    const partners = [
        {
            partner: '/lafarge.png',
        },
        {
            partner: '/gobain.png',
        },
        ,
        {
            partner: '/rochebobois.png',
        },
        {
            partner: '/grone.png',
        },
    ]
    return (
        <Flex
            as={'section'}
            mt={'80px'}
            justifyContent={'center'}
            bgColor={'#2E3083'}
            py={'65px'}
            w={'100%'}
            display={{ base: 'none', xsm: 'flex' }}
            overflow={'hidden'}
        >
            <Swiper
                slidesPerView={'4'}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}


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
                    <SwiperSlide key={crypto.randomUUID()} style={{ backgroundColor: '#2E3083', alignItems: 'center', justifyContent: 'center' }}>
                            <Flex  alignItems={'center!important'} justifyContent={'center'} bgColor={'#2E3083'} h={'100px'} >




                            <Image     bgColor={'#2E3083'}   objectFit={'contain'} src={partner.partner} alt={partner.partner + index} />

                            {/* </Flex> */}
                    </Flex>
                        </SwiperSlide>

                ))}
            </Swiper>
        </Flex>
    );
};

export default Partners;
