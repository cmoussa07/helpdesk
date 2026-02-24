import logo from "../../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch, TbUsersPlus } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { Ticket, Plus, Users, LogOut, MessageSquare } from "lucide-react";

const menuItems = [
  // 🏠 Général
  { section: "Général" },
  { icons: <IoHomeOutline size={30} />, label: "Tableau de bord", path: "/" },

  // 🎫 Tickets
  { section: "Tickets" },
  {
    icons: <Ticket size={30} />,
    label: "Mes tickets",
    path: "/Agent/MesTickets",
  },
  // {
  //   icons: <Ticket size={30} />,
  //   label: "Tickets équipe",
  //   path: "/Agent/TicketsEquipe",
  // },
  // {
  //   icons: <Ticket size={30} />,
  //   label: "Tous les tickets",
  //   path: "/Agent/TousTickets",
  // },
  {
    icons: <Plus size={30} />,
    label: "Nouveau ticket",
    path: "/Communs/CreateTicket",
  },

  // 👥 Équipe
  { section: "Équipe" },
  {
    icons: <Users size={30} />,
    label: "Membres équipe",
    path: "/Agent/Equipe",
  },
  {
    icons: <TbUsersPlus size={30} />,
    label: "Attribuer ticket",
    path: "/Agent/AttribuerTicket",
  },
  // {
  //   icons: <TbReportSearch size={30} />,
  //   label: "Charge de travail",
  //   path: "/Agent/ChargeTravail",
  // },

  // 💬 Communication
  { section: "Communication" },
  {
    icons: <LuMessageCircleMore size={30} />,
    label: "Messagerie",
    path: "/Agent/Messagerie",
  },
  // {
  //   icons: <MessageSquare size={30} />,
  //   label: "Discussions clients",
  //   path: "/Agent/DiscussionsClients",
  // },

  // 📊 Suivi
  { section: "Suivi" },
  {
    icons: <TbReportSearch size={30} />,
    label: "Historique statuts",
    path: "/Agent/HistoriqueStatuts",
  },
  {
    icons: <TbReportSearch size={30} />,
    label: "Tickets résolus",
    path: "/Agent/TicketsResolus",
  },

  // ⚙️ Paramètres
  { section: "Paramètres" },
  {
    icons: <RiSettings4Line size={30} />,
    label: "Mon profil",
    path: "/Agent/Parametres",
  },
  { icons: <LogOut size={30} />, label: "Déconnexion", path: "/logout" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-500 text-white ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-1 h-16 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className={`${open ? "w-10" : "w-0"} rounded-md`}
        />
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Body avec scroll */}

      <div
        className={`flex-1 ${open ? "overflow-y-auto" : "overflow-y-hidden"} py-4`}
      >
        <ul>
          {menuItems.map((item, index) =>
            item.section ? (
              <p
                key={index}
                className="text-gray-200 text-xs mt-4 mb-1 uppercase px-3"
              >
                {item.section}
              </p>
            ) : (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className={`px-3 py-2 my-1 rounded-md duration-300 cursor-pointer flex gap-3 items-center group ${
                  location.pathname === item.path
                    ? "bg-blue-800"
                    : "hover:bg-blue-700"
                }`}
              >
                <div>{item.icons}</div>
                <p
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`whitespace-pre duration-500 ${open ? "" : "opacity-0 translate-x-28 overflow-hidden"}`}
                >
                  {item.label}
                </p>
                <p
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
                group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {item.label}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2 mt-auto">
        <FaUserCircle size={30} />
        <div
          className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
        >
          <p>Saheb</p>
          <span className="text-xs">saheb@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
