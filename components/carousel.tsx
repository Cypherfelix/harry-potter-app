// components/Carousel.tsx

import React from "react";
import { useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

type CarouselProps = {
  items: any[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  useEffect(() => {
    class Carousel {
      carouselContainer: Element;
      carouselControls: { next: Element; prev: Element };
      carouselItems: Array<Element>;

      constructor(
        container: Element,
        controls: { next: Element; prev: Element },
        items: Array<Element>
      ) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselItems = items;
      }

      updateCarousel() {
        this.carouselItems.forEach((item, index) => {
          item.classList.remove(
            "gallery-item-1",
            "gallery-item-2",
            "gallery-item-3",
            "gallery-item-4",
            "gallery-item-5"
          );
        });

        this.carouselItems.slice(0, 5).forEach((item, index) => {
          item.classList.add(`gallery-item-${index + 1}`);
        });
      }

      setCurrentsState(direction: Element) {
        if (direction.classList.contains("next-btn")) {
          this.carouselItems.unshift(this.carouselItems.pop()!);
        } else if (direction.classList.contains("prev-btn")) {
          this.carouselItems.push(this.carouselItems.shift()!);
        }
        this.updateCarousel();
      }

      init() {
        this.carouselControls.next?.addEventListener("click", () => {
          this.setCurrentsState(this.carouselControls.next!);
        });

        this.carouselControls.prev?.addEventListener("click", () => {
          this.setCurrentsState(this.carouselControls.prev!);
        });

        // Automatically advance the carousel every 3 seconds
        var autoAdvanceInterval = setInterval(() => {
          this.setCurrentsState(this.carouselControls.next!);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Pause auto-advancement on container hover
        this.carouselContainer.addEventListener("mouseenter", () => {
          console.log("Mouse entered container!");
          clearInterval(autoAdvanceInterval);
        });

        // Resume auto-advancement when leaving container
        this.carouselContainer.addEventListener("mouseleave", () => {
          autoAdvanceInterval = setInterval(() => {
            this.setCurrentsState(this.carouselControls.next!);
          }, 3000); // Restart the interval
        });
      }
    }

    const galleryContainer = document.querySelector(".gallery-container");

    const galleryItems = document.querySelectorAll(".gallery-item");

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const galleryControls = {
      next: nextBtn!,
      prev: prevBtn!,
    };

    console.log(galleryContainer, galleryItems, galleryControls);

    const carousel = new Carousel(
      galleryContainer!,
      galleryControls,
      Array.from(galleryItems)!
    );

    carousel.init();
  }, []);

  return (
    <div className="gallery ">
      <div className="gallery-container">
        <button
          className="prev-btn h-5 w-5 bg-gray-500 bg-opacity-60 hover:bg-opacity-100 transition-opacity duration-300 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10 lg:right-0"
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
          className="next-btn h-5 w-5 bg-gray-500 bg-opacity-60 hover:bg-opacity-100 transition-opacity duration-300 absolute right-14 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center md:h-8 md:w-8 lg:h-10 lg:w-10 lg:right-0 z-20"
          aria-label="Next"
        >
          <ArrowRightIcon color="black" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
