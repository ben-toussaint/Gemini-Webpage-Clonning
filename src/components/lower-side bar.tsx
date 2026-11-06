import download from "../assets/download.png";
import settings from "../assets/settings.png";
function Lower() {
  return (
    <>
      <div className="flex flex-col gap-0 ">
        <div className="flex justify-start items-center justify-left gap-2 px-4 py-0 text-center text-white font-medium rounded-3xl shadow-sm">
          <img src={settings} className="w-5 h-5" alt="settings icon" />
          <button className="flex">Settings</button>
        </div>
        <button className="items-center justify-center gap-4 m-2 px-27 py-1 text-center bg-[#1f3b9c] text-white font-medium rounded-3xl shadow-sm">
          Sign in
        </button>

        <div className="flex items-center justify-center gap-4 m-2 px-8 py-1 text-center bg-[#1f3b9c] text-white font-medium rounded-3xl shadow-sm">
          <img src={download} className="w-5 h-5" alt="download icon" />
          <button className=" ">Get App</button>
        </div>
      </div>
    </>
  );
}

export default Lower;
