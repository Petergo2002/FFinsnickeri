export interface SecondaryCategory {
  slug: string;
  name: string;
  summary: string;
  homepageHeading: string;
  description: string;
  highlights: string[];
}

export interface CoreService {
  slug: string;
  name: string;
  summary: string;
  description: string;
  valueAngle: string;
  highlights: string[];
  relatedCategorySlugs: string[];
}

export interface ChildService {
  slug: string;
  name: string;
  summary: string;
  description: string;
  benefits: string[];
  reassurance: string;
  parentType: "category" | "core-service";
  parentSlug: string;
}

export interface Area {
  slug: string;
  name: string;
  summary: string;
  hasNoPage?: boolean;
}

export interface TrustPoint {
  title: string;
  body: string;
}

export interface ProjectCase {
  slug: string;
  title: string;
  location: string;
  service: string;
  summary: string;
  result: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  images: string[];
}

export const siteConfig = {
  businessName: "F.Finsnickeri",
  templateLabel: "Webbplats i Astro",
  tagline: "Skräddarsydda snickerilösningar för hem och utemiljö",
  mainCategory: "Finsnickeri",
  city: "Östra Frölunda",
  defaultDescription:
    "F.Finsnickeri i Östra Frölunda hjälper kunder i Borås och Svenljunga med fasadrenovering, altanbygge och uterum.",
  primaryPhone: "072-554 77 17",
  primaryEmail: "f.finsnickeri@gmail.com",
  address: "Östra Frölunda",
  hours: "Ring eller mejla för att boka tid",
  responseTime: "Snabb återkoppling",
  experience: "Tiotals års erfarenhet",
  serviceAreaLabel: "Borås, Svenljunga och Göteborg",
  footerNote:
    "F.Finsnickeri verkstaden är en sammanslutning av snickare med tiotals års erfarenhet av kvalitet, estetik och kundvärde. Hör av dig så hjälper vi dig med ditt nästa snickeriprojekt."
} as const;

export const secondaryCategories: SecondaryCategory[] = [
  {
    slug: "snickeriprojekt",
    name: "Snickeriprojekt",
    summary:
      "Fasadrenovering, altanbygge och uterum med fokus på kvalitet, estetik och kundvärde.",
    homepageHeading: "Snickerilösningar för hem och utemiljö",
    description:
      "Vi tar fram snickerilösningar som gör hemmet vackrare, mer användbart och mer harmoniskt, alltid anpassat efter önskemål och budget.",
    highlights: [
      "Genomtänkta lösningar som lyfter både funktion och helhetsintryck.",
      "Hantverk med fokus på kvalitet, tydlighet och kundens önskemål.",
      "Projekt som anpassas efter olika budgetar utan att tumma på resultatet."
    ]
  }
];

export const coreServices: CoreService[] = [
  {
    slug: "fasadrenovering",
    name: "Fasadrenovering",
    summary:
      "Vi renoverar fasader med fokus på hållbarhet, estetik och ett uttryck som passar huset.",
    description:
      "Fasadrenovering handlar om att bevara husets karaktär samtidigt som ytor, detaljer och funktion får nytt liv genom noggrant snickeriarbete.",
    valueAngle:
      "En välgjord fasadrenovering ger hemmet ett tydligt lyft och skapar en trygg grund för många år framöver.",
    highlights: [
      "Renovering av fasaddetaljer med omsorg om helheten.",
      "Lösningar som fungerar för olika hustyper och budgetar.",
      "Fokus på både skonsam förädling och lång hållbarhet."
    ],
    relatedCategorySlugs: ["snickeriprojekt"]
  },
  {
    slug: "altanbygge",
    name: "Altanbygge",
    summary:
      "Vi bygger altaner som förlänger hemmet ut i trädgården och skapar en trivsam plats att använda varje dag.",
    description:
      "Varje altan planeras för att passa husets form, markens förutsättningar och hur du vill leva och umgås utomhus.",
    valueAngle:
      "Ett genomtänkt altanbygge skapar mer livsyta, bättre flöde och en naturlig samlingsplats vid hemmet.",
    highlights: [
      "Altaner som anpassas efter plats, stil och användning.",
      "Tydlig planering för en trygg process från start till slut.",
      "Hantverk som kombinerar funktion, komfort och estetik."
    ],
    relatedCategorySlugs: ["snickeriprojekt"]
  },
  {
    slug: "uterum",
    name: "Uterum",
    summary:
      "Vi bygger uterum som skapar en ljus övergång mellan inne och ute och ger hemmet fler användbara månader.",
    description:
      "Ett uterum ska kännas som en naturlig del av huset och ge plats för vardag, vila och sociala stunder i en genomtänkt miljö.",
    valueAngle:
      "Med rätt uterum får du ett vackert och användbart tillskott som förhöjer både trivsel och vardagsliv.",
    highlights: [
      "Lösningar som tar vara på ljus, utsikt och husets karaktär.",
      "Utformning som balanserar funktion, design och budget.",
      "Noggrant utförande med fokus på ett harmoniskt slutresultat."
    ],
    relatedCategorySlugs: ["snickeriprojekt"]
  }
];

export const childServices: ChildService[] = [
  {
    slug: "fasadrenovering",
    name: "Fasadrenovering",
    summary:
      "Snickeriarbete som förnyar fasaden och lyfter husets uttryck med fokus på kvalitet och helhet.",
    description:
      "Vi ser över fasadens behov och tar fram en lösning som stärker husets karaktär och ger ett hållbart resultat över tid.",
    benefits: [
      "Förbättrar husets helhetsintryck och visuella balans.",
      "Anpassas efter material, stil och önskat slutresultat.",
      "Ger en trygg och genomtänkt uppgradering av fasaden."
    ],
    reassurance:
      "Vi arbetar med stor omsorg om detaljerna och planerar arbetet så att resultatet ska passa både huset och din budget.",
    parentType: "category",
    parentSlug: "snickeriprojekt"
  },
  {
    slug: "altanbygge",
    name: "Altanbygge",
    summary:
      "Altaner som förenar funktion och estetik och skapar en naturlig plats för vardag och umgänge.",
    description:
      "Vi bygger altaner med fokus på proportioner, användning och ett uttryck som smälter samman med huset och omgivningen.",
    benefits: [
      "Skapar en mer användbar utemiljö kring hemmet.",
      "Planeras utifrån hur du vill vistas och umgås utomhus.",
      "Ger ett stilrent och genomarbetat tillskott till huset."
    ],
    reassurance:
      "Varje projekt planeras tillsammans med dig så att altanen blir praktisk, vacker och rätt för platsen.",
    parentType: "category",
    parentSlug: "snickeriprojekt"
  },
  {
    slug: "uterum",
    name: "Uterum",
    summary:
      "Uterum som förlänger säsongen och skapar en ljus, skyddad och harmonisk del av hemmet.",
    description:
      "Vi bygger uterum som knyter samman inne och ute och ger dig en miljö som är lika användbar som inbjudande.",
    benefits: [
      "Ger mer plats för vardag, avkoppling och sociala tillfällen.",
      "Utformas efter husets stil och rummets funktion.",
      "Skapar ett ljust tillskott med tydligt kundvärde."
    ],
    reassurance:
      "Vi hjälper dig att hitta en lösning som fungerar estetiskt, praktiskt och ekonomiskt utifrån dina förutsättningar.",
    parentType: "category",
    parentSlug: "snickeriprojekt"
  }
];

export const areas: Area[] = [
  {
    slug: "boras",
    name: "Borås",
    summary:
      "Vi hjälper kunder i Borås med fasadrenovering, altanbygge och uterum med fokus på kvalitet, estetik och kundvärde."
  },
  {
    slug: "svenljunga",
    name: "Svenljunga",
    summary:
      "I Svenljunga utför vi snickeriprojekt som skapar vackra och användbara lösningar för hem och utemiljö."
  },
  {
    slug: "goteborg",
    name: "Göteborg",
    summary: "Vi utför även snickeriprojekt i Göteborg med omnejd.",
    hasNoPage: true
  }
];

export const trustPoints: TrustPoint[] = [
  {
    title: "Tiotals års erfarenhet",
    body:
      "F.Finsnickeri verkstaden är en sammanslutning av snickare med lång erfarenhet av kvalitet, estetik och kundvärde."
  },
  {
    title: "Vacker och användbar design",
    body:
      "Vi skapar inredningar och utemiljöer som lyfter rummens och hemmets skönhet och harmoni."
  },
  {
    title: "Lösningar för olika budgetar",
    body:
      "Vi är experter på att ta fram genomtänkta lösningar som fungerar för olika behov och ekonomiska ramar."
  },
  {
    title: "Kvalitet i varje detalj",
    body:
      "Vårt engagemang ligger i att leverera ett noggrant utfört arbete som håller över tid."
  },
  {
    title: "Tydlig dialog",
    body:
      "Vi lyssnar på dina önskemål och formar projektet tillsammans med dig från första idé till färdigt resultat."
  },
  {
    title: "Personligt engagemang",
    body:
      "Det är ett nöje för oss att hjälpa dig med ditt nästa snickeriprojekt, oavsett omfattning."
  }
];

export const projectCases: ProjectCase[] = [
  {
    slug: "fasadrenovering-villa-boras",
    title: "Fasadrenovering av villa",
    location: "Borås",
    service: "Fasadrenovering",
    summary:
      "En sliten fasad fick nytt liv genom noggrant snickeriarbete och ett genomtänkt helhetsgrepp.",
    result:
      "Fasaden fick ett renare uttryck, bättre balans i detaljerna och ett resultat som lyfter hela huset.",
    image: "https://media.knallens-fs.se/IMG_20240816_204139.jpg"
  },
  {
    slug: "altanbygge-boras",
    title: "Ny altan för sociala ytor",
    location: "Borås",
    service: "Altanbygge",
    summary:
      "Vi byggde en altan som skapade en tydlig övergång mellan huset och trädgården.",
    result:
      "Hemmet fick en mer användbar utemiljö och en naturlig plats för vardag, vila och umgänge.",
    image: "https://media.knallens-fs.se/IMG_20240429_202932.jpg"
  },
  {
    slug: "uterum-svenljunga",
    title: "Uterum med ljus och rymd",
    location: "Svenljunga",
    service: "Uterum",
    summary:
      "Ett uterum planerades för att ge familjen mer plats och ett mjukt möte mellan inne och ute.",
    result:
      "Projektet skapade ett ljust och harmoniskt rum som kan användas stora delar av året.",
    image: "https://media.knallens-fs.se/IMG_20250619_190619.jpg"
  },
  {
    slug: "fasadrenovering-svenljunga",
    title: "Förnyad fasad med tydlig karaktär",
    location: "Svenljunga",
    service: "Fasadrenovering",
    summary:
      "Vi tog fram en lösning som bevarade husets uttryck och samtidigt gav fasaden ett tydligt lyft.",
    result:
      "Helhetsintrycket blev varmare, mer sammanhållet och mer hållbart för framtiden.",
    image: "https://media.knallens-fs.se/Takomläggning.jpg"
  },
  {
    slug: "altanbygge-svenljunga",
    title: "Altan anpassad efter tomten",
    location: "Svenljunga",
    service: "Altanbygge",
    summary:
      "En ny altan formgavs efter husets proportioner och tomtens naturliga flöden.",
    result:
      "Familjen fick en bekväm och vacker plats för måltider, vila och sommarkvällar.",
    image: "https://media.knallens-fs.se/taktvatt.jpeg"
  },
  {
    slug: "uterum-boras",
    title: "Uterum som förlängde säsongen",
    location: "Borås",
    service: "Uterum",
    summary:
      "Vi byggde ett uterum som skapade mer ljus, mer rymd och en tydlig koppling till trädgården.",
    result:
      "Hemmet fick ett användbart tillskott med hög trivsel och ett uttryck som smälter samman med huset.",
    image: "https://media.knallens-fs.se/IMG_20250723_150752.jpg"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Pierre Vettese",
    role: "Review from Google · 5/5 · 4 years ago",
    text: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value. … More",
    images: ["/614375647ac319ed0e56d905.webp", "/614374637ac319ed0e56d8fc.webp"]
  },
  {
    name: "Renáta Mezei",
    role: "Review from Google · 5/5 · 2 years ago",
    text: "En mycket professionell och trevlig upplevelse. Resultatet blev över förväntan.",
    images: ["/6143762d4d2345a2251cc83d.webp", "/709d06fbbb16a3cd3e6b4d68fcf7094e40095ae8.webp"]
  },
  {
    name: "Enikő Mezei",
    role: "Review from Google · 5/5 · 4 years ago",
    text: "Rekommenderas varmt för alla snickeriprojekt. Hög kvalitet och bra pålitlighet.",
    images: ["/altan.webp", "/614374637ac319ed0e56d8fc.webp"]
  }
];

export interface KnallenUsp {
  title: string;
  body: string;
}

export interface KnallenProcessStep {
  title: string;
  body: string;
}

export interface KnallenService {
  slug: string;
  name: string;
  accent: string;
  heroSubtitle: string;
  about: string[];
  usps: KnallenUsp[];
  processSteps: KnallenProcessStep[];
  iconPath: string;
  image: string;
  aboutImage: string;
}

export const knallenServices: KnallenService[] = [
  {
    slug: "fasadrenovering",
    name: "Fasadrenovering",
    image: "/service-hero-fasad.webp",
    aboutImage: "/service-about-fasad.webp",
    accent: "orange",
    heroSubtitle:
      "Vi renoverar fasader med fokus på kvalitet, estetik och ett resultat som lyfter husets helhet.",
    about: [
      "F.Finsnickeri verkstaden är en sammanslutning av snickare med tiotals års erfarenhet av kvalitet, estetik och kundvärde. I fasadrenovering betyder det att vi ser till både detaljerna och helheten.",
      "Vårt mål är att förse våra kunder med vacker och användbar design för deras hem. När vi renoverar en fasad arbetar vi för att betona husets karaktär och skapa en harmonisk helhet.",
      "Vi är experter på att ta fram lösningar för olika budgetar. Med vårt engagemang för kvalitet och uppfyllande av våra kunders önskemål är det ett nöje att hjälpa dig med ditt nästa snickeriprojekt."
    ],
    usps: [
      {
        title: "Kvalitet och estetik",
        body: "Vi kombinerar noggrant hantverk med en tydlig känsla för proportioner, detaljer och helhetsintryck."
      },
      {
        title: "Lösningar för olika budgetar",
        body: "Projektet planeras så att resultatet blir genomtänkt och relevant utifrån dina ekonomiska ramar."
      },
      {
        title: "Erfarna snickare",
        body: "Verkstaden samlar snickare med lång erfarenhet av att skapa hållbara och vackra lösningar för hem."
      },
      {
        title: "Tydlig kunddialog",
        body: "Vi arbetar nära dig genom hela processen för att säkerställa att resultatet motsvarar dina önskemål."
      }
    ],
    processSteps: [
      {
        title: "Kontakt och genomgång",
        body: "Vi lyssnar på dina önskemål, ser över fasadens behov och skapar en tydlig bild av projektet."
      },
      {
        title: "Planering",
        body: "Lösningen anpassas efter husets karaktär, befintliga förutsättningar och din budget."
      },
      {
        title: "Utförande",
        body: "Arbetet genomförs noggrant med fokus på kvalitet, detaljer och ett harmoniskt slutresultat."
      },
      {
        title: "Färdigt projekt",
        body: "Du får en förnyad fasad som känns genomtänkt, vacker och användbar över tid."
      }
    ],
    iconPath: "M4 5h16M4 12h16M4 19h16"
  },
  {
    slug: "altanbygge",
    name: "Altanbygge",
    image: "/service-hero-altan.webp",
    aboutImage: "/614374637ac319ed0e56d8fc.webp",
    accent: "amber",
    heroSubtitle:
      "Vi bygger altaner som ger hemmet en naturlig samlingsplats och en vacker övergång till utemiljön.",
    about: [
      "Vi hjälper kunder att skapa altaner som är lika användbara som estetiskt genomtänkta. Varje projekt planeras efter hur platsen ska användas i vardagen.",
      "Vårt mål är att förse våra kunder med design som lyfter hemmet och skapar mer harmoni mellan hus, trädgård och sociala ytor.",
      "Med erfarenhet, kvalitetstänk och respekt för kundens önskemål tar vi fram altanlösningar som fungerar för olika budgetar och behov."
    ],
    usps: [
      {
        title: "Anpassat efter hemmet",
        body: "Vi formar altanen utifrån husets uttryck, tomtens förutsättningar och hur du vill leva på platsen."
      },
      {
        title: "Vacker och användbar design",
        body: "Altanen planeras för att kännas inbjudande, praktisk och naturlig i sin miljö."
      },
      {
        title: "Erfarenhet i varje steg",
        body: "Du får ett team som är vant att omsätta idéer till tydliga, hållbara lösningar."
      },
      {
        title: "Kundvärde i fokus",
        body: "Vi prioriterar det som ger verklig skillnad i vardagen och ett resultat du får glädje av lång tid framöver."
      }
    ],
    processSteps: [
      {
        title: "Idé och behov",
        body: "Vi går igenom hur du vill använda altanen och vilka förutsättningar platsen har."
      },
      {
        title: "Utformning",
        body: "Vi tar fram en lösning som balanserar funktion, estetik och budget."
      },
      {
        title: "Bygge",
        body: "Altanen byggs med noggrannhet och fokus på ett tryggt och genomarbetat resultat."
      },
      {
        title: "Klar att använda",
        body: "Du får en färdig altan som gör hemmet mer inbjudande och utemiljön mer användbar."
      }
    ],
    iconPath: "M3 20h18M5 20V8l7-4 7 4v12"
  },
  {
    slug: "uterum",
    name: "Uterum",
    image: "/service-hero-uterum.webp",
    aboutImage: "/service-about-uterum.webp",
    accent: "blue",
    heroSubtitle:
      "Vi bygger uterum som skapar mer ljus, mer plats och en lugn övergång mellan inne och ute.",
    about: [
      "Ett uterum ska inte bara ge fler kvadratmeter utan också mer vardagskvalitet. Därför planerar vi varje projekt med fokus på känsla, funktion och hur rummet ska användas.",
      "Vi vill skapa lösningar som betonar hemmets skönhet och harmoni. Ett uterum ska kännas som en naturlig del av huset och ge plats för både stillhet och sociala stunder.",
      "Med vårt engagemang för kvalitet och uppfyllande av våra kunders önskemål hjälper vi dig att hitta en uterumslösning som fungerar för både behov och budget."
    ],
    usps: [
      {
        title: "Ljus och rymd",
        body: "Vi utformar uterum som tar vara på utsikt, ljusinsläpp och kopplingen till utemiljön."
      },
      {
        title: "Harmonisk helhet",
        body: "Lösningen anpassas så att uterummet smälter samman med husets arkitektur och uttryck."
      },
      {
        title: "Lösningar efter behov",
        body: "Vi anpassar projektet efter hur du vill använda rummet och vilka prioriteringar du har."
      },
      {
        title: "Trygg process",
        body: "Från första idé till färdigt uterum arbetar vi med tydlighet, kvalitet och omtanke om detaljerna."
      }
    ],
    processSteps: [
      {
        title: "Första samtal",
        body: "Vi går igenom dina idéer, önskemål och hur uterummet ska fungera i vardagen."
      },
      {
        title: "Plan och upplägg",
        body: "Projektet formas utifrån husets stil, platsens förutsättningar och din budget."
      },
      {
        title: "Snickeriarbete",
        body: "Uterummet byggs med fokus på kvalitet, balans och ett slutresultat som känns genomtänkt."
      },
      {
        title: "Nytt rum att leva i",
        body: "Du får ett uterum som skapar mer trivsel, fler användbara månader och ett tydligt mervärde i hemmet."
      }
    ],
    iconPath: "M3 20h18M5 20V7h14v13M9 7V4h6v3"
  }
];

export function getKnallenServiceBySlug(slug: string) {
  return knallenServices.find((s) => s.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return secondaryCategories.find((category) => category.slug === slug);
}

export function getCoreServiceBySlug(slug: string) {
  return coreServices.find((service) => service.slug === slug);
}

export function getCategoryChildren(categorySlug: string) {
  return childServices.filter(
    (service) => service.parentType === "category" && service.parentSlug === categorySlug
  );
}

export function getCoreServiceChildren(coreServiceSlug: string) {
  return childServices.filter(
    (service) => service.parentType === "core-service" && service.parentSlug === coreServiceSlug
  );
}

export function getCategoryRelatedCoreServices(categorySlug: string) {
  return coreServices.filter((service) => service.relatedCategorySlugs.includes(categorySlug));
}

export function getServiceAreaPaths() {
  return areas.flatMap((area) =>
    [...coreServices, ...childServices].map((service) => ({
      area,
      service,
      slug: `/omraden/${area.slug}/${service.slug}`
    }))
  );
}
