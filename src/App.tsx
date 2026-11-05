import SideBar from "./components/side bar.tsx";
import Navigation from "./components/navigation.tsx";
import Body from "./components/body.tsx";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-[#1f1f1f] w-105">
          <SideBar />
        </div>
        <div className=" w-full">
          <Navigation />
          <Body />
        </div>
      </div>
    </>
  );
}
export default App;
