export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-[1px] w-10 bg-[#FF494A]" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
        {label}
      </span>
    </div>
  );
}

