import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';

const index = ({props}) => {
    const { t } = useTranslation('common');
    return (
        <>
        <Head>
            <title>{t('titlePolicy')}</title>
            <meta property="og:title" content={t('titlePolicy')} />
            <meta property="og:description" content={t('meta:description')} />
        </Head>
        <SectionLayuot
            props={{
                my: { base: '50px', md: '70px', lg: '80px' },
                alignItems: 'start',
                px: { base: '20px', sm: '50px', md: '120px', lg: '180px' },
                fontSize: { base: '16px!important', md: '18px!important' },

            }}
        >
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <h1 style={{ lineHeight: '1.5', marginBottom: '0.7in' }}>
                <font size={6} style={{ fontSize: '26pt' }}>
                    <b>{t('titlePolicy')}</b>
                </font>
            </h1>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle1Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description1Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle2Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description2Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle3Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description3Policy')}
            </p>

            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle4Policy')}
                </font>
            </p>
            <Box pl={'20px'}>
            <Text mb={'10px'} style={{ lineHeight: '1.5', }}>{t('description4PolicyItem1')}</Text> 
            <Text mb={'10px'}  style={{ lineHeight: '1.5',  }}>{t('description4PolicyItem2')}</Text> 
            <Text style={{ lineHeight: '1.5',  }}>{t('description4PolicyItem3')}</Text> 

            </Box>
              
      
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle5Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description5Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle6Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description6Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <a name="_GoBack" />
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle7Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description7Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle8Policy')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description8Policy')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
        </SectionLayuot>
        </>
    );
};
export async function getStaticProps({ locale }) {
    return {
        props: {
            // blogs: blogsData,
            ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
    };
}


export default index;
