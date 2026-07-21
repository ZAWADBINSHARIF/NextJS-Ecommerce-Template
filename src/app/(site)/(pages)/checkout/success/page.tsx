export default function SuccessPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-500 p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md w-full animate-[fadeInUp_0.6s_ease-out]">
                {/* Icon */}
                <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-14 h-14 text-green" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                {/* Texts with explicit colors */}
                <h1 className="text-3xl font-extrabold text-emerald-700 mb-2">
                    Payment Successful!
                </h1>
                <p className="text-gray-600 text-base">
                    Thank you for your purchase. You'll receive a confirmation shortly.
                </p>
            </div>
        </main>
    );
}