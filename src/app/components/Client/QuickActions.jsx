import { BookOpen, MessageCircle, HelpCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Actions rapides */}
        <h3 className="mb-4">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-200">
            <CardContent
              className="p-6"
              onClick={() => navigate("/Client/Chats")}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>

                <div className="flex-1">
                  <h4>Chat en direct</h4>
                  <p className="text-gray-600 mt-1">
                    Discutez en temps réel avec notre équipe de support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-purple-200">
            <CardContent
              className="p-6"
              onClick={() => navigate("/Client/Faqs")}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4>FAQ & Aide</h4>
                  <p className="text-gray-600 mt-1">
                    Consultez les réponses aux questions fréquentes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <HelpCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4>FAQ</h4>
                <p className="text-gray-600 mt-1">
                  Trouvez rapidement les réponses
                  aux questions les plus fréquentes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-200">
          <CardContent
            className="p-6"
            
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4>Soumettre une demande</h4>
                <p className="text-gray-600 mt-1">
                  Créez un nouveau ticket pour obtenir de
                  l'aide
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
        </div>
      </div>
    </>
  );
}
