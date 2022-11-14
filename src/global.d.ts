declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

interface Project {
  name: string;
  description: string;
  ghLink: string
}

type SectionName = 'about' | 'skills' | 'projects' | 'contact';
