'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type PositionKey = 'db' | 'indominusAI' | 'pixelPeninsula' | 'at2eEngineer' | 'at2eDev' | 'apolloPodcasts' | 'rocketJump' | 'rebbel';

const positionOrder: PositionKey[] = [
    'db', 'indominusAI', 'pixelPeninsula', 'at2eEngineer', 'at2eDev', 'apolloPodcasts', 'rocketJump', 'rebbel',
];

export default function Experience() {
    const { t } = useLanguage();
    const tlRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            const tl = tlRef.current;
            const fill = fillRef.current;
            if (!tl || !fill) return;
            const r = tl.getBoundingClientRect();
            const vh = window.innerHeight;
            const passed = Math.max(0, vh * 0.55 - r.top);
            fill.style.height = Math.max(0, Math.min(100, (passed / r.height) * 100)) + '%';
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            id="experience"
            className="bg-bg-surface-alt border-y border-border"
            style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}
        >
            <div className="mx-auto" style={{ maxWidth: '1000px' }}>
                {/* Header */}
                <div className="reveal mb-[54px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        02 // experience
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {t.experience.title}
                    </h2>
                </div>

                {/* Timeline */}
                <div ref={tlRef} className="relative">
                    <div className="absolute w-0.5 bg-border-bright" style={{ left: '11px', top: '6px', bottom: '6px' }} />
                    <div
                        ref={fillRef}
                        className="absolute w-0.5 bg-accent"
                        style={{ left: '11px', top: '6px', height: '0%', boxShadow: '0 0 12px var(--glow)', transition: 'height .15s linear' }}
                    />

                    {positionOrder.map((key) => {
                        const exp = t.experience.positions[key];
                        const paras = exp.description.split('\n\n');
                        return (
                            <div key={key} className="reveal relative" style={{ paddingLeft: '50px', paddingBottom: '40px' }}>
                                {/* Dot */}
                                <div
                                    className="absolute rounded-full bg-bg-base"
                                    style={{
                                        left: '4px', top: '3px', width: '16px', height: '16px',
                                        border: '2px solid var(--accent)',
                                        boxShadow: '0 0 0 4px var(--surface-2), 0 0 14px var(--glow)',
                                    }}
                                />
                                {/* Card */}
                                <div className="bg-bg-surface border border-border rounded-[14px] px-[26px] py-6 transition-[border-color,transform,box-shadow] duration-200 hover:border-[var(--accent-line)] hover:-translate-y-[3px] hover:shadow-[var(--shadow)]">
                                    <div className="font-[family-name:var(--font-mono)] text-[12px] text-accent tracking-[0.04em] mb-[10px]">
                                        {exp.period}
                                    </div>
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-1">
                                        <h3
                                            className="font-[family-name:var(--font-heading)] font-semibold text-text-primary m-0"
                                            style={{ fontSize: 'clamp(19px,2.4vw,24px)' }}
                                        >
                                            {exp.role}
                                        </h3>
                                        <span className="text-text-muted">·</span>
                                        <span className="font-semibold text-accent text-[16px]">{exp.company}</span>
                                    </div>
                                    <div className="font-[family-name:var(--font-mono)] text-[12px] text-text-muted mb-4">
                                        {exp.location}
                                    </div>
                                    {paras.map((p, i) => (
                                        <p key={i} className="text-text-secondary m-0 mb-3 whitespace-pre-line" style={{ fontSize: '14.5px', lineHeight: 1.7 }}>
                                            {p}
                                        </p>
                                    ))}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-[family-name:var(--font-mono)] text-[11.5px] text-text-secondary bg-bg-surface-alt border border-border rounded-[7px] px-[10px] py-[5px] transition-all duration-200 hover:border-[var(--accent-line)] hover:text-accent"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
