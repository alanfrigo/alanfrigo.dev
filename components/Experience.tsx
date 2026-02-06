'use client';

import { useState } from 'react';
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
    const [expandedCard, setExpandedCard] = useState<string | null>('indominusAI');

    return (
        <section id="experience" className="py-20 sm:py-32 bg-bg-surface-alt">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.experience.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {positionOrder.map((key, index) => {
                            const position = t.experience.positions[key];
                            const isLeft = index % 2 === 0;
                            const isExpanded = expandedCard === key;

                            return (
                                <div
                                    key={key}
                                    className={`relative flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-bg-surface-alt z-10" />

                                    {/* Content */}
                                    <div
                                        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setExpandedCard(isExpanded ? null : key)}
                                            className={`w-full text-left p-6 bg-bg-surface rounded-xl transition-colors duration-200 border ${isExpanded
                                                ? 'border-accent/40'
                                                : 'border-border hover:border-accent/40'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold text-text-primary">
                                                        {position.role}
                                                    </h3>
                                                    <p className="text-accent font-medium mt-1">
                                                        {position.company}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-text-muted">
                                                        <span>{position.period}</span>
                                                        <span className="hidden sm:inline">•</span>
                                                        <span className="hidden sm:inline">{position.location}</span>
                                                    </div>
                                                </div>
                                                <svg
                                                    className={`w-5 h-5 text-text-muted transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Expanded Content */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <p className="text-text-secondary whitespace-pre-line text-sm leading-relaxed">
                                                    {position.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {position.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2.5 py-1 text-xs font-medium bg-bg-surface-alt text-text-secondary rounded-md border border-border"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
