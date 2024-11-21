import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    /**
     * Obtain and pass from local storage to state
     */
    (localStorage.getItem("darkMode") === "true")
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Social Feed</h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="dark:bg-white dark:text-black bg-gray-700 px-4 py-2 rounded-md text-white"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
