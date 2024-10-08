import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "TrueOneK",
    description: "Redefining Fan Engagement for the Digital Age"
};

// eslint-disable-next-line no-undef
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </ViewTransitions>
    );
};
