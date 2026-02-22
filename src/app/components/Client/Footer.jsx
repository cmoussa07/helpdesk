export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4 mt-6">
      <div className=" text-center text-gray-600">
        {/* &copy; {new Date().getFullYear()} Mon Projet. Tous droits réservés. */}
        <div className="text-center text-gray-600">
          <p>Besoin d'aide ? Notre équipe est disponible 24/7</p>
          <p className="mt-2">support_de_ib@example.com • +225 0759496679</p>
        </div>
      </div>
    </footer>
  );
}
