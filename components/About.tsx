'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || done) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                setDone(true);
                io.disconnect();
                const dur = 1500;
                const start = performance.now();
                const tick = (now: number) => {
                    const p = Math.min(1, (now - start) / dur);
                    const e = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.round(target * e) + (p === 1 ? suffix : '');
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        }, { threshold: 0.3 });
        io.observe(el);
        return () => io.disconnect();
    }, [target, suffix, done]);

    return <span ref={ref}>0</span>;
}

export default function About() {
    const { t } = useLanguage();
    const paras = t.about.description.split('\n\n');

    const stats = [
        { n: 9, suf: '+', label: t.about.stats.yearsExperience },
        { n: 7, suf: '', label: t.about.stats.companies },
        { n: 20, suf: '+', label: t.about.stats.technologies },
        { n: 2, suf: '', label: t.about.stats.countries },
    ];

    return (
        <section id="about" style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}>
            <div className="mx-auto" style={{ maxWidth: '1180px' }}>
                {/* Header */}
                <div className="reveal mb-[46px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        01 // about
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {t.about.title}
                    </h2>
                </div>

                <div
                    className="grid items-start"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px,5vw,64px)' }}
                >
                    {/* Paragraphs */}
                    <div className="reveal delay-100">
                        {paras.map((p, i) => (
                            <p
                                key={i}
                                className="text-text-secondary m-0 mb-[18px] whitespace-pre-line"
                                style={{ fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.75 }}
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="reveal delay-200 grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="bg-bg-surface border border-border rounded-[14px] px-[22px] py-6 transition-[border-color,transform] duration-200 hover:border-[var(--accent-line)] hover:-translate-y-[3px]"
                            >
                                <div
                                    className="font-[family-name:var(--font-heading)] font-bold text-accent"
                                    style={{ fontSize: 'clamp(34px,4.5vw,46px)', letterSpacing: '-0.02em', lineHeight: 1 }}
                                >
                                    <CountUp target={s.n} suffix={s.suf} />
                                </div>
                                <div className="font-[family-name:var(--font-mono)] text-[12px] text-text-muted mt-2 tracking-[0.04em]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
