import { cn } from "@/lib/utils";
import React from "react";

function GhostBtn({ label, classname, onClick }: { label: string; classname?: string, onClick: () => void}) {
  return (
    <button
      className={cn(
        "btn shadow-md py-2 px-4 flex justify-center w-3/4 mt-3 border-2 rounded-full  hover:bg-base-200/70 transition-all",
        classname
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default GhostBtn;
