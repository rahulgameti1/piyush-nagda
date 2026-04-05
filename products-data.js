// ===== PRODUCT DATA =====
const PRODUCTS = [
  {
    id: 'sumo', name: 'Sumo', slug: 'sumo', series: 'Air Excel', type: 'Desert',
    tagline: 'Unleash Powerful Cooling for Large Spaces',
    description: 'The Sumo is a beast of a cooler — designed for large rooms, halls, and commercial spaces. With its massive 60L tank and high-velocity air throw, it delivers relentless cooling even in peak Indian summers. Patented honeycomb pads ensure maximum evaporation while the sturdy build guarantees years of reliable performance.',
    airflow: 3800, cooling_area: 550, tank_capacity: 60, power_consumption: 210,
    price: 8999, original_price: 10999, is_featured: true,
    features: ['High-density honeycomb cooling pads','Auto-swing louvers for wide coverage','60L large tank with water level indicator','Powerful copper-wound motor','Anti-corrosion powder-coated body','Castor wheels for easy mobility','Inverter compatible','Ice chamber for extra cooling'],
    use_cases: ['Large bedrooms', 'Living rooms', 'Shops', 'Small halls'],
    specs: { 'Air Delivery': '3800 CMH', 'Tank Capacity': '60 Litres', 'Cooling Area': 'Up to 550 sq ft', 'Power': '210 Watts', 'Noise Level': '65 dB', 'Fan Size': '18 inch', 'Body Material': 'PPCP Plastic', 'Warranty': '1 Year' }
  },
  {
    id: 'spyder', name: 'Spyder', slug: 'spyder', series: 'Onex', type: 'Tower',
    tagline: 'Sleek Design. Silent Performance.',
    description: 'The Spyder redefines what a tower cooler can be. Its aerodynamic design fits seamlessly into modern interiors while delivering surprisingly powerful airflow. With a compact footprint, built-in mosquito net, and ultra-quiet operation, the Spyder is perfect for bedrooms and personal spaces.',
    airflow: 2200, cooling_area: 300, tank_capacity: 34, power_consumption: 150,
    price: 6999, original_price: 8499, is_featured: true,
    features: ['Aerodynamic tower design','Whisper-quiet motor technology','Built-in mosquito net','4-way air deflection','Touch-panel controls','Empty tank alarm','Honeycomb cooling media','Compact footprint — fits anywhere'],
    use_cases: ['Bedrooms', 'Study rooms', 'Small offices', 'Personal use'],
    specs: { 'Air Delivery': '2200 CMH', 'Tank Capacity': '34 Litres', 'Cooling Area': 'Up to 300 sq ft', 'Power': '150 Watts', 'Noise Level': '55 dB', 'Fan Size': 'Blower type', 'Body Material': 'ABS Plastic', 'Warranty': '1 Year' }
  },
  {
    id: 'kohinoor', name: 'Kohinoor', slug: 'kohinoor', series: 'Air Excel', type: 'Desert',
    tagline: 'The Crown Jewel of Cooling',
    description: "Named after the legendary diamond, Kohinoor is our flagship premium cooler. It combines raw cooling power with elegant aesthetics — a cooler you'll be proud to show off. Triple-speed motor, wood wool + honeycomb hybrid pads, and a massive 70L tank make it the ultimate choice for no-compromise cooling.",
    airflow: 4500, cooling_area: 700, tank_capacity: 70, power_consumption: 245,
    price: 10999, original_price: 13499, is_featured: true,
    features: ['Hybrid cooling pads (Wood Wool + Honeycomb)','Triple-speed copper motor','70L extra-large water tank','Premium metallic finish body','Auto-drain for maintenance ease','Dust filter for clean airflow','Motorized louvers with wide-angle throw','Heavy-duty castor wheels'],
    use_cases: ['Large living rooms', 'Banquet halls', 'Showrooms', 'Commercial spaces'],
    specs: { 'Air Delivery': '4500 CMH', 'Tank Capacity': '70 Litres', 'Cooling Area': 'Up to 700 sq ft', 'Power': '245 Watts', 'Noise Level': '68 dB', 'Fan Size': '18 inch', 'Body Material': 'Metal + PPCP', 'Warranty': '2 Years' }
  },
  {
    id: 'table-cooler', name: 'Table Cooler', slug: 'table-cooler', series: 'Onex', type: 'Personal',
    tagline: 'Personal Cooling, Redefined',
    description: "Compact enough for your desk, powerful enough to cool your world. The Table Cooler is perfect for personal use — in your office cabin, study desk, or bedside table. Don't let its size fool you — engineered with the same cooling technology as our bigger models.",
    airflow: 1100, cooling_area: 120, tank_capacity: 10, power_consumption: 75,
    price: 2499, original_price: 3299, is_featured: false,
    features: ['Ultra-compact desktop design','Low power consumption — just 75W','3-speed control','Top-fill water tank','Lightweight & portable','USB charging port','Silent operation for focus work','Easy-clean removable filter'],
    use_cases: ['Office desk', 'Study table', 'Bedside', 'Kitchen counter'],
    specs: { 'Air Delivery': '1100 CMH', 'Tank Capacity': '10 Litres', 'Cooling Area': 'Up to 120 sq ft', 'Power': '75 Watts', 'Noise Level': '45 dB', 'Fan Size': '7 inch', 'Body Material': 'ABS Plastic', 'Warranty': '1 Year' }
  },
  {
    id: '22-commercial', name: '22-inch Commercial', slug: '22-inch-commercial', series: 'Air Excel', type: 'Commercial',
    tagline: 'Industrial-Grade Cooling for Maximum Coverage',
    description: 'Built for the toughest cooling demands. The 22-inch Commercial cooler is designed for warehouses, factories, event venues, and large commercial spaces. With industrial-grade motors and a massive 22" fan blade, it pushes air further than any domestic cooler can dream of.',
    airflow: 5500, cooling_area: 1000, tank_capacity: 100, power_consumption: 320,
    price: 13499, original_price: 15999, is_featured: true,
    features: ['22-inch industrial fan blade','100L jumbo tank','Heavy-duty copper motor','All-metal reinforced body','Continuous water supply option','Anti-rust treatment for longevity','Adjustable air louvers','Built for 24/7 operation'],
    use_cases: ['Warehouses', 'Factories', 'Wedding venues', 'Gyms', 'Large halls'],
    specs: { 'Air Delivery': '5500 CMH', 'Tank Capacity': '100 Litres', 'Cooling Area': 'Up to 1000 sq ft', 'Power': '320 Watts', 'Noise Level': '72 dB', 'Fan Size': '22 inch', 'Body Material': 'Heavy-gauge Metal', 'Warranty': '2 Years' }
  },
  {
    id: '18-diamond', name: '18-inch Diamond', slug: '18-inch-diamond', series: 'Air Excel', type: 'Premium',
    tagline: 'Premium Performance. Diamond Precision.',
    description: "The 18-inch Diamond sits at the sweet spot between power and elegance. Its diamond-cut grill design isn't just for looks — it's engineered to optimize airflow distribution. Perfect for medium to large rooms where you want serious cooling without the bulk of a commercial unit.",
    airflow: 3200, cooling_area: 450, tank_capacity: 50, power_consumption: 185,
    price: 7999, original_price: 9499, is_featured: false,
    features: ['Diamond-cut grill for optimal airflow','18-inch high-performance fan','50L tank with auto-fill option','Pre-loaded honeycomb pads','Rust-proof powder-coated body','4-speed motor control','Wide-angle swing louvers','Low maintenance design'],
    use_cases: ['Master bedrooms', 'Restaurants', 'Medium offices', 'Retail shops'],
    specs: { 'Air Delivery': '3200 CMH', 'Tank Capacity': '50 Litres', 'Cooling Area': 'Up to 450 sq ft', 'Power': '185 Watts', 'Noise Level': '62 dB', 'Fan Size': '18 inch', 'Body Material': 'PPCP + Metal', 'Warranty': '1 Year' }
  },
  {
    id: '16-regular', name: '16-inch Regular', slug: '16-inch-regular', series: 'Onex', type: 'Standard',
    tagline: 'The Everyday Essential',
    description: "Reliable, efficient, and built for daily Indian summers. The 16-inch Regular is the cooler every home needs — it does exactly what you expect, beautifully. No frills, just dependable cooling at a price that makes sense.",
    airflow: 2500, cooling_area: 350, tank_capacity: 40, power_consumption: 160,
    price: 5499, original_price: 6499, is_featured: false,
    features: ['16-inch efficient fan blade','40L tank capacity','Inverter-compatible motor','Easy-fill water inlet','Swing function for wide coverage','Rust-resistant body panels','Overload protection','Simple rotary controls'],
    use_cases: ['Bedrooms', 'Small living rooms', 'Home offices', 'Hostels'],
    specs: { 'Air Delivery': '2500 CMH', 'Tank Capacity': '40 Litres', 'Cooling Area': 'Up to 350 sq ft', 'Power': '160 Watts', 'Noise Level': '58 dB', 'Fan Size': '16 inch', 'Body Material': 'PPCP Plastic', 'Warranty': '1 Year' }
  },
  {
    id: '12-wheel', name: '12-inch Wheel', slug: '12-inch-wheel', series: 'Onex', type: 'Compact',
    tagline: 'Compact. Mobile. Cool Everywhere.',
    description: "The smallest member of our family packs a real punch. Mounted on smooth-rolling wheels, the 12-inch Wheel goes wherever you need it — kitchen to bedroom, living room to balcony. Ideal for small spaces and renters who need flexible cooling.",
    airflow: 1800, cooling_area: 200, tank_capacity: 22, power_consumption: 110,
    price: 3299, original_price: 4199, is_featured: false,
    features: ['Smooth-rolling castor wheels','Ultra-compact form factor','22L efficient water tank','Honeycomb cooling pads','Low energy consumption','Carry handles for portability','3-speed settings','Anti-skid base pads'],
    use_cases: ['Small bedrooms', 'PG rooms', 'Kitchen', 'Rental apartments'],
    specs: { 'Air Delivery': '1800 CMH', 'Tank Capacity': '22 Litres', 'Cooling Area': 'Up to 200 sq ft', 'Power': '110 Watts', 'Noise Level': '50 dB', 'Fan Size': '12 inch', 'Body Material': 'ABS Plastic', 'Warranty': '1 Year' }
  }
];

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug || p.id === slug);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.is_featured);
}

function filterProducts({ series, type, maxPrice, sortBy }) {
  let result = [...PRODUCTS];
  if (series) result = result.filter(p => p.series === series);
  if (type) result = result.filter(p => p.type === type);
  if (maxPrice && maxPrice < 15000) result = result.filter(p => p.price <= maxPrice);
  switch (sortBy) {
    case 'price-asc': result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'airflow': result.sort((a, b) => b.airflow - a.airflow); break;
    case 'cooling': result.sort((a, b) => b.cooling_area - a.cooling_area); break;
    default: result.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0) || a.price - b.price);
  }
  return result;
}
