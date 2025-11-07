import React from 'react';
import SectionLayout from '../UI/Layouts/SectionLayuot';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Faq = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const faqData = [
        { question: t('quetion1'), answer: t('answer1') },
        { question: t('quetion2'), answer: t('answer2') },
        { question: t('quetion3'), answer: t('answer3') },
        { question: t('quetion4'), answer: t('answer4') },
    ];

    return (
        <SectionLayout props={{ display: { base: 'none', sm: 'flex' }, position: 'relative' }}>
            <Text
                as={'h2'}
                fontSize={{ base: '32px', md: '55px' }}
                fontWeight={{ base: '700', md: '800' }}
                color={'#2E3083'}
                textAlign={'center'}
                lineHeight={{ base: '43.58px', md: '66px' }}
                mb={{ base: '42px', md: '72px' }}
                textTransform={{ base: 'none', md: 'uppercase' }}
            >
                {t('faq')}
            </Text>

            <Accordion allowMultiple size={'full'} width={{ base: '100%', xmd: '70%' }}>
                {faqData.map((faqItem, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton borderLeft={' 4px solid #D22827'} mb={'16px'} justifyContent={{ base: 'space-between' }}>
                            <Text
                                as={'p'}
                                textAlign={'left'}
                                fontWeight={'700'}
                                color={'#2E3083'}
                                fontSize={{ base: '20px' }}
                                lineHeight={'28px'}
                            >
                                {faqItem.question}
                            </Text>
                            <AccordionIcon display={{ base: 'none', xsm: 'block' }} />
                        </AccordionButton>

                        <AccordionPanel as={'p'} pb={'16px'} fontWeight={'400'} color={'#2E3083'} fontSize={{ base: '16px' }} lineHeight={'20px'}>
                            {faqItem.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </SectionLayout>
    );
};

export default Faq;
