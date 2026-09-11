import { IoClose } from "react-icons/io5";

interface WindowControlInterface {
  type: "close" | "minimize";
}

export const WindowControl = ({ type }: WindowControlInterface) => {
  return (
    <button
      className="
        w-6 h-6
        rounded-full
        bg-zinc-800
        text-zinc-500
        flex items-center justify-center
        p-0
      "
    >
      {type === "close" ? (
        <IoClose size={14} />
      ) : (
        <span className="w-2.5 h-px bg-gray-600 block" />
      )}
    </button>
  );
};
