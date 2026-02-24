import StatsSection from "../Communs/StatsSection";
import ListTicket from "../Communs/ListTicket";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function DashboardAgent({ tickets, setTickets }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-6 mb-4">Tableau de bord</h2>
      <p className="text-gray-600 mb-6 px-6">
        Bienvenue sur votre tableau de bord. Ici, vous avez une vue d'ensemble
        de votre système d'assistance.
      </p>

      {/* Statistiques */}

      <StatsSection tickets={tickets} />

      {/* 5 derniers tickets */}

      <Card>
        <CardHeader>
          <CardTitle>Tickets récents</CardTitle>
        </CardHeader>
        <CardContent>
          <ListTicket tickets={tickets.slice(0, 5)} />
        </CardContent>
      </Card>

      {/* <ListTicket tickets={tickets} setTickets={setTickets} /> */}
    </div>
  );
}
