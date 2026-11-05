import add from "../assets/add.png";
import mic from "../assets/microphone.png";
import arrDow from "../assets/downArrow.png";
import arrUp from "../assets/upArrow.png";
function Search() {
  return (
    <>
      <div className="mt-23">
        <h1 className="m-12 text-3xl">
          Hello I'm Gemini. Where should we start?
        </h1>
        <div className="flex items-center justify-center gap-7 bg-[#1f1f1f] p-5 m-5 ml-2 rounded-[3rem] w-165">
          <img src={add} className="w-5 h-5" alt="" />
          <input
            type="text"
            placeholder="Ask Gemini"
            className="w-100 focus:outline-none"
          />
          {/* Gemini Auto and the drop down */}
          <button className="flex items-center gap-2 justify-center">
            <span>Gemini</span> <span className="text-gray-500">Auto</span>
            <img src={arrDow} className="w-5 h-4" alt="" />
          </button>
          {/* microphone */}
          <button>
            <img src={mic} className="w-5 h5" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Search;
