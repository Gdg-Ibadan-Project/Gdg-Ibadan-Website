import React, { useEffect, useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [expiryTime, setExpiryTime] = useState("03 dec 2022 00:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "0",
    countdownHours: "0",
    countdownMinutes: "0",
    countdownSeconds: "0",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });
  return (
    <div className={styles.timer}>
      <div>
        <h3>
          {countdownTime.countdownDays >= 10
            ? countdownTime.countdownDays
            : `0${countdownTime.countdownDays}`}
        </h3>
        <p>Days</p>
      </div>
      <div>
        <h3>:</h3>
      </div>
      <div>
        <h3>
          {countdownTime.countdownHours >= 10
            ? countdownTime.countdownHours
            : `0${countdownTime.countdownHours}`}
        </h3>
        <p>Hours</p>
      </div>
      <div>
        <h3>:</h3>
      </div>
      <div>
        <h3>
          {countdownTime.countdownMinutes >= 10
            ? countdownTime.countdownMinutes
            : `0${countdownTime.countdownMinutes}`}
        </h3>
        <p>Minutes</p>
      </div>
      <div>
        <h3>:</h3>
      </div>
      <div>
        <h3>
          {countdownTime.countdownSeconds >= 10
            ? countdownTime.countdownSeconds
            : `0${countdownTime.countdownSeconds}`}
        </h3>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Counter;
