/* eslint-disable @next/next/no-img-element */
import { LogOut } from "lucide-react";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/luizmauro.png"
        className="h-1o w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Luiz Mauro</span>
        <span className="truncate text-sm text-zinc-500">
          luizmetec@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
};

export { Profile };
