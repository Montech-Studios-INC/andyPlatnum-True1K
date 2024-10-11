import BackButton from "./globals/buttons/back";

export const metadata = {
    title: "TrueOneK | Page Not Found",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default function NotFound() {
    return (
        <div className="flex text-white items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full space-y-6 text-center">
                <div className="space-y-5">
                    <h1 className="text-4xl p-2 font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110">404</h1>
                    <p className="text-gray-300 p-3">Page Not Found</p>
                    <BackButton>Go to back to previous page</BackButton>
                </div>
            </div>
        </div>
    );
};
