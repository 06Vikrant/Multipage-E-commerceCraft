import { styled } from "styled-components"
import { Brands, Catalog, Featured, Feedback, Hero, NewArrival, SavingZone } from "../../components";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
const HomeScreenWrapper = styled.main`

`;

const Home = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={'Catogries For Men'} products={mensCatalog}/>
      <Catalog catalogTitle={'Catogries For Women'} products={womensCatalog}/>
      <Brands />
      <Catalog catalogTitle={'In The Lime Light'} products={limelightCatalog}/>
      <Feedback />
    </HomeScreenWrapper>
  )
}

export default Home
