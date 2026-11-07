const GameDetailSkeleton = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 animate-pulse">
      {/* Hero skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-[43%_1fr] gap-6">
        <div className="aspect-video rounded bg-muted-foreground/10" />

        <div className="flex flex-col gap-4">
          <div className="h-7 w-32 rounded bg-muted-foreground/10" />
          <div className="h-9 w-3/4 rounded bg-muted-foreground/10" />
          <div className="h-4 w-full rounded bg-muted-foreground/10" />
          <div className="h-4 w-2/3 rounded bg-muted-foreground/10" />
          <div className="h-10 w-32 rounded bg-muted-foreground/10 mt-2" />
        </div>
      </div>

      {/* About skeleton */}
      <section className="mt-8 flex flex-col gap-3">
        <div className="h-7 w-40 rounded bg-muted-foreground/10" />
        <div className="h-4 w-full rounded bg-muted-foreground/10" />
        <div className="h-4 w-5/6 rounded bg-muted-foreground/10" />
        <div className="h-4 w-2/3 rounded bg-muted-foreground/10" />
      </section>

      {/* Requirements skeleton */}
      <section className="mt-8 flex flex-col gap-3">
        <div className="h-7 w-56 rounded bg-muted-foreground/10" />
        <div className="h-4 w-32 rounded bg-muted-foreground/10" />
        <div className="h-4 w-full rounded bg-muted-foreground/10" />
        <div className="h-4 w-4/5 rounded bg-muted-foreground/10" />
        <div className="h-4 w-3/4 rounded bg-muted-foreground/10" />
      </section>
    </main>
  );
};
export default GameDetailSkeleton;
