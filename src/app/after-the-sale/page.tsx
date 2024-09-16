import { Metadata } from "next";

// Components
import Header from "@/sections/after-the-sale/header/header.tsx";
import AfterTheLequidations from "@/sections/after-the-sale/after-the-lequidations/afterTheLequidations";
import Settlement from "@/sections/after-the-sale/settlement/settlement";
import RealtorService from "@/sections/after-the-sale/realtor-service/realtorService";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "After the Sale in Fairfield Glade - Five Star Estate Liquidations",
  description:
    "Discover our post-estate sale services in Fairfield Glade at Five Star Estate Liquidations. We offer leftover item removal, settlement, and Realtor services to maximize the value of your property.",
  keywords: [
    "Fairfield Glade post-estate sale services", "estate sale leftovers Fairfield Glade", "estate liquidation cleanup Fairfield Glade",
    "charitable donation Fairfield Glade", "Fairfield Glade estate sale settlement", "detailed accounting Fairfield Glade estate sale",
    "estate sale proceeds Fairfield Glade", "auction consignment settlement Fairfield Glade", "Fairfield Glade Realtor services",
    "real estate agent Fairfield Glade", "property staging services Fairfield Glade", "home staging Fairfield Glade",
    "maximize listing price Fairfield Glade", "minor repairs estate sale Fairfield Glade", "preferred contractors Fairfield Glade estate sale",
    "Tennessee estate sale services Fairfield Glade", "Fairfield Glade estate liquidation settlement", "estate sale cleanup Fairfield Glade",
    "estate sale donations Fairfield Glade", "tax-deductible donation receipt Fairfield Glade", "estate sale bidding Fairfield Glade",
    "estate sale dealers Fairfield Glade", "Fairfield Glade estate sale settlement process", "Fairfield Glade estate sale finalization",
    "house cleaning Fairfield Glade estate sale", "broom clean estate sale Fairfield Glade", "Fairfield Glade estate sale contractor network",
    "Fairfield Glade post-sale real estate services", "Realtor Fairfield Glade estate sale", "home staging Fairfield Glade Tennessee",
    "property value maximization Fairfield Glade", "real estate services after estate sale Fairfield Glade", "Fairfield Glade estate sale auction services",
    "Tennessee real estate staging", "estate sale final accounting Fairfield Glade", "Fairfield Glade estate sale check",
    "post-sale property staging Fairfield Glade", "home staging for higher offers Fairfield Glade", "Fairfield Glade estate sale repairs",
    "estate sale realtor network Fairfield Glade", "property cleanup after estate sale Fairfield Glade", "estate sale final steps Fairfield Glade",
    "Fairfield Glade estate liquidation process", "Fairfield Glade estate sale remaining items", "real estate services Fairfield Glade estate sale",
    "home staging benefits Fairfield Glade", "property staging for sale Fairfield Glade", "estate sale property enhancement Fairfield Glade",
    "Fairfield Glade Tennessee estate sale experts", "estate liquidation professionals Fairfield Glade", "post-sale settlement services Fairfield Glade",
    "estate sale charity donations Fairfield Glade", "donate estate sale leftovers Fairfield Glade", "post-estate sale procedures Fairfield Glade",
    "estate sale contractor services Fairfield Glade", "real estate listing enhancements Fairfield Glade", "property value improvements Fairfield Glade",
    "Fairfield Glade estate liquidation settlement process", "Tennessee property staging Fairfield Glade", "estate sale finalization steps Fairfield Glade",
    "Realtor services Fairfield Glade Tennessee", "home improvement Fairfield Glade estate sale", "Fairfield Glade estate sale final proceeds",
    "real estate agent post-estate sale Fairfield Glade", "estate sale contractor partnerships Fairfield Glade", "home staging experts Fairfield Glade",
    "Tennessee estate liquidators Fairfield Glade", "Fairfield Glade estate sale process final steps", "maximize home sale price Fairfield Glade",
    "Fairfield Glade estate sale cleanup services", "property staging post-estate sale Fairfield Glade", "Fairfield Glade estate liquidation completion",
    "post-sale real estate enhancement Fairfield Glade", "estate sale completion services Fairfield Glade", "real estate post-sale services Fairfield Glade",
    "estate liquidation Realtor services Fairfield Glade", "property staging and repair Fairfield Glade", "post-sale estate services Fairfield Glade",
    "Tennessee estate liquidation company Fairfield Glade", "estate sale property staging Fairfield Glade", "home repair for estate sale Fairfield Glade",
    "Realtor Fairfield Glade estate liquidation", "estate sale final checklist Fairfield Glade", "Fairfield Glade estate sale and property staging"
  ].join(", "),
  openGraph: {
    title: "After the Sale in Fairfield Glade - Five Star Estate Liquidations",
    description:
      "Explore our comprehensive post-sale services in Fairfield Glade at Five Star Estate Liquidations, including item removal, settlement, and Realtor services to enhance the value of your estate sale.",
    url: "https://fairfieldgladeestatesales.com/after-the-sale",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Fairfield Glade",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "After the Sale in Fairfield Glade - Five Star Estate Liquidations",
    description:
      "Post-estate sale services in Fairfield Glade including cleanup, settlement, and Realtor services. Maximize your estate sale's value with Five Star Estate Liquidations.",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Fairfield Glade",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fairfieldgladeestatesales.com/after-the-sale",
  },
};

export default function AfterTheSale() {
  return (
    <main>
      <Header />
      <AfterTheLequidations />
      <Settlement />
      <RealtorService />
      <Contact />
    </main>
  );
}
