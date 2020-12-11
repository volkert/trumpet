const POTUS = "🇺🇸 Joe Biden 🇺🇸"

export const sanitize = (text) => {
  if (typeof text !== "string") return;
  return text.replace(/POTUS/, POTUS);
}