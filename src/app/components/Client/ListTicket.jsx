import {
  Eye,
  Tag,
  Clock,
  Filter,
  Search,
  AlertCircle,
  ArrowLeft,
  Trash2,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ticketConfig } from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";

export default function ListTicket({ tickets, setTickets }) {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [statutFiltre, setStatutFiltre] = useState("statuts");

  // Supprimer un ticket
  const deleteTicket = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce ticket ?")) return;

    try {
      const reponse = await fetch(`https://localhost:7274/api/Tickets/${id}`, {
        method: "DELETE",
      });

      if (reponse.ok) {
        setTickets(tickets.filter((t) => t.numTic !== id));
        alert("✅ Ticket supprimé !");
      } else {
        alert("❌ Erreur lors de la suppression");
      }
    } catch (err) {
      console.error("Erreur suppression:", err);
    }
  };

  // 1. Filtrage par statut seul
  const ticketsFiltresStatutSeul =
    statutFiltre === "statuts"
      ? tickets
      : tickets.filter((t) => t.statutTic === statutFiltre);

  // 2. Filtrage combiné (statut + recherche)
  const ticketsFiltresComplets = ticketsFiltresStatutSeul.filter((t) => {
    if (recherche === "") return true;

    const rechercheMin = recherche.toLowerCase();
    const titreMin = t.titreTic.toLowerCase();
    const numTicket = t.numTic.toString();

    return titreMin.includes(rechercheMin) || numTicket.includes(recherche);
  });

  // 3. Fonction pour obtenir le nom du filtre
  const getNomFiltre = () => {
    if (statutFiltre === "statuts") return "trouvé(s)";

    const nomsStatuts = {
      Ouvert: "ouverts",
      En_cours: "en cours",
      Resolu: "résolu(s)",
      Ferme: "fermé(s)",
    };

    return nomsStatuts[statutFiltre] || "";
  };

  let renduticket;
  if (ticketsFiltresComplets.length === 0) {
    renduticket = (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
          <p className="text-red-500">Aucun ticket trouvé</p>
          <p className="text-gray-500 mt-2">
            Créez votre premier ticket pour obtenir de l'aide
          </p>
        </CardContent>
      </Card>
    );
  } else {
    renduticket = ticketsFiltresComplets.map((ticket) => (
      <Card
        key={ticket.numTic}
        className="cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200 mb-4"
      >
        <CardContent
          onClick={() => {
            console.log("Navigation vers ticket:", ticket.numTic);
            navigate(`/Client/TicketDetail/${ticket.numTic}`);
          }}
          className="p-5 cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* En-tête */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-gray-500">#TKT-0{ticket.numTic}</span>
                <span
                  className={`px-2 py-0.5 rounded-full ${ticketConfig.status[ticket.statutId]?.bgColor || "bg-gray-100"}`}
                >
                  {ticket.statutLibelle}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full ${ticketConfig.priorite[ticket.prioriteId]?.bgColor || "text-gray-600"}`}
                >
                  {ticket.prioriteLibelle}
                </span>
              </div>

              {/* Titre */}
              <h3 className="mb-2 font-medium">{ticket.titreTic}</h3>

              {/* Description */}
              <p className="text-gray-600 line-clamp-2 mb-3">
                {ticket.descTic}
              </p>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(ticket.dateCreTic)}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span>{ticket.categorieLibelle}</span>
              </div>
            </div>

            {/* Indicateur */}
            <div className="flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    ));
  }

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au tableau de bord</span>
        </button>

        <div className="mb-6">
          <h1 className="text-center text-3xl">
            Mes tickets ({tickets.length})
          </h1>
        </div>
      </div>

      <Card className="border-2 border-gray-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher par titre ou numéro..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="pl-10 border border-gray-300 hover:border-blue-500 
                focus:border-blue-300 focus:ring-2 focus:ring-blue-300 
                focus:outline-none transition-colors"
              />
            </div>
            <select
              value={statutFiltre}
              onChange={(e) => setStatutFiltre(e.target.value)}
              className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 
              focus:border-blue-300 focus:ring-2 focus:ring-blue-300 
              focus:outline-none transition-colors"
            >
              <option value="statuts">Tous les statuts</option>
              <option value="Ouvert">Ouverts</option>
              <option value="En_cours">En cours</option>
              <option value="Resolu">Résolus</option>
              <option value="Ferme">Fermés</option>
            </select>
          </div>

          {/* Affichage des résultats du filtrage */}
          {(recherche || statutFiltre !== "statuts") && (
            <div className="mt-3 flex items-center gap-2 text-gray-600">
              <Filter className="h-4 w-4" />
              <span>
                <strong>{ticketsFiltresComplets.length}</strong> ticket(s){" "}
                {getNomFiltre()}
                {recherche && (
                  <span className="ml-2 text-sm text-blue-600">
                    (sur <strong>{ticketsFiltresStatutSeul.length}</strong>{" "}
                    {statutFiltre === "statuts"
                      ? "tickets au total"
                      : getNomFiltre()}
                    )
                  </span>
                )}
              </span>
            </div>
          )}

          {/* Message si aucun résultat */}
          {ticketsFiltresComplets.length === 0 &&
            (recherche || statutFiltre !== "statuts") && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-700 text-sm">
                  {recherche
                    ? `Aucun ticket ${getNomFiltre()} ne correspond à "${recherche}"`
                    : `Aucun ticket ${getNomFiltre()}`}
                </p>
              </div>
            )}
        </CardContent>
      </Card>

      <div className="space-y-4">{renduticket}</div>
    </div>
  );
}
