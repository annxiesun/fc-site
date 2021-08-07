import globalStyles from './globalStyles';

// Generates correct theme based on string themeType
export const themeGenerator = (theme, newClasses) => {
  const baseTheme = globalStyles(theme);
  for (const [key, value] of Object.entries(newClasses)) {
    baseTheme[key] = { ...baseTheme[key], ...value };
  }

  return baseTheme;
};