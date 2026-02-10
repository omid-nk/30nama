import StickyHeader from "./StickyHeader";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <StickyHeader />
      <Outlet />
    </div>
  );
}

export default MainLayout;
