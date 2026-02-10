import { NavLink } from "react-router";

function NavItems({ navItems }) {
  return (
    <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-10 lg:text-base">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive ? "text-white" : "text-white/70 hover:text-white"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavItems;
