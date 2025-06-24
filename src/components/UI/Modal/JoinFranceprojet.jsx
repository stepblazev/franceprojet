import {
    Flex,
    Modal, ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    Divider,
    useCheckboxGroup,
    Textarea,
    Button,
    useToast
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import Finish from '@/assets/finish_form.svg';



import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import CustomCheckboxCards from '../CustomCheckboxCards';
import FileContext from '../FileProvider';
import { useContext, useEffect, useState } from 'react';
import InputLayout from '../Layouts/InputLayout';
import InputLayoutMini from '../Layouts/InputLayoutMini';

import CustomInput from '../Input/CustomInput';
import axios from 'axios';
import CustomInputPhone from '../Input/CustomInputPhone';
import TallInputadress from '../Input/TallInputadress';

const JoinFranceprojet = ({ onClose, isOpen }) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const {
        generalSkillsCheckbox

    } = useContext(FileContext);
    const toast = useToast()
    const {
        control,
        reset,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
        trigger
    } = useForm({
        defaultValues: {
            aboutExpirience: '',
            email: '',
            phone: '',
            firstName: '',
            surname: '',
            website: '',
            address: '',
            nSIRET: '',
            companyName: ''

        }
    });

    const onSubmit = async (data) => {
        // Prepare FormData for file upload

        const extractedData = generalSkillsCheckbox.map((field) => {
            return {
                skill: field,
            };
        });

        const formData = new FormData();
        formData.append('nSIRET', data.nSIRET); //
        formData.append('address', data.address); //
        formData.append('website', data.website); //
        formData.append('surname', data.surname); //
        formData.append('firstName', data.firstName); //
        formData.append('phone', data.phone); //
        formData.append('aboutExpirience', data.aboutExpirience);//++++
        formData.append('email', data.email); //+++
        formData.append('companyName', data.companyName); //+++
        formData.append('generalSkillsCheckbox', JSON.stringify(extractedData)); //
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/forms/fullFormTwo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const jsonObject = response.data;
            const statusValue = jsonObject.status;
            toast({
                title: t('sentSuccessful'),
                // description: `${error.message}`,
                status: 'success',
                isClosable: true,
              })
            // Reset the form and active step
            reset();
            onClose(); // Close modal on form submit
        } catch (error) {

                toast({
                  title: `Error submitting`,
                  description: `${error.message}`,
                  status: 'error',
                  isClosable: true,
                })
           
        }
    };
    const mask = [ { mask: '+00(00) 00 00 00 00' }];
    return (
        <Modal onClose={onClose} isOpen={isOpen} size={'md'} isCentered blockScrollOnMount={false}  >
            <ModalOverlay />
            <ModalContent w={'100%'} maxW={'700px'} pos={'relative'}>
                <ModalBody px={'32px'} pb={'32px '} pt={'43px'} h={'90vh'} >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex flexDir={'column'} gap={'30px'} w={'100%'} >
                            <InputLayout label={t('servicesyouProvide')}>
                                <InnerCheckboxGroup />
                            </InputLayout>
                            <InputLayout label={t('tellAboutyourCompany')} width={'100%'}>
                                <Flex flexDirection={'column'} gap={'14px'} w={'100%'}>
                                    <Flex wrap={'nowrap'} w={'100%'} gap={{ base: '14px', xmd: '8px' }} flexDirection={{ base: 'column', xmd: 'row' }}>
                                        <InputLayoutMini errors={errors.companyName && t('fieldnotBe')}>
                                            <Controller
                                                name="companyName"
                                                id="companyName"
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('companyName')} errors={errors.companyName} />
                                                )}
                                            />
                                        </InputLayoutMini>

                                        <InputLayoutMini errors={errors.nSIRET && t('fieldnotBe')}>
                                            <Controller
                                                name="nSIRET"
                                                id="nSIRET"
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('n°SIRET')} />
                                                )}
                                            />
                                        </InputLayoutMini>

                                    </Flex>
                                    <Flex wrap={'nowrap'} w={'100%'} gap={{ base: '14px', xmd: '8px' }} flexDirection={{ base: 'column', xmd: 'row' }}>
                                        <InputLayoutMini errors={errors.address && t('fieldnotBe')}>
                                            <Controller
                                                name="address"
                                                id="address"
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    // <CustomInput field={field} placeholder={t('address')} />
                                                    <TallInputadress field={field} placeholder={t('address')}/>

                                                )}
                                            />
                                        </InputLayoutMini>

                                        <InputLayoutMini errors={errors.website && t('websiteIncorrect')}>

                                            <Controller
                                                name="website"
                                                id="website"
                                                rules={{
                                                    required: true,
                                                    pattern: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/.*)?$/
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('website')} />
                                                )}
                                            />
                                        </InputLayoutMini>

                                    </Flex>
                                    <Flex wrap={'nowrap'} w={'100%'} gap={{ base: '14px', xmd: '8px' }} flexDirection={{ base: 'column', xmd: 'row' }}>
                                        <InputLayoutMini errors={errors.surname && t('fieldnotBe')}>
                                            <Controller
                                                name="surname"
                                                id="surname"
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('surname')} />
                                                )}
                                            />
                                        </InputLayoutMini>
                                        <InputLayoutMini errors={errors.firstName && t('fieldnotBe')}>

                                            <Controller
                                                name="firstName"
                                                id="firstName"
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('firstName')} />
                                                )}
                                            />
                                        </InputLayoutMini>

                                    </Flex>
                                    <Flex wrap={'nowrap'} w={'100%'} gap={{ base: '14px', xmd: '8px' }} flexDirection={{ base: 'column', xmd: 'row' }}>
                                        <InputLayoutMini errors={errors.phone && t('phoneNumberIincorrect')}>
                                            <Controller
                                                name="phone"
                                                id="phone"
                                                rules={{
                                                    required: true,
                                                    pattern: /^\+\d{2}\(\d{2}\) \d{2} \d{2} \d{2} \d{2}$/
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomInputPhone field={field} placeholder={t('phone')} mask={mask}/>
                                                )}
                                            />
                                        </InputLayoutMini>


                                        <InputLayoutMini errors={errors.email && t('emailIncorrect')}>
                                            <Controller
                                                name="email"
                                                id="email"
                                                rules={{
                                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    // <TallInput field={field} errors={errors.about_work} />
                                                    <CustomInput field={field} placeholder={t('email')} />
                                                )}
                                            />
                                        </InputLayoutMini>

                                    </Flex>

                                </Flex>

                            </InputLayout>
                            <InputLayout label={t('tellAboutyourExperience')} width={'100%'}>
                                <Controller
                                    name="aboutExpirience"
                                    id="aboutExpirience"
                                    control={control}
                                    render={({ field }) => (
                                        <Textarea
                                            {...field}
                                            placeholder={t('introduceyourcompany')}
                                            resize={'vertical'}
                                            _placeholder={{
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                lineHeight: '20px'
                                            }}
                                            boxShadow={'0px 2px 6px 0px #13124212'}
                                            border={'1px solid #EFF0F6'}
                                        />
                                    )}
                                />
                            </InputLayout>
                        </Flex>
                        <Flex mt={'80px'} w={'100%'} flexDir={{ base: 'column-reverse', sm: 'row' }} justifyContent={'end'} >

                            <Button
                                // isDisabled={activeStep === 0}
                                onClick={handleSubmit(onSubmit)}
                                w={{ base: '100%', sm: '135px' }}
                                h={"60px"}
                                borderRadius={"0px"}
                                p={'14px 40px'}
                                color={'white'}
                                bgColor={'#D22827'}
                            >
                                {t('SEND')}
                            </Button>
                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}

function InnerCheckboxGroup() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: ['generalRenovation'],
    });

    const [selectedValues, setSelectedValues] = useState(['generalRenovation']);
    const { setGeneralSkillsCheckbox } = useContext(FileContext);

    useEffect(() => {
        setGeneralSkillsCheckbox(value);
    }, [value]);

    const handleCheckboxChange = (newValue) => {
        setSelectedValues((prevValues) =>
            prevValues.includes(newValue)
                ? prevValues.filter((value) => value !== newValue)
                : [...prevValues, newValue]
        );
    };

    return (
        <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} columnGap={'15px'}>
            <CustomCheckboxCards {...getCheckboxProps({ value: 'generalRenovation', text: t('generalRenovation'), onChange: () => handleCheckboxChange('generalRenovation'), isChecked: selectedValues.includes('generalRenovation') })} />
            <CustomCheckboxCards {...getCheckboxProps({ value: 'plumbing', text: t('plumbing'), onChange: () => handleCheckboxChange('plumbing'), isChecked: selectedValues.includes('plumbing') })} />
            <CustomCheckboxCards {...getCheckboxProps({ value: 'electricity', text: t('electricity'), onChange: () => handleCheckboxChange('electricity'), isChecked: selectedValues.includes('electricity') })} />
            <CustomCheckboxCards {...getCheckboxProps({ value: 'painting', text: t('painting'), onChange: () => handleCheckboxChange('painting'), isChecked: selectedValues.includes('painting') })} />
            <CustomCheckboxCards {...getCheckboxProps({ value: 'joinery', text: t('joinery'), onChange: () => handleCheckboxChange('joinery'), isChecked: selectedValues.includes('joinery') })} />
            <CustomCheckboxCards {...getCheckboxProps({ value: 'other', text: t('other'), onChange: () => handleCheckboxChange('other'), isChecked: selectedValues.includes('other') })} />
        </Flex>
    );
}



export default JoinFranceprojet