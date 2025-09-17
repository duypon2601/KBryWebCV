import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import { AboutMeSection } from './screens/Frame/sections/AboutMeSection/AboutMeSection';
import Portfolio from './screens/Frame/sections/Portfolio/Portfolio';
import AboutMe from './screens/Frame/sections/AboutMe/AboutMe';
import Journey from './screens/Frame/sections/Journey/Journey';
import Connect from './screens/Frame/sections/Connect';

const { Content } = Layout;

function App() {
  return (
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
    </Layout>
  )
}

export default App
