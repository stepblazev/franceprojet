import { useRouter } from "next/router";

const useIsHomePage = () => {
    const router = useRouter();  
    return router.route === '/';
};

export default useIsHomePage;