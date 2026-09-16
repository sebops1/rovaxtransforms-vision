export type Solution = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "enterprise-it-cloud",
    name: "Enterprise IT & Cloud",
    short: "Resilient infrastructure, cloud architecture and modern networks.",
    tagline: "Infrastructure that stays up, scales and costs what it should.",
    intro:
      "RovaX designs, migrates and operates the infrastructure organizations depend on every day — from cloud landing zones and hybrid data centres to campus networks and disaster recovery.",
    capabilities: [
      "Cloud architecture and migration",
      "AWS and Azure solutions",
      "Hybrid infrastructure design",
      "Server and virtualization solutions",
      "Microsoft environments (Entra ID, Microsoft 365, Windows Server)",
      "LAN/WAN networking",
      "Enterprise Wi-Fi",
      "Backup and disaster recovery",
      "Infrastructure monitoring",
      "Managed IT services",
      "IT modernization roadmaps",
    ],
    outcomes: [
      "Reduced unplanned downtime through monitored, documented infrastructure",
      "Predictable cloud consumption with right-sized architecture",
      "Recovery objectives defined, tested and evidenced",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Compliance",
    short: "Assess, harden, monitor and evidence your security posture.",
    tagline: "Security considered at every layer of the solution lifecycle.",
    intro:
      "We help organizations understand their exposure, close the gaps that matter first, and maintain visibility of what is happening across users, endpoints, networks, cloud and data.",
    capabilities: [
      "Security assessments",
      "Vulnerability management",
      "Identity and access management",
      "Multi-factor authentication",
      "SIEM and security monitoring",
      "Endpoint security",
      "Network security",
      "Cloud security",
      "Security architecture",
      "Risk and compliance support",
      "Security monitoring and incident visibility",
    ],
    outcomes: [
      "A prioritised, costed remediation roadmap instead of a raw scan report",
      "Central visibility of identity, endpoint and network events",
      "Evidence packs that support audit, regulator and board reporting",
    ],
  },
  {
    slug: "digital-transformation-ai",
    name: "Digital Transformation, Software & AI",
    short: "Custom software, workflow automation, analytics and AI assistance.",
    tagline: "From paper and spreadsheets to real-time management intelligence.",
    intro:
      "RovaX replaces manual, paper-driven processes with digital workflows that capture data once, route it automatically, and surface it to management as decision-ready intelligence.",
    capabilities: [
      "Custom web applications",
      "Mobile applications",
      "Enterprise workflow automation",
      "Digital approval systems",
      "Procurement and requisition workflows",
      "ERP/CRM integration",
      "Executive dashboards",
      "Business intelligence",
      "Data analytics",
      "API integrations",
      "AI-assisted automation",
      "Intelligent reporting",
      "Document digitization",
      "Process automation",
    ],
    outcomes: [
      "Approval cycles measured in hours instead of weeks",
      "A single source of truth replacing disconnected spreadsheets",
      "Full audit history for every request, approval and document",
    ],
  },
  {
    slug: "fintech",
    name: "FinTech & Digital Financial Solutions",
    short: "Payment, banking and identity integration engineered securely.",
    tagline: "Building the infrastructure for digital finance.",
    intro:
      "RovaX is a technology integrator and solution provider for financial environments. We build, integrate and support digital financial technology — we are not a bank, a licensed payment provider or a regulated financial institution.",
    capabilities: [
      "Digital financial platforms",
      "Payment-system integrations",
      "Banking API integrations",
      "Digital payment workflows",
      "Merchant payment solutions",
      "KYC/eKYC workflow integration",
      "Financial process automation",
      "Transaction reconciliation",
      "Financial dashboards",
      "Fraud and risk analytics",
      "Identity and access security",
      "Digital lending workflow solutions",
      "Mobile financial solutions",
      "Financial-system integration",
      "Cybersecurity for financial environments",
    ],
    outcomes: [
      "Reconciliation automated against source systems",
      "Customer onboarding digitised end to end with KYC checkpoints",
      "Channel and transaction performance visible to management daily",
    ],
  },
  {
    slug: "smart-infrastructure-iot",
    name: "Smart Infrastructure, IoT & OT",
    short: "Fleet, fuel, sensors, cameras, cabling and connected sites.",
    tagline: "Know where your assets are. Know how they're performing.",
    intro:
      "We connect vehicles, equipment, sensors and sites into one operational picture — then turn that telemetry into alerts, reports and executive dashboards.",
    capabilities: [
      "GPS fleet tracking",
      "Fuel monitoring",
      "IoT sensors",
      "Asset tracking",
      "Geofencing",
      "Heavy-equipment monitoring",
      "Driver and route monitoring",
      "Fleet analytics",
      "CCTV",
      "Dash cameras",
      "Access control",
      "Fibre-optic networks",
      "Structured cabling",
      "Enterprise Wi-Fi",
      "Smart-site infrastructure",
      "Industrial monitoring",
      "Executive operational dashboards",
    ],
    outcomes: [
      "Fuel variance detected and investigated within the same day",
      "Utilisation data that supports fleet and equipment investment decisions",
      "Connected remote sites with monitored links and cameras",
    ],
  },
  {
    slug: "managed-services",
    name: "Managed Services & Technical Support",
    short: "Monitoring, maintenance and a support team that stays.",
    tagline: "Technology that keeps performing long after go-live.",
    intro:
      "Installation is the beginning. RovaX provides ongoing monitoring, preventive maintenance and responsive support under clear service commitments.",
    capabilities: [
      "Remote IT support",
      "On-site technical support",
      "Network monitoring",
      "Cloud monitoring",
      "Infrastructure management",
      "Device monitoring",
      "Preventive maintenance",
      "Helpdesk",
      "System health monitoring",
      "Security updates",
      "Backup monitoring",
      "Managed cybersecurity",
      "Application support",
    ],
    outcomes: [
      "Issues detected by monitoring before users report them",
      "Documented estate, patch status and backup verification",
      "A long-term technology partner rather than a one-off vendor",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  problems: string[];
  featured: boolean;
};

export const industries: Industry[] = [
  {
    slug: "government",
    name: "Government & Public Sector",
    summary:
      "Digitise service delivery, connect institutions and give leadership real visibility of performance.",
    problems: [
      "Workflow digitization",
      "Document management",
      "System integration",
      "Executive dashboards",
      "Infrastructure modernization",
      "Cybersecurity",
      "Citizen-service technology",
    ],
    featured: true,
  },
  {
    slug: "banking-finance",
    name: "Banking & Financial Services",
    summary:
      "Secure, monitored infrastructure and integration engineering for regulated financial environments.",
    problems: [
      "Secure infrastructure",
      "Digital workflows",
      "FinTech integrations",
      "Cybersecurity",
      "Data analytics",
      "Executive visibility",
      "Cloud and disaster recovery",
    ],
    featured: true,
  },
  {
    slug: "mining",
    name: "Mining",
    summary:
      "Connect remote sites, protect fuel and equipment, and give head office a live operational picture.",
    problems: [
      "Fleet visibility",
      "Fuel-loss monitoring",
      "Heavy-equipment tracking",
      "Site connectivity",
      "CCTV",
      "IoT",
      "Asset management",
      "Operational dashboards",
    ],
    featured: true,
  },
  {
    slug: "logistics",
    name: "Logistics & Transportation",
    summary:
      "Track every vehicle and consignment, control fuel, and measure service performance objectively.",
    problems: [
      "GPS fleet tracking",
      "Route and driver monitoring",
      "Fuel efficiency",
      "Geofencing and delivery confirmation",
      "Dash cameras",
      "Fleet analytics",
      "Maintenance scheduling",
    ],
    featured: true,
  },
  {
    slug: "utilities",
    name: "Utilities & Water",
    summary:
      "Monitor distributed assets, digitise field operations and reduce technical and commercial losses.",
    problems: [
      "Remote asset monitoring",
      "Field workforce digitization",
      "SCADA and OT network security",
      "Outage and incident reporting",
      "Metering data integration",
      "Operational dashboards",
    ],
    featured: true,
  },
  {
    slug: "ports-maritime",
    name: "Ports & Maritime",
    summary: "Yard visibility, gate control, connectivity and surveillance across terminal operations.",
    problems: [
      "Terminal connectivity and Wi-Fi",
      "Equipment and asset tracking",
      "Access control and CCTV",
      "Gate and documentation workflows",
      "Operational reporting",
    ],
    featured: false,
  },
  {
    slug: "construction",
    name: "Construction",
    summary: "Site connectivity, plant tracking and digital approvals across dispersed projects.",
    problems: [
      "Heavy-equipment tracking",
      "Fuel monitoring",
      "Temporary site networks",
      "Site CCTV and access control",
      "Digital requisition and approval workflows",
    ],
    featured: false,
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary: "Infrastructure, monitoring and field systems supporting network operations.",
    problems: [
      "Fibre and structured cabling",
      "Site monitoring and alarms",
      "Field workforce applications",
      "Network security",
      "Operations dashboards",
    ],
    featured: false,
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Reliable clinical networks, secure records handling and digital administrative workflows.",
    problems: [
      "Facility networking and Wi-Fi",
      "Records digitization",
      "Access control and data protection",
      "System integration",
      "Reporting for management and funders",
    ],
    featured: false,
  },
  {
    slug: "education",
    name: "Education",
    summary: "Campus connectivity, digital administration and secure access for staff and students.",
    problems: [
      "Campus networks and Wi-Fi",
      "Student and administrative systems",
      "Identity and access management",
      "Computer lab infrastructure",
      "Cloud collaboration environments",
    ],
    featured: false,
  },
  {
    slug: "ngos-development",
    name: "NGOs & Development Organizations",
    summary: "Field data capture, donor-grade reporting and secure multi-location operations.",
    problems: [
      "Field data collection",
      "Programme and M&E dashboards",
      "Multi-site connectivity",
      "Fleet and asset tracking",
      "Document and approval workflows",
    ],
    featured: false,
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    summary: "Connected estates, equipment monitoring and operational data for agribusiness.",
    problems: [
      "Estate connectivity",
      "Equipment and vehicle tracking",
      "Environmental IoT sensors",
      "Stock and asset management",
      "Operational reporting",
    ],
    featured: false,
  },
  {
    slug: "corporate-smes",
    name: "Corporate & SMEs",
    summary: "Practical, well-supported IT for growing organizations without an internal IT department.",
    problems: [
      "Managed IT and helpdesk",
      "Cloud email and collaboration",
      "Backup and recovery",
      "Cybersecurity essentials",
      "Business process automation",
    ],
    featured: false,
  },
];

export type Scenario = {
  slug: string;
  title: string;
  challenge: string;
  solution: string;
  technology: string[];
  outcome: string;
};

export const scenarios: Scenario[] = [
  {
    slug: "smart-fleet-operations",
    title: "Smart Fleet Operations",
    challenge:
      "A distributed fleet operates across remote sites with no reliable view of location, fuel consumption or driver behaviour, and fuel variances are only discovered at month end.",
    solution:
      "GPS trackers and fuel-level sensors are deployed across vehicles and plant, geofences are defined around sites and depots, and telemetry is centralised into a monitoring platform with alerting and a management dashboard.",
    technology: ["GPS telematics", "Fuel-level sensors", "Geofencing", "Alerting engine", "Analytics dashboard"],
    outcome:
      "Fuel variance can be investigated within hours rather than weeks, and utilisation data supports objective fleet decisions.",
  },
  {
    slug: "digital-procurement-workflow",
    title: "Digital Procurement Workflow",
    challenge:
      "Requisitions move as paper forms between departments. Requests are lost, approval status is unknown, and there is no audit trail.",
    solution:
      "A role-based digital requisition system captures requests with attachments, routes them through department, technical, management and finance approval, notifies each approver, and records a complete audit history.",
    technology: ["Custom web application", "Role-based access control", "Email/SMS notifications", "Document storage", "Reporting module"],
    outcome:
      "Approval cycle time becomes measurable and controllable, and every decision is evidenced for audit.",
  },
  {
    slug: "executive-operations-center",
    title: "Executive Operations Center",
    challenge:
      "Leadership receives operational information through separate spreadsheets from several departments, days after the fact.",
    solution:
      "RovaX integrates source systems through APIs and scheduled pipelines into a consolidated data layer, then publishes a curated executive dashboard with defined metrics and drill-down.",
    technology: ["API integrations", "Data pipelines", "Business intelligence layer", "Executive dashboard"],
    outcome:
      "One agreed set of numbers, refreshed continuously, available to leadership on desktop and mobile.",
  },
  {
    slug: "secure-enterprise-infrastructure",
    title: "Secure Enterprise Infrastructure",
    challenge:
      "An organization has grown faster than its infrastructure: flat networking, inconsistent identity, unverified backups and no security monitoring.",
    solution:
      "Network segmentation, centralised identity with MFA, endpoint protection, tested backup and recovery, and a monitoring stack feeding a security visibility dashboard.",
    technology: ["Segmented networking", "Identity platform with MFA", "Endpoint protection", "Backup and DR", "SIEM monitoring"],
    outcome:
      "Exposure is reduced measurably and security posture becomes reportable to the board.",
  },
  {
    slug: "digital-financial-integration",
    title: "Digital Financial Integration",
    challenge:
      "A financial institution needs to connect a new customer channel to core systems, payment rails and identity verification without weakening security.",
    solution:
      "RovaX designs a secure integration layer with authenticated APIs, KYC workflow checkpoints, transaction logging, reconciliation automation and an operations dashboard — implementing regulated platform components through established technology partners.",
    technology: ["Banking APIs", "Payment integrations", "eKYC workflow", "Reconciliation engine", "Monitoring and analytics"],
    outcome:
      "A supportable, auditable integration layer between the institution's channels and its core systems.",
  },
  {
    slug: "smart-utility-monitoring",
    title: "Smart Utility Monitoring",
    challenge:
      "Distributed utility assets are inspected manually, faults are reported late and outage data is inconsistent.",
    solution:
      "IoT sensors and connectivity are deployed to key assets, field teams capture inspections on mobile, and events flow into a monitoring platform with escalation rules and performance reporting.",
    technology: ["IoT sensors", "Field mobile application", "Connectivity and gateways", "Alerting", "Performance reporting"],
    outcome: "Faster fault detection, shorter restoration times and defensible operational reporting.",
  },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Understand the organization, problem and current environment." },
  { n: "02", title: "Design", body: "Develop architecture, scope, requirements and implementation plan." },
  { n: "03", title: "Build / Integrate", body: "Configure, develop and connect required technologies." },
  { n: "04", title: "Test", body: "Functional, security and user-acceptance testing." },
  { n: "05", title: "Deploy", body: "Controlled production rollout." },
  { n: "06", title: "Train", body: "Administrator and end-user training." },
  { n: "07", title: "Support", body: "Monitoring, maintenance, optimization and expansion." },
];

export const whyRovax = [
  {
    title: "Business-First Technology",
    body: "We begin with the operational problem, not the product.",
  },
  {
    title: "End-to-End Delivery",
    body: "Assessment, architecture, implementation, integration, training and support.",
  },
  { title: "Security by Design", body: "Security is considered throughout the solution lifecycle." },
  {
    title: "Executive Visibility",
    body: "We transform operational data into management intelligence.",
  },
  {
    title: "Flexible Architecture",
    body: "Cloud, hybrid, on-premises and field environments.",
  },
  {
    title: "Local Execution. Global Technology.",
    body: "RovaX combines local implementation capability with access to global technologies and specialist partners.",
  },
  {
    title: "Long-Term Support",
    body: "Our goal is not simply to install technology but to help keep it performing.",
  },
];

export const solutionInterestOptions = [
  "Enterprise IT & Cloud",
  "Cybersecurity",
  "Digital Transformation",
  "FinTech",
  "Fleet / IoT",
  "Infrastructure",
  "Managed Services",
  "Custom Software",
  "Technology Partnership",
  "Other",
];
