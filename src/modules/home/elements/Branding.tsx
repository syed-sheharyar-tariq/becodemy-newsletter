import { partners } from "@/app/configs/constants"
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function Branding() {
  return (
    <div className="border-b border-t border-[#000] py-10">
      <h3 className="uppercase text-xl md:text-2xl text-center maz-w-3xl mx-auto font-[400] z-20 relative">
        CREATED BY EARLY WORKINK SHEHARYAR TEAM
      </h3>
      <div className="w-full text-center pt-1">
        <h3 className="uppercase bg-[#F091DD] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>
      <Marquee className="w-full flex justify-around">
        {partners.map((i: PartnersTypes) => (
          <>
            <Image
              className="md:mx-8 w-[150px] md:w-[100px] mx-3"
              src={i.url}
              key={i.url}
              width={200}
              height={200}
              alt="partner"></Image>
          </>
        ))}
      </Marquee>
    </div>
  )
}
