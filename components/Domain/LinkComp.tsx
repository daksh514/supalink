import Link from "next/link";
import React from "react";

function LinkComp({
  linkData,
}: {
  linkData: {
    id: string,
    title: string,
    url: string,
    icon: string | null,
    showIcon: boolean,
    userId: string | null,
    showLink: boolean
  };

})



{

    if(!linkData.showLink) return;

  return (
    <Link className="bg-base-300 rounded-lg py-3 shadow-sm hover:shadow-md transition-all" href={linkData.url} target="_blank">
       
            <h1 className="text-center">{linkData.title}</h1>
        
        
       
    </Link>
  );
}

export default LinkComp;
