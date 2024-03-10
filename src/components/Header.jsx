import React, { useState } from "react";
import logo from "./../assets/images/R1.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";
function Header() {
  const [toggle,setToggle]=useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon:HiTv,
    }
  ];
  return (
    <div className="flex items-center justify-between p-5 w-[102vw]">
      <div className="flex gap-8 items-center">
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      <div className="hidden md:flex gap-8">
      {menu.map((item,index)=>(
        <Headeritem key={index}name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className="flex md:hidden gap-5">
      {menu.map((item,index)=>index<3&&(
        <Headeritem key={index} name={''} Icon={item.icon}/>
        ))}
      <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
        <Headeritem name={''} Icon={HiDotsVertical} />
        {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
        {menu.map((item,index)=>index>2&&(
        <Headeritem key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>:null}
      </div>
      </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev2540745" className="w-[60px] rounded-full pr-4"/>
    </div>
  );
}

export default Header;
