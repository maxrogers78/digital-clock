import { useDarkMode } from "../context";

const DarkModeButton = () => {
  const { isDarkMode, handleDarkMode } = useDarkMode();

  return (
    <button className="btn-toggle" onClick={handleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeButton;
