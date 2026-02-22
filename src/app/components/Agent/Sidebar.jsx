import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import CreateTicket from "../Communs/CreateTicket";

// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { Ticket, Plus, Users, LogOut } from "lucide-react";

const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: "Tableau de bord",
    path: "/",
  },
  {
    icons: <Ticket size={30} />,
    label: "Mes Tickets",
    path: "/Agent/MesTickets",
  },

  {
    icons: <Plus size={30} />,
    label: "Nouveau Ticket",
    path: "../Communs/CreateTicket",
  },
  {
    icons: <Users size={30} />,
    label: "Clients",
    path: "/Agent/Clients",
  },
  {
    icons: <TbReportSearch size={30} />,
    label: "Rapports",
    path: "/Agent/Rapports",
  },
  {
    icons: <IoMdNotificationsOutline size={30} />,
    label: "Notifications",
    path: "/Agent/Notifications",
  },
  {
    icons: <RiSettings4Line size={30} />,
    label: "Paramètres",
    path: "/Agent/Parametres",
  },
  {
    icons: <LogOut size={30} />,
    label: "Déconnexion",
    path: "/logout",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation(); // pour item actif

  return (
    <div
      className={`shadow-md p-2 flex flex-col duration-500 bg-blue-600 text-white ${open ? "w-60" : "w-16"}`}
    >
      {/* Header */}
      <div className=" px-3 py-1 h-16 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className={`${open ? "w-10" : "w-0"} rounded-md`}
        />
        <div>
          <MdMenuOpen
            size={34}
            className={` duration-500 cursor-pointer ${!open && " rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Body */}

      <ul className="flex-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <li
              key={index}
              onClick={() => navigate(item.path)} // ⭐ navigation ici
              className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer
              flex gap-2 items-center relative group
              ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}
            `}
            >
              <div>{item.icons}</div>
              <p
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  open ? "" : "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>
      {/* footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          <FaUserCircle size={30} />
        </div>
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
