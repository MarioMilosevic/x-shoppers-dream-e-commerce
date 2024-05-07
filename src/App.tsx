import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Description/>
      </main>
    </>
  );
}

export default App;
