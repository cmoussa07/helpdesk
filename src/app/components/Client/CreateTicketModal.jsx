import { Send, X } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Label } from "../ui/label";

export default function CreateTicketModal({
  tickets,
  setTickets,
  isModalOpen,
  setIsModalOpen,
}) {
  const [nouveauTicket, setNouveauTicket] = useState({
    titreTic: "",
    descTic: "",
    categorieId: 1,
    prioriteId: 1,
    statutId: 1,
    clientId: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNouveauTicket({
      ...nouveauTicket,
      [name]: value,
    });
  };

  const location = useLocation();

  const estSurLaPageMesTickets =
    location.pathname.startsWith("/Agent/MesTickets");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const reponse = await fetch("https://localhost:7274/api/Tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...nouveauTicket,
        }),
      });

      if (!reponse.ok) {
        throw new Error("Erreur lors de la création du ticket");
      }

      const data = await reponse.json();
      setTickets([...tickets, data]); // mise à jour du state global
      alert("✅ Ticket créé avec succès !");

      // Réinitialiser le formulaire
      setNouveauTicket({
        titreTic: "",
        descTic: "",
        categorieId: 1,
        prioriteId: 1,
        statutId: 1,
        clientId: 1,
      });

      // la modal se ferme on rediriger vers la liste des tickets après création
      setIsModalOpen(false);

      if (estSurLaPageMesTickets) {
        navigate("/Agent/MesTickets");
      } else {
        navigate("/Communs/ListTicket");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fermerModal = () => {
    setIsModalOpen(false);
  };

  // Si la modal n'est pas ouverte, ne rien afficher
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 py-10">
      <Card className="w-full max-w-2xl rounded-2xl border-2 border-blue-200 mx-auto">
        <CardHeader className="bg-gray-100 rounded-t-2xl pt-4 pr-1">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 text-lg font-semibold mt-2 mb-5">
              <Send className="h-5 w-5 text-blue-600" />
              Formulaire de création de ticket
            </h1>
            <Button
              onClick={fermerModal}
              className="flex justify-center mb-2 hover:bg-red-600"
            >
              <X className="h-5 w-5 mt-5 mb-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Catégorie et priorité */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="categorieId" className="text-lg">
                  Catégorie *
                </Label>
                <select
                  id="categorieId"
                  name="categorieId"
                  value={nouveauTicket.categorieId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                  hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                  transition-colors duration-200"
                  required
                >
                  <option value={1}>Bug logiciel</option>
                  <option value={2}>Connexion</option>
                  <option value={3}>Paiement</option>
                  <option value={4}>Autre</option>
                </select>
                <p className="text-gray-500 ml-1">
                  Choisissez la catégorie de votre demande
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prioriteId" className="text-lg">
                  Priorité *
                </Label>
                <select
                  id="prioriteId"
                  name="prioriteId"
                  value={nouveauTicket.prioriteId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                  hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                  transition-colors duration-200"
                  required
                >
                  <option value={1}>Haute</option>
                  <option value={2}>Moyenne</option>
                  <option value={3}>Bassee</option>
                </select>
                <p className="text-gray-500 ml-1">
                  Indiquez l'urgence de votre demande
                </p>
              </div>
            </div>

            {/* Titre */}
            <div className="space-y-2">
              <Label htmlFor="titreTic" className="text-lg">
                Sujet *
              </Label>
              <input
                type="text"
                id="titreTic"
                name="titreTic"
                value={nouveauTicket.titreTic}
                onChange={handleChange}
                placeholder="Ex: Impossible de me connecter à mon compte"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                  hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                  transition-colors duration-200"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="descTic" className="text-lg">
                Description détaillée *
              </Label>
              <textarea
                id="descTic"
                name="descTic"
                value={nouveauTicket.descTic}
                onChange={handleChange}
                rows="5"
                placeholder="Décrivez votre problème de manière détaillée. Plus vous donnez d'informations, plus nous pourrons vous aider rapidement."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                  hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                  transition-colors duration-200"
                required
              ></textarea>
            </div>

            {/* Erreur éventuelle */}
            {error && <p className="text-red-600">{error}</p>}

            {/* Boutons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-300"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className={`flex-1 bg-gradient-to-r
                ${
                  loading
                    ? "from-gray-400 to-gray-500"
                    : "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                } text-white h-12`}
              >
                {loading ? "Création en cours..." : "Créer le ticket"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
