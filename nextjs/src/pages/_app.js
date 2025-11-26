import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/UI/Layouts/MainLayuot';
import theme from '@/styles/theme';
import { Suspense } from 'react'
import { appWithTranslation } from 'next-i18next'
import { FileProvider } from '@/components/UI/FileProvider';
import Loader from '@/components/UI/Loader';
import Gloader from '@/components/Gloader/Gloader';
import ToTop from '@/components/ToTop/ToTop';

import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import '@/styles/swiper.css';

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : undefined;
}

function setCookie(name, value, maxAgeSec = 31536000) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSec}`;
}

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        
        const currentLocale = router.locale ?? 'fr';
        const cookieLocale = getCookie('NEXT_LOCALE');

        if (cookieLocale !== currentLocale) {
            setCookie('NEXT_LOCALE', currentLocale);
        }

        const pathHasLocale = /^\/(ru|en|fr)(\/|$)/.test(router.asPath);
        
        if (!pathHasLocale && currentLocale) {
            router.replace(router.asPath, undefined, { locale: currentLocale });
        }
    }, [router.isReady, router.locale, router.asPath]);
    
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