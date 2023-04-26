// data
const tools_en = [
  {
    id: 0,
    company: "Microsoft",
    name: "C# (up to 4.7)",
    lvl: "Senior",
    years: "8+",
    brief: true,
  },
  {
    id: 1,
    company: "",
    name: "Visual Basic (4.0, 5.0, 6.0, 2005, 2008)",
    lvl: "Senior",
    years: "6+",
    brief: true,
  },
  {
    id: 2,
    company: "",
    name: "C/C++ (7.0, VS98, VS2008)",
    lvl: "SemiSr",
    years: "4",
    brief: true,
  },
  {
    id: 3,
    company: "",
    name: "BASIC (QuickBASIC v3.0, 4.5, 7.0)",
    lvl: "Senior+",
    years: "10+",
    brief: false,
  },
  {
    id: 4,
    company: "",
    name: "ASP.net - WebForms & MVC",
    lvl: "Senior",
    years: "5+",
    brief: true,
  },
  {
    id: 5,
    company: "",
    name: "Windows Domain Admin, AD, IIS, Exchange",
    lvl: "Senior+",
    years: "16",
    brief: false,
  },
  {
    id: 6,
    company: "Borland/Embarcadero",
    name: "Delphi",
    lvl: "Senior+",
    years: "12",
    brief: true,
  },
  { id: 7, company: "", name: "Turbo Pascal", lvl: "SemiSr", years: "2", brief: false },
  { id: 8, company: "", name: "Turbo C/C++", lvl: "SemiSr", years: "2", brief: false },
  {
    id: 9,
    company: "LIANT",
    name: "RM-COBOL 85",
    lvl: "SemiSr",
    years: "2",
    brief: false,
  },
  {
    id: 10,
    company: "SQL",
    name: "Oracle, SQL Server, PostgreSQL, MySQL",
    lvl: "Senior",
    years: "8+",
    brief: true,
  },
  {
    id: 11,
    company: "Linux",
    name: "Debian, RedHat, CentOS, Arch – Setup & Administration",
    lvl: "Senior+",
    years: "12+",
    brief: true,
  },
  {
    id: 12,
    company: "BSD Unix",
    name: "FreeBSD, NetBSD, macOS - Setup & Administration",
    lvl: "Senior",
    years: "6+",
    brief: false,
  },
  {
    id: 13,
    company: "*nix networking",
    name: "TCP-IP – Routing, Firewalls, VPN, VoIP",
    lvl: "Senior",
    years: "9+",
    brief: false,
  },
  {
    id: 14,
    company: "Open Source",
    name: "Node.JS",
    lvl: "SemiSr",
    years: "4+",
    brief: true,
  },
  { id: 15, company: "", name: "PHP", lvl: "SemiSr", years: "3+", brief: false },
  { id: 16, company: "", name: "Python", lvl: "Junior", years: "1", brief: false },
  { id: 17, company: "Amazon", name: "AWS", lvl: "Junior", years: "1", brief: true },
];

const xps_en = [
  {
    company: "GoJiraf",
    business: "Live Shopping",
    relationship: "Contractor",
    location: "",
    init: "2022-11",
    end: "2023-04",
    role: "Full Stack Engineer",
    brief: true,
    tasks: [
      { task: "NodeJS: NestJS and Loopback development" },
      { task: "React: Front End development" },
      { task: "AWS: Lambdas development with S3 integration" },
    ],
  },
  {
    company: "Distillery",
    business: "Software Development Company",
    relationship: "Contractor",
    location: "",
    init: "2022-03",
    end: "2022-07",
    role: "NodeJS Engineer",
    brief: true,
    tasks: [
      { task: "NodeJS: TypeScript development" },
      { task: "NodeJS: ETL chain creation" },
      { task: "PosgreSQL: database design, query optimization" },
    ],
  },
  {
    company: "Solution Box Argentina",
    business: "value-added wholesale distributor",
    relationship: "Employee",
    location: "Barracas",
    init: "2021-05",
    end: "2022-03",
    role: "Senior Software Engineer",
    brief: true,
    tasks: [
      { task: "Delphi: ERP upgrade and maintenance" },
      { task: "NodeJS: Marketplaces (VTEX, Aper) Integration using REST API" },
      { task: "MySQL: query optimization" },
    ],
  },
  {
    company: "PROSEGUR",
    business: "Cash Transportation",
    relationship: "Employee",
    location: "Vicente Lopez",
    init: "2020-01",
    end: "2021-01",
    role: "Senior Developer",
    brief: true,
    tasks: [
      { task: "Full Stack development in C# using .NET 4.5 and .NET core" },
      { task: "REST APIs and SOAP WebServices development" },
      { task: "Oracle SQL query optimization" },
    ],
  },
  {
    company: "Patagonian IT",
    business: "Software Factory",
    relationship: "Contract",
    location: "Gral Roca",
    init: "2019-02",
    end: "2019-08",
    role: "Senior Developer",
    brief: false,
    tasks: [
      { task: "Full Stack development in Java, Python, Scala, Node.JS, Angular.JS" },
      { task: "NodeJS: TyeScript and MongoDB development" },
      { task: "Python: ETL chain creation" },
      { task: "MySQL: database design, query optimization" },
      { task: "Scala: cloud development with Google BigQuery" },
    ],
  },
  {
    company: "LaserSystems",
    business: "Industrial Solutions using laser & electronic automation",
    relationship: "Freelance",
    location: "Vicente Lopez",
    init: "2018-07",
    end: "2019-02",
    role: "Software Architect / Senior Developer",
    brief: false,
    tasks: [
      { task: "Software migration from VB6 to 64bit dotNet" },
      { task: "Embedded C++ development for microcontrollers" },
    ],
  },
  {
    company: "BEESION",
    business: "Low Code Telecom Solutions",
    relationship: "Employee",
    location: "CABA",
    init: "2016-10",
    end: "2018-07",
    role: "Senior Developer",
    brief: true,
    tasks: [
      { task: "In-house framework maintenance in C# and Java" },
      { task: "3rd party API integration." },
      { task: "Load testing automation with Jenkins." },
      {
        task: "Remote Cordova build automation with custom server in Node.JS.",
      },
    ],
  },
  {
    company: "Data & Tendencias",
    business: "Social Networks Consulting",
    relationship: "Freelance",
    location: "CABA",
    init: "2014-06",
    end: "2016-10",
    role: "Developer / Web Hosting admin / CTO",
    brief: true,
    tasks: [
      {
        task:
          "Design and development of online communities software for Twitter",
      },
      {
        task:
          "News Network administration and Plugin development with WordPress",
      },
      { task: "PHP, JavaScript & MySQL development" },
      {
        task: "Linux server administration – Load balancer, Hosting LAMP, DNS",
      },
    ],
  },
  {
    company: "Team Quality",
    business: "Banking & Retail Solutions",
    relationship: "Employee",
    location: "CABA",
    init: "2015-08",
    end: "2016-09",
    role: "Senior Developer",
    brief: false,
    tasks: [
      { task: "Financial software maintenance in VB6" },
      {
        task: "MS-SQL & Oracle Stored Procedures development & maintenance",
      },
    ],
  },
  {
    company: "LaserSystems",
    business: "Industrial Solutions using laser & electronic automation",
    relationship: "Employee",
    location: "Vicente Lopez",
    init: "2008-05",
    end: "2015-08",
    role: "Software Architect / Developer / Network Administrator",
    brief: true,
    tasks: [
      {
        task:
          "Design and development of tablet manufacturing system for the pharmaceutical industry with capture and analysis of images in real-time",
      },
      { task: "Design and development of medical laser interfaces" },
      { task: "PIC C, VB 6.0, C#, C++ development" },
      {
        task:
          "Intranet implementation – incremental backup, mail, wiki, and source control servers",
      },
    ],
  },
  {
    company: "FOBESA SA",
    business: "Retail Management Systems",
    relationship: "Employee",
    location: "CABA",
    init: "2006-12",
    end: "2008-04",
    role: "Developer / CBDO",
    brief: true,
    tasks: [
      {
        task:
          "Development of WMS and Traceability solutions for the pharmaceutical industry",
      },
      {
        task:
          "Development of interfaces between COBOL and Delphi systems: Check printer, Hasar and EPSON fiscal printer, WebServices, Traceability with SSL package signing",
      },
      {
        task:
          "Infrastructure migration to free software: mail, proxy, VPN, firewall, domain controller, file server, backup, and SVN",
      },
      { task: "Intranet implementation: wiki, bugtracker & CRM" },
      { task: "Delphi, COBOL, MS SQL Server y PostgreSQL development" },
    ],
  },
  {
    company: "IMS SA",
    business: "ERP Software",
    relationship: "Employee",
    location: "CABA",
    init: "2006-06",
    end: "2006-09",
    role: "Delphi Developer",
    brief: false,
    tasks: [
      { task: "In-house ORM maintenance" },
      { task: "Development of new modules and reports. Bug fixing" },
      {
        task:
          "Delphi with MS SQL Server, Oracle, PostgreSQL & Firebird development",
      },
    ],
  },
  {
    company: "Coop de Trabajo “Renacer”",
    business: "Construction Company",
    relationship: "Employee",
    location: "Hurlingham",
    init: "2004",
    end: "2006",
    role: "Architect / Delphi & PHP Developer / Network administrator",
    brief: false,
    tasks: [
      {
        task: "Design and development of management and work progress system",
      },
      { task: "Online construction costs calculator" },
      {
        task:
          "Intranet implementation: file server, SQL server, proxy, firewall + traffic-shaping",
      },
      { task: "Delphi, PHP, MySQL, PostgreSQL development" },
    ],
  },
  {
    company: "Grisbill SA",
    business: "Manufacture of flavorings and perfumes",
    relationship: "Freelance",
    location: "Vicente Lopez",
    init: "2002",
    end: "2004",
    role: "Delphi – Clipper developer / Network administrator",
    brief: false,
    tasks: [
      {
        task: "DOS (Clipper) to Windows (Delphi 3-tier) software migration",
      },
      { task: "NT4 domain to Windows 2000 ActiveDirectory migration" },
      {
        task:
          "VPN & VoIP implementation with Brazil factory, using free software",
      },
    ],
  },
  {
    company: "LaserSystems",
    business: "Industrial Solutions using laser & electronic automation",
    relationship: "Employee",
    location: "Vicente Lopez",
    init: "2001",
    end: "2002",
    role: "Developer / Project Leader",
    brief: false,
    tasks: [
      {
        task:
          "Design and development of tablet manufacturing system for the pharmaceutical industry with capture and analysis of images in real-time",
      },
    ],
  },
  {
    company: "Microprot SA",
    business: "Internet Development",
    relationship: "Owner",
    location: "CABA",
    init: "2000",
    end: "2002",
    role: "Network administrator / Project Leader / Delphi developer",
    brief: false,
    tasks: [
      {
        task:
          "Online applications design and development: NavCash, MP3Sherlock, FullZero dialer, Instant Messaging system",
      },
      { task: "Cross-platform servers for all of our products" },
      {
        task: "Flash applications development for the government [educ.ar]",
      },
      { task: "Delphi, GCC, MySQL, PostgreSQL development." },
    ],
  },
  {
    company: "SINC SRL",
    business: "Software Consulting",
    relationship: "Employee",
    location: "CABA",
    init: "1999",
    end: "2000",
    role: "BASIC - Delphi developer / Novell Netware support",
    brief: false,
    tasks: [
      { task: "QB / Btrieve system migrations to be Y2K ready." },
      {
        task: "Customer Novell Netware support – Server administration",
      },
      {
        task:
          "DOS (QB/Btrieve) to Windows (Delphi/PervasiveSQL) system migration",
      },
    ],
  },
  {
    company: "Advanced Stead Information",
    business: "Foreign Trade Consulting",
    relationship: "Employee",
    location: "CABA",
    init: "1997",
    end: "1998",
    role: "Delphi developer/ Project Leader / Network administrator",
    brief: false,
    tasks: [
      {
        task: "Delphi + SQL Server applications design and development",
      },
      { task: "Customs MARIA system bulk data importer" },
      { task: "NT4 domain administration" },
      { task: "Client technical support" },
    ],
  },
  {
    company: "Producciones Digitales SH",
    business: "Image Consulting – Multimedia Studio",
    relationship: "Freelance",
    location: "CABA",
    init: "1995",
    end: "1999",
    role: "Delphi - Macromedia Director developer",
    brief: false,
    tasks: [
      { task: "Institucional CD-ROM development" },
      { task: "Web Site development" },
      { task: "Corporate intranet implementation" },
    ],
  },
  {
    company: "AICON SRL",
    business: "3D design and postproduction studio",
    relationship: "Freelance",
    location: "CABA",
    init: "1996",
    end: "1999",
    role: "Developer / Network Administrator",
    brief: false,
    tasks: [
      { task: "NT & Silicon Graphics network administrator" },
      { task: "Maya & 3DStudio MAX plugin development" },
      { task: "Flash web pages development" },
      { task: "Project: OpenGL real-time virtual TV host" },
    ],
  },
  {
    company: "PUBLIRED Multimedia SA",
    business: "Advertising & Multimedia Consulting",
    relationship: "Employee",
    location: "CABA",
    init: "1995",
    end: "1997",
    role: "CTO / Delphi developer / R&D Director",
    brief: false,
    tasks: [
      {
        task:
          "Multimedia self-service stand development, deployed at Spinetto Shopping Center, Nine Center& COTO C.I.C.S.A (Suc. Sarandí)",
      },
      { task: "Windows 95 & Winsock Instant Messenger development" },
      { task: "TAPI, Voice Recognition, DirectX y OpenGL research" },
      { task: "Virtual Shopping 3D Engine (FPS, BSP trees) real-time" },
    ],
  },
  {
    company: "DIGIOFTALMO SA",
    business: "Ophtalmology Products",
    relationship: "Employee",
    location: "CABA",
    init: "1991",
    end: "1995",
    role: "BASIC, C, Turbo Pascal developer / Project leader",
    brief: false,
    tasks: [
      {
        task: "RFG digitizing system development (Fluorescein angiography)",
      },
      {
        task: "Corneal topography system for rigid contact lens design",
      },
    ],
  },
  {
    company: "IAC - Instituto Argentino de Computación",
    business: "IT Education",
    relationship: "Employee",
    location: "San Justo",
    init: "1991",
    end: "1991",
    role: "Teacher",
    brief: false,
    tasks: [{ task: "BASIC / Advanced BASIC teacher" }],
  },
];

// vue components
Vue.component('knowledge-item', {
  props: ['tool', 'pbrief'],
  template: `
    <div v-show="tool.brief || pbrief" class="row row-cols-4 py-1">
      <div class="col-3">{{ tool.company }}</div>
      <div class="col-xs-6 col-sm-6">{{ tool.name }}</div>
      <div class="col-2">{{ tool.lvl }}</div>
      <div class="col-1 text-center">{{ tool.years }}</div>
    </div>
    `,
})

// vue app
var app = new Vue({
  el: '#cv',
  data: {
    toolsbrief: false,
    xpbrief: false,
    tools: tools_en,
    xps: xps_en,
  },
});
