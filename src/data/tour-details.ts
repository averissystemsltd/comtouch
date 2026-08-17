export type ItineraryStop = { time?: string; title: string; detail: string };
export type TourDetail = { pitch: string; itinerary: ItineraryStop[] };

/**
 * Rich, itinerary-style content for each experience. The pitch sells the day;
 * the itinerary reads like a plan a guide would walk you through, so a visitor
 * understands exactly what they get and why it is priced the way it is.
 */
export const tourDetails: Record<string, TourDetail> = {
  "fishing-crab-prawn-farming": {
    pitch:
      "Spend a full day learning how this coast really feeds itself. This is not a boat ride with a photo stop; you read the tide with the people who live by it, watch the uzio trap set in the shallows, cast hand lines on the open water, and step inside the Tsunza Integrated Mariculture project where crab, prawn and fish are grown in balance with the mangroves. By the time you have planted your seedling and sat down to a local lunch, you understand exactly what your booking pays for: a boat and crew, expert local guides, a working fishery and a dance troupe, all earning directly from your visit.",
    itinerary: [
      {
        time: "9:00am",
        title: "Meet at Mkupe Jetty",
        detail:
          "Your guide welcomes the group, runs through the plan for the day and the safety brief, and you board the boat as the tide sets the pace.",
      },
      {
        title: "Cross to the peninsula",
        detail:
          "Sail from Mkupe over to Maguzoni. On the water the guide introduces Tsunza as a fishing village and explains how the daily tide decides when, where and how the community fishes.",
      },
      {
        title: "Traditional gear, explained",
        detail:
          "On shore you meet the tools of the trade, the nets and lines and the knowledge behind them, along with the conservation practice that keeps the fishery alive rather than emptying it.",
      },
      {
        title: "The uzio fish trap",
        detail:
          "See the uzio, the traditional woven trap, set and demonstrated in the shallows. It is a technique handed down through generations of Tsunza fishers.",
      },
      {
        title: "Out on the water",
        detail:
          "Head out for a real fishing trip, hand lines and patience, alongside fishers who do this every single day.",
      },
      {
        title: "Inside the mariculture project",
        detail:
          "Visit the Tsunza Integrated Mariculture project and see how crab, prawn and fish are farmed in managed ponds and cages, easing pressure on the wild creek while giving families a steady income.",
      },
      {
        title: "Lunch and madafu",
        detail:
          "Break for a meal cooked the local way, with fresh coconut, madafu, straight from the palm.",
      },
      {
        title: "Plant a mangrove",
        detail:
          "Plant seedlings along the creek. Ksh 100 of every seedling goes to the community nursery, so the day leaves the coast better than you found it.",
      },
      {
        title: "A local dance, then home",
        detail: "The day closes with a community dance before you board the boat back to Mkupe.",
      },
    ],
  },

  "dhow-sailing": {
    pitch:
      "A half day under sail, tracing the Tsunza-Mwache creek the way the coast has moved for centuries. This is the gentle, scenic side of the peninsula, with mangroves sliding past, birds overhead and the water doing the work. There is time to plant a mangrove and to understand why sailing still matters here, all in a small, unhurried group.",
    itinerary: [
      {
        time: "8:00am or 2:00pm",
        title: "Board at Mkupe Jetty",
        detail: "Meet your guide and crew and set off on a return dhow trip, timed to the tide.",
      },
      {
        title: "Into the creek",
        detail:
          "Trace the Tsunza peninsula and its mangrove ecosystem under sail, with the guide introducing the creek, its life and its rhythms.",
      },
      {
        title: "Why sailing matters",
        detail:
          "Learn the place of the dhow in coastal life, in transport, fishing and heritage, and take in the scenery that makes this stretch of water special.",
      },
      {
        title: "Plant a mangrove",
        detail:
          "Pause to plant seedlings along the way, adding to the forest that shelters the creek.",
      },
      {
        title: "Madafu and return",
        detail:
          "Fresh coconut in hand, sail back to Mkupe jetty. Departures follow the tide, so mornings and afternoons each have their own light.",
      },
    ],
  },

  "mangrove-conservation": {
    pitch:
      "The clearest day out for anyone who wants to truly understand mangroves: why they matter to a village and to the planet, how a community brings a forest back, and what it feels like to plant one yourself. You will learn to read the different mangrove species and their zonation, get your hands muddy at a real planting site, and finish among the makers at the craft village.",
    itinerary: [
      {
        time: "9:00am",
        title: "Meet at Mkupe Jetty",
        detail: "Welcome, safety brief and boat across to the peninsula.",
      },
      {
        title: "The Mwache-Tsunza ecosystem",
        detail:
          "An introduction to the mangrove ecosystem and the community's role in protecting it, both locally and as a global carbon store.",
      },
      {
        title: "Mangrove types and zonation",
        detail:
          "Walk the creek and learn to tell the mangrove species apart, and why each one grows where it does.",
      },
      {
        title: "Find the planting site",
        detail: "Together with the community, identify the day's area of action for planting.",
      },
      {
        title: "Plant the creek",
        detail:
          "Get muddy and plant seedlings where the forest has thinned. Ksh 100 of each seedling funds the nursery.",
      },
      { title: "Madafu and lunch", detail: "A local lunch and fresh coconut on the shore." },
      {
        title: "The craft village",
        detail:
          "Visit the craft village to see the techniques, an exhibition and work you can buy directly from the makers.",
      },
      {
        title: "A local dance, then home",
        detail: "A community dance before the boat back to Mkupe.",
      },
    ],
  },

  "village-walk": {
    pitch:
      "A full day inside the life of a coastal village, not observed from a distance but shared. You will sit with a local farmer over the season's calendar, learn how marriage and family are organised, meet the medicine men and women who heal with the forest, and try your own hand at pounding grain, weaving and beading before a dance closes the day. Few experiences bring you this close to how the peninsula actually lives.",
    itinerary: [
      {
        time: "9:00am",
        title: "Meet at Mkupe Jetty",
        detail: "Welcome, brief and boat to the peninsula.",
      },
      {
        title: "Village life and culture",
        detail:
          "An honest introduction to lifestyle and culture, including the polygamous family system and marriage customs, explained by the community itself.",
      },
      {
        title: "The farming calendar",
        detail:
          "A local farmer walks you through the season-by-season calendar that shapes the year on the land.",
      },
      {
        title: "Kayas and sacred sites",
        detail:
          "A briefing on the sacred kaya forests and other ecological sites, and the protocols that keep them protected.",
      },
      {
        title: "Women's groups and healers",
        detail:
          "Meet the women's social groups and their work, and the medicine men and women who cure with herbs.",
      },
      {
        title: "Hands-on food and craft",
        detail:
          "Try food preparation, from pounding and winnowing to grating, then settle into beading and weaving with those who do it daily.",
      },
      {
        title: "Lunch, planting and a dance",
        detail: "Share lunch, plant a mangrove, and close with a local dance before the boat home.",
      },
    ],
  },

  "local-food-experience": {
    pitch:
      "A hands-on half day from grain to coconut to cashew, cooking the coast's food the way it has always been made. You pound, winnow, grate and prepare, then eat exactly what you helped make. It is the tastiest and most sociable way to understand daily life on the peninsula.",
    itinerary: [
      {
        time: "9:00am or 2:00pm",
        title: "Arrive at Mkupe Jetty",
        detail: "Meet your guide and cross to the peninsula.",
      },
      {
        title: "Meet the community's food",
        detail: "An introduction to the local food varieties and where they come from.",
      },
      {
        title: "Pounding and winnowing",
        detail:
          "Take a turn pounding grain and winnowing it clean, the rhythm behind every meal here.",
      },
      { title: "Grating coconut", detail: "Grate fresh coconut, the base of the coastal kitchen." },
      {
        title: "Cashew nut preparation",
        detail: "Learn how cashew is prepared, from shell to snack.",
      },
      {
        title: "Eat what you made",
        detail: "Sit down to the dishes you helped cook, with fresh coconut to finish.",
      },
    ],
  },

  "cultural-local-dance": {
    pitch:
      "An afternoon given over entirely to the dances that keep the community's time: Rawawe, kayamba, ngoma ya mulungu and mdundiko. These are prayers and celebrations, not a staged show, and you are welcomed in to take part. A full programme of five dances and a craft exhibition makes plain what your booking supports, because the troupes, the drummers and the makers are all paid directly.",
    itinerary: [
      {
        time: "2:00pm",
        title: "Arrive for the exhibition",
        detail: "Boat across and gather for an afternoon of local dance on the Tsunza peninsula.",
      },
      {
        title: "Rawawe and kayamba",
        detail: "The programme opens with Rawawe and kayamba, drums and voices setting the pace.",
      },
      {
        title: "Ngoma ya mulungu",
        detail:
          "The rain-dance performed as prayer, the same tradition behind the annual gathering at Kaya Chonyi.",
      },
      {
        title: "Mdundiko",
        detail: "A celebratory procession dance that pulls everyone into the circle.",
      },
      {
        title: "The full five",
        detail:
          "Five dances make up the complete programme. A minimum group of four keeps the troupes viable and the day worthwhile for the community.",
      },
      {
        title: "Craft exhibition",
        detail: "See and buy work from the community's craftspeople alongside the performance.",
      },
    ],
  },

  "village-scenic-walk": {
    pitch:
      "The peninsula on foot at its most scenic: a full day walking through Bonje and Mwache to the striking Goro V-shaped landmark, with five dances and a craft exhibition along the way. When tides shift, the guides simply take the preferred alternative route, so the day runs whatever the water does.",
    itinerary: [
      {
        time: "9:00am",
        title: "Meet at Mkupe Jetty",
        detail:
          "Welcome and brief, then boat across. An alternative route to Bonje is used if the tide fluctuates.",
      },
      {
        title: "Walk to Bonje and Mwache",
        detail: "A scenic walk through Bonje and Mwache, reading the landscape with your guide.",
      },
      {
        title: "The Goro landmark",
        detail: "Reach the Goro V-shaped landmark, a natural highlight of the peninsula.",
      },
      {
        title: "Dances along the way",
        detail: "An exhibition of local dances performed as you go, five in the full programme.",
      },
      {
        title: "Crafts, lunch and planting",
        detail:
          "A crafts exhibition that benefits the community directly, lunch on the walk, and a mangrove planted before you turn back.",
      },
    ],
  },

  "dhow-rolling": {
    pitch:
      "Four quiet hours rolling along the Tsunza-Mwache creek in a small group, the peninsula's most peaceful experience. With just two to four guests, it is made for birdwatchers and anyone who wants a close, unhurried look at the mangroves, their species and their zonation, and the creek's meandering beauty.",
    itinerary: [
      {
        time: "9:00am or 2:00pm",
        title: "Set off from Mkupe",
        detail: "Board the dhow for a four-hour roll along the creek, small group only.",
      },
      {
        title: "The creek's beauty",
        detail: "Trace the scenic meanders of the Mwache creek at an easy pace.",
      },
      {
        title: "Mangroves up close",
        detail:
          "Learn the different mangrove species and their zonation, and why they matter so much to the community.",
      },
      {
        title: "Birdwatching",
        detail:
          "Watch for the creek's birdlife. Mornings are calmest and best for it, so bring binoculars if you have them.",
      },
      {
        title: "Community crafts",
        detail: "A community crafts exhibition rounds out the trip before you return.",
      },
    ],
  },

  "wine-tapping-tasting": {
    pitch:
      "Meet a palm-wine tapper at Bonje and learn a livelihood and a ritual in one visit. From how a palm is chosen to the whole tapping process, and the tasting if you wish, you will understand the tree's deep place in coastal life, in weddings, funerals, honouring the dead and passing knowledge to the young, with two dances and a craft exhibition alongside.",
    itinerary: [
      {
        title: "Boat to Bonje",
        detail:
          "Cross from Mkupe to Mwache, or the alternative route on shifting tides, to reach Bonje, returning by 12:30pm.",
      },
      {
        title: "The palm's place on the coast",
        detail:
          "Your guide explains the palm tree's role and importance, a source of livelihood and a surprising range of products.",
      },
      {
        title: "Meet the tapper",
        detail: "Meet the tapper at work, with the guide explaining each step as you go.",
      },
      {
        title: "The full process",
        detail:
          "Watch the whole process demonstrated, from selecting a palm to production times and how the yield changes with the seasons.",
      },
      {
        title: "Culture and wine",
        detail:
          "Hear how palm wine threads through weddings, funerals, praising the dead and teaching the youth.",
      },
      {
        title: "Tasting and crafts",
        detail:
          "An optional tasting, always your choice, and a community craft exhibition to close.",
      },
    ],
  },

  "crafts-village": {
    pitch:
      "A full day among the makers: weaving, carving, dhow and drum making, beading and instruments, showing how the community turns nature-based materials into livelihoods that ease pressure on the environment. Five cultural dances run between the craft stations, and everything you see being made is for sale directly from the person who made it.",
    itinerary: [
      {
        time: "9:00am",
        title: "Arrive at Maguzoni",
        detail:
          "Boat from Mkupe, or the alternative route on shifting tides, to Maguzoni for a 9:00am start.",
      },
      {
        title: "Weaving",
        detail: "See mats and baskets woven from local materials, and try your own hand at it.",
      },
      {
        title: "Carving and making",
        detail: "Watch the carving of dhows, drums and local instruments, all made by hand.",
      },
      {
        title: "Beading",
        detail: "Join the beadwork station and learn the patterns and their meaning.",
      },
      {
        title: "Dances between the stations",
        detail: "Five cultural dances punctuate the day as you move between the crafts.",
      },
      {
        title: "Buy from the maker",
        detail:
          "A community crafts exhibition where everything is sold directly by the makers, so bring cash.",
      },
      {
        title: "Lunch and return",
        detail: "Lunch on the peninsula before the boat back to Mkupe.",
      },
    ],
  },

  "eco-learning-mwache-forest": {
    pitch:
      "A full day of eco-learning inside Mwache forest, reached by road through Mazeras: a living classroom of tree species and their medicinal value, and the ecological sites hidden within. Built for groups of five to ten, with acrobats and dance through the day and crafts to take home.",
    itinerary: [
      {
        time: "9:00am",
        title: "Travel via Mazeras",
        detail:
          "Road transport through Mazeras brings you to Mwache forest for a 9:00am start. This one is reached by road, not boat.",
      },
      {
        title: "Into the forest",
        detail: "An introduction to Mwache forest and the eco-learning ahead.",
      },
      {
        title: "Trees and medicine",
        detail:
          "Learn the different tree species and their medicinal value from those who know the forest best.",
      },
      { title: "Ecological sites", detail: "Explore the ecological sites within the forest." },
      {
        title: "Plant a tree",
        detail: "Plant tree seedlings, at Ksh 200 each, to add to the forest.",
      },
      {
        title: "Dance, acrobats and crafts",
        detail:
          "Local dances and acrobats through the day, a crafts display and an experience tasting.",
      },
      { title: "Lunch", detail: "A meal for the group before the road home." },
    ],
  },

  "eco-learning-kaya-chonyi": {
    pitch:
      "A full day of eco-learning in the sacred Kaya Chonyi, reached through Tsunza: the role of the kayas to the community, the medicinal trees within, and the culture bound to these protected forests. For groups of five to ten, closing with crafts and tasting at the TSUMBUCOFA hall.",
    itinerary: [
      {
        time: "9:00am",
        title: "Travel through Tsunza",
        detail: "Road transport via Tsunza to Kaya Chonyi for a 9:00am start.",
      },
      {
        title: "The role of the kayas",
        detail: "Learn why the kayas matter to the community and how they are kept safe.",
      },
      {
        title: "Trees and medicine",
        detail: "Discover the tree species and their medicinal value inside the sacred forest.",
      },
      {
        title: "Culture of the kaya",
        detail:
          "Hear the culture and beliefs bound to the kayas, with the protocols explained before you enter.",
      },
      { title: "Plant a tree", detail: "Plant tree seedlings, at Ksh 200 each." },
      {
        title: "Crafts and tasting at TSUMBUCOFA",
        detail:
          "Close with a crafts display and an experience tasting at the TSUMBUCOFA multipurpose hall, with local dances.",
      },
    ],
  },

  "eco-learning-mwache-riverine-thicket": {
    pitch:
      "A full day of eco-learning along the Mwache riverine thicket, by boat from Mkupe: River Mwache and Goro, the ecological sites along the water, and the Goro V-shape with its endemic tree species. For groups of five to ten, with dance and acrobats through the day.",
    itinerary: [
      {
        time: "9:00am",
        title: "Boat from Mkupe",
        detail: "Sail from Mkupe to Mwache and Bonje for a 9:00am start.",
      },
      {
        title: "River Mwache and Goro",
        detail: "An introduction to River Mwache and Goro and their different tree species.",
      },
      { title: "Ecological sites", detail: "Explore the ecological sites along the river." },
      {
        title: "The Goro V-shape",
        detail: "Reach the Goro V-shape and its endemic tree species, a highlight of the thicket.",
      },
      {
        title: "Plant a mangrove",
        detail: "Plant mangrove seedlings, at Ksh 100 each, along the way.",
      },
      {
        title: "Dance, acrobats and crafts",
        detail: "Local dances and acrobats through the day, with a crafts display and tasting.",
      },
      {
        title: "Lunch and return",
        detail:
          "Lunch before the boat back to Mkupe. Timing follows the tide, so departure is confirmed on booking.",
      },
    ],
  },
};

export const getTourDetail = (slug: string): TourDetail | undefined => tourDetails[slug];
