import { MdFullscreen } from "react-icons/md";

const FullScreen = () => {
  const handleFullscreen = () => {
    window.fullScreen();
  };
  return (
    <div className="h-full hidden md:block">
      <button className="h-full px-3" onClick={handleFullscreen}>
        <MdFullscreen className="text-[30px]" />
      </button>
    </div>
  );
};

export default FullScreen;
