// import RouteProtection from '@/components/RouteProtection';
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from '@/components/UI/Layouts/MainLayuot';
import theme from '@/styles/theme';
import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Suspense } from 'react'
import { appWithTranslation } from 'next-i18next'
import '@/styles/swiper.css';
import { FileProvider } from '@/components/UI/FileProvider';
import Loader from '@/components/UI/Loader';
import Head from 'next/head';
import Gloader from '@/components/Gloader/Gloader';
import ToTop from '@/components/ToTop/ToTop';
// import '../../i18n'
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        document.cookie = "NEXT_LOCALE=fr; path=/; max-age=31536000"; // Установить куку на 1 год
        router.push(router.asPath, undefined, { locale: "fr" });
    }, []);
    return (
        <>
            <ChakraProvider theme={theme}>
                <FileProvider>
                <Suspense fallback={<Loader />}>
                    <Layout>
                        <Gloader />
                        <ToTop />
                        <Component {...pageProps} />
                    </Layout>
                </Suspense>
                    
                </FileProvider>
            </ChakraProvider>
        </>
    );
}
export default appWithTranslation(MyApp);