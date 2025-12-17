import { useEffect, useRef, useState } from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface SliderProps {
  items: {img: string, price: string, description: string, id: number}[];
  itemsPerSlide?: number;
}

export default function Slider({
  items,
  itemsPerSlide = 4,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(itemsPerSlide);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // clone slides for infinite loop
  const clonedItems = [
    ...items.slice(-itemsPerSlide),
    ...items,
    ...items.slice(0, itemsPerSlide),
  ];

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const next = () => setCurrentIndex((prev) => prev + itemsPerSlide);
  const prev = () => setCurrentIndex((prev) => prev - itemsPerSlide);

  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      if (currentIndex >= items.length + itemsPerSlide) {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerSlide);
      }

      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(items.length);
      }
    };

    const track = trackRef.current;
    track?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, isTransitioning, items.length, itemsPerSlide]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  const slideWidth = 100 / itemsPerSlide;

  const currentPage =
    ((currentIndex - itemsPerSlide + items.length) % items.length) /
    itemsPerSlide;

  return (
    <section id="slider-section">
      <div className="slider">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        <div className="viewport">
          <div
            ref={trackRef}
            className="track"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
              transition: isTransitioning ? "transform 0.45s ease" : "none",
            }}
          >
            {clonedItems.map((item, index) => (
              <div
                key={index}
                className="slide-item"
                style={{ width: `${slideWidth}%` }}
              >
                {/* {renderItem(item, index)} */}
                <Link to="" className="card">
                  <img src={item.img} alt="brand" className="brand" />
                  <p className="desc">
                    {
                      item.description.length > 70 ? item.description.slice(0,70) + "..." : item.description
                    }
                  </p>
                  <p className="price">{item.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>
          ›
        </button>

        <div className="pagination">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? "active" : ""}`}
              onClick={() => setCurrentIndex(i * itemsPerSlide + itemsPerSlide)}
            />
          ))}
        </div>
      </div>

      <Button link="" size="lg">
        SHOP NOW
      </Button>
    </section>
  );
}
