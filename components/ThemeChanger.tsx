import Toggle from "./Toggle";
import styles from "./styles/ThemeChanger.module.scss";
import { useTheme } from "next-themes";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const checked = theme === "dark";

  const onChange = () => {
    setTheme(checked ? "light" : "dark");
  };

  return (
    <div className={styles.darkModeToggle}>
      <button type="button" onClick={() => setTheme("light")}>
        ☀
      </button>
      <Toggle checked={checked} onChange={onChange} />
      <button type="button" onClick={() => setTheme("dark")}>
        ☾
      </button>
    </div>
  );
};

export default ThemeChanger;
