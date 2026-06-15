'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer
            className="relative overflow-hidden bg-bg-base"
            style={{ padding: '60px clamp(18px,5vw,60px) 36px' }}
        >
            {/* Giant wordmark */}
            <div className="mx-auto text-center pointer-events-none select-none" style={{ maxWidth: '1400px' }}>
                <div
                    className="font-[family-name:var(--font-heading)] font-bold text-text-primary whitespace-nowrap"
                    style={{ fontSize: 'clamp(64px,18vw,220px)', letterSpacing: '-0.05em', lineHeight: 0.85, opacity: 0.05 }}
                >
                    ALAN FRIGO
                </div>
            </div>

            {/* Bottom row */}
            <div
                className="mx-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"
                style={{ maxWidth: '1180px', marginTop: '28px' }}
            >
                <div className="font-[family-name:var(--font-mono)] text-[12px] text-text-muted">
                    © 2026 Alan Frigo — {t.footer.rights}
                </div>
                <div className="flex gap-[18px] font-[family-name:var(--font-mono)] text-[13px]">
                    <a href="https://github.com/alanfrigo" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-200">github</a>
                    <a href="https://linkedin.com/in/alanfrigo" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-200">linkedin</a>
                    <a href="mailto:alanfrigo@gmail.com" className="text-text-secondary hover:text-accent transition-colors duration-200">email</a>
                </div>
            </div>
        </footer>
    );
}
