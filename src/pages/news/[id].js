import Contact from '@/components/Contact/Contact';
import Trends from '@/components/Trends/Trends';
import SectionLayuot from '@/components/UI/Layouts/SectionLayuot';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getOneNews } from '../api/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

function formatDate(inputDate) {
    const dateParts = inputDate?.split(" ");
    const date = dateParts?.[0] || null
    // const time = dateParts[1];

    const [year, month, day] = date?.split("-");
    // const [hours, minutes, seconds] = time.split(":");

    return `${day}.${month}.${year}`;
}
const index = ({ news }) => {
    // console.log("🚀 ~ index ~ news:", news)
    const { t } = useTranslation('common');
    // Внутри функционального компонента
    const { query } = useRouter();
    // const [news, setNews] = useState([]);



    return (
        <main>
            <SectionLayuot
                props={{
                    px: {
                        base: '30px',
                        md: '50px',
                        lg: '100px',
                        desk: '140px',
                        xlm: '180px',
                    },
                    alignItems: 'flex-start',
                    mt: { base: '50px', md: "70px", lg: '100px' }
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
                    mb={'30px'}
                >
                    {news?.title}
                </Text>
                <Flex flexDir={'column'} gap={{ base: '20px', lg: '40px' }} w={'100%'} >
                    <Image alt={'image'} src={news?.photo} minH={'300px'} aspectRatio={{ base: '10/12', xsm: '10/8', md: '12/7' }} borderRadius={'10px'} />
                    <Text
                        as={'p'}
                        color={'#2E3083'}
                        fontSize={'18px'}
                        fontWeight={700}
                        lineHeight={'28px'}
                        textAlign={'end'}
                    >{news?.public_at && formatDate(news?.public_at)}
                    </Text>
                    <Text
                        as={'p'}
                        color={'#2E3083'}
                        fontSize={'16px'}
                        fontWeight={600}
                        lineHeight={'22px'}
                        textAlign={'left'}
                        dangerouslySetInnerHTML={{
                            __html: news?.text,
                        }}
                    ></Text>
                </Flex>
            </SectionLayuot>
            <Trends untitled='true' px={{
                base: '30px',
                md: '50px',
                lg: '100px',
                desk: '140px',
                xlm: '180px',
            }} />
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
    const newsData = await getOneNews(id, locale ?? 'fr');

    return {
        props: {
            news: newsData,
            ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
        },
    };
}
export default index;
