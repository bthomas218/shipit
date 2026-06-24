"use client";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  Scissors,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ResultCard =
  | {
      type: "text";
      title: string;
      description: string;
      icon: typeof Lightbulb;
      accent: string;
      content: string;
      fallback: string;
    }
  | {
      type: "list";
      title: string;
      description: string;
      icon: typeof Lightbulb;
      accent: string;
      items: string[];
      fallback: string;
    };

type Props = {
  mvpScope?: string[] | null;
  concept?: string | null;
  featuresToCut?: string[] | null;
  starterTasks?: string[] | null;
};

function EmptyResult({ children }: { children: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}

export default function Results({
  mvpScope: mvp,
  featuresToCut,
  concept,
  starterTasks,
}: Props) {
  const resultCards: ResultCard[] = [
    {
      type: "text",
      title: "Concept",
      description: "The focused version of the generated idea.",
      icon: Lightbulb,
      accent: "bg-amber-50 text-amber-700 ring-amber-200",
      content: concept?.trim() ?? "",
      fallback: "No concept was generated. Try regenerating the results.",
    },
    {
      type: "list",
      title: "MVP",
      description: "The smallest useful product to ship first.",
      icon: CheckCircle2,
      accent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      items: mvp?.filter((item) => item.trim()) ?? [],
      fallback: "No MVP scope was generated yet.",
    },
    {
      type: "list",
      title: "Features to Cut",
      description: "Useful later, distracting now.",
      icon: Scissors,
      accent: "bg-rose-50 text-rose-700 ring-rose-200",
      items: featuresToCut?.filter((item) => item.trim()) ?? [],
      fallback: "No features were identified to cut.",
    },
    {
      type: "list",
      title: "Starter Tasks",
      description: "The next concrete build steps.",
      icon: ClipboardList,
      accent: "bg-sky-50 text-sky-700 ring-sky-200",
      items: starterTasks?.filter((item) => item.trim()) ?? [],
      fallback: "No starter tasks were generated yet.",
    },
  ];
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-6 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-foreground" />
              Generated idea results
            </div>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              ShipIt results page
            </h1>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Review the core concept, define the MVP, remove scope, and start
              with tasks that move the idea toward a first usable release.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => location.reload()}>
              Regenerate
            </Button>
            <Button>
              Start building
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {resultCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card key={card.title} className="rounded-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 items-center justify-center rounded-lg ring-1 ${card.accent}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </div>
                  </div>
                  <CardAction>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      Result
                    </span>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  {card.type === "list" ? (
                    card.items.length > 0 ? (
                      <ul className="space-y-3">
                        {card.items.map((item) => (
                          <li key={item} className="flex gap-3 leading-6">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <EmptyResult>{card.fallback}</EmptyResult>
                    )
                  ) : card.content ? (
                    <p className="leading-7 text-muted-foreground">
                      {card.content}
                    </p>
                  ) : (
                    <EmptyResult>{card.fallback}</EmptyResult>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </section>
      </div>
    </main>
  );
}
