'use client';

export default function Marquee() {
    const items = [
        // AI & Machine Learning
        'AI Agents',
        'Agno',
        'LangChain',
        'Machine Learning',

        // Backend & Infrastructure
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Supabase',
        'Docker',
        'AWS',
        'Azure',
        'Google Cloud',
        'Cloudflare',
        'N8N',

        // Frontend & Languages
        'NextJS',
        'TypeScript',
        'Vercel',

        // Services & Roles
        'Software Engineering',
        'AI Engineering',
    ];

    const row = items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-xs font-[family-name:var(--font-heading)] font-semibold uppercase tracking-[0.18em] text-text-muted">
                {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" aria-hidden="true" />
        </span>
    ));

    return (
        <div
            className="py-5 border-y border-border bg-bg-surface-alt overflow-hidden"
            aria-hidden="true"
        >
            <div className="marquee-track">
                <div className="marquee-content">{row}</div>
                <div className="marquee-content" aria-hidden="true">{row}</div>
            </div>
        </div>
    );
}
