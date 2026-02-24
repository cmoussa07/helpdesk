// import {
//   ArrowLeft,
//   User,
//   Tag,
//   AlertCircle,
//   Calendar,
//   Paperclip,
//   Send,
// } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function TicketDetail() {
//    // 1. HOOKS DE NAVIGATION
//   const navigate = useNavigate(); // Pour changer de page
//   const { id } = useParams(); // Récupère l'ID depuis l'URL : /TicketDetail/123 → id = "123"

//   // 2. ÉTAT LOCAL DU COMPOSANT
//   const [ticket, setTicket] = useState(null); // Stocke les données du ticket
//   const [loading, setLoading] = useState(true); // Afficher "Chargement..."
//   // const [message, setMessage] = useState(""); // Message qu'on écrit pour répondre

//   // 3. CHARGEMENT DU TICKET (déclenché automatiquement)
//   useEffect(() => {
//     // ÉTAPE 1 : Vérifier qu'on a bien un ID
//     if (!id) {
//       console.error("❌ Erreur : Aucun ID de ticket dans l'URL");
//       setLoading(false);
//       return;
//     }

//     // ÉTAPE 2 : Afficher qu'on charge
//     setLoading(true);

//     // ÉTAPE 3 : Aller chercher les données sur le serveur
//     fetch(`https://localhost:7274/api/Tickets/${id}`)
//       .then((reponse) => {
//         // ÉTAPE 4 : Vérifier si la réponse est OK
//         if (!reponse.ok) {
//           throw new Error(`Erreur ${reponse.status}: Ticket non trouvé`);
//         }
//         return reponse.json(); // Transformer en JSON
//       })
//       .then((data) => {
//         // ÉTAPE 5 : Stocker les données reçues
//         setTicket(data);
//         setLoading(false); // Dire qu'on a fini de charger
//       })
//       .catch((err) => {
//         // ÉTAPE 6 : Gérer les erreurs
//         console.error("Erreur API:", err);
//         setLoading(false);
//       });
//   }, [id]); // IMPORTANT : Se re-exécute si l'ID change

//   if (loading) {
//     return (
//       <div className="px-6 py-8">
//         <div className="text-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Chargement du ticket...</p>
//         </div>
//       </div>
//     );
//   }

//   // 5. TICKET NON TROUVÉ
//   if (!ticket) {
//     return (
//       <div className="px-6 py-8">
//         <button
//           onClick={() => navigate("/ListTicket")}
//           className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span>Retour aux tickets</span>
//         </button>
//         <div className="flex items-center justify-center gap-2  py-12">
//           <AlertCircle className="h-8 w-8 text-gray-400" />
//           <p className="text-red-600">Ticket introuvable.</p>
//         </div>
//         <p className="text-center text-gray-600 mb-5">
//           Le ticket #{id} n'existe pas ou a été supprimé.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 py-8">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <button
//           onClick={() => navigate("/ListTicket")}
//           className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mt-4 mb-4"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span>Retour aux tickets</span>
//         </button>

//         <div className="bg-white rounded-xl shadow-md border border-gray-200 mt-12 mb-8 overflow-hidden">
//           {/* En-tête */}
//           <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600">
//             <div className="flex items-center justify-between">
//               <h1 className="text-xl font-bold text-white">Détail du ticket #{ticket.numTic}</h1>
//               <div className="flex items-center gap-2 text-blue-100">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                 </svg>
//                 <span className="text-sm">{new Date(ticket.dateCreTic).toLocaleDateString('fr-FR')}</span>
//               </div>
//             </div>
//           </div>

//           {/* Contenu */}
//           <div className="p-6">
//             <div className="flex flex-col md:flex-row md:items-start gap-6">
//               {/* Statut */}
//               <div className="flex-shrink-0">
//                 <div className="inline-flex flex-col items-center p-4 bg-gray-100 rounded-lg border">
//                   <span className="text-sm font-medium text-gray-500 mb-2">Statut actuel du ticket</span>
//                   <span className={`px-4 py-2 rounded-full font-bold text-sm
//                     ${ticket.statutId === 1
//                       ? "bg-blue-100 text-blue-800 border border-blue-300" :
//                       ticket.statutId === 2
//                       ? "bg-orange-100 text-orange-800 border border-orange-300" :
//                       ticket.statutId === 3
//                       ? "bg-green-100 text-green-800 border border-green-300" :
//                       "bg-red-100 text-red-800 border border-red-300"
//                     }`}
//                   >
//                     {ticket.statutLibelle}
//                   </span>
//                 </div>
//               </div>
//               {/* Titre */}
//               <div className="flex-1">
//                 <div className="border-l-4 border-blue-500 pl-4">
//                   <h2 className="text-lg font-semibold text-gray-700 mb-1">Problème signalé</h2>
//                   <p className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
//                     {ticket.titreTic}
//                   </p>
//                   <p className="text-gray-600 mt-2 text-sm">
//                     Ce ticket est en cours de traitement par notre équipe de support.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
//             {/* Bloc problème + message */}
//             <div className="bg-white border border-gray-300 rounded-t-xl shadow-sm">
//               <div className="p-6 border-b border-gray-300">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                     <User className="w-5 h-5" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="text-gray-700">{ticket.clientNom} {ticket.clientPrenom}</span>
//                       <span className="text-sm text-gray-400">•</span>
//                       <span className="text-sm text-gray-400">
//                         {new Date(ticket.dateCreTic).toLocaleDateString()}
//                       </span>
//                     </div>
//                     <p className="text-gray-600">{ticket.descTic}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 space-y-6 max-h-[300px] overflow-y-auto">
//                 <div className="text-center py-8 text-gray-400">
//                   <p>Aucune réponse pour le moment</p>
//                 </div>
//               </div>

//               <div className="p-6 border border-gray-200 bg-gray-50">
//                 <form
//                   // onSubmit={(e) => {
//                   //   e.preventDefault();
//                   //   alert("Message envoyé: " + message);
//                   //   setMessage("");
//                   // }}
//                 >
//                   <div className="flex gap-3">
//                     <textarea
//                       placeholder="Écrire un message..."
//                       // value={message}
//                       // onChange={(e) => setMessage(e.target.value)}
//                       className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                       rows={8}
//                     />
//                   </div>
//                   <div className="flex justify-between items-center mt-3">
//                     <button
//                       type="button"
//                       className="text-gray-400 hover:text-gray-600 p-2"
//                     >
//                       <Paperclip className="w-5 h-5" />
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
//                     >
//                       <span>Envoyer</span>
//                       <Send className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* Bloc informations */}
//             <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
//               <h3 className="text-gray-700 mb-4">Informations</h3>
//               <div className="space-y-4">
//                 <InfoItem icon={<Tag />} label="Catégorie" value={ticket.categorieLibelle} />
//                 <InfoItem icon={<AlertCircle />} label="Priorité"
//                 value={ticket.prioriteLibelle}
//                 valueClassName={`px-4 py-2 rounded-full font-bold text-sm
//                   ${ticket.prioriteId === 1
//                     ? "bg-blue-100 text-red-800 border border-red-300" :
//                     ticket.prioriteId === 2
//                     ? "bg-orange-100 text-orange-800 border border-orange-300" :
//                     "bg-green-100 text-green-800 border border-green-300"
//                   }`}
//                 />
//                 {/* <InfoItem
//                   icon={<Clock />}
//                   label="SLA"
//                   value="Standard"
//                   sub="Réponse: 24h | Résolution: 72h"
//                 /> */}
//                 <InfoItem
//                   icon={<Calendar />}
//                   label="Date de création"
//                   value={new Date(ticket.dateCreTic).toLocaleDateString()}
//                 />
//               </div>
//             </div>

//             {/* Bloc progression */}
//             <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
//               <h3 className="text-gray-700 mb-4">Suivi du ticket</h3>
//               <div className="space-y-3">
//                 <WorkflowStep
//                   num={1}
//                   label="Nouveau"
//                   active={ticket.statutId === 1}
//                   completed={ticket.statutId > 1}
//                   date={ticket.dateCreTic}
//                   statusColor="blue"
//                 />

//                 <WorkflowStep
//                   num={2}
//                   label="En cours"
//                   description="En traitement par notre équipe"
//                   active={ticket.statutId === 2}
//                   completed={ticket.statutId > 2}
//                   statusColor="orange"
//                 />

//                 <WorkflowStep
//                   num={3}
//                   label="Resolu"
//                   active={ticket.statutId === 3}
//                   completed={ticket.statutId > 3}
//                   statusColor="green"
//                 />

//                 <WorkflowStep
//                   num={4}
//                   label="Ferme"
//                   active={ticket.statutId === 4}
//                   completed={ticket.statutId === 4}
//                   statusColor="red"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Composant utilitaire pour le workflow
// Composant utilitaire pour le workflow

import { formatDate } from "../utils/formatDate";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import {
  Clock,
  Tag,
  AlertCircle,
  MessageSquare,
  Send,
  ArrowLeft,
  User,
  Calendar,
  Paperclip,
} from "lucide-react";
import TicketDetail from "../Communs/TicketDetail";
import ticket_config from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";

export default function TicketDetailClient() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6 py-8">
      <div className="flex items-center gap-3 hover:text-blue-700 mb-6">
        <Button onClick={() => navigate("/Client/ListTicket")}>
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à mes tickets
        </Button>
      </div>
      <TicketDetail />
    </div>
  );
}
