(this["webpackJsonpsylwekfr.github.io"]=this["webpackJsonpsylwekfr.github.io"]||[]).push([[0],{182:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(52),c=a.n(o),r=(a(182),a(13)),l=a(259),s=a(143),b=a.n(s),j=a(142),m=a.n(j),d=a(140),g=a.n(d),u=a(275),p=a(277),h=a(102),x=a(280),v=a(278),O=a(265),f=a(253),w=a(254),y=a(261),A=a(268),C=a(263),k=a(28),I=a(274),P=a(1);function B(e){var t=e.title,a=Object(n.useState)(null),i=Object(r.a)(a,2),o=i[0],c=i[1],l=Object(n.useContext)(qe),s=Object(k.a)(),j=Object(I.a)("home"),d=j.t,B=j.i18n,M=Object(n.useState)(B.language),z=Object(r.a)(M,2),S=z[0],G=z[1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(u.a,{position:"sticky",sx:{mb:3},children:Object(P.jsxs)(p.a,{children:[Object(P.jsx)(h.a,{component:"h1",variant:"h4",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:t}),Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(P.jsx)(g.a,{})}),Object(P.jsxs)(y.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:function(){c(null)},children:[Object(P.jsxs)(x.a,{fullWidth:!0,children:[Object(P.jsx)(O.a,{variant:"standard",htmlFor:"language-selector",children:d("langue")}),Object(P.jsxs)(C.a,{onChange:function(e){B.changeLanguage(e.target.value),G(e.target.value)},inputProps:{name:"language",id:"language-selector"},value:S,children:[Object(P.jsx)("option",{value:"en",children:"English"}),Object(P.jsx)("option",{value:"fr",children:"Fran\xe7ais"})]})]}),Object(P.jsxs)(A.a,{onClick:function(){c(null),l.toggleColorMode()},children:[Object(P.jsx)(f.a,{children:"dark"===s.palette.mode?Object(P.jsx)(m.a,{}):Object(P.jsx)(b.a,{})}),Object(P.jsxs)(w.a,{children:[s.palette.mode," mode"]})]})]})]})]})})})}var M=a(269),z=a(281),S=a(282),G=a(283),F=a(94),L=a(284),R=a(270);function J(){var e=Object(I.a)("home").t,t=e("categories",{returnObjects:!0});return Object(P.jsx)(M.a,{container:!0,justifyContent:"space-around",alignContent:"center",spacing:3,children:t.map((function(t){var a=t.name,n=t.sumup,i=t.picture,o=t.path;return Object(P.jsx)(M.a,{item:!0,justifyItems:"center",sm:12,md:6,lg:3,children:Object(P.jsxs)(z.a,{sx:{maxWidth:345,m:"auto"},children:[Object(P.jsx)(S.a,{component:"img",height:"240",image:i,alt:a}),Object(P.jsxs)(G.a,{children:[Object(P.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(P.jsx)(h.a,{variant:"body2",color:"text.secondary",children:n})]}),Object(P.jsx)(L.a,{children:Object(P.jsx)(F.b,{to:o,children:Object(P.jsx)(R.a,{size:"small",children:e("more")})})})]})})}))})}var T=a(23),E=a(96),Y=a(95),W=a.n(Y),D=a(271),H=a(285),N=a(286),_=a(4),Z=a(260),Q=["expand"],V=Object(_.a)((function(e){e.expand;var t=Object(E.a)(e,Q);return Object(P.jsx)(v.a,Object(T.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),U=function(e){var t=i.a.useState(!1),a=Object(r.a)(t,2),n=a[0],o=a[1],c=e.author,l=e.avatar,s=e.date,b=e.detail,j=e.picture,m=e.pictureHeight,d=e.sumup,g=e.title;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(z.a,{sx:{maxWidth:345,m:"auto"},children:[Object(P.jsx)(H.a,{avatar:Object(P.jsx)(Z.a,{title:c,children:Object(P.jsx)(D.a,{"aria-label":"author",alt:c,src:l})}),title:g,subheader:s}),Object(P.jsx)(S.a,{component:"img",loading:"lazy",height:m,image:j,alt:g}),Object(P.jsx)(G.a,{children:Object(P.jsx)(h.a,{variant:"body2",color:"text.secondary",children:d})}),Object(P.jsx)(L.a,{disableSpacing:!0,children:Object(P.jsx)(V,{expand:n,onClick:function(){o(!n)},"aria-expanded":n,"aria-label":"show more",children:Object(P.jsx)(W.a,{})})}),Object(P.jsx)(N.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(P.jsx)(G.a,{children:Object(P.jsx)(h.a,{paragraph:!0,children:b})})})]})})},X=a(67);function K(){var e=Object(I.a)("books").t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(X.a,{children:[Object(P.jsx)("title",{children:"SylwekFr - Books"}),Object(P.jsx)("meta",{name:"description",content:"Welcome to the book's part. This part contains books I recommend reading. If you read those books, I hope you will enjoy them as much as I did. Wishing you some lovely reading time."})]}),Object(P.jsx)(M.a,{container:!0,justifyContent:"space-around",alignContent:"center",spacing:3,children:e("books",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,justifyItems:"center",sm:12,md:6,lg:3,children:Object(P.jsx)(U,Object(T.a)(Object(T.a)({},e),{},{pictureHeight:500}))})}))})]})}function q(){var e=Object(I.a)("tabletop-games").t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(X.a,{children:[Object(P.jsx)("title",{children:"SylwekFr - Tabletop Games"}),Object(P.jsx)("meta",{name:"description",content:"Some tabletop games I enjoy to play with friend and I recommend to have a fun time"})]}),Object(P.jsx)(M.a,{container:!0,justifyContent:"space-around",alignContent:"center",spacing:3,children:e("tabletopGames",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,justifyItems:"center",sm:12,md:6,lg:3,children:Object(P.jsx)(U,Object(T.a)({pictureHeight:300},e))})}))})]})}var $=a(258),ee=a(262),te=a(264),ae=a(288),ne=a(255),ie=a(276),oe=a(289),ce=function(e){var t=e.certificationCompany,a=e.logo,n=e.name,i=e.obtentionDate;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(z.a,{sx:{maxWidth:345,m:"auto"},children:Object(P.jsx)(H.a,{avatar:Object(P.jsx)(Z.a,{title:t,children:Object(P.jsx)(D.a,{"aria-label":"school",alt:t,src:a})}),title:n,subheader:"".concat(i," - ").concat(t)})})})},re=a(272),le=["expand"],se=Object(_.a)((function(e){e.expand;var t=Object(E.a)(e,le);return Object(P.jsx)(v.a,Object(T.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),be=function(e){var t=i.a.useState(!1),a=Object(r.a)(t,2),n=a[0],o=a[1],c=e.company,l=e.companyLogo,s=e.context,b=e.position,j=e.tasks,m=e.tags,d=e.timeRanges;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(z.a,{sx:{maxWidth:345,m:"auto"},children:[Object(P.jsx)(H.a,{avatar:Object(P.jsx)(Z.a,{title:c,children:Object(P.jsx)(D.a,{"aria-label":"author",alt:c,src:l})}),title:b,subheader:d}),Object(P.jsx)(G.a,{children:Object(P.jsx)(h.a,{variant:"body2",color:"text.secondary",children:s})}),Object(P.jsx)(L.a,{disableSpacing:!0,children:Object(P.jsx)(se,{expand:n,onClick:function(){o(!n)},"aria-expanded":n,"aria-label":"show more",children:Object(P.jsx)(W.a,{})})}),Object(P.jsx)(N.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(P.jsx)(G.a,{children:Object(P.jsx)(h.a,{paragraph:!0,children:Object(P.jsx)("ul",{children:j.map((function(e){return Object(P.jsx)("li",{children:e})}))})})})}),Object(P.jsx)(G.a,{children:m.map((function(e){return Object(P.jsx)(re.a,{label:e,size:"small"})}))})]})})},je=function(e){var t=e.abbreviation,a=e.federationLogo,n=e.name,i=e.picture,o=e.sumUp;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(z.a,{sx:{maxWidth:345,m:"auto"},children:[Object(P.jsx)(H.a,{avatar:Object(P.jsx)(D.a,{"aria-label":"name",src:a,children:t}),title:n}),Object(P.jsx)(S.a,{component:"img",height:"200",image:i,alt:n}),Object(P.jsx)(G.a,{children:Object(P.jsx)(h.a,{variant:"body2",color:"text.secondary",children:o})})]})})},me=a(256),de=a(257),ge=a(279),ue=a(266),pe=a(287),he=function(e){var t=e.abbreviation,a=e.level,n=e.logo,i=e.name;return Object(P.jsxs)(ue.a,{children:[Object(P.jsx)(pe.a,{children:Object(P.jsx)(D.a,{"aria-label":"author",alt:i,src:n,children:t})}),Object(P.jsx)(w.a,{primary:i,secondary:a})]})},xe=function(e){var t=e.data,a=e.icon,i=e.name,o=Object(n.useState)(!1),c=Object(r.a)(o,2),l=c[0],s=c[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ne.a,{onClick:function(){s(!l)},children:[Object(P.jsx)(f.a,{children:a}),Object(P.jsx)(w.a,{primary:i}),l?Object(P.jsx)(me.a,{}):Object(P.jsx)(de.a,{})]}),Object(P.jsx)(N.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(P.jsx)(ge.a,{component:"div",disablePadding:!0,children:t.map((function(e){return Object(P.jsx)(he,Object(T.a)({},e))}))})})]})},ve=function(e){var t=e.date,a=e.degree,n=e.school,i=e.schoolLogo;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(z.a,{sx:{maxWidth:345,m:"auto"},children:Object(P.jsx)(H.a,{avatar:Object(P.jsx)(Z.a,{title:n,children:Object(P.jsx)(D.a,{"aria-label":"school",alt:n,src:i})}),title:a,subheader:"".concat(t," - ").concat(n)})})})},Oe=a(147),fe=a.n(Oe),we=a(148),ye=a.n(we),Ae=a(149),Ce=a.n(Ae),ke=[{action:function(){return window.open("tel:+48880108360")},icon:Object(P.jsx)(fe.a,{}),text:"+48 880 108 360"},{action:function(){return window.open("mailto:sylvain.michel@2018.icam.fr")},icon:Object(P.jsx)(ye.a,{}),text:"sylvain.michel@2018.icam.fr"},{action:function(){return window.open("https://www.linkedin.com/in/sylvain-michel-065652119/","_blank")},icon:Object(P.jsx)(Ce.a,{}),text:"Sylvain Michel"}],Ie=a(152),Pe=a.n(Ie),Be=a(158),Me=a.n(Be),ze=a(155),Se=a.n(ze),Ge=a(151),Fe=a.n(Ge),Le=a(150),Re=a.n(Le),Je=a(156),Te=a.n(Je),Ee=a(157),Ye=a.n(Ee),We=a(154),De=a.n(We),He=a(153),Ne=a.n(He),_e=[{name:"Languages",icon:Object(P.jsx)(Re.a,{}),data:[{abbreviation:"FR",level:"Native speaker",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",name:"French"},{abbreviation:"EN",level:"B1-B2",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",name:"English"},{abbreviation:"PL",level:"A2",logo:"https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",name:"Polish"}]},{name:"Programming languages",icon:Object(P.jsx)(Fe.a,{}),data:[{abbreviation:"JS",level:"Regular",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",name:"JavaScript"},{abbreviation:"TS",level:"Regular",logo:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",name:"TypeScript"},{abbreviation:"PY",level:"Junior",logo:"https://www.inovex.de/wp-content/uploads/2021/04/training-python.png",name:"Python"},{abbreviation:"PHP",level:"Junior",logo:"https://jaki-jezyk-programowania.pl/img/technologies/php.png",name:"PHP"},{abbreviation:"SH",level:"Junior",logo:"https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/01/bash-logo.jpg?fit=800%2C450&ssl=1",name:"Bash"},{abbreviation:"AP",level:"Junior",logo:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/98774093/original/cc10d75ab33a918b67a8024d8d01509d254e406c/fix-your-bugs-in-sap-abap.jpg",name:"ABAP"},{abbreviation:"VBA",level:"Junior",logo:"https://www.bookcity.pl/bigcovers/6/5/0/0/9780470046500.jpg",name:"VBA"},{abbreviation:"C",level:"Notion",logo:"https://fs.siteor.com/javatech/files/layout/assan/vavatech/img/content/jezyk_C_bez_tla.png?1614248774",name:"C, C++ & C#"},{abbreviation:"RT",level:"Notion",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",name:"Rust"}]},{name:"Frameworks",icon:Object(P.jsx)(Pe.a,{}),data:[{abbreviation:"S5",level:"Advanced",logo:"https://sapui5.hana.ondemand.com/resources/sap/ui/documentation/sdk/images/logo_ui5.png",name:"SAPUI5"},{abbreviation:"BS",level:"Advanced",logo:"https://avatars.githubusercontent.com/u/2918581?s=280&v=4",name:"Bootstrap"},{abbreviation:"JQ",level:"Regular",logo:"https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",name:"jQuery"},{abbreviation:"R",level:"Regular",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",name:"React"},{abbreviation:"EX",level:"Regular",logo:"",name:"Express.js"},{abbreviation:"NJ",level:"Regular",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",name:"Node.js"},{abbreviation:"RN",level:"Junior",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",name:"React Native"},{abbreviation:"NS",level:"Junior",logo:"https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",name:"Nest.js"},{abbreviation:"ET",level:"Junior",logo:"data:image/png;base64,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",name:"Electron.js"}]},{name:"Databases",icon:Object(P.jsx)(Ne.a,{}),data:[{abbreviation:"SQL",level:"Junior",logo:"",name:"SQL & PL/SQL"},{abbreviation:"MDB",level:"Junior",logo:"https://media-exp1.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/0/1635171226731?e=1643846400&v=beta&t=WJwsh8gEpFF6b5otTKJgBDJ5Sl4fQgKaQK9Mj5IBn6k",name:"MongoDB"}]},{name:"Security",icon:Object(P.jsx)(De.a,{}),data:[{abbreviation:"ZT",level:"Junior",logo:"https://colortokens.com/wp-content/uploads/BusinessDriversZeroTrustSecurity.png",name:"Zero trust"},{abbreviation:"PG",level:"Notion",logo:"https://academy.avast.com/hubfs/lp/academy/phishing.png",name:"Phishing"},{abbreviation:"AAD",level:"Notion",logo:"http://www.4me.com/wp-content/uploads/2018/08/4me-icon-azure-active-directory.png",name:"Azure AD"}]},{name:"Compliance",icon:Object(P.jsx)(Se.a,{}),data:[{abbreviation:"FDA",level:"Practical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C510BAQG-r6vVscIc1g/company-logo_200_200/0/1519855864399?e=1643846400&v=beta&t=PH6fmF7rbF2RVJ-sgTBAqn6VD94cin7qUJCiReHmpmg",name:"FDA"},{abbreviation:"GR",level:"Practical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C560BAQGttZ2w5g0VQQ/company-logo_200_200/0/1626209699012?e=1643846400&v=beta&t=3nMGi7USx-wHOr0f74vWGpWT4XWRnyXi7xaSjyuleNo",name:"GDPR"},{abbreviation:"I9",level:"Practical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k",name:"ISO 9001"},{abbreviation:"I13",level:"Practical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k",name:"ISO 13485"},{abbreviation:"I27",level:"Theoritical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k",name:"ISO 27001"},{abbreviation:"I14",level:"Theoritical knowledge",logo:"https://media-exp1.licdn.com/dms/image/C510BAQHC9es3oxjWKw/company-logo_200_200/0/1519888018997?e=1643846400&v=beta&t=XVgMlYeY4tQG3ulGWzGdJvFTuSlMBMC7Yz-GMde0l2k",name:"ISO 140001"}]},{name:"Management",icon:Object(P.jsx)(Te.a,{}),data:[{abbreviation:"5S",level:"Advanced",logo:"https://www.5stoday.com/content/images/custom/5S-wheel-diagram.jpg?v=2",name:"5S & Visual Management"},{abbreviation:"AGL",level:"Regular",logo:"https://miro.medium.com/max/1200/1*xZS2H0pUvQv_i4ePzuGFKA.jpeg",name:"Agile manifesto"},{abbreviation:"SM",level:"Regular",logo:"https://www.visual-paradigm.com/servlet/editor-content/scrum/what-are-scrum-time-boxed-events/sites/7/2018/12/five-scrum-events.png",name:"Scrum"},{abbreviation:"LN",level:"Regular",logo:"https://leantrix.com/wp-content/uploads/2016/03/Lean.jpg",name:"Lean"},{abbreviation:"KZ",level:"Regular",logo:"https://www.leansixsigmadefinition.com/wp-content/uploads/2015/01/kaizen_change_good-e1578181312802.jpg",name:"Kaizen"},{abbreviation:"XP",level:"Junior",logo:"https://www.researchgate.net/publication/339915012/figure/fig1/AS:868678786621441@1584120570990/Extreme-Programming-Cycle.jpg",name:"Extreme Programming"},{abbreviation:"DO",level:"Junior",logo:"https://marstechnology.net/wp-content/uploads/2019/01/3.jpg",name:"DevOps"},{abbreviation:"QMS",level:"Junior",logo:"https://kvalito.ch/wp-content/uploads/2015/04/shutterstock_506837257.jpg",name:"Quality Management System"}]},{name:"Industry",icon:Object(P.jsx)(Ye.a,{}),data:[{abbreviation:"WI",level:"Regular",logo:"https://d17kynu4zpq5hy.cloudfront.net/igi/dozuki/pV1kjrGKvn4OLci6.large",name:"Work instructions edition"},{abbreviation:"R&B",level:"Regular",logo:"https://d17kynu4zpq5hy.cloudfront.net/igi/dozuki/pV1kjrGKvn4OLci6.large",name:"Routing & B.O.M."},{abbreviation:"WD",level:"Regular",logo:"https://vintank.com/wp-content/uploads/2020/09/Wiring.jpg",name:"Wiring diagram"},{abbreviation:"CAD",level:"Junior",logo:"https://cdn3.geckoandfly.com/wp-content/uploads/2018/08/530-autocad-cad-alternatives.jpg",name:"Computer-aided design"},{abbreviation:"TD",level:"Junior",logo:"https://www.theengineeringdesign.com/wp-content/uploads/2016/05/2D-Technical-Drawings.jpg",name:"Technical drawing"},{abbreviation:"FCD",level:"Junior",logo:"http://www.hydraulicstatic.com/wp-content/industrial/2018/06/fig-1-94.jpg",name:"Fluid circuit diagram"},{abbreviation:"LL",level:"Junior",logo:"https://i.pinimg.com/originals/3a/9d/93/3a9d937977a19730b54355d9f2b3fe96.png",name:"Ladder Logic"},{abbreviation:"PLC",level:"Junior",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg/220px-Automate_industriel_WAGO_pour_un_syst%C3%A8me_de_monitoring_en_industrie_pharmaceutique.jpg",name:"PLC wiring"}]},{name:"Softwares",icon:Object(P.jsx)(Me.a,{}),data:[{abbreviation:"MS",level:"Advanced",logo:"https://store-images.s-microsoft.com/image/apps.22477.9007199267161390.e6424e19-5ac0-4841-8393-87f5c9419809.53442bcc-001d-41ae-a326-a3add20df4ba?mode=scale&q=90&h=300&w=300",name:"Microsoft Office"},{abbreviation:"GW",level:"Regular",logo:"https://cruzersoftech.com/wp-content/uploads/2021/06/xl-2020-google-workspace-1.jpg",name:"Google Workspace"},{abbreviation:"ERP",level:"Regular",logo:"https://media-exp1.licdn.com/dms/image/C4D0BAQFozT12yig4lQ/company-logo_200_200/0/1633952442102?e=1643846400&v=beta&t=S36WG52cLCLn1d6kWGBdOOa8goPrDrAzFuekVZqO3sw",name:"Sylob 7"},{abbreviation:"SW",level:"Regular",logo:"https://www.sparxeng.com/wp-content/uploads/2014/08/sw-1200x565.jpg",name:"SolidWorks"},{abbreviation:"CT",level:"Junior",logo:"https://i.pinimg.com/originals/4b/24/73/4b2473080eec80c5f8452cce1e614ae1.jpg",name:"Catia V5"},{abbreviation:"SF",level:"Junior",logo:"https://www.meplsolution.com/wp-content/uploads/2020/02/Salesforce-logo-seeklogo.net_-1.png",name:"SalesForce"},{abbreviation:"Ps",level:"Junior",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",name:"Adobe Photoshop"},{abbreviation:"Pr",level:"Notion",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",name:"Adobe Premiere Pro"},{abbreviation:"ST",level:"Notion",logo:"https://cdn-icons-png.flaticon.com/512/87/87578.png",name:"Statistica"},{abbreviation:"WK",level:"Notion",logo:"https://miro.medium.com/max/1200/1*N8Uwuj4le6YDIOrlrDhCtg.png",name:"Weka"}]}],Ze=function(){var e=Object(n.useState)("1"),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(I.a)("about-me").t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(X.a,{children:[Object(P.jsx)("title",{children:"Sylvain Michel"}),Object(P.jsx)("meta",{name:"description",content:"some information about me, sort of my online resume / CV"})]}),Object(P.jsxs)(M.a,{container:!0,spacing:2,children:[Object(P.jsx)(M.a,{item:!0,xs:12,sm:4,md:3,xl:2,children:Object(P.jsxs)(ie.a,{children:[Object(P.jsxs)(ae.a,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(P.jsx)(D.a,{src:"../img/me.webp",alt:"me",sx:{width:56,height:56},children:"SM"}),Object(P.jsx)(h.a,{component:"h1",variant:"h5",children:"Sylvain Michel"})]}),ke.map((function(e){return Object(P.jsxs)(ne.a,{onClick:e.action,children:[Object(P.jsx)(f.a,{children:e.icon}),Object(P.jsx)(w.a,{primary:e.text})]})})),_e.map((function(e){return Object(P.jsx)(xe,Object(T.a)({},e))}))]})}),Object(P.jsx)(M.a,{item:!0,xs:12,sm:8,md:9,xl:10,children:Object(P.jsx)(ae.a,{children:Object(P.jsxs)($.a,{value:a,children:[Object(P.jsx)(ae.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(P.jsxs)(ee.a,{onChange:function(e,t){i(t)},"aria-label":"CV sections",variant:"fullWidth",children:[Object(P.jsx)(oe.a,{label:Object(P.jsx)(h.a,{component:"h2",variant:"button",children:o("profesionalExp")}),value:"1"}),Object(P.jsx)(oe.a,{label:Object(P.jsx)(h.a,{component:"h2",variant:"button",children:o("studiesTab")}),value:"2"}),Object(P.jsx)(oe.a,{label:Object(P.jsx)(h.a,{component:"h2",variant:"button",children:o("certificationsTab")}),value:"3"}),Object(P.jsx)(oe.a,{label:Object(P.jsx)(h.a,{component:"h2",variant:"button",children:o("hobbiesTab")}),value:"4"})]})}),Object(P.jsx)(te.a,{value:"1",children:Object(P.jsx)(M.a,{container:!0,spacing:2,children:o("profesionalXp",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,xl:3,children:Object(P.jsx)(be,Object(T.a)({},e))})}))})}),Object(P.jsx)(te.a,{value:"2",children:Object(P.jsx)(M.a,{container:!0,spacing:2,children:o("studies",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,xl:3,children:Object(P.jsx)(ve,Object(T.a)({},e))})}))})}),Object(P.jsx)(te.a,{value:"3",children:Object(P.jsx)(M.a,{container:!0,spacing:2,children:o("certifications",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,xl:3,children:Object(P.jsx)(ce,Object(T.a)({},e))})}))})}),Object(P.jsx)(te.a,{value:"4",children:Object(P.jsx)(M.a,{container:!0,spacing:2,children:o("hobbies",{returnObjects:!0}).map((function(e){return Object(P.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,xl:3,children:Object(P.jsx)(je,Object(T.a)({},e))})}))})})]})})})]})]})};function Qe(){return Object(P.jsx)(h.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,children:"Not Found"})}var Ve,Ue=a(17),Xe=a(163),Ke=a(267),qe=i.a.createContext({toggleColorMode:function(){}});!function(e){e.home="/",e.book="/books",e.tabletopGame="/tabletop-game",e.aboutMe="/about-me"}(Ve||(Ve={}));var $e=function(){var e=i.a.useState("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],o=i.a.useMemo((function(){return Object(Xe.a)({palette:{mode:a}})}),[a]),c=i.a.useMemo((function(){return{toggleColorMode:function(){n((function(e){return"light"===e?"dark":"light"}))}}}),[]),s=Object(I.a)("home").t;return Object(P.jsx)(qe.Provider,{value:c,children:Object(P.jsxs)(Ke.a,{theme:o,children:[Object(P.jsx)(l.a,{}),Object(P.jsx)(B,{title:s("title")}),Object(P.jsx)(F.a,{children:Object(P.jsxs)(Ue.c,{children:[Object(P.jsx)(Ue.a,{path:Ve.home,exact:!0,component:J}),Object(P.jsx)(Ue.a,{path:Ve.book,exact:!0,component:K}),Object(P.jsx)(Ue.a,{path:Ve.tabletopGame,exact:!0,component:q}),Object(P.jsx)(Ue.a,{path:Ve.aboutMe,exact:!0,component:Ze}),Object(P.jsx)(Ue.a,{component:Qe})]})})]})})},et=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,290)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))},tt=a(117),at=a(78),nt=a(160),it=a(161);tt.a.use(nt.a).use(it.a).use(at.e).init({fallbackLng:"en",supportedLngs:["en","fr"],backend:{loadPath:"i18n/{{lng}}/{{ns}}.json"}});tt.a;var ot=a(273);c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(n.Suspense,{fallback:Object(P.jsx)(ot.a,{}),children:Object(P.jsx)($e,{})})}),document.getElementById("root")),et()}},[[194,1,2]]]);
//# sourceMappingURL=main.4b9001b9.chunk.js.map