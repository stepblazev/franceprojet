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


import FormOpenBtn from '@/components/UI/Buttons/FormOpenBtn';
import WhyPutTrust from '@/components/WhyPutTrust/WhyPutTrust';
// import { Form } from "react-hook-form";

function Home({props}) {
    return (
        <main>
            <Hero />
            <Benefits />
            <Renovation />
            <Projects />
            <Partners />
            <Opinions  display={{ base: 'none', xmini: 'flex' }}/>
            <AboutFranceProjet />
            <OurApplication />
            <Trends />
            <WhyPutTrust />
            <Opinions  display={{ base: 'flex', xmini: 'none' }}/>

            <Join />
            <Blogs />
            <Faq />
            <Contact />
        </main>
    );
}


//   export async function getStaticProps({ locale }) {
//         return {
//             props: {
//                 // blogs: blogsData,
//                 ...(await serverSideTranslations(locale, ['common'])),
//             },
//         };

// }
export async function getStaticProps({ locale }) {
    return {
        props: {
            locale, // Уточните язык для страницы
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
export default Home;
