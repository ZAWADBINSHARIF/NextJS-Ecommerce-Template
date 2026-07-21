// app/checkout/success/page.tsx
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{ session_id?: string; }>;
}

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const sessionId = params?.session_id || "N/A";

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
            <div className="bg-white rounded-2xl shadow-2 p-8 max-w-md w-full text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-dark mb-2">Payment Successful!</h1>
                <p className="text-dark-4 mb-6">
                    Thank you for your purchase. Your order has been confirmed.
                </p>

                <div className="break-words bg-gray-1 rounded-lg p-4 mb-6 text-sm text-dark-3 space-y-1">
                    <p>
                        <span className="font-medium">Session ID:</span> {sessionId}
                    </p>
                </div>

                <Link
                    href="/shop-product"
                    className="inline-block bg-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue/90 transition-colors"
                >
                    Back to Shop
                </Link>
            </div>
        </main>
    );
}