'use client';


import Advantages from '@/components/Professional/Advantages';
import Contact from '@/components/Professional/Contact';
import Customers from '@/components/Professional/Customers';
import Faq from '@/components/Professional/Faq';
import Hero from '@/components/Professional/Hero';
import OurApplication from '@/components/Professional/OurApplication';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

function Professional({props}) {
    const { t } = useTranslation('common');
    
    return (
        <main>
            <Head>
                <title>{t('joinUs')}</title>
                <meta property="og:title" content={t('joinUs')} />
                <meta property="og:description" content={t('meta:description')} />
            </Head>
            <Hero/>
            <OurApplication/>
            <Advantages/>
            <Customers/>
            <Faq color={'#D22827'}/>
            <Contact/>
          
        </main>
    );
}


  export async function getStaticProps({ locale }) {
        return {
            props: {
                // blogs: blogsData,
                ...(await serverSideTranslations(locale ?? 'fr', ['common', 'meta'])),
            },
        };

}

export default Professional;
