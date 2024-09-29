import { Chrono } from "react-chrono";
import { Navbar } from "../components/Navbar";

export const items = [
  {
    title: "Event 1",
    cardTitle: "January",
    cardDetailedText: "This is event 1",
  },
  {
    title: "Event 2",
    cardTitle: "February",
    cardDetailedText: "This is event 2",
  },
];

export const Electronics = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>


      <Chrono
        disableToolbar={true} // This hides the toolbar
        disableNavOnKey={true} // Keep navigation using keyboard active
        disableNavOnClick={true}
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "rgba(2, 0, 0, 0.8)",
          secondary: "rgba(0, 0, 0, 0.2)",
          cardBgColor: "rgba(230, 60, 180, 0.3)",
          cardForeColor: "#000",
          titleColor: "#fff",
          titleColorActive: "#2196f3",
        }}
      />
    </div>
  );
};
