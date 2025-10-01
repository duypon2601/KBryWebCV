import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import AboutMeSection from './screens/Frame/sections/AboutMeSection/AboutMeSection';
import Portfolio from './screens/Frame/sections/Portfolio/Portfolio';
import AboutMe from './screens/Frame/sections/AboutMe/AboutMe';
import Journey from './screens/Frame/sections/Journey/Journey';
import Connect from './screens/Frame/sections/Connect';
import { EditProvider } from './contexts/EditContext';
import EditModeToggle from './components/EditModeToggle';
import { initializeSupabaseStorage } from './utils/initSupabase';
import { useEffect } from 'react';

const { Content } = Layout;

function App() {
  useEffect(() => {
    // Khởi tạo Supabase Storage khi app load
    initializeSupabaseStorage();
  }, []);

  return (
    <EditProvider>
      <Layout className="app-layout">
        <Header />
        <Content style={{ marginTop: '64px' }}>
          <Routes>
            <Route index element={<AboutMeSection />} />
            <Route path="/about" element={<AboutMeSection />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </Content>
        <EditModeToggle />
      </Layout>
    </EditProvider>
  )
}

export default App
