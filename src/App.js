import "./styles.css";
import Navbar from "./components/navbar";
import FollowUpTable from "./components/FollowUpTable";
import SideBox from "./components/SideBox";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className=" back">
        <h1 className="followUpp">Followup Reminder </h1>
        <h2 className="getmore">GET MORE REVIEWS</h2>
        <FollowUpTable />
        <SideBox name="SideBox" des="REVIEW RATE" num="17%" />
        <SideBox name="SideBox2" des="REVIEW SCORE" num="4.6" />
        <SideBox name="SideBox3" des="TOTAL REVIEW" num="123" />
        <SideBox name="SideBox4" des="  SEND NOW " num="43" />
      </div>
    </div>
  );
}
