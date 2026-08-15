import { Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import ToolsPage from './components/pages/ToolsPage.jsx'
import ToolDetail from './components/tools/ToolDetail.jsx'
import TechniquesPage from './components/pages/TechniquesPage.jsx'
import TechniqueDetail from './components/techniques/TechniqueDetail.jsx'
import ZonePage from './components/pages/ZonePage.jsx'
import SearchPage from './components/pages/SearchPage.jsx'
import WorkflowPage from './components/pages/WorkflowPage.jsx'
import ArghaDeyPage from './components/pages/ArghaDeyPage.jsx'
import StrategyPage from './components/pages/StrategyPage.jsx'
import BookmarksPage from './components/pages/BookmarksPage.jsx'
import ExamMode from './components/pages/ExamMode.jsx'
import SettingsPage from './components/pages/SettingsPage.jsx'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/:toolId" element={<ToolDetail />} />
        <Route path="/techniques" element={<TechniquesPage />} />
        <Route path="/techniques/:techniqueId" element={<TechniqueDetail />} />
        <Route path="/zones" element={<ZonePage />} />
        <Route path="/zones/:zoneId" element={<ZonePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/workflows" element={<WorkflowPage />} />
        <Route path="/argha-dey" element={<ArghaDeyPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/exam" element={<ExamMode />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </AppShell>
  )
}
