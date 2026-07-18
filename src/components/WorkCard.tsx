import { WorkVisual } from "./WorkVisual";
import { type WorkItem } from "@/lib/site-config";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="group">
      <WorkVisual
        media={item.media}
        category={item.category}
        concept={item.concept}
        alt={`${item.client} — ${item.title}`}
      />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-ink">
            {item.client}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {item.title}
          </p>
        </div>
        {item.year && (
          <span className="font-heading whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-muted">
            {item.year}
          </span>
        )}
      </div>
    </div>
  );
}
