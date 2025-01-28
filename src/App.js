import NavBar from "./NavBar";
import Body from "./Body";
import SideBar from "./SideBar";

export default function App() {
  return (
    <div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="corpo">
        <Body />
        <SideBar />
      </div>
    </div>
  );
}
