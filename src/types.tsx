export type Hobby = {
  abbreviation: string;
  federationLogo: string;
  name: string;
  picture: string;
  sumUp: string;
};

export type Skill = {
  abbreviation: string;
  level: string;
  logo: string;
  name: string;
};

export type SkillContainr = {
  data: Skill[];
  icon: JSX.Element;
  name: string;
};

export type Study = {
  date: string;
  degree: string;
  school: string;
  schoolLogo: string;
};

export type TabletopGame = {
  author: string;
  avatar?: string;
  date: number;
  detail: string;
  picture: string;
  sumup: string;
  title: string;
};
