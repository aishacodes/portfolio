import { useEffect } from "react";
import { entity, persistence } from "simpler-state";

export type ThemeType = "light" | "dark";

const defaultState: {
  theme: ThemeType;
} = {
  theme: "light",
};

const stored =
  typeof window !== "undefined" &&
  window.localStorage.getItem("aishat=portfolio-theme");

const initState = stored ? JSON.parse(stored) : defaultState;

export const portfolioEntity = entity(initState, [
  persistence("aishat=portfolio-theme"),
]);

export const setTheme = (theme: ThemeType) => {
  const colorTheme = portfolioEntity.get();

  const root = window.document.documentElement;
  root.classList.remove(colorTheme.theme);
  root.classList.add(theme);
  portfolioEntity.set({
    theme,
  });
};

export const usetheme = () => {
  const colorTheme = portfolioEntity.use();
  let theme = colorTheme.theme ?? "dark";

  useEffect(() => {
    theme = colorTheme.theme;
  }, []);

  return {
    colorTheme: theme,
  };
};
