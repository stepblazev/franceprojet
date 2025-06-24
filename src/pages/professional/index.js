'use client';


import Advantages from '@/components/Professional/Advantages';
import Contact from '@/components/Professional/Contact';
import Customers from '@/components/Professional/Customers';
import Faq from '@/components/Professional/Faq';
import Hero from '@/components/Professional/Hero';
import OurApplication from '@/components/Professional/OurApplication';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

function Professional({props}) {
    return (
        <main>
            {/* <Head>
                <meta charset="UTF-8"/>
                <meta name="keywords" content="Artisan trouver chantier rénovation"/>
                <meta name="keywords" content="Craftsman Find Renovation Projects"/>
                <title>France Projet: Join our partner network</title>
                <title>France Projet : Rejoindre notre réseau partenaire</title>
                
                <meta name="description" content="Are you an interior architect, space designer, or construction expert? Join our partner network to find new projects and get the best prices on your material purchases."/>
                <meta name="description" content="Vous êtes architecte d'intérieur, designer d'espace ou expert en travaux ? Rejoignez notre réseau partenaire pour trouver de nouveaux projets et obtenir le meilleur prix sur vos achats de matériaux."/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head> */}
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
                ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
            },
        };

}

export default Professional;
