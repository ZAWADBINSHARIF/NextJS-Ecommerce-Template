"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchContacts, fetchStoreProfile } from "@/api";
import QueryKeys from "@/constant/QueryKeys";
import { STORAGE_URL } from "@/constant";
import { menuData } from "./menuData";

// ── Types ─────────────────────────────────────────────────────────
interface MenuItem {
    id: number;
    title: string;
    path?: string;
    newTab?: boolean;
    submenu?: MenuItem[];
}

// ── Icons ─────────────────────────────────────────────────────────
const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path
            fillRule="evenodd" clipRule="evenodd"
            d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215Z"
            fill="#3C50E0"
        />
        <path
            d="M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z"
            fill="#3C50E0"
        />
    </svg>
);

const ChevronIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ── Desktop Nav Item ───────────────────────────────────────────────
const DesktopNavItem = ({ item }: { item: MenuItem; }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <li
            style={{ position: "relative", listStyle: "none" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link
                href={item.path ?? "#"}
                target={item.newTab ? "_blank" : undefined}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "0 12px",
                    height: "52px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: hovered ? "#3C50E0" : "#1a1a2e",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    borderBottom: hovered ? "3px solid #3C50E0" : "3px solid transparent",
                    transition: "color 0.2s, border-color 0.2s",
                    boxSizing: "border-box",
                }}
            >
                {item.title}
                {item.submenu && <ChevronIcon />}
            </Link>

            {/* Dropdown */}
            {item.submenu && hovered && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: "180px",
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                        listStyle: "none",
                        padding: "0.4rem 0",
                        margin: 0,
                        zIndex: 9999,
                    }}
                >
                    {item.submenu.map((sub) => (
                        <DropdownItem key={sub.id} item={sub} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const DropdownItem = ({ item }: { item: MenuItem; }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <li style={{ listStyle: "none" }}>
            <Link
                href={item.path ?? "#"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    display: "block",
                    padding: "0.6rem 1.1rem",
                    fontSize: "0.875rem",
                    color: hovered ? "#3C50E0" : "#1a1a2e",
                    background: hovered ? "#f0f4ff" : "transparent",
                    textDecoration: "none",
                    transition: "background 0.15s, color 0.15s",
                }}
            >
                {item.title}
            </Link>
        </li>
    );
};

// ── Main Navbar ────────────────────────────────────────────────────
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const contactQuery = useQuery({
        queryFn: fetchContacts,
        queryKey: [QueryKeys.STORE_CONTACT],
    });

    const storeProfileQuery = useQuery({
        queryFn: fetchStoreProfile,
        queryKey: [QueryKeys.STORE_PROFILE],
    });

    const store = storeProfileQuery.data?.data?.store;
    const phone = contactQuery.data?.data?.contacts?.phone;

    // Sticky on scroll
    useEffect(() => {
        const onScroll = () => setSticky(window.scrollY >= 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Detect mobile/desktop
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Close mobile menu on outside click
    useEffect(() => {
        if (!mobileOpen) return;
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest("#sb-navbar")) setMobileOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [mobileOpen]);

    const navHeight = sticky ? "56px" : "68px";

    return (
        <header
            id="sb-navbar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
                background: "#fff",
                borderBottom: "1px solid #e5e7eb",
                boxShadow: sticky ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
                transition: "box-shadow 0.3s ease",
            }}
        >
            {/* ── Single row ── */}
            <div
                style={{
                    maxWidth: "1170px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    height: navHeight,
                    transition: "height 0.3s ease",
                    gap: "2rem",
                }}
            >
                {/* ── LEFT: Logo ── */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexShrink: 0,
                        textDecoration: "none",
                    }}
                >
                    {store?.logo ? (
                        <Image
                            src={STORAGE_URL + store.logo}
                            alt={store.store_name ?? "Logo"}
                            width={44}
                            height={44}
                            style={{ objectFit: "contain", borderRadius: "6px" }}
                            unoptimized
                        />
                    ) : (
                        <span
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                color: "#1a1a2e",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {store?.store_name}
                        </span>
                    )}
                </Link>

                {/* ── CENTER: Desktop nav menu ── */}
                {!isMobile && (
                    <nav style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "visible" }}>
                        <ul
                            style={{
                                display: "flex",
                                alignItems: "center",
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                gap: "0.25rem",
                            }}
                        >
                            {(menuData as MenuItem[]).map((item) => (
                                <DesktopNavItem key={item.id} item={item} />
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Spacer on mobile */}
                {isMobile && <div style={{ flex: 1 }} />}

                {/* ── RIGHT: Phone (desktop always visible) ── */}
                {!isMobile && phone && (
                    <a
                        href={phone ? `tel:${phone}` : "#"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            flexShrink: 0,
                            textDecoration: "none",
                            marginLeft: "auto",
                        }}
                    >
                        <PhoneIcon />
                        <span>
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "0.6rem",
                                    color: "#9ca3af",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    lineHeight: 1.3,
                                }}
                            >
                                24/7 Support
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    color: "#1a1a2e",
                                    lineHeight: 1.3,
                                }}
                            >
                                {phone}
                            </span>
                        </span>
                    </a>
                )}

                {/* ── RIGHT: Hamburger (mobile) ── */}
                {isMobile && (
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMobileOpen((v) => !v)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.25rem",
                            lineHeight: 0,
                            flexShrink: 0,
                        }}
                    >
                        {mobileOpen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                )}
            </div>

            {/* ── Mobile Drawer ── */}
            {isMobile && mobileOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "#fff",
                        borderTop: "1px solid #e5e7eb",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                        padding: "0.75rem 1.5rem 1.5rem",
                        zIndex: 200,
                    }}
                >
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {(menuData as MenuItem[]).map((item) => (
                            <li key={item.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setOpenSubmenu(openSubmenu === item.id ? null : item.id)
                                            }
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                padding: "0.85rem 0",
                                                fontSize: "0.95rem",
                                                fontWeight: 600,
                                                color: "#1a1a2e",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                fontFamily: "inherit",
                                            }}
                                        >
                                            {item.title} <ChevronIcon />
                                        </button>
                                        {openSubmenu === item.id && (
                                            <ul style={{ listStyle: "none", margin: 0, padding: "0 0 0.5rem 1rem" }}>
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            href={sub.path ?? "#"}
                                                            style={{
                                                                display: "block",
                                                                padding: "0.5rem 0",
                                                                fontSize: "0.875rem",
                                                                color: "#6b7280",
                                                                textDecoration: "none",
                                                            }}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.path ?? "#"}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0.85rem 0",
                                            fontSize: "0.95rem",
                                            fontWeight: 600,
                                            color: "#1a1a2e",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Phone in mobile drawer */}
                        {phone && (
                            <li style={{ paddingTop: "0.75rem" }}>
                                <a
                                    href={`tel:${phone}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#3C50E0",
                                        textDecoration: "none",
                                        padding: "0.5rem 0",
                                    }}
                                >
                                    <PhoneIcon /> {phone}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;