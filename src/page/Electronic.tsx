import { Navbar } from "../components/Navbar";

import { Chrono } from "react-chrono";
import { items } from "../components/Electronics"; // Correct path to the file where items are defined

export const Electronic = () => {
  return (
    <Chrono
          disableToolbar={true} // This hides the toolbar
          disableNavOnKey={false} // Keep navigation using keyboard active
          disableNavOnClick={false}
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "rgba(2, 0, 0, 0.8)", // Black with transparency for the primary timeline bar
            secondary: "rgba(0, 0, 0, 0.2)", // Darker transparent color for secondary elements
            cardBgColor: "rgba(230, 60, 180, 0.3)", // Semi-transparent black background for cards
            cardForeColor: "#000", // White text color inside the cards for contrast
            titleColor: "#fff", // Title color for the cards
            titleColorActive: "#2196f3", // Title color when active
          }}
    />
  );
};
