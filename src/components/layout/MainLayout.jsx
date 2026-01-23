import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <header>
          <Header />
        </header>
        <Outlet />
      </main>
    </>
  );
}
