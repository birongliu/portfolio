export interface TechStack {
  name: string;
  image: string;
}

export interface ProjectAction {
  name: "github" | "website";
  url: string;
  src: string;
}

export interface GridItem {
  photo: string;
  category: string;
  title: string;
  description: string;
  tech: TechStack[];
  action: ProjectAction[];
}



export interface NavItemProps {
  name: string;
  link: string;
  icon?: string;
}

export interface FloatingNavProps {
  navItems: NavItemProps[];
  className?: string;
}