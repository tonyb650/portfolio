import React, { useRef, useEffect } from "react";

type ParticleAnimationOptions = {
  particleColor: string,
  lineColor: string,
  particleAmount: number,
  defaultRadius: number,
  variantRadius: number,
  variantSpeedFactor: number,
  linkRadius: number,
}

const DEFAULT_OPTIONS: ParticleAnimationOptions = {
  particleColor: "rgba(255,255,255)",
  lineColor:  "rgba(0,181,255)",
  particleAmount:  30,
  defaultRadius:  2,
  variantRadius:  2,
  variantSpeedFactor:  1,
  linkRadius:  200,
}

type ParticleAnimationProps = {
  containerRef: React.RefObject<HTMLDivElement | null>
  customOptions?: Partial<ParticleAnimationOptions>
  speed?: number
}

const ParticleAnimation = ({ containerRef, customOptions, speed = 1}: ParticleAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const wRef = useRef(0);
  const hRef = useRef(0);

  const options: ParticleAnimationOptions = {
    ...DEFAULT_OPTIONS,
    ...customOptions,
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      if (!canvas || !containerRef?.current) return
      wRef.current = containerRef.current.clientWidth;
      hRef.current = containerRef.current.clientHeight;
      canvas.width = wRef.current;
      canvas.height = hRef.current;
    }

    function initializeParticles() {
      particlesRef.current = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particlesRef.current.push(new Particle(speed, options, wRef, hRef));
      }
    }

    function drawParticles() {
      if(!ctx) return
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw(ctx);
      }
    }

    function drawLines() {
      if (!ctx) return
      for (let i = 0; i < particlesRef.current.length; i++) {
        linkPoints(options, ctx, particlesRef.current[i], particlesRef.current);
      }
    }

    function drawScene() {
      drawLines();
      drawParticles();
    }

    function animationLoop() {
      if (!ctx || !animationId) return
      ctx.clearRect(0, 0, wRef.current, hRef.current);
      drawScene();
      animationId.current = requestAnimationFrame(animationLoop);
    }

    const handleResize = () => {
      resizeCanvas();
      initializeParticles();
    }

    // Start Up The Animation
    resizeCanvas();
    initializeParticles();
    animationLoop();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [options])

  /* This useEffect is primarily for speed changes */
  useEffect(() => {
  if (particlesRef.current.length > 0 ) {
    particlesRef.current.forEach(particle => {
      // Calculate new speed for this particle
      const overallSpeed = speed + (Math.random() * speed * (options.variantSpeedFactor || 0));
      // Set new speed
      particle.speed = overallSpeed;
      // Recalculate and set vector based on new speed and direction
      particle.vector = {
        x: Math.cos(particle.directionAngle) * overallSpeed,
        y: Math.sin(particle.directionAngle) * overallSpeed,
      };
    });
  }
}, [speed, options]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-accent block w-full rounded-md"
    />
  );
}

export default ParticleAnimation;


/****************************/
/* Particle Class & Helpers */
/****************************/

type Point = {
  x: number
  y: number
}

const rgb = (rgbString: string) => rgbString.match(/\d+/g);

export class Particle {
    wRef: React.RefObject<number>
    hRef: React.RefObject<number>
    x: number
    y: number
    color: string
    radius: number
    speed: number
    directionAngle: number
    vector: {x: number, y: number}

    constructor(speed: number, options: ParticleAnimationOptions, wRef: React.RefObject<number>, hRef: React.RefObject<number>) {
      this.wRef = wRef
      this.hRef = hRef
      this.x = Math.random() * wRef.current;
      this.y = Math.random() * hRef.current;
      this.color = options.particleColor;
      this.radius =
        options.defaultRadius + Math.random() * options.variantRadius;
      this.speed = speed + (Math.random() * speed * options.variantSpeedFactor);
      this.directionAngle = Math.floor(Math.random() * 360);
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
    }

    update() {
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    }

    border() {
      if (this.x >= this.wRef.current || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= this.hRef.current || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > this.wRef.current) this.x = this.wRef.current;
      if (this.y > this.hRef.current) this.y = this.hRef.current;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

    // Helper functions
export  function checkDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

export  function linkPoints(options: ParticleAnimationOptions, ctx: CanvasRenderingContext2D, point: Point, hubs: Point[]) {
    for (let i = 0; i < hubs.length; i++) {
      const distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      const opacity = 1 - distance / options.linkRadius;
      if (opacity > 0) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${rgb(options.lineColor)?.[0]},${rgb(options.lineColor)?.[1]},${rgb(options.lineColor)?.[2]},${opacity})`;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(hubs[i].x, hubs[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }