import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cls from './gloader.module.css';

export default function Gloader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return <div className={[cls.gloader, loading ? cls._loading : null].join(' ')}>
            <div className={cls.spinner}></div>
        </div>;
}