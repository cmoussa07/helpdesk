import StatsSection from "../Communs/StatsSection";
import ListTicket from "../Communs/ListTicket";

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
      <h3 className="text-lg font-semibold px-6 mb-3">Tickets récents</h3>

      {/* <ListTicket tickets={tickets} setTickets={setTickets} /> */}
    </div>
  );
}
