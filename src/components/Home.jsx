import { Link } from "react-router-dom";
function Home() {
  return (
    <ul>
      <li>
        <Link to="/reducer">state 로직을 reducer로 작성하기</Link>
      </li>
      <li>
        <Link to="/context">Context를 사용해 데이터를 깊게 전달하기</Link>
      </li>
    </ul>
  );
}

export default Home;
