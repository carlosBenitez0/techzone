import { redirect } from "next/navigation";
import { useAuthStore } from "@/app/store";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is a client component, but we can't use hooks directly here
  // We'll handle the redirect in the page component instead
  return <>{children}</>;
}
