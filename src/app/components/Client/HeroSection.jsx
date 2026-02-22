import { Plus, TicketIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ tickets, setIsModalOpen }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 rounded-3xl p-12 text-white">
        <h2 className="mb-4">Comment pouvons-nous vous aider ?</h2>
        <p className="mb-8 text-blue-50">
          Créez un ticket de support ou consultez vos demandes en cours
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600  to-purple-500  px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50"
          >
            <Plus className="w-5 h-5" />
            Créer un ticket
          </button>

          <button
            onClick={() => navigate("/Client/ListTicket")}
            className="bg-white/20 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/30 backdrop-blur-sm"
          >
            <TicketIcon className="w-5 h-5" />
            Mes tickets ({tickets.length})
          </button>
        </div>
      </div>
    </div>
  );
}
