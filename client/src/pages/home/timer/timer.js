import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  const dday = Date.parse('09 Nov 2021 00:00:00 GMT');
  const startTime = Date.now() / 1000; 
  const endTime = dday/1000;

  const remainingTime = endTime - startTime - 19800;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#BF00FF"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        size="82"
        >
        {({ elapsedTime }) =>
          renderTime("D", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#BF00FF"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        size="82"
        onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("H", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#BF00FF"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        size = "82"
        onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds
        ]}
        >
        {({ elapsedTime }) =>
          renderTime("M", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#BF00FF"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        size = "82"
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("S", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
}
