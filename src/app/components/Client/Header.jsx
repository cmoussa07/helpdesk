import {
  HelpCircle,
  Plus,
  User,
  Bell,
  Settings,
  Power,
  DoorOpen,
  ArrowRightFromLine,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white border-b border-blue-900/30 flex items-center justify-between h-14">
        {/* Côté gauche - Informations système et navigation rapide */}
        <div className="flex items-center gap-6">
          {/* Statut système */}
          <div className="flex items-center gap-2 ml-2">
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -inset-1.5 bg-green-400 rounded-full opacity-20 animate-ping"></div>
            </div>
            <span className="text-sm font-medium text-blue-100">
              Système{" "}
              <span className="text-green-300 font-semibold">
                ● Opérationnel
              </span>
            </span>
          </div>

          {/* Séparateur */}
          <div className="hidden md:block h-5 w-px bg-blue-600/50"></div>

          {/* Navigation rapide */}
          <div className="hidden md:flex items-center gap-4">
            <button
              // onClick={() => navigate("/Faqs")}
              className="text-sm text-blue-200 hover:text-white hover:bg-blue-700/50 px-3 py-1 rounded-lg transition-all duration-200"
            >
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                FAQ & Aide
              </span>
            </button>

            <button
              // onClick={() => navigate("/Chats")}
              className="text-sm text-blue-200 hover:text-white hover:bg-blue-700/50 px-3 py-1 rounded-lg transition-all duration-200"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Chat en direct
              </span>
            </button>
          </div>
        </div>

        {/* Côté droit - Session et notifications */}
        <div className="flex items-center gap-5">
          {/* Informations session */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-blue-100">
                Session active
              </p>
              <p className="text-sm font-medium text-blue-200">
                Client : IBRAHIM
              </p>
            </div>
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                <User className="w-4 h-4 text-blue-200" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-800"></div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="h-6 w-px bg-blue-600/50 hidden lg:block"></div>

          {/* Notifications */}
          <div className="relative group">
            <button
              aria-label="Notifications"
              className="relative p-2 hover:bg-blue-700/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-lg">
                3
              </span>
            </button>

            {/* Dropdown notifications */}
            <div className="absolute right-0 mt-2 w-72 bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                    Tout marquer comme lu
                  </button>
                </div>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {/* {[
                    { id: 1, text: "Nouveau message sur le ticket #456", time: "5 min", unread: true },
                    { id: 2, text: "Votre ticket #789 a été résolu", time: "2h", unread: true },
                    { id: 3, text: "Système mis à jour avec succès", time: "Hier", unread: false }
                  ].map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 rounded-lg ${notification.unread ? 'bg-blue-50 border-l-3 border-blue-500' : 'bg-gray-50'}`}
                    >
                      <p className="text-sm text-gray-800">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))} */}
                </div>
                <button
                  // onClick={() => navigate("/ListTicket")}
                  className="w-full mt-3 text-center text-sm text-blue-600 hover:text-blue-700 font-medium pt-3 border-t"
                >
                  Voir toutes les notifications
                </button>
              </div>
            </div>
          </div>

          {/* Menu utilisateur compact */}
          <div className="relative group">
            <button
              aria-label="Menu utilisateur"
              className="flex items-center gap-2 hover:bg-blue-700/50 px-3 py-1.5 rounded-lg transition-all duration-200 group"
            >
              <span className="text-sm font-medium text-blue-100 hidden sm:block">
                Menu
              </span>
              <svg
                className="w-4 h-4 text-blue-200 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown utilisateur compact */}
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="py-2">
                <li>
                  <button
                    // onClick={() => navigate("/profile")}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Mon Profil</span>
                  </button>
                </li>
                <li>
                  <button
                    // onClick={() => navigate("/settings")}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Paramètres</span>
                  </button>
                </li>

                <li className="border-t border-gray-300 my-1"></li>

                <li>
                  <button
                    // onClick={() => {
                    //   if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
                    //     console.log("Déconnexion...");
                    //     // navigate("/login");
                    //   }
                    // }}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-red-50 transition-colors duration-200 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Déconnexion</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200 px-2 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Groupe gauche */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <HelpCircle className="h-9 w-9 text-white" />
              </div>
              <div>
                <h1 className="text-3xl text-gray-900">Centre d'Assistance</h1>
                <p className="text-gray-600">Bienvenue, IBRAHIM</p>
              </div>
            </div>

            {/* Bouton à droite */}
            <button
              onClick={() => navigate("/Client/CreateTicket")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Nouveau ticket
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

{
  /* <header className="bg-white border-b border-gray-200 px-6 py-8 shadow-sm">
        <//div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
        <span>Mode: Client - IBRAHIM</span>
        <Button
       
          className="text-white hover:bg-blue-700"
        >
          Déconnexion
        </Button>
      </>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <HelpCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">
                  Centre d'Assistance
                </h1>
                <p className="text-gray-600">
                  Bienvenue, IBRAHIM
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("CreateTicket")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus className="h-5 w-5" />
              Nouveau ticket
            </Button>
          </div>
      </div>
    </header> */
}
