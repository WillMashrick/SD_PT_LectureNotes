// Using import keyword to connect to and bring in CSS from CSS file
import "./App.css";
// Importing the Header component
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutMe/AboutMe";

// This is a Functional Component: it is declared with the function keyword, the name of the func is the component name(Capitalized/PascalCase)
function App() {
  // Functional Components have a single return
  return (
    // JSX will only allow ONE JSX ELEMENT to be returned (that element can contain child/many elements)
    <div className="App">
      {/* To use an imported component: it gets written as a self closing tag. */}
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

// How the functional component gets exported : export default component-name/ function-name (Needs to match!)
export default App;
