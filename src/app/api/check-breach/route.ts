import { NextRequest, NextResponse } from 'next/server';

// Interface pour les résultats de HaveIBeenPwned
interface BreachResult {
  Name: string;
  Domain: string;
  BreachDate: string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: string[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email requis' }, { status: 400 });
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 });
  }

  try {
    // Pour cette démo, nous simulons une réponse de l'API HaveIBeenPwned
    // En production, vous devriez utiliser la vraie API avec une clé API
    const response = await checkBreachesDemo(email);
    
    return NextResponse.json({ 
      email, 
      breaches: response,
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la vérification des fuites' }, 
      { status: 500 }
    );
  }
}

// Fonction de démonstration - remplacez par l'appel réel à l'API HaveIBeenPwned
async function checkBreachesDemo(email: string): Promise<BreachResult[]> {
  // Simulation d'un délai réseau
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Liste de fuites de démonstration
  const demoBreaches: BreachResult[] = [
    {
      Name: "Adobe",
      Domain: "adobe.com",
      BreachDate: "2013-10-04",
      PwnCount: 152445165,
      Description: "En octobre 2013, 153 millions de comptes Adobe ont été compromis dans l'une des plus grandes fuites de données de l'histoire. La fuite a exposé une multitude d'informations personnelles incluant les noms, adresses email, mots de passe chiffrés et indices de mots de passe.",
      LogoPath: "https://haveibeenpwned.com/Content/Images/PwnedLogos/Adobe.png",
      DataClasses: ["Email addresses", "Password hints", "Passwords", "Usernames"]
    },
    {
      Name: "LinkedIn",
      Domain: "linkedin.com", 
      BreachDate: "2012-05-05",
      PwnCount: 164611595,
      Description: "En mai 2012, LinkedIn a subi une fuite de données qui a initialement exposé 6,5 millions de mots de passe hachés. En 2016, il a été révélé que la fuite était beaucoup plus importante, avec 164 millions d'adresses email et de mots de passe exposés.",
      LogoPath: "https://haveibeenpwned.com/Content/Images/PwnedLogos/LinkedIn.png",
      DataClasses: ["Email addresses", "Passwords"]
    }
  ];

  // Simulation : retourne des fuites pour certains domaines d'email
  const domain = email.split('@')[1];
  const riskDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  
  if (riskDomains.includes(domain.toLowerCase())) {
    // Retourne une fuite aléatoire
    return Math.random() > 0.5 ? [demoBreaches[0]] : [];
  }
  
  return [];
}

// Pour utiliser la vraie API HaveIBeenPwned (nécessite une clé API) :
/*
async function checkBreachesReal(email: string): Promise<BreachResult[]> {
  const apiKey = process.env.HIBP_API_KEY;
  
  if (!apiKey) {
    throw new Error('Clé API HaveIBeenPwned non configurée');
  }

  const response = await fetch(
    `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`,
    {
      headers: {
        'hibp-api-key': apiKey,
        'User-Agent': 'Personal-Data-Breach-Checker'
      }
    }
  );

  if (response.status === 404) {
    return []; // Aucune fuite trouvée
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}
*/
