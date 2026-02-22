import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      question: "Comment créer un ticket ?",
      reponse:
        "Cliquez sur « Créer un ticket », remplissez le formulaire avec les informations demandées et validez.",
    },
    {
      question: "Comment suivre l’état de mon ticket ?",
      reponse:
        "Vous pouvez suivre le statut de votre ticket depuis votre tableau de bord ou dans la section « Mes tickets ».",
    },
    {
      question: "Quel est le délai moyen de réponse du support ?",
      reponse:
        "Le délai moyen de réponse est de 24 à 48 heures ouvrées selon la priorité de votre ticket.",
    },
    {
      question: "Puis-je modifier un ticket après sa création ?",
      reponse:
        "Oui, vous pouvez ajouter des commentaires ou des pièces jointes à tout moment en accédant au ticket.",
    },
    {
      question: "Que signifie le statut « En cours » ?",
      reponse:
        "Le ticket est actuellement pris en charge par un agent du support et est en cours de traitement.",
    },
    {
      question: "Comment joindre des fichiers à un ticket ?",
      reponse:
        "Lors de la création ou mise à jour d’un ticket, cliquez sur « Ajouter une pièce jointe » et sélectionnez vos fichiers.",
    },
    {
      question: "Quand un ticket est-il fermé ?",
      reponse:
        "Un ticket est fermé après validation de la solution par l’utilisateur ou après plusieurs jours d’inactivité.",
    },
    {
      question: "Comment consulter la base de connaissances ?",
      reponse:
        "La base de connaissances contient des articles détaillés pour résoudre vos problèmes. Vous pouvez y accéder depuis le tableau de bord ou via QuickActions.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 py-8">
      <div className="space-y-4 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="relative mt-7 mb-7">
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
                Questions Fréquentes (FAQ)
              </h1>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-shadow border border-gray-200 max-w-6xl mx-auto"
            >
              <CardContent className="p-10">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">{faq.reponse}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Call-to-Action */}
        <Card className="bg-blue-50 border border-blue-200 shadow-sm max-w-6xl mx-auto">
          <CardContent className="p-6 text-center">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">
              Vous ne trouvez pas votre réponse ?
            </h4>
            <p className="text-gray-700 mb-6">
              Notre équipe de support est disponible pour vous aider. Créez un
              ticket et nous vous répondrons rapidement.
            </p>
            <Button
              onClick={() => navigate("/Client/CreateTicket")}
              className="bg-blue-700 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-md shadow-sm mx-auto"
            >
              Créer un ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
