import Image from "next/image";
import type { Metadata } from "next";

// Components
import Scheduler from "@/components/individual/scheduler/scheduler";
import Header from '@/sections/header/header';
import About from "@/sections/about/about";
import Marketing from "@/sections/marketing/marketing";
import WhyUs from "@/sections/whyUs/whyUs";
import Mission from "@/sections/mission/mission";
import Services from "@/sections/services/services";
import Cta from "@/sections/cta/cta";
import Ftf from "@/sections/ftf/ftf";
import Faq from "@/sections/faq/faq";
import Contact from "../sections/contact/contact";

// Styles
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: "Top Estate Sales in Fairfield Glade | Five Star Estate Liquidations",
  description:
    "Looking for top estate sales in Fairfield Glade? Five Star Estate Liquidations offers expert estate sales, auctions, and liquidation services in Fairfield Glade and surrounding areas. Trust us to handle your property with professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Fairfield Glade",
    "estate liquidation Fairfield Glade",
    "estate auctions Fairfield Glade",
    "property sales Fairfield Glade",
    "Fairfield Glade estate sales",
    "Fairfield Glade liquidation services",
    "Fairfield Glade estate auctions",
    "estate sale companies Fairfield Glade",
    "estate sale services Fairfield Glade",
    "local estate sales Fairfield Glade",
    "furniture sales Fairfield Glade",
    "moving sales Fairfield Glade",
    "house sales Fairfield Glade",
    "estate liquidation Fairfield Glade",
    "Fairfield Glade property liquidation",
    "estate sales near Fairfield Glade",
    "Fairfield Glade TN estate sales",
    "Fairfield Glade TN liquidation",
    "Fairfield Glade estate sale experts",
    "best estate liquidation Fairfield Glade",
    "estate auctions near Fairfield Glade",
    "estate sale companies Fairfield Glade",
    "Fairfield Glade estate liquidators",
    "estate sale events Fairfield Glade",
    "Fairfield Glade estate sale company",
    "estate sale professionals Fairfield Glade",
    "property liquidation Fairfield Glade",
    "estate sale charity donations Fairfield Glade",
    "estate sale experts Fairfield Glade",
    "Tennessee estate liquidation Fairfield Glade",
    "estate sales and auctions Fairfield Glade",
    "estate cleanouts Fairfield Glade",
    "Fairfield Glade estate buyouts",
    "local estate liquidation Fairfield Glade",
    "Fairfield Glade TN moving sales",
    "Fairfield Glade property auctions",
    "real estate sales Fairfield Glade TN",
    "estate sales services near Fairfield Glade",
    "antiques sales Fairfield Glade TN",
    "household estate sales Fairfield Glade",
    "garage sales Fairfield Glade TN",
    "yard sales Fairfield Glade TN"
  ].join(", "),
  openGraph: {
    title: "Top Estate Sales in Fairfield Glade | Five Star Estate Liquidations",
    description:
      "Discover the top estate sales in Fairfield Glade with Five Star Estate Liquidations. We offer expert estate sale and liquidation services in Fairfield Glade and beyond, ensuring a smooth and profitable transition.",
    url: "https://fairfieldgladeestatesales.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Top Estate Sales in Fairfield Glade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Estate Sales in Fairfield Glade | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the top estate sales in Fairfield Glade. We offer professional estate sale and liquidation services to ensure your property is handled with care.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Fairfield Glade Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://fairfieldgladeestatesales.com/",
  },
};


export default function Home() {
  return (
    <main>
      <Scheduler />
      <Header />
      <About />
      <Marketing />
      <WhyUs />
      <Mission />
      <Services />
      <Cta />
      <Ftf />
      <Faq />
      <Contact />
    </main>
  );
}
