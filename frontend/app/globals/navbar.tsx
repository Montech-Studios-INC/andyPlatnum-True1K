"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import NotificationButton from "./buttons/notification";

export default function Menu() {

    // const [user, setUser] = useState();
    const [title, setTitle] = useState("Home");
    const currentPath = usePathname();

    const trimTitle = (path: string) => {

        if (currentPath === "/") return "Home";
        const plaintext = path.split('/')[1].charAt(0).toUpperCase() + currentPath.split('/')[1].slice(1).toLowerCase();

        if (
            plaintext === "Browse" || 
            plaintext === "Dashboard" || 
            plaintext === "Profile"
        ) {
            return plaintext;
        } else {
            return "404";
        };
    };

    useEffect(() => {
        // fetch and set user for profile 
        setTitle(trimTitle(currentPath));
    }, [currentPath])

    return (
        <header className="bg-[#141414] text-white p-4">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <Button>
                        <Link href="/dashboard">
                            <div className="rounded-full w-8 h-8 border-white">
                                <span className="text-xs font-medium">37</span>
                            </div>
                            <span className="sr-only">User Dashboard</span>
                        </Link>
                    </Button>
                </div>
                <h1 className="text-lg font-semibold">{title}</h1>
                <NotificationButton />
            </div>
        </header>
    );
};
