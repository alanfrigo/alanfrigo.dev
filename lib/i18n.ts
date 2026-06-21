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
            role: 'AI Engineer | Python | Databricks | LangChain | Agno | NextJS',
            tagline: 'Full Stack Engineer and AI Lead building applications with Python, NextJS, and cloud infrastructure.',
            cta: {
                contact: 'Get in Touch',
                resume: 'Download Resume',
            },
        },
        // About Section
        about: {
            title: 'About Me',
            description: `Full Stack Engineer and AI Lead. I build applications with Python, NextJS, and cloud infrastructure.

Right now I work as an AI Engineer, building multi-agent systems and AI solutions for real business problems with Databricks, LangChain, and Python. The work is hands-on: I write code, and I make the technical calls on agent design, cloud setup, and deployment.

I didn't come to software the usual way. I spent years running businesses, doing WordPress development, SEO, and marketing automation with N8N. That taught me to think past the code: who uses it, whether it moves the numbers, and whether it solves the problem it was meant to.

Core stack: Python, Databricks, Agno, LangChain, NextJS, Supabase, AWS, Docker, N8N

I'm based in Brazil and work remotely with US companies.`,
            stats: {
                yearsExperience: 'Years Experience',
                companies: 'Companies',
                technologies: 'Technologies',
                countries: 'Countries',
            },
        },
        // Experience Section
        experience: {
            title: 'Experience',
            present: 'Present',
            positions: {
                db: {
                    company: 'DB',
                    role: 'Artificial Intelligence Engineer',
                    period: 'April 2026 - Present',
                    location: 'Brazil',
                    description: `I build AI solutions for real business problems. Currently assigned to a large retail client.

Projects I've built:
- A multi-agent system that flags inconsistencies in payment orders, including possible fraud.`,
                    technologies: ['Databricks', 'Databricks Agents & Genie', 'LangChain', 'Python'],
                },
                indominusAI: {
                    company: 'IndominusAI',
                    role: 'Head of Artificial Intelligence',
                    period: 'June 2025 - April 2026',
                    location: 'São Paulo, Brazil',
                    description: `I lead a development team building AI applications, splitting my time between writing code, making architecture calls, and mentoring the team.

I design and build AI agents and multi-agent systems for business process automation with Python (Agno Framework), NextJS, and Supabase, plus machine learning for image analysis and categorization.

I manage cloud infrastructure across AWS (EC2, RDS, SES, SQS, S3), Vercel, and Railway, and design the architecture behind it using VPC, Cloudflare R2, and containerized deployments. I also build N8N workflows to automate parts of development and operations.`,
                    technologies: ['Python', 'Agno', 'LangChain', 'NextJS', 'Supabase', 'AWS', 'Docker', 'N8N', 'Cloudflare R2'],
                },
                pixelPeninsula: {
                    company: 'Pixel Peninsula',
                    role: 'Co-Founder & Tech Lead',
                    period: 'November 2024 - December 2025',
                    location: 'Sheridan, Wyoming, USA',
                    description: `I co-founded a media company and led the technical side of acquiring and rebuilding three gaming blogs (OutsiderGaming, LeagueFeed, LeagueTips).

I migrated the servers to OVHCloud Bare Metal and set up containerized infrastructure with Docker and EasyPanel, which made the sites faster and easier to scale. I also wrote custom WordPress plugins and set up analytics with Matomo and Google Analytics.

I ran SEO across all three sites, including on-page work, content structure, and link building, and grew overall traffic by 20%.`,
                    technologies: ['Docker', 'EasyPanel', 'WordPress', 'N8N', 'Matomo', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eEngineer: {
                    company: 'AT2E-USA',
                    role: 'Software Engineer',
                    period: 'March 2024 - July 2025',
                    location: 'Chicago, IL, USA',
                    description: `I built an internal management system with NextJS, Python, and Supabase to handle quotes, customers, and purchase orders. I also moved the company's infrastructure from a VPS to AWS (EC2), which improved scalability and cut operating costs.

On the marketing side, I ran SEO: daily Google clicks went from 6 to 65, and I got more than 20 keywords ranking near the top through technical fixes and link building.`,
                    technologies: ['NextJS', 'Python', 'Agno', 'Supabase', 'AWS EC2', 'N8N', 'WordPress', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eDev: {
                    company: 'AT2E-USA',
                    role: 'Web Developer',
                    period: 'November 2023 - March 2024',
                    location: 'Chicago, IL, USA',
                    description: `I worked as a WordPress developer at AT2E-USA, a US supplier of quality-testing equipment for beverage packaging.

I rebuilt and migrated the site from Weebly to WordPress and got it to a 100% PageSpeed score. I wrote custom plugins and automated a few manual processes, which made the site faster and the team's work lighter.

I rebuilt the site again with Elementor Pro and WooCommerce, moving it from a store to a product catalog. I set up a self-hosted webchat with WooChat and built WhatsApp notification workflows using the WhatsApp API and N8N.`,
                    technologies: ['WordPress', 'Elementor Pro', 'WooCommerce', 'VPS', 'WooChat', 'WhatsApp API', 'N8N'],
                },
                apolloPodcasts: {
                    company: 'Apollo Podcasts',
                    role: 'Software Engineer & SEO Lead',
                    period: 'July 2024 - November 2024',
                    location: 'Los Angeles, CA, USA',
                    description: `I built a web-based podcast player prototype with NextJS and Supabase, picking up a project that had been stalled for months. I wrote the frontend and the backend integration for Apollo Podcasts, a fiction podcast platform.

I also ran SEO, with solid results: daily Google clicks went from 5 to 105, the PageSpeed score went from 70% to 99%, and domain authority reached DR 39 through link building. I moved the site from Webflow to WordPress for better performance and control.

On top of that, I set up email marketing with AWS SES and worked on app store visibility through ASO.`,
                    technologies: ['NextJS', 'Supabase', 'WordPress', 'AWS SES', 'SEMRUSH', 'AHREFS', 'MOZ'],
                },
                rocketJump: {
                    company: 'Rocket Jump Marketing',
                    role: 'Founder',
                    period: 'December 2019 - November 2024',
                    location: 'Curitiba, Brazil',
                    description: `I founded Rocket Jump, a digital marketing company that co-produced and launched infoproducts with content creators. I handled both the strategy and the day-to-day of those launches, from planning the content to running the sales.

I launched several digital products and helped creators build an audience. I ran paid campaigns on Facebook, Instagram, LinkedIn, and TikTok that brought in leads and sales, and I led the work on landing pages built to convert, with automation and analytics wired in to track what worked.

I also managed a video editing team, designed and tuned landing pages, and set up email marketing automation with AWS SES.`,
                    technologies: ['WordPress', 'Elementor', 'N8N', 'WhatsApp API', 'AWS SES', 'Typebot', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                rebbel: {
                    company: 'Rebbel',
                    role: 'Founder',
                    period: 'March 2016 - March 2019',
                    location: 'Cascavel, Brazil',
                    description: `I started Rebbel as a men's watch store and later grew it into a men's apparel brand built mostly around t-shirts.

I moved the store from PrestaShop to WordPress and WooCommerce, which made it easier to use and run. I improved local SEO and brought in more organic traffic.

I built sales funnels and newsletter campaigns that got customers more engaged and lifted conversion rates. I ran the whole store myself, from the first setup through the ongoing upkeep.`,
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
                mba2: {
                    school: 'UTFPR',
                    degree: 'Master of Business Administration',
                    field: 'Software Engineering',
                    period: 'Expected December 2027',
                },
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
        // Projects Section
        projects: {
            title: 'Projects',
            viewOnGithub: 'View on GitHub',
            readBlog: 'Read The AI Cliff',
            blogBadge: 'Blog',
            items: {
                aicliff: {
                    name: 'The AI Cliff',
                    tagline: 'AI newsletter on Substack',
                    description: 'My newsletter about artificial intelligence: LLMs, AI agents, and the tools and ideas changing how we build with AI. Practical writing from someone working in the field.',
                    features: ['LLMs', 'AI Agents', 'RAG', 'Prompt Engineering', 'AI Tooling'],
                },
                schiphol: {
                    name: 'Schiphol Flights ELT',
                    description: 'End-to-end ELT pipeline on live flight data from Amsterdam Schiphol Airport. Python extracts and loads into PostgreSQL with idempotent upserts, dbt models a tested star schema, and a Streamlit dashboard reads the aggregated marts. The whole stack runs on Docker Compose. A study project for sharpening data engineering fundamentals.',
                    features: ['Python Extract + Load', 'PostgreSQL', 'dbt Star Schema', 'Idempotent Upserts', 'dbt Data Tests', 'Streamlit + Plotly', 'Docker Compose'],
                },
                supapanel: {
                    name: 'SupaPanel',
                    description: 'Open-source management panel for self-hosted Supabase instances. Deploy your own Supabase infrastructure on any Linux server with a single command.',
                    features: ['One-Command Install', 'Docker Integration', 'Traefik Reverse Proxy', 'Automatic HTTPS', 'Multi-Project Management', 'Custom Domains'],
                },
                rkj: {
                    name: 'RKJ.AI',
                    description: 'Intelligent Meeting Assistant. Automatically record and transcribe your Google Meet & Zoom meetings. Self-hosted and open source.',
                    features: ['Google Calendar Sync', 'Auto-Join Bot', 'HD Recording', 'AI Transcription', 'Speaker ID', 'Full-Text Search'],
                },
                brain: {
                    name: 'BRAIN',
                    description: 'Personal knowledge base with RAG chat. Turns an Obsidian vault into a navigable docs site and answers questions over your notes with cited sources. Self-hosted and open source.',
                    features: ['RAG Chat with Citations', 'Hybrid Search (BM25 + Vectors)', 'Obsidian Vault Rendering', 'Interactive Graph View', 'Streaming Responses', 'GitHub OAuth'],
                },
            },
        },
        // Contact Section
        contact: {
            title: "Let's Connect",
            subtitle: 'Want to work together? Send me a message.',
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
            role: 'Engenheiro de IA | Python | Databricks | LangChain | Agno | NextJS',
            tagline: 'Engenheiro Full Stack e AI Lead construindo aplicações com Python, NextJS e infraestrutura em nuvem.',
            cta: {
                contact: 'Entre em Contato',
                resume: 'Baixar Currículo',
            },
        },
        // About Section
        about: {
            title: 'Sobre Mim',
            description: `Engenheiro Full Stack e AI Lead. Construo aplicações com Python, NextJS e infraestrutura em nuvem.

Hoje trabalho como Engenheiro de IA, construindo sistemas multi-agentes e soluções de IA para problemas reais de negócio com Databricks, LangChain e Python. O trabalho é mão na massa: escrevo código e tomo as decisões técnicas sobre o design dos agentes, a infraestrutura em nuvem e os pipelines de deploy.

Não cheguei à engenharia de software pelo caminho comum. Passei anos tocando negócios, desenvolvendo em WordPress, fazendo SEO e automação de marketing com N8N. Isso me ensinou a pensar além do código: quem vai usar, se mexe nos números e se resolve o problema que precisava resolver.

Stack principal: Python, Databricks, Agno, LangChain, NextJS, Supabase, AWS, Docker, N8N

Moro no Brasil e trabalho remoto com empresas americanas.`,
            stats: {
                yearsExperience: 'Anos de Experiência',
                companies: 'Empresas',
                technologies: 'Tecnologias',
                countries: 'Países',
            },
        },
        // Experience Section
        experience: {
            title: 'Experiência',
            present: 'Presente',
            positions: {
                db: {
                    company: 'DB',
                    role: 'Engenheiro de Inteligência Artificial',
                    period: 'Abril 2026 - Presente',
                    location: 'Brasil',
                    description: `Construo soluções de IA para problemas reais de negócio. Atualmente alocado em um grande cliente do varejo.

Projetos que desenvolvi:
- Sistema multi-agente que detecta inconsistências em ordens de pagamento, incluindo possíveis fraudes.`,
                    technologies: ['Databricks', 'Databricks Agents & Genie', 'LangChain', 'Python'],
                },
                indominusAI: {
                    company: 'IndominusAI',
                    role: 'Head de Inteligência Artificial',
                    period: 'Junho 2025 - Abril 2026',
                    location: 'São Paulo, Brasil',
                    description: `Lidero uma equipe de desenvolvimento que constrói aplicações com IA, dividindo meu tempo entre escrever código, decisões de arquitetura e mentoria do time.

Projeto e construo agentes de IA e sistemas multi-agentes para automação de processos com Python (Agno Framework), NextJS e Supabase, além de machine learning para análise e categorização de imagens.

Cuido da infraestrutura em nuvem na AWS (EC2, RDS, SES, SQS, S3), Vercel e Railway, e desenho a arquitetura por trás disso com VPC, Cloudflare R2 e deployments containerizados. Também construo workflows no N8N para automatizar partes do desenvolvimento e da operação.`,
                    technologies: ['Python', 'Agno', 'LangChain', 'NextJS', 'Supabase', 'AWS', 'Docker', 'N8N', 'Cloudflare R2'],
                },
                pixelPeninsula: {
                    company: 'Pixel Peninsula',
                    role: 'Co-Fundador & Tech Lead',
                    period: 'Novembro 2024 - Dezembro 2025',
                    location: 'Sheridan, Wyoming, EUA',
                    description: `Co-fundei uma empresa de mídia e liderei a parte técnica da aquisição e reconstrução de três blogs de games (OutsiderGaming, LeagueFeed, LeagueTips).

Migrei os servidores para OVHCloud Bare Metal e montei a infraestrutura containerizada com Docker e EasyPanel, o que deixou os sites mais rápidos e fáceis de escalar. Também escrevi plugins WordPress customizados e configurei analytics com Matomo e Google Analytics.

Cuidei do SEO dos três sites, incluindo otimizações on-page, estrutura de conteúdo e link building, e aumentei o tráfego geral em 20%.`,
                    technologies: ['Docker', 'EasyPanel', 'WordPress', 'N8N', 'Matomo', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eEngineer: {
                    company: 'AT2E-USA',
                    role: 'Engenheiro de Software',
                    period: 'Março 2024 - Julho 2025',
                    location: 'Chicago, IL, EUA',
                    description: `Construí um sistema de gestão interno com NextJS, Python e Supabase para gerenciar orçamentos, clientes e pedidos de compra. Também migrei a infraestrutura da empresa de um VPS para a AWS (EC2), o que melhorou a escalabilidade e reduziu os custos.

No marketing, cuidei do SEO: os cliques diários no Google foram de 6 para 65, e coloquei mais de 20 palavras-chave bem ranqueadas com ajustes técnicos e link building.`,
                    technologies: ['NextJS', 'Python', 'Agno', 'Supabase', 'AWS EC2', 'N8N', 'WordPress', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                at2eDev: {
                    company: 'AT2E-USA',
                    role: 'Desenvolvedor Web',
                    period: 'Novembro 2023 - Março 2024',
                    location: 'Chicago, IL, EUA',
                    description: `Trabalhei como desenvolvedor WordPress na AT2E-USA, fornecedora americana de equipamentos de teste de qualidade para embalagens de bebidas.

Reconstruí e migrei o site de Weebly para WordPress e cheguei a 100% no PageSpeed. Escrevi plugins customizados e automatizei alguns processos manuais, o que deixou o site mais rápido e o trabalho do time mais leve.

Reconstruí o site de novo com Elementor Pro e WooCommerce, transformando a loja em um catálogo de produtos. Montei um webchat self-hosted com WooChat e criei workflows de notificação no WhatsApp usando a WhatsApp API e o N8N.`,
                    technologies: ['WordPress', 'Elementor Pro', 'WooCommerce', 'VPS', 'WooChat', 'WhatsApp API', 'N8N'],
                },
                apolloPodcasts: {
                    company: 'Apollo Podcasts',
                    role: 'Engenheiro de Software & SEO Lead',
                    period: 'Julho 2024 - Novembro 2024',
                    location: 'Los Angeles, CA, EUA',
                    description: `Construí um protótipo de player de podcast web com NextJS e Supabase, retomando um projeto que estava parado havia meses. Escrevi o frontend e a integração com o backend do Apollo Podcasts, uma plataforma de podcasts de ficção.

Também cuidei do SEO, com bons resultados: os cliques diários no Google foram de 5 para 105, o PageSpeed subiu de 70% para 99% e a autoridade de domínio chegou a DR 39 com link building. Migrei o site de Webflow para WordPress para ter mais performance e controle.

Além disso, montei a infraestrutura de email marketing com AWS SES e trabalhei na presença nas app stores via ASO.`,
                    technologies: ['NextJS', 'Supabase', 'WordPress', 'AWS SES', 'SEMRUSH', 'AHREFS', 'MOZ'],
                },
                rocketJump: {
                    company: 'Rocket Jump Marketing',
                    role: 'Fundador',
                    period: 'Dezembro 2019 - Novembro 2024',
                    location: 'Curitiba, Brasil',
                    description: `Fundei a Rocket Jump, empresa de marketing digital que co-produzia e lançava infoprodutos com criadores de conteúdo. Cuidei tanto da estratégia quanto do operacional desses lançamentos, do planejamento do conteúdo até a execução das vendas.

Lancei vários produtos digitais e ajudei criadores a construir audiência. Rodei campanhas pagas no Facebook, Instagram, LinkedIn e TikTok que geraram leads e vendas, e liderei o trabalho nas landing pages feitas para converter.

Também gerenciei uma equipe de edição de vídeo, criei e ajustei landing pages e montei automação de email marketing com AWS SES.`,
                    technologies: ['WordPress', 'Elementor', 'N8N', 'WhatsApp API', 'AWS SES', 'Typebot', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads', 'Google Analytics', 'SEMRUSH', 'AHREFS'],
                },
                rebbel: {
                    company: 'Rebbel',
                    role: 'Fundador',
                    period: 'Março 2016 - Março 2019',
                    location: 'Cascavel, Brasil',
                    description: `Comecei a Rebbel como loja de relógios masculinos e depois transformei numa marca de roupa masculina, focada em camisetas.

Migrei a loja de PrestaShop para WordPress e WooCommerce, o que deixou tudo mais fácil de usar e de tocar. Melhorei o SEO local e trouxe mais tráfego orgânico.

Criei funis de vendas e campanhas de newsletter que engajaram mais os clientes e melhoraram a conversão. Toquei a loja inteira sozinho, da configuração inicial à manutenção do dia a dia.`,
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
                mba2: {
                    school: 'UTFPR',
                    degree: 'MBA',
                    field: 'Engenharia de Software',
                    period: 'Previsão Dezembro 2027',
                },
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
        // Projects Section
        projects: {
            title: 'Projetos',
            viewOnGithub: 'Ver no GitHub',
            readBlog: 'Ler o The AI Cliff',
            blogBadge: 'Blog',
            items: {
                aicliff: {
                    name: 'The AI Cliff',
                    tagline: 'Newsletter sobre IA no Substack',
                    description: 'Minha newsletter sobre inteligência artificial: LLMs, agentes de IA e as ferramentas e ideias que mudam como construímos com IA. Textos práticos de quem trabalha na área.',
                    features: ['LLMs', 'Agentes de IA', 'RAG', 'Engenharia de Prompt', 'Ferramentas de IA'],
                },
                schiphol: {
                    name: 'Schiphol Flights ELT',
                    description: 'Pipeline ELT ponta a ponta com dados de voos do Aeroporto de Amsterdam Schiphol. Python extrai e carrega no PostgreSQL com upserts idempotentes, o dbt modela um star schema testado e um dashboard em Streamlit lê os marts agregados. A stack inteira sobe com Docker Compose. Projeto de estudo para afiar os fundamentos de engenharia de dados.',
                    features: ['Extract + Load em Python', 'PostgreSQL', 'Star Schema com dbt', 'Upserts Idempotentes', 'Testes de Dados dbt', 'Streamlit + Plotly', 'Docker Compose'],
                },
                supapanel: {
                    name: 'SupaPanel',
                    description: 'Painel de gerenciamento open-source para instâncias Supabase self-hosted. Implante sua própria infraestrutura Supabase em qualquer servidor Linux com um único comando.',
                    features: ['Instalação com Um Comando', 'Integração Docker', 'Proxy Reverso Traefik', 'HTTPS Automático', 'Gerenciamento Multi-Projeto', 'Domínios Customizados'],
                },
                rkj: {
                    name: 'RKJ.AI',
                    description: 'Assistente de Reuniões Inteligente. Grava e transcreve automaticamente suas reuniões do Google Meet e Zoom. Self-hosted e open source.',
                    features: ['Sincronização Google Calendar', 'Bot de Entrada Automática', 'Gravação HD', 'Transcrição com IA', 'Identificação de Falantes', 'Busca Full-Text'],
                },
                brain: {
                    name: 'BRAIN',
                    description: 'Base de conhecimento pessoal com chat RAG. Transforma um vault do Obsidian em um site de documentação navegável e responde perguntas sobre suas notas com fontes citadas. Self-hosted e open source.',
                    features: ['Chat RAG com Citações', 'Busca Híbrida (BM25 + Vetores)', 'Renderização do Vault Obsidian', 'Visualização em Grafo Interativo', 'Respostas em Streaming', 'GitHub OAuth'],
                },
            },
        },
        // Contact Section
        contact: {
            title: 'Vamos Conectar',
            subtitle: 'Quer trabalhar junto? Manda uma mensagem.',
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
    ai: ['Databricks', 'Agno', 'LangChain', 'OpenAI API', 'AI Agents', 'Multi-Agent Systems', 'RAG'],
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
