"use client";
import React, { useRef } from "react";

interface TransitionImageProps {
    src: string;
    transitionName: string;
    alt?: string;
    style?: React.CSSProperties;
    className?: string;
};

const TransitionImage: React.FC<TransitionImageProps> = ({ src, transitionName, alt, style, className }) => {

    const transitionImage = useRef<HTMLImageElement>(null);

    const startTransition = () => {

        document.startViewTransition(() => {

            if (transitionImage.current) {
                transitionImage.current.style.viewTransitionName = transitionName;
            };
        });
    };

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            onClick={startTransition}
            ref={transitionImage}
        />
    );
};

export default TransitionImage;
