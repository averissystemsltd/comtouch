export type CostLine = { label: string; amount: number };

export type Tour = {
  slug: string;
  title: string;
  category: TourCategory;
  duration: string;
  arrival: string;
  meetingPoint: string;
  summary: string;
  intro: string;
  included: string[];
  howItRuns: string;
  basis: string;
  cost: CostLine[];
  total: number;
  goodToKnow: string;
};

export type TourCategory =
  "Fishing & water" | "Culture & dance" | "Conservation & nature" | "Village life" | "Eco-learning";

export const tourCategories: TourCategory[] = [
  "Fishing & water",
  "Culture & dance",
  "Conservation & nature",
  "Village life",
  "Eco-learning",
];

export const tours: Tour[] = [
  {
    slug: "fishing-crab-prawn-farming",
    title: "Fishing, Crab & Prawn Farming",
    category: "Fishing & water",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mkupe Jetty",
    summary:
      "Traditional fishing gear explained, the uzio trap, an actual fishing trip and the Tsunza Integrated Mariculture project.",
    intro:
      "Tsunza is introduced as a fishing village and community. Guides explain sea-water behaviour, the tides, as the indicator that controls the community's fishing habits, then you head out on the water.",
    included: [
      "Traditional fishing gear, explained alongside its environmental conservation practice",
      "Uzio, the traditional fish trap, explained and demonstrated",
      "An actual fishing experience out on the water",
      "Mariculture technology explained at the Tsunza Integrated Mariculture project",
    ],
    howItRuns:
      "Arrival is 9:00am for a full day out. After an introduction to the peninsula and the tides, the day moves from traditional gear to the mariculture cages offshore, with a local dance and lunch along the way.",
    basis: "group of 4",
    cost: [
      { label: "Boat transport (Mkupe to Maguzoni)", amount: 6000 },
      { label: "4 pax @ Ksh 4,000", amount: 16000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Lunch", amount: 2000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "1 local dance", amount: 6000 },
      { label: "Tour guide", amount: 1000 },
    ],
    total: 31150,
    goodToKnow:
      "Meeting point: Mkupe Jetty. Bring sun protection, a change of clothes and cash for craft purchases.",
  },
  {
    slug: "dhow-sailing",
    title: "Dhow Sailing (Scenic)",
    category: "Fishing & water",
    duration: "Half day",
    arrival: "8:00am or 2:00pm",
    meetingPoint: "Mkupe Jetty",
    summary: "A scenic sail from Mkupe jetty across the peninsula and its mangrove ecosystem.",
    intro:
      "A half-day sail that introduces Tsunza peninsula and its ecosystem, and the place of sailing in a scenic, tide-shaped environment.",
    included: [
      "Return dhow sailing from Mkupe jetty",
      "Introduction to the Tsunza peninsula and its ecosystem",
      "The importance of sailing and the scenic environment",
      "Mangrove seedling planting along the way",
    ],
    howItRuns:
      "Boats leave the jetty at 8:00am or 2:00pm. The sail traces the creek and its mangroves before returning to Mkupe.",
    basis: "2 guests",
    cost: [
      { label: "Boat", amount: 6000 },
      { label: "2 pax", amount: 7000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Tour guide", amount: 1000 },
    ],
    total: 14150,
    goodToKnow:
      "Departures depend on the tide. Bring sun protection and a hat, much of the sail is open water.",
  },
  {
    slug: "mangrove-conservation",
    title: "Mangrove Conservation",
    category: "Conservation & nature",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mkupe Jetty",
    summary:
      "Mangrove types and zonation, community involvement in conservation, and a visit to the craft village.",
    intro:
      "A full day on the mangrove ecosystem of Mwache-Tsunza: the community's role in conservation, the mangrove types and their zonation, and why mangroves matter locally and globally.",
    included: [
      "Identify the area of action for the day's planting",
      "The mangrove ecosystem of Mwache-Tsunza, explained",
      "Community involvement in conservation",
      "Mangrove types, zonation, and their role for community and coast",
      "Visit to the craft village, exhibition, craft-making techniques and buying",
    ],
    howItRuns:
      "Meet at Mkupe jetty at 9:00am. After an introduction to the ecosystem the group plants seedlings, then visits the craft village to see and buy work made by the community.",
    basis: "group",
    cost: [
      { label: "Boat transport from Maguzoni", amount: 6000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Tour guide", amount: 1000 },
      { label: "Lunch", amount: 2000 },
      { label: "1 local dance", amount: 6000 },
    ],
    total: 15150,
    goodToKnow:
      "Expect to get muddy at the planting site, closed shoes you don't mind wetting are ideal.",
  },
  {
    slug: "village-walk",
    title: "Village Walk",
    category: "Village life",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mkupe Jetty",
    summary: "Lifestyle, marriage customs, the farming calendar, kayas and herbal healers.",
    intro:
      "A full day inside village life: the polygamous lifestyle, marriage systems, and a farming season calendar, alongside visits to ecological and sacred sites.",
    included: [
      "Lifestyle and culture, including marriage systems",
      "The farming season calendar, explained by a local farmer",
      "Brief on the kayas and other ecological sites",
      "Women's social groups and their work",
      "Medicinal men and women, and herbal curing",
      "Food preparation, pounding and winnowing, with beading and weaving to try",
    ],
    howItRuns:
      "From Mkupe at 9:00am, the walk moves between homes, farms, shrines and kayas, with hands-on time pounding, winnowing, beading and weaving, and a local dance to close.",
    basis: "group",
    cost: [
      { label: "Boat (from Mkupe)", amount: 6000 },
      { label: "Marriage / polygamous facilitation", amount: 2000 },
      { label: "Shrines, kayas, madzi ga munyu", amount: 4000 },
      { label: "Local farmer", amount: 1000 },
      { label: "Pounding, winnowing, grating & cashew nut preparation", amount: 4000 },
      { label: "Beading and weaving", amount: 1000 },
      { label: "Lunch", amount: 500 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Tour guide", amount: 1000 },
      { label: "1 local dance", amount: 6000 },
    ],
    total: 25650,
    goodToKnow:
      "Sacred sites have protocols, your guide will brief you on where photography is welcome.",
  },
  {
    slug: "local-food-experience",
    title: "Local Food Experience",
    category: "Village life",
    duration: "Half day",
    arrival: "9:00am or 2:00pm",
    meetingPoint: "Mkupe Jetty",
    summary: "Pounding and winnowing, coconut grating and cashew nut preparation.",
    intro:
      "A half-day into the community's food varieties, hands-on from grain to coconut to cashew.",
    included: [
      "Introduction to the community's food varieties",
      "Pounding and winnowing",
      "Grating coconut",
      "Cashew nut preparation",
    ],
    howItRuns:
      "Arrive 9:00am or 2:00pm at Mkupe. The session is hands-on throughout, ending with the dishes you helped prepare.",
    basis: "group",
    cost: [
      { label: "Boat from Mkupe jetty", amount: 6000 },
      { label: "Food preparation", amount: 4500 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Tour guide", amount: 1000 },
    ],
    total: 11650,
    goodToKnow: "Let us know dietary needs in advance so the cooks can plan around them.",
  },
  {
    slug: "cultural-local-dance",
    title: "Cultural & Local Dance",
    category: "Culture & dance",
    duration: "Half day",
    arrival: "2:00pm",
    meetingPoint: "Mkupe Jetty",
    summary:
      "Rawawe, kayamba, ngoma ya mulungu and mdundiko performances, with a craft exhibition.",
    intro:
      "An afternoon exhibition of local dance on the Tsunza peninsula: Rawawe, kayamba, ngoma ya mulungu and mdundiko, alongside a craft exhibition.",
    included: [
      "Exhibition of local dance on the Tsunza peninsula",
      "Rawawe, kayamba, ngoma ya mulungu and mdundiko performances",
      "Craft exhibition",
    ],
    howItRuns:
      "The exhibition begins at 2:00pm. A minimum group of four keeps the troupes viable; five dances make up the full programme.",
    basis: "group, min 4 · 5 dances",
    cost: [
      { label: "Boat from Mkupe", amount: 6000 },
      { label: "Guide", amount: 1000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Minimum 4 pax", amount: 7500 },
      { label: "5 dances @ Ksh 6,000", amount: 30000 },
    ],
    total: 44550,
    goodToKnow:
      "This is a shared cultural performance, not a staged show, arrive ready to take part.",
  },
  {
    slug: "village-scenic-walk",
    title: "Village Scenic Walk",
    category: "Village life",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mkupe Jetty",
    summary: "Bonje / Mwache and the Goro V-shaped landmark, with local dance performances.",
    intro:
      "A full-day scenic walk through Bonje and Mwache to the Goro V-shaped landmark, with local dances and a craft exhibition that benefits the community directly.",
    included: [
      "Scenic walk through Bonje / Mwache",
      "The Goro V-shaped landmark",
      "Exhibition of local dances",
      "Crafts exhibition, direct community benefit",
    ],
    howItRuns:
      "From Mkupe at 9:00am. An alternative preferred route to Bonje is used when tides fluctuate, so the day runs whatever the water does.",
    basis: "group of 4 · 5 dances",
    cost: [
      { label: "Boat from Mkupe (alternative route to Bonje if tides fluctuate)", amount: 10000 },
      { label: "Guide", amount: 1000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "4 pax", amount: 7500 },
      { label: "5 dances @ Ksh 6,000", amount: 30000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Lunch", amount: 2000 },
    ],
    total: 50650,
    goodToKnow:
      "A full walking day over uneven ground, bring comfortable shoes and plenty of water.",
  },
  {
    slug: "dhow-rolling",
    title: "Dhow Rolling (Scenic)",
    category: "Conservation & nature",
    duration: "Half day (4 hours)",
    arrival: "9:00am or 2:00pm",
    meetingPoint: "Mkupe Jetty",
    summary: "Four hours along Tsunza-Mwache creek, mangrove species, zonation and birdwatching.",
    intro:
      "Four scenic hours along the Tsunza-Mwache creek and its beautiful meanderings, blended with different mangrove types, species zonation and birds. Capacity is a minimum of 2 and a maximum of 4.",
    included: [
      "The scenic beauty of Mwache creek",
      "Birdwatching",
      "Different species of mangroves and their zonation",
      "The ecological importance of mangroves to the community",
      "Crafts exhibition (community)",
    ],
    howItRuns:
      "Departs 9:00am or 2:00pm for a four-hour roll along the creek. Small groups only, two to four guests, for a quiet, close look at the mangroves and birdlife.",
    basis: "group, 2–4 guests",
    cost: [
      { label: "Dhow", amount: 7000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Guide", amount: 1000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "Local dance", amount: 6000 },
    ],
    total: 14150,
    goodToKnow:
      "Binoculars are worth bringing for the birdlife. Mornings are calmest for the water.",
  },
  {
    slug: "wine-tapping-tasting",
    title: "Wine Tapping & Tasting",
    category: "Culture & dance",
    duration: "Half day",
    arrival: "by 12:30pm",
    meetingPoint: "Mkupe Jetty",
    summary: "Meet the tapper, and learn the culture and livelihood behind palm wine.",
    intro:
      "A visit to Bonje to meet a palm-wine tapper. Guides explain the palm tree's role and importance to coastal communities, a source of livelihood and a variety of products, before the tapper demonstrates the whole process through to tasting.",
    included: [
      "The palm tree's role and importance to coastal communities",
      "Meeting the tapper, with the guide explaining as you go",
      "A demonstration of the full process, through to tasting",
      "How a palm is selected, production times and seasonal fluctuation",
      "Culture and wine, weddings, funerals, praising the dead, and passing knowledge to the youth",
      "Craft exhibition (community)",
    ],
    howItRuns:
      "A boat runs from Mkupe to Mwache (or an alternative route depending on tides) to reach Bonje, returning to Mkupe jetty by 12:30pm.",
    basis: "group",
    cost: [
      { label: "Boat Mkupe to Mwache (alternative route if tides fluctuate)", amount: 10000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Guide", amount: 1000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "2 local dances", amount: 12000 },
      { label: "Tapper", amount: 1500 },
    ],
    total: 24650,
    goodToKnow:
      "Tasting is optional and always your choice. The tapper's demonstration is the heart of the visit.",
  },
  {
    slug: "crafts-village",
    title: "Crafts Village",
    category: "Village life",
    duration: "Full day",
    arrival: "9:00am at Maguzoni",
    meetingPoint: "Mkupe Jetty",
    summary: "Weaving, carving, beading and local instruments, plus cultural dances.",
    intro:
      "A full day showing the crafts the community makes from local, nature-based resources to support their livelihoods and ease pressure on the environment: weaving, carving of dhows, drums and instruments, and cultural dances.",
    included: [
      "Showcasing the community's crafts and livelihoods",
      "Weaving",
      "Carving, dhow making, drum making and local instruments",
      "Beading",
      "Cultural dances",
      "Crafts exhibition (community)",
    ],
    howItRuns:
      "Arrival is 9:00am at Maguzoni, reached by boat from Mkupe (or an alternative route depending on tides). The day rotates through the craft stations with dances between.",
    basis: "group · 5 dances",
    cost: [
      { label: "Boat Mkupe to Mwache (alternative route if tides fluctuate)", amount: 6000 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Guide", amount: 1000 },
      { label: "Mangrove planting (Ksh 100 per seedling)", amount: 100 },
      { label: "5 local dances @ Ksh 6,000", amount: 30000 },
      { label: "Weaving", amount: 500 },
      { label: "Beading", amount: 500 },
      { label: "Carving", amount: 500 },
      { label: "Instruments", amount: 500 },
      { label: "Lunch", amount: 2000 },
    ],
    total: 41150,
    goodToKnow: "Bring cash, everything you see being made is for sale directly from the makers.",
  },
  {
    slug: "eco-learning-mwache-forest",
    title: "Eco-Learning: Mwache Forest",
    category: "Eco-learning",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mazeras (road to Mwache)",
    summary: "Tree species, medicinal value and the forest's ecological sites.",
    intro:
      "A full day of eco-learning in Mwache forest, reached by road through Mazeras. Guides explain the different tree species and their medicinal value, and the ecological sites within the forest.",
    included: [
      "Introduction to Mwache forest and eco-learning",
      "Different tree species and their medicinal value",
      "The ecological sites within Mwache forest",
      "Display of crafts for selling, and experience tasting",
    ],
    howItRuns:
      "Transport runs through Mazeras to Mwache for a 9:00am arrival. Groups are 5 to 10 people, with acrobats and dance during the day.",
    basis: "group of 5–10",
    cost: [
      { label: "5 to 10 pax", amount: 20000 },
      { label: "Guide", amount: 1000 },
      { label: "Tree seedlings (Ksh 200 each)", amount: 200 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Lunch (per person)", amount: 1000 },
      { label: "2 local dances / acrobats", amount: 12000 },
    ],
    total: 34250,
    goodToKnow:
      "Reached by road, not boat. Long trousers and closed shoes are best for the forest floor.",
  },
  {
    slug: "eco-learning-kaya-chonyi",
    title: "Eco-Learning: Kaya Chonyi",
    category: "Eco-learning",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Tsunza (road to Kaya Chonyi)",
    summary: "The role of the kayas, medicinal trees and the culture tied to them.",
    intro:
      "A full day of eco-learning in the sacred Kaya Chonyi, reached through Tsunza. Guides explain the role of the kayas for the community, the different tree species and their medicinal value, and the culture associated with the kayas.",
    included: [
      "The role of the kayas and the community",
      "Different tree species and their medicinal value",
      "The culture associated with the kayas",
      "Display of crafts for selling and experience tasting at TSUMBUCOFA multipurpose hall",
    ],
    howItRuns:
      "Transport runs through Tsunza to Kaya Chonyi for a 9:00am arrival. Groups are 5 to 10 people, closing with crafts and tasting at the TSUMBUCOFA hall.",
    basis: "group of 5–10",
    cost: [
      { label: "5 to 10 pax", amount: 20000 },
      { label: "Guide", amount: 1000 },
      { label: "Tree seedlings (Ksh 200 each)", amount: 200 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Lunch (per person)", amount: 1000 },
      { label: "2 local dances", amount: 12000 },
    ],
    total: 34250,
    goodToKnow:
      "Kaya Chonyi is a sacred forest, your guide will explain its protocols before you enter.",
  },
  {
    slug: "eco-learning-mwache-riverine-thicket",
    title: "Eco-Learning: Mwache Riverine Thicket",
    category: "Eco-learning",
    duration: "Full day",
    arrival: "9:00am",
    meetingPoint: "Mkupe Jetty",
    summary: "River Mwache, the Goro V-shape and its endemic tree species.",
    intro:
      "A full day of eco-learning along the Mwache riverine thicket, reached by boat from Mkupe to Mwache/Bonje. Guides explain River Mwache and Goro, the ecological sites, and the Goro V-shape with its endemic tree species.",
    included: [
      "River Mwache and Goro, and their different tree species",
      "The ecological sites along River Mwache",
      "The Goro V-shape and its endemic tree species",
      "Display of crafts for selling and experience tasting",
    ],
    howItRuns:
      "By boat from Mkupe to Mwache/Bonje for a 9:00am arrival. Groups are 5 to 10 people, with dance and acrobats during the day.",
    basis: "group of 5–10",
    cost: [
      { label: "5 to 10 pax", amount: 20000 },
      { label: "Guide", amount: 1000 },
      { label: "Mangrove seedlings (Ksh 100 each)", amount: 100 },
      { label: "Madafu (fresh coconut)", amount: 50 },
      { label: "Lunch (per person)", amount: 1000 },
      { label: "2 local dances / acrobats", amount: 12000 },
    ],
    total: 34150,
    goodToKnow: "Reached by boat, so timing follows the tide, we confirm departure on booking.",
  },
];

export const annualEvent = {
  title: "Ngoma ya Mulungu, Kaya Chonyi",
  summary:
    "A yearly cultural dance performed as prayer for rain and to ward off calamities like disease and drought.",
  detail:
    "Experience eco-learning of different tree species and their medicinal uses, the lifestyle of a Duruma, food types and their processing and value, and traditional dances that explain harvest and weddings.",
  bookingWindow: "Book between January and February.",
  arrival: "The 4th week of March.",
  prices: [
    { label: "Foreign visitor", amount: "Ksh 10,000 per person" },
    { label: "Local visitor", amount: "Ksh 5,000 per person" },
    { label: "Student (university / college)", amount: "Ksh 3,000 per student" },
  ],
};

export const ksh = (n: number) => `Ksh ${n.toLocaleString("en-KE")}`;

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
