import { useRouter } from 'next/router';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';

// import '@/styles/swiper.css'
import { Flex, Image, Text, useMediaQuery, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getProjects } from '@/pages/api/api';
import Link from 'next/link';

import cls from './project.module.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Projects = ({ untitled = false }) => {  
    const [isMobile, isDesk] = useMediaQuery([
        '(max-width: 577px)',
        '(min-width: 578px) and (max-width: 1024px)',
    ]);

    const { t } = useTranslation('common');
    const router = useRouter();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects(router.locale)
            .then(res => {
                setProjects(res.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, [router.locale]);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <SectionLayuot props={{ id: 'realisation' }}>
            <Text
                as={'h2'}
                display={untitled ? 'none' : 'block'}
                fontSize={{ base: '32px', md: '55px' }}
                fontWeight={{ base: '700', md: '800' }}
                color={'#2E3083'}
                textAlign={'center'}
                lineHeight={{ base: '43.58px', md: '66px' }}
                mb={{ base: '42px', md: '72px' }}
                textTransform={{ base: 'none', md: 'uppercase' }}
            >
                {isMobile ? t('ourProjects') : t('ourProjectsMob')}
            </Text>
            <Flex w={{ base: '100%', mini: '90%', lg: '90%' }}>
                <Swiper
                    spaceBetween={35}
                    slidesPerView={isMobile ? 1 : isDesk ? 2 : 3}
                    // centeredSlides={true}
                    freeMode={true}
                    effect="fade"
                    pagination={pagination}
                    modules={[Pagination, Navigation, FreeMode, Thumbs]}
                    className="mySwiper1"
                    style={{ padding: '8px 0 80px 0' }}
                >
                    {router.asPath !== `/project/${router.query.id}` || true
                        ? projects.map(project => (
                              <SwiperSlide key={crypto.randomUUID()} className='swiper-slide-custom' style={{ height: 'auto' }}>
                                  <Link
                                      className={cls.project}
                                      href={'/project/' + project.slug}
                                      aria-label={'/project/' + project.slug}
                                  >
                                        <Image
                                            src={project.photo}
                                            alt={'image' + project.slug}
                                            className={cls.project__image}
                                        />
                                        <Box className={cls.project__info}>
                                            <Text
                                                as={'h5'}
                                                className={cls.project__title}
                                                fontSize={{
                                                    base: '18px',
                                                    xmini: '16px',
                                                    xlg: '20px',
                                                }}
                                                fontWeight={{ base: '700' }}
                                                textTransform={{
                                                    base: 'lowercase',
                                                    md: 'capitalize',
                                                }}
                                            >
                                                {project.title}
                                            </Text>
                                            <Box className={cls.project__arrow}>
                                                <MdOutlineArrowForwardIos />
                                            </Box>
                                        </Box>
                                  </Link>
                              </SwiperSlide>
                          ))
                        : projects
                              .filter(project => project.slug !== router.query.id)
                              .map(project => (
                                  <SwiperSlide key={crypto.randomUUID()}>
                                      <Link
                                          href={'/project/' + project.slug}
                                          _hover={{
                                              textDecoration: ' none',
                                          }}
                                          className="link"
                                      >
                                          <Box
                                              mb={'80px'}
                                              w={'100%'}
                                              display={'flex'}
                                              pos={'relative'}
                                              justifyContent={'center'}
                                          >
                                              <Image
                                                  src={project.photo}
                                                  alt={'image' + project.slug}
                                                  aspectRatio={'1/1'}
                                                  _hover={{
                                                      opacity: '0.8',
                                                  }}
                                              />
                                              <Box
                                                  pos={'absolute'}
                                                  bottom={'0px'}
                                                  right={'0'}
                                                  w={'100%'}
                                                  overflow={'hidden'}
                                              >
                                                  <Image src="/project_link.png" alt="project1" />
                                                  <Text
                                                      pos={'absolute'}
                                                      top={'10%'}
                                                      left={'2%'}
                                                      as={'h5'}
                                                      fontSize={{
                                                          base: '18px',
                                                          xmini: '16px',
                                                          xlg: '20px',
                                                      }}
                                                      w={'80%'}
                                                      fontWeight={{ base: '700' }}
                                                      color={'#000'}
                                                      textAlign={'left'}
                                                      lineHeight={{ base: 'normal' }}
                                                      textTransform={{
                                                          base: 'lowercase',
                                                          md: 'capitalize',
                                                      }}
                                                  >
                                                      {project.title}
                                                  </Text>
                                              </Box>
                                          </Box>
                                      </Link>
                                  </SwiperSlide>
                              ))}
                </Swiper>
            </Flex>
        </SectionLayuot>
    );
};

export default Projects;
