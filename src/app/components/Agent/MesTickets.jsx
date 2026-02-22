import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import ListTicket from "../Communs/ListTicket";

export default function MesTickets({ tickets, setTickets, setIsModalOpen }) {
  //   const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold px-6 mb-4">Gestion des tickets</h2>
          <p className="text-gray-600 mb-6 px-6">
            {tickets.length} ticket(s) trouvé(s)
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
           text-white px-6 py-3 mb-8 rounded-lg flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Nouveau ticket
        </button>
      </div>

      {/* Liste des tickets */}
      <ListTicket tickets={tickets} setTickets={setTickets} />
    </div>
  );
}
