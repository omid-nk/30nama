import StickyHeader from "./StickyHeader";
import { Outlet } from "react-router";
import ScrollToTop from "./components/ScrollToTop";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <StickyHeader />
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default MainLayout;
