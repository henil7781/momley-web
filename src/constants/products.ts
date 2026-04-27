export interface Product {
  id: string;
  name: string;
  category: 'Pediatrics' | 'Maternal' | 'Gastro' | 'Neonatal';
  type: 'Syrup' | 'Drops' | 'Tablets' | 'Sachet';
  description: string;
  composition: string;
  indications: string;
  storage: string;
  image: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'kidzine-af',
    name: 'Kidzine AF',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Advanced pediatric allergy and congestion relief.',
    composition: 'Each 5ml contains: Phenylephrine HCl 5mg, Chlorpheniramine Maleate 2mg.',
    indications: 'Relief of nasal congestion, sneezing, and running nose.',
    storage: 'Store below 30°C. Protect from light.',
    image: '/home/product_section/Kidzine.png',
    tags: ['Sugar-Free', 'WHO-GMP']
  },
  {
    id: 'kid-lc',
    name: 'Kid-LC',
    category: 'Neonatal',
    type: 'Drops',
    description: 'Precision metabolic support for neonatal health.',
    composition: 'L-Carnitine & Essential Amino Acid Complex.',
    indications: 'Nutritional support for low birth weight and metabolic efficiency.',
    storage: 'Cool, dry place. Do not freeze.',
    image: '/home/product_section/KidLc.png',
    tags: ['Neonatal Safety', 'Clinical Grade']
  },
  {
    id: 'momleylact',
    name: 'Momley-Lact',
    category: 'Maternal',
    type: 'Sachet',
    description: 'Specialized nutritional support for nursing mothers.',
    composition: 'Galactagogue blend with Asparagus racemosus, Fenugreek, and micronutrients.',
    indications: 'Support during lactation, improving milk quality and mother’s energy.',
    storage: 'Store in a cool, dry place. Professional use only.',
    image: '/home/product_section/Momleylact.png',
    tags: ['Maternal Wellness', 'Natural Blend']
  },
  {
    id: 'rabley-dsr',
    name: 'Rabley-DSR',
    category: 'Gastro',
    type: 'Tablets',
    description: 'Advanced acid reflux and digestive support.',
    composition: 'Rabeprazole Sodium 20mg & Domperidone 30mg (Sustained Release).',
    indications: 'Gastro-esophageal reflux disease (GERD) and peptic ulcers.',
    storage: 'Keep in a moisture-protected container.',
    image: '/home/product_section/RableyDSR.png',
    tags: ['Sustained Release', 'High Efficacy']
  },
  {
    id: 'neonatal-d3',
    name: 'NeoD3 Drops',
    category: 'Neonatal',
    type: 'Drops',
    description: 'Pure Vitamin D3 for bone development in infants.',
    composition: 'Cholecalciferol 400 IU per ml.',
    indications: 'Vitamin D deficiency and rickets prevention in neonates.',
    storage: 'Room temperature. Do not refrigerate.',
    image: '/home/product_section/NeoD3.jpg',
    tags: ['Bone Health', 'Easy Dosing']
  },
  {
    id: 'momley-vit',
    name: 'Momley-Vit Premix',
    category: 'Maternal',
    type: 'Tablets',
    description: 'Complete prenatal and postnatal multivitamin.',
    composition: 'Multivitamin & Multimineral complex specifically for pregnancy.',
    indications: 'Nutritional gaps during pregnancy and lactation.',
    storage: 'Below 25°C.',
    image: '/home/product_section/MomleyVit.jpg',
    tags: ['Prenatal Care', 'Essential Vitamins']
  },
  {
    id: 'gastraf-gel',
    name: 'GastraF Gel',
    category: 'Gastro',
    type: 'Syrup',
    description: 'Fast-acting antacid gel for instant relief.',
    composition: 'Magaldrate and Simethicone oral suspension.',
    indications: 'Hyperacidity, heartburn, and gas.',
    storage: 'Shake well before use.',
    image: '/home/product_section/GastraF.jpg',
    tags: ['Instant Action', 'Sugar-Free']
  },
  {
    id: 'pediaplex',
    name: 'PediaPlex',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Appetite stimulant and nutritional supplement for growing kids.',
    composition: 'Cyproheptadine & B-Complex vitamins.',
    indications: 'Loss of appetite and poor weight gain in children.',
    storage: 'Cool, dark place.',
    image: '/home/product_section/PediaPlex.jpg',
    tags: ['Growth Support', 'Kid-Friendly Flavor']
  },
  {
    id: 'neo-breathe',
    name: 'NeoBreathe',
    category: 'Neonatal',
    type: 'Drops',
    description: 'Gentle nasal relief for the youngest patients.',
    composition: 'Sodium Chloride (Saline) 0.65% w/v.',
    indications: 'Dry or stuffy nasal passages in infants.',
    storage: 'Recap after use.',
    image: '/home/product_section/NeoBreathe.jpg',
    tags: ['Sterile', 'Gentle Care']
  },
  {
    id: 'moms-cal',
    name: 'Moms-Cal D3',
    category: 'Maternal',
    type: 'Tablets',
    description: 'Calcium and Vitamin D3 for maternal bone density.',
    composition: 'Calcium Carbonate 500mg, Vitamin D3 250 IU.',
    indications: 'Osteoporosis prevention and calcium needs during pregnancy.',
    storage: 'Protect from sunlight.',
    image: '/home/product_section/MomsCal.jpg',
    tags: ['Bone Density', 'Absorption Optimized']
  },
  {
    id: 'ped-zinc',
    name: 'Ped-Zinc Sachet',
    category: 'Pediatrics',
    type: 'Sachet',
    description: 'Zinc supplement for pediatric recovery.',
    composition: 'Zinc Gluconate 20mg.',
    indications: 'To be used as an adjunct to ORS in diarrhea management.',
    storage: 'Dry place.',
    image: '/home/product_section/PedZinc.jpg',
    tags: ['WHO Recommended', 'Immunity']
  },
  {
    id: 'gastrotrol',
    name: 'GastroTrol',
    category: 'Gastro',
    type: 'Tablets',
    description: 'Probiotic and prebiotic for gut health.',
    composition: 'Lactobacillus, Bifidobacterium, and FOS.',
    indications: 'Restoring gut flora during antibiotic use.',
    storage: 'Refrigeration recommended after opening.',
    image: '/home/product_section/GastroTrol.jpg',
    tags: ['Probiotic', 'Digestive Health']
  },
  {
    id: 'momley-iron',
    name: 'Momley-Iron XT',
    category: 'Maternal',
    type: 'Tablets',
    description: 'Haematinic support for anemia prevention.',
    composition: 'Ferrous Ascorbate and Folic Acid.',
    indications: 'Iron deficiency anemia during pregnancy.',
    storage: 'Below 30°C.',
    image: '/home/product_section/MomleyIron.jpg',
    tags: ['Blood Build', 'Low GI Side-effects']
  },
  {
    id: 'pedia-probio',
    name: 'Pedia-Probio',
    category: 'Pediatrics',
    type: 'Sachet',
    description: 'Infant-specific probiotic for digestive comfort.',
    composition: 'Bifidobacterium infantis.',
    indications: 'Colic and digestive discomfort in infants.',
    storage: 'Store in a cool place.',
    image: '/home/product_section/PediaProbio.jpg',
    tags: ['Colic Relief', 'Natural Flora']
  },
  {
    id: 'zymo-drop',
    name: 'Zymo-Drop',
    category: 'Neonatal',
    type: 'Drops',
    description: 'Digestive enzyme drops for newborns.',
    composition: 'Fungal Diastase and Pepsin.',
    indications: 'Indigestion and griping pain in newborns.',
    storage: 'Discard 30 days after opening.',
    image: '/home/product_section/ZymoDrop.jpg',
    tags: ['Digestive Enzyme', 'Safe']
  },
  {
    id: 'moms-protein',
    name: 'Moms-Protein Plus',
    category: 'Maternal',
    type: 'Sachet',
    description: 'High-protein supplement with DHA.',
    composition: 'Milk Protein, DHA, and Essential Minerals.',
    indications: 'Extra nutritional needs during third trimester.',
    storage: 'Airtight container.',
    image: '/home/product_section/MomsProtein.jpg',
    tags: ['DHA Rich', 'High Protein']
  },
  {
    id: 'gastrosed',
    name: 'GastroSed',
    category: 'Gastro',
    type: 'Syrup',
    description: 'Antispasmodic for pediatric stomach pain.',
    composition: 'Dicyclomine HCl & Simethicone.',
    indications: 'Infantile colic and abdominal pain.',
    storage: 'Protect from freezing.',
    image: '/home/product_section/GastroSed.jpg',
    tags: ['Relief', 'Antispasmodic']
  },
  {
    id: 'pedia-cef',
    name: 'Pedia-Cef Dry Syrup',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Broad-spectrum antibiotic for pediatric infections.',
    composition: 'Cefixime Oral Suspension.',
    indications: 'Bacterial infections of ear, nose, throat, and lungs.',
    storage: 'Reconstitute with sterile water. Use within 7 days.',
    image: '/home/product_section/PediaCef.jpg',
    tags: ['Broad Spectrum', 'Clinical Trust']
  },
  {
    id: 'neo-iron',
    name: 'NeoIron Drops',
    category: 'Neonatal',
    type: 'Drops',
    description: 'Iron supplement for premature infants.',
    composition: 'Ferro-salts specialized for low birth weight.',
    indications: 'Prevention of anemia of prematurity.',
    storage: 'Tight containers.',
    image: '/home/product_section/NeoIron.jpg',
    tags: ['Neonatal Specialty', 'High Absorption']
  },
  {
    id: 'momley-omega',
    name: 'Momley-Omega',
    category: 'Maternal',
    type: 'Tablets',
    description: 'Omega-3 fatty acids for fetal brain development.',
    composition: 'EPA and DHA from high-purity fish oil.',
    indications: 'Brain and eye development of the fetus.',
    storage: 'Away from heat.',
    image: '/home/product_section/MomleyOmega.jpg',
    tags: ['Brain Health', 'Purity Tested']
  }
];
