'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type PositionKey = 'indominusAI' | 'pixelPeninsula' | 'at2eEngineer' | 'at2eDev' | 'apolloPodcasts' | 'rocketJump' | 'rebbel';

const positionOrder: PositionKey[] = [
    'indominusAI',
    'pixelPeninsula',
    'at2eEngineer',
    'at2eDev',
    'apolloPodcasts',
    'rocketJump',
    'rebbel',
];

export default function Experience() {
    const { t } = useLanguage();
    const [revealed, setRevealed] = useState<Set<PositionKey>>(new Set(['indominusAI']));
    const [expanded, setExpanded] = useState<Set<PositionKey>>(new Set(['indominusAI']));
    const entryRefs = useRef<Partial<Record<PositionKey, HTMLDivElement | null>>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const key = (entry.target as HTMLElement).dataset.key as PositionKey;
                    if (!key) return;

                    setRevealed((prev) => {
                        if (prev.has(key)) return prev;
                        const next = new Set(prev);
                        next.add(key);
                        return next;
                    });

                    setTimeout(() => {
                        setExpanded((prev) => {
                            if (prev.has(key)) return prev;
                            const next = new Set(prev);
                            next.add(key);
                            return next;
                        });
                    }, 150);
                });
            },
            { threshold: 0.4, rootMargin: '0px 0px -80px 0px' }
        );

        positionOrder.forEach((key) => {
            const el = entryRefs.current[key];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleExpanded = (key: PositionKey) => {
        setExpanded((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    return (
        <section id="experience" className="py-20 sm:py-32 bg-bg-surface-alt">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20 reveal">
                    <p className="section-label mb-3">03 / {t.experience.title}</p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.experience.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Editorial Timeline */}
                <div>
                    {positionOrder.map((key, index) => {
                        const position = t.experience.positions[key];
                        const isRevealed = revealed.has(key);
                        const isExpanded = expanded.has(key);

                        return (
                            <div
                                key={key}
                                ref={(el) => { entryRefs.current[key] = el; }}
                                data-key={key}
                                className="group grid grid-cols-[3.5rem_1fr] gap-3 py-6 border-b border-border cursor-pointer last:border-b-0"
                                style={{
                                    opacity: isRevealed ? 1 : 0,
                                    transform: isRevealed ? 'translateY(0)' : 'translateY(1.25rem)',
                                    transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                                onClick={() => toggleExpanded(key)}
                            >
                                {/* Number */}
                                <div
                                    className="font-[family-name:var(--font-heading)] text-[2rem] font-bold leading-none text-accent pt-1"
                                    style={{
                                        opacity: isExpanded ? 1 : 0.2,
                                        transition: 'opacity 0.35s ease',
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Content */}
                                <div>
                                    {/* Header — always visible */}
                                    <p className="section-label mb-1">{position.period}</p>
                                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary leading-tight">
                                        {position.company}
                                    </h3>
                                    <p className="text-accent font-semibold text-sm mt-1">
                                        {position.role}
                                    </p>
                                    <p className="text-text-muted text-xs mt-1">
                                        {position.location}
                                    </p>

                                    {/* Toggle hint */}
                                    <div className={`inline-flex items-center gap-1.5 mt-3 text-[0.62rem] font-semibold tracking-widest uppercase transition-colors duration-200 ${isExpanded ? 'text-accent' : 'text-text-muted group-hover:text-accent'
                                        }`}>
                                        <svg
                                            className="w-3 h-3"
                                            style={{
                                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                            }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        details
                                    </div>

                                    {/* Expandable body */}
                                    <div
                                        style={{
                                            maxHeight: isExpanded ? '500px' : '0px',
                                            opacity: isExpanded ? 1 : 0,
                                            overflowY: isExpanded ? 'auto' : 'hidden',
                                            overflowX: 'hidden',
                                            transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                                        }}
                                    >
                                        <p className="text-text-secondary text-sm leading-relaxed mt-4 pl-3 border-l-2 border-accent/40 whitespace-pre-line">
                                            {position.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-4 mb-1">
                                            {position.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded-md border border-accent/25"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
