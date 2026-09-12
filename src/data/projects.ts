export interface Project{title:string;description:string;year:string;technologies:string[];image?:string;cover?:string;link:string}
export const initialProjects:Project[]=[
{title:"E-commerceStore",description:"Bunniwinkle e-commerce store built with PHP, MySQL, HTML, CSS, and JavaScript",year:"2023",technologies:["PHP","MySQL","HTML/CSS"],image:"https://raw.githubusercontent.com/ArinGitPort/E-commerceStore/main/bunnscreenshot.png",link:"https://github.com/ArinGitPort/E-commerceStore"},
{title:"MacroTracker",description:"App for tracking macros (protein, carbs, fats) and calorie intake, built with Kotlin and Firebase",year:"2024",technologies:["Kotlin","Firebase"],cover:"#1e293b",link:"https://github.com/ArinGitPort/MacroTracker"},
{title:"Startopology",description:"Network topology simulation and analysis project",year:"2023",technologies:["Next.js","TypeScript"],cover:"#0f172a",link:"https://github.com/ArinGitPort/Startopology"}]
