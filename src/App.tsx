import { AboutMeSection } from './screens/Frame/sections/AboutMeSection/AboutMeSection'
import { FeaturedProjectsSection } from './screens/Frame/sections/FeaturedProjectsSection/FeaturedProjectsSection'

function App() {
  return (
    <div style={{ backgroundColor: '#1e1e1e', minHeight: '100vh', display: 'flex' }}>
      <div style={{ width: '300px', flexShrink: 0 }}>
        <FeaturedProjectsSection />
      </div>
      <div style={{ flex: 1 }}>
        <AboutMeSection />
      </div>
    </div>
  )
}

export default App
