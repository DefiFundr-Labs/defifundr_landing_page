"use client";

import { useEffect, useState, useRef } from "react";

// Define coin types with their respective sizes and animation properties
const coinTypes = [
  { src: "/coin-btc.svg", minSize: 40, maxSize: 100 },
  { src: "/coin-eth.svg", minSize: 35, maxSize: 90 },
  { src: "/coin-usdt.svg", minSize: 30, maxSize: 85 },
  { src: "/coin-bnb.svg", minSize: 45, maxSize: 110 },
  { src: "/coin-sol.svg", minSize: 35, maxSize: 95 },
];

// Define a coin object structure
type Coin = {
  id: number;
  src: string;
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  scaleDirection: number;
  zIndex: number;
  blur: number;
  blurDirection: number;
};

export default function FloatingCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Initialize coins on component mount
  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Create initial coins - more coins for a fuller background
    const initialCoins = Array.from({ length: 25 }, (_, i) =>
      createRandomCoin(i)
    );
    setCoins(initialCoins);

    // Handle window resize with throttling
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // Throttle to once per 100ms
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animate coins with frame-rate independent animation
  useEffect(() => {
    if (dimensions.width === 0) return;

    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      // Default to 16.67ms (60fps) if it's the first frame
      const deltaTime = lastTimeRef.current
        ? (timestamp - lastTimeRef.current) / 16.67
        : 1;
      lastTimeRef.current = timestamp;

      setCoins((prevCoins) =>
        prevCoins.map((coin) => {
          // Update position with delta time for frame-rate independence
          let newX = coin.x + coin.speedX * deltaTime;
          let newY = coin.y + coin.speedY * deltaTime;
          const newRotation =
            (coin.rotation + coin.rotationSpeed * deltaTime) % 360;

          // Smoother pulsating effect with delta time
          let newScale = coin.scale + 0.0015 * coin.scaleDirection * deltaTime;
          let newScaleDirection = coin.scaleDirection;

          if (newScale > 1.2) {
            newScale = 1.2;
            newScaleDirection = -1;
          } else if (newScale < 0.8) {
            newScale = 0.8;
            newScaleDirection = 1;
          }

          // Blur effect animation
          let newBlur = coin.blur + 0.02 * coin.blurDirection * deltaTime;
          let newBlurDirection = coin.blurDirection;

          if (newBlur > 1.5) {
            newBlur = 1.5;
            newBlurDirection = -1;
          } else if (newBlur < 0) {
            newBlur = 0;
            newBlurDirection = 1;
          }

          // Bounce off edges with slight randomization and smoother transitions
          if (newX <= 0 || newX >= dimensions.width - coin.size) {
            // Add a bit of randomness to the bounce for more natural movement
            const randomFactor = 0.9 + Math.random() * 0.2; // 0.9-1.1
            const newSpeedX = -coin.speedX * randomFactor;

            // Ensure we don't get stuck at the edge
            newX = newX <= 0 ? 1 : dimensions.width - coin.size - 1;

            return {
              ...coin,
              x: newX,
              y: newY,
              speedX: newSpeedX,
              rotation: newRotation,
              scale: newScale,
              scaleDirection: newScaleDirection,
              blur: newBlur,
              blurDirection: newBlurDirection,
            };
          }

          if (newY <= 0 || newY >= dimensions.height - coin.size) {
            const randomFactor = 0.9 + Math.random() * 0.2; // 0.9-1.1
            const newSpeedY = -coin.speedY * randomFactor;

            // Ensure we don't get stuck at the edge
            newY = newY <= 0 ? 1 : dimensions.height - coin.size - 1;

            return {
              ...coin,
              x: newX,
              y: newY,
              speedY: newSpeedY,
              rotation: newRotation,
              scale: newScale,
              scaleDirection: newScaleDirection,
              blur: newBlur,
              blurDirection: newBlurDirection,
            };
          }

          // Add subtle attraction to center for more interesting movement
          const centerX = dimensions.width / 2;
          const centerY = dimensions.height / 2;
          const dx = centerX - (newX + coin.size / 2);
          const dy = centerY - (newY + coin.size / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only apply center attraction if coin is far from center
          if (distance > dimensions.width / 4) {
            const gravityFactor = 0.00005 * deltaTime;
            const newSpeedX = coin.speedX + (dx / distance) * gravityFactor;
            const newSpeedY = coin.speedY + (dy / distance) * gravityFactor;

            // Apply slight drag to prevent excessive speed
            const drag = 0.998;

            return {
              ...coin,
              x: newX,
              y: newY,
              speedX: newSpeedX * drag,
              speedY: newSpeedY * drag,
              rotation: newRotation,
              scale: newScale,
              scaleDirection: newScaleDirection,
              blur: newBlur,
              blurDirection: newBlurDirection,
            };
          }

          // Default case - just update position and animation values
          return {
            ...coin,
            x: newX,
            y: newY,
            rotation: newRotation,
            scale: newScale,
            scaleDirection: newScaleDirection,
            blur: newBlur,
            blurDirection: newBlurDirection,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  // Create a random coin with strategic positioning
  function createRandomCoin(id: number): Coin {
    const coinType = coinTypes[Math.floor(Math.random() * coinTypes.length)];
    const size = Math.floor(
      Math.random() * (coinType.maxSize - coinType.minSize) + coinType.minSize
    );

    // Create clusters of coins on the sides
    const isLeftSide = Math.random() < 0.5;
    let x;

    if (isLeftSide) {
      // Left side cluster
      x = Math.random() * (dimensions.width || window.innerWidth) * 0.4; // 0-40% of screen width
    } else {
      // Right side cluster
      x =
        (dimensions.width || window.innerWidth) * 0.6 +
        Math.random() * (dimensions.width || window.innerWidth) * 0.4; // 60-100% of screen width
    }

    const y = Math.random() * (dimensions.height || window.innerHeight);

    // Vary the opacity based on position (coins closer to center are more transparent)
    const centerX = (dimensions.width || window.innerWidth) / 2;
    const distanceFromCenter = Math.abs(x - centerX) / centerX;
    const baseOpacity = 0.2 + distanceFromCenter * 0.5; // 0.2-0.7 based on distance from center

    return {
      id,
      src: coinType.src,
      size,
      x,
      y,
      speedX: (Math.random() - 0.5) * 1.0, // Slightly slower for more natural movement
      speedY: (Math.random() - 0.5) * 1.0,
      opacity: baseOpacity,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.2,
      scale: 0.9 + Math.random() * 0.3, // 0.9-1.2
      scaleDirection: Math.random() < 0.5 ? 1 : -1,
      zIndex: Math.floor(Math.random() * 10), // Random z-index for layering effect
      blur: Math.random() * 1.5, // Initial blur value between 0 and 1.5
      blurDirection: Math.random() < 0.5 ? 1 : -1, // Direction of blur animation
    };
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute"
          style={{
            left: `${coin.x}px`,
            top: `${coin.y}px`,
            opacity: coin.opacity,
            transform: `rotate(${coin.rotation}deg) scale(${coin.scale})`,
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            zIndex: coin.zIndex,
            filter: `drop-shadow(0 0 ${
              5 + coin.blur * 3
            }px rgba(255, 215, 0, 0.4)) blur(${coin.blur}px)`,
            transition:
              "transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.3s ease-out",
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={coin.src || "/placeholder.svg"}
              alt="Cryptocurrency coin"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                if (!target.src.includes("placeholder")) {
                  target.src = "/placeholder.svg?height=100&width=100";
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
