import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
    items: React.ReactNode[];  // Array de elementos (imágenes o contenido) para el carrusel
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    return (
        <ResponsiveCarousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false}>
            {items.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </ResponsiveCarousel>
    );
};

export default Carousel;
