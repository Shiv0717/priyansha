// src/components/Logo.jsx - Alternative Continuous Version
import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 300"
      width="200"
      height="60"
      role="img"
      aria-label="PRIYANSHA"
      className="cursor-pointer"
    >
      <defs>
        {/* Multiple Gradients for variety */}
        <linearGradient id="orangeGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        
        <linearGradient id="goldGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        <style>
          {`
          .name {
            font-family: "Montserrat", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 900;
            font-size: 80px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          
          /* Base text - always visible in gray */
          .base-text {
            fill: #4b5563;
          }
          
          /* Continuous tracing effect */
          .tracer-1 {
            fill: none;
            stroke: url(#orangeGradient);
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1500;
            stroke-dashoffset: 1500;
            animation: continuousTrace 4s ease-in-out infinite;
          }
          
          .tracer-2 {
            fill: none;
            stroke: url(#goldGradient);
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1500;
            stroke-dashoffset: 1500;
            animation: continuousTrace 4s ease-in-out 0.5s infinite;
          }
          
          /* Glow fill that follows the tracer */
          .pulse-fill {
            fill: url(#orangeGradient);
            fill-opacity: 0;
            animation: pulseFill 4s ease-in-out infinite;
          }

          @keyframes continuousTrace {
            0% {
              stroke-dashoffset: 1500;
              opacity: 0.8;
            }
            50% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }
          
          @keyframes pulseFill {
            0% {
              fill-opacity: 0;
            }
            40% {
              fill-opacity: 0;
            }
            50% {
              fill-opacity: 0.6;
            }
            70% {
              fill-opacity: 0.3;
            }
            100% {
              fill-opacity: 0;
            }
          }
          
          /* Hover effects */
          .cursor-pointer:hover .tracer-1 {
            animation-duration: 2s;
            stroke-width: 5;
          }
          
          .cursor-pointer:hover .tracer-2 {
            animation-duration: 2s;
            stroke-width: 4;
          }
          
          .cursor-pointer:hover .pulse-fill {
            animation-duration: 2s;
          }
          `}
        </style>
      </defs>

      <g transform="translate(600,150)">
        {/* Base Text - Always Visible */}
        <text className="name base-text" textAnchor="middle" dominantBaseline="middle">
          PRIYANSHA
        </text>
        
        {/* Pulse Fill Effect */}
        <text className="name pulse-fill" textAnchor="middle" dominantBaseline="middle">
          PRIYANSHA
        </text>
        
        {/* Multiple Tracing Layers */}
        <text className="name tracer-1" textAnchor="middle" dominantBaseline="middle">
          PRIYANSHA
        </text>
        
        <text className="name tracer-2" textAnchor="middle" dominantBaseline="middle">
          PRIYANSHA
        </text>
      </g>
    </svg>
  );
};

export default Logo;