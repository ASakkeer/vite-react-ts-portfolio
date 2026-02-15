/**
 * Non-clickable "more projects cooking" card. Faded, same size as ProjectCard, theme-aligned.
 */

import { ChefHat } from "lucide-react";

const CARD_IMAGE_ASPECT = "aspect-video";

export function ComingSoonCard() {
  return (
    <article
      className="h-full flex flex-col rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 opacity-75 cursor-default"
      aria-hidden
    >
      <div
        className={`${CARD_IMAGE_ASPECT} w-full flex-shrink-0 flex items-center justify-center bg-[#161616] border-b border-white/5`}
      >
        <div className="flex flex-col items-center gap-3 text-white/40">
          <ChefHat size={48} strokeWidth={1.5} className="text-portfolio-primary/40" />
          <span className="text-xs font-medium uppercase tracking-widest text-white/30">
            In the kitchen
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 min-h-[7.5rem] p-5 md:p-6">
        <span className="text-portfolio-primary/60 text-xs font-medium uppercase tracking-wide">
          Coming soon
        </span>
        <h3 className="font-semibold text-white/60 mt-1 text-base sm:text-lg">
          More projects cooking
        </h3>
        <p className="text-white/40 text-sm mt-1 flex-1">
          New apps and tools are in the works. Check back later.
        </p>
      </div>
    </article>
  );
}
