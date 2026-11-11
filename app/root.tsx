import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { SiteLayout } from "~/components/layout/SiteLayout";
import { getOrganizationStructuredData } from "~/utils/seo";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/images/branding/logo-512.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationStructuredData()) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let is404 = false;
  let message = "Something went wrong";
  let details = "An unexpected error occurred while loading this page.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    message = is404 ? "Page not found" : "Server error";
    details = is404
      ? "The page you are looking for does not exist or may have been relocated."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#1B634E] flex flex-col justify-between p-6 sm:p-12">
      <header className="flex items-center justify-between border-b border-[#1B634E]/15 pb-6">
        <span className="font-editorial text-xl font-bold tracking-tight">Zilton Life Care</span>
        <span className="text-xs font-semibold text-[#0D9E71] bg-[#DCEEE4]/80 px-3 py-1 rounded-full">
          {is404 ? "Error 404" : "Error"}
        </span>
      </header>

      <main className="max-w-2xl my-auto py-16">
        <span className="text-xs font-semibold text-[#0D9E71] block mb-3">
          {is404 ? "Route not found" : "Application notice"}
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#1B634E] leading-tight mb-4">
          {message}
        </h1>
        <p className="text-base sm:text-lg text-[#3E6958] font-light leading-relaxed mb-8">
          {details}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider font-semibold">
          <a
            href="/"
            className="px-6 py-3.5 rounded-full bg-[#1B634E] hover:bg-[#0D9E71] text-[#FAFCFA] transition-colors shadow-sm"
          >
            Return to homepage
          </a>
          <a
            href="/products"
            className="px-6 py-3.5 rounded-full bg-transparent border border-[#1B634E]/20 hover:bg-[#1B634E]/5 text-[#1B634E] transition-colors"
          >
            Browse products
          </a>
        </div>

        {stack && (
          <pre className="mt-10 p-4 rounded-xl bg-black/5 border border-[#1B634E]/10 text-xs overflow-x-auto text-[#1B634E]">
            <code>{stack}</code>
          </pre>
        )}
      </main>

      <footer className="border-t border-[#1B634E]/15 pt-6 text-xs text-[#3E6958]">
        &copy; {new Date().getFullYear()} Zilton Life Care Private Limited · Mumbai, India
      </footer>
    </div>
  );
}
