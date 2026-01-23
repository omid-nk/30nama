import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <>
      <aside className="m-2 mr-0 min-w-36 border p-2">
        <Sidebar />
      </aside>
      <section className="m-2 flex flex-1 flex-col gap-2">
        <header className="flex justify-end border p-2">
          <Header />
        </header>
        <main className="flex justify-center border p-2">
          <Outlet />
        </main>
      </section>
    </>
  );
}
