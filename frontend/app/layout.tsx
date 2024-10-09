import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Menu from "./globals/menu";
import Navbar from "./globals/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line no-undef
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    {children}
                    <Menu />
                </body>
            </html>
        </ViewTransitions>
    );
};
