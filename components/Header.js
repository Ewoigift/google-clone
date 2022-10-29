import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";


function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex p-6 w-full items-center">
        <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      
      />
      <form className="flex flex-grow border border-gray-200 hover:shadow-lg shadow-lg max-w-2xl rounded-full px-6 py-3 ml-10 mr-5">
        <input ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
            />
            <XMarkIcon
            className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex border-l-2 pl-3 border-gray-300  text-blue-500" />
            <MagnifyingGlassIcon className="h-6 mr-3 text-blue-500 hidden sm:inline-flex" />
            <button hidden type="submit" onClick={search}></button>
      </form>
      <Avatar 
        className="ml-auto"
        url={'https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg'}/>

      </div>
      {/* Header Options */}

      <HeaderOptions />


    </header>
  )
}

export default Header;