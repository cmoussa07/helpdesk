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

// Configuration des COULEURS seulement (les libellés viennent d'ASP.NET)
const ticket_config = {
  status: {
    1: {
      color: "blue", // Pour le workflow
      bgColor: "bg-blue-100 text-blue-800", // Pour le badge
      description: "Votre ticket a été créé et sera traité prochainement",
    },
    2: {
      color: "orange",
      bgColor: "bg-yellow-100 text-yellow-800",
      description: "Notre équipe travaille actuellement sur votre demande",
    },
    3: {
      color: "green",
      bgColor: "bg-green-100 text-green-800",
      description:
        "Votre ticket a été résolu. Si le problème persiste, n'hésitez pas à le signaler",
    },
    4: {
      color: "red",
      bgColor: "bg-gray-100 text-gray-800",
      description: "Ce ticket est fermé",
    },
  },
  priorite: {
    1: { bgColor: "bg-red-100 text-red-800" },
    2: { bgColor: "bg-orange-100 text-orange-600" },
    3: { bgColor: "bg-blue-100 text-blue-600" },
    4: { bgColor: "bg-gray-100 text-gray-800" },
  },
};

function WorkflowStep({ num, label, active, completed, statusColor, date }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="relative flex items-center gap-3 w-full">
        <div className="relative">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center
              text-sm font-medium transition-all duration-300
              ${
                active
                  ? `bg-gradient-to-r from-${statusColor}-500 to-${statusColor}-600 text-white shadow-lg`
                  : completed
                    ? `bg-${statusColor}-500 text-white`
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500"
              }
          `}
          >
            {completed ? "✓" : num}
          </div>

          {active && (
            <div
              className={`absolute inset-0 rounded-full bg-${statusColor}-400 blur-sm opacity-50 animate-pulse`}
            />
          )}
        </div>

        <div className="flex-1 flex items-center justify-between">
          <div>
            <span
              className={`font-medium ${active ? "text-gray-900" : "text-gray-500"}`}
            >
              {label}
            </span>
            {active && date && (
              <p className="text-xs text-gray-500 mt-1">{formatDate(date)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TicketDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) {
      console.error("Erreur : Aucun ID de ticket dans l'URL");
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`https://localhost:7274/api/Tickets/${id}`)
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error(`Erreur ${reponse.status}: Ticket non trouvé`);
        }
        return reponse.json();
      })
      .then((data) => {
        setTicket(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API:", err);
        setLoading(false);
      });
  }, [id]);

  const formatTicketDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const handleSendMessage = () => {
    console.log("Message envoyé:", message);
    setMessage("");
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du ticket...</p>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Button onClick={() => navigate("/Client/ListTicket")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à mes tickets
        </Button>
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-red-600 text-lg">Ticket introuvable.</p>
          <p className="text-gray-600">
            Le ticket #{id} n'existe pas ou a été supprimé.
          </p>
        </div>
      </div>
    );
  }

  const demoMessages = [
    {
      id: "1",
      author: `${ticket.clientNom} ${ticket.clientPrenom}`,
      content: ticket.descTic,
      date: ticket.dateCreTic,
      isCustomer: true,
    },
  ];

  if (ticket.statutId !== 1) {
    demoMessages.push({
      id: "2",
      author: ticket.assignedTo || "Support",
      content:
        "Merci pour votre message. Nous avons bien reçu votre demande et nous travaillons dessus. Nous reviendrons vers vous dans les plus brefs délais.",
      date: new Date(new Date(ticket.dateCreTic).getTime() + 3600000),
      isCustomer: false,
    });
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6 py-8">
      <div className="flex items-center gap-3 hover:text-blue-700 mb-6">
        <Button onClick={() => navigate("/Client/ListTicket")}>
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à mes tickets
        </Button>
      </div>

      <Card className="border-2 border-blue-100 mb-5">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <CardTitle className="flex-1">{ticket.titreTic}</CardTitle>
              <span className="text-gray-500">#TKT-0{ticket.numTic}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-medium 
                ${ticket_config.status[ticket.statutId]?.bgColor || "bg-gray-100 text-gray-800"}`}
              >
                {ticket.statutLibelle}
              </span>
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-medium 
                ${ticket_config.priorite[ticket.prioriteId]?.bgColor || "bg-gray-100 text-gray-800"}`}
              >
                {ticket.prioriteLibelle}
              </span>
              <span>{ticket.categorieLibelle}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-1">Statut actuel</h4>
              <p className="text-blue-700">
                {ticket_config.status[ticket.statutId]?.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="h-4 w-4" />
              <div>
                <span className="block">Client</span>
                <span className="text-gray-900">
                  {ticket.clientNom} {ticket.clientPrenom}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <div>
                <span className="block">Créé le</span>
                <span className="text-gray-900">
                  {formatTicketDate(ticket.dateCreTic)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Tag className="h-4 w-4" />
              <div>
                <span className="block">Catégorie</span>
                <span className="text-gray-900">{ticket.categorieLibelle}</span>
              </div>
            </div>
          </div>

          {ticket.assignedTo && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                ✓ Ce ticket est assigné à <strong>{ticket.assignedTo}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Conversation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4 mb-6">
            {demoMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.isCustomer ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    msg.isCustomer
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {msg.author.charAt(0).toUpperCase()}
                </div>
                <div className={`flex-1 ${msg.isCustomer ? "text-right" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={msg.isCustomer ? "order-1" : ""}>
                      {msg.author}
                    </span>
                    <span className="text-gray-500">
                      {formatTicketDate(msg.date)}
                    </span>
                  </div>
                  <div
                    className={`rounded-lg p-4 inline-block max-w-2xl ${
                      msg.isCustomer
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-left">
                      {msg.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {ticket.statutId !== 4 && (
            <div className="border-t border-gray-200 pt-6">
              <h4 className="mb-3">Ajouter un message</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Écrivez votre message ici..."
                    rows={4}
                    className="flex-1 border-gray-200  hover:border-blue-400 
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                      transition-colors duration-200"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    Joindre un fichier
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className=" text-white-400 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Suivi du ticket
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Workflow avec les libellés d'ASP.NET */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((statutId) => {
              const statusConfig = ticket_config.status[statutId];

              // Déterminer le libellé à afficher
              let label;
              if (statutId === ticket.statutId) {
                // Si c'est le statut actuel, utiliser celui d'ASP.NET
                label = ticket.statutLibelle;
              } else {
                // Pour les autres, utiliser des libellés génériques
                const genericLabels = {
                  1: "Ouvert",
                  2: "En cours",
                  3: "Resolu",
                  4: "Fermé",
                };
                label = genericLabels[statutId];
              }

              return (
                <WorkflowStep
                  key={statutId}
                  num={statutId}
                  label={label}
                  active={ticket.statutId === statutId}
                  completed={ticket.statutId > statutId}
                  date={statutId === 1 ? ticket.dateCreTic : null}
                  statusColor={statusConfig?.color}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>

      {ticket.statutId === 3 && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h4 className="mb-2">Le problème est-il résolu ?</h4>
            <p className="text-gray-600 mb-4">
              Si le problème persiste, vous pouvez rouvrir ce ticket en ajoutant
              un message ci-dessus.
            </p>
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-700 hover:bg-yellow-100"
            >
              Rouvrir le ticket
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
