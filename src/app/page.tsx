import BreachChecker from '@/components/BreachChecker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🔍 Personal Data Breach Checker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vérifiez si vos emails ont été compromis dans des fuites de données connues. 
            Protégez votre identité numérique avec des conseils personnalisés.
          </p>
        </div>
        
        <BreachChecker />
        
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sécurisé</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Aucune donnée n&apos;est stockée. Tout est vérifié de manière sécurisée.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rapide</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Vérification instantanée avec les dernières bases de données.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Conseils</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Recevez des recommandations personnalisées pour votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
