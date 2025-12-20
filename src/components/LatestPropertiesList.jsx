// src/components/LatestPropertiesList.jsx
import { useState } from "react";

const properties = [
  "Haig",
  "Myrtle Pool House",
  "Clifton",
  "Sidney house",
  "Sweetman",
];

const LatestPropertiesList = () => {
  // This state now lives SAFELY inside this small box.
  // It won't interfere with your slider or other parts of the main page.
  const [activeItem, setActiveItem] = useState("Haig");

  return (
    <div className="pt-3">
      <ul className="space-y-4 text-[14px] text-black/80">
        {properties.map((name) => (
          <li
            key={name}
            onMouseEnter={() => setActiveItem(name)}
            className="flex items-center gap-2 cursor-pointer transition-all duration-200"
          >
            {/* The Dot: Switches color based on state */}
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                activeItem === name ? "bg-[#ff5a1f]" : "bg-transparent"
              }`}
            />
            
            {/* The Text: Switches color/opacity */}
            <span className={activeItem === name ? "text-black font-medium" : "text-black/60"}>
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default LatestPropertiesList;