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
        <section id="experience" className="py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform md:-translate-x-1/2" />

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
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-zinc-50 dark:ring-zinc-900 z-10" />

                                    {/* Content */}
                                    <div
                                        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setExpandedCard(isExpanded ? null : key)}
                                            className={`w-full text-left p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${isExpanded
                                                ? 'border-blue-500 dark:border-blue-500'
                                                : 'border-transparent hover:border-zinc-200 dark:hover:border-zinc-700'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                                        {position.role}
                                                    </h3>
                                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                                                        {position.company}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                                                        <span>{position.period}</span>
                                                        <span className="hidden sm:inline">•</span>
                                                        <span className="hidden sm:inline">{position.location}</span>
                                                    </div>
                                                </div>
                                                <svg
                                                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
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
                                                <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-sm leading-relaxed">
                                                    {position.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {position.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50"
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
