import { CalendarDays, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProfileProps = {
  setIsOpen: (open: boolean) => void;
};

function Profile({ setIsOpen }: ProfileProps) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    setToday(formatter.format(now));
  }, []);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Image
          src="/images/mersad.jpg"
          width={48}
          height={48}
          alt="user avatar"
          className=" border border-zinc-400 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm text-zinc-600">رضا منصوری</span>
          <span className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
            <CalendarDays size={12} className="text-zinc-400" />
            {today}
          </span>
        </div>
      </div>

      <X
        className="block lg:hidden cursor-pointer text-black transition"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Profile;