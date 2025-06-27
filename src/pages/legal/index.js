import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const index = ({props}) => {
    const { t } = useTranslation('common');
    return (
        <>
        <Head>
            <title>{t('title')}</title>
            <meta property="og:title" content={t('title')} />
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
                    <b>{t('title')}</b>
                </font>
            </h1>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle1')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description1')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle2')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description2')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle3')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description3')}
            </p>

            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle4')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description4')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description5')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt',fontWeight: '600' }}>
                    {t('subtitle5')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description6')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle6')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.4in' }}>
                {t('description7')}
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                <a name="_GoBack" />
                <br />
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0.2in' }}>
                <font size={4} style={{ fontSize: '16pt' ,fontWeight: '600'}}>
                    {t('subtitle7')}
                </font>
            </p>
            <p style={{ lineHeight: '1.5', marginBottom: '0in' }}>
                {t('description8')}
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
