"use client";

import { useEffect, useRef } from "react";
import styles from "./FloatingParticles.module.scss";

interface FloatingParticlesProps {
  count?: number;
  speed?: number;
  shape?: "dot" | "star";
  parentRef?: React.RefObject<HTMLDivElement>;
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  twinkleSpeed: number;
  twinkleDirection: number;

  constructor(canvas: HTMLCanvasElement, speed: number, colors: string[]) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.2 + 0.6; // ✨ biraz daha büyük
    this.speedX = (Math.random() - 0.5) * speed;
    this.speedY = (Math.random() - 0.5) * speed;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.alpha = Math.random() * 0.6 + 0.4; // başlangıç parlaklığı
    this.twinkleSpeed = Math.random() * 0.015 + 0.005; // parıltı hızı
    this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Kenardan sekme
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    // Parlama / sönme efekti
    this.alpha += this.twinkleSpeed * this.twinkleDirection;
    if (this.alpha >= 1) {
      this.alpha = 1;
      this.twinkleDirection = -1;
    } else if (this.alpha <= 0.3) {
      this.alpha = 0.3;
      this.twinkleDirection = 1;
    }
  }

  draw(ctx: CanvasRenderingContext2D, shape: "dot" | "star") {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;

    if (shape === "dot") {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else {
      this.drawStar(ctx, this.x, this.y, 5, this.size * 2, this.size);
    }
  }

  private drawStar(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    points: number,
    outerRadius: number,
    innerRadius: number
  ) {
    ctx.beginPath();
    const step = Math.PI / points;
    for (let i = 0; i < 2 * points; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = i * step;
      ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fill();
  }
}

export function FloatingParticles({
  count = 300,
  speed = 0.2,
  shape = "dot",
  parentRef,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrame: number;

    const colors = [
      "rgba(255,255,255,1)", // saf beyaz
      "rgba(255,255,200,0.9)", // sarımsı beyaz
      "rgba(200,220,255,0.9)", // mavi beyaz
    ];

    const resizeCanvas = () => {
      const parent = parentRef?.current;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      particles = Array.from(
        { length: count },
        () => new Particle(canvas, speed, colors)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas);
        p.draw(ctx, shape);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [count, speed, shape, parentRef]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
