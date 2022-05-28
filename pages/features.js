import React from "react";
import TextTransition from "react-text-transition";

const TEXTS = [
  "Full-stack developer",
  "Father",
  "Husband",
  "Hobby photographer",
  "Gamer",
  "Coffee lover",
];

export const Features = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return <TextTransition text={TEXTS[index % TEXTS.length]} />;
};
