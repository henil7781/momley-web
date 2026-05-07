import PediatricHero from '../components/sections/PediatricHero';
import PediatricImpactBar from '../components/sections/PediatricImpactBar';
import PediaAbout from '../components/sections/PediaAbout';
import PediaMilestoneSection from '../components/sections/PediaMilestoneSection';
import PediaCleanLabel from '../components/sections/PediaCleanLabel';
import PediaProductSection from '../components/sections/PediaProductSection';
import PediaFAQSection from '../components/sections/PediaFAQSection';
import PediaBlogSection from '../components/sections/PediaBlogSection';
import CTASection from '../components/sections/CTASection';

const Pedia = () => {
    return (
        <div className="bg-white">
            <PediatricHero />
            <PediatricImpactBar />
            <PediaAbout />
            <PediaMilestoneSection />
            <PediaCleanLabel />
            <PediaProductSection />
            <PediaBlogSection />
            <PediaFAQSection />
            <CTASection />
        </div>
    );
};

export default Pedia;
