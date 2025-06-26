// 'use client';

import AboutFranceProjet from '@/components/AboutFranceProjet/AboutFranceProjet';
import Benefits from '@/components/Benefits/Benefits';
import Blogs from '@/components/Blogs/Blogs';
import Contact from '@/components/Contact/Contact';
import Faq from '@/components/FAQ/Faq';
import Hero from '@/components/Hero/Hero';
import Join from '@/components/Join/Join';
import Opinions from '@/components/Opinions/Opinions';
import OurApplication from '@/components/OurApplication/OurApplication';
import Partners from '@/components/Partners/Partners';
import Projects from '@/components/Projects/Projects';
import Renovation from '@/components/Renovation/Renovation';
import Trends from '@/components/Trends/Trends';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';

import WhyPutTrust from '@/components/WhyPutTrust/WhyPutTrust';
import { useTranslation } from 'next-i18next';

function Home({props}) {
    const { t } = useTranslation();
    
    return (
        <>
        <Head>
            <title>{t('meta:title')}</title>
            <meta name="description" content={t('meta:description')} />
            <meta property="og:title" content={t('meta:title')} />
            <meta property="og:description" content={t('meta:description')} />
            <meta property="og:type" content="website" />
        </Head>
        <main>
            <Hero />
            <Benefits />
            <Renovation />
            <Projects />
            <Partners />
            <Opinions/>
            <AboutFranceProjet />
            <OurApplication />
            <Trends />
            <WhyPutTrust />

            <Join />
            <Blogs />
            <Faq />
            <Contact />
        </main>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            locale, // Уточните язык для страницы
            ...(await serverSideTranslations(locale, ['common', 'meta'])),
        },
    };
}

export default Home;
