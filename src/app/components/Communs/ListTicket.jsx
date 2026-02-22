// import {
//   Eye,
//   Tag,
//   Clock,
//   Filter,
//   Search,
//   AlertCircle,
//   ArrowLeft,
//   Trash2,
// } from "lucide-react";
// import { Card, CardContent } from "../ui/card";
// import { Input } from "../ui/input";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { ticketConfig } from "../utils/ticketConfig";
// import { formatDate } from "../utils/formatDate";

// export default function ListTicket({ tickets, setTickets }) {
//   const navigate = useNavigate();
//   const [recherche, setRecherche] = useState("");
//   const [statutFiltre, setStatutFiltre] = useState("statuts");
//   const location = useLocation(); // 🔹 récupérer la route actuelle
//   const estSurLaPageMesTickets =
//     location.pathname.startsWith("/Agent/MesTickets");

//   // Supprimer un ticket
//   // const deleteTicket = async (id) => {
//   //   if (!window.confirm("Voulez-vous vraiment supprimer ce ticket ?")) return;

//   //   try {
//   //     const reponse = await fetch(`https://localhost:7274/api/Tickets/${id}`, {
//   //       method: "DELETE",
//   //     });

//   //     if (reponse.ok) {
//   //       setTickets(tickets.filter((t) => t.numTic !== id));
//   //       alert("✅ Ticket supprimé !");
//   //     } else {
//   //       alert("❌ Erreur lors de la suppression");
//   //     }
//   //   } catch (err) {
//   //     console.error("Erreur suppression:", err);
//   //   }
//   // };

//   // // 1. Filtrage par statut seul
//   // const ticketsFiltresStatutSeul =
//   //   statutFiltre === "statuts"
//   //     ? tickets
//   //     : tickets.filter((t) => t.statutTic === statutFiltre);

//   // // 2. Filtrage combiné (statut + recherche)
//   // const ticketsFiltresComplets = ticketsFiltresStatutSeul.filter((t) => {
//   //   if (recherche === "") return true;

//   //   const rechercheMin = recherche.toLowerCase();
//   //   const titreMin = t.titreTic.toLowerCase();
//   //   const numTicket = t.numTic.toString();

//   //   return titreMin.includes(rechercheMin) || numTicket.includes(recherche);
//   // });

//   // // 3. Fonction pour obtenir le nom du filtre
//   // const getNomFiltre = () => {
//   //   if (statutFiltre === "statuts") return "trouvé(s)";

//   //   const nomsStatuts = {
//   //     Ouvert: "ouverts",
//   //     En_cours: "en cours",
//   //     Resolu: "résolu(s)",
//   //     Ferme: "fermé(s)",
//   //   };

//   //   return nomsStatuts[statutFiltre] || "";
//   // };

//   // Filtrage des tickets
//   const filteredTickets = useMemo(() => {
//     return tickets.filter((ticket) => {
//       const matchesSearch =
//         ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         ticket.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesStatus =
//         statusFilter === "tous" || ticket.status === statusFilter;
//       const matchesPriority =
//         priorityFilter === "tous" || ticket.priority === priorityFilter;

//       return matchesSearch && matchesStatus && matchesPriority;
//     });
//   }, [tickets, searchQuery, statusFilter, priorityFilter]);
//   // let renduticket;
//   // if (filtragetickets.length === 0) {
//   //   renduticket = (
//   //     <Card>
//   //       <CardContent className="flex flex-col items-center justify-center py-12">
//   //         <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
//   //         <p className="text-red-500">Aucun ticket trouvé</p>
//   //         <p className="text-gray-500 mt-2">
//   //           Créez votre premier ticket pour obtenir de l'aide
//   //         </p>
//   //       </CardContent>
//   //     </Card>
//   //   );
//   // } else {
//   //   // renduticket = filtragetickets.map((ticket) => (
//   //   //   <div
//   //   //     key={ticket.numTic}
//   //   //     className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200"
//   //   //   >
//   //   //     <div className="flex justify-between items-start">
//   //   //       <div className="flex-1">
//   //   //         <div className="flex items-center gap-3 mb-2">
//   //   //           <span className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">#TKT-0{ticket.numTic}</span>
//   //   //           <span className={`px-4 py-2 rounded-full font-bold text-sm
//   //   //             ${ticket.statutId === 1
//   //   //               ? "bg-blue-100 text-blue-800 border border-blue-300" :
//   //   //               ticket.statutId === 2
//   //   //               ? "bg-orange-100 text-orange-800 border border-orange-300" :
//   //   //               ticket.statutId === 3
//   //   //               ? "bg-green-100 text-green-800 border border-green-300" :
//   //   //               "bg-red-100 text-red-800 border border-red-300"
//   //   //             }`}
//   //   //           >
//   //   //             {ticket.statutLibelle}
//   //   //           </span>
//   //   //           <span className={`px-4 py-2 rounded-full font-bold text-sm
//   //   //             ${ticket.prioriteId === 1
//   //   //               ? "bg-blue-100 text-red-800 border border-red-300" :
//   //   //               ticket.prioriteId === 2
//   //   //               ? "bg-orange-100 text-orange-800 border border-orange-300" :
//   //   //               "bg-green-100 text-green-800 border border-green-300"
//   //   //             }`}
//   //   //           >
//   //   //             {ticket.prioriteLibelle}
//   //   //           </span>
//   //   //         </div>
//   //   //         <h3 className="mb-2">{ticket.titreTic}</h3>
//   //   //         <p className="text-gray-600 mb-3">{ticket.descTic}</p>
//   //   //         <div className="flex items-center gap-4 text-sm text-gray-500">
//   //   //           <span>🏷️ Catégorie : {ticket.categorieLibelle}</span>
//   //   //           <span>📅 Créé le {new Date(ticket.dateCreTic).toLocaleDateString()}</span>
//   //   //         </div>
//   //   //       </div>
//   //   //       <div className="flex gap-2">
//   //   //         <button
//   //   //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//   //   //           onClick={() => navigate(`/TicketDetail/${ticket.numTic}`)}
//   //   //         >
//   //   //           <Eye className="w-4 h-4" />
//   //   //           <span>Voir</span>
//   //   //         </button>
//   //   //         <button
//   //   //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//   //   //           onClick={() => deleteTicket(ticket.numTic)}
//   //   //         >
//   //   //           <Trash2 className="w-4 h-4" />
//   //   //           <span>Supprimer</span>
//   //   //         </button>
//   //   //       </div>
//   //   //     </div>
//   //   //   </div>
//   //   // ));

//   //    filtragetickets.map((ticket) =>
//   //   (
//   //     <Card
//   //         key={ticket.numTic}
//   //       className="cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200"
//   //       onClick={() => TicketDetail(ticket)}
//   //     >
//   //       <CardContent className="p-5">
//   //         <div className="flex items-start justify-between gap-4">
//   //           <div className="flex-1 min-w-0">
//   //             {/* En-tête */}
//   //             <div className="flex flex-wrap items-center gap-2 mb-2">
//   //               <span className="text-gray-500">
//   //                 #TKT-0{ticket.numTic}
//   //               </span>
//   //               <span
//   //                 className={`px-2 py-0.5 rounded-full ${ticketConfig.status[ticket.statutId].bgColor}`}
//   //               >
//   //                 {ticket.statutLibelle}
//   //               </span>
//   //               <span
//   //                 className={`${ticketConfig.priorite[ticket.prioriteId].color}`}
//   //               >
//   //                 {/* {priorityConfig[ticket.priority].icon}{" "} */}
//   //                 {ticket.prioriteLibelle}
//   //               </span>
//   //             </div>

//   //             {/* Titre */}
//   //             <h3 className="mb-2">{ticket.title}</h3>

//   //             {/* Description */}
//   //             <p className="text-gray-600 line-clamp-2 mb-3">
//   //               {ticket.description}
//   //             </p>

//   //             {/* Métadonnées */}
//   //             <div className="flex flex-wrap items-center gap-4 text-gray-500">
//   //               <div className="flex items-center gap-1">
//   //                 <Clock className="h-4 w-4" />
//   //                 <span>
//   //                   {formatDate(ticket.dateCreTic)}
//   //                 </span>
//   //               </div>
//   //               <span className="text-gray-300">•</span>
//   //               <span>
//   //                 {ticket.categorieLibelle}
//   //               </span>
//   //               {/* {ticket.assignedTo && (
//   //                 <>
//   //                   <span className="text-gray-300">
//   //                     •
//   //                   </span>
//   //                   <span>
//   //                     Assigné à {ticket.assignedTo}
//   //                   </span>
//   //                 </>
//   //               )} */}
//   //             </div>
//   //           </div>

//   //           {/* Indicateur */}
//   //           <div className="flex-shrink-0">
//   //             <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
//   //           </div>
//   //         </div>
//   //       </CardContent>
//   //     </Card>
//   //   ))}
//   // }
//   let renduticket;
//   if (ticketsFiltresComplets.length === 0) {
//     renduticket = (
//       <Card>
//         <CardContent className="flex flex-col items-center justify-center py-12">
//           <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
//           <p className="text-red-500">Aucun ticket trouvé</p>
//           <p className="text-gray-500 mt-2">
//             Créez votre premier ticket pour obtenir de l'aide
//           </p>
//         </CardContent>
//       </Card>
//     );
//   } else {
//     renduticket = ticketsFiltresComplets.map((ticket) => (
//       <Card
//         key={ticket.numTic}
//         className="cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200 mb-4"
//         // onClick={() => navigate(`/TicketDetail/${ticket.numTic}`)}
//       >
//         <CardContent className="p-5">
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex-1 min-w-0">
//               {/* En-tête */}
//               <div className="flex flex-wrap items-center gap-2 mb-2">
//                 <span className="text-gray-500">#TKT-0{ticket.numTic}</span>
//                 <span
//                   className={`px-2 py-0.5 rounded-full ${ticketConfig.status[ticket.statutId]?.bgColor || "bg-gray-100"}`}
//                 >
//                   {ticket.statutLibelle}
//                 </span>
//                 <span
//                   className={`px-2 py-0.5 rounded-full ${ticketConfig.priorite[ticket.prioriteId]?.bgColor || "text-gray-600"}`}
//                 >
//                   {ticket.prioriteLibelle}
//                 </span>
//               </div>

//               {/* Titre */}
//               <h3 className="mb-2 font-medium">{ticket.titreTic}</h3>

//               {/* Description */}
//               <p className="text-gray-600 line-clamp-2 mb-3">
//                 {ticket.descTic}
//               </p>

//               {/* Métadonnées */}
//               <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
//                 <div className="flex items-center gap-1">
//                   <Clock className="h-4 w-4" />
//                   <span>{formatDate(ticket.dateCreTic)}</span>
//                 </div>
//                 <span className="text-gray-300">•</span>
//                 <span>{ticket.categorieLibelle}</span>
//               </div>
//             </div>

//             {/* Indicateur */}
//             <div className="flex-shrink-0">
//               <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     ));
//   }

//   return (
//     <div className="space-y-4 max-w-7xl mx-auto px-6 pb-4">
//       <div className="max-w-7xl mx-auto">
//         {!estSurLaPageMesTickets && (
//           <>
//             <button
//               onClick={() => navigate("/")}
//               className="flex items-center gap-2 hover:text-blue-700 mb-6"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span>Retour au tableau de bord</span>
//             </button>

//             <div className="mb-6">
//               <h1 className="text-center text-3xl">
//                 Mes tickets ({tickets.length})
//               </h1>
//             </div>
//           </>
//         )}
//       </div>

//       <Card className="border-2 border-gray-200">
//         <CardContent className="p-4">
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <Input
//                 type="text"
//                 placeholder="Rechercher par titre ou numéro..."
//                 value={recherche}
//                 onChange={(e) => setRecherche(e.target.value)}
//                 className="pl-10 border border-gray-300 hover:border-blue-500
//                 focus:border-blue-300 focus:ring-2 focus:ring-blue-300
//                 focus:outline-none transition-colors"
//               />
//             </div>
//             <select
//               value={statutFiltre}
//               onChange={(e) => setStatutFiltre(e.target.value)}
//               className="pl-10 border border-gray-300 rounded-md hover:border-blue-500
//               focus:border-blue-300 focus:ring-2 focus:ring-blue-300
//               focus:outline-none transition-colors"
//             >
//               <option value="statuts">Tous les statuts</option>
//               <option value="Ouvert">Ouverts</option>
//               <option value="En_cours">En cours</option>
//               <option value="Resolu">Résolus</option>
//               <option value="Ferme">Fermés</option>
//             </select>
//           </div>

//           {/* Affichage des résultats du filtrage */}
//           {(recherche || statutFiltre !== "statuts") && (
//             <div className="mt-3 flex items-center gap-2 text-gray-600">
//               <Filter className="h-4 w-4" />
//               <span>
//                 <strong>{ticketsFiltresComplets.length}</strong> ticket(s){" "}
//                 {getNomFiltre()}
//                 {recherche && (
//                   <span className="ml-2 text-sm text-blue-600">
//                     (sur <strong>{ticketsFiltresStatutSeul.length}</strong>{" "}
//                     {statutFiltre === "statuts"
//                       ? "tickets au total"
//                       : getNomFiltre()}
//                     )
//                   </span>
//                 )}
//               </span>
//             </div>
//           )}

//           {/* Message si aucun résultat */}
//           {ticketsFiltresComplets.length === 0 &&
//             (recherche || statutFiltre !== "statuts") && (
//               <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
//                 <p className="text-yellow-700 text-sm">
//                   {recherche
//                     ? `Aucun ticket ${getNomFiltre()} ne correspond à "${recherche}"`
//                     : `Aucun ticket ${getNomFiltre()}`}
//                 </p>
//               </div>
//             )}
//         </CardContent>
//       </Card>

//       <div className="space-y-4">{renduticket}</div>
//     </div>
//   );
// }

import { Clock, Filter, Search, AlertCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

import { ticketConfig } from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";

export default function ListTicket({ tickets = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  // =========================
  // STATES
  // =========================
  const [recherche, setRecherche] = useState("");
  const [statutFiltre, setStatutFiltre] = useState("tous");
  const [priorityFilter, setPriorityFilter] = useState("tous");

  const estSurLaPageMesTickets =
    location.pathname.startsWith("/Agent/MesTickets");

  // =========================
  // FILTRAGE OPTIMISÉ (useMemo)
  // =========================
  const filteredTickets = useMemo(() => {
    const text = recherche.toLowerCase();

    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.titreTic?.toLowerCase().includes(text) ||
        ticket.descTic?.toLowerCase().includes(text) ||
        ticket.numTic?.toString().includes(text);

      const matchesStatus =
        statutFiltre === "tous" || ticket.statutLibelle === statutFiltre;

      const matchesPriority =
        priorityFilter === "tous" || ticket.prioriteLibelle === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tickets, recherche, statutFiltre, priorityFilter]);

  // =========================
  // RENDU DES TICKETS
  // =========================
  const renduTicket =
    filteredTickets.length === 0 ? (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
          <p className="text-red-500">Aucun ticket trouvé</p>
          <p className="text-gray-500 mt-2">
            Créez votre premier ticket pour obtenir de l'aide
          </p>
        </CardContent>
      </Card>
    ) : (
      filteredTickets.map((ticket) => (
        <Card
          key={ticket.numTic}
          className="cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200 mb-4"
          onClick={() => navigate(`/TicketDetail/${ticket.numTic}`)}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* En-tête */}
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
                      "text-gray-600"
                    }`}
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
      ))
    );

  // =========================
  // JSX
  // =========================
  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 pb-4">
      {!estSurLaPageMesTickets && (
        <>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour au tableau de bord</span>
          </button>

          <h1 className="text-center text-3xl">
            Mes tickets ({filteredTickets.length})
          </h1>
        </>
      )}

      {/* Barre recherche + filtre */}
      <Card className="border-2 border-gray-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

              <Input
                type="text"
                placeholder="Rechercher..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
              />
            </div>

            <select
              value={statutFiltre}
              onChange={(e) => setStatutFiltre(e.target.value)}
              className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
            >
              <option value="tous">Tous les statuts</option>
              <option value="Ouvert">Ouvert</option>
              <option value="En cours">En cours</option>
              <option value="Resolu">Résolu</option>
              <option value="Ferme">Fermé</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
            >
              <option value="tous">Toutes les priorités</option>
              <option value="Basse">Basse</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Haute">Haute</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>

          {(recherche ||
            statutFiltre !== "tous" ||
            priorityFilter !== "tous") && (
            <div className="mt-3 flex items-center gap-2 text-gray-600">
              <Filter className="h-4 w-4" />
              <span>
                <strong>{filteredTickets.length}</strong> ticket(s) trouvé(s)
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">{renduTicket}</div>
    </div>
  );
}
