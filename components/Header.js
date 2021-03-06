import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https:/links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your seacrh"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"></SearchIcon>
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer ">Become a host</p>
        <GlobeAltIcon className="h-6"></GlobeAltIcon>
        <div className="flex space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6"></MenuIcon>
          <UserCircleIcon className="h-6"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
}

export default Header;
