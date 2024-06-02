import React from "react";
import { Rnd } from "react-rnd";

function Result({ srcCode }) {
  return (
    <div>
      <div className="bg-[#282c34] p-1 shadow mt-3 rounded-sm ">
        <h2 className="text-lg font-semibold mb-2 pl-2 text-white">Result</h2>

        <iframe
          className="w-full h-72 border border-gray-700 rounded-sm"
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default Result;
