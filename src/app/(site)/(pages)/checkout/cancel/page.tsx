// app/checkout/cancel/page.tsx
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{ session_id?: string; }>;
}

export default async function CheckoutCancelPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const sessionId = params?.session_id || "N/A";

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 px-4">
            <div className="bg-white rounded-2xl shadow-2 p-8 max-w-md w-full text-center animate-fade-in">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-10 h-10 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-dark mb-2">Payment Cancelled</h1>
                <p className="text-dark-4 mb-6">
                    Your payment was not processed. If this was a mistake, please try again.
                </p>

                <div className="bg-gray-1 rounded-lg p-4 mb-6 text-sm text-dark-3">
                    <p>
                        <span className="font-medium">Session ID:</span> {sessionId}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/shop-product"
                        className="bg-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue/90 transition-colors"
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>
        </main>
    );
}