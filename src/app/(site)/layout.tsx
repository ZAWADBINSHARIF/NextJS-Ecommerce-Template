"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

import axios from "axios";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  const queryClient = new QueryClient();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <QueryClientProvider client={queryClient}>

                      {/* <Header /> */}

                      <Navbar />

                      {children}


                      {/* <CartSidebarModal />
                    <PreviewSliderModal /> */}

                      <Footer />

                    </QueryClientProvider>
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
