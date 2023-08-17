import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

type CarouselProps = {
  items: any[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="gallery ">
      <div className="gallery-container">
        <button
          className="h-5 w-5 bg-gray-500 bg-opacity-60 hover:bg-opacity-100 transition-opacity duration-300 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10 lg:right-0"
          aria-label="Previous"
        >
          <ArrowLeftIcon color="black" />
        </button>

        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery-item gallery-item-${index + 1}`}
            data-index={index + 1}
          >
            <div className="image">
              <Image src={item.image} alt={item.name} fill />
              <div className="image-overlay">
                <div className="image-title">{item.name}</div>
              </div>
            </div>
          </div>
        ))}

        <button
          className="h-5 w-5 bg-gray-500 bg-opacity-60 hover:bg-opacity-100 transition-opacity duration-300 absolute right-14 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10 lg:right-0"
          aria-label="Next"
        >
          <ArrowRightIcon color="black" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
