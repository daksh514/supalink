"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function FormButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className={cn(
        "bg-accent w-full py-2 rounded-lg justify-center flex font-semibold",
        className
      )}
    >
      {!pending ? label : <Loader2 className="animate-spin text-center   " />}
    </button>
  );
}

export default FormButton;
