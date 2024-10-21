import Link from "next/link";

const errorMessages = {
    "Payment failed": "پرداخت ناموفق",
    "Authority یا Status وجود ندارد.": "Authority یا Status وجود ندارد.",
    "پرداختی با این Authority پیدا نشد.": "پرداختی با این Authority پیدا نشد.",
    "خطای ناشناخته": "خطای ناشناخته"

};

const FailurePage = ({ searchParams }) => {
    const { error, status } = searchParams;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-red-600 p-5">
            <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center transform transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 12.414V11h-2v2.414a1 1 0 11-2-1.828L9 10V8h2v1.586l.707-.707a1 1 0 011.414 1.414L11 11.414zm-2-4.414V7h2v2h-2z" clipRule="evenodd" />
                    </svg>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">پرداخت ناموفق!</h1>
                <p className="text-gray-600 mb-2">متاسفانه پرداخت شما به دلایلی ناموفق بوده است.</p>
                <p className="text-gray-600 mb-2">وضعیت: <span className="font-semibold text-red-700">{status}</span></p>
                {error && <p className="text-gray-600 mb-4">خطا: <span className="font-semibold text-red-700">{errorMessages[error] || error}</span></p>}

                <Link
                    href="/"
                    className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200 transform hover:translate-y-1"
                >
                    برگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
};

export default FailurePage;

