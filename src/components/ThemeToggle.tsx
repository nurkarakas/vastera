"use client";

import { useEffect, useState } from "react";
import { Flex, ToggleButton } from "@/once-ui/components";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Sayfa yüklendiğinde localStorage'dan tema ayarını al
  useEffect(() => {
    // Tarayıcı tarafında çalışıyor muyuz kontrol et
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      // Sistem tercihini kontrol et
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  // Tema değiştiğinde HTML kök öğesini güncelle ve localStorage'a kaydet
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Flex
      background={theme === "dark" ? "brand-weak" : "accent-weak"}
      border="neutral-medium"
      borderStyle="solid-1"
      radius="m-4"
      shadow="l"
      padding="4"
      justifyContent="center"
    >
      <ToggleButton
        prefixIcon={theme === "dark" ? "sun" : "moon"}
        onClick={toggleTheme}
        selected={theme === "dark"}
        aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <Flex paddingX="4">{theme === "dark" ? "🌞 Light" : "🌙 Dark"}</Flex>
      </ToggleButton>
    </Flex>
  );
};

export default ThemeToggle;
