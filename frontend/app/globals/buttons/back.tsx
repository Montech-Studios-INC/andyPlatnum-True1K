"use client";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

interface BackButtonProps {
    children: React.ReactNode;
};

const BackButton: React.FC<BackButtonProps> = ({ children }) => {

    const router = useRouter();

    return (
        <Link href="#" onClick={() => router.back()} className="cursor-pointer" scroll={false}>
            {children}
        </Link>
    );
};

export default BackButton;
