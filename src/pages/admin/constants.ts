export { API as default } from "@/config/api";
import { API } from "@/config/api";

export const AUTH_URL = API.auth;
export const TESTIMONIALS_URL = API.testimonials;
export const PORTFOLIO_URL = API.portfolio;
export const UPLOAD_URL = API.upload;

export const CATEGORIES = ["Корпоративные мероприятия", "Деловые мероприятия", "Массовые мероприятия", "Государственные мероприятия", "Фестивали", "Конференции", "Выездное обслуживание"];

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