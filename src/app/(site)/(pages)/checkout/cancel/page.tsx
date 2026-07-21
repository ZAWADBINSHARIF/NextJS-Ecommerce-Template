export default function CancelPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md w-full animate-[fadeInUp_0.6s_ease-out]">
                {/* Icon */}
                <div className="mx-auto w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-14 h-14 text-rose-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                {/* Texts with explicit colors */}
                <h1 className="text-3xl font-extrabold text-rose-700 mb-2">
                    Payment Cancelled
                </h1>
                <p className="text-gray-600 text-base">
                    Your payment was not processed. No charges were made.
                </p>
            </div>
        </main>
    );
}