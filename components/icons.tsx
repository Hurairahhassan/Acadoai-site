import {
  Award,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  CircleCheckBig,
  Database,
  KeyRound,
  Lock,
  Server,
  GraduationCap,
  MessagesSquare,
  School,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "../content/pages";

export const icons: Record<IconName, LucideIcon> = {
  database: Database,
  server: Server,
  key: KeyRound,
  lock: Lock,
  users: Users,
  calendar: CalendarDays,
  check: CircleCheckBig,
  wallet: Wallet,
  award: Award,
  zap: Zap,
  sparkles: Sparkles,
  bot: Bot,
  message: MessagesSquare,
  briefcase: Briefcase,
  chart: BarChart3,
  shield: ShieldCheck,
  phone: Smartphone,
  school: School,
  building: Building2,
  graduation: GraduationCap,
  book: BookOpen,
};

const sizes = { sm: "h-9 w-9 rounded-lg [&_svg]:h-[18px] [&_svg]:w-[18px]", md: "h-12 w-12 rounded-xl [&_svg]:h-[22px] [&_svg]:w-[22px]", lg: "h-14 w-14 rounded-2xl [&_svg]:h-6 [&_svg]:w-6" };
const tones = {
  light: "bg-gradient-to-br from-[#e8f4ff] to-white text-royal ring-1 ring-inset ring-sky/60 shadow-[0_6px_16px_-8px_rgba(42,58,186,0.45)]",
  solid: "bg-gradient-to-br from-brand to-royal text-white shadow-[0_8px_20px_-8px_rgba(42,58,186,0.7)]",
  dark: "bg-white/10 text-sky ring-1 ring-inset ring-white/15",
};

/** One consistent icon treatment for the whole site. */
export function IconTile({ name, size = "md", tone = "light", className = "" }: { name: IconName; size?: keyof typeof sizes; tone?: keyof typeof tones; className?: string }) {
  const Icon = icons[name];
  return (
    <span className={`grid shrink-0 place-items-center ${sizes[size]} ${tones[tone]} ${className}`} aria-hidden>
      <Icon strokeWidth={1.75} />
    </span>
  );
}
