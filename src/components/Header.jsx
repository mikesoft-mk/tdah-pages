import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Información", path: "/informacion" },
    { name: "Comentarios", path: "/comentarios" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">TDAH Info</span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-gray-600 hover:text-purple-600 transition-colors ${
                  location.pathname === path ? "font-bold text-purple-600" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Botón Menú Hamburguesa */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <X className="h-8 w-8 text-gray-800" />
            ) : (
              <Menu className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`text-gray-600 hover:text-purple-600 transition-colors ${
                location.pathname === path ? "font-bold text-purple-600" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
