import { useDarkMode, useDateTime } from "./context";
import { DarkModeButton, DateCard, TimeCard, Title } from "./components";
import { Footer } from "./layout";

const App = () => {
  const { isDarkMode } = useDarkMode();
  const { actualTime } = useDateTime();

  return (
    <main className={isDarkMode ? "dark" : ""}>
      <div className="body">
        <DarkModeButton />

        {/* <Title title="Digital clock" /> */}

        <DateCard actualTime={actualTime} />
        <TimeCard actualTime={actualTime} />

        <Footer />
      </div>
    </main>
  );
};

export default App;
