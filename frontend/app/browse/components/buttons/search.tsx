import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBarButton() {
    return (
        <Button type="submit" className="bg-[#f0a500] hover:bg-[#d69400] text-black">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
        </Button>
    );
};
