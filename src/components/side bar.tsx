import Upper from "./upper-side bar.jsx";
import Lower from "./lower-side bar.js";

function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-70">
        <Upper />
        <Lower />
      </div>
    </>
  );
}

export default SideBar;
