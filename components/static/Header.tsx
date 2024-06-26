import {
  GearIcon,
  StopwatchIcon,
  RocketIcon,
  QuestionMarkIcon,
  PersonIcon,
  KeyboardIcon,
} from "@radix-ui/react-icons";

import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex md:w-4/6 items-center justify-between bg-[var(--bg-color)] text-[var(--title-color)]">
      <div className=" flex-grow flex items-center mt-4 justify-between ">
        <div className="w-2/6 mr-4 ">
          <Logo />
        </div>
        <div className="flex mt-8 items-center space-x-8  w-full justify-start ">
          <KeyboardIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
          <GearIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
          <StopwatchIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
          <RocketIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
        </div>
        <div className="flex items-center w-full space-x-8 mt-8 justify-end">
          <QuestionMarkIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
          <PersonIcon className="hover:text-[var(--title-color)] w-6 h-6 fill-current text-[var(--text-color)]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
