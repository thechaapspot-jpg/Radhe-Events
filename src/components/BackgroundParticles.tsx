import { useEffect, useRef } from 'react';

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    function drawFlower(x: number, y: number, size: number, opacity: number) {
      if (!ctx) return;
      
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Simple flower shape
      ctx.fillStyle = '#F5C542';
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.PI * 2 * i) / 6);
        ctx.beginPath();
        ctx.arc(size * 2, 0, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      // Center
      ctx.fillStyle = '#B22222';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        drawFlower(particle.x, particle.y, particle.size, particle.opacity);

        particle.y -= particle.speedY;
        particle.x += particle.speedX;

        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
