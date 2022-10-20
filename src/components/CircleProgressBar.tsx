import styled from 'styled-components'

export const CircleProgressBar = styled.div({
  background: ({ progress }) => {
    // Adapt the logic here
    const angle = 360 * progress
    
    return `radial-gradient(#151515 50%, transparent 51%),
      conic-gradient(transparent 0deg ${angle}deg, #151515 ${angle}deg 360deg),
      conic-gradient(#4A2FBD 0deg, #aa367c 90deg, #aa367c 180deg, #4A2FBD)`
  },

  borderRadius: '50%',
  width: '10rem',
  height: '10rem',
  display: "inline-block",

})