2025-01-08

## Context

- Context는 부모 컴포넌트가 그 아래의 트리 전체에 데이터를 전달할 수 있도록 해준다.( 전역 상태 관리)
- Context는 "prop drilling"(프로퍼티를 여러 컴포넌트를 거쳐 전달해야 하는 문제)를 해결한다.
- Context를 사용하면 데이터를 중간 컴포넌트들을 거치지 않고도 원하는 컴포넌트에서 직접 접근할 수 있다.

---

- `createContext`: Context를 생성한다. 기본값을 인자로 받는다.
- `Provider`: Context.Provider는 하위 컴포넌트들이 Context 값을 읽을 수 있도록 데이터를 제공하는 역할을 한다.
- `Consumer`: Context.Consumer는 Provider로부터 전달된 데이터를 사용하기 위해 필요한 컴포넌트다. (useContext로 대체)

---

##### 1) 기본적인 Context 설정

```jsx
import { createContext, useState } from "react";

// Context 생성
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    // Provider를 통해 theme 값을 하위 컴포넌트에 전달
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
};

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <h1>The current theme is {theme}</h1>}
    </ThemeContext.Consumer>
  );
};

const Main = () => {
  return (
    <ThemeContext.Consumer>
      {({ setTheme }) => (
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default App;
```

##### 2) useContext로 리팩토링

```jsx
import { createContext, useState, useContext } from "react";

// Context 생성
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    // Provider를 통해 theme 값을 하위 컴포넌트에 전달
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
};

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

export default App;
```

**createContext()**로 Context를 만들고, **Provider**로 데이터를 제공하며, 하위 컴포넌트에서 **useContext()**로 해당 데이터를 접근한다.

[Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context)
