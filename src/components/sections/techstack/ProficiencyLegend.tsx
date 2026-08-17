export function ProficiencyLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
      <div className="flex items-center gap-1.5">
        <div className="flex gap-[3px]">
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
        </div>
        <span>Core</span>
      </div>

      <div className="flex items-center gap-1.5">
        <div className="flex gap-[3px]">
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <div className="w-[6px] h-[6px] rounded-full bg-transparent border border-border" />
        </div>
        <span>Proficient</span>
      </div>

      <div className="flex items-center gap-1.5">
        <div className="flex gap-[3px]">
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <div className="w-[6px] h-[6px] rounded-full bg-transparent border border-border" />
          <div className="w-[6px] h-[6px] rounded-full bg-transparent border border-border" />
        </div>
        <span>Familiar</span>
      </div>
    </div>
  );
}
