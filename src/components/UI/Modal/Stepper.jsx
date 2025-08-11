import FullName from '@/assets/form_fio.svg';
import {
    Box,
    Button,
    Divider,
    Flex,
    Modal, ModalBody,
    ModalContent,
    ModalOverlay,
    RadioGroup,
    Step,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    Stepper,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useCheckboxGroup,
    useSteps,
    useToast
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../Input/TextInput';
import TextInputPhone from '../Input/TextInputPhone';

import InputLayout from '../Layouts/InputLayout';
const steps = [
    { title: 'Step 1', },
    { title: 'Step 2', },
    { title: 'Step 3', },
    { title: 'Step 4', },
]

import Home from '@/assets/form_home.svg';
import Home2 from '@/assets/form_home2.svg';
import Mail from '@/assets/form_mail.svg';
import Eye from '@/assets/hide_pass.svg';
import Phone from '@/assets/phone_form.svg';
import RadioCard from '../RadioCard';


import Finish from '@/assets/finish_form.svg';
import Bathroom from '@/assets/form_bethroom.svg';
import Bedroom from '@/assets/form_flat.svg';
import Garage from '@/assets/form_garage.svg';
import Kitchen from '@/assets/form_kuhnia.svg';
import Lounge from '@/assets/form_salon.svg';


import { useContext, useEffect, useRef, useState } from 'react';

import ShortDateInput from '../Input/ShortDateInput';
import TallInput from '../Input/TallInput';
import { Textarea } from '@chakra-ui/react'
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import MultipleFileUploader from '../AttechedFile/MultipleFileUploader';
import CustomCheckboxCards from '../CustomCheckboxCards';
import FileContext from '../FileProvider';
import ShortInput from '../Input/ShortInput';
import { IMaskInput } from 'react-imask';
import TallInputadress from '../Input/TallInputadress';
// Группа для внутренних помещений
const phoneNumberPattern = /^(?:\+31|\+32|\+33|\+34|\+36|\+39|\+40|\+41|\+43|\+44|\+45|\+46|\+47|\+48|\+49|\+30|\+351|\+352|\+353|\+354|\+355|\+356|\+357|\+358|\+359|\+36|\+370|\+371|\+372|\+373|\+374|\+375|\+376|\+377|\+381|\+382|\+383|\+385|\+386|\+387|\+389|\+420|\+421)(\s?\d+){5,15}$/;


function InnerCheckboxGroup() {
    const { t } = useTranslation('common'); // Внутри функционального компонента
    const router = useRouter();
    const { value, getCheckboxProps } = useCheckboxGroup({
        // defaultValue: [],
    });

    const [selectedValues, setSelectedValues] = useState([]);

    const handlesurfaceArea1 = (value) => {
        // console.log(value.target.value)
        localStorage.setItem('surfaceArea1',value.target.value)
    };
    const handlesurfaceArea2 = (value) => {
        // console.log(value.target.value)
        localStorage.setItem('surfaceArea2',value.target.value)
    };
    const handlesurfaceArea3 = (value) => {
        // console.log(value.target.value)
        localStorage.setItem('surfaceArea3',value.target.value)
    };
    const handlesurfaceArea4= (value) => {
        // console.log(value.target.value)
        localStorage.setItem('surfaceArea4',value.target.value)
    };

    const { setInnerCheckbox } = useContext(FileContext);

    useEffect(() => {
        setInnerCheckbox(value)

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

            <div>
				<CustomCheckboxCards {...getCheckboxProps({ value: 'kitchen', text: t('kitchen'), icon: <Kitchen />, onChange: () => handleCheckboxChange('kitchen'), })} />
				<input type="input" style={{ marginBottom: '30px' }} placeholder={t('area')} id={"surfaceArea_1"} name={"surfaceArea_1"} onChange={handlesurfaceArea1}/>
			</div>
			<div>
				<CustomCheckboxCards {...getCheckboxProps({ value: 'bathroom', text: t('bathroom'), icon: <Bathroom />, onChange: () => handleCheckboxChange('bathroom'), })} />
				<input type="input" style={{ marginBottom: '30px' }} placeholder={t('area')} id={"surfaceArea_2"} name={"surfaceArea_2"} onChange={handlesurfaceArea2}/>
			</div>
            {/* <CustomCheckboxCards {...getCheckboxProps({ value: 'toilet', text: t('toilet'), icon: <Toilet />, onChange: () => handleCheckboxChange('toilet'), })} /> */}
            <div>
				<CustomCheckboxCards {...getCheckboxProps({ value: 'bedroom', text: t('bedroom'), icon: <Bedroom />, onChange: () => handleCheckboxChange('bedroom'), })} />
				<input type="input" style={{ marginBottom: '30px' }} placeholder={t('area')} id={"surfaceArea_3"} name={"surfaceArea_3"} onChange={handlesurfaceArea3}/>
			</div>
			<div>
				<CustomCheckboxCards {...getCheckboxProps({ value: 'lounge', text: t('livingRoom'), icon: <Lounge />, onChange: () => handleCheckboxChange('lounge'), })} />
				<input type="input" style={{ marginBottom: '30px' }} placeholder={t('area')} id={"surfaceArea_4"} name={"surfaceArea_4"} onChange={handlesurfaceArea4}/>

			</div>
            {/* <CustomCheckboxCards {...getCheckboxProps({ value: 'garage', text: t('garage'), icon: <Garage />, onChange: () => handleCheckboxChange('garage'), })} /> */}


        </Flex>
    );
}

// Группа для внешних работ
// function OutdoorCheckboxGroup() {
//     const { t } = useTranslation('common'); // Внутри функционального компонента
//     const router = useRouter();
//     const { value: value2, getCheckboxProps } = useCheckboxGroup({
//         // defaultValue: [],
//     });
//     const { setOutdoorCheckbox } = useContext(FileContext);
//     const [selectedValues2, setSelectedValues2] = useState([]);

//     useEffect(() => {
//         setOutdoorCheckbox(value2)

//     }, [value2]);
//     const handleCheckboxChange2 = (newValue) => {
//         setSelectedValues2((prevValues) =>
//             prevValues.includes(newValue)
//                 ? prevValues.filter((value) => value !== newValue)
//                 : [...prevValues, newValue]
//         );
//     };

//     return (
//         <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} columnGap={'15px'}>


//             <CustomCheckboxCards {...getCheckboxProps({ value: 'finish_job', text: t('finishJob'), icon: <Home />, onChange: () => handleCheckboxChange2('finish_job'), })} />
//             <CustomCheckboxCards {...getCheckboxProps({ value: 'tiles', text: t('tiles'), icon: <Home />, onChange: () => handleCheckboxChange2('tiles'), })} />
//             <CustomCheckboxCards {...getCheckboxProps({ value: 'floorCoverings', text: t('floorCoverings'), icon: <Home />, onChange: () => handleCheckboxChange2('floorCoverings'), })} />


//         </Flex>
//     );
// }
const StepperComp = ({ onClose, isOpen }) => {
    const { t } = useTranslation('common'); // Внутри функционального компонента
    const router = useRouter();
    const modalRef = useRef();
    const {
        innerCheckbox
    } = useContext(FileContext);
    const toast = useToast()

    useEffect(() => {
        if (isOpen) {
            //   Scroll to the top of the modal content
            modalRef.current?.scrollIntoView({ behavior: 'smooth' });
            modalRef.current?.scrollTo(0, 0);
        }
    }, [isOpen]);
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    const [selectedOutIndoor, setSelectedOutIndoor] = useState('indoor'); // Стейт для отслеживания выбора
    // console.log(selectedOutIndoor);
    const handleRadioChange = (value) => {
        setSelectedOutIndoor(value);
    };
    const [selecteTypeofRenovation, setSelecteTypeofRenovation] = useState('refreshing'); // Стейт для отслеживания выбора
    const handleRadioSelecteTypeofRenovation = (value) => {
        setSelecteTypeofRenovation(value);
    };
    const [selecteOwner, setSelecteOwner] = useState('owner'); // Стейт для отслеживания выбора
    const handleRadioOwner = (value) => {
        setSelecteOwner(value);
    };
    // const { value, value2, getCheckboxProps } = useCheckboxGroup({
    //     // defaultValue: [''],
    // })
    // console.log('value', value, value2);
    const isLastStep = activeStep === steps.length;
    const hasCompletedAllSteps = activeStep === steps.length;

    const btnRef = useRef(null)


    // console.log('activeStep', activeStep)

    const {
        control,
        reset,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
        trigger
    } = useForm({
        defaultValues: {
            date: '',
            budget: '0',
            address: '',
            photos: [],
            aboutWork: "",
            full_name: "",
            phone_number: "",
            password: "",
            confirm_password: "",
            selecteLeve: "",
            selecteUsingApartment: "",
            surfaceArea_1: '',
            surfaceArea_2: '',
            surfaceArea_3: '',
            surfaceArea_4: '',
        }
    });


    const handleNextClick = async () => {
        // modalRef.current?.scrollTo(0, 0);
        modalRef.current?.scrollIntoView({ behavior: 'smooth' });

        if (isLastStep) return
        // console.log('11111', activeStep)
        const isValid = await trigger(); // Запускаем валидацию всех полей формы
        if (isValid) {
            // console.log('22222', activeStep)

            setActiveStep(activeStep + 1); // Переходим на следующий шаг, если все поля валидны
        }

        // setActiveStep(activeStep + 1); // Переходим на следующий шаг, если все поля валидны

    };

    const onSubmit = async (data) => {
		
        const extractedData = innerCheckbox.map((field) => {
            const fieldName = `${field}_count`;
            const fieldValue = getValues(fieldName) || 1; // По умолчанию значение равно 1, если поле не заполнено

            return {
                name: field,
                count: fieldValue,
            };
        });

		

        // console.log(JSON.stringify(data));
		//alert(data.surfaceAreaRenovated)
        // console.log('files', JSON.stringify(extractedData))

        const formData = new FormData();
        formData.append('aDate', data.date); //
        formData.append('budget', data.budget); //
        formData.append('yourName', data.full_name); //
        formData.append('yourPhone', data.phone_number); //
        formData.append('yourEmail', data.email); //
        formData.append('password', data.password); //
        formData.append('service', JSON.stringify(extractedData)); //

        formData.append('typeofRenovation', selecteTypeofRenovation); //+++
        formData.append('whatTypeOfService', selecteOwner);//++++
		
        formData.append('surfaceArea_1', localStorage.getItem('surfaceArea1'));//++++
		formData.append('surfaceArea_2', localStorage.getItem('surfaceArea2'));//++++
		formData.append('surfaceArea_3', localStorage.getItem('surfaceArea3'));//++++
		formData.append('surfaceArea_4', localStorage.getItem('surfaceArea4'));//++++
		
		
        formData.append('address', data.address);//++++
        formData.append('aboutWork', data.aboutWork);//++++


        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/api/forms/fullForm`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const jsonObject = response.data;
            const statusValue = jsonObject.status;

            if (statusValue === 1) {
                setActiveStep(steps.length); // Proceed to the next step if all fields are valid
            }
            // Reset the form and active step
            reset();
            setActiveStep(1);
            onClose(); // Close modal on form submit
            //localStorage.clear()
            localStorage.removeItem('surfaceArea1')
            localStorage.removeItem('surfaceArea2')
            localStorage.removeItem('surfaceArea3')
            localStorage.removeItem('surfaceArea4')
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
        <Modal onClose={onClose} isOpen={isOpen} size={'3xl'} initialFocusRef={modalRef}  >
            <ModalOverlay />
            <ModalContent w={'100%'} maxW={'700px'} pos={'relative'} ref={modalRef}>
                <ModalBody px={'32px'} pb={'32px '} pt={'43px'} h={'90vh'} >
                    {activeStep === 1 && (
                        <Flex flexDir={'column'} gap={'12px'} w={'100%'} mb={{ base: '30px', md: '42px' }}>
                            <Box as='h3' fontSize={'34px'} lineHeight={'46px'} color={'#170F49'} fontWeight={'700'} textAlign={'center'}>{t('formTitleYouhaverightchange')}</Box>
                            <Box as='h3' fontSize={'18px'} lineHeight={'30px'} color={'#6F6C90'} fontWeight={'400'} textAlign={'center'}>{t('formTitleSimulateWorkClicks')}</Box>
                        </Flex>
                    )}
                    {activeStep === 3 && (
                        <Flex flexDir={'column'} gap={'12px'} w={'100%'} mb={{ base: '30px', md: '42px' }}>
                            <Box as='h3' fontSize={'34px'} lineHeight={'46px'} color={'#170F49'} fontWeight={'700'} textAlign={'center'}>{t('formTitleItAlmostready')}</Box>
                            <Box as='h3' fontSize={'18px'} lineHeight={'30px'} color={'#6F6C90'} fontWeight={'400'} textAlign={'center'}>{t('formTitlePleasefillDetailstrack')}</Box>
                        </Flex>
                    )}
                    {activeStep === 4 && (
                        <Flex flexDir={'column'} gap={'12px'} w={'100%'} mb={{ base: '30px', md: '42px' }}>
                            <Box as='h3' fontSize={'34px'} lineHeight={'46px'} color={'#170F49'} fontWeight={'700'} textAlign={'center'}>{t('formTitleThankfortime')}</Box>
                            <Box as='h3' fontSize={'18px'} lineHeight={'30px'} fontWeight={'400'} textAlign={'center'} dangerouslySetInnerHTML={{ __html: t('formTitleSentonlinequote') }} />
                        </Flex>
                    )}
                    <Stepper size='md' index={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={crypto.randomUUID()} onClick={() => setActiveStep(index)}>
                                <StepIndicator
                                    sx={{
                                        border: 'none',
                                        '&[data-status="complete"]': {
                                            backgroundColor: '#2E3083',
                                        },
                                        '&[data-status="incomplete"]': {
                                            backgroundColor: '#EFF0F6',
                                            color: '#6F6C90'
                                        },
                                        '&[data-status="active"]': {
                                            backgroundColor: '#EFF0F6',
                                            color: '#6F6C90'
                                        },
                                    }}>
                                    <StepStatus
                                        complete={<StepNumber />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <StepSeparator sx={{
                                    backgroundColor: '#EFF0F6 ', height: '8px!important', borderRadius: '10px', '&[data-status="complete"]': {
                                        backgroundColor: '#2E3083'
                                    }
                                }} />
                            </Step>
                        ))}
                    </Stepper>
                    <Divider color={'#D9DBE9'} mt={'25px'} mb={'40px'} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {activeStep === 1 && (
                            <Flex flexDir={'column'} gap={'30px'} w={'100%'} >
                                <InputLayout label={t('typeofRenovation')} width={'100%'}>
                                    <RadioGroup onChange={handleRadioSelecteTypeofRenovation} value={selecteTypeofRenovation}>
                                        <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} columnGap={'15px'} w={'100%'}>
                                            <RadioCard
                                                key={"refreshing"}
                                                text={t('refreshing')}
                                                value="refreshing"
                                                onChange={handleRadioSelecteTypeofRenovation} // Передаем функцию обратного вызова onChange
                                                isChecked={selecteTypeofRenovation === "refreshing"}
                                            />
                                            <RadioCard
                                                key={"completeRenovation"}
                                                text={t('completeRenovation')}
                                                value="completeRenovation"
                                                onChange={handleRadioSelecteTypeofRenovation} // Передаем функцию обратного вызова onChange
                                                isChecked={selecteTypeofRenovation === "completeRenovation"}
                                            />
                                        </Flex>
                                    </RadioGroup>
                                </InputLayout>

                                {/* <Text fontSize={'24px'} fontWeight={'700'} lineHeight={'35px'} color={'#170F49'}>{t('specifyTypeRoom')}</Text> */}

                                <InputLayout label={t('typeofRoom')}>
                                    <InnerCheckboxGroup />
                                    {/* <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={'50px'}>

                                        {
                                            innerCheckbox.includes('kitchen') &&
                                            <InputLayout label={t('kitchen')}>

                                                <Controller
                                                    name="kitchen_count"
                                                    id="kitchen_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }
                                        {
                                            innerCheckbox.includes('bathroom') &&
                                            <InputLayout label={t('bathroom')}>

                                                <Controller
                                                    name="bathroom_count"
                                                    id="bathroom_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }

                                        {
                                            innerCheckbox.includes('toilet') &&
                                            <InputLayout label={t('toilet')}>

                                                <Controller
                                                    name="toilet_count"
                                                    id="toilet_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }
                                        {
                                            innerCheckbox.includes('bedroom') &&
                                            <InputLayout label={t('bedroom')}>

                                                <Controller
                                                    name="bedroom_count"
                                                    id="bedroom_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }
                                        {
                                            innerCheckbox.includes('lounge') &&
                                            <InputLayout label={t('livingRoom')}>

                                                <Controller
                                                    name="lounge_count"
                                                    id="lounge_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }
                                        {
                                            innerCheckbox.includes('garage') &&
                                            <InputLayout label={t('garage')}>

                                                <Controller
                                                    name="garage_count"
                                                    id="garage_count"

                                                    control={control}
                                                    render={({ field }) => (
                                                        <ShortInput field={field} placeholder={''} type={'number'} px={'10px'} />

                                                    )}
                                                />
                                            </InputLayout>

                                        }

                                    </Flex> */}
                                </InputLayout>

                                {/*<InputLayout label={t('surfaceAreaRenovated')}>

                                    <Controller
                                        name="surfaceAreaRenovated"
                                        id="surfaceAreaRenovated"
                                        control={control}
                                        render={({ field }) => (
                                            <TextInput field={field} placeholder={t('area')} type={'number'} />
                                        )}
                                    />
                                </InputLayout>*/} 
                            </Flex>
                        )}
                        {activeStep === 2 && (
                            <Flex flexDir={'column'} gap={'30px'} w={'100%'} >
                                <InputLayout label={t('yourSituation?')} width={'100%'}>
                                    <RadioGroup onChange={handleRadioOwner} value={selecteOwner}>
                                        <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                                            <RadioCard
                                                key={"owner"}
                                                text={t('owner')}
                                                value="owner"
                                                onChange={handleRadioOwner} // Передаем функцию обратного вызова onChange
                                                isChecked={selecteOwner === "owner"}
                                                checkbox={true}
                                            />
                                            <RadioCard
                                                key={"tenant"}
                                                text={t('tenant')}
                                                value="tenant"
                                                onChange={handleRadioOwner} // Передаем функцию обратного вызова onChange
                                                isChecked={selecteOwner === "tenant"}
                                                checkbox={true}
                                            />
                                        </Flex>
                                    </RadioGroup>
                                    <Divider />

                                </InputLayout>
                                <InputLayout label={t('yourAddress')} width={'100%'} required
                                    errors={errors.address && t('addressIncorrect')}>

                                    <Controller
                                        name="address"
                                        id="address"
                                        rules={{
                                            required: false
                                        }}
                                        control={control}
                                        render={({ field }) => (
                                            <TallInputadress field={field}/>
                                        )}
                                    />
                                </InputLayout>
                                <Divider />
                                <Flex w={'100%'} my={'30px'} justifyContent={{ base: 'center', md: 'space-between' }} flexWrap={'wrap'} rowGap={'20px'} columnGap={'30px'}>

                                    <InputLayout required label={t('youNeedDate')}
                                        errors={errors.date && t('dateField')}>

                                        <Controller
                                            name="date"
                                            id="date"
                                            rules={{
                                                required: false
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <ShortDateInput field={field} placeholder={'XX/XX/XXXX'} errors={errors.date} px={'2px'} />
                                            )}
                                        />
                                    </InputLayout>
                                    {/*<InputLayout required label={t('aBudget')}
                                        errors={errors.budget && t('budgetField')} display={'none'}>

                                        <Controller
                                            name="budget"
                                            id="budget"
                                            rules={{
                                                required: false,

                                            }}
                                            control={control}
											value={"0"}
                                            render={({ field }) => (
                                                <ShortInput field={field} placeholder={'_€'} value={"0"} type={'number'} errors={errors.budget} px={'10px'} />

                                            )}
                                        />
                                    </InputLayout>*/}
                                    <Divider />

                                </Flex>
                                <InputLayout label={t('tellAboutyourCompany')}
                                    errors={errors.aboutWork && 'This field is empty'} width={'100%'}>

                                    <Controller
                                        name="aboutWork"
                                        id="aboutWork"
                                        // rules={{
                                        //     required: true
                                        // }}
                                        control={control}
                                        render={({ field }) => (
                                            // <TallInput field={field} errors={errors.about_work} />
                                            <Textarea
                                                {...field}
                                                placeholder={t('message')}
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
                        )}
                        {activeStep === 3 && (
                            <Flex flexDir={'column'} gap={'40px'} w={'100%'} >
                                <Box>
                                    <Text fontSize={'24px'} fontWeight={'700'} mb={'16px'} lineHeight={'35px'} color={'#170F49'}>{t('yourContactInformation')}</Text>

                                </Box>
                                <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} rowGap={'30px'}>
                                    <InputLayout required label={t('fullName')} textsm={true}
                                        errors={errors.full_name && t('nameField')}>

                                        <Controller
                                            name="full_name"
                                            id="full_name"
                                            rules={{
                                                required: false
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <TextInput field={field	} placeholder={'John Doe'} type={'name'} errors={errors.full_name} rightIcon={<FullName />} />
                                            )}
                                        />
                                    </InputLayout>
                                    <InputLayout required label={'Email'} textsm={true}
                                        errors={errors.email && t('emailIncorrect')}>

                                        <Controller
                                            name="email"
                                            id="email"
                                            rules={{
                                                required: false,
                                                // email: true,
                                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <TextInput field={field} placeholder={t('emailAddress')} type={'text'} errors={errors.email} rightIcon={<Mail />} />
                                            )}
                                        />
                                    </InputLayout>
                                    <InputLayout required label={t('phoneNumber')} textsm={true}
                                        errors={errors.phone_number && t('phoneNumberIincorrect')}>

                                        <Controller
                                            name="phone_number"
                                            id="phone_number"
                                            rules={{
                                                required: false,
                                                pattern: /^\+\d{2}\(\d{2}\) \d{2} \d{2} \d{2} \d{2}$/
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <TextInputPhone mask={mask} field={field} placeholder={'+00 (00) 00 00 00 00'} errors={errors.phone_number} rightIcon={<Phone />} />
                                            )}
                                        />
                                    </InputLayout>
                                </Flex>
                                {/* <Flex w={'100%'} justifyContent={'center'}>
           

                                </Flex> */}
                                <Flex flexDir={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} rowGap={'30px'}>
                                    <InputLayout required label={t('password')} textsm={true}
                                        errors={errors.password && t('passwordShort')}>

                                        <Controller
                                            name="password"
                                            id="password"
                                            rules={{
                                                required: false,
                                                minLength: 8,
                                                // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 

                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <TextInput field={field} placeholder={'***********'} type={'password'} errors={errors.password} rightIcon={<Eye />} />
                                            )}
                                        />
                                    </InputLayout>
                                    <InputLayout required label={t('retypePassword')} textsm={true}
                                        errors={errors.confirm_password && errors.confirm_password.message}>
                                        <Controller
                                            name="confirm_password"
                                            id="confirm_password"
                                            rules={{
                                                required: false,
                                                validate: (value) => value === getValues("password") || t('fieldMatch')
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <TextInput field={field} placeholder={'***********'} type={'password'} errors={errors.confirm_password} rightIcon={<Eye />} />
                                            )}
                                        />
                                    </InputLayout>

                                </Flex>

                            </Flex>
                        )}
                        {activeStep === 4 && (
                            <Flex flexDir={'column'} gap={'40px'} w={'100%'} alignItems={'center'} >
                                <Finish />
                                <Flex flexDir={'column'} gap={'20px'} w={'100%'} alignItems={'center'}>
                                    <Text fontSize={'24px'} fontWeight={'700'} textAlign={'center'} mb={'16px'} lineHeight={'35px'} color={'#170F49'}>{t('sentYouEmai')}</Text>
                                    <Text fontSize={'18px'} fontWeight={'400'} textAlign={'center'} lineHeight={'30px'} color={'#6F6C90'}>{t('reviewInformationMessage')}</Text>
                                    {
                                        isLastStep &&
                                        <Button
                                            w={{ base: '100%', sm: '210px' }}
                                            h={"60px"}
                                            borderRadius={"0px"}
                                            p={'14px 40px'}
                                            type={"button"}
                                            color={'white'}
                                            bgColor={'#2E3083'}
                                            onClick={handleSubmit(onSubmit)}>

                                            {t('home')}
                                        </Button>

                                    }
                                </Flex>


                            </Flex>
                        )}


                        <Flex mt={'80px'} w={'100%'} gap={'30px'} flexDir={{ base: 'column-reverse', sm: 'row' }} justifyContent={activeStep > 1 ? 'space-between' : 'end'} >
                            {
                                activeStep > 1 && (
                                    <Button
                                        // isDisabled={activeStep === 0}
                                        onClick={() => setActiveStep(activeStep - 1)}
                                        w={{ base: '100%', sm: '135px' }}
                                        h={"60px"}
                                        borderRadius={"0px"}
                                        p={'14px 40px'}
                                        border={'1px solid #2E3083'}
                                        color={'#2E3083'}
                                        bgColor={'white'}
                                    >
                                        {t('back')}
                                    </Button>
                                )
                            }
                            {
                                !isLastStep && (
                                    <Button
                                        w={{ base: '100%', sm: '168px' }}
                                        h={"60px"}
                                        borderRadius={"0px"}
                                        p={'14px 40px'}
                                        type={"button"}
                                        color={'white'}
                                        bgColor={'#2E3083'}
                                        onClick={() => handleNextClick()}>
                                        {t('nextStep')}
                                    </Button>
                                )
                            }

                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}


export default StepperComp