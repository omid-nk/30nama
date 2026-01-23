import { HiMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
    <>
      <span className="bg-dark-100 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
        <HiMagnifyingGlass className="h-6 w-6 text-white" />
      </span>
    </>
  );
}

export default Header;
