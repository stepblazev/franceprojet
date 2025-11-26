
import { useRouter } from 'next/router';
import { withTranslation, useTranslation } from 'next-i18next';

import React, { useEffect, useState } from 'react';
import { Select, chakraComponents } from "chakra-react-select";
import { Box, Icon } from '@chakra-ui/react';

import English from '@/assets/En.svg';
import France from '@/assets/Fr.svg';
import Russian from '@/assets/Ru.svg';

const SelectLocal = ({ isBurgerMenuOpen = false }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const router = useRouter();
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        const selectedLocale = router.locale;
        const language = getLanguageByLocale(selectedLocale);
        setSelectedLanguage(language);
    }, [router.locale]);

    const countries_menu = [
        { id: 1, label: 'Français', value: "fr", icon: <France /> },
        { id: 2, label: 'English', value: "en", icon: <English /> },
        { id: 3, label: 'Русский', value: "ru", icon: <Russian /> },
    ];

    const getLanguageByLocale = (locale) => {
        return countries_menu.find((language) => language.value === locale);
    };

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
        i18n.changeLanguage(selectedOption.value);
        router.push(router.pathname, router.asPath, { locale: selectedOption.value });
    };

    const customComponents = {
        Option: ({ children, ...props }) => (
            <chakraComponents.Option {...props} display="flex" gap="10px" flexWrap="nowrap"> 
                {props.data.icon} {children}
            </chakraComponents.Option>
        ),
    };

    return (
        <Box alignItems="center"  gap="7px" justifyContent="start" display="flex" fontWeight="400" flexDir={"row"}>
            <Box>{selectedLanguage?.icon}</Box>
            <Select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                options={countries_menu}
                focusBorderColor="none"
              

                components={{
                    ...customComponents,
                }}
                chakraStyles={{
                    dropdownIndicator: () => ({
                        bg: "transparent",
                        px: 0,

                        cursor: "inherit",
                        border: "none",
                    }),
                    valueContainer: () => ({
                        display: "none",
                    }),
                    menu: () => ({
                        width: "150px",
                        position: "absolute",
                        zIndex: '1000000',
                        top: "33px",
                        left: isBurgerMenuOpen ? "-51px" :"-129px",
                        bg: isBurgerMenuOpen ? "inherit" :"white",
                        color: "#454545",
                    }),
                    menuList: () => ({
                        bg: isBurgerMenuOpen ? "inherit" :"white",
                        color: "#fff",
                        border: isBurgerMenuOpen ? "none" : "2px solid #2E3083",
                        borderRadius: "5px",
                        py: "10px",
                    }),
                    option: () => ({
                        color: "#454545",
                        padding: "5px 10px",
                        fontSize: "20px",
                        fontWeight: "500",
                        _hover: {
                            color: isBurgerMenuOpen ? "#212121" : "#7B7EB7",
                        },
                        display: "flex",
                        gap: "10px",
                        cursor: 'pointer'
                    }),
                    control: () => ({
                        border: "none",
                        cursor:"pointer"
                    }),
                }}
            />
        </Box>
    );
};

export default withTranslation('common')(SelectLocal);