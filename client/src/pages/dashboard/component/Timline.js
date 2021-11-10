import React from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {
    const items = [{
        title: "9th Nov",
        cardTitle: "",
        cardSubtitle: "Registrations are Open",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "11th Nov",
        cardTitle: "",
        cardSubtitle: "Time to Team up",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "12th Nov",
        cardTitle: "",
        cardSubtitle: "The exploration begins now",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
        title: "14th Nov",
        cardTitle: "",
        cardSubtitle: "Aye' Captain. The journey ends now",
        // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
];
// const disableNavOnKey = true;
    return (
        <div style={{ width: "300px", height: "650px" }}>
            <Chrono items={items}
                mode="VERTICAL"
                hideControls = {{hideControls : false}}
                theme={{
                    primary: "silver",
                    secondary: "#bfbfe0",
                    cardBgColor: "000000",
                    cardForeColor: "rgba(43,74,105,.8)",
                    titleColor: "#BF00FF"
                }} />
        </div>
    )
}

export default Timeline;