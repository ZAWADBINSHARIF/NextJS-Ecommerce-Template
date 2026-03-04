"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchBanners } from "@/api";
import QueryKeys from "@/constant/QueryKeys";
import { STORAGE_URL } from "@/constant";

// ── Types ─────────────────────────────────────────────────────────
interface Banner {
    id: number;
    title: string;
    image: string;
    link?: string;
    position?: number;
    button_name?: string;
    show_button?: boolean;
}

// ── Hero ──────────────────────────────────────────────────────────
const HeroBanner = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const bannersQuery = useQuery({
        queryFn: fetchBanners,
        queryKey: [QueryKeys.STORE_BANNERS],
    });

    const banners: Banner[] = bannersQuery.data?.banners ?? [];

    // Go to a slide with transition lock
    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning || banners.length <= 1) return;
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 500);
        },
        [isTransitioning, banners.length]
    );

    // Auto-advance
    useEffect(() => {
        if (banners.length <= 1) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [banners.length]);

    // Loading skeleton
    if (bannersQuery.isLoading) {
        return (
            <>
                <style>{heroStyles}</style>
                <div className="hero-wrapper">
                    <div className="hero-skeleton" />
                </div>
            </>
        );
    }

    // No banners fallback
    if (!banners.length) return null;

    const activeBanner = banners[current];

    return (
        <>
            <style>{heroStyles}</style>

            <section className="hero-wrapper overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
                {/* ── Slides ── */}
                <div className="hero-track">
                    {banners.map((banner, i) => {
                        const isActive = i === current;
                        const href = banner.link || "#";
                        const imgSrc = banner.image?.startsWith("http")
                            ? banner.image
                            : STORAGE_URL + banner.image;

                        return (
                            <div
                                key={banner.id}
                                className={`hero-slide ${isActive ? "hero-slide--active" : "hero-slide--hidden"}`}
                                aria-hidden={!isActive}
                            >
                                {/*
                  The key fix: use a real <img> tag (or Next Image with fill)
                  so the image is visible and fills the container correctly.
                  We use Next Image with fill + object-cover for best quality.
                */}
                                <Link href={href} className="hero-slide-link">
                                    <Image
                                        src={imgSrc}
                                        alt={banner.title || `Banner ${i + 1}`}
                                        fill
                                        sizes="100vw"
                                        className="hero-slide-img"
                                        priority={i === 0}
                                        unoptimized
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* ── CTA Button (centered, lower-middle of image) ── */}
                {banners[current]?.link &&
                    banners[current]?.show_button && (
                        <div className="hero-cta">
                            <Link href={banners[current].link!}
                            className="inline-block px-10 py-3.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-semibold text-sm rounded tracking-wide transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                {banners[current]?.button_name}
                            </Link>
                        </div>
                    )}

                {/* ── Dots ── */}
                {banners.length > 1 && (
                    <div className="hero-dots" role="tablist" aria-label="Slides">
                        {banners.map((_, i) => (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={i === current}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`hero-dot ${i === current ? "hero-dot--active" : ""}`}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                )}

                {/* ── Prev / Next arrows (optional, shown only when >1 banner) ── */}
                {banners.length > 1 && (
                    <>
                        <button
                            className="hero-arrow hero-arrow--prev"
                            aria-label="Previous slide"
                            onClick={() => goTo((current - 1 + banners.length) % banners.length)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            className="hero-arrow hero-arrow--next"
                            aria-label="Next slide"
                            onClick={() => goTo((current + 1) % banners.length)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </>
                )}
            </section>
        </>
    );
};

// ── Styles ────────────────────────────────────────────────────────
const heroStyles = `
  /* ── Hero wrapper: aspect-ratio drives height, image fills it ── */
  .hero-wrapper {
    position: relative;
    width: 100%;
    margin-top: 68px;
    aspect-ratio: 1440 / 500;
    overflow: hidden;
    background: #E5EAF4;
  }

  /* Skeleton */
  .hero-skeleton {
    width: 100%; height: 100%;
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: hero-shimmer 1.4s infinite;
  }
  @keyframes hero-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Slide track */
  .hero-track {
    position: absolute;
    inset: 0;
  }

  /* Individual slide */
  .hero-slide {
    position: absolute;
    inset: 0;
    transition: opacity 0.5s ease;
  }
  .hero-slide--active  { opacity: 1;  z-index: 2; pointer-events: auto; }
  .hero-slide--hidden  { opacity: 0;  z-index: 1; pointer-events: none; }

  /* Slide link fills the slide */
  .hero-slide-link {
    display: block;
    width: 100%; height: 100%;
    position: relative;   /* required for Next Image fill */
  }

  /* The actual image — object-fit: cover fills without distortion */
  .hero-slide-img {
    object-fit: cover !important;
    object-position: center center !important;
  }

  /* ── CTA Button ── */
  .hero-cta {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
.hero-cta-btn {
  background: ##007aff;   /* sky-500 */
}

.hero-cta-btn:hover {
  background: #0284c7;   /* sky-600 */
}

  @media (max-width: 768px) {
    .hero-cta { bottom: 50px; }
    .hero-cta-btn { padding: 10px 28px; font-size: 0.85rem; }
  }
  @media (max-width: 480px) {
    .hero-cta { bottom: 40px; }
    .hero-cta-btn { padding: 8px 22px; font-size: 0.8rem; }
  }

  /* ── Dots ── */
  .hero-dots {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }
  .hero-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    padding: 0;
    transition: background 0.25s, transform 0.25s;
  }
  .hero-dot--active {
    background: #fff;
    transform: scale(1.25);
  }

  /* ── Arrows ── */
  .hero-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 40px; height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.35);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
  }
  .hero-arrow:hover { background: rgba(0, 0, 0, 0.60); }
  .hero-arrow--prev { left: 16px; }
  .hero-arrow--next { right: 16px; }

  /* ── Responsive aspect ratios ── */

  /* Tablet */
  @media (max-width: 1024px) {
    .hero-wrapper {
      aspect-ratio: 16 / 7;
    }
  }

  /* Mobile landscape */
  @media (max-width: 768px) {
    .hero-wrapper {
      aspect-ratio: 4 / 3;
    }
    .hero-arrow { display: none; }   /* hide arrows on small screens */
    .hero-dots  { bottom: 10px; }
    .hero-dot   { width: 8px; height: 8px; }
  }

  /* Mobile portrait */
  @media (max-width: 480px) {
    .hero-wrapper {
      aspect-ratio: 3 / 2;
    }
  }
`;

export default HeroBanner;