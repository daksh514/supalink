import { Grip } from "lucide-react";
import React from "react";

function LinksComp({ linkData }: { linkData: any }) {
    console.log(linkData);
  return (
    <div>
      <div className="bg-base-200/70 rounded-lg shadow-sm py-2 px-4">
        <div className="flex items-center gap-4">
          <div>
            <Grip className="opacity-25 text-opacity-25 cursor-grab" />
          </div>
          <div className=" grow flex justify-between items-center">
            <div>
              <h1 className="text-md font-semibold">{linkData.title}</h1>
              <p className="text-sm mt-1 ">{linkData.url}</p>
            </div>
            <input type="checkbox" className="toggle toggle-sm bg-opacity-55 opacity-55 " defaultChecked={linkData.showLink} />

          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LinksComp;
