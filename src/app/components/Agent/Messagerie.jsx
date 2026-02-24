import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Search, MessageSquare, Mail, User, Clock } from "lucide-react";
import { LuMessageCircleMore } from "react-icons/lu";

export default function Messagerie() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Messagerie</h2>
        <p className="text-gray-600">
          Toutes vos conversations et messages en un seul endroit
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 border-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversations</p>
                <p className="text-2xl font-bold text-gray-900">
                  {/* {ticketsWithMessages.length} */} {5}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <LuMessageCircleMore className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total messages</p>
                <p className="text-2xl font-bold text-gray-900">
                  {/* {totalMessages} */} {234}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Actives</p>
                <p className="text-2xl font-bold text-gray-900">
                  {/* {activeConversations} */} {12}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Messages clients</p>
                <p className="text-2xl font-bold text-gray-900">
                  {/* {messagesFromCustomers} */} {45}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <User className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher une conversation, un client, ou un message..."
              className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
