import car360Frames from "@/data/car360-frames.json";

const MODEL_NAME_MAP: Record<string, string> = {
  BJ60: "BJ60",
  BJ80: "BJ80",
  "BJ40 C": "BJ40 PLUS",
  "BJ40 PRO": "BJ40 PLUS",
  "BJ40 Pro": "BJ40 PLUS",
  "BJ40 PLUS": "BJ40 PLUS",
  "BJ40 SE": "BJ40 SE",
  F40: "F40",
  BJ30: "BJ30",
  "BJ30e Smart Hybrid": "BJ30e Smart Hybrid",
  X7: "ALL NEW X7",
  "ALL NEW X7": "ALL NEW X7",
  X55: "X55 II",
  "X55 II": "X55 II",
  X35: "X35",
  "U5 PLUS": "U5 PLUS",
  EU5: "EU5",
  "Arcfox T1": "Arcfox T1",
  "Arcfox T5": "Arcfox T5",
  T1: "Arcfox T1",
  T5: "Arcfox T5",
};

type Car360Manifest = Record<string, Record<string, string[]>>;

const manifest = car360Frames as Car360Manifest;

function colorKeys(colors: Record<string, string[]>): string[] {
  return Object.keys(colors).sort((a, b) => {
    const na = Number(a.replace("color", "")) || 0;
    const nb = Number(b.replace("color", "")) || 0;
    return na - nb;
  });
}

function resolveFrames(
  modelName: string,
  colorIndex: number,
): string[] | null {
  const mapped = MODEL_NAME_MAP[modelName] ?? modelName;
  const candidates = [mapped, modelName];

  if (modelName === "BJ40 C" || modelName === "BJ40 PRO" || mapped === "BJ40 PLUS") {
    candidates.unshift("BJ40 PLUS", "BJ40 PRO", "BJ40 C");
  }
  if (modelName === "X7" || mapped === "ALL NEW X7") {
    candidates.unshift("ALL NEW X7", "X7");
  }
  if (modelName === "X55" || mapped === "X55 II") {
    candidates.unshift("X55 II", "X55");
  }
  if (modelName === "Arcfox T1" || modelName === "T1") {
    candidates.unshift("Arcfox T1", "T1");
  }
  if (modelName === "Arcfox T5" || modelName === "T5") {
    candidates.unshift("Arcfox T5", "T5");
  }

  for (const key of candidates) {
    const colors = manifest[key];
    if (!colors) continue;

    const keys = colorKeys(colors);

    const preferred = colors[`color${colorIndex}`];
    if (preferred && preferred.length >= 1) return preferred;

    if (colorIndex >= 0 && colorIndex < keys.length) {
      const byOrder = colors[keys[colorIndex]];
      if (byOrder && byOrder.length >= 1) return byOrder;
    }

    for (const k of keys) {
      const frames = colors[k];
      if (frames && frames.length >= 1) return frames;
    }
  }

  return null;
}

export function getCar360Frames(
  modelName: string,
  colorIndex = 0,
): string[] | null {
  return resolveFrames(modelName, colorIndex);
}

export function getAvailableColorIndexes(modelName: string): number[] {
  const mapped = MODEL_NAME_MAP[modelName] ?? modelName;
  for (const key of [
    mapped,
    modelName,
    "BJ40 PLUS",
    "ALL NEW X7",
    "X55 II",
    "Arcfox T1",
    "Arcfox T5",
  ]) {
    const colors = manifest[key];
    if (!colors) continue;
    return colorKeys(colors).map((k) => Number(k.replace("color", "")) || 0);
  }
  return [0];
}

export function hasCar360(modelName: string): boolean {
  return Boolean(resolveFrames(modelName, 0));
}
