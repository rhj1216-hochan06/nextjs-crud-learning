export const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export function apiUrl(path) {
  if (!API_URL) {
    throw new Error("API_URL is not defined.");
  }

  const baseUrl = API_URL.endsWith("/") ? API_URL : `${API_URL}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return new URL(normalizedPath, baseUrl).toString();
}
