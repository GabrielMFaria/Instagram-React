import NavBar from "./NavBar"
import Body from "./Body"
import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"
import User from "./User"
import Suggestions from "./Suggestions"

export default function App(){
  return (
   <div>
      <NavBar/>
      <Body/>
      <Stories/>
      <Posts/>
      <SideBar/>
      <User/>
      <Suggestions/>
   </div>
  );
}
