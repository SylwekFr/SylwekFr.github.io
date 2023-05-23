export type Skill = {
  abbreviation: string;
  level: string;
  logo: string;
  name: string;
};

export type SkillContainer = {
  data: Skill[];
  icon: JSX.Element;
  name: string;
};


