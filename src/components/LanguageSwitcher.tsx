import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "fr" as const, label: "Français", flag: "🇫🇷" },
  { code: "en" as const, label: "English", flag: "🇬🇧" },
  { code: "es" as const, label: "Español", flag: "🇪🇸" },
  { code: "it" as const, label: "Italiano", flag: "🇮🇹" },
  { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
  { code: "nl" as const, label: "Nederlands", flag: "🇳🇱" },
  { code: "zh" as const, label: "中文", flag: "🇨🇳" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-muted-foreground hover:text-foreground"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium">{currentLang?.flag} {language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
