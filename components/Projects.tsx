'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        { key: 'rkj', logo: '/rkj-logo.svg', githubUrl: 'https://github.com/alanfrigo/rkj-ai' },
        { key: 'supapanel', logo: '/logo-supapanel.png', githubUrl: 'https://github.com/alanfrigo/SupaPanel' },
        { key: 'brain', logo: '/brain-logo.svg', githubUrl: 'https://github.com/alanfrigo/brain' },
    ] as const;

    return (
        <section
            id="projects"
            className="bg-bg-surface-alt border-y border-border"
            style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}
        >
            <div className="mx-auto" style={{ maxWidth: '1180px' }}>
                {/* Header */}
                <div className="reveal mb-[46px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        04 // projects
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {t.projects.title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
                    {projects.map((project) => {
                        const data = t.projects.items[project.key];
                        return (
                            <div
                                key={project.key}
                                className="reveal flex flex-col bg-bg-surface border border-border rounded-2xl p-[30px] transition-[border-color,box-shadow] duration-200 hover:border-[var(--accent-line)] hover:shadow-[var(--shadow)]"
                            >
                                {/* Top row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center justify-center w-[54px] h-[54px] rounded-xl bg-bg-surface-alt border border-border">
                                        <Image
                                            src={project.logo}
                                            alt={data.name}
                                            width={36}
                                            height={36}
                                            className="w-9 h-9 object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-[7px] font-[family-name:var(--font-mono)] text-[12px] text-text-muted border border-border rounded-lg px-[11px] py-[7px] transition-all duration-200 hover:border-accent hover:text-accent"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
                                        {t.projects.viewOnGithub}
                                    </a>
                                </div>

                                <h3 className="font-[family-name:var(--font-heading)] text-[24px] font-semibold text-text-primary m-0 mb-3">
                                    {data.name}
                                </h3>
                                <p className="text-text-secondary text-[15px] m-0 mb-5" style={{ lineHeight: 1.65 }}>
                                    {data.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {data.features.map((feat) => (
                                        <span
                                            key={feat}
                                            className="font-[family-name:var(--font-mono)] text-[11.5px] text-text-secondary bg-bg-surface-alt border border-border rounded-[7px] px-[10px] py-[5px]"
                                        >
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
