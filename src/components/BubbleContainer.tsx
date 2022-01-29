import { useEffect, useState } from "react";
import { Bubble } from "./Bubble";

type BubbleType = {
  id: number;
};

type BubbleContainerProps = {
  intensity: number;
};

export const BubbleContainer = ({ intensity }: BubbleContainerProps) => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  const newBubble = () => {
    setBubbles((prev) => [...prev, { id: Math.random() }]);
  };

  const removeBubble = (id: number) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    console.log(intensity);
    if (intensity === 0 || isNaN(intensity)) return;
    const interval = setInterval(() => {
      if (Math.random() > 1 - intensity / 100) newBubble();
    }, 100);
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <>
      {bubbles.map((b) => (
        <Bubble key={b.id} onDeath={() => removeBubble(b.id)} />
      ))}
    </>
  );
};
