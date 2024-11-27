import { Header } from "@/shared/widgets/header"
import Banner from "./elements/Banner"
import Branding from "./elements/Branding"
import Benefits from "./elements/Benefits"
import Features from "./elements/Features"
import Pricing from "./elements/Pricing"
import { Footer } from "@/shared/widgets/footer"

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
