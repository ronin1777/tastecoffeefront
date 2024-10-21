import Link from "next/link";

const SuccessPage = ({ searchParams }) => {
    const { ref_id, amount, status } = searchParams;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">پرداخت با موفقیت انجام شد!</h1>
                <p className="text-gray-700 mb-2">کد مرجع پرداخت: <span className="font-semibold">{ref_id}</span></p>
                <p className="text-gray-700 mb-2">مقدار پرداختی: <span className="font-semibold">{amount} تومان</span></p>

                <Link
                    href="/"
                    className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    برگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;