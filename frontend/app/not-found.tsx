"use client";
import { useRouter } from "next/navigation";

export const metadata = {
    title: "TrueOneK | Page Not Found",
    description: "Redefining Fan Engagement for the Digital Age"
};

export default function NotFound() {

    const router = useRouter();

    return (
        <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full space-y-6 text-center">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110">404</h1>
                    <p className="text-gray-500">Page Not Found</p>
                </div>
                <a onClick={() => router.back()} className="cursor-pointer">Go to back to previous page</a>
            </div>
        </div>
    );
};
