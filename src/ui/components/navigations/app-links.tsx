import { AppLink } from "@/types/app-links";
import { RiInstagramFill, RiLinkedinFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLink[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Projects",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Coders Mokeys",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@remotemokeys",
        type: "internal",
    },
]
const footerUsersLinks: AppLink[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal",
    },
]
const footerInformationsLinks: AppLink[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    },
]
export const footerSociauxLinks: AppLink[] = [
    {
        label: "Youtube",
        baseUrl: "https://www.youtube.com/watch?v=2ehqBu_dDsk&list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "LinKedin",
        baseUrl: "/#",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/fastbooster.afrq/",
        type: "external",
        icon: RiInstagramFill
    },
    {
        label: "X",
        baseUrl: "https://x.com/TedaP38191",
        type: "external",
        icon: RiTwitterXFill
    },
]

export const footerLinsk = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label: "Informations",
        links: footerInformationsLinks,
    }, 
    {
        label: "Reseaux Sociaux",
        links: footerSociauxLinks,
    },
];