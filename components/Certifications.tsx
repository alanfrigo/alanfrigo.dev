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
        <section id="certifications" className="py-20 sm:py-32 bg-bg-base">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">05 / {title}</p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="reveal p-6 bg-bg-surface rounded-xl border border-border hover:border-accent/40 transition-colors duration-200 group"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4 mb-4">
                                <CertIcon icon={cert.icon} />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-text-secondary">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-text-muted mt-1">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                                <p className="text-xs text-text-muted mb-2">
                                    {skillsLabel}:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 text-xs font-medium bg-bg-surface-alt text-text-secondary rounded-md border border-border"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Credential Link */}
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
                            >
                                {showCredential}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
