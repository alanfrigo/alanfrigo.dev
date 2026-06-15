'use client';

import { useLanguage } from '@/context/LanguageContext';

const order = ['mba2', 'mba', 'bachelor'] as const;

export default function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}>
            <div className="mx-auto" style={{ maxWidth: '1180px' }}>
                {/* Header */}
                <div className="reveal mb-[46px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        06 // education
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {t.education.title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
                    {order.map((key) => {
                        const edu = t.education.degrees[key];
                        return (
                            <div
                                key={key}
                                className="reveal bg-bg-surface border border-border rounded-[14px] p-[26px] transition-[border-color] duration-200 hover:border-[var(--accent-line)]"
                            >
                                <div className="font-[family-name:var(--font-mono)] text-[12px] text-accent mb-[14px]">
                                    {edu.period}
                                </div>
                                <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-semibold text-text-primary m-0 mb-[6px]">
                                    {edu.degree}
                                </h3>
                                <div className="text-[15px] text-text-secondary mb-[10px]">{edu.field}</div>
                                <div className="inline-flex items-center gap-2 text-[14px] text-text-muted">
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                    {edu.school}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
