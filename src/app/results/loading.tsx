const cards = [
  { lines: ["w-full", "w-5/6"] },
  { lines: ["w-11/12", "w-4/5", "w-3/4"] },
  { lines: ["w-4/5", "w-11/12", "w-2/3"] },
  { lines: ["w-full", "w-5/6", "w-3/4"] },
];

export default function Loading() {
  return (
    <main
      className="min-h-screen bg-muted/30 px-4 py-6 text-foreground sm:px-6 lg:px-8"
      aria-busy="true"
    >
      <span className="sr-only" role="status">
        Generating your ShipIt results
      </span>

      <div className="mx-auto flex w-full max-w-6xl animate-pulse flex-col gap-6">
        <header className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
          <div className="w-full max-w-2xl">
            <div className="mb-3 h-8 w-48 rounded-full bg-muted" />
            <div className="h-10 w-72 max-w-full rounded-lg bg-muted" />
            <div className="mt-4 h-4 w-full rounded bg-muted" />
            <div className="mt-2 h-4 w-4/5 rounded bg-muted" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-24 rounded-lg bg-muted" />
            <div className="h-8 w-32 rounded-lg bg-muted" />
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="flex min-h-48 flex-col gap-4 rounded-lg bg-card p-4 ring-1 ring-foreground/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-1 items-center gap-3">
                  <div className="size-10 shrink-0 rounded-lg bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-28 rounded bg-muted" />
                    <div className="h-4 w-56 max-w-full rounded bg-muted" />
                  </div>
                </div>
                <div className="h-6 w-14 rounded-full bg-muted" />
              </div>

              <div className="space-y-3 pt-1">
                {card.lines.map((width, lineIndex) => (
                  <div key={lineIndex} className="flex items-center gap-3">
                    {cardIndex > 0 && (
                      <div className="size-1.5 shrink-0 rounded-full bg-muted" />
                    )}
                    <div className={`h-4 rounded bg-muted ${width}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
