import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            setTime(`${hours}:${minutes}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return time;
};
