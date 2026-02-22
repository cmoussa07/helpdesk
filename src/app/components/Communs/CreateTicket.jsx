import { AlertCircle, Send, ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";

export default function CreateTicket({ tickets, setTickets }) {
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

      // Rediriger vers la liste des tickets après création
      navigate("/ListTicket");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:text-blue-700 ml-12 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au tableau de bord</span>
        </button>

        <div className="mb-6">
          <h1 className="text-center text-3xl">Créer un nouveau ticket</h1>
        </div>
      </div>

      <Card className="w-full max-w-4xl rounded-2xl border-2 border-blue-200 mx-auto">
        <CardHeader className="bg-gray-100 rounded-t-2xl pt-1 pb-1">
          <h1 className="flex items-center gap-2 text-lg font-semibold mt-5 mb-5">
            <Send className="h-5 w-5 text-blue-600" />
            Formulaire de création de ticket
          </h1>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations du client (lecture seule) */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="text-gray-900 mb-3">Vos informations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-600">Nom</Label>
                  <p className="mt-1">IBRHAIM</p>
                </div>
                <div>
                  <Label className="text-gray-600">Email</Label>
                  <p className="mt-1">Ib</p>
                </div>
              </div>
            </div>

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
                  Choisissez la catégorie qui correspond le mieux à votre
                  demande
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
                  <option value={3}>Basse</option>
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
              <p className="text-gray-500">
                Résumez votre problème en quelques mots
              </p>
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
                rows="8"
                placeholder="Décrivez votre problème de manière détaillée. Plus vous donnez d'informations, plus nous pourrons vous aider rapidement."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                  hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                  transition-colors duration-200"
                required
              ></textarea>
              <p className="text-gray-500">
                Incluez toutes les informations pertinentes (étapes, messages
                d'erreur, etc.)
              </p>
            </div>

            {/* Erreur éventuelle */}
            {error && <p className="text-red-600">{error}</p>}

            {/* Conseils */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-blue-900">
                      Conseils pour une réponse rapide
                    </h4>
                    <ul className="text-blue-800 space-y-1 list-disc list-inside">
                      <li>Soyez précis dans votre description</li>
                      <li>Incluez les messages d'erreur si applicable</li>
                      <li>Mentionnez ce que vous avez déjà essayé</li>
                      <li>Ajoutez des captures d'écran si nécessaire</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                className={`flex-1  bg-gradient-to-r
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
