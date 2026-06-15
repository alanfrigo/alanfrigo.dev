'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, language } = useLanguage();
    const roleRef = useRef<HTMLSpanElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);

    // Typing effect for the role line
    useEffect(() => {
        const el = roleRef.current;
        if (!el) return;
        const txt = t.hero.role;
        let i = 0;
        let timer: ReturnType<typeof setTimeout>;
        el.textContent = '';
        const step = () => {
            if (i <= txt.length) {
                el.textContent = txt.slice(0, i);
                i++;
                timer = setTimeout(step, 34);
            }
        };
        const start = setTimeout(step, 450);
        return () => { clearTimeout(start); clearTimeout(timer); };
    }, [t.hero.role, language]);

    // Staggered code line reveal
    useEffect(() => {
        const lines = codeRef.current?.querySelectorAll<HTMLElement>('[data-codeline]');
        if (!lines) return;
        const timers: ReturnType<typeof setTimeout>[] = [];
        lines.forEach((ln, i) => {
            ln.style.opacity = '0';
            ln.style.transform = 'translateX(-10px)';
            ln.style.transition = 'opacity .4s ease, transform .4s ease';
            timers.push(setTimeout(() => {
                ln.style.opacity = '1';
                ln.style.transform = 'none';
            }, 250 + i * 75));
        });
        return () => timers.forEach(clearTimeout);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const cl = 'flex gap-[18px]';
    const num = 'text-[var(--c-com)] w-[14px] text-right select-none';

    return (
        <section
            className="min-h-screen flex items-center"
            style={{ padding: '130px clamp(18px,5vw,60px) 70px' }}
        >
            <div
                className="w-full mx-auto grid items-center"
                style={{
                    maxWidth: '1180px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                    gap: 'clamp(36px, 5vw, 72px)',
                }}
            >
                {/* ===== Left ===== */}
                <div>
                    {/* Status badge */}
                    <div className="inline-flex items-center gap-[9px] px-[14px] py-[7px] border border-[var(--accent-line)] rounded-full bg-[var(--accent-soft)] mb-7">
                        <span className="w-[7px] h-[7px] rounded-full bg-accent af-pulse" />
                        <span className="font-[family-name:var(--font-mono)] text-[11.5px] font-semibold tracking-[0.12em] uppercase text-accent">
                            {language === 'en' ? 'Available for new projects' : 'Disponível para novos projetos'}
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        className="font-[family-name:var(--font-heading)] font-bold text-text-primary m-0 mb-[22px]"
                        style={{ fontSize: 'clamp(48px,9vw,112px)', lineHeight: 0.92, letterSpacing: '-0.035em' }}
                    >
                        Alan<br />Frigo
                    </h1>

                    {/* Typed role */}
                    <div
                        className="font-[family-name:var(--font-mono)] mb-[26px] text-text-primary"
                        style={{ fontSize: 'clamp(14px,1.7vw,17px)', minHeight: '1.6em' }}
                    >
                        <span className="text-accent">&gt;&nbsp;</span>
                        <span ref={roleRef} />
                        <span
                            className="inline-block bg-accent af-blink"
                            style={{ width: '9px', height: '1.05em', verticalAlign: '-2px', marginLeft: '3px' }}
                        />
                    </div>

                    {/* Tagline */}
                    <p
                        className="text-text-secondary m-0 mb-9"
                        style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.65, maxWidth: '30em' }}
                    >
                        {t.hero.tagline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-[14px] items-center">
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-[9px] font-semibold text-[15px] text-[var(--bg)] bg-accent border border-accent rounded-[11px] px-6 py-[14px] transition-[transform,box-shadow,background] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_14px_30px_-10px_var(--glow)]"
                        >
                            {t.hero.cta.contact}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </button>
                        <a
                            href="https://github.com/alanfrigo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-[9px] font-semibold text-[15px] text-text-primary bg-transparent border border-border-bright rounded-[11px] px-[22px] py-[14px] transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
                            GitHub
                        </a>
                    </div>
                </div>

                {/* ===== Right — code window ===== */}
                <div className="relative">
                    {/* Floating avatar */}
                    <div className="absolute z-[3] af-float" style={{ top: '-26px', right: '8px' }}>
                        <div
                            className="rounded-full overflow-hidden"
                            style={{
                                width: '88px', height: '88px', padding: '3px',
                                background: 'var(--bg)', border: '2px solid var(--accent)',
                                boxShadow: '0 0 0 5px var(--bg), 0 0 26px var(--glow)',
                            }}
                        >
                            <Image
                                src="/profile-pic.jpg"
                                alt="Alan Frigo"
                                width={88}
                                height={88}
                                priority
                                unoptimized
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    {/* Glow blob */}
                    <div
                        className="absolute af-glow pointer-events-none"
                        style={{
                            inset: '-30px',
                            background: 'radial-gradient(60% 55% at 70% 30%, var(--glow), transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                    />

                    {/* Code card */}
                    <div
                        className="relative bg-bg-surface border border-border rounded-2xl overflow-hidden"
                        style={{ boxShadow: 'var(--shadow)' }}
                    >
                        {/* Title bar */}
                        <div className="flex items-center gap-2 px-4 py-[13px] border-b border-border bg-bg-surface-alt">
                            <span className="w-[11px] h-[11px] rounded-full" style={{ background: '#E5685B' }} />
                            <span className="w-[11px] h-[11px] rounded-full" style={{ background: '#E0BC5A' }} />
                            <span className="w-[11px] h-[11px] rounded-full bg-accent" />
                            <span className="ml-2 font-[family-name:var(--font-mono)] text-[12px] text-text-muted">engineer.ts</span>
                        </div>

                        {/* Body */}
                        <div
                            ref={codeRef}
                            className="font-[family-name:var(--font-mono)] text-[13.5px] overflow-x-auto"
                            style={{ padding: '20px 22px', lineHeight: 2 }}
                        >
                            <div data-codeline className={cl}><span className={num}>1</span><span><span className="text-[var(--c-kw)]">const</span> <span className="text-[var(--c-var)]">engineer</span> <span className="text-[var(--c-punc)]">= {'{'}</span></span></div>
                            <div data-codeline className={cl}><span className={num}>2</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">name</span><span className="text-[var(--c-punc)]">:</span> <span className="text-[var(--c-str)]">&quot;Alan Frigo&quot;</span><span className="text-[var(--c-punc)]">,</span></span></div>
                            <div data-codeline className={cl}><span className={num}>3</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">role</span><span className="text-[var(--c-punc)]">:</span> <span className="text-[var(--c-str)]">&quot;AI Engineer&quot;</span><span className="text-[var(--c-punc)]">,</span></span></div>
                            <div data-codeline className={cl}><span className={num}>4</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">focus</span><span className="text-[var(--c-punc)]">: [</span><span className="text-[var(--c-str)]">&quot;Multi-Agent&quot;</span><span className="text-[var(--c-punc)]">, </span><span className="text-[var(--c-str)]">&quot;RAG&quot;</span><span className="text-[var(--c-punc)]">],</span></span></div>
                            <div data-codeline className={cl}><span className={num}>5</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">stack</span><span className="text-[var(--c-punc)]">: [</span><span className="text-[var(--c-str)]">&quot;Python&quot;</span><span className="text-[var(--c-punc)]">, </span><span className="text-[var(--c-str)]">&quot;Databricks&quot;</span><span className="text-[var(--c-punc)]">],</span></span></div>
                            <div data-codeline className={cl}><span className={num}>6</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">based</span><span className="text-[var(--c-punc)]">:</span> <span className="text-[var(--c-str)]">&quot;Brazil · Remote&quot;</span><span className="text-[var(--c-punc)]">,</span></span></div>
                            <div data-codeline className={cl}><span className={num}>7</span><span>&nbsp;&nbsp;<span className="text-[var(--c-prop)]">status</span><span className="text-[var(--c-punc)]">:</span> <span className="text-[var(--c-str)]">&quot;available&quot;</span><span className="text-[var(--c-punc)]">,</span></span></div>
                            <div data-codeline className={cl}><span className={num}>8</span><span><span className="text-[var(--c-punc)]">{'};'}</span></span></div>
                            <div data-codeline className={cl}><span className={num}>9</span><span className="text-[var(--c-com)]">{'// shipping scalable AI systems'}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
