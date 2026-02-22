import { TicketIcon, Clock, XCircleIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function StatsSection({ tickets }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total de tickets</p>
                <p className="mt-2 text-2xl font-bold text-gray-600">
                  {tickets.length}
                </p>
              </div>
              <TicketIcon className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">En cours</p>
                <p className="mt-2 text-2xl font-bold text-gray-600">6</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Résolus</p>
                <p className="mt-2 text-2xl font-bold text-gray-600">3</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Fermés</p>
                <p className="mt-2 text-2xl font-bold text-gray-600">5</p>
              </div>
              <div>
                <XCircleIcon className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
