// Composant Header (statique sauf profil)
import { useState, useRef, useEffect } from "react";
import { Search, LogOut, Settings, User, Ticket } from "lucide-react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ tickets, setIsModalOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-600 shadow-sm border-b border-blue-700 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section (statique) */}
          <div className="flex items-center gap-8">
            <h1 className="text-white text-2xl font-bold pt-2">
              Système d'Assistance
            </h1>

            {/* Search Bar statique */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Recherche rapide..."
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 
                  transition-colors duration-200 rounded-lg text-sm w-96"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Notifications statiques */}
            <button
              onClick={() => navigate("/Agent/MesTickets")}
              className="relative p-2 bg-white rounded-lg"
            >
              <Ticket className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {tickets.length}
              </span>
            </button>
            {/* Tickets statiques */}
            <button className="relative p-2 bg-white rounded-lg">
              <IoMdNotificationsOutline className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profil interactif */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-xl shadow-2xl z-50">
                  <ul className="py-2">
                    <li>
                      <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Mon Profil</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
                        <Settings className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Paramètres</span>
                      </div>
                    </li>
                    <li className="border-t border-gray-200 my-1"></li>
                    <li>
                      <div className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Déconnexion</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
