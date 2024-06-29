"use client";
import React, { useId, useState } from "react";
import GhostBtn from "../Common/GhostBtn";
import FormButton from "../Common/FormButton";
import { createLink } from "@/actions/linkActions";
import toast from "react-hot-toast";

function NewLinkModal({ userId, userSlug }: { userId: string, userSlug: string}) {
  const [linkTitleState, setLinkTitleState] = useState("");
  const [linkURLState, setLinkURLState] = useState("");
  async function createLinkAction(formData: FormData) {
    const res = await createLink(formData, userId, userSlug);
    if(res.status==="success"){
      (document.getElementById("my_modal_2") as HTMLDialogElement)?.close();
      toast.success(res.message);
    }
  }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <GhostBtn
        label="Add Link"
        onClick={() => {
          (
            document.getElementById("my_modal_2") as HTMLDialogElement
          )?.showModal();

          setLinkTitleState("");
          setLinkURLState("");
        }}
        classname="w-full"
      />

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box pt-0">
          <div>
            <h1 className="label text-xl font-semibold pt-4">Add Link</h1>
          </div>
          <form action={createLinkAction}>
            <div>
              <label htmlFor="linkTitle" className="label">
                Link Title
              </label>
              <input
                type="text"
                id="linkTitle"
                className="input input-bordered border-opacity-100 w-full "
                placeholder="Notion Pack"
                name="linkTitle"
                value={linkTitleState}
                onChange={(e) => setLinkTitleState(e.target.value)}
                required
                max={50}
              />
            </div>
            <div>
              <label htmlFor="linkURL" className="label mt-1">
                Link URL
              </label>
              <input
                type="url"
                id="linkURL"
                className="input input-bordered border-opacity-100 w-full "
                placeholder="www.notionpack.com"
                name="linkURL"
                value={linkURLState}
                onChange={(e) => setLinkURLState(e.target.value)}
                required
              />
            </div>
            <FormButton label="Create Link" className="mt-4" />
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              setLinkTitleState("");
              setLinkURLState("");
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default NewLinkModal;
