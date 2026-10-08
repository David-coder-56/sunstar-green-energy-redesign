export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'paygo' | 'panels' | 'batteries' | 'inverters' | 'pumps';
  brand: string;
  powerOutput: string;
  description: string;
  features: string[];
  includes: string[];
  paygoRate?: string;
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'commercial' | 'health' | 'agriculture';
  capacity: string;
  fuelSavings: string;
  description: string;
  image: string;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'paygo' | 'pricing' | 'technical';
}

export const COMPANY_INFO = {
  name: "Sun Star Green Energy",
  legalName: "Sun Star Green Energy Inc. Liberia",
  tagline: "Empowering Liberia & West Africa with Sustainable Solar Energy",
  phonePrimary: "+231 07781 58517",
  phoneSecondary: "+231 77 815 8517",
  email: "contact@sunstargreenenergy.com",
  address: "Joebar, Paynesville, Montserrado County, Liberia",
  hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
  whatsapp: "231778158517",
  stats: {
    installedCapacity: "4.8 MW+",
    homesPowered: "1,250+",
    fuelSavedAnnual: "$480,000+",
    co2Reduced: "3,600 Tons",
    customerSatisfaction: "99.4%"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-solar",
    title: "Residential Solar Systems",
    shortDesc: "Complete turn-key solar power solutions for Liberian homes. Enjoy 24/7 electricity without noisy, expensive diesel generators.",
    fullDesc: "Our residential solar systems are custom engineered to handle Liberia's tropical climate and varying power demands. From powering essential lighting, refrigeration, fans, and televisions to running full HVAC systems and deep freezers, we eliminate your dependence on unstable grid power and high generator fuel costs.",
    iconName: "Home",
    features: [
      "Zero generator noise & zero carbon emissions",
      "High-efficiency monocrystalline solar panels with 25-year warranty",
      "Long-life Lithium LiFePO4 battery banks (6,000+ cycle life)",
      "Smart automatic switchover between Solar, Battery, LEC Grid & Generator",
      "Mobile app monitoring for live battery & consumption tracking"
    ],
    idealFor: "Homeowners in Monrovia, Paynesville, Kakata, Buchanan, and across Montserrado.",
    badge: "Most Popular"
  },
  {
    id: "commercial-solar",
    title: "Commercial & Industrial Solar",
    shortDesc: "Scalable high-capacity solar installations for businesses, offices, schools, hospitals, hotels, and industrial facilities.",
    fullDesc: "Electricity overhead is one of the single largest operating costs for Liberian businesses. Sun Star Green Energy designs heavy-duty 3-phase commercial solar micro-grids ranging from 10kW to 250kW+. Cut operational overhead by up to 80% while ensuring uninterrupted business continuity.",
    iconName: "Building2",
    features: [
      "Custom 3-Phase hybrid and off-grid inverter architecture",
      "Peak-shaving technology to maximize solar use during business hours",
      "Industrial LiFePO4 rack-mounted energy storage solutions",
      "Preventative maintenance SLA & 24/7 technical field support in Liberia",
      "Significant ROI with payback period often under 24–36 months"
    ],
    idealFor: "Supermarkets, Health Clinics, Hotels, NGO Offices, Schools, and Factories.",
    badge: "High ROI"
  },
  {
    id: "equipment-sales",
    title: "Solar Equipment Wholesale & Sales",
    shortDesc: "Direct wholesale distribution of tier-1 solar panels, pure sine wave hybrid inverters, lithium batteries, and MPPT controllers.",
    fullDesc: "We import and distribute certified solar equipment from global tier-1 manufacturers. Every component is rigorously tested for high heat, humidity, and coastal salt-spray resistance typical of West African coastal regions.",
    iconName: "ShoppingBag",
    features: [
      "Tier-1 Monocrystalline Solar Panels (450W - 650W)",
      "Hybrid Solar Inverters (1.5kW to 15kW, expandable in parallel)",
      "Lithium Iron Phosphate (LiFePO4) & High-Capacity Gel Batteries",
      "Heavy-duty aluminum mounting structures & UV-rated PV cables",
      "Bulk ordering discounts & local Liberian warranty replacement support"
    ],
    idealFor: "Local installers, contractors, electrical stores, and DIY enthusiasts.",
  },
  {
    id: "installation-maintenance",
    title: "Solar Installation & Preventative Maintenance",
    shortDesc: "Certified professional installation by trained Liberian solar engineers with comprehensive after-sales maintenance contracts.",
    fullDesc: "A solar system is only as good as its installation. Our team of certified electrical engineers performs meticulous site surveys, shading analyses, load calculations, and code-compliant electrical wiring to ensure maximum safety and system longevity.",
    iconName: "Wrench",
    features: [
      "Comprehensive site survey & roof structural assessment",
      "Surge protection, lightning arrestors & grounding grid installation",
      "Quarterly panel cleaning & electrical inspection packages",
      "Battery state-of-health diagnostics & thermal testing",
      "Rapid emergency field dispatch within Montserrado County"
    ],
    idealFor: "Existing solar owners looking for system optimization or new installations."
  },
  {
    id: "mysol-paygo",
    title: "MySol PAYGo Solar Home Systems",
    shortDesc: "Pay-As-You-Go flexible payment plans for rural & urban households. Small daily/weekly mobile money payments.",
    fullDesc: "In partnership with leading solar home kit manufacturers, our MySol PAYGo range makes clean energy accessible to every Liberian. Starting from compact 10W kits to 200W multi-appliance systems, pay via MTN Mobile Money or Orange Money in affordable installments.",
    iconName: "Zap",
    features: [
      "Zero large upfront payment required",
      "Includes ultra-bright LED bulbs, phone charging cables & solar panel",
      "Higher tier kits include Solar TV, DC Fan, and Rechargeable Radio",
      "Pay conveniently via Lonestar MTN Mobile Money or Orange Money",
      "Full ownership after completing payment term"
    ],
    idealFor: "Off-grid homes, rural communities, small shops, and budget-conscious families.",
    badge: "Flexible Payment"
  },
  {
    id: "minigrid-infrastructure",
    title: "Mini-Grids & Off-Grid Rural Infrastructure",
    shortDesc: "Community-scale solar micro-grids bringing reliable electrification to remote towns and agricultural settlements.",
    fullDesc: "We partner with government agencies, NGOs, and international development organizations to deploy community mini-grids across rural Liberia. Empowering local economies, agricultural processing, and community centers with clean power.",
    iconName: "Sun",
    features: [
      "Community mini-grid design with smart metering systems",
      "Solar powered agricultural water pumping & crop irrigation",
      "Street lighting & public market solar installations",
      "Local community technician training & capacity building"
    ],
    idealFor: "Townships, Agricultural Cooperatives, NGOs, and Municipal projects."
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "mysol-spark-rural",
    name: "MySol Spark Rural Energy Kit (10W - 30W)",
    category: "paygo",
    brand: "Spark Rural Energy / MySol",
    powerOutput: "10W - 30W Solar Panel",
    description: "Compact solar kit ideal for lighting up 3-4 rooms and charging all mobile phones in the household.",
    features: ["4x High-Lumen LED Bulbs with switches", "Multi-head USB phone charger", "Compact Lithium-ion battery unit", "Integrated solar torch & ambient light"],
    includes: ["30W Solar Panel", "4 LED Bulbs", "Phone Charging Cable", "Control Unit"],
    paygoRate: "$0.50 / day (LRD 100/day via Mobile Money)",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=600",
    badge: "Best Seller PAYGo"
  },
  {
    id: "mysol-engie-access",
    name: "Engie Access Solar Home System (50W - 100W)",
    category: "paygo",
    brand: "Engie Access Energy",
    powerOutput: "80W Solar Panel + 12.8V Lithium Battery",
    description: "Powerful home system designed for entertainment and comfort, featuring a 24-inch HD Solar TV and standing fan.",
    features: ["24\" Ultra-low power HD LED TV", "6x Bright LED bulbs", "Rechargeable Solar Standing Fan", "Digital FM/AM Radio with Bluetooth speaker"],
    includes: ["80W Solar Panel", "24\" Solar TV", "Standing Fan", "6 Bulbs", "Radio"],
    paygoRate: "$1.20 / day (LRD 240/day via Mobile Money)",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
    badge: "Includes Solar TV"
  },
  {
    id: "mysol-biolite-200",
    name: "BioLite Energy Max Solar System (150W - 200W)",
    category: "paygo",
    brand: "BioLite Energy",
    powerOutput: "200W High Efficiency Solar Panel",
    description: "Premium solar home system capable of powering lights, 32-inch Solar TV, fan, and small DC refrigerator or freezer.",
    features: ["32\" HD Smart Solar TV", "DC Energy-Efficient Refrigerator ready", "8x Dimmable LED Overhead Lights", "Dual High-Speed USB Fast Chargers"],
    includes: ["200W Solar Panel", "32\" Solar TV", "8 Light Fixtures", "Control Console"],
    paygoRate: "$2.50 / day (LRD 500/day via Mobile Money)",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=600",
    badge: "Ultimate Comfort"
  },
  {
    id: "panel-mono-550w",
    name: "SunStar Tier-1 Monocrystalline Panel 550W",
    category: "panels",
    brand: "Jinko / Longi Solar (Tier-1 Certified)",
    powerOutput: "550 Watts (21.5% Module Efficiency)",
    description: "High-efficiency PERC half-cut cell solar panel engineered for heat tolerance and high humidity climates.",
    features: ["25-Year Linear Power Output Warranty", "Anti-PID & Anti-Salt Mist corrosion protection", "Heavy-duty anodized aluminum alloy frame", "MC4 compatible IP68 junction box"],
    includes: ["550W Solar Panel", "Factory Quality Certificate"],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "battery-lifepo4-48v",
    name: "SunStar Lithium LiFePO4 Wall-Mounted Battery 10kWh",
    category: "batteries",
    brand: "SunStar Smart Energy",
    powerOutput: "51.2V 200Ah (10.24 kWh Usable Energy)",
    description: "Premium grade Lithium Iron Phosphate energy storage system with built-in smart BMS, touchscreen display, and 6,000+ cycle life.",
    features: ["15-Year Expected Service Lifespan", "Built-in Active Balancing Smart BMS", "Parallel connection up to 16 units (160kWh)", "RS485 & CAN communication with top inverters"],
    includes: ["10kWh LiFePO4 Battery", "Wall Mount Bracket", "Battery Cables"],
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600",
    badge: "15-Year Life"
  },
  {
    id: "inverter-hybrid-5kw",
    name: "SunStar Pure Sine Wave Hybrid Inverter 5.5kW / 48V",
    category: "inverters",
    brand: "SunStar Power Systems",
    powerOutput: "5500W Continuous / 11,000W Surge",
    description: "All-in-one smart hybrid solar inverter with integrated 100A MPPT solar charge controller and automatic generator auto-start.",
    features: ["Pure Sine Wave AC Output", "Supports Lithium & Gel battery profiles", "Dual AC output management for non-critical load shedding", "Built-in Wi-Fi monitoring module"],
    includes: ["5.5kW Inverter", "Wi-Fi Dongle", "User Manual"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Duport Road Executive Residence Solar Power",
    location: "Duport Road, Paynesville, Montserrado",
    category: "residential",
    capacity: "8.5 kW Solar + 15 kWh Lithium Bank",
    fuelSavings: "$320 / month saved in generator diesel",
    description: "Full residential off-grid system replacing a 12kVA diesel generator. Powers 2 air conditioners, deep freezer, double door fridge, water pump, security cameras, and home lighting continuously.",
    image: "/solar.jpg",
    year: "2025"
  },
  {
    id: "proj-2",
    title: "Gbarnga Community Health Clinic Power Grid",
    location: "Gbarnga, Bong County",
    category: "health",
    capacity: "25 kW Commercial Solar + 40 kWh Energy Storage",
    fuelSavings: "$1,100 / month saved & zero blackout risk",
    description: "Critical emergency power installation for maternal ward, vaccine cold-storage refrigerators, surgical lighting, and administrative computers.",
    image: "/WhatsApp-Image-2025-06-11-at-12.01.55-e1750946928792.jpeg",
    year: "2024"
  },
  {
    id: "proj-3",
    title: "Joebar Commercial Shopping Complex Solar System",
    location: "Joebar, Paynesville",
    category: "commercial",
    capacity: "35 kW 3-Phase Hybrid System",
    fuelSavings: "$1,650 / month saved across 12 business tenants",
    description: "Turn-key rooftop solar power plant supplying stable power to retail shops, pharmacy, printing hub, and executive offices.",
    image: "/b.jpg",
    year: "2025"
  },
  {
    id: "proj-4",
    title: "Buchanan Agricultural Farm Solar Pumping Station",
    location: "Buchanan, Grand Bassa County",
    category: "agriculture",
    capacity: "12 kW Solar Array + 15HP Submersible Solar Pump",
    fuelSavings: "100% elimination of petrol water pump fuel",
    description: "Solar powered drip irrigation and livestock water supply system delivering over 45,000 Liters of water daily.",
    image: "/energy.jpg",
    year: "2024"
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Dr. Emmanuel K. Kollie",
    role: "Medical Director, Hope Health Clinic",
    location: "Paynesville, Liberia",
    quote: "Before Sun Star Green Energy installed our 25kW solar system, our clinic spent over $1,200 monthly on generator diesel and faced frequent vaccine spoilage during blackouts. Now we have 24/7 uninterrupted power for surgery and cold storage. Their team in Joebar is exceptionally professional.",
    rating: 5,
    system: "25kW Clinic Solar Grid"
  },
  {
    name: "Clarice N. Dennis",
    role: "Homeowner & Business Executive",
    location: "Duport Road, Montserrado",
    quote: "Switching my home to Sun Star Green Energy was the single best financial decision I made last year. No more fumes, no more waking up at 2 AM to put diesel in the generator. My light is on constantly!",
    rating: 5,
    system: "8.5kW Residential System"
  },
  {
    name: "Josephus B. Tarpeh",
    role: "Supermarket Proprietor",
    location: "Monrovia, Liberia",
    quote: "Our deep freezers stay ice cold 24 hours a day without blowing our operating budget. The return on investment is undeniable. I highly recommend Sun Star Green Energy to every business in West Africa.",
    rating: 5,
    system: "15kW Commercial Solar"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: "general",
    question: "Where is Sun Star Green Energy located in Liberia?",
    answer: "Our main office, showroom, and service center is located in Joebar, Paynesville, Montserrado County, Liberia (near Duport Road junction). You are welcome to visit our showroom Monday through Saturday from 9:00 AM to 6:00 PM to inspect live solar panels, inverters, and battery systems."
  },
  {
    category: "general",
    question: "How does solar power compare financially to running a diesel generator in Liberia?",
    answer: "Running a 5kVA–10kVA diesel generator in Liberia typically costs between $300 to $800+ per month in fuel and engine maintenance. A quality solar system pays for itself completely within 18 to 36 months, after which your electricity is essentially FREE for the remaining 20+ years of panel life!"
  },
  {
    category: "paygo",
    question: "What is MySol PAYGo and how do the payment plans work?",
    answer: "MySol PAYGo (Pay-As-You-Go) allows you to get a complete solar home system (panels, lights, TV, fan, radio) with zero high upfront barrier. You make small daily or weekly payments using Lonestar MTN Mobile Money or Orange Money. Once the system term is completed, the solar equipment belongs to you 100%."
  },
  {
    category: "technical",
    question: "Will solar panels work effectively during Liberia's rainy season?",
    answer: "Yes! Modern high-efficiency Monocrystalline solar panels harvest both direct sunlight and diffuse ambient daylight. Even on overcast or rainy days in Liberia, solar panels continue generating 25% to 60% of their rated output. Combined with our high-capacity Lithium battery reserves, your system provides uninterrupted 24/7 power year-round."
  },
  {
    category: "pricing",
    question: "Does Sun Star Green Energy offer warranties on products and installations?",
    answer: "Absolutely. Our solar panels carry a 25-year linear performance warranty. Our Lithium LiFePO4 batteries come with up to 5–10 years warranty, and our hybrid inverters come with a 2-year warranty. We also provide free routine inspection for the first 12 months after installation."
  },
  {
    category: "pricing",
    question: "How do I get a custom price quote for my house or business?",
    answer: "You can use our online Interactive Solar Savings & Calculator on this website, click 'Request a Quote' on any page, or call our direct phone line at +231 07781 58517 / +231 77 815 8517. Our engineers will perform a quick load audit and provide a transparent, itemized quote."
  }
];
