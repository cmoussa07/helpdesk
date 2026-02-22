import { Mail, Phone, Clock, MapPin, Heart, Shield, Zap, Users, ExternalLink, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 mt-auto border-t border-slate-700/50">
      
      {/* 1. BANNIÈRE D'ACTION (Call to Action) */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Besoin d'une assistance immédiate ?
              </h3>
              <p className="text-slate-400 text-sm">
                Notre équipe support est disponible 24h/24 et 7j/7 pour vous aider.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Bouton Email */}
              <a 
                href="mailto:support_de_ib@example.com" 
                className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white text-sm">Envoyer un email</span>
              </a>

              {/* Bouton Téléphone */}
              <a 
                href="tel:+2250759496679" 
                className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-900/20"
              >
                <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white text-sm">Appeler maintenant</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. CONTENU PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Colonne 1: À Propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-lg">À Propos</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Votre partenaire de confiance pour toutes vos demandes d'assistance technique et support client.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 pt-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>Plus de 10,000 clients satisfaits</span>
            </div>
          </div>

          {/* Colonne 2: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Support technique 24/7",
                "Installation & Configuration",
                "Maintenance préventive",
                "Formation personnalisée"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-blue-400 rounded-full transition-colors"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Disponibilité */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              Disponibilité
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Lundi - Vendredi</span>
                <span className="text-slate-200 font-medium">24h/24</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Weekend</span>
                <span className="text-slate-200 font-medium">24h/24</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Jours fériés</span>
                <span className="text-slate-200 font-medium">24h/24</span>
              </div>
              
              <div className="flex items-center gap-2 mt-4 p-2.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-300 font-semibold">Tous les services actifs</span>
              </div>
            </div>
          </div>

          {/* Colonne 4: Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pink-400" />
              Contact
            </h4>
            <div className="space-y-4">
              <a href="mailto:support_de_ib@example.com" className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-slate-500 mt-0.5 group-hover:text-blue-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-white group-hover:text-blue-400 transition-colors">support_de_ib@example.com</p>
                </div>
              </a>
              <a href="tel:+2250759496679" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-slate-500 mt-0.5 group-hover:text-green-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500">Téléphone</p>
                  <p className="text-sm text-white group-hover:text-green-400 transition-colors">+225 07 59 49 66 79</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BARRE INFÉRIEURE (Copyright) */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>&copy; {new Date().getFullYear()} Centre d'Assistance</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                Développé avec <Heart className="w-3.5 h-3.5 text-red-500" /> par l'équipe IBRAHIM
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-600">Version 2.1.0</span>
              <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-400 font-medium">Système opérationnel</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bouton Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-slate-700 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}