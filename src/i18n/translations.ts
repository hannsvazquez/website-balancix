type TranslationDict = {
    [key:string]: string;
};

export const language = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const translations:Record<string, TranslationDict> = {
    es: {
        'nav.home': 'Inicio',
        'nav.solutions': 'Soluciones',
        'nav.mentors': 'Mentores',
        'nav.contact': 'Contacto',
        'nav.faq': 'Preguntas Frecuentes',

        'solutions.platform': 'Plataforma',
        'solutions.advisor': 'Asesorías',

        'hero.span': 'en Startups Globales',
        'hero.title': 'Consigue Prácticas',
        'hero.subtitle':'Te preparamos con los mejores recursos de la industria para acelerar tu ingreso al mundo de las startups',

        'button.hero.cta':'Registrarse',
        'button.information': 'Más información',

        'title.resources': 'Noticias y Artículos',

        'title.reviews':'Nuestra Misión',

        'career.title': 'Roles en alta demanda',
        'career.subtitle': 'Prepárate para trabajar como:',


        'steps.title': '¿Cómo funciona?',
        'steps.first.step': 'Crea una cuenta',
        'steps.second.step': 'Descubre tu internship ideal',
        'steps.third.step': 'Postula o solicita una asesoría',
        'steps.first.detail': 'Es 100% gratis, sólo debes ingresar tu información básica',
        'steps.second.detail': 'Encuentra o recibe nuevas ofertas de prácticas en función de tu perfil profesional.',
        'steps.third.detail': 'El equipo de Balancix puede asesorarte para que tengas mayores probabilidades',

        // Pilars
        'pillars.first.title': 'Desarrollo integral de habilidades',
        'pillars.first.description': 'Formación completa en habilidades técnicas y blandas',

        'pillars.second.title': 'Dominio del tech stack',
        'pillars.second.description': 'Aprende las herramientas más demandadas del sector.',

        'pillars.third.title': 'Conoce más sobre tu industria',
        'pillars.third.description': 'Accede a mentorías con profesionales que ya conocen tu industria de interés',

        'pillars.four.title': 'Preparación para entrevistas',
        'pillars.four.description': 'Estrategias para destacar en entrevistas para roles en startups.',

        'pillars.fifth.title': 'Conexión con startups',
        'pillars.fifth.description': 'Accede a las mejores startups de LatAm, USA, Europa y el resto del mundo.',

        'pillars.sixth.title': 'Soporte continuo',
        'pillars.sixth.description': 'Te acompañamos y resolvemos cualquier duda durante todo el proceso.',


        'cta.main': 'El mejor momento para unirte a una startup, es HOY!',
        'cta.description': 'Sé parte de nuestra comunidad de estudiantes que buscan prepararse para ingresar a las startups más innovadoras del mundo',

        // Mission section
        'mission.phrase': 'Generar oportunidades globales en startups para que los estudiantes puedan acceder a empleos de mejor calidad y puedan ser parte de soluciones innovadoras',

        'advisor.title': 'Asesorías',
        
        'toggle.student':'Estudiante',
        'toggle.company': 'Empresa',

        'forcompanies.title': 'Acelera el crecimiento de tu startup con',
        'forcompanies.span': 'practicantes listos para ejecutar',

        'forcompanies.subtitle': 'Empezar un programa de practicas nunca fue tan sencillo',
        'forcompanies.description': 'La plataforma Balancix ayuda a las empresas a descubrir y contratar practicantes en áreas claves de negocio y con flexibilidad para trabajar por horas, a tiempo parcial o a tiempo completo.',

        'faq.heading':'Preguntas frecuentes',
        'faq.subheading': 'Resuelve tus dudas sobre cómo funcionan los servicios de Balancix y algunos detalles adicionales',

        'faq.first.question': '¿Cuál es la diferencia entre Balancix y otras plataformas de empleo como FirstJob?',
        'faq.first.response':'Balancix se diferencia por brindar oportunidades de prácticas a nivel global, en startups de diferentes países. Sin tener que preocuparte por los trámites o requisitos de tu universidad, o por cómo recibirás tus pagos. Además, tienes la opción de asesorarte con nuestro equipo de mentores.',

        'faq.second.question': '¿Estas prácticas cuentan con algún certificado válido para mi universidad?',
        'faq.second.response': 'Sí, ese es el gran beneficiode utilizar la plataforma de Balancix para conseguir tus primeras prácticas en dólares y con el certificado que necesitas!',

        'faq.third.question': '¿Qué tipo de perfiles y roles se aceptan en la plataforma?',
        'faq.third.response':'En Balancix, prioizamos los roles que más están en tendencia actualmente en el mundo startup como: Growth, Customer Success Specialist, , Brand & Community, Business Development, Product Marketing, Legal & Compliance, Talent Acquisition, Financial Analyst, Product Management, entre otros roles relacionados más a la parte de negocios.',

        'faq.fourth.question': '¿Cómo puedo publicar mis ofertas de prácticas como founder o reclutador?',
        'faq.fourth.response': 'Por el momento, puedes comunicarte directamente a nuestro correo de contacto (info@balancix-academy.com). Y un miembro de nuestro equipo atenderá tu requerimiento.'

    },
    en: {
        'nav.home': 'Home',
        'nav.solutions': 'Solutions',
        'nav.mentors': 'Mentors',
        'nav.contact': 'Contact Us',
        'nav.faq': 'FAQ',

        'solutions.platform': 'Platform',
        'solutions.advisor': 'Career Advisor',

        'hero.span': 'at global startups',
        'hero.title': 'Land remote internships',
        'hero.subtitle':'We prepare you with the best resources in the industry to accelerate your break into the startup world.',

        'button.hero.cta':'Sign Up',
        'button.information': 'More information',
        'title.resources': 'Free resources to keep learning',

        'title.reviews': 'Our Mission',

        'career.title': 'High-demand roles in startups',
        'career.subtitle': 'Get ready to work as',

    

        'steps.title': 'How it works?',
        'steps.first.step': 'Create an account',
        'steps.second.step': 'Discover your dream internship',
        'steps.third.step': 'Apply or ask for a consultation',
        'steps.first.detail': 'It is 100% free, just enter your basic information.',
        'steps.second.detail': 'Find or receive new internship offers according to your professional profile.',
        'steps.third.detail': 'The Balancix team can advise you on how to increase your chances of success.',

        // Pilars
        'pillars.first.title': 'Holistic Skill Development',
        'pillars.first.description': 'Comprehensive training in both technical and soft skills.',

        'pillars.second.title': 'Mastering Industry Tools',
        'pillars.second.description': 'Learn to use the most in-demand tools in your field.',

        'pillars.third.title': 'Industry Insights',
        'pillars.third.description': 'Get mentorship from professionals who already know your target industry.',

        'pillars.four.title': 'Interview Preparation',
        'pillars.four.description': 'Learn strategies to stand out in startup interviews.',

        'pillars.fifth.title': 'Startup Connections',
        'pillars.fifth.description': 'Get access to top startups across LatAm, the U.S., Europe, and beyond.',

        'pillars.sixth.title': 'Ongoing Support',
        'pillars.sixth.description': 'We will be by your side to answer questions and support you throughout the entire process.',

        'cta.main': 'The best time to work for a startup, is TODAY!',
        'cta.description': 'Be part of our community of students preparing to join the most disruptive startups in the world.',

        
        'mission.phrase': 'Generate global opportunities in startups so that students can access better quality jobs and be part of innovative solutions.',

        'advisor.title': 'Career Advisor Service',

        'toggle.student': 'For students',
        'toggle.company': 'For companies',

        'forcompanies.title': 'Accelerate your growth with flexible,',
        'forcompanies.span': 'startup-savvy interns.',

        'forcompanies.subtitle': 'Save hundreds of dollars. Start you internship program now!',
        'forcompanies.description': 'The Balancix platform helps companies discover and hire interns specialized in business areas, with the flexibility to work hourly, part-time, or full-time.',

        //FAQ's
        'faq.heading': 'Frequently questions',
        'faq.subheading': 'Get answers to your questions about how Balancix works and learn more about our services.',

        'faq.first.question': 'What makes Balancix different from other job platforms like FirstJob?',
        'faq.first.response': 'Balancix stands out by offering internship opportunities at a global level, specifically in startups from different countries. You do not have to worry about university paperwork, requirements, or how you will get paid. Plus, you have the option to get guidance from our team of mentors.',
        'faq.second.question': 'Do these internships come with a certificate that is valid for my university?',
        'faq.second.response': 'Yes! That is one of the biggest advantages of using the Balancix platform. You will gain real internship experience, earn in USD, and receive an official certificate that meets university requirements.',
        'faq.third.question': 'What types of profiles and roles are accepted on the platform?',
        'faq.third.response': 'At Balancix, we prioritize roles that are currently trending in the startup world, such as Growth, Customer Success Specialist, Brand & Community, Business Development, Product Marketing, Legal & Compliance, Talent Acquisition, Financial Analyst, Product Management, and other business-related positions.',
        'faq.fourth.question': 'How can I post internship opportunities as a founder or recruiter?',
        'faq.fourth.response': 'At the moment, you can reach out directly via email at info@balancix-academy.com, and one of our members will personally assist you with your request.'
    }
};


