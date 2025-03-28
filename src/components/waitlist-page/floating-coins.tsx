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
};

export default function FloatingCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();

  // Initialize coins on component mount
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const initialCoins = Array.from({ length: 25 }, (_, i) =>
      createRandomCoin(i)
    );
    setCoins(initialCoins);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animate coins
  useEffect(() => {
    if (dimensions.width === 0) return;

    const animate = () => {
      setCoins((prevCoins) =>
        prevCoins.map((coin) => {
          let newX = coin.x + coin.speedX;
          let newY = coin.y + coin.speedY;
          const newRotation = (coin.rotation + coin.rotationSpeed) % 360;

          let newScale = coin.scale + 0.0015 * coin.scaleDirection;
          let newScaleDirection = coin.scaleDirection;

          if (newScale > 1.2) {
            newScale = 1.2;
            newScaleDirection = -1;
          } else if (newScale < 0.8) {
            newScale = 0.8;
            newScaleDirection = 1;
          }

          if (newX <= 0 || newX >= dimensions.width - coin.size) {
            const randomFactor = 0.9 + Math.random() * 0.2;
            coin.speedX *= -randomFactor;
            newX = Math.max(0, Math.min(newX, dimensions.width - coin.size));
          }

          if (newY <= 0 || newY >= dimensions.height - coin.size) {
            const randomFactor = 0.9 + Math.random() * 0.2;
            coin.speedY *= -randomFactor;
            newY = Math.max(0, Math.min(newY, dimensions.height - coin.size));
          }

          return {
            ...coin,
            x: newX,
            y: newY,
            rotation: newRotation,
            scale: newScale,
            scaleDirection: newScaleDirection,
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

  function createRandomCoin(id: number): Coin {
    const coinType = coinTypes[Math.floor(Math.random() * coinTypes.length)];
    const size = Math.floor(
      Math.random() * (coinType.maxSize - coinType.minSize) + coinType.minSize
    );

    const isLeftSide = Math.random() < 0.5;
    let x;

    if (isLeftSide) {
      x = Math.random() * (dimensions.width || window.innerWidth) * 0.4;
    } else {
      x =
        (dimensions.width || window.innerWidth) * 0.6 +
        Math.random() * (dimensions.width || window.innerWidth) * 0.4;
    }

    const y = Math.random() * (dimensions.height || window.innerHeight);

    const centerX = (dimensions.width || window.innerWidth) / 2;
    const distanceFromCenter = Math.abs(x - centerX) / centerX;
    const baseOpacity = 0.2 + distanceFromCenter * 0.5;

    return {
      id,
      src: coinType.src,
      size,
      x,
      y,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: (Math.random() - 0.5) * 1.2,
      opacity: baseOpacity,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      scale: 0.9 + Math.random() * 0.3,
      scaleDirection: Math.random() < 0.5 ? 1 : -1,
      zIndex: Math.floor(Math.random() * 10),
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
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={coin.src}
            alt="Cryptocurrency coin"
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))" }}
          />
        </div>
      ))}
    </div>
  );
}
