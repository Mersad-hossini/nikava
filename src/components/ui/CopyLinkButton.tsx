"use client";

import { useEffect, useState } from "react";
import { ClipboardCheck, ClipboardCopy } from "lucide-react";

const CopyLinkButton = () => {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset message after 2 sec
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center cursor-pointer gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
    >
      {copied ? (
        <>
          <ClipboardCheck className="w-4 h-4 text-green-600" />
          کپی شد!
        </>
      ) : (
        <>
          <ClipboardCopy className="w-4 h-4" />
          کپی لینک
        </>
      )}
    </button>
  );
};

export default CopyLinkButton;