export const siteConfig = {
  name: "AnimAction33",
  baseline: "Vivez l'animation autrement",
  phone: "06 77 24 36 75",
  phoneHref: "tel:0677243675",
  whatsapp: "33677243675",
  email: "contact@animaction33.fr",
  siret: "99048354700016",
  zone: "Libourne, Gironde",
  zoneComplete: "Libourne et toute la Gironde",
  address: "Libourne, 33500",
  delaiDevis: "48h",
  instagram: "https://instagram.com/animaction33",
  facebook: "https://facebook.com/animaction33",
  youtube: "https://youtube.com/@animaction33",
  tiktok: "https://tiktok.com/@animaction33",
  googleMapsLink: "https://maps.google.com/?q=AnimAction33+Libourne",
  googleReviewLink: "https://g.page/r/animaction33/review",
  url: "https://animaction33.fr",
} as const;

export function waLink(text: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
