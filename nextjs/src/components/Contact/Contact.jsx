import { Box, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SectionLayuot from '../UI/Layouts/SectionLayuot';
import { useTranslation } from 'next-i18next';

import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import SuccessSubmit from '../UI/Modal/SuccessSubmit';

const Contact = () => {
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure();

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
        },
    });

    const onSubmit = async data => {
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/forms/contact?yourName=${data.name}&yourSociety=${data.company}&yourEmail=${data.email}&yourPhone=${data.phone}`,
            )
            .then(response => {
                if (response.data.status == 1) {
                    onOpen();
                }
            })
            .catch(error => {
                console.log(error);
            });

        reset();
    };

    return (
        <SectionLayuot
            props={{
                px: { base: '0px!important' },
                maxH: '869px',
                h: 'auto',
                id: 'contact',
                overflow: 'hidden',
                mt:
                    router.pathname === '/'
                        ? { base: '50px', md: '100px', lg: '180px' }
                        : { base: '50px', md: '100px', lg: '135px' },
            }}
        >
            <Flex 
                w={'100%'} h={'auto'} 
                justifyContent={{ base: 'center', xlg: 'unset' }}
                flexDirection={{ base: 'column', xxxsm: 'row' }}
            >
                <Flex
                    w={{ base: '100%', xxxsm: 'fit-content' }}
                    h={'auto'}
                    justifyContent={{ base: 'center', xsm: 'flex-start' }}
                    alignItems={'center'}
                    p={{ base: '80px 20px 55px', xxxsm: '40px', xlg: '77px 65px' }}
                    flexDir={'column'}
                    bgColor={{ base: '#eeeeee', xxxsm: '#2E3083' }}
                    gap={{ base: '20px', xlg: '40px', smdesk: '70px' }}
                >
                    <Text
                        as={'h2'}
                        fontSize={{ base: '32px', xxxsm: '44px', xlg: '64px' }}
                        fontWeight={{ base: '700', md: '800' }}
                        color={{ base: '#333333', xxxsm: '#ffffff' }}
                        textAlign={'center'}
                        lineHeight={{ base: 'normal', xlg: '76px' }}
                        textTransform={{ base: 'uppercase', xxxsm: 'capitalize' }}
                    >
                        {t('contact')}
                    </Text>
                    <Flex
                        maxWidth={'100%'}
                        w={{ base: '100%', sm: '80%', xxxsm: '100%', lg: '350px', xlg: '346px' }}
                        flexDir={'column'}
                        gap={{ base: '12px', xlg: '20px' }}
                        display={{ base: 'flex' }}
                        alignSelf={'center'}
                    >
                        <Flex
                            flexWrap={'nowrap'}
                            gap={{ base: '12px', xlg: '24px' }}
                            alignItems={'start'}
                        >
                            <Box mt={'4px'} color={{ base: '#2E3083', xxxsm: '#FFFFFF' }} flexShrink={0}>
                                <FaPhone className={'contact-icon'} />
                            </Box>{' '}
                            <Text
                                as={'p'}
                                color={{ base: '#2E3083', xxxsm: '#ffffff'}}
                                whiteSpace={'nowrap'}
                                fontSize={{ base: '12px', mini: '18px' }}
                                fontWeight={600}
                                lineHeight={'normal'}
                                textAlign={'left'}
                                letterSpacing={'1px'}
                            >
                                +33769397501
                            </Text>{' '}
                        </Flex>
                        <Flex
                            flexWrap={'nowrap'}
                            gap={{ base: '12px', xlg: '24px' }}
                            alignItems={'start'}
                        >
                            <Box mt={'4px'} color={{ base: '#2E3083', xxxsm: '#FFFFFF' }} flexShrink={0}>
                                <IoMdMail className={'contact-icon'} />{' '}
                            </Box>
                            <Text
                                as={'p'}
                                color={{ base: '#2E3083', xxxsm: '#ffffff'}}
                                whiteSpace={'nowrap'}
                                fontSize={{ base: '12px', mini: '18px' }}
                                fontWeight={600}
                                lineHeight={'normal'}
                                textAlign={'left'}
                                letterSpacing={'1px'}
                            >
                                contact.franceprojet@gmail.com
                            </Text>{' '}
                        </Flex>
                        <Flex
                            flexWrap={'nowrap'}
                            gap={{ base: '12px', xlg: '24px' }}
                            alignItems={'start'}
                        >
                            <Box mt={'4px'} color={{ base: '#2E3083', xxxsm: '#FFFFFF' }} flexShrink={0}>
                                <FaLocationDot className={'contact-icon'} />
                            </Box>{' '}
                            <Text
                                as={'p'}
                                color={{ base: '#2E3083', xxxsm: '#ffffff'}}
                                fontSize={{ base: '12px', mini: '18px' }}
                                fontWeight={600}
                                lineHeight={'normal'}
                                textAlign={'left'}
                                letterSpacing={'1px'}
                            >
                                11 Rue de Magdebourg, 75116 Paris, France
                            </Text>{' '}
                        </Flex>
                    </Flex>
                    <Flex
                        as="form"
                        mt={{ base: '24px', xlg: '0px' }}
                        flexDir={'column'}
                        alignItems={'end'}
                        gap={'16px'}
                        w={{ base: '100%', sm: '80%', xxxsm: '100%', lg: '350px', xlg: '346px' }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            name="name"
                            id="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder={t('yourName')}
                                    w={'100%'}
                                    borderRadius={'2px'}
                                    bgColor={'white'}
                                />
                            )}
                        />
                        <Controller
                            name="company"
                            id="company"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder={t('yourCompany')}
                                    w={'100%'}
                                    borderRadius={'2px'}
                                    bgColor={'white'}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            id="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder={t('yourEmail')}
                                    w={'100%'}
                                    borderRadius={'2px'}
                                    bgColor={'white'}
                                />
                            )}
                        />

                        <Controller
                            name="phone"
                            id="phone"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder={t('yourPhone')}
                                    w={'100%'}
                                    borderRadius={'2px'}
                                    bgColor={'white'}
                                />
                            )}
                        />
                        <button className="form_btn" type="submit">
                            {t('sendRequest')}
                        </button>
                    </Flex>
                </Flex>
                <Box className="map-container" h={{ base: '500px', xxxsm: 'auto' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6675158464263!2d2.2892737!3d48.8645502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe4d2e03d41%3A0xb664c571bdb39f8f!2zMTEgUnVlIGRlIE1hZ2RlYm91cmcsIDc1MTE2IFBhcmlzLCDQpNGA0LDQvdGG0LjRjw!5e0!3m2!1sru!2sua!4v1712756774380!5m2!1sru!2sua"
                        title="Google Map"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
            </Flex>
            <SuccessSubmit isOpen={isOpen} onClose={onClose} />
        </SectionLayuot>
    );
};

export default Contact;
