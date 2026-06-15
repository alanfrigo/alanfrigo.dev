'use client';

export default function Marquee() {
    const items = [
        'Python', 'Databricks', 'LangChain', 'Agno', 'NextJS', 'Supabase',
        'AWS', 'Docker', 'N8N', 'TypeScript', 'PostgreSQL', 'RAG',
        'Multi-Agent', 'Cloudflare R2',
    ];

    const group = (
        <div className="flex items-center gap-[34px] pr-[34px]">
            {items.map((m, i) => (
                <span key={i} className="inline-flex items-center gap-[34px]">
                    <span
                        className="font-[family-name:var(--font-heading)] font-medium text-text-muted whitespace-nowrap"
                        style={{ fontSize: 'clamp(18px,2.4vw,26px)' }}
                    >
                        {m}
                    </span>
                    <span className="w-[6px] h-[6px] rounded-full bg-accent opacity-70" />
                </span>
            ))}
        </div>
    );

    return (
        <div className="border-y border-border bg-bg-surface-alt py-5 overflow-hidden relative" aria-hidden="true">
            <div className="af-marquee">
                {group}
                {group}
            </div>
        </div>
    );
}
