import React from 'react';
import SectionLayout from '../UI/Layouts/SectionLayuot'; // Corrected typo in import
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const Faq = ({ color }) => {
    const { t } = useTranslation('common');

    // Array of objects containing question and answer data
    const faqData = [
        { question: t('quetionProfessionals1'), answer: t('answerProfessionals1') },
        { question: t('quetionProfessionals2'), answer: t('answerProfessionals2') },
        { question: t('quetionProfessionals3'), answer: t('answerProfessionals3') },
        { question: t('quetionProfessionals4'), answer: t('answerProfessionals4') },
        { question: t('quetionProfessionals5'), answer: t('answerProfessionals5') },
        { question: t('quetionProfessionals6'), answer: t('answerProfessionals6') },
    ];

    return (
        <SectionLayout props={{ display: { base: 'none', sm: 'flex' }, position: 'relative' }}>
            <Text
                as="h2"
                fontSize={{ base: '32px', md: '55px' }}
                fontWeight={{ base: '700', md: '800' }}
                color={color || '#2E3083'}
                textAlign="center"
                lineHeight={{ base: '43.58px', md: '66px' }}
                mb={{ base: '42px', md: '72px' }}
                textTransform={{ base: 'none', md: 'uppercase' }}
            >
                {t('faq')}
            </Text>

            <Accordion allowMultiple size="full" width={{ base: '100%', xmd: '70%' }}>
                {faqData.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton borderLeft="4px solid #D22827" mb="16px" justifyContent="space-between">
                            <Text
                                as="p"
                                textAlign="left"
                                fontWeight="700"
                                color="#2E3083"
                                fontSize={{ base: '20px' }}
                                lineHeight="28px"
                            >
                                {item.question}
                            </Text>
                            <AccordionIcon display={{ base: 'none', xsm: 'block' }} />
                        </AccordionButton>
                        <AccordionPanel as="p" pb="16px" fontWeight="400" color="#2E3083" fontSize={{ base: '16px' }} lineHeight="20px">
                            {item.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </SectionLayout>
    );
};

export default Faq;
