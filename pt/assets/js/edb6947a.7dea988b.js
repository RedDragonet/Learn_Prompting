"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5474],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>g});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=m(e.components);return o.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||n;return t?o.createElement(g,i(i({ref:a},l),{},{components:t})):o.createElement(g,i({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<n;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51867:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var o=t(87462),r=(t(67294),t(3905));const n={sidebar_position:1},i="Bem-Vindo(a)!",s={unversionedId:"intro",id:"intro",title:"Bem-Vindo(a)!",description:"Bem-Vindo(a) a este curso de engenharia de prompt!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pt/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/pt/docs/category/-basics"}},p={},m=[{value:"A parte mais importante deste curso \xe9 o seu feedback!",id:"a-parte-mais-importante-deste-curso-\xe9-o-seu-feedback",level:2},{value:"Filosofia do Curso",id:"filosofia-do-curso",level:2},{value:"Itera\xe7\xf5es R\xe1pidas",id:"itera\xe7\xf5es-r\xe1pidas",level:3},{value:"Foco na Praticidade",id:"foco-na-praticidade",level:3},{value:"Constantes Exemplos",id:"constantes-exemplos",level:3},{value:"Como Ler",id:"como-ler",level:2},{value:"Iconografia",id:"iconografia",level:3},{value:"Cap\xedtulos",id:"cap\xedtulos",level:2}],l={toc:m},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,o.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bem-vindoa"},"Bem-Vindo(a)!"),(0,r.kt)("p",null,"Bem-Vindo(a) a este curso de engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),"! "),(0,r.kt)("p",null,"Voc\xea pode pensar na engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," (EP) como sendo um campo de estudo que visa aprender ",(0,r.kt)("strong",{parentName:"p"},"como falar com uma intelig\xeancia artifical para conseguir o que se deseja"),". "),(0,r.kt)("p",null,"Com os \xfaltimos avan\xe7os feitos em intelig\xeancia artifical (IA), a engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," vem cada vez mais se tornando uma habilidade valorizada e procurada para fazer com que a IA fa\xe7a o que voc\xea deseja.\nEste curso foca em t\xe9cnicas aplicadas de engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),", e esperamos que os leitores tenham um conhecimento m\xednimo de aprendizado de m\xe1quina. Se estes conceitos s\xe3o novos para voc\xea, recomendamos come\xe7ar pela se\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/pt/docs/category/-basics"},"Fundamentos")," e lendo as ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/pt/docs/basics/intro"},"Intru\xe7\xf5es")," primeiro."),(0,r.kt)("h2",{id:"a-parte-mais-importante-deste-curso-\xe9-o-seu-feedback"},"A parte mais importante deste curso \xe9 o seu feedback!"),(0,r.kt)("p",null,"Se voc\xea tiver quaisquer d\xfavidas, coment\xe1rios ou sugest\xf5es, voc\xea pode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abrir um t\xf3pico no ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},"Enviar um e-mail para ",(0,r.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")),(0,r.kt)("li",{parentName:"ul"},"Entrar em nossa comunidade no ",(0,r.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord")),(0,r.kt)("li",{parentName:"ul"},"Seguir o reposit\xf3rio no ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/learn_prompting"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},"Temos tamb\xe9m um ",(0,r.kt)("a",{parentName:"li",href:"https://learnprompting.org/consulting"},"Formul\xe1rio de Interesse em Consultoria"))),(0,r.kt)("p",null,"At\xe9 mesmo a mais simples opini\xe3o nos ajuda muito!"),(0,r.kt)("h2",{id:"filosofia-do-curso"},"Filosofia do Curso"),(0,r.kt)("h3",{id:"itera\xe7\xf5es-r\xe1pidas"},"Itera\xe7\xf5es R\xe1pidas"),(0,r.kt)("p",null,"J\xe1 que novos conte\xfados de engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," s\xe3o publicados quase que diariamente, vamos atualizar este curso frequentemente com pequenos artigos falando sobre novas t\xe9cnicas."),(0,r.kt)("p",null,"Nos d\xea sua opini\xe3o sobre o que voc\xea tem mais interesse em aprender!"),(0,r.kt)("p",null,"Parte desta filosofia \xe9 ",(0,r.kt)("strong",{parentName:"p"},"itera\xe7\xe3o err\xe1tica"),". Se voc\xea encontrar algo que voc\xea n\xe3o entendeu, mesmo que seja algo pequeno, avise-nos."),(0,r.kt)("p",null,"Abra um t\xf3pico no ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"GitHub"),"!"),(0,r.kt)("h3",{id:"foco-na-praticidade"},"Foco na Praticidade"),(0,r.kt)("p",null,"N\xf3s vamos focar em aplicabilidade, t\xe9cnicas pr\xe1ticas que voc\xea pode usar imediatamente em seu dia a dia."),(0,r.kt)("h3",{id:"constantes-exemplos"},"Constantes Exemplos"),(0,r.kt)("p",null,"N\xf3s vamos colocar exemplos nos artigos o mais cedo poss\xedvel para que voc\xea possa conhecer e utilizar as t\xe9cnicas o mais r\xe1pido poss\xedvel."),(0,r.kt)("p",null,"N\xf3s vamos filosofar mais sobre isso quando chegar a hora. \ud83d\ude0a"),(0,r.kt)("h2",{id:"como-ler"},"Como Ler"),(0,r.kt)("p",null,"N\xe3o \xe9 necess\xe1rio ler todos os cap\xedtulos em ordem. Leia o que \xe9 de seu interesse!"),(0,r.kt)("p",null,"Se voc\xea est\xe1 dando os primeiros passos em intelig\xeancia artificial e engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),", comece pela se\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/pt/docs/category/-basics"},"Fundamentos"),". Se voc\xea j\xe1 est\xe1 familiarizado com esses conceitos, voc\xea est\xe1 pronto para come\xe7ar pelo n\xedvel ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/ptdocs/category/%EF%B8%8F-intermediate"},"Intermedi\xe1rio"),"."),(0,r.kt)("h3",{id:"iconografia"},"Iconografia"),(0,r.kt)("p",null,"\ud83d\udfe2 Muito f\xe1cil, n\xe3o requer programa\xe7\xe3o."),(0,r.kt)("p",null,"\ud83d\udfe1 F\xe1cil, requer conhecimento elementar de programa\xe7\xe3o, mas n\xe3o precisa dominar nenhuma \xe1rea em espec\xedfico."),(0,r.kt)("p",null,"\ud83d\udd34 M\xe9dio, requer programa\xe7\xe3o e dom\xednio de algumas \xe1reas para implementa\xe7\xe3o, por exemplo: c\xe1lculo de probabilidades logar\xedtmicas."),(0,r.kt)("p",null,"\ud83d\udfe3 Dif\xedcil, requer programa\xe7\xe3o e vasto dom\xednio de certas \xe1reas para implementa\xe7\xe3o, por exemplo: aprendizagem por refor\xe7o."),(0,r.kt)("p",null,"Tenha em mente que embora o dom\xednio de certas \xe1reas seja \xfatil para \ud83d\udd34 e \ud83d\udfe3, voc\xea ainda ser\xe1 capaz de entender os artigos sem conhecimento pr\xe9vio."),(0,r.kt)("h2",{id:"cap\xedtulos"},"Cap\xedtulos"),(0,r.kt)("p",null,"Aqui est\xe1 uma breve descri\xe7\xe3o de cada cap\xedtulo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fundamentos"),": introdu\xe7\xe3o \xe0 engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," e t\xe9cnicas b\xe1sicas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Intermedi\xe1rio"),": t\xe9cnicas levemente mais complicadas de engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," apoiadas em pesquisa."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aplica\xe7\xe3o de ",(0,r.kt)("em",{parentName:"strong"},"Prompt")),": guias completos de como aplicar a engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," escritos por membros da comunidade."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aplica\xe7\xe3o Avan\xe7ada"),": algumas t\xe9cnicas poderosas e avan\xe7adas de engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Confiabilidade"),": como fazer os grandes modelos de linguagem (",(0,r.kt)("em",{parentName:"p"},"LLMs"),", na sigla em ingl\xeas) ficarem mais confi\xe1veis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Imagens"),": como utilizar a engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt")," para converter textos em imagens utilizando modelos de ",(0,r.kt)("em",{parentName:"p"},"Stable Difusion")," (Difus\xe3o Est\xe1vel), como o DALL-E e outros."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inje\xe7\xe3o de ",(0,r.kt)("em",{parentName:"strong"},"Prompt")),": t\xe9cnicas de ",(0,r.kt)("em",{parentName:"p"},"hacking")," utilizando engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ambientes de ",(0,r.kt)("em",{parentName:"strong"},"Prompt")," (IDEs)"),": apresenta\xe7\xe3o de diferentes ferramentas para se trabalhar com engenharia de ",(0,r.kt)("em",{parentName:"p"},"prompt"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tunelamento de ",(0,r.kt)("em",{parentName:"strong"},"Prompt")),": Aprenda a fazer tunelamento (ajustes finos) de ",(0,r.kt)("em",{parentName:"p"},"prompt")," utilizando gradientes."))}d.isMDXComponent=!0}}]);