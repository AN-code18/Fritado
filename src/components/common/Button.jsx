import React from "react";
import { Link } from "react-router-dom";

function Button({ children, linkto ,active}) {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-xl font-medium text-slate-100 overflow-hidden relative opacity-90
     px-12 py-3 inset-y-px rounded-md font-bold inline-block hover:scale-95 
     transition-all duration-200 
      ${active ? "bg-[#2f5c83]" : "bg-[#7b99b2] hover:bg-[#2f5c83]"}`}>
        {children}
      </div>
    </Link>
  );
}
/** [#5b93a9][#44839c]   [#7b99b2]*/


export default Button;
