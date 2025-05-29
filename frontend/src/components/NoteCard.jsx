import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import api from "../util/axios";

export const OptionsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
};

export const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
};

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id != id));
    } catch (error) {
      console.error("Error while deleting note", error);
    }
  };

  return (
    <Card
      shadow="sm"
      fullWidth="true"
      className="relative p-2 pr-12 cursor-pointer"
    >
      <CardHeader className="text-xl font-bold">
        {note.title}
        <Dropdown>
          <DropdownTrigger>
            <div className="absolute top-5 right-4">
              <OptionsIcon />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onClick={() => handleDelete(note._id)}
              variant="flat"
              startContent={<TrashIcon />}
              key="delete"
              className="text-danger"
              color="danger"
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="py-0">{note.content}</CardBody>
      <CardFooter className="text-gray-400">{note.createdAt}</CardFooter>
    </Card>
  );
};
export default NoteCard;
