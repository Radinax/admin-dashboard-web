export function capitalizeFirstLetter(str: string) {
  if (!str) return str; // Return the original string if it's empty
  return str.charAt(0).toUpperCase() + str.slice(1);
}
