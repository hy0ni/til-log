import { Link } from "react-router-dom";
function Home() {
  return (
    <ul>
      <li>
        <Link to="/reducer">state 로직을 reducer로 작성하기</Link>
      </li>
    </ul>
  );
}

export default Home;
