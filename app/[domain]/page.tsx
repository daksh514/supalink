import { findDataBySlug } from "@/actions/slug-actions";
import LinkComp from "@/components/Domain/LinkComp";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import React from "react";


async function page({ params }: { params: { domain: string } }) {
  unstable_noStore()
  const slug = params.domain;
  const sluData = await findDataBySlug(slug);
  if (!sluData) return <h1>Sorry, this page doesnt exist.</h1>;
  
  return (
    <div>
      <div className="widthContainer">
        <div className="flex justify-center mt-5">
        <Image src={sluData.profileImage} alt="slugImage" width={90} height={90} className="rounded-full"/>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {
            sluData.links.map((link) => (
              <LinkComp linkData={link} key={link.id} />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default page;
