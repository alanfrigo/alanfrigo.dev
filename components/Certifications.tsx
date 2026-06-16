'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    skills: string[];
    icon: 'asimov' | 'aws' | 'databricks';
}

const certifications: Certification[] = [
    {
        name: 'Academy Accreditation - AI Agent Fundamentals',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/b0f0aa2a-fc06-469b-a08b-0cef217a446d',
        skills: ['AI Agents', 'Generative AI', 'Databricks'],
        icon: 'databricks',
    },
    {
        name: 'Academy Accreditation - Generative AI Fundamentals',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/a779a3a0-0600-465a-860a-d3bf6d0de2a6',
        skills: ['Generative AI', 'LLMs', 'Databricks'],
        icon: 'databricks',
    },
    {
        name: 'Academy Accreditation - Databricks Fundamentals',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/2eb59fc4-0f82-4764-a809-b52a5832bb72',
        skills: ['Databricks', 'Lakehouse', 'Data Engineering'],
        icon: 'databricks',
    },
    {
        name: 'Knowledge Badge - Building Retrieval Agents On Databricks',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/83aa3d15-702a-4aa8-9b85-ceb2c52e659d',
        skills: ['RAG', 'AI Agents', 'Databricks'],
        icon: 'databricks',
    },
    {
        name: 'Knowledge Badge - Building Single-Agent Applications on Databricks',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/5a6ea635-58d8-4baf-8740-bd401b80186e',
        skills: ['AI Agents', 'Generative AI', 'Databricks'],
        icon: 'databricks',
    },
    {
        name: 'Knowledge Badge - Generative AI Application Deployment and Monitoring',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/b2c1c288-1684-4c9f-a826-98c4f8ee662e',
        skills: ['Generative AI', 'Deployment', 'Monitoring'],
        icon: 'databricks',
    },
    {
        name: 'Knowledge Badge - Generative AI Application Evaluation and Governance',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/3bbc590a-327e-407d-aaa6-3fd313f93a45',
        skills: ['Generative AI', 'Evaluation', 'Governance'],
        icon: 'databricks',
    },
    {
        name: 'Knowledge Badge - AI/BI for Data Analysts',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/753cd5ec-6bb2-4fe0-8694-3f7b3b94fad2',
        skills: ['AI/BI', 'Genie', 'Analytics'],
        icon: 'databricks',
    },
    {
        name: 'Partner Training - Azure Databricks Foundations',
        issuer: 'Databricks Academy',
        date: 'Jun 2026',
        credentialUrl: 'https://credentials.databricks.com/1cf4bd7a-cb44-4f68-8665-eba037fc1f9c',
        skills: ['Azure Databricks', 'Data Engineering', 'Cloud'],
        icon: 'databricks',
    },
    {
        name: 'AI Agent Engineer',
        issuer: 'Asimov Academy',
        date: 'Dec 2025',
        credentialUrl: 'https://hub.asimov.academy/validar-certificado/ddbfe846-ea55-44a4-a0b9-cc14cbd9f2e9',
        skills: ['Agno', 'Python', 'FastAPI', 'AI Agents'],
        icon: 'asimov',
    },
    {
        name: 'AWS Artificial Intelligence Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Dec 2025',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/8JBCA1SGNCKN',
        skills: ['Artificial Intelligence', 'Machine Learning', 'AWS SageMaker'],
        icon: 'aws',
    },
    {
        name: 'Prompt Engineering',
        issuer: 'Asimov Academy',
        date: 'Apr 2025',
        credentialUrl: 'https://hub.asimov.academy/validar-certificado/863289ab-0123-48f8-945e-cf3adaef29d3',
        skills: ['Prompt Engineering', 'Python'],
        icon: 'asimov',
    },
];

function AsimovIcon() {
    return (
        <div className="w-12 h-12 bg-text-primary rounded-lg flex items-center justify-center text-bg-base font-bold text-2xl">
            A
        </div>
    );
}

function AWSIcon() {
    return (
        <div className="w-12 h-12 bg-bg-surface rounded-lg flex items-center justify-center p-2 border border-border">
            <Image
                src="/aws-logo-icon-PNG-Transparent-Background.png"
                alt="AWS"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
            />
        </div>
    );
}

function DatabricksIcon() {
    return (
        <div className="w-12 h-12 bg-bg-surface rounded-lg flex items-center justify-center p-2 border border-border">
            <Image
                src="/databricks-mark.png"
                alt="Databricks"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
            />
        </div>
    );
}

function CertIcon({ icon }: { icon: Certification['icon'] }) {
    if (icon === 'asimov') return <AsimovIcon />;
    if (icon === 'databricks') return <DatabricksIcon />;
    return <AWSIcon />;
}

export default function Certifications() {
    const { language } = useLanguage();

    const title = language === 'en' ? 'Certifications' : 'Certificações';
    const showCredential = language === 'en' ? 'Show Credential' : 'Ver Credencial';
    const skillsLabel = language === 'en' ? 'Skills' : 'Habilidades';

    return (
        <section
            id="certifications"
            className="bg-bg-surface-alt border-y border-border"
            style={{ padding: 'clamp(80px,12vh,140px) clamp(18px,5vw,60px)' }}
        >
            <div className="mx-auto" style={{ maxWidth: '1180px' }}>
                {/* Header */}
                <div className="reveal mb-[46px]">
                    <div className="font-[family-name:var(--font-mono)] text-accent text-[13px] tracking-[0.1em] mb-3">
                        05 // certifications
                    </div>
                    <h2
                        className="font-[family-name:var(--font-heading)] text-text-primary font-semibold m-0"
                        style={{ fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-0.02em' }}
                    >
                        {title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {certifications.map((cert, index) => {
                        const isAccredited = cert.name.includes('Academy Accreditation');
                        const accreditedLabel = language === 'en' ? 'Accreditation' : 'Acreditação';
                        return (
                        <div
                            key={index}
                            className={`reveal group relative flex flex-col rounded-[14px] p-6 transition-[border-color,box-shadow] duration-200 ${
                                isAccredited
                                    ? 'bg-[color-mix(in_srgb,var(--accent)_5%,var(--bg-surface))] border border-accent shadow-[0_0_0_1px_var(--accent),0_8px_30px_-12px_var(--accent)] hover:shadow-[0_0_0_1px_var(--accent),0_12px_36px_-10px_var(--accent)]'
                                    : 'bg-bg-surface border border-border hover:border-[var(--accent-line)]'
                            }`}
                        >
                            {isAccredited && (
                                <span className="absolute top-4 right-4 inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] uppercase text-bg-base bg-accent rounded-full px-[9px] py-[3px]">
                                    <svg className="w-[11px] h-[11px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                                    </svg>
                                    {accreditedLabel}
                                </span>
                            )}
                            {/* Icon and title */}
                            <div className="flex items-start gap-4 mb-4">
                                <CertIcon icon={cert.icon} />
                                <div className="flex-1">
                                    <h3 className={`font-[family-name:var(--font-heading)] text-[17px] font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors duration-200 ${isAccredited ? 'pr-24' : ''}`}>
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                                    <p className="font-[family-name:var(--font-mono)] text-[11px] text-text-muted mt-1">{cert.date}</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-5">
                                <p className="font-[family-name:var(--font-mono)] text-[11px] text-text-muted mb-2 tracking-[0.04em]">
                                    {skillsLabel}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-[family-name:var(--font-mono)] text-[11.5px] text-text-secondary bg-bg-surface-alt border border-border rounded-[7px] px-[10px] py-[5px]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Credential link */}
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 w-fit font-[family-name:var(--font-mono)] text-[12px] text-text-muted border border-border rounded-lg px-[11px] py-[7px] transition-all duration-200 hover:border-accent hover:text-accent"
                            >
                                {showCredential}
                                <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
