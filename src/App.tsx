import React from 'react';
import { AboutMeSection } from './screens/Frame/sections/AboutMeSection/AboutMeSection';
import { FeaturedProjectsSection } from './screens/Frame/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import Portfolio from './screens/Frame/sections/Portfolio/Portfolio';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen flex flex-row w-full overflow-x-hidden">
      {/* Sidebar (left) - always visible at left, no own scrollbars */}
      <div className="w-[300px] flex-none bg-[#151515] border-r border-[#2d2d2d] overflow-visible">
        <FeaturedProjectsSection />
      </div>
      {/* Main content (right) */}
      <div className="flex-1 min-w-0 max-w-full overflow-x-hidden">
        <Routes>
          <Route index element={<AboutMeSection />} />
          <Route path="/about" element={<AboutMeSection />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
