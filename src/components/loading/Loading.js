import React, { useRef, useEffect } from 'react';

function Loading() {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Function to generate random bubble properties
    const generateBubbles = () => {
      const numBubbles = 8; // Adjust the number of bubbles as needed
      for (let i = 0; i < numBubbles; i++) {
        const bubble = {
          x: Math.random() * 1490, // Adjust the canvas width as needed
          y: 740, // Start at the bottom of the canvas
          radius: Math.random() * 50 + 30, // Random radius between 30 and 80
          speed: Math.random() * 50 + 40, // Random speed between 40 and 90
        };
        bubbles.current.push(bubble);
      }
    };

    // Function to animate bubbles
    const animateBubbles = () => {
      const animateFrame = () => {
        const timePassed = 1 / 60; // Assuming 60 frames per second

        context.clearRect(0, 0, 1490, 740);

        bubbles.current = bubbles.current.map((bubble) => {
          bubble.y -= bubble.speed * timePassed;
          if (bubble.y < 0) {
            bubble.y = 740;
          }

          // Draw the bubble on the canvas
          const grd = context.createRadialGradient(
            bubble.x + bubble.radius / 2,
            bubble.y,
            2.5,
            bubble.x + bubble.radius / 2,
            bubble.y + bubble.radius / 2,
            bubble.radius
          );
          grd.addColorStop(0, 'white');
          grd.addColorStop(1, '#9acdf5');

          context.beginPath();
          context.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
          context.fillStyle = grd;
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = '#fff';
          context.stroke();

          return bubble;
        });

        requestAnimationFrame(animateFrame);
      };

      animateFrame();
    };

    generateBubbles();
    animateBubbles();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1490} // Adjust the canvas width as needed
      height={740} // Adjust the canvas height as needed
    ></canvas>
  );
}

export default Loading;
