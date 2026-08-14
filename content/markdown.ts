/**
 * Markdown representations of key pages, served to agents that send
 * `Accept: text/markdown` (see middleware.ts). Keep in sync with the
 * corresponding page component when its content changes.
 *
 * Note: the CV email address is deliberately omitted here (it's only
 * revealed client-side after a click) to avoid trivially exposing it to
 * scrapers via this alternate representation.
 */

const HOME_MD = `# Sander Breivik

Full-stack developer based in Øygarden, outside Bergen, Norway.

I am a full-stack developer with a passion for creating beautiful user experiences.

## Links

- LinkedIn: https://www.linkedin.com/in/sanderbreivik
- Facebook: https://www.facebook.com/sander.breivik
- Steam: https://steamcommunity.com/id/commxander
- GitHub: https://github.com/SanderBreivik
- CV (English): https://www.sanderbreivik.no/CV-en
- CV (Norwegian): https://www.sanderbreivik.no/CV-no

## Source

View the source code for this site: https://github.com/SanderBreivik/SanderBreivik.no
`;

const CV_EN_MD = `# Sander Breivik

Contact: LinkedIn (https://linkedin.com/in/sanderbreivik) | Phone: 96044636

## About

I am a full-stack developer passionate about building user-friendly systems with the user
experience at the center. Based in Øygarden outside Bergen, Norway, I hold a Bachelor of
Science in Informatics from NTNU in Trondheim. With experience in .NET, Angular, React,
React Native, Python, Java, SQL, and Figma, I have been working at ACOS AS since 2019,
focusing on converting Windows applications to multi-tenant, microservice architectures.
Currently, I am employed at Frende Skadeforsikring, working primarily with .NET (F#) and
React on their online insurance store.

## Professional Experience

### Full-stack Developer — Frende Skadeforsikring, Bergen
*November 2025 – present*

Working as a full-stack developer on Frende's digital insurance store, where customers can
buy and manage insurance products online. The solution is part of Frende's customer-facing
platform and includes both frontend user flows and backend services related to pricing,
validation, product configuration and integrations.

My work is primarily with .NET, F#, React and TypeScript. I contribute to further
development and maintenance of the storefront, including backend logic, domain validation,
mapping of insurance products and coverages, and frontend functionality used in the
purchase flow. The role requires working with complex insurance rules and translating
business requirements into clear and reliable technical solutions.

I have also worked with automated testing, troubleshooting across environments, and
investigation of issues in build and test pipelines. This includes identifying differences
between test environments and contributing to more stable releases through clearer
diagnostics and improved test coverage.

### Full-stack Developer — ACOS AS, Straume
*November 2019 – November 2025*

Worked as a full-stack developer on the modernization of an existing Windows application
into a web-based solution built on a multi-tenant microservice architecture. The project
involved moving functionality from an older desktop application to a more scalable and
maintainable platform using modern web technologies.

My work was mainly with .NET, Angular, AngularJS, TypeScript and SQL. I contributed across
both frontend and backend, developing new functionality, maintaining existing features and
adapting the solution to an architecture where multiple customers could use the same
platform in a secure and structured way.

The role involved gradual modernization of legacy code, integration between new and
existing services, and close collaboration with other developers to ensure that the
solution could continue to evolve without losing important functionality from the original
application.

## Education

### Bachelor of Science in Informatics
*NTNU Gløshaugen, 2016-2019*

Focused on databases, algorithms, object-oriented programming, operating systems, web
development, human-machine interaction, information retrieval, and software development.

### Study Preparatory with Technology
*Sotra Videregående Skole, Bildøy, 2013-2016*

Prepared for higher education in technology and engineering, covering general study
preparatory subjects and essential skills for engineering and technology studies.

## Technical Skills

- .NET (C#)
- TypeScript/JavaScript
- Angular + AngularJS
- React + React Native
- Python
- Java

## Others

- HTML
- CSS
- Git
- Jira
- Office 365
- Photoshop
- UX
- Scrum
- Zendesk

## Activities and Interests

- Freediving
- Travel
- Cooking
- Guitar
- Photography
- Video editing
`;

const CV_NO_MD = `# Sander Breivik

Kontakt: LinkedIn (https://linkedin.com/in/sanderbreivik) | Telefon: 96044636

## Om

Jeg er en fullstack-utvikler som brenner for å bygge brukervennlige systemer med
brukeropplevelse i sentrum. Bosatt i Øygarden utenfor Bergen, Norge. Jeg har en Bachelor of
Science i informatikk fra NTNU i Trondheim. Med erfaring i .NET, Angular, React, React
Native, Python, Java, SQL og Figma, har jeg jobbet hos ACOS AS siden 2019, med fokus på å
konvertere en Windows-applikasjon til en multi-tenant mikroservice-arkitektur. Nå er jeg
ansatt hos Frende Skadeforsikring, hvor jeg primært jobber med .NET (F#) og React på deres
nettbutikk for forsikringer.

## Yrkeserfaring

### Fullstack-utvikler — Frende Skadeforsikring, Bergen
*November 2025 – nåværende*

Jobber som fullstack-utvikler på Frende sin digitale forsikringsbutikk, hvor kunder kan
kjøpe og administrere forsikringer på nett. Løsningen er en del av Frende sin kundevendte
plattform og består av både frontend-flyter og backend-tjenester knyttet til blant annet
prising, validering, produktkonfigurasjon og integrasjoner.

Jeg jobber primært med .NET, F#, React og TypeScript. Arbeidet mitt består av
videreutvikling og vedlikehold av nettbutikken, inkludert backend-logikk, domenevalidering,
mapping av forsikringsprodukter og dekninger, samt frontend-funksjonalitet i kjøpsflyten.
Rollen krever forståelse for komplekse forsikringsregler og at forretningskrav omsettes til
tydelige og robuste tekniske løsninger.

Jeg har også jobbet med automatiserte tester, feilsøking på tvers av miljøer og analyse av
feil i bygg- og testpipelines. Dette innebærer blant annet å identifisere forskjeller mellom
testmiljøer og bidra til mer stabile releaser gjennom bedre diagnostikk og testdekning.

### Fullstack-utvikler — ACOS AS, Straume
*November 2019 – November 2025*

Jobbet som fullstack-utvikler med modernisering av en eksisterende Windows-applikasjon til
en webbasert løsning bygget på en multi-tenant mikroservice-arkitektur. Prosjektet handlet
om å flytte funksjonalitet fra en eldre desktop-løsning over til en mer skalerbar og
vedlikeholdbar plattform med moderne webteknologi.

Arbeidet mitt var hovedsakelig knyttet til .NET, Angular, AngularJS, TypeScript og SQL. Jeg
bidro både på frontend og backend, med utvikling av nye funksjoner, videreutvikling av
eksisterende funksjonalitet og tilpasning av løsningen til en arkitektur hvor flere kunder
kunne bruke samme plattform på en sikker og strukturert måte.

Rollen innebar gradvis modernisering av eldre kode, integrasjon mellom nye og eksisterende
tjenester, og tett samarbeid med andre utviklere for å sikre at løsningen kunne
videreutvikles over tid uten å miste viktig funksjonalitet fra den opprinnelige
applikasjonen.

## Utdanning

### Bachelor of Science i informatikk
*NTNU Gløshaugen, 2016-2019*

Fokuserte på databaser, algoritmer, objektorientert programmering, operativsystemer,
webutvikling, menneske-maskin interaksjon, informasjonshenting og programvareutvikling.

### Studieforberedende med teknologi
*Sotra Videregående Skole, Bildøy, 2013-2016*

Forberedt for høyere utdanning innen teknologi- og ingeniørfag, med dekning av generelle
studieforberedende fag og nødvendige ferdigheter for ingeniør- og teknologistudier.

## Tekniske ferdigheter

- .NET (C#)
- TypeScript/JavaScript
- Angular + AngularJS
- React + React Native
- Python
- Java

## Andre

- HTML
- CSS
- Git
- Jira
- Office 365
- Photoshop
- UX
- Scrum
- Zendesk

## Aktiviteter og interesser

- Fridykking
- Reise
- Matlaging
- Gitar
- Fotografering
- Videoredigering
`;

/** Map of pathname -> markdown source. Extend as more pages get markdown support. */
export const MARKDOWN_PAGES: Record<string, string> = {
  "/": HOME_MD,
  "/CV-en": CV_EN_MD,
  "/CV-no": CV_NO_MD,
};

/** Rough token estimate (~4 chars/token) for the x-markdown-tokens header. */
export function estimateTokenCount(markdown: string): number {
  return Math.max(1, Math.ceil(markdown.length / 4));
}
