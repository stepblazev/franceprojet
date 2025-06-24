import { Button, useDisclosure } from '@chakra-ui/react';
import { forwardRef, useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import { ru, fr, enUS } from 'date-fns/locale';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ShortDateInput({ field, errors, px }) {
    const router = useRouter();
    const [selectedLocale, setSelectedLocale] = useState(fr); // Локаль по умолчанию

    useEffect(() => {
        // Получение текущей локали из роутера и установка соответствующей локализации
        const currentLocale = router.locale;

        switch (currentLocale) {
            case 'ru':
                setSelectedLocale(ru);
                break;
            case 'en':
                setSelectedLocale(enUS);
                break;
            default:
                setSelectedLocale(fr);
                break;
        }
    }, [router]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        field.onChange(date); // Обновляем значение поля ввода
        onClose(); // Закрываем календарь после выбора даты
    };

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <Button
            h={"36px"}
            py={'8px'}
            px={px}
            borderRadius={"0px"}
            boxShadow={'0px 2px 6px 0px #13124212'}
            bgColor={'#FFF'}
            w={'128px'}
            color='#999999'
            fontSize='18px'
            fontWeight='500'
            lineHeight='20px'
            border={`1px solid ${errors ? '#EFF0F6' : 'ECF0F5'}`}
            onClick={onClick} // Открываем календарь при клике на инпут
            ref={ref} // Передаем ref в компонент кастомного инпута
        >
            {value || '213123123'}
        </Button>
    ));
    return (

        <DatePicker
        placeholderText='dd/mm/yyyy'
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            customInput={<ExampleCustomInput />}
            locale={selectedLocale} // Использование выбранной локализации
        />

    );
}
