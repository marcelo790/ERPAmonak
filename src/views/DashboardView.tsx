import SectionBanner from "@/components/sections/SectionBanner";
import SectionProduct from "@/components/sections/SectionProduct";
import SectionOtherService from "@/components/sections/SectionOtherService";
import SectionOffer from "@/components/sections/SectionOffer";
import SectionHowToBuy from "@/components/sections/SectionHowToBuy";

export default function DashboardView() {
  return (
    <>
      <SectionBanner/>
      <SectionProduct/>
      {/*<SectionOtherService/>
      <SectionOffer/>*/}
      <SectionHowToBuy/>
    </>
  )
}
