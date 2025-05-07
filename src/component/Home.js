import React, { useState } from "react";
import "./Home.css";
import GoalTimeLine from "./GoalTimeLine";
import GoalApp from "./GoalApp";
import PointsBar from "./PointsBar";

function Home() {
  const [currentTimeframe, setCurrentTimeframe] = useState("today");
  const [totalPoints, setTotalPoints] = useState(0);
  const MAX_POINTS = 100;

  const timeframeChange = (timeframe) => {
    setCurrentTimeframe(timeframe);
  };

  const handlePointsChange = (points) => {
    setTotalPoints((prev) => Math.min(MAX_POINTS, prev + points));
  };

  const authfrontend = () => {
    window.location.assign("http://localhost:3001/")
  }

  return (
  <>

    <input type="button" id="sign-in" value="Sign-In" onClick={authfrontend}/>    
    <div className="HomeClass">
      <div className="home">
        <div className="title">
          <h2>
            {currentTimeframe === "today" && "Today's Goals"}
            {currentTimeframe === "week" && "Weekly Goals"}
            {currentTimeframe === "month" && "Monthly Goals"}
            {currentTimeframe === "year" && "Yearly Goals"}
          </h2>
        </div>
        <GoalTimeLine onTimeframeChange={timeframeChange} />
        <GoalApp
          timeframe={currentTimeframe}
          onPointsEarned={handlePointsChange}
        />
      </div>
      <PointsBar currentPoints={totalPoints} maxPoints={MAX_POINTS} />
    </div>
  </>
  );
}

export default Home;
