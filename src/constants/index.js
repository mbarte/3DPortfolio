import { unimi, taverna, sph, studioref, mbs } from "../assets/images";
import {
    car,
    contact,
    css,
    docker,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    linux,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    microsoft,
    redis,
    mariadb,
    python,
    php,
    ollama,
    openai,
    huggingface,
    celery,
    fastapi,
    flask,
    websocket,
    postman,
    digitalocean,
    cloudserver,
    nginx, 
    playwright
} from "../assets/icons";

export const skills = [
    //DEVOPS 
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    // OS
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },
    {
        imageUrl: microsoft,
        name: "microsoft",
        type: "Operating System",
    },
    //DATABASES 
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: mariadb,
        name: "mariadb",
        type: "Database",
    },
    //BACKEND
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: fastapi,
        name: "fastAPI",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: celery,
        name: "Celery",
        type: "Backend",
    },
    {
        imageUrl: websocket,
        name: "Web Socket",
        type: "Backend",
    },
    // ML/AI
    {
        imageUrl: huggingface,
        name: "Hugging Face",
        type: "Machine Learning",
    },
    {
        imageUrl: ollama,
        name: "Ollama",
        type: "Machine Learning",
    },
    {
        imageUrl: openai,
        name: "OpenAI",
        type: "Machine Learning",
    },
    //CLOUD/SERVER
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "Server",
    },
    {
        imageUrl: cloudserver,
        name: "Cloud Server",
        type: "Cloud",
    },
    {
        imageUrl: digitalocean,
        name: "DigitalOcean",
        type: "Cloud",
    },
    //TESTING
    {
        imageUrl: postman,
        name: "Postman",
        type: "Testing",
    },
    {
        imageUrl: playwright,
        name: "Playwright",
        type: "Testing",
    },
    // VERSION CONTROL
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    //FRONTEND
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    //STYLE
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "MBS Consulting S.p.a - Cerved - ION",
        icon: mbs,
        iconBg: "#001437bf",
        date: "September 2026 - Present",
        points: [
            
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "S+H Technology SA",
        icon: sph,
        iconBg: "#accbe1",
        date: "September 2023 - Present",
        points: [
            "Designed and developed a SaaS in production for the industrial automation sector, managing the full stack: SQL/NoSQL databases, backend, frontend, testing and deployment.",
            "Engineering the complete RAG pipeline of the SaaS application: data ingestion, retrieval schema design, and a hybrid LLM architecture combining a self-hosted model with the OpenAI API.",
            "Packaging and deploying web applications stack using Docker (multi-container setup), ensuring portability, scalability, and consistent environments across development and production, also allowing seamless on-premise deployment.",
            "Maintaining and extending the internal ERP system built on Laravel (MVC, Eloquent ORM, routing).",
            "Maintained and extended a municipal ecological platform handling hundreds of thousands of yearly accesses — contributing to both backend and frontend features.",
            "Development and management of the following institutional websites",
            "Participating in architecture reviews and providing constructive feedback to other colleagues.",
        ],
    },
    {
        title: "Data Entry",
        company_name: "Studio REF srl",
        icon: studioref,
        iconBg: "#fbc3bc",
        date: "Jul 2023 - Sep 2023",
        points: [
            "Managed the migration from Zucchetti ERP to Datev Koinos DK Set",
            "Produced technical and operational documentation for migration procedures and data workflows"
        ],
    },
    {
        title: "Tutor",
        company_name: "Università degli Studi di Milano",
        icon: unimi,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Jun 2023",
        points: [
            "Spreading data literacy by teaching R and data science in high school",
        ],
    },
    {
        title: "Guest Service",
        company_name: "La Taverna di Criscuolo srl",
        icon: taverna,
        iconBg: "#f5ed60",
        date: "Mar 2018 - Jan 2023",
        points: [
            "Head waiter",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];