import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const triggerAuspiciousPetals = () => {
  // Custom auspicious Tamil wedding flower petal burst (Jasmine white, Kumkum red, Gold & Marigold yellow)
  const count = 120;
  const defaults = {
    origin: { y: 0.6 },
    spread: 360,
    ticks: 180,
    gravity: 0.7,
    decay: 0.94,
    startVelocity: 25,
    shapes: ['circle' as const],
    colors: ['#FFFBEB', '#FFFFFF', '#D4AF37', '#B88A3B', '#991B1B', '#E11D48', '#F59E0B'],
  };

  // Center burst
  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.5),
    scalar: 1.2,
  });

  // Left & right gentle cascades
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.25),
      origin: { x: 0.2, y: 0.5 },
      angle: 60,
      spread: 70,
    });
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.25),
      origin: { x: 0.8, y: 0.5 },
      angle: 120,
      spread: 70,
    });
  }, 150);
};

export const PetalShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Subtle gentle ambient petals
    const petalCount = Math.min(24, Math.floor(window.innerWidth / 40));
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      opacity: number;
      colorType: 'jasmine' | 'gold' | 'rose';
    }

    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 4,
      speedY: Math.random() * 0.6 + 0.35,
      speedX: Math.sin(Math.random() * Math.PI) * 0.3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.35 + 0.2,
      colorType: Math.random() > 0.6 ? 'gold' : Math.random() > 0.4 ? 'rose' : 'jasmine',
    }));

    let t = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(t + p.y * 0.01) * 0.5 + p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.colorType === 'jasmine') {
          // Jasmine petal (creamy soft white)
          ctx.fillStyle = '#FFFDF5';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.colorType === 'gold') {
          // Shimmering gold dust particle
          ctx.fillStyle = '#D4AF37';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Soft rose petal (delicate crimson maroon)
          ctx.fillStyle = '#8B1E1E';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.9, p.size * 0.5, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      aria-hidden="true"
    />
  );
};
