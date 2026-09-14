import { useEffect, useRef, useState } from "react";

export function useReveal(){
    const [revealed, setRevealed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                setRevealed(true);
                observer.disconnect();
            }
        });

        observer.observe(node);
        
        return () => observer.disconnect();
    })

    return { ref, revealed  };
}