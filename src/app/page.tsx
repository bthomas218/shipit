import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold tracking-normal">ShipIt</h1>
        <p className="mt-3 text-muted-foreground">
          View the generated concept, MVP, scope cuts, and starter tasks.
        </p>
        <Button asChild className="mt-6">
          <Link href="/results">Open results</Link>
        </Button>
      </div>
    </main>
  );
}
