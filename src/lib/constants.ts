import localImages from "@/data/local-images.json";

export const API_BASE = "https://baicserver.baicuae.com";
export const IMAGE_BASE = `${API_BASE}/uploads/.tmp/`;
export const CAR360_SRC = "https://360.baicuae.com";

const localImageMap = localImages as Record<string, string>;

/** Rewrite absolute baicuae.com URLs to local paths. */
export function localPath(url: string): string {
  if (!url) return "/";
  if (url.startsWith("https://baicuae.com")) {
    return url.replace("https://baicuae.com", "") || "/";
  }
  if (url.startsWith("http://baicuae.com")) {
    return url.replace("http://baicuae.com", "") || "/";
  }
  if (url.startsWith("https://www.baicuae.com")) {
    return url.replace("https://www.baicuae.com", "") || "/";
  }
  return url;
}

/**
 * Resolve an API image filename to a usable URL.
 * Prefers mirrored files under /images/api, then falls back to the live CDN.
 */
export function imageUrl(filename: string): string {
  if (!filename) return "";
  if (
    filename.startsWith("/") ||
    filename.startsWith("http://") ||
    filename.startsWith("https://")
  ) {
    return filename;
  }

  const local = localImageMap[filename];
  if (local) return encodePathSegments(local);

  const spaceVariant = filename.replace(/_/g, " ");
  const underscoreVariant = filename.replace(/ /g, "_");
  if (localImageMap[spaceVariant]) return encodePathSegments(localImageMap[spaceVariant]);
  if (localImageMap[underscoreVariant]) {
    return encodePathSegments(localImageMap[underscoreVariant]);
  }

  return `${IMAGE_BASE}${encodeURIComponent(filename)}`;
}

function encodePathSegments(path: string): string {
  return path
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");
}
