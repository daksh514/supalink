"use client";
import { createPageBySlug } from "@/actions/slug-actions";
import FormButton from "@/components/Common/FormButton";
import React, { useState } from "react";

function SlugForm({userId}:{userId:string}) {
  const [errorText, seterrorText] = useState("");
  async function submitAction(formData: FormData) {
    seterrorText("");
    const slug_name = formData.get("slug-name")
    if (slug_name === "") {
      seterrorText("Please enter a slug name");
      return;
    }
    const res = await createPageBySlug(slug_name as string, userId)
    if (res.status === "error") {
      seterrorText(res.message);
      return;
    }
  }
  return (
    <div>
      <form action={submitAction}>
        <label
          className={`input input-bordered flex items-center gap-2 w-1/2 ${
            errorText === ""
              ? ""
              : "border-error focus:border-error focus-within:border-error"
          } `}
        >
          Supalink.xyz /
          <input
            type="text"
            className="grow "
            placeholder="john-doe"
            name="slug-name"
          />
        </label>
        <p className="text-error mt-1 font-normal">{errorText}</p>
        <FormButton label="Create Page" className="mt-4 w-1/2" />
      </form>
    </div>
  );
}

export default SlugForm;
