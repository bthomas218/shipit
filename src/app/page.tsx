import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-full bg-background text-foreground">
      <section className="flex min-h-screen items-center px-6 py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              <Rocket className="size-4" aria-hidden="true" />
              ShipIt
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Stop thinking, start shipping.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Turn a rough app idea into something you can try, shape, and
              launch.
            </p>
            <Button asChild size="lg" className="mt-10 h-11 px-5 text-base">
              <a href="#idea">Try it out</a>
            </Button>
          </div>

          <div
            className="hidden min-h-[520px] rounded-lg border bg-[linear-gradient(135deg,var(--primary)_0_1px,transparent_1px_28px),linear-gradient(45deg,var(--border)_0_1px,transparent_1px_24px)] bg-[size:28px_28px,24px_24px] lg:block"
            aria-hidden="true"
          />
        </div>
      </section>

      <section id="idea" className="scroll-mt-8 px-6 py-20">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            What are you shipping?
          </h2>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="project-idea">
              App or project idea
            </label>
            <input
              id="project-idea"
              name="project-idea"
              type="text"
              placeholder="A habit tracker for remote teams"
              className="h-11 min-w-0 flex-1 rounded-lg border bg-background px-4 text-base outline-none transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <Button type="submit" size="lg" className="h-11 px-5 text-base">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
