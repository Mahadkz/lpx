import React, { useEffect, useRef } from 'react';
import './styles/AnimatedGrid.css';

const AnimatedGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gridSize = 40; // Distance between grid lines
    let time = 0;
    
    // Set canvas dimensions to match window
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr); // Scale for retina displays
    };

    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();

    // Draw the animated grid
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate number of lines needed
      const numHorizontalLines = Math.ceil(height / gridSize) + 2;
      const numVerticalLines = Math.ceil(width / gridSize) + 2;
      
      // Animation offset based on time
      const offsetX = Math.sin(time / 2000) * 10;
      const offsetY = Math.cos(time / 2000) * 10;
      
      // Draw horizontal lines
      for (let i = 0; i < numHorizontalLines; i++) {
        // Calculate y position with subtle wave effect
        const y = i * gridSize + offsetY;
        const waveOffset = Math.sin((time / 1000) + (i * 0.2)) * 5;
        
        ctx.beginPath();
        
        // Draw line with gradient opacity - INCREASED OPACITY VALUES
        const gradient = ctx.createLinearGradient(0, y, width, y);
        gradient.addColorStop(0, 'rgba(8, 218, 253, 0.1)');       // Increased from 0
        gradient.addColorStop(0.2, 'rgba(8, 218, 253, 0.4)');     // Increased from 0.15
        gradient.addColorStop(0.5, 'rgba(8, 218, 253, 0.5)');     // Increased from 0.2
        gradient.addColorStop(0.8, 'rgba(8, 218, 253, 0.4)');     // Increased from 0.15
        gradient.addColorStop(1, 'rgba(8, 218, 253, 0.1)');       // Increased from 0
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8;  // Increased from 0.5 for more visibility
        
        ctx.moveTo(0, y + waveOffset);
        ctx.lineTo(width, y - waveOffset);
        ctx.stroke();
      }
      
      // Draw vertical lines
      for (let i = 0; i < numVerticalLines; i++) {
        // Calculate x position with subtle wave effect
        const x = i * gridSize + offsetX;
        const waveOffset = Math.sin((time / 1000) + (i * 0.2)) * 5;
        
        ctx.beginPath();
        
        // Draw line with gradient opacity - INCREASED OPACITY VALUES
        const gradient = ctx.createLinearGradient(x, 0, x, height);
        gradient.addColorStop(0, 'rgba(8, 218, 253, 0.1)');       // Increased from 0
        gradient.addColorStop(0.2, 'rgba(8, 218, 253, 0.35)');    // Increased from 0.1
        gradient.addColorStop(0.5, 'rgba(8, 218, 253, 0.45)');    // Increased from 0.2
        gradient.addColorStop(0.8, 'rgba(8, 218, 253, 0.35)');    // Increased from 0.1
        gradient.addColorStop(1, 'rgba(8, 218, 253, 0.1)');       // Increased from 0
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8;  // Increased from 0.5 for more visibility
        
        ctx.moveTo(x + waveOffset, 0);
        ctx.lineTo(x - waveOffset, height);
        ctx.stroke();
      }
      
      // Update time for animation
      time += 16;
    }

    // Animation loop
    function animate() {
      drawGrid();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-grid" />;
};

export default AnimatedGrid;
