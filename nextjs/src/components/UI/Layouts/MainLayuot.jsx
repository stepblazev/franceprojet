import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Box } from '@chakra-ui/react';
// import Footer from '../../Footer/Footer';
// import Header from '../../Header/Header';

const Layout=({ children })=> {
    return (
        <>
        <Header/>
        {children}
        <Footer/> 
     </>
        // <Box
        //     // minWidth={'100%'}
        //     // m={'0'}
        //     minH={'100%'}

        //     // position={'relative'}
        //     // overflow={'hidden'}
        // >
        //     <Box w={'100%'}>
        //         <Header />
        //     </Box>
        //     <main>{children}</main>
        //     <Footer />
        // </Box>
    );
}
export default Layout;
