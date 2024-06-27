"use client";
import { createPageBySlug } from "@/actions/slug-actions";
import FormButton from "@/components/Common/FormButton";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SlugForm({userId, btnLabel, defaultInputValue, isWFull}:{userId:string, btnLabel?:string, defaultInputValue?:string, isWFull?:boolean}) {
  const [errorText, seterrorText] = useState("");
  async function submitAction(formData: FormData) {
    seterrorText("");
    const slug_name = formData.get("slug-name")
    if (slug_name === "") {
      seterrorText("Please enter a slug name");
      return;
    } 
    const regex = /^[a-zA-Z0-9-_]+$/;
    if (regex.test(slug_name as string)) {
      seterrorText('');
      
      // Handle the valid link submission here
    } else {
      seterrorText('Please enter a valid link!');
      return
    }
    const res = await createPageBySlug(slug_name as string, userId)
    if (res.status === "error") {
      seterrorText(res.message);
      return;
    }
    toast.success('Link Updated Successfully')
  }
  return (
    <div>
      <form action={submitAction}>
        <label
          className={`input input-bordered flex items-center gap-2 ${!isWFull?'w-1/2':'w-full'} ${
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
            defaultValue={defaultInputValue}
          />
        </label>
        <p className="text-error mt-1 font-normal">{errorText}</p>
        <FormButton label={!btnLabel?"Create Page":btnLabel} className={`mt-4 ${!isWFull?'w-1/2':'w-full'}`} />
      </form>
    </div>
  );
}

export default SlugForm;
