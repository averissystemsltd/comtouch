export const contact = {
  email: "info@comtouchkenya.org",
  phone: "+254 700 000 000",
  whatsapp: "+254 700 000 000",
  departures: "Departures from Mkupe Jetty, Mombasa",
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const orgBlurb =
  "A community-based environmental organisation restoring mangroves, advancing mariculture and sustaining coastal livelihoods on the Tsunza-Mwache peninsula in Kwale County.";

export const faqs = [
  {
    q: "What can I do on a tour?",
    a: "Sail a dhow across the creek, fish with traditional gear, plant mangroves, share a meal cooked the local way, and watch dances like Rawawe, kayamba, ngoma ya mlungu and mdundiko. Thirteen experiences span fishing, culture, food, conservation and eco-learning.",
  },
  {
    q: "Where does the money go?",
    a: "Straight to the community. Guides, cooks, dance troupes and craftspeople are paid directly, and every tour plants mangroves, with Ksh 100 of each seedling going to the nursery.",
  },
  {
    q: "How do I get there?",
    a: "Most experiences leave by boat from Mkupe jetty in Mombasa and cross to the Tsunza-Mwache peninsula in Kwale County. A few eco-learning days are reached by road. We confirm the meeting point and tide-dependent timing when you book.",
  },
  {
    q: "Is ComTouch only about tourism?",
    a: "No. Eco-tourism is how visitors experience the coast and how the work is funded, but our mission is restoring mangroves and building sustainable coastal livelihoods, alongside research and conservation.",
  },
  {
    q: "When is the best time to visit?",
    a: "Experiences run year-round, timed to the daily tide. The annual Ngoma ya Mulungu event at Kaya Chonyi is booked between January and February for arrival in late March.",
  },
];

export const keywordBand = [
  "Traditional Dances",
  "Dhow Sailing",
  "Fishing & Crab Farming",
  "Mangrove Restoration",
  "Palm Wine Tapping",
  "Sacred Kaya Forests",
  "Craft Village",
  "Eco-Learning",
];

export const mediaGroups = [
  {
    group: "Fishing & farming",
    clips: [
      "Casting hand lines at dawn",
      "Setting an uzio fish trap",
      "Inside the Tsunza Integrated Mariculture project",
    ],
  },
  {
    group: "Sailing & the creek",
    clips: [
      "Dhow sailing at sunset",
      "Dhow rolling through Tsunza-Mwache creek",
      "Birdwatching among the mangroves",
    ],
  },
  {
    group: "Culture & dance",
    clips: [
      "Rawawe and kayamba performance",
      "Ngoma ya Mulungu, the rain dance at Kaya Chonyi",
      "Meeting the palm wine tapper",
    ],
  },
  {
    group: "Conservation & community",
    clips: [
      "Planting mangrove seedlings",
      "Weaving and carving at the craft village",
      "Pounding, winnowing and cashew nut preparation",
    ],
  },
];

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    intro:
      "The terms that apply to every enquiry and booking, to be read alongside Payment Terms, Disclaimer and Privacy.",
    sections: [
      { heading: "About these terms", body: "These terms govern every enquiry, quote and confirmed booking made with ComTouch Kenya, and should be read alongside our Payment Terms, Disclaimer and Privacy & Data Protection policy." },
      { heading: "Our experiences", body: "All experiences are community-led on the Tsunza-Mwache peninsula, delivered by guides, dance troupes, cooks and craftspeople from the community." },
      { heading: "Enquiries and confirmation", body: "An enquiry is not a confirmed booking until we acknowledge it in writing and any deposit is received." },
      { heading: "Prices and what is included", body: "All prices are quoted in Kenya Shillings. Each tour lists a full cost breakdown covering boat transport, guide fees, dances, meals where stated and mangrove seedlings." },
      { heading: "Group sizes and minimums", body: "Some experiences carry minimum or maximum group sizes, noted on the tour page. Minimums keep dance troupes and boats viable." },
      { heading: "Weather, tides and changes", body: "This is a tidal environment. Timings and routes may change for safety, and we will always offer the nearest workable alternative." },
      { heading: "Changes or cancellation by you", body: "Tell us as early as you can. Cancellation outcomes are set out in the Payment Terms." },
      { heading: "Conduct, culture and the environment", body: "Follow your guide, respect sacred sites and their protocols, plant your seedling, take your litter with you, and treat the community with respect." },
      { heading: "Health, safety and water activities", body: "Tell us in advance about non-swimmers, pregnancy, medical or mobility needs so we can plan the day safely." },
      { heading: "Liability", body: "We take reasonable care in delivering every experience. Our liability is limited to the value of the confirmed booking, to the extent permitted by law." },
      { heading: "Photography and media", body: "Ask before photographing people, and follow guidance at sacred sites where photography may not be welcome." },
      { heading: "Intellectual property", body: "Website content, images and written material remain the property of ComTouch Kenya and its contributors." },
      { heading: "Governing law", body: "These terms are governed by the laws of Kenya." },
      { heading: "Contact", body: "Questions about these terms can be sent to info@comtouchkenya.org." },
    ],
  },
  {
    slug: "payment-terms",
    title: "Payment Terms",
    intro:
      "How pricing, deposits, balances, refunds and cancellations work; part of the Terms & Conditions.",
    sections: [
      { heading: "Currency and quotes", body: "All prices are in Kenya Shillings. A final quote is confirmed for your group size and dates before any payment is made." },
      { heading: "Confirming your booking", body: "A 30% deposit holds a date. The balance is due before departure." },
      { heading: "How to pay", body: "Payment details, for example an M-Pesa number or bank account, are shared on confirmation. No card payments are taken online. Never send money to an account that has not been confirmed with us directly in writing." },
      { heading: "What the price includes", body: "Boat transport, guide, dances, meals where stated, and a mangrove seedling. Ksh 100 of every seedling goes to the community nursery." },
      { heading: "Cancellations and refunds", body: "14+ days before departure: full refund less non-recoverable costs. 7–13 days: deposit retained, balance refunded. Under 7 days or no-show: no refund. Seedling contributions are non-refundable." },
      { heading: "If we change or cancel", body: "We will offer a suitable alternative or a full refund of the undelivered part of the experience." },
      { heading: "Event tourism", body: "Ngoma ya Mulungu has its own January–February booking window and per-person pricing." },
      { heading: "Receipts and questions", body: "Receipts are issued for every payment. Contact us with any question about a quote or a refund." },
    ],
  },
  {
    slug: "privacy-and-data-protection",
    title: "Privacy & Data Protection",
    intro:
      "How personal data is collected, used and protected, in line with the Kenya Data Protection Act, 2019.",
    sections: [
      { heading: "Who we are", body: "ComTouch Kenya, a community-based environmental organisation on the Tsunza-Mwache peninsula, Kwale County, Kenya." },
      { heading: "What we collect", body: "Contact details, trip details, correspondence and basic analytics. No card or bank details are taken through this site." },
      { heading: "Why we use it, and the lawful basis", body: "To respond to enquiries, arrange trips and meet our obligations, on the basis of your consent and our legitimate interest in running the organisation." },
      { heading: "Who we share it with", body: "Only the community members needed to run a tour, and service providers who help us operate. Data is never sold." },
      { heading: "How long we keep it", body: "Only as long as needed to arrange your trip and meet record-keeping obligations." },
      { heading: "Your rights", body: "To be informed, to access, correct, delete, object to or restrict processing, to portability, and to complain to the Office of the Data Protection Commissioner." },
      { heading: "Keeping your data safe", body: "We apply reasonable technical and organisational measures to protect personal data." },
      { heading: "Children", body: "This site is not directed at children, and we do not knowingly collect their data." },
      { heading: "Changes to this policy", body: "Any change is published here with an updated date." },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    intro: "How cookies and similar technologies are used.",
    sections: [
      { heading: "What cookies are", body: "Small files stored by your browser that help a website function and understand usage." },
      { heading: "How we use them", body: "Essential cookies only, plus privacy-respecting analytics if enabled. We do not build advertising profiles." },
      { heading: "Managing cookies", body: "You can accept, block or delete cookies through your browser settings." },
      { heading: "Related policies", body: "Read alongside our Privacy & Data Protection policy." },
      { heading: "Questions", body: "Write to info@comtouchkenya.org." },
    ],
  },
  {
    slug: "service-commitment",
    title: "Service Commitment",
    intro:
      "What visitors can expect, from first enquiry to the day of the visit, and what happens if the organisation falls short.",
    sections: [
      { heading: "Responding to you", body: "We acknowledge enquiries within one business day and send a full quote within two business days. A booking is confirmed on deposit." },
      { heading: "Before your visit", body: "Meeting point, arrival time and what to bring are confirmed at least 48 hours ahead, with final tide-dependent timing confirmed close to the day." },
      { heading: "On the day", body: "Community-led, safety first, delivering the confirmed inclusions or an agreed equivalent." },
      { heading: "Commitment to community and coast", body: "Every experience plants mangroves, Ksh 100 per seedling goes to the nursery, and community members are paid for their work." },
      { heading: "If we fall short", body: "Tell the guide on the day, or contact us within 14 days, and we will agree a suitable remedy." },
      { heading: "Talk to us", body: "Reach the office by phone, WhatsApp or email at any time." },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    intro:
      "The nature of the experiences, the risks involved, and the limits of responsibility; read alongside the Terms & Conditions.",
    sections: [
      { heading: "Information on this website", body: "Offered in good faith and kept as accurate as we can. The confirmed quote takes precedence over anything published here." },
      { heading: "Outdoor and water-based activities", body: "These experiences carry inherent risks and you participate at your own risk. Follow your guide, wear the safety equipment provided, and tell us of non-swimmers, pregnancy, medical or mobility needs." },
      { heading: "Your health and fitness", body: "Some days involve long walks over uneven ground, mud and open water. Please assess your own fitness." },
      { heading: "Personal belongings", body: "You remain responsible for your belongings throughout the visit." },
      { heading: "Insurance", body: "Travel and medical insurance is strongly recommended." },
      { heading: "External links", body: "We are not responsible for the content of external sites." },
      { heading: "Limitation of liability", body: "To the extent permitted by law, our liability is limited to the value of the confirmed booking." },
      { heading: "Questions", body: "Write to info@comtouchkenya.org." },
    ],
  },
];

export const lastUpdated = "Last updated: January 2026";
