// Internationalization utilities with translation dictionaries

export type Language = 'en' | 'pt';

export const translations = {
    en: {
        // Navigation
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
            contact: 'Contact',
        },
        // Hero Section
        hero: {
            role: 'Software Engineer | Python | NextJS | LangChain | Agno | N8N',
            tagline: 'Full Stack Engineer and AI Lead building scalable applications with Python, NextJS, and cloud infrastructure.',
            cta: {
                contact: 'Get in Touch',
                resume: 'Download Resume',
            },
        },
        // About Section
        about: {
            title: 'About Me',
            description: `Full Stack Engineer and AI Lead building scalable applications with Python, NextJS, and cloud infrastructure.

Currently leading a development team at IndominusAI, where I architect AI agents, multi-agent systems, and machine learning solutions. My day-to-day involves hands-on coding alongside technical decisions from database design to AWS infrastructure (EC2, RDS, SQS, S3) to deployment pipelines.

My path to software engineering wasn't traditional. I spent years building businesses, WordPress development, SEO strategy, marketing automation with N8N. That background taught me to think beyond code: understanding users, measuring impact, and shipping things that actually solve problems.

Core stack: Python, Agno, LangChain, NextJS, Supabase, AWS, Docker, N8N

Based in Brazil, working remotely with US companies.`,
        },
        // Experience Section
        experience: {
            title: 'Experience',
            present: 'Present',
            positions: {
                indominusAI: {
                    company: 'IndominusAI',
                    role: 'Head of Artificial Intelligence',
                    period: 'July 2025 - Present',
                    location: 'São Paulo, Brazil',
                    description: `Leading a development team building AI-powered applications, balancing hands-on coding with architecture decisions and technical mentorship.

Architecting and implementing AI agents and multi-agent systems for business process automation using Python (Agno Framework), NextJS, and Supabase. Developing machine learning solutions for image analysis and categorization.

Managing cloud infrastructure across AWS (EC2, RDS, SES, SQS, S3), Vercel, and Railway. Designing secure and scalable architectures using VPC, Cloudflare R2, and containerized deployments. Building automation workflows with N8N to streamline development and operations.`,
                    technologies: ['Python', 'Agno', 'LangChain', 'NextJS', 'Supabase', 'AWS', 'Docker', 'N8N', 'Cloudflare R2'],
                },
                pixelPeninsula: {
                    company: 'Pixel Peninsula',
                    role: 'Co-Founder & Tech Lead',
                    period: 'November 2024 - December 2025',
                    location: 'Sheridan, Wyoming, USA',
                    description: `Co-founded a media company and led the technical acquisition and infrastructure overhaul of three gaming blogs (OutsiderGaming, LeagueFeed, LeagueTips).

Architected and executed a complete server migration to OVHCloud Bare Metal, implementing containerized infrastructure with Docker and EasyPanel for improved performance and scalability. Developed custom WordPress plugins and integrated analytics tracking with Matomo and Google Analytics.

Managed SEO strategy across all properties, on-page optimizations, content structure, and link building campaigns that increased overall traffic by 20%.`,
                    technologies: ['Docker', 'EasyPanel', 'WordPress', 'N8N', 'Matomo', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eEngineer: {
                    company: 'AT2E-USA',
                    role: 'Software Engineer',
                    period: 'March 2024 - July 2025',
                    location: 'Chicago, IL, USA',
                    description: `Led technical initiatives including the development of an internal management system built with NextJS, Python, and Supabase for handling quotes, customers, and purchase orders. Migrated company infrastructure from VPS to AWS (EC2), improving scalability and reducing operational costs.

Also managed SEO strategy, increasing daily Google search clicks from 6 to 65 and securing 20+ top-ranking keywords through technical optimizations and strategic link building.`,
                    technologies: ['NextJS', 'Python', 'Agno', 'Supabase', 'AWS EC2', 'N8N', 'WordPress', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eDev: {
                    company: 'AT2E-USA',
                    role: 'Web Developer',
                    period: 'November 2023 - March 2024',
                    location: 'Chicago, IL, USA',
                    description: `Worked as a WordPress Developer at AT2E-USA, a U.S.-based supplier of quality testing equipment for beverage packaging.

Successfully restructured and migrated the website from Weebly to WordPress, achieving a perfect 100% score on PageSpeed Tools. Developed custom WordPress plugins and automated key processes, significantly improving site performance and operational efficiency.

Rebuilt the site with Elementor Pro and WooCommerce, transitioning from an e-commerce platform to a product catalog. Implemented a self-hosted webchat solution via WooChat and developed automation workflows for WhatsApp notifications using the WhatsApp API and N8N.`,
                    technologies: ['WordPress', 'Elementor Pro', 'WooCommerce', 'VPS', 'WooChat', 'WhatsApp API', 'N8N'],
                },
                apolloPodcasts: {
                    company: 'Apollo Podcasts',
                    role: 'Software Engineer & SEO Lead',
                    period: 'July 2024 - November 2024',
                    location: 'Los Angeles, CA, USA',
                    description: `Developed a web-based podcast player prototype using NextJS and Supabase, reviving a project that had been stalled for months. Built the frontend interface and backend integration for Apollo Podcasts, a fiction podcast platform.

Also led SEO initiatives that drove significant growth — increased daily Google search clicks from 5 to 105, improved PageSpeed score from 70% to 99%, and built domain authority to DR 39 through strategic link building. Migrated the website from Webflow to WordPress for better performance and control.

Implemented email marketing infrastructure using AWS SES and optimized app store presence through ASO.`,
                    technologies: ['NextJS', 'Supabase', 'WordPress', 'AWS SES', 'SEMRUSH', 'AHREFS', 'MOZ'],
                },
                rocketJump: {
                    company: 'Rocket Jump Marketing',
                    role: 'Founder',
                    period: 'December 2019 - November 2024',
                    location: 'Curitiba, Brazil',
                    description: `Founder of Rocket Jump, a digital marketing company focused on co-producing and launching infoproducts in partnership with content creators. Oversaw both strategic and operational aspects of digital product launches, from content planning to sales execution.

Successfully launched multiple digital products and helped content creators establish a strong online presence. Managed strategic paid ad campaigns across Facebook, Instagram, LinkedIn, and TikTok, driving lead generation and sales growth. Led the development of high-converting landing pages, integrating automation and analytics to optimize performance.

Managed a video editing team, designed and optimized landing pages, and implemented email marketing automation with AWS SES.`,
                    technologies: ['WordPress', 'Elementor', 'N8N', 'WhatsApp API', 'AWS SES', 'Typebot', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                rebbel: {
                    company: 'Rebbel',
                    role: 'Founder',
                    period: 'March 2016 - March 2019',
                    location: 'Cascavel, Brazil',
                    description: `Founded Rebbel as a men's watch store, later evolving into a broader men's apparel brand with a focus on t-shirts.

Successfully migrated the e-commerce platform from PrestaShop to WordPress and WooCommerce, enhancing user experience and operational efficiency. Boosted local SEO performance and increased organic traffic through targeted optimization strategies.

Developed effective sales funnels and newsletter campaigns that improved customer engagement and conversion rates. Managed all aspects of the e-commerce platform, from initial setup to ongoing maintenance and optimization.`,
                    technologies: ['PrestaShop', 'WordPress', 'WooCommerce', 'Ubersuggest'],
                },
            },
        },
        // Skills Section
        skills: {
            title: 'Skills & Technologies',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                ai: 'AI & Machine Learning',
                infrastructure: 'Cloud & Infrastructure',
                automation: 'Automation',
                marketing: 'Marketing & Analytics',
            },
        },
        // Education Section
        education: {
            title: 'Education',
            degrees: {
                mba: {
                    school: 'Estácio',
                    degree: 'Master of Business Administration',
                    field: 'Artificial Intelligence',
                    period: 'Expected December 2026',
                },
                bachelor: {
                    school: 'Univel',
                    degree: "Degree in Business Administration and Management",
                    field: 'Business Administration and Management',
                    period: '2018',
                },
            },
        },
        // Contact Section
        contact: {
            title: "Let's Connect",
            subtitle: 'Interested in working together? Feel free to reach out!',
            linkedin: 'Connect on LinkedIn',
            email: 'Send an Email',
            whatsapp: 'Chat on WhatsApp',
        },
        // Footer
        footer: {
            rights: 'All rights reserved.',
        },
    },
    pt: {
        // Navigation
        nav: {
            about: 'Sobre',
            experience: 'Experiência',
            skills: 'Habilidades',
            education: 'Formação',
            contact: 'Contato',
        },
        // Hero Section
        hero: {
            role: 'Engenheiro de Software | Python | NextJS | LangChain | Agno | N8N',
            tagline: 'Engenheiro Full Stack e AI Lead construindo aplicações escaláveis com Python, NextJS e infraestrutura em nuvem.',
            cta: {
                contact: 'Entre em Contato',
                resume: 'Baixar Currículo',
            },
        },
        // About Section
        about: {
            title: 'Sobre Mim',
            description: `Engenheiro Full Stack e AI Lead construindo aplicações escaláveis com Python, NextJS e infraestrutura em nuvem.

Atualmente liderando uma equipe de desenvolvimento na IndominusAI, onde arquiteto agentes de IA, sistemas multi-agentes e soluções de machine learning. Meu dia-a-dia envolve codificação hands-on junto com decisões técnicas desde design de banco de dados até infraestrutura AWS (EC2, RDS, SQS, S3) e pipelines de deploy.

Meu caminho para engenharia de software não foi tradicional. Passei anos construindo negócios, desenvolvimento WordPress, estratégia de SEO, automação de marketing com N8N. Esse background me ensinou a pensar além do código: entender usuários, medir impacto e entregar coisas que realmente resolvem problemas.

Stack principal: Python, Agno, LangChain, NextJS, Supabase, AWS, Docker, N8N

Baseado no Brasil, trabalhando remotamente com empresas americanas.`,
        },
        // Experience Section
        experience: {
            title: 'Experiência',
            present: 'Presente',
            positions: {
                indominusAI: {
                    company: 'IndominusAI',
                    role: 'Head de Inteligência Artificial',
                    period: 'Julho 2025 - Presente',
                    location: 'São Paulo, Brasil',
                    description: `Liderando uma equipe de desenvolvimento construindo aplicações com IA, equilibrando codificação hands-on com decisões de arquitetura e mentoria técnica.

Arquitetando e implementando agentes de IA e sistemas multi-agentes para automação de processos de negócios usando Python (Agno Framework), NextJS e Supabase. Desenvolvendo soluções de machine learning para análise e categorização de imagens.

Gerenciando infraestrutura em nuvem na AWS (EC2, RDS, SES, SQS, S3), Vercel e Railway. Projetando arquiteturas seguras e escaláveis usando VPC, Cloudflare R2 e deployments containerizados. Construindo workflows de automação com N8N.`,
                    technologies: ['Python', 'Agno', 'LangChain', 'NextJS', 'Supabase', 'AWS', 'Docker', 'N8N', 'Cloudflare R2'],
                },
                pixelPeninsula: {
                    company: 'Pixel Peninsula',
                    role: 'Co-Fundador & Tech Lead',
                    period: 'Novembro 2024 - Dezembro 2025',
                    location: 'Sheridan, Wyoming, EUA',
                    description: `Co-fundei uma empresa de mídia e liderei a aquisição técnica e reestruturação de infraestrutura de três blogs de games (OutsiderGaming, LeagueFeed, LeagueTips).

Arquitetei e executei uma migração completa de servidores para OVHCloud Bare Metal, implementando infraestrutura containerizada com Docker e EasyPanel para melhor performance e escalabilidade. Desenvolvi plugins WordPress customizados e integrei tracking de analytics com Matomo e Google Analytics.

Gerenciei estratégia de SEO em todas as propriedades, otimizações on-page, estrutura de conteúdo e campanhas de link building que aumentaram o tráfego geral em 20%.`,
                    technologies: ['Docker', 'EasyPanel', 'WordPress', 'N8N', 'Matomo', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eEngineer: {
                    company: 'AT2E-USA',
                    role: 'Engenheiro de Software',
                    period: 'Março 2024 - Julho 2025',
                    location: 'Chicago, IL, EUA',
                    description: `Liderei iniciativas técnicas incluindo o desenvolvimento de um sistema de gestão interno construído com NextJS, Python e Supabase para gerenciar orçamentos, clientes e pedidos de compra. Migrei a infraestrutura da empresa de VPS para AWS (EC2), melhorando escalabilidade e reduzindo custos operacionais.

Também gerenciei estratégia de SEO, aumentando cliques diários do Google de 6 para 65 e garantindo 20+ palavras-chave bem ranqueadas através de otimizações técnicas e link building estratégico.`,
                    technologies: ['NextJS', 'Python', 'Agno', 'Supabase', 'AWS EC2', 'N8N', 'WordPress', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eDev: {
                    company: 'AT2E-USA',
                    role: 'Desenvolvedor Web',
                    period: 'Novembro 2023 - Março 2024',
                    location: 'Chicago, IL, EUA',
                    description: `Trabalhei como Desenvolvedor WordPress na AT2E-USA, fornecedora americana de equipamentos de teste de qualidade para embalagens de bebidas.

Reestruturei e migrei com sucesso o site de Weebly para WordPress, alcançando 100% no PageSpeed Tools. Desenvolvi plugins WordPress customizados e automatizei processos-chave, melhorando significativamente a performance do site e eficiência operacional.

Reconstruí o site com Elementor Pro e WooCommerce, fazendo a transição de plataforma e-commerce para catálogo de produtos. Implementei solução de webchat self-hosted via WooChat e desenvolvi workflows de automação para notificações WhatsApp.`,
                    technologies: ['WordPress', 'Elementor Pro', 'WooCommerce', 'VPS', 'WooChat', 'WhatsApp API', 'N8N'],
                },
                apolloPodcasts: {
                    company: 'Apollo Podcasts',
                    role: 'Engenheiro de Software & SEO Lead',
                    period: 'Julho 2024 - Novembro 2024',
                    location: 'Los Angeles, CA, EUA',
                    description: `Desenvolvi um protótipo de player de podcast web usando NextJS e Supabase, revivendo um projeto que estava parado há meses. Construí a interface frontend e integração backend para Apollo Podcasts, uma plataforma de podcasts de ficção.

Liderei iniciativas de SEO que geraram crescimento significativo — aumentei cliques diários do Google de 5 para 105, melhorei o PageSpeed de 70% para 99%, e construí autoridade de domínio para DR 39 através de link building estratégico. Migrei o site de Webflow para WordPress para melhor performance e controle.

Implementei infraestrutura de email marketing usando AWS SES e otimizei presença em app stores através de ASO.`,
                    technologies: ['NextJS', 'Supabase', 'WordPress', 'AWS SES', 'SEMRUSH', 'AHREFS', 'MOZ'],
                },
                rocketJump: {
                    company: 'Rocket Jump Marketing',
                    role: 'Fundador',
                    period: 'Dezembro 2019 - Novembro 2024',
                    location: 'Curitiba, Brasil',
                    description: `Fundador da Rocket Jump, empresa de marketing digital focada em co-produzir e lançar infoprodutos em parceria com criadores de conteúdo. Supervisionei aspectos estratégicos e operacionais de lançamentos de produtos digitais, do planejamento de conteúdo à execução de vendas.

Lancei múltiplos produtos digitais com sucesso e ajudei criadores de conteúdo a estabelecer forte presença online. Gerenciei campanhas estratégicas de anúncios pagos no Facebook, Instagram, LinkedIn e TikTok, gerando leads e crescimento de vendas. Liderei o desenvolvimento de landing pages de alta conversão.

Gerenciei equipe de edição de vídeo, projetei e otimizei landing pages, e implementei automação de email marketing com AWS SES.`,
                    technologies: ['WordPress', 'Elementor', 'N8N', 'WhatsApp API', 'AWS SES', 'Typebot', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                rebbel: {
                    company: 'Rebbel',
                    role: 'Fundador',
                    period: 'Março 2016 - Março 2019',
                    location: 'Cascavel, Brasil',
                    description: `Fundei a Rebbel como loja de relógios masculinos, posteriormente expandindo para uma marca de vestuário masculino focada em camisetas.

Migrei com sucesso a plataforma e-commerce de PrestaShop para WordPress e WooCommerce, melhorando experiência do usuário e eficiência operacional. Melhorei o SEO local e aumentei tráfego orgânico através de estratégias de otimização direcionadas.

Desenvolvi funis de vendas efetivos e campanhas de newsletter que melhoraram engajamento do cliente e taxas de conversão. Gerenciei todos os aspectos da plataforma e-commerce, da configuração inicial à manutenção e otimização contínuas.`,
                    technologies: ['PrestaShop', 'WordPress', 'WooCommerce', 'Ubersuggest'],
                },
            },
        },
        // Skills Section
        skills: {
            title: 'Habilidades & Tecnologias',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                ai: 'IA & Machine Learning',
                infrastructure: 'Cloud & Infraestrutura',
                automation: 'Automação',
                marketing: 'Marketing & Analytics',
            },
        },
        // Education Section
        education: {
            title: 'Formação',
            degrees: {
                mba: {
                    school: 'Estácio',
                    degree: 'MBA',
                    field: 'Inteligência Artificial',
                    period: 'Previsão Dezembro 2026',
                },
                bachelor: {
                    school: 'Univel',
                    degree: 'Tecnólogo',
                    field: 'Processos Gerenciais',
                    period: '2018',
                },
            },
        },
        // Contact Section
        contact: {
            title: 'Vamos Conectar',
            subtitle: 'Interessado em trabalhar junto? Fique à vontade para entrar em contato!',
            linkedin: 'Conectar no LinkedIn',
            email: 'Enviar um Email',
            whatsapp: 'Conversar no WhatsApp',
        },
        // Footer
        footer: {
            rights: 'Todos os direitos reservados.',
        },
    },
} as const;

// Skills data (shared between languages)
export const skillsData = {
    frontend: ['React', 'NextJS', 'TypeScript', 'WordPress', 'Elementor', 'Tailwind CSS'],
    backend: ['Python', 'Node.js', 'Supabase', 'PostgreSQL'],
    ai: ['Agno', 'LangChain', 'OpenAI API', 'AI Agents', 'Multi-Agent Systems'],
    infrastructure: ['AWS (EC2, RDS, SES, SQS, S3)', 'Vercel', 'Railway', 'Docker', 'OVHCloud', 'Cloudflare R2'],
    automation: ['N8N', 'WhatsApp API', 'Webhooks', 'CI/CD'],
    marketing: ['SEO', 'SEMRUSH', 'AHREFS', 'Google Analytics', 'Matomo', 'Facebook Ads'],
};

// Detect language from Accept-Language header or browser
export function detectLanguage(acceptLanguage?: string): Language {
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map((lang) => lang.split(';')[0].trim().toLowerCase());
        for (const lang of languages) {
            if (lang.startsWith('pt')) return 'pt';
        }
    }
    return 'en';
}

// Get translation helper
export function getTranslations(lang: Language) {
    return translations[lang];
}
