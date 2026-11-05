import download from "../assets/download.png";

function Navigation() {
  return (
    <>
      <div className="flex justify-end bg-[#0f0f0fbb] py-2">
        <ul className="flex gap-4 items-center text-center w-150">
          <li className="text-[#a8bee0]">About Gemini</li> <br />
          <li className="text-[#a8bee0]">Subscription</li>
          <li className="text-[#a8bee0]">For Business</li>
          <div className="flex items-center justify-center gap-4 m-2 px-5 py-2 text-center bg-[#1e1e1e] text-white font-medium rounded-3xl shadow-sm">
            <img src={download} className="w-5 h-5" alt="download icon" />
            <button className="">Get App</button>
          </div>
          <button className="items-center justify-center gap-4 m-1 px-4 py-2 text-center bg-[#1f3b9c] text-white font-medium rounded-3xl shadow-sm">
            Sign in
          </button>
        </ul>
      </div>
    </>
  );
}
export default Navigation;
