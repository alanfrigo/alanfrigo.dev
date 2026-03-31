'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            key: 'rkj',
            logo: '/rkj-logo.svg',
            technologies: ['Next.js 16', 'FastAPI', 'Python', 'Docker', 'OpenAI Whisper', 'Supabase', 'Playwright'],
            githubUrl: 'https://github.com/alanfrigo/rkj-ai',
        },
        {
            key: 'supapanel',
            logo: '/logo-supapanel.png',
            technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'Traefik'],
            githubUrl: 'https://github.com/alanfrigo/SupaPanel',
        }
    ];

    return (
        <section id="projects" className="py-20 sm:py-32 bg-bg-surface-alt">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">02 / {t.projects.title}</p>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-text-primary mb-3">
                        {t.projects.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-accent mx-auto" />
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {projects.map((project) => {
                        const projectData = t.projects.items[project.key as keyof typeof t.projects.items];

                        return (
                            <div
                                key={project.key}
                                className="reveal group bg-bg-surface rounded-xl border border-border hover:border-accent/40 transition-colors duration-200 overflow-hidden"
                            >
                                <div className="relative p-6 sm:p-8">
                                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                                        {/* Logo */}
                                        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-bg-surface-alt rounded-xl p-4 flex items-center justify-center">
                                            <Image
                                                src={project.logo}
                                                alt={projectData.name}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
                                                <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-text-primary">
                                                    {projectData.name}
                                                </h3>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200 text-sm font-medium w-fit"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                    {t.projects.viewOnGithub}
                                                </a>
                                            </div>

                                            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
                                                {projectData.description}
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {projectData.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md"
                                                    >
                                                        ✓ {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 text-xs font-medium bg-bg-surface-alt text-text-secondary rounded-md border border-border"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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
