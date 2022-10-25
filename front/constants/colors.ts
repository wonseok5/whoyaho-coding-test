const colors = {
  primaryColor: "#fc3aff",
  secondaryColor: "#4260f5",
  backgroundColor: "#fafafa",
  linkColor: "#002aff",
  darkGray: "#707070",
  black: "#000",
  white: "#fff",
} as const;
export type Color = typeof colors;

export default colors;
