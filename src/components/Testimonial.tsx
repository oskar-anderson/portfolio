import React, { useMemo, useRef, useState } from "react";
import "./Testimonial.css";
import ArrowLeft from "/public/static/svg/arrow-left.svg?react";
import ArrowRight from "/public/static/svg/arrow-right.svg?react";

type Testimonial = {
  person: string;
  image?: string;
  role: string;
  headline: string;
  quote: string;
};

type TestimonialsProps = {
  testimonials?: Testimonial[];
  title?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    person: "Piret Siim",
    role: "Estravel Sales Director",
    image: "/static/img/testimonial/piret-siim-cropped.jpg",
    headline: "Iran war evacuation",
    quote: "Karl Oskar and Sirje quickly built a working web solution and kept their hands on the technical side of things throughout the process. I don't think Karl Oskar ever went to sleep. [...]\nWe can confidently say that our team, together with the Ministry of Foreign Affairs team, did world-class work.",
  },
  {
    person: "Sirje Laidvee",
    role: "IT project manager",
    image: "/static/img/testimonial/sirje-laidvee2.jpg",
    headline: "Praise my colleague",
    quote: "Exceptionally dedicated, hardworking and motivated. He does not shy away from seemingly impossible tasks. In the IT field, he always provides quick help and ingenious solutions. He acts quietly, but the result is always neat and correct. He also helps with solving other technical problems that are not related to his job duties.",
  },
  {
    person: "Tiina Nirk",
    role: "Ministry of Foreign Affairs",
    image: "/static/img/testimonial/tiina-nirk-cropped.jpg",
    headline: "Iran war evacuation",
    quote: "Our cooperation with Estravel was excellent and highly professional. They built a robust ticket sales environment in half a day.",
  },
];

export default function Testimonials({
  testimonials = defaultTestimonials,
  title = "People are saying",
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const current = testimonials[currentIndex];

  const cards = useMemo(() => {
    return testimonials.map((item, index) => {
      const isCurrent = index === currentIndex;
      const isViewed = index < currentIndex;
      const isUpcoming = index > currentIndex;

      const distance = Math.abs(index - currentIndex);

      let rotate = 0;
      let translateX = 0;
      let translateY = 0;

      if (isViewed) {
        rotate = 18 + distance;
        translateX = 10;
        translateY = 12;
      } else if (isUpcoming) {
        rotate = -4;
        translateX = Math.min(distance * 10, 34);
        translateY = Math.min(distance * 8, 28);
      }

      const zIndex = isCurrent ? 2*total : isUpcoming ? 2*total - distance : total-distance;

      return {
        item,
        index,
        isUpcoming,
        isViewed,
        isCurrent,
        style: {
          zIndex,
          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
        } as React.CSSProperties,
      };
    });
  }, [testimonials, currentIndex, total]);

  function goPrev() {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % total);
  }

  // --- Drag-to-swipe on the card stack ---
  const draggingRef = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const axis = useRef<null | "h" | "v">(null);
  const dxRef = useRef(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const SWIPE_THRESHOLD = 60;

  function onPointerDown(e: React.PointerEvent) {
    draggingRef.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    axis.current = null;
    dxRef.current = 0;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!draggingRef.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    // Lock direction on first meaningful move so vertical scrolling still works.
    if (axis.current === null) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axis.current = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
    }
    if (axis.current === "v") return;
    dxRef.current = dx;
    setDragX(dx);
  }

  function endDrag() {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    const dx = dxRef.current;
    dxRef.current = 0;
    setDragX(0);
    if (dx <= -SWIPE_THRESHOLD) goNext();
    else if (dx >= SWIPE_THRESHOLD) goPrev();
  }

  return (
    <section className="testimonials section bg-dark is-dark" aria-labelledby="testimonials-title">
      <div className="content-container">
        <h2 className="testimonials__title display-md">
          {title}
        </h2>

        <div className="testimonials__grid">
          <div className="relative">
            <div className="mobile_testimonials__nav">
              <button className="btn-icon btn-bevel-secondary" type="button" onClick={goPrev}>
                <ArrowLeft></ArrowLeft>
              </button>

              <button className="btn-icon btn-bevel-secondary" type="button" onClick={goNext}>
                <ArrowRight></ArrowRight>
              </button>
            </div>

            <div
              className="testimonials__visual"
              aria-hidden="true"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{ cursor: dragging ? "grabbing" : "grab" }}
            >
              {cards.map((card) => {
                const style: React.CSSProperties =
                  card.isCurrent && (dragging || dragX !== 0)
                    ? {
                        ...card.style,
                        transform: `translate(${dragX}px, 0) rotate(${dragX * 0.03}deg)`,
                        transition: dragging ? "none" : undefined,
                      }
                    : card.style;
                return (
                  <div key={`${card.index}`} className={`quote-card ${card.isCurrent ? "is-current" : ""} ${card.isViewed ? "is-viewed" : ""}`} style={style}>
                    <div className="quote-card__frame">
                      {
                      card.item.image
                        ? <img className="w-full h-full rounded-[inherit] pointer-events-none select-none" src={card.item.image} draggable={false}></img>
                        : <div className="quote-card__icon">“</div>
                      }
                    </div>
                    <div className="quote-card__person">{card.item.person}</div>
                    <div className="quote-card__role">{card.item.role}</div>
                  </div>
                );
              })}

            </div>
          </div>

          <div className="testimonials__content">
            <div className="testimonials__counter">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span aria-hidden="true">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>

            <h3 className="testimonials__headline h3">{current.headline}</h3>

            <p className="testimonials__quote">"{current.quote}"</p>

            <div className="testimonials__nav">
              <button className="btn-icon btn-bevel-secondary" type="button" onClick={goPrev}>
                <ArrowLeft></ArrowLeft>
              </button>

              <button className="btn-icon btn-bevel-secondary" type="button" onClick={goNext}>
                <ArrowRight></ArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}