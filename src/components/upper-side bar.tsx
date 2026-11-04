import GeminiLogo from "../assets/GeminiLogo.svg";
import newChat from "../assets/newChat.png";
import image from "../assets/image.png";
import info from "../assets/info.png";
function Upper() {
  return (
    <>
      <div className="flex flex-col gap-5 mx-3">
        <div className="flex p-4 gap-3">
          <img src={GeminiLogo} className="w-6 h-6" alt="Gemini Logo" />
          <h3 className="flex justify-center text-center">Gemini</h3>
        </div>
        <div className="flex gap-2 text-center items-center">
          <img src={newChat} className="w-5 h-5" alt="Chat" />
          <h4>New Chat</h4>
        </div>
        <div className="flex gap-2 text-center items-center">
          <img src={image} className="w-5 h-5" alt="imge icon" />
          <h4>Images</h4>
        </div>
        <div className="flex gap-2 text-center items-center">
          <img src={info} className="w-4 h-4" alt="info icon" />
          <h4>Sign in to save activity</h4>
        </div>
      </div>
    </>
  );
}

export default Upper;
