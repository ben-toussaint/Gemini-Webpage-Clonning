import Search from "./Search.tsx";
function Body() {
  return (
    <>
      <div
        className="w-full min-h-screen text-white flex flex-col items-center overflow-y-auto"
        style={{
          background: "radial-gradient(circle, #16224f 0%, #070c21 100%)",
        }}
      >
        <Search />
      </div>
    </>
  );
}

export default Body;
