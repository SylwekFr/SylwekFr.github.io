import { StringLiteralType } from "typescript"

export type Certification = {
    certificationCompany: string;
    logo: string;
    name: string;
    obtentionDate: string;
}

export type Experience = {
    company: string;
    companyLogo: string;
    context: string;
    position: string;
    tasks: string[];
    tags: string[];
    timeRanges: string;
}

export type Hobby = {
    abbreviation: string;
    federationLogo: string;
    name: string;
    picture: string;
    sumUp: string;
}

export type Skill = {
    abbreviation: string;
    level: string;
    logo: string;
    name: string;
}

export type SkillContainr = {
    data: Skill[];
    icon: JSX.Element;
    name: string;
}

export type Study = {
    date: string;
    degree: String;
    school: string;
    schoolLogo: string;
}

export type TabletopGame = {
    author: string;
    avatar?: string;
    date: number;
    detail: string;
    picture: string;
    sumup: string;
    title: string;
}