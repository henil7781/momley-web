import * as lucide from 'lucide-react';
const keys = Object.keys(lucide);
console.log('Facebook:', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('Instagram:', keys.filter(k => k.toLowerCase().includes('instagram')));
console.log('Linkedin:', keys.filter(k => k.toLowerCase().includes('linkedin')));
console.log('MapPin:', keys.filter(k => k.toLowerCase().includes('mappin') || k.toLowerCase().includes('map')));
console.log('ArrowUpRight:', keys.filter(k => k.toLowerCase().includes('arrowupright')));
