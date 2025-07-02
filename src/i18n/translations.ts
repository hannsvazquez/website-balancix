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

        'cta.main': '¿Aún no sabes en qué posición especializarte?',
        'cta.description': 'No te preocupes, puedes agendar una llamada gratuita con nuestro equipo para brindarte una asesoría de los roles que más se ajustan a tu perfil y preferencias.',

        // Mission section
        'mission.phrase': 'Generar oportunidades globales en startups para que los estudiantes puedan acceder a empleos de mejor calidad y puedan ser parte de soluciones innovadoras',

        'advisor.title': 'Asesorías'
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


        'cta.main': 'Still not sure where you can start?',
        'cta.description': 'Not to worry. You can schedule a free call with our team to get advice on the roles that best suit your profile and preferences.',

        
        'mission.phrase': 'Generate global opportunities in startups so that students can access better quality jobs and be part of innovative solutions.',

        'advisor.title': 'Career Advisor Service'
    }
};