import React from "react";

function ContactInput({title}: {title:string}) {
  return (
    <div className="flex flex-col px-4 py-5">
      <input
        type="text"
        className="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
        placeholder={title}
      />
    </div>
  );
}

export default ContactInput;
