// data
const tools_en = [
  {
    id: 0,
    company: "Microsoft",
    name: "C#",
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
  {
    id: 7,
    company: "",
    name: "Turbo Pascal",
    lvl: "SemiSr",
    years: "2",
    brief: false,
  },
  {
    id: 8,
    company: "",
    name: "Turbo C/C++",
    lvl: "SemiSr",
    years: "2",
    brief: false,
  },
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
    name: "Debian, RedHat, CentOS, Arch - Setup & Administration",
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
    name: "TCP-IP : Routing, Firewalls, VPN, VoIP",
    lvl: "Senior",
    years: "9+",
    brief: false,
  },
  {
    id: 14,
    company: "Open Source",
    name: "Node.JS",
    lvl: "Senior",
    years: "5+",
    brief: true,
  },
  {
    id: 15,
    company: "",
    name: "PHP",
    lvl: "SemiSr",
    years: "3+",
    brief: false,
  },
  {
    id: 16,
    company: "",
    name: "Python",
    lvl: "Junior",
    years: "1",
    brief: false,
  },
  {
    id: 17,
    company: "",
    name: "Ruby",
    lvl: "Junior",
    years: "1",
    brief: false,
  },
  {
    id: 18,
    company: "Amazon",
    name: "AWS",
    lvl: "Junior",
    years: "1",
    brief: true,
  },
];

const xps_en = [
  {
    company: "Svitla",
    business: "Software Development Consultants",
    relationship: "Contractor",
    location: "",
    init: "2024-05",
    end: "2025-01",
    role: "Staff Software Engineer",
    brief: true,
    tasks: [
      { task: "C#: Software maintenance. gRPC and SignalR." },
      { task: "Ruby: Software maintenance. RoR and Hotwire Turbo." },
    ],
  },
  {
    company: "HARDATA",
    business: "Broadcast Media Production and Distribution",
    relationship: "Employee",
    location: "Haedo",
    init: "2023-08",
    end: "2024-05",
    role: "Software Architect",
    brief: true,
    tasks: [
      { task: "Architecture migration from monolith to distributed services." },
      { task: "Delphi and C++: gRPC stack and code generator" },
      { task: "C#: gRPC controlled Media server" },
      { task: "C#/React: SignalR stack for remote control" },
    ],
  },
  {
    company: "GoJiraf",
    business: "Live Shopping",
    relationship: "Contractor",
    location: "",
    init: "2022-11",
    end: "2023-05",
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
      {
        task: "Full Stack development in Java, Python, Scala, Node.JS, Angular.JS",
      },
      { task: "NodeJS: TypeScript and MongoDB development" },
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
        task: "Design and development of online communities software for Twitter",
      },
      {
        task: "News Network administration and Plugin development with WordPress",
      },
      { task: "PHP, JavaScript & MySQL development" },
      {
        task: "Linux server administration - Load balancer, Hosting LAMP, DNS",
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
        task: "Design and development of tablet manufacturing system for the pharmaceutical industry with capture and analysis of images in real-time",
      },
      { task: "Design and development of medical laser interfaces" },
      { task: "PIC C, VB 6.0, C#, C++ development" },
      {
        task: "Intranet implementation – incremental backup, mail, wiki, and source control servers",
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
        task: "Development of WMS and Traceability solutions for the pharmaceutical industry",
      },
      {
        task: "Development of interfaces between COBOL and Delphi systems: Check printer, Hasar and EPSON fiscal printer, WebServices, Traceability with SSL package signing",
      },
      {
        task: "Infrastructure migration to free software: mail, proxy, VPN, firewall, domain controller, file server, backup, and SVN",
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
        task: "Delphi with MS SQL Server, Oracle, PostgreSQL & Firebird development",
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
        task: "Intranet implementation: file server, SQL server, proxy, firewall + traffic-shaping",
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
    role: "Delphi - Clipper developer / Network administrator",
    brief: false,
    tasks: [
      {
        task: "DOS (Clipper) to Windows (Delphi 3-tier) software migration",
      },
      { task: "NT4 domain to Windows 2000 ActiveDirectory migration" },
      {
        task: "VPN & VoIP implementation with Brazil factory, using free software",
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
        task: "Design and development of tablet manufacturing system for the pharmaceutical industry with capture and analysis of images in real-time",
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
        task: "Online applications design and development: NavCash, MP3Sherlock, FullZero dialer, Instant Messaging system",
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
        task: "Customer Novell Netware support - Server administration",
      },
      {
        task: "DOS (QB/Btrieve) to Windows (Delphi/PervasiveSQL) system migration",
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
    business: "Image Consulting - Multimedia Studio",
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
        task: "Multimedia self-service stand development, deployed at Spinetto Shopping Center, Nine Center& COTO C.I.C.S.A (Suc. Sarandí)",
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

const xps_es = [
  {
    company: "Svitla",
    business: "Consultoría en desarrollo de software",
    relationship: "Contractor",
    location: "",
    init: "2024-05",
    end: "2025-01",
    role: "Desarrollador Senior",
    brief: true,
    tasks: [
      { task: "C#: Mantenimiento de software, usando gRPC y SignalR." },
      { task: "Ruby: Mantenimiento de software, usando RoR y Hotwire Turbo." },
    ],
  },
  {
    company: "HARDATA",
    business: "Producción y Distribución de medios para emisoras de radio y TV",
    relationship: "Empleado",
    location: "Haedo",
    init: "2023-08",
    end: "2024-05",
    role: "Arquitecto de Software",
    brief: true,
    tasks: [
      {
        task: "Migración de arquitectura monolitica a servicios distribuidos.",
      },
      { task: "Delphi y C++: componentes y generador de código para gRPC" },
      { task: "C#: servidor de medios controlado por gRPC" },
      { task: "C#/React: control remoto de aplicación utilizando SignalR" },
    ],
  },
  {
    company: "GoJiraf",
    business: "Live Shopping",
    relationship: "Contractor",
    location: "",
    init: "2022-11",
    end: "2023-05",
    role: "Desarrollador Full Stack",
    brief: true,
    tasks: [
      { task: "NodeJS: desarrollo con NestJS y Loopback" },
      { task: "React: desarrollo Front End" },
      { task: "AWS: Lambdas con integración con S3" },
    ],
  },
  {
    company: "Distillery",
    business: "Software Factory",
    relationship: "Contractor",
    location: "",
    init: "2022-03",
    end: "2022-07",
    role: "Desarrollador NodeJS ",
    brief: true,
    tasks: [
      { task: "NodeJS: desarrollo TypeScript con NestJS" },
      { task: "NodeJS: creación de flujo ETL" },
      {
        task: "PosgreSQL: diseño de base de datos y optimización de consultas",
      },
    ],
  },
  {
    company: "Solution Box Argentina",
    business: "Mayorista de partes de PC",
    relationship: "Empleado",
    location: "Barracas",
    init: "2021-05",
    end: "2022-03",
    role: "Desarrollador Senior",
    brief: true,
    tasks: [
      { task: "Delphi: actualización y mantenimiendo de ERP" },
      { task: "NodeJS: Integracion de tiendas (VTEX, Aper) usando API REST" },
      { task: "MySQL: optimización de consultas" },
    ],
  },
  {
    company: "PROSEGUR",
    business: "Transporte de Caudales",
    relationship: "Empleado",
    location: "Vicente Lopez",
    init: "2020-01",
    end: "2021-01",
    role: "Senior Desarrollador",
    brief: true,
    tasks: [
      { task: "desarrollo Full Stack en C# usando .NET 4.5 y .NET core" },
      { task: "desarrollo de servicios API REST y SOAP" },
      { task: "optimización de consultas en Oracle SQL" },
    ],
  },
  {
    company: "Patagonian IT",
    business: "Software Factory",
    relationship: "Contractor",
    location: "Gral Roca",
    init: "2019-02",
    end: "2019-08",
    role: "Desarrollador Senior",
    brief: false,
    tasks: [
      {
        task: "Desarrollo Full Stack en Java, Python, Scala, Node.JS, Angular.JS",
      },
      { task: "NodeJS: desarrollo TypeScript con MongoDB" },
      { task: "Python: creacion de flujo ETL" },
      { task: "MySQL: diseño de base de datos y optimización de consultas" },
      { task: "Scala: desarrollo cloud con Google BigQuery" },
    ],
  },
  {
    company: "LaserSystems",
    business: "Soluciones industriales con laser y automatización",
    relationship: "Freelance",
    location: "Vicente Lopez",
    init: "2018-07",
    end: "2019-02",
    role: "Desarrollador Senior / Arquitecto de Software",
    brief: false,
    tasks: [
      { task: "Migración de software de VB6 a .NET 64bit" },
      { task: "desarrollo en C++ para microcontroladores" },
    ],
  },
  {
    company: "BEESION",
    business: "Low Code Telecom Solutions",
    relationship: "Empleado",
    location: "CABA",
    init: "2016-10",
    end: "2018-07",
    role: "Desarrollador Senior",
    brief: true,
    tasks: [
      { task: "Mantenimiento de framework propio en C# y Java" },
      { task: "Integración con API de terceros" },
      { task: "Automatización de test de carga con Jenkins" },
      {
        task: "NodeJS: Automatización de builds remotos con Apache Cordova",
      },
    ],
  },
  {
    company: "Data & Tendencias",
    business: "Consultora de Redes Sociales",
    relationship: "Freelance",
    location: "CABA",
    init: "2014-06",
    end: "2016-10",
    role: "Desarrollador / Administrador de Web Hosting / CTO",
    brief: true,
    tasks: [
      {
        task: "Diseño y desarrollo de comunidades online para Twitter",
      },
      {
        task: "Administración de red de sitios de noticias",
      },
      {
        task: "Desarrollo de plugins para WordPress",
      },

      { task: "Desarrollo PHP, JavaScript & MySQL" },
      {
        task: "Administración de servidores Linux : Load balancer, Hosting LAMP, DNS",
      },
    ],
  },
  {
    company: "Team Quality",
    business: "Procesamiento de consumos de tarjetas de credito",
    relationship: "Empleado",
    location: "CABA",
    init: "2015-08",
    end: "2016-09",
    role: "Desarrollador Senior",
    brief: false,
    tasks: [
      { task: "Mentenimiento de software financiero en VB6" },
      {
        task: "Desarrollo y mantenimiento de Stored Procedures en MS-SQL y Oracle",
      },
    ],
  },
  {
    company: "LaserSystems",
    business: "Soluciones industriales con laser y automatización",
    relationship: "Empleado",
    location: "Vicente Lopez",
    init: "2008-05",
    end: "2015-08",
    role: "Desarrollador Senior / Arquitecto de Software / Administrador de redes",
    brief: true,
    tasks: [
      {
        task: "Diseño y desarrollo de un sistema para la manufactura de medicamentos con captura de imágenes y análisis en tiempo real",
      },
      { task: "Diseño y desarrollo de interfases para laser medicinales" },
      { task: "Desarrollo en PIC C, VB 6.0, C# y C++" },
      {
        task: "Implementación de Intranet : backups incrementales, mail, wiki, y control de versiones",
      },
    ],
  },
  {
    company: "FOBESA SA",
    business: "Sistemas de ",
    relationship: "Empleado",
    location: "CABA",
    init: "2006-12",
    end: "2008-04",
    role: "Desarrollador / CBDO",
    brief: true,
    tasks: [
      {
        task: "Desarrollo de soluciones WMS y Trazabilidad para la industria farmacéutica",
      },
      {
        task: "Desarrollo de interfases entre sistemas COBOL y Delphi: Impresora de cheques, Impresoras fiscales Hasar y EPSON, WebServices, Trazabilidad con firmado de paquetes SSL",
      },
      {
        task: "Migración de infraestructura hacia software libre: mail, proxy, VPN, firewall, controlador de dominio, file server, backup, y SVN",
      },
      { task: "Implementacion de Intranet: wiki, bugtracker y CRM" },
      { task: "Desarrollos en Delphi, COBOL, MS SQL Server y PostgreSQL" },
    ],
  },
  {
    company: "IMS SA",
    business: "Software ERP",
    relationship: "Empleado",
    location: "CABA",
    init: "2006-06",
    end: "2006-09",
    role: "Desarrollador Delphi",
    brief: false,
    tasks: [
      { task: "Mantenimiento de ORM interno" },
      { task: "Desarrollo de nuevos módulos y reportes. Solución de errores." },
      {
        task: "Desarrollo con Delphi y MS SQL Server, Oracle, PostgreSQL & Firebird",
      },
    ],
  },
  {
    company: "Coop de Trabajo “Renacer”",
    business: "Empresa constructora",
    relationship: "Empleado",
    location: "Hurlingham",
    init: "2004",
    end: "2006",
    role: "Arquitecto / Desarrollador Delphi & PHP / administrador de redes",
    brief: false,
    tasks: [
      {
        task: "Diseño y desarrollo de sistema de control de obra.",
      },
      { task: "Calculadora de costo de obra online" },
      {
        task: "Implementación de Intranet: file server, SQL server, proxy, firewall + traffic-shaping",
      },
      { task: "Desarrollo con Delphi, PHP, MySQL y PostgreSQL" },
    ],
  },
  {
    company: "Grisbill SA",
    business: "Fábrica de sabores y perfumes",
    relationship: "Freelance",
    location: "Vicente Lopez",
    init: "2002",
    end: "2004",
    role: "Desarrollador Delphi y Clipper / Administrador de redes",
    brief: false,
    tasks: [
      {
        task: "Migración de software DOS (Clipper) a Windows (Delphi 3-tier)",
      },
      { task: "Migración de dominio NT4 a Windows 2000 ActiveDirectory" },
      {
        task: "Implementación de VPN y VoIP con la planta de Brasil, usando software libre",
      },
    ],
  },
  {
    company: "LaserSystems",
    business: "Soluciones industriales con laser y automatización",
    relationship: "Empleado",
    location: "Vicente Lopez",
    init: "2001",
    end: "2002",
    role: "Desarrollador / Project Leader",
    brief: false,
    tasks: [
      {
        task: "Diseño y desarrollo de un sistema para la manufactura de medicamentos con captura de imágenes y análisis en tiempo real",
      },
    ],
  },
  {
    company: "Microprot SA",
    business: "Internet Development",
    relationship: "Dueño",
    location: "CABA",
    init: "2000",
    end: "2002",
    role: "Network administrator / Project Leader / Delphi desarrollador",
    brief: false,
    tasks: [
      {
        task: "Diseño y desarrollo de productos online: NavCash, MP3Sherlock, discador FullZero, sistema de mensajería instantánea",
      },
      { task: "Servidores Cross-platform para todos nuestros productos" },
      {
        task: "Desarrollo de aplicaciones Flash para el estado [educ.ar]",
      },
      { task: "desarrollo Delphi, GCC, MySQL y PostgreSQL." },
    ],
  },
  {
    company: "SINC SRL",
    business: "Consultoría de Software",
    relationship: "Empleado",
    location: "CABA",
    init: "1999",
    end: "2000",
    role: " Desarrollador BASIC - Delphi / Soporte Novell Netware",
    brief: false,
    tasks: [
      { task: "Migración de sistemas QB / Btrieve a <Y2K ready>." },
      {
        task: "Administración y soporte de redes Novell Netware de clientes",
      },
      {
        task: "Migración de sistemas DOS (QB/Btrieve) a Windows (Delphi/PervasiveSQL)",
      },
    ],
  },
  {
    company: "Advanced Stead Information",
    business: "Consultoría de Comercio Exterior",
    relationship: "Empleado",
    location: "CABA",
    init: "1997",
    end: "1998",
    role: "Desarrollador Delphi / Lider de Proyecto / Administrador de redes",
    brief: false,
    tasks: [
      {
        task: "Diseño y desarrollo de aplicaciones Delphi + SQL Server",
      },
      { task: "Importación de datos del sistema de Aduanas MARIA" },
      { task: "Administración de dominio NT4" },
      { task: "Soporte técnico a clientes" },
    ],
  },
  {
    company: "Producciones Digitales SH",
    business: "Consultoría de Imagen - Estudio Multimedia",
    relationship: "Freelance",
    location: "CABA",
    init: "1995",
    end: "1999",
    role: "Desarrollador Delphi - Macromedia Director",
    brief: false,
    tasks: [
      { task: "Desarrollo de CD-ROM institucionales" },
      { task: "Desarrollo de sitios web" },
      { task: "Implementación de Intranets corporativas" },
    ],
  },
  {
    company: "AICON SRL",
    business: "Estudio de diseño 3D y postproducción",
    relationship: "Freelance",
    location: "CABA",
    init: "1996",
    end: "1999",
    role: "Desarrollador / Administrador de redes",
    brief: false,
    tasks: [
      { task: "Administrador de redes NT y SGI (Silicon Graphics)" },
      { task: "Desarrollo de plugins para Maya y 3DStudio MAX" },
      { task: "Desarrollo de páginas web Flash" },
      {
        task: "Proyecto: Animadora de programas de TV virtual con OpenGL en real-time",
      },
    ],
  },
  {
    company: "PUBLIRED Multimedia SA",
    business: "Consultoría de Publicidad y Multimedia",
    relationship: "Empleado",
    location: "CABA",
    init: "1995",
    end: "1997",
    role: "CTO / Desarrollador Delphi / Director de R&D",
    brief: false,
    tasks: [
      {
        task: "Desarrollo de puesto de autoconsulta, instalado en Spinetto Shopping Center, Nine Center y COTO C.I.C.S.A (Suc. Sarandí)",
      },
      {
        task: "Desarrollo de Mensajería Instantánea en Windows 95 con Winsock",
      },
      { task: "Investigación de TAPI, Voice Recognition, DirectX y OpenGL" },
      { task: "Motor 3D para paseo virtual por Shopping (FPS, árboles BSP)" },
    ],
  },
  {
    company: "DIGIOFTALMO SA",
    business: "Productos de Oftalmologia",
    relationship: "Empleado",
    location: "CABA",
    init: "1991",
    end: "1995",
    role: "Desarrollador BASIC, C, Turbo Pascal / Lider de Proyecto",
    brief: false,
    tasks: [
      {
        task: "Desarrollo de sistema de digitalización de RFG (Angiografía con Fluorescencia)",
      },
      {
        task: "Desarrollo de sistema de topografía de cornea para diseño de lentes de contacto rígidas",
      },
    ],
  },
  {
    company: "IAC - Instituto Argentino de Computación",
    business: "Educación IT",
    relationship: "Empleado",
    location: "San Justo",
    init: "1991",
    end: "1991",
    role: "Profesor",
    brief: false,
    tasks: [{ task: "Profesor de BASIC / BASIC Avanzado" }],
  },
];

// i18n
const messages = {
  es: {
    msg: {
      personalInfo: "Información Personal",
      name: "Nombre",
      cv: "CV actualizado",
      calendar: "Programar una reunión",
      cellPhone: "Celular",
      langs: "Idiomas",
      langENG: "Inglés:",
      langSPA: "Español: Nativo",
      goalTitle: "Objetivos",
      goal: "Mi objetivo es crecer profesionalmente y desempeñarme de forma óptima en la labor que se me asigne.",
      aboutTitle: "Acerca de mi",
      about:
        "Soy autodidacta. Poseo flexibilidad y ansia de conocimiento, aprender nuevas tecnologías es un reto apasionante. Disfruto resolviendo problemas. Tengo experiencia y facilidad para transmitir mis conocimientos a los demás. A nivel intelectual y profesional estoy capacitado para dar respuesta a cualquier requerimiento que se presente. A nivel personal soy una persona carismática de trato agradable, que disfruta de un buen ambiente de trabajo.",
      briefButton: "Resumido",
      detailButton: "Detallado",
      techKnowledgeTitle: "Conocimientos Técnicos",
      techKnowledgeLabels: {
        company: "Empresa",
        tool: "Herramienta",
        level: "Nivel",
        years: "Años",
      },
      xpTitle: "Experiencia Laboral",
      xps: xps_es,
    },
  },
  en: {
    msg: {
      personalInfo: "Personal Information",
      name: "Name",
      cv: "Updated CV",
      calendar: "Schedule a meeting",
      cellPhone: "Cell Phone",
      langs: "Languages",
      langENG: "English:",
      langSPA: "Spanish: Native",
      goalTitle: "Goals",
      goal: "I want to advance my career by constantly training myself and doing my best in every task that is assigned to me.",
      aboutTitle: "About me",
      about:
        "I am self-taught. I crave knowledge, learning new technologies is an exciting challenge. I do enjoy problem-solving. As an experienced teacher, it is easy for me to pass my knowledge to others. At an intellectual and professional level, I am qualified to respond to any requirement that may arise. On a personal level, I am a charismatic person with pleasant treatment, who enjoys a good working environment.",
      briefButton: "Brief",
      detailButton: "Detailed",
      techKnowledgeTitle: "Technical Knowledge",
      techKnowledgeLabels: {
        company: "Company",
        tool: "Tool",
        level: "Level",
        years: "Years",
      },
      xpTitle: "Work Experience",
      xps: xps_en,
    },
  },
};

// vue app

const i18n = VueI18n.createI18n({
  locale: "en",
  fallbackLocale: "es",
  messages,
});

const { createApp } = Vue;

var app = createApp({
  data() {
    return {
      toolsbrief: false,
      xpbrief: false,
      tools: tools_en,
      locale: "en",
    };
  },
  methods: {
    changeLocale(val) {
      this.$i18n.locale = val;
      this.locale = val;
    },
  },
});

app.use(i18n);

// vue components
app.component("knowledge-item", {
  props: ["tool", "pbrief"],
  template: `
    <div v-show="tool.brief || pbrief" class="row row-cols-4 py-1">
      <div class="col-3">{{ tool.company }}</div>
      <div class="col-xs-6 col-sm-6">{{ tool.name }}</div>
      <div class="col-2">{{ tool.lvl }}</div>
      <div class="col-1 text-center">{{ tool.years }}</div>
    </div>
    `,
});

app.mount("#cv");
