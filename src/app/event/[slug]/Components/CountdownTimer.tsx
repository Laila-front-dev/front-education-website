"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer({
  targetDate,
}: {
  targetDate?: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(targetDate || 0);
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        setIsTimeOver(true); // Mark the countdown as over
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  // Format numbers to always show two digits
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (isTimeOver) {
    return null; // Remove the countdown when time is over
  }

  return (
    <>
      <h3>Countdown to Event</h3>
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time-value">{formatNumber(timeLeft.days)}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-box">
          <span className="time-value">{formatNumber(timeLeft.hours)}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time-value">{formatNumber(timeLeft.minutes)}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time-value">{formatNumber(timeLeft.seconds)}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </>
  );
}
