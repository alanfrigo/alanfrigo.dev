'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            key: 'supapanel',
            logo: '/logo-supapanel.png',
            technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'Traefik'],
            githubUrl: 'https://github.com/alanfrigo/SupaPanel',
        },
    ];

    return (
        <section id="projects" className="py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.projects.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {projects.map((project) => {
                        const projectData = t.projects.items[project.key as keyof typeof t.projects.items];

                        return (
                            <div
                                key={project.key}
                                className="group relative bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50"
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative p-6 sm:p-8">
                                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                                        {/* Logo */}
                                        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 rounded-2xl p-4 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
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
                                                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                                                    {projectData.name}
                                                </h3>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors duration-200 text-sm font-medium w-fit"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                    {t.projects.viewOnGithub}
                                                </a>
                                            </div>

                                            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed mb-4">
                                                {projectData.description}
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {projectData.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-100 dark:border-green-800/50"
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
                                                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50"
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
