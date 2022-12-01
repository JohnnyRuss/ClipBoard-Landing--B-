import Hero from "./components/hero/Hero";
import YourSnippets from "./components/yourSnippets/YourSnippets";
import Access from "./components/access/Access";
import Workflow from "./components/workflow/Workflow";
import Partners from "./components/partners/Partners";
import AboutClipboard from "./components/aboutClipboard/AboutClipboard";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <Hero />
      <YourSnippets />
      <Access />
      <Workflow />
      <Partners />
      <AboutClipboard />
      <Footer />
    </main>
  );
}

export default App;
