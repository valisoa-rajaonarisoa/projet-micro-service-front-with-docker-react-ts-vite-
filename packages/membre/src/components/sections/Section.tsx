type Props = {}

const Section = (props: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Section du Tableau de Bord</h2>
      <p className="text-gray-600 mb-4">Bienvenue dans la section de votre tableau de bord ! Voici un aperçu des dernières informations.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Carte 1 */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800">Statistiques de Visite</h3>
          <p className="text-gray-600">Vous avez eu 150 visites aujourd'hui.</p>
        </div>

        {/* Carte 2 */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-800">Nouveaux Utilisateurs</h3>
          <p className="text-gray-600">25 nouveaux utilisateurs se sont inscrits cette semaine.</p>
        </div>

        {/* Carte 3 */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-yellow-800">Messages non lus</h3>
          <p className="text-gray-600">Vous avez 8 messages non lus.</p>
        </div>
      </div>
    </div>
  )
}

export default Section
