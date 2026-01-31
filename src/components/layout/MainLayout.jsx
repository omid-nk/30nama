import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="mx-auto mt-2 flex max-w-400 gap-2">
      <aside className="sticky top-0 flex w-fit flex-col">
        <Sidebar />
      </aside>
      <div className="flex w-full min-w-0 flex-1 flex-col gap-2.5">
        <header className="flex h-26 items-center justify-end">
          <Header />
        </header>
        <main className="flex flex-col items-center gap-2 pr-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
