import React, { useState, useEffect, useRef } from 'react';

export interface CounterProps {
    item: {
        countNo: string;
        title: string;
        description: string;
    };
}

const RunningCounter: React.FC<CounterProps> = ({ item }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;

        const startCounting = () => {
            const targetValue = Number(item.countNo);
            const interval = setInterval(() => {
                setCount(prevCount => {
                    const nextCount = prevCount + 1;
                    return nextCount > targetValue ? targetValue : nextCount;
                });
            }, 50);

            return () => clearInterval(interval);
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        if (counterRef.current) {
            // console.log(counterRef.current)
            observer = new IntersectionObserver(entries => {

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // console.log(entry.isIntersecting)
                        startCounting();
                        observer?.disconnect();
                    }
                });
            }, options);

            // console.log(observer)

            observer.observe(counterRef.current);
        }

        return () => {
            observer?.disconnect();
        };
    }, [item.countNo]);

    return (
        <div ref={counterRef} className="flex flex-col w-full my-3 xl:my-0 xl:w-1/4 transition-colors duration-700 border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300 hover:from-slate-300 hover:to-white/50 rounded-md px-4 py-3 xl:px-8 xl:py-6 shadow-2xl">
            <h2 className='text-2xl xl:text-5xl font-bold text-[#006e63] xl:py-2'> {count}K+</h2>
            <h5 className='text-xl xl:text-2xl text-[#006e63]/90 xl:py-2'> {item?.title}</h5>
            <p className="text-xs xl:text-sm xl:py-2">{item?.description}</p>
        </div>
    );
};

export default RunningCounter;
