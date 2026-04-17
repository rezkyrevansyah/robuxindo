export type MockAuthUser = {
  name: string;
  email: string;
  phone?: string;
};

const STORAGE_KEY = "robuxindo-auth-user";
const EVENT_NAME = "robuxindo-auth-change";

export function getMockAuthUser(): MockAuthUser | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as MockAuthUser;
  } catch {
    return null;
  }
}

export function setMockAuthUser(user: MockAuthUser) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function clearMockAuthUser() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function subscribeMockAuth(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;

  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

export function getUserInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "RB";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}
