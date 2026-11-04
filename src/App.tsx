import SideBar from "./components/side bar.tsx";
import Navigation from "./components/navigation.tsx";
import Body from "./components/body.tsx";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-[#1f1f1f] w-93">
          <SideBar />
        </div>
        <div className="bg-linear- w-full">
          <Navigation />
          <Body />
        </div>
      </div>
    </>
  );
}
export default App;
