"use client";
import { signUpNewsletter } from "@/actions/newsletterActions";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Hero() {
  const [emailInput, setEmailInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function onClick() {
    if (emailInput === "" || emailRegex.test(emailInput) === false) {
      toast.error("Please enter a valid email");
      return;
    }
    setIsLoading(true)

    const res = await signUpNewsletter(emailInput);
    if(res.status === "success") {
        toast.success(res.message);
    } else if (res.status === "error") {
        toast.error(res.message);
    }
    setIsLoading(false);
  }
  return (
    <div className="  mt-10 px-10 max-sm:px-0">
      <h1 className="text-center text-5xl max-sm:text-xl max-md:text-3xl text-base-content   font-poppins font-bold">
        A link in bio tool that has{" "}
        <span className="underline">everything</span> a creator needs!
      </h1>
      <p className="mt-12 text-center px-14 font-poppins text-lg max-sm:text-sm max-md:px-8 max-md:text-sm max-md:mt-8 font-medium text-base-content/80">
        Get a supalink to show things you do to the world and access all the
        tools a content creator needs at one single place!
      </p>
      <div className="flex flex-col">
        <div className="join mt-10 w-full flex justify-center">
          <input
            className="input input-bordered join-item w-2/3 border-2"
            placeholder="Email"
            type="email"
            autoComplete="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button
            className="btn join-item rounded-r-full input-bordered border-2 px-5"
            onClick={onClick}
          >
            {!isLoading ? 'Join' : <Loader2 className="animate-spin"/>}
          </button>
        </div>
        <div className="relative w-2/3 mx-auto flex justify-end">
          <h1 className="absolute -bottom-2 right-16 font-poppins font-semibold">
            Join waitlist
          </h1>
          <Image
            src="/Images/Landing-Page/arrow-curved.png"
            alt=""
            width={50}
            height={50}
            className="rotate-180 -scale-x-90 right-0 relative mt-4"
          />
        </div>
        <span className="badge badge-outline rounded-lg px-4 py-4 mx-auto mt-16 badge-xs">
          You will recieve weekly updates about the app!
        </span>
      </div>
    </div>
  );
}

export default Hero;
