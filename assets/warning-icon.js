import React from 'react'

const WarningIcon = ({width, height, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={width} height={height} {...props}>
    <g>
      <circle cx="12.025" cy="16.437" r="1.281"></circle>
      <path d="M14.39 7.194c-.094-.127-.242-.2-.4-.2h-3.928c-.158 0-.307.073-.4.2-.096.126-.125.29-.08.442l1.814 6.098c.063.212.258.357.48.357h.298c.222 0 .416-.145.48-.356l1.813-6.098c.047-.152.017-.316-.077-.442z"></path>
      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
    </g>
  </svg>
)

export default WarningIcon