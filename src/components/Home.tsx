import Hero from "./Hero"
import News from "./News"
import FeaturedProducts from "./FeaturedProducts"
import Description from "./Description"
const Home = () => {
    return (<>
      <main>
        <Hero />
        <News />
        <FeaturedProducts/>
        <Description/>
      </main>
  </>
  )
}

export default Home
