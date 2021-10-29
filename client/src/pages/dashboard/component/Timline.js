import React from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
];
// const disableNavOnKey = true;
    return (
        <div style={{ width: "300px", height: "800px" }}>
            <Chrono items={items}
                mode="VERTICAL"
                hideControls = {{hideControls : false}}
                theme={{
                    primary: "#BF00FF",
                    secondary: "#010031",
                    cardBgColor: "000000",
                    cardForeColor: "#43CFFB",
                    titleColor: "#BF00FF"
                }} />
        </div>
    )
}

export default Timeline;