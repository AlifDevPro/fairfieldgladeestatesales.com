import Header from "@/sections/rates-areas/header/header"
import OurRates from "@/sections/rates-areas/our-rates/ourRates"
import Areas from "@/sections/rates-areas/areas/areas"
import Contact from "@/sections/contact/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Liquidation Rates & Areas in Fairfield Glade - Five Star Estate Liquidations",
  description:
    "Explore our comprehensive estate liquidation services in Fairfield Glade. We offer transparent, commission-based rates and cover various areas around Fairfield Glade.",
  keywords: [
    "Fairfield Glade estate liquidation", "estate sales Fairfield Glade", "estate planning Fairfield Glade", 
    "Fairfield Glade estate services", "estate liquidation rates Fairfield Glade", "commission-based estate sale Fairfield Glade",
    "estate sale contract Fairfield Glade", "estate sale process Fairfield Glade", "estate sale expenses Fairfield Glade",
    "no up-front fees Fairfield Glade", "professional signage Fairfield Glade", "estate advertising Fairfield Glade",
    "labor costs in estate sales Fairfield Glade", "estate sale management Fairfield Glade", "Fairfield Glade estate sale company",
    "estate sale experts Fairfield Glade", "estate liquidation Fairfield Glade", "Tennessee estate liquidation services Fairfield Glade",
    "estate sale consultation Fairfield Glade", "estate liquidation contract Fairfield Glade", "Five Star Estate Liquidations Fairfield Glade",
    "estate liquidation Fairfield Glade", "Fairfield Glade estate liquidation services", "Fairfield Glade estate sale company"
  ].join(", "),
  openGraph: {
    title: "Estate Liquidation Rates & Areas in Fairfield Glade - Five Star Estate Liquidations",
    description:
      "Serving Fairfield Glade and surrounding areas with comprehensive estate liquidation services. Discover our commission-based rates and the areas we cover.",
    url: "https://fairfieldgladeestatesales.com/rates-areas",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Liquidation Services in Fairfield Glade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Estate Liquidation Rates & Areas in Fairfield Glade - Five Star Estate Liquidations",
    description:
      "Discover our estate liquidation rates and the areas we cover in Fairfield Glade. Offering transparent, commission-based rates and comprehensive services.",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        alt: "Estate Liquidation Services in Fairfield Glade",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fairfieldgladeestatesales.com/rates-areas",
  },
};


export default function RatesAreas() {
    return(
        <main>
            <Header />
            <OurRates />
            <Areas />
            <Contact />
        </main>
    )
}
