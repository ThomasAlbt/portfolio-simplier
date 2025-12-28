import { Layout, Database, Lock, Code, FileCode, Server, Globe, Cpu, Layers, GitBranch, Shield, Zap, Cloud, Palette, Terminal } from 'lucide-react';

export const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: Code },
      { name: "JavaScript", icon: FileCode },
      { name: "TailwindCSS", icon: Palette },
      { name: "Framer Motion", icon: Zap },
      { name: "HTML5/CSS3", icon: Globe }
    ]
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "PHP 8", icon: Server },
      { name: "MySQL", icon: Database },
      { name: "Supabase", icon: Database },
      { name: "REST APIs", icon: Globe },
      { name: "Node.js Basics", icon: Cpu },
      { name: "MVC Architecture", icon: Layers }
    ]
  },
  {
    title: "Tools & Security",
    icon: Lock,
    skills: [
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Web Security", icon: Shield },
      { name: "Vite", icon: Zap },
      { name: "Netlify", icon: Cloud }
    ]
  }
];
