import Profile from "./components/Profile"
import Card from "./components/Card"

import jsonData from '../src/data.json'

import React from "react"

function App() {

  const [selectedTimeframe, setSelectedTimeframe] = React.useState("daily");

  React.useEffect(() => {
    const timeframes = ['daily', 'weekly', 'monthly'];
    timeframes.forEach(data => {
      if (data === selectedTimeframe) {
          document.getElementById(data).style.color = "hsl(236, 100%, 87%)";
      } else {
          document.getElementById(data).style.color = "hsl(235, 45%, 61%)";
      }
  })
}, [selectedTimeframe]);

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
    
}

  const cardData = jsonData.map((data, index) => {
    return (
      <Card 
        timeframe={selectedTimeframe}
        key={index}
        {...data}
      />
    )
  })

  return (
    <div className="app-container">
      <Profile handleTimeframeChange={handleTimeframeChange}/>
      {cardData}
    </div>
  )
}

export default App
