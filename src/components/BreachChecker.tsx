'use client';

import { useState } from 'react';
import { Search, Shield, AlertTriangle, CheckCircle, Loader } from 'lucide-react';

interface BreachResult {
  Name: string;
  Domain: string;
  BreachDate: string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: string[];
}

export default function BreachChecker() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<BreachResult[] | null>(null);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');
    setResults(null);
    setHasSearched(false);

    try {
      const response = await fetch(`/api/check-breach?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      if (response.ok) {
        setResults(data.breaches || []);
        setHasSearched(true);
      } else {
        setError(data.error || 'Une erreur est survenue');
      }
    } catch {
      setError('Erreur de connexion au service');
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Formulaire de recherche */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse email..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={isLoading || !validateEmail(email)}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                Vérification en cours...
              </>
            ) : (
              <>
                <Shield className="h-5 w-5" />
                Vérifier les fuites de données
              </>
            )}
          </button>
        </form>
      </div>

      {/* Erreur */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        </div>
      )}

      {/* Résultats */}
      {hasSearched && (
        <div className="space-y-6">
          {results && results.length === 0 ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Aucune fuite détectée ! 🎉
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Votre adresse email n&apos;apparaît dans aucune fuite de données connue.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Conseils pour rester protégé :
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Utilisez des mots de passe uniques et complexes</li>
                  <li>• Activez l&apos;authentification à deux facteurs</li>
                  <li>• Vérifiez régulièrement vos comptes</li>
                  <li>• Méfiez-vous des emails de phishing</li>
                </ul>
              </div>
            </div>
          ) : results && results.length > 0 ? (
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">
                    {results.length} fuite(s) détectée(s)
                  </h3>
                </div>
                <p className="text-orange-700 dark:text-orange-300">
                  Votre email a été trouvé dans les fuites suivantes :
                </p>
              </div>

              {results.map((breach, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {breach.Name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {breach.Description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Date :</span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {new Date(breach.BreachDate).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Comptes affectés :</span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {breach.PwnCount.toLocaleString('fr-FR')}
                          </span>
                        </div>
                      </div>
                      {breach.DataClasses && breach.DataClasses.length > 0 && (
                        <div className="mt-3">
                          <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                            Données compromises :
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {breach.DataClasses.map((dataClass, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs px-2 py-1 rounded"
                              >
                                {dataClass}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Conseils de sécurité après une fuite */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  🔒 Actions recommandées
                </h4>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">1.</span>
                    Changez immédiatement vos mots de passe sur tous les sites concernés
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">2.</span>
                    Activez l&apos;authentification à deux facteurs partout où c&apos;est possible
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">3.</span>
                    Surveillez vos comptes bancaires et relevés de carte de crédit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">4.</span>
                    Méfiez-vous des tentatives de phishing ciblées
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
