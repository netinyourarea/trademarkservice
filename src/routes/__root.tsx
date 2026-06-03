import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary">404 · Off Market</div>
        <h1 className="mt-4 font-display text-6xl md:text-7xl">Page not listed</h1>
        <p className="mt-3 text-muted-foreground">This route isn't part of our coverage universe.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl">Something interrupted the feed</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please retry or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen pt-24">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
