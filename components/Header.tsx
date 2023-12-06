"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Do nothing Now
  };

  const authModal = useAuthModal();

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="flex justify-center items-center transition bg-black 
          rounded-full hover:opacity-75"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>

          <button
            className="flex justify-center items-center transition bg-black 
          rounded-full hover:opacity-75"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button
            className="rounded-full p-2 flex items-center 
            justify-center bg-white hover:opacity-75 transition"
          >
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent font-bold text-neutral-300"
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
