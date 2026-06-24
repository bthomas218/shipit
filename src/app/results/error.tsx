"use client";

import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ResultsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-muted/30 px-4 py-12 text-foreground sm:px-6">
      <Card className="mx-auto w-full max-w-lg rounded-lg">
        <CardContent className="flex flex-col items-center px-6 py-8 text-center sm:px-10 sm:py-12">
          <div className="flex size-12 items-center justify-center rounded-lg bg-rose-50 text-rose-700 ring-1 ring-rose-200">
            <AlertTriangle className="size-6" aria-hidden="true" />
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            Results unavailable
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal">
            We couldn&apos;t generate your results
          </h1>
          <p className="mt-4 max-w-md leading-7 text-muted-foreground">
            Something went wrong while building your project plan. Try again,
            or return home and submit a different idea.
          </p>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <ArrowLeft data-icon="inline-start" />
                Back to home
              </Link>
            </Button>
            <Button type="button" size="lg" onClick={reset}>
              <RotateCcw data-icon="inline-start" />
              Try again
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
