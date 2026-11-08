type Step = { label: string; note?: string };

export function Flow({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <figure className="my-8 rounded-lg border border-line bg-surface p-4 sm:p-5">
      <ol className="grid list-none! gap-2 pl-0! sm:grid-cols-2 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.label} className="m-0! rounded-md border border-line bg-bg px-3 py-2.5">
            <p className="flex items-baseline gap-2 text-sm leading-snug font-medium">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              {step.label}
            </p>
            {step.note ? <p className="mt-1 pl-7 text-xs leading-snug text-muted">{step.note}</p> : null}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 font-mono text-xs text-muted">{title}</figcaption>
    </figure>
  );
}
