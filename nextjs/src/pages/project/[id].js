import Contact from '@/components/Contact/Contact';
import Projects from '@/components/Projects/Projects';
import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getOneProject } from '../api/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { ImQuotesLeft } from "react-icons/im";
import theme from '@/styles/theme';


const ProjectItem = ({ project }) => {
    // console.log("🚀 ~ ProjectItem ~ project:", project)
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const { query } = useRouter();
    // console.log('🚀 ~ ProjectItem ~ router:', query.id);
    
    
    return (
        <>
        <Head>
            {project?.title && <title>{project.title}</title>}
            {project?.title && <meta property="og:title" content={project.title} />}
            {project?.photo && <meta property="og:image" content={project.photo} />}
            <meta property="og:description" content={t('meta:description')} />
            <meta property="og:type" content="article" />
        </Head>
        <main>
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
                    as={'h1'}
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
            
                <Flex
                    borderRadius={'0px'}
                    w="100%"
                    direction={{ base: 'column', xlg: 'row' }}
                    overflow={'hidden'}
                    justify={'center'}
                    align={'center'}
                    gap={'64px'}
                    mb={'40px'}
                >
                    {project?.youtube && (
                        <Box flexBasis={{ base: 'auto', xlg: '50%'}} alignSelf={{ base: 'stretch', xlg: 'center' }}>
                            <Box paddingBottom={'56.25%'} position={'relative'}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                    width="100%"
                                    height="100%"
                                    src={project?.youtube}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    //   allowFullScreen
                                />
                            </Box>
                        </Box>
                    )}
                    {project?.feedback && 
                        <Flex flexBasis={{ base: 'auto', xlg:'50%'}} justifyContent={'center'} alignItems={'center'}>
                            <Box w={{ base: '100%', xmd: '75%'}} backgroundColor={'#F5F5F5'} padding={{ base: '20px', sm: '32px 32px 18px 32px'}}>
                                <Flex justify={'space-between'} align={'center'} color={theme.colors.d_black}>
                                    <ImQuotesLeft fontSize={'40px'} />
                                    <Text as={'p'} fontSize={'24px'} fontWeight={700} textTransform={'uppercase'} whiteSpace={'nowrap'}>
                                        {t('project_feedback')}
                                    </Text>
                                </Flex>
                                <Text mt={'24px'} as={'p'} fontSize={{ base: '12px', xmini: '16px' }} lineHeight={'1.75'} fontStyle={'italic'}>{project?.feedback}</Text>
                                <Box mt={'24px'}>
                                    <Flex alignItems={'stretch'} gap={'16px'}>
                                        <Box w={'50px'} h={'50px'} position={'relative'} rounded={'50%'} overflow={'hidden'}>
                                            <Box w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={'center center'} backgroundColor={theme.colors.d_black}></Box>
                                        </Box>
                                        <Flex direction={'column'} gap={'8px'} lineHeight={'1'}>
                                            {project?.feedback_author && <Text as={'p'} fontSize={'18px'} fontWeight={600}>{project?.feedback_author}</Text>}
                                            {project?.feedback_job && <Text as={'p'} fontSize={'12px'} fontWeight={400} opacity={0.5}>{project?.feedback_job}</Text>}
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>}
                </Flex>

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
        </>
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
            ...(await serverSideTranslations(locale ?? 'fr', ['common', 'meta'])),
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
