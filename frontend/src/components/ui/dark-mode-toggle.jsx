import { Moon, Sun } from "lucide-react";
import { useStore } from "../store";
import { Label } from "./label";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
  }));

  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={toggleDarkMode}
        className={`relative w-14 h-10 rounded-lg transition-colors duration-300 focus:outline-none shadow-md border border-orange-500 flex items-center justify-center
          ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        {/* Knob */}
        <span
          className={`absolute left-1 w-8 h-8 rounded-full shadow-md bg-white transition-transform duration-300 flex items-center justify-center ${
            isDarkMode ? "translate-x-4" : "translate-x-0"
          }`}
        >
          {isDarkMode ? (
            <Moon className="h-4 w-4 text-orange-500" />
          ) : (
            <Sun className="h-4 w-4 text-orange-500" />
          )}
        </span>
      </button>
      <Label
        htmlFor="dark-mode"
        className={`text-xs text-center select-none w-full ${
          isDarkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Label>
    </div>
  );
};
