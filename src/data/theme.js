/* ═══════════════════════════════════════════════════════════════════
   FULL PALETTES — each palette defines ALL colors for the entire UI
   bg, bg2, surface, surface2, accent, accent2, text, text2, text3
═══════════════════════════════════════════════════════════════════ */

export const COLOR_PALETTES = [
  {
    id:    "midnight",
    label: "Midnight",
    emoji: "🌑",
    dark:  true,
    colors: {
      bg:       "#0D0D0D",
      bg2:      "#111111",
      surface:  "#171717",
      surface2: "#1E1E1E",
      accent:   "#00BFFF",
      accent2:  "#8B5CF6",
      text:     "#FFFFFF",
      text2:    "#B3B3B3",
      text3:    "#555555",
    },
    preview: ["#0D0D0D", "#00BFFF", "#8B5CF6", "#1E1E1E", "#FFFFFF"],
  },
  {
    id:    "aurora",
    label: "Aurora",
    emoji: "🌌",
    dark:  true,
    colors: {
      bg:       "#050E1A",
      bg2:      "#071525",
      surface:  "#0C1F35",
      surface2: "#112840",
      accent:   "#00FFD1",
      accent2:  "#0080FF",
      text:     "#E8F4FF",
      text2:    "#7AAFD4",
      text3:    "#3A6080",
    },
    preview: ["#050E1A", "#00FFD1", "#0080FF", "#0C1F35", "#E8F4FF"],
  },
  {
    id:    "volcano",
    label: "Volcano",
    emoji: "🌋",
    dark:  true,
    colors: {
      bg:       "#0F0804",
      bg2:      "#160C05",
      surface:  "#1E1008",
      surface2: "#2A160A",
      accent:   "#FF6B2B",
      accent2:  "#FF2D78",
      text:     "#FFF0E8",
      text2:    "#C4856A",
      text3:    "#6B3820",
    },
    preview: ["#0F0804", "#FF6B2B", "#FF2D78", "#1E1008", "#FFF0E8"],
  },
  {
    id:    "forest",
    label: "Forest",
    emoji: "🌲",
    dark:  true,
    colors: {
      bg:       "#060F08",
      bg2:      "#0A1A0C",
      surface:  "#0F2212",
      surface2: "#152B18",
      accent:   "#22C55E",
      accent2:  "#06B6D4",
      text:     "#E8FFF0",
      text2:    "#7AB88A",
      text3:    "#2E5E38",
    },
    preview: ["#060F08", "#22C55E", "#06B6D4", "#0F2212", "#E8FFF0"],
  },
  {
    id:    "cotton",
    label: "Cotton",
    emoji: "☁️",
    dark:  false,
    colors: {
      bg:       "#F8F9FF",
      bg2:      "#EEF0FF",
      surface:  "#FFFFFF",
      surface2: "#E8EBFF",
      accent:   "#6366F1",
      accent2:  "#8B5CF6",
      text:     "#1A1A2E",
      text2:    "#4A4A6A",
      text3:    "#9494B0",
    },
    preview: ["#F8F9FF", "#6366F1", "#8B5CF6", "#FFFFFF", "#1A1A2E"],
  },
  {
    id:    "peach",
    label: "Peach",
    emoji: "🍑",
    dark:  false,
    colors: {
      bg:       "#FFF8F5",
      bg2:      "#FFE8DC",
      surface:  "#FFFFFF",
      surface2: "#FFEEE6",
      accent:   "#F97316",
      accent2:  "#EC4899",
      text:     "#2D1206",
      text2:    "#7A3A1E",
      text3:    "#C4855A",
    },
    preview: ["#FFF8F5", "#F97316", "#EC4899", "#FFFFFF", "#2D1206"],
  },
  {
    id:    "arctic",
    label: "Arctic",
    emoji: "❄️",
    dark:  false,
    colors: {
      bg:       "#F0F9FF",
      bg2:      "#E0F2FF",
      surface:  "#FFFFFF",
      surface2: "#DBEEFF",
      accent:   "#0284C7",
      accent2:  "#0EA5E9",
      text:     "#0C2340",
      text2:    "#2E5F88",
      text3:    "#7AADCC",
    },
    preview: ["#F0F9FF", "#0284C7", "#0EA5E9", "#FFFFFF", "#0C2340"],
  },
  {
    id:    "matcha",
    label: "Matcha",
    emoji: "🍵",
    dark:  false,
    colors: {
      bg:       "#F3FAF0",
      bg2:      "#E3F5DD",
      surface:  "#FFFFFF",
      surface2: "#DCEED5",
      accent:   "#16A34A",
      accent2:  "#0D9488",
      text:     "#0A2010",
      text2:    "#2D6040",
      text3:    "#7AAA80",
    },
    preview: ["#F3FAF0", "#16A34A", "#0D9488", "#FFFFFF", "#0A2010"],
  },
];

/* ─── TOKEN BUILDER ──────────────────────────────────────────────
   Takes a palette and builds all the derived tokens
────────────────────────────────────────────────────────────────── */
export function buildTheme(palette) {
  const { colors, dark } = palette;
  const { accent, accent2 } = colors;

  const grad = `linear-gradient(135deg, ${accent} 0%, ${accent2} 100%)`;

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  };

  const rgb1 = hexToRgb(accent);
  const rgb2 = hexToRgb(accent2);

  return {
    ...colors,
    grad,
    border:      dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    borderHover: `rgba(${rgb1}, 0.4)`,
    glass:       dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    glassHover:  dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    shadow:      dark ? "0 8px 48px rgba(0,0,0,0.6)" : "0 8px 48px rgba(0,0,0,0.10)",
    glow:        `0 0 32px rgba(${rgb1}, ${dark ? "0.22" : "0.15"})`,
    glow2:       `0 0 32px rgba(${rgb2}, ${dark ? "0.22" : "0.15"})`,
  };
}

// Default exports for legacy imports
export const DARK  = buildTheme(COLOR_PALETTES[0]);
export const LIGHT = buildTheme(COLOR_PALETTES[4]);
