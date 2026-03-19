export const AUTH_URL = "https://functions.poehali.dev/1521ec90-5416-4e69-be5f-5dca89ad5e9f";
export const TESTIMONIALS_URL = "https://functions.poehali.dev/ce15942a-c5f3-4e40-a6ce-0aca3ead1e01";
export const PORTFOLIO_URL = "https://functions.poehali.dev/e7a04abf-c814-49ed-aeaa-9c3eab9257e7";
export const UPLOAD_URL = "https://functions.poehali.dev/738f209e-721e-4bbc-b3c9-1f30c6a6757a";

export const CATEGORIES = ["Корпоративы", "Государственные мероприятия", "Фестивали", "Конференции", "Выездное обслуживание"];

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  is_visible: boolean;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
  guests: number;
  date: string;
  is_visible: boolean;
  sort_order: number;
}

export type Tab = "testimonials" | "portfolio";

export type ToastFn = ReturnType<typeof import("@/hooks/use-toast").useToast>["toast"];

export async function apiCall(url: string, options: RequestInit, onAuthFail: () => void): Promise<Response | null> {
  try {
    const res = await fetch(url, options);
    if (res.status === 401) { onAuthFail(); return null; }
    return res;
  } catch {
    return null;
  }
}
