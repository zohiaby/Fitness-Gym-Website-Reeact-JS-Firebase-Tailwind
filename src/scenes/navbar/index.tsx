import  { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import logo from '@/assets/Logo.png';
import {SectionImages, SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Menu from "./Menu";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props ={
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage:  (value: SelectedPage) =>void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";


  return (
    <nav>
      <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={` ${flexBetween} w-full gap-16`}>

            {/* header left side */}
            <img src={SectionImages.logo} alt="logo" />

            {/* header right side */}
            {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
             
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Menu selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div> 
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton 
                setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
              </div>
            </div>) : (
              <button className="rounded-full bg-secondary-500 p-2"
              onClick={ ()=> setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
              
            )}
          </div>
        </div>
      </div>

      
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Menu selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;