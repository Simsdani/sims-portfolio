
import React from "react";

interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 5 }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 20 + 10; // Random size between 10px and 30px
        const top = Math.random() * 100; // Random position
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 5; // Random animation delay
        const animationClass = i % 2 === 0 ? "animate-bounce-subtle" : "animate-float";
        
        return (
          <div
            key={i}
            className={`star ${animationClass}`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill={i % 2 === 0 ? "#FF5C00" : "#FF9EB8"}
                stroke="none"
              />
            </svg>
          </div>
        );
      })}
    </>
  );
};

export default Stars;
