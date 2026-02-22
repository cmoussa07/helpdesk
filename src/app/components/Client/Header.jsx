import { HelpCircle, Plus, User, Bell, Settings, LogOut, MessageCircle, Zap, Shield, Clock, ChevronDown, Star, Activity, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const notifications = [
    { id: 1, type: "success", title: "Ticket #2024-001 résolu", message: "Votre demande a été traitée avec succès", time: "2 min", unread: true },
    { id: 2, type: "info", title: "Nouveau message", message: "L'équipe support a répondu", time: "15 min", unread: true },
    { id: 3, type: "warning", title: "Maintenance programmée", message: "Le 25/02 de 02h à 04h", time: "1h", unread: false }
  ];

  return (
    <header className="relative overflow-hidden">
      {/* Arrière-plan global */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
      </div>

      {/* Header principal */}
      <div className="relative flex items-center justify-between h-20 px-8 z-40">
        
        {/* Partie gauche - Logo et Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Shield className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                HelpDesk Pro
              </h1>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Centre d'Excellence</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-sm text-slate-200 hover:text-white hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105">
              <span className="relative flex items-center gap-2 z-10">
                <HelpCircle className="w-4 h-4" />
                Support & FAQ
              </span>
            </button>
            
            <button className="group relative overflow-hidden bg-white/10 border border-white/20 text-sm text-slate-200 hover:text-white hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105">
              <span className="relative flex items-center gap-2 z-10">
                <MessageCircle className="w-4 h-4" />
                Chat Live
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </nav>
        </div>

        {/* Partie centrale */}
        <div className="hidden xl:flex items-center gap-6 bg-white/5 rounded-2xl px-6 py-3 border border-white/10">
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">Opérationnel</span>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-slate-300 font-medium">
              {currentTime.toLocaleTimeString('fr-FR')}
            </span>
          </div>
        </div>

        {/* Partie droite - Utilisateur et Actions */}
        <div className="flex items-center gap-4">
          
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 border border-white/10 group"
            >
              <Bell className="w-5 h-5 text-slate-200" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                {notifications.filter(n => n.unread).length}
              </span>
            </button>
            
            {/* Dropdown notifications */}
            {showNotifications && (
              <div className="fixed top-20 right-32 w-96 bg-white text-gray-800 rounded-3xl shadow-2xl border border-gray-200 z-50">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-blue-600" />
                        Notifications
                      </h3>
                      <p className="text-xs text-gray-500">{notifications.filter(n => n.unread).length} non lues</p>
                    </div>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-all duration-200">
                      Tout marquer comme lu
                    </button>
                  </div>
                  
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`p-4 rounded-2xl transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                        notification.type === 'success' ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500' :
                        notification.type === 'info' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500' :
                        'bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500'
                      }`}>
                        <div className="flex items-start gap-3">
                           <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.type === 'success' ? 'bg-green-500' :
                            notification.type === 'info' ? 'bg-blue-500' : 'bg-orange-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-900">{notification.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                            <span className="text-xs text-gray-400 mt-2 block">Il y a {notification.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 text-center text-sm text-white font-medium py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl transition-all duration-200">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profil */}
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 hover:bg-white/20 px-4 py-2 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center border border-white/20">
                    <User className="w-5 h-5 text-slate-200" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-200">IBRAHIM</p>
                  <p className="text-xs text-slate-400">Client Premium</p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-200 transition-transform duration-300 ${showProfile ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown profil */}
            {showProfile && (
              <div className="fixed top-20 right-8 w-72 bg-white text-gray-800 rounded-3xl shadow-2xl border border-gray-200 z-50">
                
                <div className="p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-t-3xl border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-900/30">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-3 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">IBRAHIM</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Client Premium
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-blue-50 rounded-2xl transition-all duration-200 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-700">Mon Profil</span>
                      <p className="text-xs text-gray-400">Gérer vos informations</p>
                    </div>
                  </button>
                  
                  <button className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-blue-50 rounded-2xl transition-all duration-200 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-700">Préférences</span>
                      <p className="text-xs text-gray-400">Personnaliser</p>
                    </div>
                  </button>
                  
                  <div className="mx-4 my-3 h-px bg-gray-200"></div>
                  
                  <button 
                    onClick={() => {
                      if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
                        alert("✨ Déconnexion réussie!");
                      }
                    }}
                    className="flex items-center gap-4 w-full text-left px-4 py-3 hover:bg-red-50 rounded-2xl transition-all duration-200 text-red-600 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <LogOut className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold">Déconnexion</span>
                      <p className="text-xs text-red-400">Fermer la session</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section Hero */}
      <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-xl border-b border-gray-200/30 z-0">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <HelpCircle className="w-10 h-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-3">
                  Centre d'Assistance
                </h1>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xl text-gray-700 font-medium">Bonjour</span>
                  <span className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg">
                    IBRAHIM
                  </span>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-700 font-semibold">En ligne</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-3xl flex items-center gap-4 font-bold text-lg shadow-2xl shadow-purple-900/30 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span>Nouveau Ticket</span>
                  <Zap className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
          
          {/* Barre d'état */}
          <div className="mt-10 bg-white/80 rounded-3xl p-6 border border-gray-200/50 shadow-xl">
             <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-sm font-bold text-gray-700">Systèmes opérationnels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                  <span className="text-sm font-bold text-gray-700">Support 24/7</span>
                </div>
              </div>
              
              <div className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-200">
                Dernière connexion: {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {(showNotifications || showProfile) && (
        <div 
          className="fixed inset-0 z-30 bg-black/5 backdrop-blur-sm transition-opacity"
          onClick={() => {
            setShowNotifications(false);
            setShowProfile(false);
          }}
        ></div>
      )}
    </header>
  );
}