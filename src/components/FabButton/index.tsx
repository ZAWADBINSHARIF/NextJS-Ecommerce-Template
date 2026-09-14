"use client";

import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";   // iMessage icon
import { FaWhatsapp } from "react-icons/fa";         // WhatsApp icon
import { FiMail, FiPlus } from "react-icons/fi";             // plus icon for FAB
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

interface FabButtonProps {
    /** Full phone number including country code, e.g. "+1234567890" */
    phoneNumber: string;
}

export default function FabButton({ phoneNumber }: FabButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Remove non‑digit characters for WhatsApp (wa.me does not accept "+")
    const cleanNumber = phoneNumber.replace(/\D/g, "");

    const imessageUrl = `sms:${phoneNumber}`;   // opens Messages app
    const whatsappUrl = `https://wa.me/${cleanNumber}`;
    const emailUrl = "mailto:naim60610@gmail.com";


    return (
        <div className="fixed bottom-24 right-6 flex flex-col items-end space-y-3 z-999">
            {/* Action buttons (visible when expanded) */}
            <div
                className={`flex flex-col items-end space-y-3 transition-all duration-300 ${isOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-75 translate-y-4 pointer-events-none"
                    }`}
            >

                {/* Email */}
                <a
                    href={emailUrl}
                    className="w-12 h-12 bg-transparent flex items-center justify-center hover:bg-red-600 transition-colors"
                    title="Send Email"
                    aria-label="Send Email"
                >
                    {/* <IoIosMail className="w-14 h-14" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                        aria-label="Gmail" role="img"
                        viewBox="0 0 512 512"><rect
                            width="512" height="512"
                            rx="15%"
                            fill="#ffffff" /><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" /><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" /><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" /><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" /><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" /></svg>
                </a>

                {/* iMessage */}
                <a
                    href={imessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 bg-white transition-colors"
                    title="Open iMessage"
                >
                    <svg fill="#34DA50" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>iMessage</title>
                        <path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154" />
                    </svg>
                </a>

                {/* WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#09B037] rounded-xl text-white shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
                    title="Open WhatsApp"
                >
                    <IoLogoWhatsapp className="w-6 h-6" />
                </a>
            </div>

            {/* Main FAB – toggles the menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 !bg-blue rounded-xl shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
                aria-label="Toggle contact options"
                aria-expanded={isOpen}
            >
                <TfiHeadphoneAlt
                    color="white"
                    stroke="11"
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
            </button>
        </div>
    );
}