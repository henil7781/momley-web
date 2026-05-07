export interface Product {
  id: string;
  name: string;
  category: 'Pediatrics' | 'Maternal' | 'Gastro' | 'Neonatal' | 'Gynaecology';
  type: 'Syrup' | 'Drops' | 'Tablets' | 'Sachet' | 'Injection' | 'Ampoule' | 'Granules' | 'Capsules' | 'Suspension';
  description: string;
  composition: string;
  indications: string;
  storage: string;
  image: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'kidk10',
    name: 'Kidk10 Vitamin K1',
    category: 'Pediatrics',
    type: 'Ampoule',
    description: 'When Emergency Crises... Quality Uncompromised. Vitamin K1 injection for Hypo-prothrombinemia management.',
    composition: 'Phytomenadione Injection BP (10mg/1ml Ampoule)',
    indications: 'Hypo-prothrombinemia due to: Antibacterial therapy, Anticoagulant therapy, Liver & Intestinal Disorders.',
    storage: 'Protect from light. Do not freeze.',
    image: '/Products/Kidk10.png',
    tags: ['Auto Cut Ampoule', 'Natural Form', 'Safe in G6PD Deficient', 'For IM/IV Use']
  },
  {
    id: 'kidk1',
    name: 'Kidk1 Vitamin K1',
    category: 'Neonatal',
    type: 'Ampoule',
    description: 'Vitamin K1 the Best One. Specialized for prevention of Vitamin K Deficiency Bleeding (VKDB) in newborns.',
    composition: 'Phytomenadione 1mg/0.5 ml Ampoule',
    indications: '1 Amp IM immediately after birth for prevention of VKDB. 1 Amp IM every week for NICU admitted babies.',
    storage: 'Protect from light. Do not freeze.',
    image: '/Products/Kidk1.png',
    tags: ['Safe in G6PD Deficient', 'Natural Form', 'Fat Soluble', 'Auto Cut Ampoule', 'IM Use Only']
  },
  {
    id: 'labetancy-200',
    name: 'Labetancy 200',
    category: 'Gynaecology',
    type: 'Tablets',
    description: 'Appropriate and Safe Antihypertensive with Dual Control. Labetalol oral dose is the most appropriate to maximize efficacy and tolerability during pregnancy.',
    composition: 'Labetalol Hydrochloride I.P. 200 mg Tablet',
    indications: 'Pregnancy Induced Hypertension (PIH), Pre-eclampsia, Eclampsia, Hypertensive Crisis.',
    storage: 'Dosage: 1 Tablet BID. Maintenance Dose is 200-400 mg BID Per day.',
    image: '/Products/labatancy-200.png',
    tags: ['Safe in Pregnancy', 'Dual Control', 'Antihypertensive']
  },
  {
    id: 'labetancy-inj',
    name: 'Labetancy Injection',
    category: 'Gynaecology',
    type: 'Injection',
    description: 'Quick Response in Hypertensive Emergencies. Suited For Switch Over Therapy.',
    composition: 'Labetalol Hydrochloride I.P. 5mg/ml, 4ml Ampoule',
    indications: 'Hypertensive Crisis, Pre-eclampsia, Eclampsia.',
    storage: 'Initial Dosage: I.V. 0.25mg/kg Body Weight. Slow I.V. in 2 Minutes keeping patient in supine position.',
    image: '/Products/Labatancy-inj.png',
    tags: ['Hypertensive Emergencies', 'For IV Use Only', 'Switch Over Therapy']
  },
  {
    id: 'momleylact',
    name: 'Momleylact',
    category: 'Maternal',
    type: 'Granules',
    description: 'For Safe & Sure Lactation. Improves Quality & Quantity of Mother\'s Milk. WHO Recommends Exclusive Breastfeeding up to 6 months.',
    composition: 'Shatavari, Jivanti, Methi, Kokam, Yastimadhu, Godantibhasma, Vidarikand, Suva',
    indications: 'Initiate Lactation, Enrich Milk, Sustain Lactation.',
    storage: 'Granules Dosage: 1 Tablespoonful BID with milk for 10 days.',
    image: '/Products/Momleylact.png',
    tags: ['Lactation Care', 'Chocolate Flavour', 'Ayurvedic Proprietary Medicine']
  },
  {
    id: 'momleylact-capsules',
    name: 'Momleylact Capsules',
    category: 'Maternal',
    type: 'Capsules',
    description: 'For Safe & Sure Lactation. Improves Quality & Quantity of Mother\'s Milk. WHO Recommends Exclusive Breastfeeding up to 6 months.',
    composition: 'Shatavari, Jivanti, Methi, Kokam, Yastimadhu, Godantibhasma, Vidarikand, Suva',
    indications: 'Initiate Lactation, Enrich Milk, Sustain Lactation.',
    storage: 'Dosage: 2 Capsule BID for 10 days.',
    image: '/Products/MomleyLact-capsule.png',
    tags: ['Lactation Care', 'Ayurvedic Proprietary Medicine']
  },
  {
    id: 'lipofez',
    name: 'LipoFez Suspension',
    category: 'Maternal',
    type: 'Suspension',
    description: 'Stress-free iron supplement. Faster Hb Level with Less Dose, Better Absorption, 4x Bioavailability, No GI Upset, and Zero Metallic Taste.',
    composition: 'Liposomal Iron (LipoBoost™) (As Ferric Pyrophosphate), Vitamin B12 (Cyanocobalamin), Folic Acid & Zinc Sulphate',
    indications: 'Supports Haemoglobin & Red Blood Cells formation. Prevention and treatment of Iron Deficiency.',
    storage: 'Store in a cool, dry place. 150ml bottle.',
    image: '/Products/Lepofez.png',
    tags: ['Tamarind Flavour', 'Liposomal Iron', 'Zero Metallic Taste', 'No GI Upset']
  },
  {
    id: 'rebly-dsr',
    name: 'Rebly DSR Capsule',
    category: 'Gastro',
    type: 'Capsules',
    description: 'Better Control with Excellent Safety. Rabeprazole ensures irreversible inhibition of Acid Secretion, while Domperidone provides Prokinetic and Anti-emetic properties.',
    composition: 'Rabeprazole 20 mg + Domperidone 30 mg Sustained Release Capsule',
    indications: 'Drug Induced Acidity, Erosive Esophagitis, Hyperacidity, GERD.',
    storage: 'Dosage: Adult & Adolescent 12 Yrs. 1 Capsule once daily before the meal.',
    image: '/Products/Rabley-dsr.png',
    tags: ['Sustained Release', 'Anti-emetic', 'Acid Secretion Control']
  },
  {
    id: 'kidzine-af',
    name: 'Kidzine AF',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Say Goodbye to Cough, Cold & Congestion. Clears Nose, Controls Cough, Relieves Allergy, and Restores Comfort & Breathing.',
    composition: 'Phenylephrine Hydrochloride & Chlorpheniramine Maleate Syrup',
    indications: 'Stop Sneezing, Control Wheezing, Cough, Cold & Congestion.',
    storage: '60 ml bottle. Best-in-class Taste.',
    image: '/Products/Kidzine-af.png',
    tags: ['Orange Flavour', 'Cold & Congestion', 'Allergy Relief']
  },
  {
    id: 'kidzine-syrup',
    name: 'Kidzine Syrup',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Allergy Restrict Ease in Breathing. Restores Ease In Breathing.',
    composition: 'Levocetirizine Dihydrochloride Syrup (Levocetirizine 2.5 mg / 5 ml, 60ml Syrup)',
    indications: 'Hay Fever, Seasonal Allergic Rhinitis, Perennial Allergic Rhinitis, Recurrent case of Allergy, Urticaria.',
    storage: '60 ml bottle.',
    image: '/Products/Kidzine-syrup.png',
    tags: ['Ripe Mango Flavour', 'Allergy Relief', 'Restores Breathing']
  },
  {
    id: 'kid-lc',
    name: 'Kid LC Tablet',
    category: 'Pediatrics',
    type: 'Tablets',
    description: 'Significant Relief in Allergic Rhinitis. Tiny tablet with No Metallic Taste and No Bitterness. Mouth Dissolving & Dispersible Kid Tablet.',
    composition: 'Levocetirizine 2.5 mg + Montelukast 4 mg Dispersible Kid Tablet',
    indications: 'Recurrent case of Allergy, Seasonal Allergic Rhinitis, Perennial Allergic Rhinitis, Itchy Throat & Nose, Urticaria.',
    storage: 'Store in a cool, dry place. 10 x 10 Tablets.',
    image: '/Products/KidLC.png',
    tags: ['Strawberry Flavour', 'Mouth Dissolving', 'Dispersible']
  },
  {
    id: 'kidzine-tablet',
    name: 'Kidzine Tablet',
    category: 'Pediatrics',
    type: 'Tablets',
    description: 'Significant Relief in Allergic Rhinitis. Tiny tablet with No Metallic Taste and No Bitterness. Mouth Dissolving & Dispersible Tablet.',
    composition: 'Levocetirizine Dihydrochloride Tablet (Levocetirizine 5mg Tablet)',
    indications: 'Hay Fever, Seasonal Allergic Rhinitis, Perennial Allergic Rhinitis, Recurrent case of Allergy, Urticaria.',
    storage: 'Store in a cool, dry place. 10 x 10 Tablets.',
    image: '/Products/Kidzine-Tablet.png',
    tags: ['Orange Flavour', 'Mouth Dissolving', 'Dispersible', 'Tiny Tablet']
  },
  {
    id: 'dualflora-gg',
    name: 'Dual Flora GG',
    category: 'Gastro',
    type: 'Sachet',
    description: 'One Solution For Multiple Complications. Clinically Proven Probiotic Strain with a Faster Mouth Melt Formula.',
    composition: 'Lactobacillus Rhamnosus GG (ATCC 53103) Stick',
    indications: 'Various Diarrheal Conditions, Boost Immune System, Improves Digestive System.',
    storage: 'Store in a cool, dry place. 10 x 1g Sticks.',
    image: '/Products/DualFlora-gg.png',
    tags: ['Vanilla Flavour', 'Sugar Free', 'Mouth Melt Formula', 'Probiotic']
  },
  {
    id: 'dualflora-suspension',
    name: 'Dual Flora Suspension',
    category: 'Gastro',
    type: 'Suspension',
    description: 'Support GI Flora Balance. Ready to Drink Probiotics Supplement.',
    composition: 'Bacillus Clausii 2 Billion Spores & Bacillus Subtilis 1 Billion Spores, 5ml',
    indications: 'Boost Immune System, Maintain Digestive Health, Antibiotic Associate Diarrhea, Works as an Antioxidant.',
    storage: 'Store in a cool place. For Oral Use. 5 Mini Bottles of 5ml each.',
    image: '/Products/DualFlora Suspension.png',
    tags: ['Sugar Free', 'Ready to Drink', 'Probiotics', 'Spore Suspension']
  },
  {
    id: 'momtus-dx',
    name: 'Momtus-Dx',
    category: 'Maternal',
    type: 'Syrup',
    description: 'Safe Cough Silencer. Alleviate Dry & Allergic Cough.',
    composition: 'Dextromethorphan 15 mg + Chlorpheniramine Maleate 2 mg + Phenylephrine 5mg/5ml',
    indications: 'Cough associated with URTIs, Dry & Irritating Cough, Smokers Cough.',
    storage: 'Store in a cool, dry place. 100ml Syrup.',
    image: '/Products/Momtus.png',
    tags: ['Sugar Free', 'Strawberry Flavour', 'Dry Cough', 'Cough Silencer']
  },
  {
    id: 'kidzine-m',
    name: 'Kidzine M Syrup',
    category: 'Pediatrics',
    type: 'Syrup',
    description: 'Improves Allergic Symptoms. Improves the Quality of Life.',
    composition: 'Levocetirizine 2.5mg + Montelukast 4mg/5ml Syrup',
    indications: 'Hay Fever, Asthma Symptoms, Urticaria, Skin Allergic.',
    storage: 'Store in a cool, dry place. 60 ml bottle.',
    image: '/Products/Kidzine-M.png',
    tags: ['Allergy Relief', 'Asthma Symptoms', 'Quality of Life']
  },
  {
    id: 'momxaa-syrup',
    name: 'MomXaa Syrup',
    category: 'Gastro',
    type: 'Syrup',
    description: 'A Natural Way to Cure GI Disorders with Safety in mind.',
    composition: 'Ayurvedic Proprietary Medicine',
    indications: 'Improves Digestive System, Increases Appetizer, Removes Chronic Constipation.',
    storage: 'Dosage: 5ml Twice (2-5 Yrs), 10-15ml Twice (5-12 Yrs), 15-20ml Twice (Above 12 Yrs). 200 ml bottle.',
    image: '/Products/Momxaa.png',
    tags: ['Jeera Masala Soda Flavour', 'Sugar Free', 'Ayurvedic']
  },
  {
    id: 'mvit-d3',
    name: 'MVIT D3 Sachet',
    category: 'Pediatrics',
    type: 'Sachet',
    description: 'One Solution for Multiple Complications. Resolves Vitamin D3 Deficiency and Restores Vitamin D3 Level Rapidly.',
    composition: 'Vitamin D3 60000 IU (As Cholecalciferol) Granules',
    indications: 'Muscle weakness, Osteomalacia, Rickets, Delayed teething, Optimum bone health, and other VDD conditions.',
    storage: 'Dosage: 1 Sachet Once in week for 3-4 months. 1 gm x 10 Sachets.',
    image: '/Products/Mvit-D3.png',
    tags: ['Orange Flavour', 'Sugar Free', 'Vitamin D3']
  }
];
