'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    skills: string[];
    icon: 'asimov' | 'aws';
}

const certifications: Certification[] = [
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
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            A
        </div>
    );
}

function AWSIcon() {
    return (
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
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

export default function Certifications() {
    const { language } = useLanguage();

    const title = language === 'en' ? 'Certifications' : 'Certificações';
    const showCredential = language === 'en' ? 'Show Credential' : 'Ver Credencial';
    const skillsLabel = language === 'en' ? 'Skills' : 'Habilidades';

    return (
        <section id="certifications" className="py-20 sm:py-32 bg-white dark:bg-zinc-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4 mb-4">
                                {cert.icon === 'asimov' ? <AsimovIcon /> : <AWSIcon />}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                                <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-2">
                                    {skillsLabel}:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 text-xs font-medium bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700"
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
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
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
