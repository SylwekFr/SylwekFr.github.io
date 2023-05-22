import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AlbumIcon from '@mui/icons-material/Album';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import { Skill, SkillContainr } from '../../types';

const compliance: Skill[] = [
  {
    abbreviation: 'FDA',
    level: 'Practical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C510BAQG-r6vVscIc1g/company-logo_200_200/0/1519855864399?e=1643846400&v=beta&t=PH6fmF7rbF2RVJ-sgTBAqn6VD94cin7qUJCiReHmpmg',
    name: 'FDA',
  },
  {
    abbreviation: 'GR',
    level: 'Practical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGttZ2w5g0VQQ/company-logo_200_200/0/1626209699012?e=1643846400&v=beta&t=3nMGi7USx-wHOr0f74vWGpWT4XWRnyXi7xaSjyuleNo',
    name: 'GDPR',
  },
  {
    abbreviation: 'I9',
    level: 'Practical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k',
    name: 'ISO 9001',
  },
  {
    abbreviation: 'I13',
    level: 'Practical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k',
    name: 'ISO 13485',
  },
  {
    abbreviation: 'I27',
    level: 'Theoritical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k',
    name: 'ISO 27001',
  },
  {
    abbreviation: 'I14',
    level: 'Theoritical knowledge',
    logo: 'https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k',
    name: 'ISO 140001',
  },
];

const databases: Skill[] = [
  {
    abbreviation: 'SQL',
    level: 'Junior',
    logo: '',
    name: 'SQL & PL/SQL',
  },
  {
    abbreviation: 'MDB',
    level: 'Junior',
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/0/1635171226731?e=1643846400&v=beta&t=WJwsh8gEpFF6b5otTKJgBDJ5Sl4fQgKaQK9Mj5IBn6k',
    name: 'MongoDB',
  },
];

const frameworks: Skill[] = [
  {
    abbreviation: 'S5',
    level: 'Advanced',
    logo: 'https://sapui5.hana.ondemand.com/resources/sap/ui/documentation/sdk/images/logo_ui5.png',
    name: 'SAPUI5',
  },
  {
    abbreviation: 'BS',
    level: 'Advanced',
    logo: 'https://avatars.githubusercontent.com/u/2918581?s=280&v=4',
    name: 'Bootstrap',
  },
  {
    abbreviation: 'JQ',
    level: 'Regular',
    logo: 'https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png',
    name: 'jQuery',
  },
  {
    abbreviation: 'R',
    level: 'Regular',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
    name: 'React',
  },
  {
    abbreviation: 'EX',
    level: 'Regular',
    logo: '',
    name: 'Express.js',
  },
  {
    abbreviation: 'NJ',
    level: 'Regular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    name: 'Node.js',
  },
  {
    abbreviation: 'RN',
    level: 'Junior',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
    name: 'React Native',
  },
  {
    abbreviation: 'NS',
    level: 'Junior',
    logo: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
    name: 'Nest.js',
  },
  {
    abbreviation: 'ET',
    level: 'Junior',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAnFBMVEUrLjr///+j8P+k8v+h7fwlIi+f6vkpKjal9P8mKTYnJjMhGigAABrNzc8RFiciHCoeEiLGxsj29vZcXWSW3Orr6+y0tbehoqWHiI1xc3hLTFU4OkQWGioZHi3Z2duam54ACiCRkZV8fYIAAAhCVmFQbXgYABZdgo5lj5s9TlmDvstql6N7sb4UAAuMzNpJYWx0prM2Qk0RAACq/P+fc944AAALFElEQVRogcVba1fbOBAVejoyYAGC0JgAbeO3Yyf0//+3HTkh2JYcOe2ew3zZLbFzNaPRnZeCri6Vx5un5fOPh1WMEIpXDz+el083jxd/C7oI8u7t4fb25WW9XiwWyAj8d71+ebm9Xb3dXQQ+H/d1uVq8rA9wtizWL4vV8vX/xn19W61vpzBP2Lfr1dtM6Dm493cPftAT9MPd/f+Ce79cXc8DPUJfr5Z+ZB/u/RK9X4LaIb8jL7IH9wndXgh6kFv09A+4r6v3v0I18r4662HncH/9vtTCfVn8/vVXuDfr9T+gGlmvby7Hfb7YnRwqvz9fiPv44PUnGapI+B66fZhgTzfuTeyzsRRJtcs3yge8jt22duI+vfhsHG00AaG19Km8eHGeKBfu8tqnhdwQijmnFDdejdH1ch7uTy8sUpriKlabEgcV8wP/nIM7A1YmAclTgWTaUO5XGF3bbm3hzoBF4Q7TDo5lJCi8Tu3SeIzr31uDW2Mdmv+Rm4Bk6Rzg8R6PcJ/mwKJoh4kwaGFOOCmRf4vR9dM53JuXObBIbAJcp1KEseYYY92G/ndebqZxH+OZ3KhKjMtkk2kaZCWhPPEDL+LHSdyHuZFACI0xwQEldapyCsCR9531wxTu8/wYL0QNFqY6A7dWGQAX0vvO7bMb9+Z9NiyIipOkDTs1VQYr8CuM3m+cuJO58YTIEzerPMDl1vvCYu3C/fUPYR78LEj8p2n9y8Z9/f33sEhITekMS/9+tXBX/5ReMGDs3YzDtBrjPr3/CyxYuqF47yfM96ch7v3kk0JIFoVhGDEpznyvKIDCjMLM8+D9AHfpProyjPZFm+VVVeVZW+yRch9TIVFaYmoUzjLzoFATXna77OO61Q3lZtdoHAQmpSFBgLluWgtYsBDtWyE2BO9Clv3pHmzqLA7dWt/3cJfv9ucsynUAbEgwPQowI2mGXisiFmelJn920bahOmYJPG0oFAe8LFzI78sv3HuHM6uEQw5F9C5Lihg2LAZ7V6VOevoKpuKqgYVhEuwimeEgY0zsuwepgXZFyMXq/oR7Z0ddVQc00LnYhgdaEuBfkqn0Cxa2MG8CTI1meQE8nXJqsjzzYJSmbQ3Goq2dBV3fnXAfLHVZY6LbdpqC2LYtIY/FQVNtUsW6JGCH+VfSI5UsYemZBbx4+MR9tRhSlQQ3Yho1UhkEQhzo3T46FQ2ipSTvbb9QCey1HSHXr0fct/EhgvQFlxPuaD4WmSYUzNvKwUNK4yYdPNhy8LXx99y+HXEtr4rhcTQFGx1QdbUPR2dKgaGHnBVmmNRjS3dkiRxmjiqMp6KLjAwq1hmy7SETeG+4FghU3KJPY2jk4Kqtps1EcAk34HBEZ8z1udhrvBtqJ1uM87EKhrOQbWaxp6RyxhYma1MX5dHEqqB80OnwT5CIlaM/dYZGV4/j3QVzBTYddv7JMSU7ORnvwsqyKtA2tzKRxSPg3o1zZgbpkqP4iJA5j+X+TD0EdRMdbbA51JarvNwB7tvYrRgUAXYoTTPgXZ6cLUpEwUk13IMoJ9R6bv0GuNYpAn35WF/JYGeDOvLlULCbQ3uEFeCO1wobjK6syAsETzbDR8ONNsp6S07VYD3cTVVjPvYr8Ogr9Gjhig3Q6kCxNOOUlHt/4hbuCB0uzqzEgfuIHKUY43hAMsBDUN77mzddPTx2SW0TlinS0JONm8Iae/GOQUicU3khQxPBkLGAN0hmO8XLE1ra6TrLMT1tsEANwXqGjbuHC4yzPq5N2Z2sl+jZxoXjcOI7CYYizTgCTOLuOR4cJDkOUUfcZ/TDka+DofkJFpMZpc+nxPqQzR4F9ttlZrT4gexcw/AOOTC0QBpK3I/ZsAg1gwOcaqpdyfTiATnrk7Ch/BN257DTYXWOXl3U9O0KDERyl0MuVih2fSWko4bwwgaT3QRZyKhNCuuzsOzjKpM/OMWJatZd0oxBLCH1xPmJWg0RsRxrDHH+i7DAmUk27yB8SSHVDrIs5mYLUVDKOSfj9qShxU9cWRDazGgxjb4ZSsvpLEuVBpbzYJzX9HBNE3MzeQCnLA1ZB+X7qdc+cAfL8WgfVE0+ccFcE2lLhzpVb0cNPdM6+CA+3AjMNdkkBn92nV9kUujAuPJULDCNWCMkm7Cz3BBOJutgOL8uvjr4jf5A4X7CUFBmG2ArxgHuwZ8h/gXTmwt85eBn1J0HspGq/DN1fKOEBwEUfMJ674DLMp1NhzDgZ0c86ojShOD0DG8w0WaFFZPViTfkmfLKxCNH/O26JBzqGgE0PwkMOZe9faxxxp+xQPx1tX4hgz7AyeIcsEuacWLnxr1x5FeHZPsQrZkBdiQqUxLrSWbtC+RXdj7ZRe9PLLaHkHSmJrXeHCfQblxX/myiNT4VKibyY43mJRyQ5zjj/Ei6/NmqF4yZe+FLhKbn4J/Idc+O8zq3dPWCVR9B2Bzmsds64EE+w007S82Y63T1kVUPQt5Oxnk7FL1zxiZmsDTDrbp60NpgU4eOKA7qFEhmzxdl3QLLcZ3ihF056/2uDh1tEotLqLhr6VFZWHWZKzQc6/1xf8PUg8l+1EkQYcYx0Yk6W4eaY9RbmlDxpoitV479jbGhVWVCTTOm9bBooEwqpyKUEai7++4s41pzruv90Eqf/ZxR/0pVBDTDUO2Ojo5QoDLmFZokBih2e1WJ3JthGshoyHPqXw0MzbI/lO+yitMgHwOEqMSmmxNObHM6KDohvyJN1s3TBjY69esG/cmQQ8qupBLwlm3Sbdv1zJKtkxxMlXIyEsshv9oytoXMpc+dX/3Jfj8WKslDzsvaIHBQntxm3HRqs61tbRPGvvIe1lDdLQKCaj+d7fVje/1nM0k+vBpR7KR4pnJAJjy3mv7hoOiEUvAwYTF//vqifv+5129nWRB07woU4MEGyxNKJHMdQLVQt2oQqFJNekFffpaGZkr9pW+/396bL4h9gLtKDNw66HdXRNLr6EYyAwLDVFcbFX2tp9K9zBdKHR4zE9A4LXsK9OcLPc6CUhAbE2b0uD3H1bcB7S8jkknJgbV5U22QOmY8rBcupSH1pgjh2NNeVTGcpwwUphTrRsOB6ZO02PBRwiNVkYPPY6hmyqyImeoGR8JMBFikUFtzDnvRNEAGfe4czo968zJmYoA57cPpubKvTIhQbapu0k6Ibuoq2ez3cRzvi6QqzSiGNtzMPGgv8xnPy/pkKVlWNmU+CnvgcDizTq0M0yIvuRnxYAwJNaackiAw/6Ll5qPdNc2u/fI1ez44mIcylTrmXdpUELYIlqZFtmu4gTP6gfaBrjOUSrOstN+TccxDvfNfIF9ne/iAHaYfrEiyHCRLinDrnNO55r8z5t3crfBBJHiUlMzI1B0l97zbO98Pq2C6Mo0S/7x7Yr7vvc8gQOGJL2dJ8Mc3/p26z+C9vwEuPTHUNg0nem7qi87d3/DeV4EzTJzmDGviCl59OXdfxXc/R8TY2fMIIW32lYHn7ud47yNFQB6NZc8ooZSfR/XcR/Lev0prQprROQlbYPT2vJV996+8983SEhL4uB+Xt5BuB2d6Ch3szzHMxffrVBlQmn0cN1mEYQ0pgD3l9cBefp9QqB0AQYBPVai2+4pbkWsO7N/cnwwTMxHlTb2DtBybEdqFezuF67svylDV3XTook+TnB+0XHBf1H8/VsVZrUEguHpGaBfdj51xH1gqhWKZ+gYeF94Hvvqu+8/G1uxb7ntffdf99qtvu89/9V2/X7j6tt9rXH3X71M65G/5PU4n3/L7oyP0d/ze6iDf8vuyE/j/8nu6/wBF9OtEDGVgyAAAAABJRU5ErkJggg==',
    name: 'Electron.js',
  },
];

const industry: Skill[] = [
  {
    abbreviation: 'WI',
    level: 'Regular',
    logo: 'https://d17kynu4zpq5hy.cloudfront.net/igi/dozuki/pV1kjrGKvn4OLci6.large',
    name: 'Work instructions edition',
  },
  {
    abbreviation: 'R&B',
    level: 'Regular',
    logo: 'https://d17kynu4zpq5hy.cloudfront.net/igi/dozuki/pV1kjrGKvn4OLci6.large',
    name: 'Routing & B.O.M.',
  },
  {
    abbreviation: 'WD',
    level: 'Regular',
    logo: 'https://vintank.com/wp-content/uploads/2020/09/Wiring.jpg',
    name: 'Wiring diagram',
  },
  {
    abbreviation: 'CAD',
    level: 'Junior',
    logo: 'https://cdn3.geckoandfly.com/wp-content/uploads/2018/08/530-autocad-cad-alternatives.jpg',
    name: 'Computer-aided design',
  },
  {
    abbreviation: 'TD',
    level: 'Junior',
    logo: 'https://www.theengineeringdesign.com/wp-content/uploads/2016/05/2D-Technical-Drawings.jpg',
    name: 'Technical drawing',
  },
  {
    abbreviation: 'FCD',
    level: 'Junior',
    logo: 'http://www.hydraulicstatic.com/wp-content/industrial/2018/06/fig-1-94.jpg',
    name: 'Fluid circuit diagram',
  },
  {
    abbreviation: 'LL',
    level: 'Junior',
    logo: 'https://i.pinimg.com/originals/3a/9d/93/3a9d937977a19730b54355d9f2b3fe96.png',
    name: 'Ladder Logic',
  },
  {
    abbreviation: 'PLC',
    level: 'Junior',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg/220px-Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg',
    name: 'PLC wiring',
  },
];

const languages: Skill[] = [
  {
    abbreviation: 'FR',
    level: 'Native speaker',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png',
    name: 'French',
  },
  {
    abbreviation: 'EN',
    level: 'B1-B2',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
    name: 'English',
  },
  {
    abbreviation: 'PL',
    level: 'A2',
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    name: 'Polish',
  },
];

const management: Skill[] = [
  {
    abbreviation: '5S',
    level: 'Advanced',
    logo: 'https://www.5stoday.com/content/images/custom/5S-wheel-diagram.jpg?v=2',
    name: '5S & Visual Management',
  },
  {
    abbreviation: 'AGL',
    level: 'Regular',
    logo: 'https://miro.medium.com/max/1200/1*xZS2H0pUvQv_i4ePzuGFKA.jpeg',
    name: 'Agile manifesto',
  },
  {
    abbreviation: 'SM',
    level: 'Regular',
    logo: 'https://www.visual-paradigm.com/servlet/editor-content/scrum/what-are-scrum-time-boxed-events/sites/7/2018/12/five-scrum-events.png',
    name: 'Scrum',
  },
  {
    abbreviation: 'LN',
    level: 'Regular',
    logo: 'https://leantrix.com/wp-content/uploads/2016/03/Lean.jpg',
    name: 'Lean',
  },
  {
    abbreviation: 'KZ',
    level: 'Regular',
    logo: 'https://www.leansixsigmadefinition.com/wp-content/uploads/2015/01/kaizen_change_good-e1578181312802.jpg',
    name: 'Kaizen',
  },
  {
    abbreviation: 'XP',
    level: 'Junior',
    logo: 'https://www.researchgate.net/publication/339915012/figure/fig1/AS:868678786621441@1584120570990/Extreme-Programming-Cycle.jpg',
    name: 'Extreme Programming',
  },
  {
    abbreviation: 'DO',
    level: 'Junior',
    logo: 'https://marstechnology.net/wp-content/uploads/2019/01/3.jpg',
    name: 'DevOps',
  },
  {
    abbreviation: 'QMS',
    level: 'Junior',
    logo: 'https://kvalito.ch/wp-content/uploads/2015/04/shutterstock_506837257.jpg',
    name: 'Quality Management System',
  },
];

const programmingLanguages: Skill[] = [
  {
    abbreviation: 'JS',
    level: 'Regular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    name: 'JavaScript',
  },
  {
    abbreviation: 'TS',
    level: 'Regular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    name: 'TypeScript',
  },
  {
    abbreviation: 'PY',
    level: 'Junior',
    logo: 'https://www.inovex.de/wp-content/uploads/2021/04/training-python.png',
    name: 'Python',
  },
  {
    abbreviation: 'PHP',
    level: 'Junior',
    logo: 'https://jaki-jezyk-programowania.pl/img/technologies/php.png',
    name: 'PHP',
  },
  {
    abbreviation: 'SH',
    level: 'Junior',
    logo: 'https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/01/bash-logo.jpg?fit=800%2C450&ssl=1',
    name: 'Bash',
  },
  {
    abbreviation: 'AP',
    level: 'Junior',
    logo: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/98774093/original/cc10d75ab33a918b67a8024d8d01509d254e406c/fix-your-bugs-in-sap-abap.jpg',
    name: 'ABAP',
  },
  {
    abbreviation: 'VBA',
    level: 'Junior',
    logo: 'https://www.bookcity.pl/bigcovers/6/5/0/0/9780470046500.jpg',
    name: 'VBA',
  },
  {
    abbreviation: 'C',
    level: 'Notion',
    logo: 'https://fs.siteor.com/javatech/files/layout/assan/vavatech/img/content/jezyk_C_bez_tla.png?1614248774',
    name: 'C, C++ & C#',
  },
  {
    abbreviation: 'RT',
    level: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png',
    name: 'Rust',
  },
];

const security: Skill[] = [
  {
    abbreviation: 'ZT',
    level: 'Junior',
    logo: 'https://colortokens.com/wp-content/uploads/BusinessDriversZeroTrustSecurity.png',
    name: 'Zero trust',
  },
  {
    abbreviation: 'PG',
    level: 'Notion',
    logo: 'https://academy.avast.com/hubfs/lp/academy/phishing.png',
    name: 'Phishing',
  },
  {
    abbreviation: 'AAD',
    level: 'Notion',
    logo: 'http://www.4me.com/wp-content/uploads/2018/08/4me-icon-azure-active-directory.png',
    name: 'Azure AD',
  },
];

const softwares: Skill[] = [
  {
    abbreviation: 'MS',
    level: 'Advanced',
    logo: 'https://store-images.s-microsoft.com/image/apps.22477.9007199267161390.e6424e19-5ac0-4841-8393-87f5c9419809.53442bcc-001d-41ae-a326-a3add20df4ba?mode=scale&q=90&h=300&w=300',
    name: 'Microsoft Office',
  },
  {
    abbreviation: 'GW',
    level: 'Regular',
    logo: 'https://cruzersoftech.com/wp-content/uploads/2021/06/xl-2020-google-workspace-1.jpg',
    name: 'Google Workspace',
  },
  {
    abbreviation: 'ERP',
    level: 'Regular',
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFozT12yig4lQ/company-logo_200_200/0/1633952442102?e=1643846400&v=beta&t=S36WG52cLCLn1d6kWGBdOOa8goPrDrAzFuekVZqO3sw',
    name: 'Sylob 7',
  },
  {
    abbreviation: 'SW',
    level: 'Regular',
    logo: 'https://www.sparxeng.com/wp-content/uploads/2014/08/sw-1200x565.jpg',
    name: 'SolidWorks',
  },
  {
    abbreviation: 'CT',
    level: 'Junior',
    logo: 'https://i.pinimg.com/originals/4b/24/73/4b2473080eec80c5f8452cce1e614ae1.jpg',
    name: 'Catia V5',
  },
  {
    abbreviation: 'SF',
    level: 'Junior',
    logo: 'https://www.meplsolution.com/wp-content/uploads/2020/02/Salesforce-logo-seeklogo.net_-1.png',
    name: 'SalesForce',
  },
  {
    abbreviation: 'Ps',
    level: 'Junior',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
    name: 'Adobe Photoshop',
  },
  {
    abbreviation: 'Pr',
    level: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png',
    name: 'Adobe Premiere Pro',
  },
  {
    abbreviation: 'ST',
    level: 'Notion',
    logo: 'https://cdn-icons-png.flaticon.com/512/87/87578.png',
    name: 'Statistica',
  },
  {
    abbreviation: 'WK',
    level: 'Notion',
    logo: 'https://miro.medium.com/max/1200/1*N8Uwuj4le6YDIOrlrDhCtg.png',
    name: 'Weka',
  },
];

export const skillList: SkillContainr[] = [
  {
    name: 'Languages',
    icon: <LanguageIcon />,
    data: languages,
  },
  {
    name: 'Programming languages',
    icon: <CodeIcon />,
    data: programmingLanguages,
  },
  {
    name: 'Frameworks',
    icon: <AccountTreeIcon />,
    data: frameworks,
  },
  {
    name: 'Databases',
    icon: <StorageIcon />,
    data: databases,
  },
  {
    name: 'Security',
    icon: <SecurityIcon />,
    data: security,
  },
  {
    name: 'Compliance',
    icon: <AssignmentTurnedInIcon />,
    data: compliance,
  },
  {
    name: 'Management',
    icon: <ManageAccountsIcon />,
    data: management,
  },
  {
    name: 'Industry',
    icon: <PrecisionManufacturingIcon />,
    data: industry,
  },
  {
    name: 'Softwares',
    icon: <AlbumIcon />,
    data: softwares,
  },
];
