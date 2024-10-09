import { Input } from "@/components/ui/input";
import SearchBarButton from "../components/buttons/search";

export default function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="text"
                placeholder="Name of the artist, offer"
                className="bg-[#1c1c1c] text-gray-300 placeholder-gray-500 border-gray-700 focus:border-gray-600 focus:ring-gray-600"
            />
            <SearchBarButton />
        </div>
    );
};
