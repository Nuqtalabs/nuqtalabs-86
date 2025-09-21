import { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{ 
      x: number; 
      y: number; 
      radius: number; 
      vx: number; 
      vy: number;
      opacity: number;
    }> = [];
    const numStars = 150;

    // Initialize stars with movement and opacity
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3, // Slow horizontal movement
        vy: (Math.random() - 0.5) * 0.3, // Slow vertical movement
        opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2 and 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        // Gentle opacity variation
        star.opacity += (Math.random() - 0.5) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      // Regenerate stars for new canvas size
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none bg-black"
    />
  );
};