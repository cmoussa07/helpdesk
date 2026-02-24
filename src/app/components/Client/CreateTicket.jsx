import { AlertCircle, Send, ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import CreateTicket from "../Communs/CreateTicket";

export default function CreateTicketClient({ tickets, setTickets }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:text-blue-700 ml-12 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au tableau de bord</span>
        </button>
      </div>
      <CreateTicket tickets={tickets} setTickets={setTickets} />;
    </div>
  );
}
