import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(); // Context 생성

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return <h1>The current theme is {theme}</h1>;
};

const Main = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      Toggle Theme
    </button>
  );
};
export default function Theme() {
  const [theme, setTheme] = useState("light");

  return (
    // Provider를 통해 theme 값을 하위 컴포넌트에 전달
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}
