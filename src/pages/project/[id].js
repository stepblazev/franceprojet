import Contact from '@/components/Contact/Contact';
import Projects from '@/components/Projects/Projects';
import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getOneProject } from '../api/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const ProjectItem = ({ project }) => {
    console.log("🚀 ~ ProjectItem ~ project:", project)
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const { query } = useRouter();
    console.log('🚀 ~ ProjectItem ~ router:', query.id);

    
    return (
        <main>
                {/* <Head>
                <meta charset="UTF-8"/>
                <meta name="keywords" content="Interior Renovation Achievements"/>
                <meta name="keywords" content="réalisations rénovation d'intérieur"/>
                <title>France Projet: Discover all interior renovation projects</title>
                <title>France Projet : Découvrez tous les projets de rénovation d'intérieur</title>
                
                <meta name="description" content="Explore the iconic achievements of France Projet, your expert in interior renovation in Paris and the Île-de-France region. Get inspired by our successful transformations to envision the future of your own space."/>
                <meta name="description" content="Découvrez les réalisations emblématiques de France Projet, votre expert en rénovation d'intérieur à Paris et en Île-de-France.Inspirez-vous de nos transformations réussies pour imaginer le futur de votre propre espace."/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head> */}
            <SectionLayuot
                props={{
                    px: {
                        base: '25px',
                        md: '40px',
                        lg: '70px',
                        desk: '100px',
                        xlm: '140px',
                    },
                    alignItems: 'flex-start',
                    mt: { base: '50px', md: "70px" ,lg:'100px' }
                }}
            >
                <Text
                    as={'h2'}
                    w={{ base: '90%', desk: '100%' }}
                    fontSize={{ base: '32px', md: '55px' }}
                    fontWeight={{ base: '700', md: '800' }}
                    color={'#2E3083'}
                    textAlign={{ base: 'left' }}
                    lineHeight={{ base: '43.58px', md: '66px' }}
                    textTransform={{ base: 'none', md: 'uppercase' }}
                >
                    {project?.title}
                </Text>

                <Text
                    as={'p'}
                    my={{ base: '30px', desk: '80px', xlm: '190px' }}
                    w={{ base: '100%', xmd: '70%', lg: '60%', desk: '835px' }}
                    fontSize={'16px'}
                    fontWeight={600}
                    lineHeight={'22px'}
                    textAlign={'left'}
                    color={'#2E3083'}
                    dangerouslySetInnerHTML={{ __html: project?.text }}
                ></Text>
                {project?.youtube && (
                    <Flex
                        borderRadius={'0px'}
                        aspectRatio={{ base: '16/9', desk: '16/5' }}
                        w="100%"
                        //  maxW={'1709px'}
                        overflow={'hidden'}
                        justify={'center'}
                        align="center"
                        border={'1px solid  #C7CCD3'}
                        //    h={{ base: "389px" }}
                        pos="relative"
                        mb={'40px'}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={project?.youtube}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            //   allowFullScreen
                        />
                    </Flex>
                )}

                <Flex
                    flexDir={{ base: 'column', xmd: 'row' }}
                    justifyContent={'space-between'}
                    mt={{ base: '40px', desk: '80px', xlm: '130px' }}
                    gap={{ base: '30px', md: '60px', desk: '7    0px' }}
                >
                    <Text
                        as={'p'}
                        w={{ base: '100%', xmd: '70%', desk: '30%' }}
                        fontSize={'16px'}
                        fontWeight={600}
                        lineHeight={'22px'}
                        textAlign={'left'}
                        color={'#2E3083'}
                        dangerouslySetInnerHTML={{ __html: project?.block_left }}
                    ></Text>
                    <Text
                        as={'p'}
                        w={{ base: '100%', xmd: '70%', desk: '30%' }}
                        fontSize={'16px'}
                        fontWeight={600}
                        lineHeight={'22px'}
                        textAlign={'left'}
                        color={'#2E3083'}
                        dangerouslySetInnerHTML={{
                            __html: project?.block_right,
                        }}
                    ></Text>
                </Flex>
     
            </SectionLayuot>
            <Projects untitled="true" />
            <Contact />
        </main>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true // Render page at runtime for unmatched paths
    };
}

export async function getStaticProps({ locale, params }) {
    const id = params.id;
    const projectData = await getOneProject(id, locale ?? 'fr');

    return {
        props: {
            project: projectData,
            ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
        },
    };
}


// export async function getStaticProps({ locale, params }) {
//     try {
//     const id = params.id;

//         const projectData = await getOneProject(id, locale || 'fr');

//         if (!projectData) {
//             return {
//                 notFound: true, // or handle the case where data is not available
//             };
//         }

//         return {
//             props: {
//                 project: projectData,
//                 ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
//             },
//         };
//     } catch (error) {
//         console.error('Error fetching blog data:', error);
//         return {
//             notFound: true, // or handle the error case
//         };
//     }
// }
export default ProjectItem;
