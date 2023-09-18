import React from "react";
import TextTransition from "react-text-transition";
import styles from "./styles/Features.module.scss";
const TEXTS = [
  "Full-stack developer",
  "Freediver",
  "Gamer",
  "Photographer"
];

const Features = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      className={styles.features}
    >
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
};

export default Features;
