import { Input } from "@/components/ui/input";
import SearchBarButton from "../components/buttons/search";

export default function SearchBar() {
    return (
        <div className="flex max-w-xl items-center bg-[#1c1c1c] rounded-md rounded m-5">
            <Input
                type="text"
                placeholder="Name of the artist, offer"
                className="flex-grow bg-[#141414] rounded text-gray-300 placeholder-gray-500 border-gray-700 focus:border-gray-600 focus:ring-gray-600 rounded-l-md"
            />
            <SearchBarButton />
        </div>
    );
};
