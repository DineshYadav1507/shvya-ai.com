// Centralized product dataset for both pages.
const SHVYA_PRODUCTS = [
  {
    id: 'crm',
    name: 'Shvya CRM',
    category: 'Sales',
    badge: 'Lead Automation',
    pitch: 'Capture, automate & convert leads from all sources.',
    subtitle: 'No lead slips through the cracks—ever.',
    problem: 'Leads slip through cracks, replies are delayed, and marketing ROI vanishes.',
    benefits: [
      'Omnichannel capture (forms, WhatsApp, calls, FB/IG/WA)',
      'Email/WhatsApp sequences & reminders',
      'Sales pipeline, quotes & invoices',
      'Reports & dashboards'
    ],
    outcomes: [
      'More conversations, more conversions',
      'Zero lost leads',
      'Predictable revenue'
    ],
    cover: 'assets/img/crm/cover.jpg',
    images: [
      'assets/img/crm/1.jpg',
      'assets/img/crm/2.jpg',
      'assets/img/crm/3.jpg'
    ],
    tags: ['CRM', 'Automation', 'Leads']
  },
  {
    id: 'inventory',
    name: 'Shvya Inventory System',
    category: 'Operations',
    badge: 'Realtime Stock',
    pitch: 'Track items in real time & prevent stockouts.',
    subtitle: 'Smarter purchasing with accurate forecasts.',
    problem: 'Stockouts, over-purchasing, and blind spots from manual spreadsheets.',
    benefits: [
      'Real-time item tracking & multi-warehouse',
      'Auto stock update on sales/returns',
      'Reorder alerts & purchase planning'
    ],
    outcomes: ['Zero wastage', 'On-time replenishment', 'Lower carrying cost'],
    cover: 'assets/img/inventory/cover.jpg',
    images: [
      'assets/img/inventory/1.jpg',
      'assets/img/inventory/2.jpg',
      'assets/img/inventory/3.jpg'
    ],
    tags: ['Inventory', 'Procurement']
  },
  {
    id: 'school-erp',
    name: 'Shvya School ERP',
    category: 'Education',
    badge: 'End-to-End',
    pitch: 'Digitalize admissions, attendance, exams & fees.',
    subtitle: 'More focus on education, less admin.',
    problem: 'Schools juggle data across many tools; nothing stays in sync.',
    benefits: [
      'Student records & admissions',
      'Attendance, exams & results',
      'Fees, transport, hostel'
    ],
    outcomes: ['Unified data', 'Parent transparency', 'Time saved'],
    cover: 'assets/img/school/cover.jpg',
    images: ['assets/img/school/1.jpg','assets/img/school/2.jpg','assets/img/school/3.jpg'],
    tags: ['ERP', 'Education']
  },
  {
    id: 'hospital-erp',
    name: 'Shvya Hospital ERP',
    category: 'Healthcare',
    badge: 'Integrated',
    pitch: 'Unify patients, diagnostics, pharmacy & billing.',
    subtitle: 'Better coordination, faster service.',
    problem: 'Departments don’t talk; patient data is fragmented.',
    benefits: [
      'OPD/IPD, appointments & EMR',
      'Lab/Radiology integrations',
      'Pharmacy & billing'
    ],
    outcomes: ['Happier patients', 'Lower errors', 'Faster TAT'],
    cover: 'assets/img/hospital/cover.jpg',
    images: ['assets/img/hospital/1.jpg','assets/img/hospital/2.jpg','assets/img/hospital/3.jpg'],
    tags: ['ERP', 'Healthcare']
  },
  {
    id: 'restaurant-erp',
    name: 'Shvya Restaurant ERP',
    category: 'F&B',
    badge: 'POS + KDS',
    pitch: 'POS to kitchen, fully synced in real time.',
    subtitle: 'No chaos. No confusion. Smooth service.',
    problem: 'Missed orders and disconnected kitchens.',
    benefits: [
      'POS & Kitchen Display System',
      'Menu, tables, delivery integrations',
      'Inventory + billing sync'
    ],
    outcomes: ['Faster service', 'Zero order loss', 'Cost control'],
    cover: 'assets/img/restaurant/cover.jpg',
    images: ['assets/img/restaurant/1.jpg','assets/img/restaurant/2.jpg','assets/img/restaurant/3.jpg'],
    tags: ['POS', 'ERP']
  },
  {
    id: 'hrm-payroll',
    name: 'Shvya HRM + Payroll',
    category: 'HR',
    badge: '100% Compliance',
    pitch: 'Automate attendance, payroll & tax filing.',
    subtitle: '100% accuracy, 0% stress.',
    problem: 'Attendance errors, salary delays, compliance headaches.',
    benefits: [
      'Roster, leave & biometric/geo attendance',
      'Payroll rules, TDS/ESI/EPF, payslips',
      'Self-service portal'
    ],
    outcomes: ['On-time payroll', 'Audit-ready', 'Happier staff'],
    cover: 'assets/img/hr/cover.jpg',
    images: ['assets/img/hr/1.jpg','assets/img/hr/2.jpg','assets/img/hr/3.jpg'],
    tags: ['HR', 'Payroll']
  },
  {
    id: 'billing',
    name: 'Shvya Smart Billing',
    category: 'Finance',
    badge: 'GST-Ready',
    pitch: 'One-click GST-compliant invoices & instant reports.',
    subtitle: 'Faster billing, smoother cash flow.',
    problem: 'Manual billing wastes hours and causes errors.',
    benefits: [
      'GST invoicing & e-way bill support',
      'Payments & reconciliation',
      'Reports and dashboards'
    ],
    outcomes: ['Fewer errors', 'Faster collections', 'Better visibility'],
    cover: 'assets/img/billing/cover.jpg',
    images: ['assets/img/billing/1.jpg','assets/img/billing/2.jpg','assets/img/billing/3.jpg'],
    tags: ['Billing', 'GST']
  },
  {
    id: 'geofencing',
    name: 'Shvya Geofencing System',
    category: 'Field',
    badge: 'Real-time',
    pitch: 'Track field staff with real-time geo check-ins.',
    subtitle: 'Transparency without micromanagement.',
    problem: 'No way to verify on-site presence.',
    benefits: [
      'Live location & auto check-ins',
      'Task & visit proofs (photo, notes)',
      'Productivity analytics'
    ],
    outcomes: ['Accountability', 'Trust', 'Higher output'],
    cover: 'assets/img/geo/cover.jpg',
    images: ['assets/img/geo/1.jpg','assets/img/geo/2.jpg','assets/img/geo/3.jpg'],
    tags: ['Tracking', 'Field']
  },
  {
    id: 'ai',
    name: 'Shvya AI',
    category: 'Automation',
    badge: '24×7',
    pitch: 'AI WhatsApp, email & voice follow-ups — never lose a lead.',
    subtitle: '2× faster response. 3× higher conversions.',
    problem: 'Leads turn cold before your team replies.',
    benefits: [
      'AI WhatsApp journeys & auto replies',
      'Lead qualification & routing',
      'Email + voice + CRM sync'
    ],
    outcomes: ['Instant response', 'Higher conversions', 'Zero missed leads'],
    cover: 'assets/img/ai/cover.jpg',
    images: ['assets/img/ai/1.jpg','assets/img/ai/2.jpg','assets/img/ai/3.jpg'],
    tags: ['AI', 'Automation']
  }
];
