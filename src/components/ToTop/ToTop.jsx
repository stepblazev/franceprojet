import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import cls from './to-top.module.css';

const ToTop = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const toggleActive = () => {
            setActive(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleActive);
        return () => window.removeEventListener('scroll', toggleActive);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <div className={[cls.totop, active ? cls._active : null].join(' ')}>
            <button className={cls.totop__button} type='button' onClick={scrollToTop}>
                <MdKeyboardDoubleArrowUp className={cls.totop__icon} />
                Scroll to Top
            </button>
        </div>
    );
};

export default ToTop;
