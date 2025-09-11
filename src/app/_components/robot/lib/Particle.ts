// import { ParticleAnimationOptions } from "../ParticleAnimation";

// export type Point = {
//   x: number
//   y: number
// }

// const rgb = (rgbString: string) => rgbString.match(/\d+/g);


// export class Particle {
//     wRef: React.RefObject<number>
//     hRef: React.RefObject<number>
//     x: number
//     y: number
//     color: string
//     radius: number
//     speed: number
//     directionAngle: number
//     vector: {x: number, y: number}

//     constructor(options: ParticleAnimationOptions, wRef: React.RefObject<number>, hRef: React.RefObject<number>) {
//       this.wRef = wRef
//       this.hRef = hRef
//       this.x = Math.random() * wRef.current;
//       this.y = Math.random() * hRef.current;
//       this.color = options.particleColor;
//       this.radius =
//         options.defaultRadius + Math.random() * options.variantRadius;
//       this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
//       this.directionAngle = Math.floor(Math.random() * 360);
//       this.vector = {
//         x: Math.cos(this.directionAngle) * this.speed,
//         y: Math.sin(this.directionAngle) * this.speed,
//       };
//     }

//     update() {
//       this.border();
//       this.x += this.vector.x;
//       this.y += this.vector.y;
//     }

//     border() {
//       if (this.x >= this.wRef.current || this.x <= 0) {
//         this.vector.x *= -1;
//       }
//       if (this.y >= this.hRef.current || this.y <= 0) {
//         this.vector.y *= -1;
//       }
//       if (this.x > this.wRef.current) this.x = this.wRef.current;
//       if (this.y > this.hRef.current) this.y = this.hRef.current;
//       if (this.x < 0) this.x = 0;
//       if (this.y < 0) this.y = 0;
//     }

//     draw(ctx: CanvasRenderingContext2D) {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       ctx.closePath();
//       ctx.fillStyle = this.color;
//       ctx.fill();
//     }
//   }

//     // Helper functions
// export  function checkDistance(x1: number, y1: number, x2: number, y2: number) {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   }

// export  function linkPoints(options: ParticleAnimationOptions, ctx: CanvasRenderingContext2D, point: Point, hubs: Point[]) {
//     for (let i = 0; i < hubs.length; i++) {
//       const distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
//       const opacity = 1 - distance / options.linkRadius;
//       if (opacity > 0) {
//         ctx.lineWidth = 0.5;
//         ctx.strokeStyle = `rgba(${rgb(options.lineColor)?.[0]},${rgb(options.lineColor)?.[1]},${rgb(options.lineColor)?.[2]},${opacity})`;
//         ctx.beginPath();
//         ctx.moveTo(point.x, point.y);
//         ctx.lineTo(hubs[i].x, hubs[i].y);
//         ctx.closePath();
//         ctx.stroke();
//       }
//     }
//   }