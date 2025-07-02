import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import RecordedCoursesSection from '../components/RecordedCoursesSection';
import StorySection from '../components/StorySection';
import CertificatesSection from '../components/CertificatesSection';
import TrustSection from '../components/TrustSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PopularCoursesSection />
      <RecordedCoursesSection />
      <StorySection />
      <CertificatesSection />
      <TrustSection />
    </div>
  );
};

export default HomePage;