import { HelpCircle, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function WelcomeSection() {
  const navigate = useNavigate();

  return (
    <div className=" bg-white border-b border-gray-200 px-6 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </Link>
          <div>
            <h1 className="text-gray-800">Centre d'Assistance</h1>
            <p className="text-gray-600">Bienvenue, ib</p>
          </div>
          <button
            onClick={() => navigate("/Client/createTicket")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Nouveau ticket
          </button>
        </div>
      </div>
    </div>
  );
}
