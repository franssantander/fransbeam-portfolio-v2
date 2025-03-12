import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react/dist/iconify.js";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" && (
        <Button size="sm" variant="ghost" onClick={() => setTheme("dark")}>
          <Icon icon="lucide:moon" />
        </Button>
      )}
      {theme === "dark" && (
        <Button size="sm" variant="ghost" onClick={() => setTheme("light")}>
          <Icon icon="lucide:sun" />
        </Button>
      )}
    </>
  );
}
