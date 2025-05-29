import { Button } from "@heroui/react";
import NotesList from "../components/NotesList";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <div className="p-4 mx-auto max-w-[1000px]">
      <h1 className="text-3xl font-bold text-center mt-2"> My Notes</h1>
      <div className="my-8 flex justify-between items-center gap-4">
        <SearchInput />
        <Button color="primary" size="lg">
          Add Note
        </Button>
      </div>
      <NotesList />
    </div>
  );
};
export default Home;
