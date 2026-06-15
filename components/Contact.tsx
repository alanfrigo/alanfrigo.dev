'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section
            id="contact"
            className="bg-bg-surface-alt border-t border-border"
            style={{ padding: 'clamp(90px,14vh,160px) clamp(18px,5vw,60px)' }}
        >
            <div className="reveal mx-auto text-center" style={{ maxWidth: '760px' }}>
                <div className="font-[family-name:var(--font-mono)] text-accent text-[14px] mb-5">
                    $ ./connect.sh
                </div>
                <h2
                    className="font-[family-name:var(--font-heading)] text-text-primary font-bold m-0 mb-[18px]"
                    style={{ fontSize: 'clamp(34px,6vw,68px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
                >
                    {t.contact.title}
                </h2>
                <p
                    className="text-text-secondary mx-auto mb-10"
                    style={{ fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.6, maxWidth: '30em' }}
                >
                    {t.contact.subtitle}
                </p>

                <div className="flex flex-wrap gap-[14px] justify-center">
                    {/* LinkedIn — solid */}
                    <a
                        href="https://linkedin.com/in/alanfrigo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[10px] font-semibold text-[15px] text-[var(--bg)] bg-accent border border-accent rounded-[11px] px-6 py-[14px] transition-[transform,box-shadow,background] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_14px_30px_-10px_var(--glow)]"
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.82a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.52v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.36.74 1.36 1.81v4.48h2.63z" /></svg>
                        {t.contact.linkedin}
                    </a>

                    {/* Email — outline */}
                    <a
                        href="mailto:alanfrigo@gmail.com"
                        className="inline-flex items-center gap-[10px] font-semibold text-[15px] text-text-primary bg-transparent border border-border-bright rounded-[11px] px-[22px] py-[14px] transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                        {t.contact.email}
                    </a>

                    {/* WhatsApp — outline */}
                    <a
                        href="https://wa.me/5545991073901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[10px] font-semibold text-[15px] text-text-primary bg-transparent border border-border-bright rounded-[11px] px-[22px] py-[14px] transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2zm0 18.13a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3 .79.8-2.92-.2-.3A8.13 8.13 0 1 1 12 20.13zm4.46-6.1c-.24-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06a6.66 6.66 0 0 1-3.27-2.86c-.25-.43.25-.4.71-1.32.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62 1.53.66 2.13.71 2.9.6.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" /></svg>
                        {t.contact.whatsapp}
                    </a>
                </div>
            </div>
        </section>
    );
}
