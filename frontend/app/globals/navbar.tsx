import { Button } from "@/components/ui/button";
import { AiOutlineHome, AiOutlineSearch, AiOutlineAppstore } from "react-icons/ai";

export default function Navbar() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
            <div className="flex justify-between items-center max-w-screen-sm mx-auto px-4 py-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <AiOutlineHome className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <AiOutlineSearch className="h-6 w-6" />
                    <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-orange-500 hover:text-orange-400">
                    <AiOutlineAppstore className="h-6 w-6" />
                    <span className="sr-only">App menu</span>
                </Button>
                <Button variant="ghost" size="icon" className="p-0 hover:bg-transparent">
                    <img
                        src=""
                        alt="User profile"
                        className="rounded-full w-9 h-9"
                    />
                    <span className="sr-only">User profile</span>
                </Button>
            </div>
        </nav>
    );
};
