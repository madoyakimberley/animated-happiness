//Hold full application code
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";

function App() {
  return (
    <div className=" p-4 w-screen h-screen bg-gray-200 overflow-y-auto">
      <Header />
      <MainSection />
    </div>
  );
}

//imported
//in main.jsx
//export it.
//Default Export
export default App;
