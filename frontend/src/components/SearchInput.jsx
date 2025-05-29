import { Input } from "@heroui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <Input
      size="lg"
      labelPlacement="outside"
      placeholder="Search Note"
      startContent={
        <Search className="mr-2 text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};
export default SearchInput;
