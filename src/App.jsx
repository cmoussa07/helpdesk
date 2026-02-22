import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./app/components/Agent/Sidebar";
import Home from "./Home";
import DashboardAgent from "./app/components/Agent/dashboard";
// import Header from "./app/components/Client/Header";
import Header from "./app/components/Agent/Header";
import MesTickets from "./app/components/Agent/MesTickets";
import Footer from "./app/components/Client/Footer";
import Acceuil from "./app/components/Client/Acceuil";
// import CreateTicket from "./app/components/Client/CreateTicket";
import CreateTicket from "./app/components/Communs/CreateTicket";
import CreateTicketModal from "./app/components/Communs/CreateTicketModal";
// import CreateTicketModal from "./app/components/Client/CreateTicketModal";
import ListTicket from "./app/components/Communs/ListTicket";
import Faqs from "./app/components/Client/Faqs";
import Chats from "./app/components/Client/Chats";
import TicketDetail from "./app/components/Communs/TicketDetail";

function App() {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Charger les tickets depuis l’API
  useEffect(() => {
    fetch("https://localhost:7274/api/Tickets")
      .then((reponse) => reponse.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Erreur API:", err));
  }, []); // le tableau vide est le tableau de dependence qui s'execute seulement
  // au montage du compoasnt à cause de []

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          <Header tickets={tickets} setIsModalOpen={setIsModalOpen} />
          {isModalOpen && (
            <CreateTicketModal
              tickets={tickets}
              setTickets={setTickets}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          <main className="flex-1 bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<DashboardAgent tickets={tickets} />} />
              <Route
                path="/Communs/ListTicket"
                element={
                  <ListTicket tickets={tickets} setTickets={setTickets} />
                }
              />
              {/* <Route path="/TicketDetail" element={<TicketDetail tickets={tickets} setTickets={setTickets} />} /> */}
              {/* Ajoutez d'autres routes ici */}

              <Route
                path="/Communs/CreateTicket"
                element={
                  <CreateTicket tickets={tickets} setTickets={setTickets} />
                }
              />

              <Route
                path="/Agent/MesTickets"
                element={
                  <MesTickets
                    tickets={tickets}
                    setTickets={setTickets}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                }
              />
            </Routes>

            {/* {isModalOpen && <CreateTicketModal onClose={() => setIsModalOpen(false)} />} */}
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
