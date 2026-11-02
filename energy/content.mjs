// Editorial product selection. Source links and model-specific qualifiers travel with the content.
export const brands = [
  {
    slug: "tesla",
    name: "Tesla",
    category: "Opslag & laden",
    filter: ["opslag", "laden"],
    visual: "battery",
    kicker: "Powerwall · Wall Connector",
    title: "Energie voor thuis.\nKlaar voor onderweg.",
    intro:
      "Opslaan wanneer er energie is. Laden wanneer je auto thuis staat. We bekijken hoe Powerwall en Wall Connector passen bij jouw woning, aansluiting en dagelijks ritme.",
    card: "Thuisopslag en elektrisch laden, helder samengebracht.",
    benefits: [
      [
        "Energie bewaren",
        "Powerwall slaat elektriciteit op voor later gebruik.",
      ],
      [
        "Laden aan huis",
        "Wall Connector ondersteunt auto’s met een Type 2-laadpoort.",
      ],
      [
        "Inzicht in je systeem",
        "De Tesla-app biedt inzicht en bediening voor ondersteunde functies.",
      ],
    ],
    specs: [
      [
        "Powerwall",
        "13,5 kWh energiecapaciteit per unit; exacte uitvoering en uitbreiding volgens het actuele Nederlandse model.",
      ],
      [
        "Wall Connector",
        "Tot 22 kW op een geschikte driefasenaansluiting; de auto en aansluiting bepalen het werkelijke laadvermogen.",
      ],
      [
        "Aansturing laadpunt",
        "Wifi en Tesla-app. Dynamische vermogensregeling vereist een geschikte, afzonderlijke energiemeter.",
      ],
    ],
    installation:
      "We beginnen bij je hoofdaansluiting, meterkast en kabelroute. Daarna bepalen we de plek voor opslag en laadpunt. Een eventuele back-upfunctie vraagt om een afzonderlijk ontworpen configuratie; die is niet vanzelfsprekend voor de hele woning.",
    applications: [
      [
        "Woning met zonnepanelen",
        "Laat opwek, opslagcapaciteit en verbruiksprofiel samen beoordelen.",
      ],
      [
        "Eigen parkeerplek",
        "Een vaste laadplek vraagt om een veilige kabelroute en passende elektrische beveiliging.",
      ],
      [
        "Renovatie met energieplan",
        "Neem ruimte voor techniek en leidingroutes mee voordat de afwerking begint.",
      ],
    ],
    faq: [
      [
        "Heb ik een Tesla-auto nodig?",
        "Wall Connector kan laden via Type 2. Controleer ook het AC-laadvermogen van jouw auto; dat kan lager zijn dan het maximum van het laadpunt.",
      ],
      [
        "Kan ik bij stroomuitval blijven laden?",
        "Dat hangt af van de ontworpen back-upconfiguratie, beschikbaar vermogen en instellingen. We leggen vooraf vast welke functies en verbruikers worden ondersteund.",
      ],
      [
        "Zijn jullie officieel Tesla-installateur?",
        "We vermelden geen officiële partner- of certificeringsstatus. Eventuele vereiste merkautorisatie, levering en uitvoering worden vóór een opdracht bevestigd.",
      ],
    ],
    sources: [
      ["Tesla Nederland — Powerwall", "https://www.tesla.com/nl_nl/powerwall"],
      [
        "Tesla — Wall Connector",
        "https://shop.tesla.com/nl_nl/product/wall-connector",
      ],
    ],
    related: ["ecoflow", "peblar", "goodwe"],
  },
  {
    slug: "ecoflow",
    name: "EcoFlow",
    category: "Modulaire thuisopslag",
    filter: ["opslag"],
    visual: "stack",
    kicker: "PowerOcean",
    title: "Ruimte om\nmee te groeien.",
    intro:
      "Een energieplan hoeft niet in één keer af te zijn. We onderzoeken hoe modulaire opslag en monitoring aansluiten op jouw bestaande installatie én de volgende stap voor je woning.",
    card: "Modulaire opslag met overzicht in je energiegebruik.",
    benefits: [
      [
        "Modulair opgebouwd",
        "PowerOcean driefase start met een batterij van 5 kWh.",
      ],
      [
        "Zicht op energie",
        "Monitoring en bediening via de EcoFlow-app en het webportaal.",
      ],
      [
        "Binnen één ontwerp",
        "Opslag, omvormer en regeling worden als geheel geselecteerd.",
      ],
    ],
    specs: [
      [
        "Batterijtechniek",
        "LFP (lithium-ijzerfosfaat) voor PowerOcean driefase.",
      ],
      [
        "Capaciteitsopbouw",
        "Vanaf 5 kWh, uitbreidbaar tot 45 kWh voor de beschreven driefasevariant. Andere uitvoeringen hebben andere grenzen.",
      ],
      [
        "Uitvoering",
        "PowerOcean driefase; de juiste omvormer en batterijconfiguratie worden per woning bepaald.",
      ],
    ],
    installation:
      "We beoordelen of je bestaande zonnepanelen en omvormer behouden kunnen blijven. PowerOcean, een eventuele retrofit-oplossing en andere EcoFlow-producten zijn geen onderling uitwisselbare sets. We selecteren het exacte systeem op basis van de fabrikantdocumentatie.",
    applications: [
      [
        "Gefaseerd verduurzamen",
        "Begin met een passende capaciteit en bespreek voorwaarden voor latere uitbreiding.",
      ],
      [
        "Inzicht gewenst",
        "Bespreek welke meetgegevens je wilt volgen en hoe de verbinding wordt ingericht.",
      ],
      [
        "Nieuwe zonne-installatie",
        "Ontwerp zonnepanelen, omvormer en opslag tegelijk, inclusief beschikbare ruimte.",
      ],
    ],
    faq: [
      [
        "Kan PowerOcean op elke omvormer?",
        "Nee. Compatibiliteit verschilt per uitvoering. We controleren jouw omvormermodel en de geldende fabrikantdocumentatie voordat we een combinatie voorstellen.",
      ],
      [
        "Kan ik later batterijmodules toevoegen?",
        "De driefase-oplossing is modulair. De mogelijkheid tot uitbreiden hangt af van model, bestaande configuratie en de dan geldende installatievoorwaarden.",
      ],
      [
        "Is back-up standaard inbegrepen?",
        "De fabrikant ondersteunt back-upmogelijkheden. Benodigde onderdelen, schakeling en beschikbare vermogens worden apart in het systeemontwerp vastgelegd.",
      ],
    ],
    sources: [
      [
        "EcoFlow — PowerOcean driefase",
        "https://energy.ecoflow.com/eu/products/powerocean",
      ],
      [
        "EcoFlow — technische brochure driefase",
        "https://enterprise-service-eu-cdn.ecoflow.com/enterprise/documentation/1750226952533/PowerOcean%20%28three-phase%29_Brochure_20250106_EN_View.pdf",
      ],
    ],
    related: ["tesla", "goodwe", "peblar"],
  },
  {
    slug: "goodwe",
    name: "GoodWe",
    category: "Zon & opslag",
    filter: ["opslag", "zon"],
    visual: "hybrid",
    kicker: "Hybride omvormers · Lynx",
    title: "Van zon op het dak\nnaar energie in huis.",
    intro:
      "Zonnepanelen wekken gelijkstroom op. De omvormer maakt die bruikbaar voor je woning. Met passende opslag voeg je een volgende stap toe: energie bewaren voor een ander moment.",
    card: "Hybride omvorming en Lynx-opslag als afgestemd systeem.",
    benefits: [
      [
        "Hybride systeemkeuze",
        "Een geschikte hybride omvormer verbindt zonnepanelen en batterij.",
      ],
      ["Lynx-opslag", "De Lynx Home F Plus+ gebruikt stapelbare LFP-modules."],
      [
        "Compatibiliteit eerst",
        "De gekozen omvormer bepaalt welke batterijcombinaties mogelijk zijn.",
      ],
    ],
    specs: [
      [
        "Voorbeeldserie",
        "Lynx Home F Plus+ — LX F6.6-H, F9.8-H, F13.1-H en F16.4-H.",
      ],
      [
        "Bruikbare energie",
        "6,55 / 9,83 / 13,10 / 16,38 kWh volgens het serieblad; testcondities en gekoppelde omvormer zijn van invloed.",
      ],
      [
        "Batterijchemie",
        "LFP (LiFePO4). Omvormerkeuze en firmware volgens de actuele compatibiliteitslijst.",
      ],
    ],
    installation:
      "We bekijken de dakindeling, strings, aansluiting en het bestaande verbruik. Vervolgens selecteren we een passende hybride omvormer en Lynx-batterij. Niet iedere Lynx-serie past op iedere GoodWe-omvormer; model én firmware moeten overeenkomen.",
    applications: [
      [
        "Nieuwe zonnepanelen",
        "Neem opslagvoorbereiding mee in het omvormer- en meterkastontwerp.",
      ],
      [
        "Bestaande opwek uitbreiden",
        "Controleer of behoud, vervanging of een andere koppeling technisch passend is.",
      ],
      [
        "Meer eigen energie gebruiken",
        "Dimensioneer de batterij op je dagprofiel, niet alleen op het aantal panelen.",
      ],
    ],
    faq: [
      [
        "Wat doet een hybride omvormer?",
        "Hij verzorgt de omzetting van zonnestroom en de koppeling met een compatibele batterij. Welke energiestromen worden ondersteund, hangt af van het specifieke model en ontwerp.",
      ],
      [
        "Past elke Lynx-batterij bij mijn GoodWe?",
        "Nee. We controleren het volledige modelnummer, de serie en software aan de hand van de actuele GoodWe-compatibiliteitslijst.",
      ],
      [
        "Levert een grotere batterij altijd meer op?",
        "Nee. Capaciteit moet passen bij opwek en verbruik. We doen geen rendements- of terugverdienbelofte zonder een onderbouwde berekening voor jouw situatie.",
      ],
    ],
    sources: [
      ["GoodWe — Lynx Home F", "https://en.goodwe.com/lynx-f"],
      [
        "GoodWe — batterijcompatibiliteit EMEA",
        "https://emea.goodwe.com/Ftp/EN/Downloads/User%20Manual/GW_Battery%20Compatibility%20Overview-EMEA_EN.pdf",
      ],
    ],
    related: ["ecoflow", "tesla", "peblar"],
  },
  {
    slug: "peblar",
    name: "Peblar",
    category: "Slim thuisladen",
    filter: ["laden"],
    visual: "charger",
    kicker: "Peblar Home",
    title: "Thuiskomen.\nAansluiten. Opladen.",
    intro:
      "Een laadpunt hoort vanzelfsprekend bij je woning te passen. We plannen de kabelroute, de plek aan de gevel of op een paal en de beschikbare ruimte op je aansluiting.",
    card: "Een doordacht laadpunt voor je eigen parkeerplek.",
    benefits: [
      ["Laden met overzicht", "Lokale webinterface via wifi of ethernet."],
      [
        "Vermogen afstemmen",
        "Dynamische load balancing met een geschikte meetkoppeling.",
      ],
      [
        "Zonnestroom benutten",
        "Ondersteunde solar-laadmodus na correcte meting en configuratie.",
      ],
    ],
    specs: [
      [
        "Peblar Home",
        "3,7 kW op één fase of tot 11 kW op drie fasen volgens de huidige Home-productpagina.",
      ],
      [
        "Aansluiting auto",
        "Vaste Type 2-kabel; uitvoeringen met 5 of 7,5 meter kabel.",
      ],
      [
        "Koppelingen",
        "OCPP 1.6-J; load balancing via ondersteunde P1-, CT- of Modbus-meting. Accessoires en instellingen zijn configuratieafhankelijk.",
      ],
    ],
    installation:
      "We controleren de hoofdzekering, faseverdeling, kabelafstand en de plek van het laadpunt. Load balancing vraagt om betrouwbare meting van het totale huisverbruik. Koppeling aan een batterij of energiemanagementsysteem wordt afzonderlijk geverifieerd.",
    applications: [
      [
        "Oprit of carport",
        "Kies een bereikbare laadplek zonder kabel over een openbare doorgang.",
      ],
      [
        "Zonnepanelen aanwezig",
        "Laat meting en laadinstellingen op jouw opwek en verbruik afstemmen.",
      ],
      [
        "Woning met meerdere grote verbruikers",
        "Stem het laden af op bijvoorbeeld koken en verwarmen.",
      ],
    ],
    faq: [
      [
        "Is ieder Peblar-laadpunt 22 kW?",
        "Nee. De huidige Home-productpagina noemt maximaal 11 kW op drie fasen. Andere series of uitvoeringen kunnen andere vermogens hebben. De offerte vermeldt het exacte model.",
      ],
      [
        "Wat is load balancing?",
        "De laadstroom wordt aangepast op basis van het gemeten huisverbruik. De meetmethode, instellingen en beschikbare aansluitcapaciteit bepalen hoe dat in jouw woning werkt.",
      ],
      [
        "Kan Peblar direct met elke thuisbatterij praten?",
        "Dat is geen algemene garantie. De ondersteunde protocollen vormen een basis; de concrete EMS- en batterijkoppeling moet worden gecontroleerd.",
      ],
    ],
    sources: [
      ["Peblar — Home en specificaties", "https://peblar.com/chargers/home"],
      ["Peblar — integraties", "https://peblar.com/integrations"],
    ],
    related: ["tesla", "ecoflow", "goodwe"],
  },
  {
    slug: "samsung",
    name: "Samsung",
    category: "Warmtepompen",
    filter: ["warmte"],
    visual: "heatpump",
    kicker: "EHS Mono R290",
    title: "Comfort dat past\nbij je woning.",
    intro:
      "Een warmtepomp kiezen begint bij de woning. We beoordelen warmteverlies, isolatie, radiatoren of vloerverwarming en de beschikbare buitenruimte voordat we een uitvoering voorstellen.",
    card: "Monoblock-techniek voor een doordacht verwarmingsplan.",
    benefits: [
      [
        "Lucht-watertechniek",
        "EHS Mono R290 haalt warmte uit de buitenlucht voor een watergedragen systeem.",
      ],
      ["Monoblock-opbouw", "Het koelcircuit bevindt zich in de buitenunit."],
      [
        "Passend dimensioneren",
        "Vermogen en watertemperatuur volgen uit het ontwerp van de woning.",
      ],
    ],
    specs: [
      [
        "Koudemiddel",
        "R290, volgens Samsung en het EHS Mono R290-serieblad van Ambrava.",
      ],
      [
        "Modelreeks",
        "5 / 8 / 12 / 16 kW nominale verwarmingscapaciteit bij A7/W35 volgens het Ambrava-serieblad; beschikbaarheid en fase-uitvoering per model.",
      ],
      [
        "Watertemperatuur",
        "Tot 75 °C binnen de opgegeven bedrijfscondities. Dit maximum is geen advies om continu op hoge temperatuur te verwarmen.",
      ],
    ],
    installation:
      "We maken eerst een warmteverlies- en afgiftebeoordeling. Daarna volgen opstelplek, waterzijdig schema, elektra en regeling. Rond R290-apparatuur gelden plaatsings- en veiligheidsvoorwaarden; we nemen die mee in het ontwerp en controleren de actuele installatiehandleiding.",
    applications: [
      [
        "Renovatie met isolatieplan",
        "Stem warmtebron, isolatie en afgiftesysteem op elkaar af.",
      ],
      [
        "Watergedragen verwarming",
        "Beoordeel of bestaande radiatoren of vloerverwarming geschikt zijn.",
      ],
      [
        "All-electric onderzoeken",
        "Neem warm tapwater, boilerruimte en aansluitcapaciteit mee in het plan.",
      ],
    ],
    faq: [
      [
        "Kan ik mijn bestaande radiatoren houden?",
        "Soms wel. Dat vraagt om beoordeling van warmteverlies en radiatorvermogen bij de geplande watertemperatuur. Alleen een hoge maximale temperatuur zegt onvoldoende.",
      ],
      [
        "Hoe stil is deze warmtepomp?",
        "Dat verschilt per model, instelling, afstand en plaatsing. We gebruiken modelgebonden geluidsgegevens en beoordelen de opstelplek; één algemeen decibelgetal zou misleidend zijn.",
      ],
      [
        "Is ieder huis geschikt voor all-electric?",
        "Dat volgt uit de woningopname. Isolatie, afgifte, warmwaterbehoefte en elektrische capaciteit bepalen of all-electric passend is.",
      ],
    ],
    sources: [
      [
        "Ambrava — Samsung EHS Mono R290 serieblad",
        "https://ambrava.nl/wp-content/uploads/2024/02/Samsung-EHS-Mono-R290-Leaflet-Ambrava-web.pdf",
      ],
      [
        "Samsung — EHS Mono R290 technische documentatie",
        "https://partnerhub.samsung.com/s/content/aBN2y0000008RtrGAE/tdb-ehs-mono-r290-pump-for-europe-r290-50hz-hp?language=en_US",
      ],
    ],
    related: ["whspr", "goodwe", "ecoflow"],
  },
  {
    slug: "whspr",
    name: "Whspr",
    category: "Hybride warmte",
    filter: ["warmte"],
    visual: "compact",
    kicker: "Hybride monoblock",
    title: "Klein van formaat.\nRustig op zijn plek.",
    intro:
      "Voor een rijwoning telt elke meter. We onderzoeken hoe een compacte hybride warmtepomp naast je bestaande cv-ketel past, met aandacht voor de buren, leidingroutes en dagelijks comfort.",
    card: "Compacte hybride warmte, ontworpen voor de rijwoning.",
    benefits: [
      ["Hybride aanpak", "Whspr-regeling kiest tussen warmtepomp en cv-ketel."],
      ["Compact ontwerp", "Een monoblock voor de Nederlandse rijwoning."],
      [
        "Aandacht voor geluid",
        "Stille werking is een ontwerpfocus; de echte opstelplek blijft bepalend.",
      ],
    ],
    specs: [
      [
        "Systeem",
        "Hybride lucht-watermonoblock met R290, voor ruimteverwarming. Warm tapwater via de cv-ketel.",
      ],
      [
        "Warmtevermogen",
        "4 kW volgens de fabrikant. COP 4,81 bij A7/W35; prestaties zijn afhankelijk van bedrijfscondities en installatie.",
      ],
      [
        "Afmetingen buitenunit",
        "592 × 592 × 823 mm. Inclusief BigFoot-opstelvoeten: 592 × 600 × 922 mm. Vrije opstel- en veiligheidsruimte komen daar nog bij.",
      ],
      [
        "Elektrische aansluiting",
        "230 V; maximaal elektrisch vermogen 1,7 kW. Groep, beveiliging en aansluiting beoordelen we voor jouw situatie.",
      ],
      [
        "Geluid",
        "Maximaal geluidsvermogen 51 dB(A); in nachtmodus 45 dB(A) bij 2 kW thermisch vermogen volgens handleiding v1.2. Dit zijn geen geluidsdrukwaarden op de erfgrens.",
      ],
      [
        "Regeling",
        "Bijgeleverde Whspr-thermostaat; ketelaansturing via OpenTherm of aan/uit volgens de juiste configuratie.",
      ],
    ],
    installation:
      "We beoordelen ketelcompatibiliteit, afgiftesysteem, buitenruimte en leidingroutes. Het compacte concept kan de uitvoering vereenvoudigen, maar installatieduur en benodigde aanpassingen hangen af van jouw woning. Beschikbaarheid en definitieve uitvoering bevestigen we vóór een opdracht.",
    applications: [
      [
        "Nederlandse rijwoning",
        "Bekijk de plaatsingsruimte én de akoestische situatie bij aangrenzende woningen.",
      ],
      [
        "Cv-ketel behouden",
        "Onderzoek een hybride stap met de bestaande warmtevoorziening.",
      ],
      [
        "Beperkte technische ruimte",
        "Neem vrije ruimte, bereikbaarheid en onderhoudstoegang mee in de afweging.",
      ],
    ],
    faq: [
      [
        "Kan mijn cv-ketel weg?",
        "De beschreven Whspr is een hybride oplossing. De regeling kiest tussen warmtepomp en cv-ketel; de ketel blijft onderdeel van het systeem en verzorgt warm tapwater.",
      ],
      [
        "Past Whspr direct tegen de schutting?",
        "Niet zonder beoordeling. De aangeleverde handleiding noemt 30 cm vrije ruimte rondom voor luchtstroom en aparte R290-veiligheidsafstanden. Ook hoeken, openingen en de buren tellen mee. We controleren de actuele voorschriften voor jouw plek.",
      ],
      [
        "Heb ik een andere thermostaat nodig?",
        "De beschreven uitvoering gebruikt de bijgeleverde Whspr-thermostaat. Of en hoe de cv-ketel aangesloten kan worden, controleren we vooraf.",
      ],
      [
        "Is er een app nodig?",
        "De brochure beschrijft bediening via de eigen thermostaat, zonder benodigde gebruikersapp. De unit heeft volgens de fabrikant een eSIM voor monitoring via het installateursportaal. Beschikbare functies en serviceafspraken bevestigen we in het voorstel.",
      ],
      [
        "Hoeveel bespaar ik?",
        "Dat hangt af van warmtebehoefte, energietarieven, ketel, afgiftesysteem en regeling. We doen geen vaste besparingsbelofte op basis van een brochuregetal.",
      ],
      [
        "Is de installatie altijd in één dag klaar?",
        "Dat hangt af van de woning en benodigde aanpassingen. Leidingroutes, elektra, ketelcompatibiliteit en opstelplek beoordelen we eerst. Beschikbaarheid, planning en scope leggen we vast in het voorstel.",
      ],
    ],
    sources: [
      ["Whspr — systeem en fabrikantgegevens", "https://whspr.net/"],
      ["Whspr — installatieconcept", "https://whspr.net/installateurs/"],
    ],
    related: ["samsung", "ecoflow", "peblar"],
  },
];

export const landingFAQ = [
  [
    "Waar begin ik: zonnepanelen, een batterij of een laadpunt?",
    "Begin bij je woning, jaarverbruik en plannen. Bestaande zonnepanelen, een elektrische auto of een aanstaande renovatie kunnen de volgorde veranderen. We helpen je een passende eerste stap te kiezen.",
  ],
  [
    "Werken al deze merken met elkaar samen?",
    "Niet automatisch. We selecteren per ontwerp passende modellen, meetapparatuur en regeling. We controleren fabrikantcompatibiliteit, firmware en eventuele EMS-koppelingen voordat we een combinatie voorstellen.",
  ],
  [
    "Kan ik mijn bestaande zonnepanelen houden?",
    "Dat hangt af van de panelen, omvormer en gekozen opslag. We beoordelen eerst de bestaande installatie, zodat duidelijk is wat behouden kan blijven en welke aanpassingen nodig zijn.",
  ],
  [
    "Wat kost een compleet energiesysteem?",
    "De prijs hangt af van vermogen, opslag, bekabeling, meterkast, plaatsing en gewenste functies. Je ontvangt een voorstel met scope en onderdelen; we publiceren geen niet-onderbouwde besparingen of terugverdientijden.",
  ],
  [
    "Werken jullie in Utrecht en omgeving?",
    "Ja, onze focus ligt op Utrecht, De Meern en omgeving. Vermeld je woonplaats en plannen in je aanvraag, dan bespreken we de mogelijkheden.",
  ],
];
