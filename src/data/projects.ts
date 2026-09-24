export interface Project{title:string;description:string;year:string;technologies:string[];image?:string;cover?:string;link:string}
export const initialProjects:Project[]=[
{title:"E-commerceStore",description:"Bunniwinkle e-commerce store built with PHP, MySQL, HTML, CSS, and JavaScript",year:"2023",technologies:["PHP","MySQL","HTML/CSS"],image:"https://raw.githubusercontent.com/ArinGitPort/E-commerceStore/main/bunnscreenshot.png",link:"https://github.com/ArinGitPort/E-commerceStore"},
{title:"NetBite",description:"Network diagnostics and packet analysis tool focused on practical troubleshooting workflows.",year:"2025",technologies:["TypeScript","Node.js","Linux"],cover:"#0f172a",link:"https://github.com/ArinGitPort/NetBite"},
{title:"ReClaim",description:"Reclamation and resource tracking project for managing recovery workflows and data visibility.",year:"2025",technologies:["React","TypeScript","Supabase"],cover:"#1e293b",link:"https://github.com/ArinGitPort/ReClaim"}]
