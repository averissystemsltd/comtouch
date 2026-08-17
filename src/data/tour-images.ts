import culture from "@/assets/ct-culture.jpg";
import dhow from "@/assets/ct-dhow.jpg";
import fishing from "@/assets/ct-fishing.jpg";
import heroCreek from "@/assets/ct-hero-creek.jpg";
import kaya from "@/assets/ct-kaya.jpg";
import mangrove from "@/assets/ct-mangrove.jpg";
import mariculture from "@/assets/ct-mariculture.jpg";
import planting from "@/assets/ct-planting.jpg";
import boat from "@/assets/ct-boat.jpg";
import wineTapping from "@/assets/ct-wine-tapping.jpg";

/** Best-fit photograph for each experience, reused on the home + tour pages. */
export const tourImages: Record<string, string> = {
  "fishing-crab-prawn-farming": mariculture,
  "dhow-sailing": dhow,
  "mangrove-conservation": mangrove,
  "village-walk": kaya,
  "local-food-experience": culture,
  "cultural-local-dance": culture,
  "village-scenic-walk": culture,
  "dhow-rolling": boat,
  "wine-tapping-tasting": wineTapping,
  "crafts-village": culture,
  "eco-learning-mwache-forest": planting,
  "eco-learning-kaya-chonyi": kaya,
  "eco-learning-mwache-riverine-thicket": heroCreek,
};

export const tourImage = (slug: string) => tourImages[slug] ?? heroCreek;
