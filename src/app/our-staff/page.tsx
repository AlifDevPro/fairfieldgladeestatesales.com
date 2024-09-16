import { Metadata } from "next"

//components
import Header from "@/sections/staff/header/ourStaff"
import OurStaff from "@/sections/staff/our-staff/ourStaff"
import StaffDay from "@/sections/staff/staffDay/staffDay"
import Contact from "@/sections/contact/contact"

export const metadata: Metadata = {
  title: "Our Staff - Fairfield Glade Estate Sales",
  description:
    "Meet the professional team at Fairfield Glade Estate Sales. Our experienced staff is dedicated to providing exceptional estate sale services in Fairfield Glade and surrounding areas.",
  keywords: [
    "estate liquidation staff Fairfield Glade", "estate sale professionals Fairfield Glade", "Fairfield Glade estate liquidation",
    "professional estate team Fairfield Glade", "Fairfield Glade estate sales staff", "auction staff Fairfield Glade",
    "estate consulting team Fairfield Glade", "estate appraisers Fairfield Glade", "property accessors Fairfield Glade",
    "estate sale management Fairfield Glade", "Tennessee estate sale team", "professional estate consultants Fairfield Glade",
    "Fairfield Glade estate appraisers", "estate sale security Fairfield Glade", "estate sale parking attendants Fairfield Glade",
    "estate sale crowd control Fairfield Glade", "estate sale accounting Fairfield Glade", "estate liquidation services Fairfield Glade",
    "estate sale experts Fairfield Glade", "estate sale planning Fairfield Glade", "Fairfield Glade estate sale company",
    "estate liquidation management Fairfield Glade", "estate sale preparation Fairfield Glade", "professional estate sale staff Fairfield Glade",
    "Tennessee auction staff", "estate sale consultation Fairfield Glade", "estate sale day staff Fairfield Glade",
    "estate sale security team Fairfield Glade", "Fairfield Glade estate liquidation experts", "estate liquidation appraisers Fairfield Glade",
    "estate sales management Fairfield Glade", "estate sale support staff Fairfield Glade", "estate auction professionals Fairfield Glade",
    "estate sale assistance Fairfield Glade", "professional estate sale service Fairfield Glade", "Tennessee estate liquidation professionals",
    "estate sale organization Fairfield Glade", "estate sale logistics Fairfield Glade", "estate sale appraisers Tennessee",
    "Fairfield Glade property accessors", "estate sale services Tennessee", "estate liquidation team Fairfield Glade",
    "estate sale staffing Fairfield Glade", "estate liquidation staffing Fairfield Glade", "Fairfield Glade estate sale consultants",
    "estate sale appraisal experts Fairfield Glade", "estate sale security services Fairfield Glade", "estate sale crowd control team Fairfield Glade",
    "professional estate sale management Fairfield Glade", "Tennessee estate sale professionals", "estate liquidation consulting Fairfield Glade",
    "estate sale process Fairfield Glade", "estate sale uniformed staff Fairfield Glade", "Tennessee estate liquidation services Fairfield Glade",
    "estate sale consultation Fairfield Glade", "estate liquidation company Fairfield Glade", "estate sale business Fairfield Glade",
    "estate liquidation firm Fairfield Glade", "professional estate liquidators Fairfield Glade", "estate sale day preparation Fairfield Glade",
    "Fairfield Glade estate sale experts", "estate sale uniformed team Fairfield Glade", "estate liquidation specialists Fairfield Glade",
    "estate sale logistics team Fairfield Glade", "estate sale business Fairfield Glade", "Tennessee estate sale management Fairfield Glade",
    "estate liquidation support Fairfield Glade", "estate sale services Fairfield Glade", "estate sale security Fairfield Glade",
    "Tennessee estate crowd control Fairfield Glade", "estate sale parking services Fairfield Glade", "estate sale financial management Fairfield Glade",
    "estate sale pricing control Fairfield Glade", "estate sale account management Fairfield Glade", "estate liquidation expertise Fairfield Glade",
    "Fairfield Glade estate sale professionals", "estate liquidation consulting Fairfield Glade", "Fairfield Glade estate liquidation team"
  ].join(", "),
  openGraph: {
    title: "Our Staff - Fairfield Glade Estate Sales",
    description:
      "Meet the dedicated professionals at Fairfield Glade Estate Sales. Our team ensures a seamless estate sale experience for you in Fairfield Glade and surrounding areas.",
    url: "https://fairfieldgladeestatesales.com/our-staff",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Our Staff at Fairfield Glade Estate Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Our Staff - Fairfield Glade Estate Sales",
    description:
      "Meet the professional team at Fairfield Glade Estate Sales. We handle every aspect of estate sales with expertise and dedication.",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        alt: "Our Staff at Fairfield Glade Estate Sales",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://fairfieldgladeestatesales.com/our-staff",
  },
};

export default function Staff() {
    return(
        <main>
            <Header />
            <OurStaff />
            <StaffDay />
            <Contact />
        </main>
    )
}
