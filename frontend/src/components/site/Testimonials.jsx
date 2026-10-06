import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../mock";

export default function Testimonials() {
  const track = useRef(null);
  const [idx, setIdx] = useState(0);

  const scrollTo = (i) => {
    const el = track.current;
    if (!el) return;
    const card = el.children[i];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setIdx(i);
  };

  useEffect(() => {
    const el = track.current;
    const onScroll = () => {
      const w = el.children[0]?.offsetWidth || 1;
      setIdx(Math.round(el.scrollLeft / (w + 20)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const max = TESTIMONIALS.length - 1;

  return (
    <section className="ffh-section ffh-testi" id="testimonials">
      <Container className="ffh-container">
        <div className="d-flex justify-content-between align-items-center mb-5 reveal">
          <h2 className="ffh-h2 ffh-testi-title">What Our Happy Clients Say</h2>
          <div className="d-flex gap-2 align-items-center">
            <button className="ffh-arrow" disabled={idx === 0} onClick={() => scrollTo(Math.max(0, idx - 1))} aria-label="Previous" data-testid="testimonial-prev"><ArrowLeft size={18} /></button>
            <button className="ffh-arrow solid" disabled={idx >= max} onClick={() => scrollTo(Math.min(max, idx + 1))} aria-label="Next" data-testid="testimonial-next"><ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="ffh-testi-track" ref={track}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`ffh-testi-card ${i === idx ? "active" : ""}`} onClick={() => scrollTo(i)} data-testid={`testimonial-card-${i}`}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <img src={`https://i.pravatar.cc/120?img=${t.img}`} alt={t.name} width="48" height="48" loading="lazy" decoding="async" />
                <div className="flex-grow-1">
                  <h6>{t.name}</h6>
                  <small>{t.company}</small>
                </div>
                <Quote size={26} className="ffh-testi-q" />
              </div>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
