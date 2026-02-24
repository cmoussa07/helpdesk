// export default function AttribuerTicket() {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Attribuer un ticket</h2>
//       <p className="text-gray-600 mb-6">
//         Cette fonctionnalité est en cours de développement. Restez à l'écoute
//         pour les mises à jour !
//       </p>
//     </div>
//   );
// }

import { useState } from "react";
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
import { formatDate } from "../utils/formatDate";
import { ticketConfig } from "../utils/ticketConfig";

export default function AttribuerTicket({ tickets, setTickets }) {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [statutFiltre, setStatutFiltre] = useState("statuts");

  // Mock membres équipe (à remplacer par ton API)
  const membresEquipe = [
    { id: 1, nom: "Paul Dupont" },
    { id: 2, nom: "Marie Leroy" },
    { id: 3, nom: "Ali Koné" },
  ];

  // Stocke la sélection de membre pour chaque ticket
  const [selection, setSelection] = useState({});

  // Attribuer le ticket
  const handleAttribuer = (ticketNum) => {
    const membreId = selection[ticketNum];
    if (!membreId) {
      alert("Veuillez sélectionner un membre avant d'attribuer !");
      return;
    }

    setTickets((prev) =>
      prev.map((t) =>
        t.numTic === ticketNum
          ? { ...t, assigne: membresEquipe.find((m) => m.id === membreId).nom }
          : t,
      ),
    );

    alert(
      `Ticket #${ticketNum} attribué à ${membresEquipe.find((m) => m.id === membreId).nom}`,
    );
  };

  // Filtrage tickets
  const ticketsFiltresStatutSeul =
    statutFiltre === "statuts"
      ? tickets
      : tickets.filter((t) => t.statutTic === statutFiltre);

  const ticketsFiltresComplets = ticketsFiltresStatutSeul.filter((t) => {
    if (recherche === "") return true;
    const rechercheMin = recherche.toLowerCase();
    const titreMin = t.titreTic.toLowerCase();
    const numTicket = t.numTic.toString();
    return titreMin.includes(rechercheMin) || numTicket.includes(recherche);
  });

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

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-center text-3xl mb-6">Attribuer des tickets</h1>

      {/* Filtres */}
      <Card className="border-2 border-gray-200 mb-4">
        <CardContent className="p-4 flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher par titre ou numéro..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="pl-10 border border-gray-300 hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
            />
          </div>

          <select
            value={statutFiltre}
            onChange={(e) => setStatutFiltre(e.target.value)}
            className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
          >
            <option value="statuts">Tous les statuts</option>
            <option value="Ouvert">Ouverts</option>
            <option value="En_cours">En cours</option>
            <option value="Resolu">Résolus</option>
            <option value="Ferme">Fermés</option>
          </select>
        </CardContent>
      </Card>

      {ticketsFiltresComplets.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
            <p className="text-red-500">Aucun ticket trouvé</p>
          </CardContent>
        </Card>
      ) : (
        ticketsFiltresComplets.map((ticket) => (
          <Card
            key={ticket.numTic}
            className="border-2 border-transparent hover:border-blue-200 mb-4"
          >
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-gray-500">#TKT-0{ticket.numTic}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        ticketConfig.status[ticket.statutId]?.bgColor ||
                        "bg-gray-100"
                      }`}
                    >
                      {ticket.statutLibelle}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        ticketConfig.priorite[ticket.prioriteId]?.bgColor ||
                        "bg-gray-100"
                      }`}
                    >
                      {ticket.prioriteLibelle}
                    </span>
                  </div>
                  <h3 className="mb-2 font-medium">{ticket.titreTic}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-3">
                    {ticket.descTic}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{formatDate(ticket.dateCreTic)}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span>{ticket.categorieLibelle}</span>
                  </div>
                </div>

                {/* Attribution */}
                <div className="flex flex-col gap-2">
                  <select
                    value={selection[ticket.numTic] || ""}
                    onChange={(e) =>
                      setSelection((prev) => ({
                        ...prev,
                        [ticket.numTic]: parseInt(e.target.value),
                      }))
                    }
                    className="border border-gray-300 rounded-md px-2 py-1"
                  >
                    <option value="">Sélectionner un membre</option>
                    {membresEquipe.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.nom}
                      </option>
                    ))}
                  </select>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() => handleAttribuer(ticket.numTic)}
                  >
                    Attribuer
                  </button>
                  {ticket.assigne && (
                    <span className="text-green-600">
                      Assigné à {ticket.assigne}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
