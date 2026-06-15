import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
import PublicLayout from './layouts/PublicLayout'
import PortalLayout from './layouts/PortalLayout'
import AdminLayout from './layouts/AdminLayout'

// Public pages
import Home from './pages/public/Home'
import About from './pages/public/About'
import Eligibility from './pages/public/Eligibility'
import HowToApply from './pages/public/HowToApply'
import GrantCategories from './pages/public/GrantCategories'
import FAQs from './pages/public/FAQs'
import News from './pages/public/News'
import Contact from './pages/public/Contact'

// Auth
import SignIn from './pages/portal/SignIn'

// Portal pages
import Dashboard from './pages/portal/Dashboard'
import MyApplications from './pages/portal/MyApplications'
import NewApplication from './pages/portal/NewApplication'
import ApplicationDetail from './pages/portal/ApplicationDetail'
import MyDocuments from './pages/portal/MyDocuments'
import Messages from './pages/portal/Messages'
import AccountSettings from './pages/portal/AccountSettings'

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard'
import ApplicationsQueue from './pages/admin/ApplicationsQueue'
import ApplicationReview from './pages/admin/ApplicationReview'
import Evaluation from './pages/admin/Evaluation'
import RequestMoreInfo from './pages/admin/RequestMoreInfo'
import GrantCycles from './pages/admin/GrantCycles'
import FundedProjects from './pages/admin/FundedProjects'
import Reports from './pages/admin/Reports'
import UserManagement from './pages/admin/UserManagement'
import ProgramSettings from './pages/admin/ProgramSettings'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/grant-categories" element={<GrantCategories />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth (standalone, no layout shell) */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* Applicant portal */}
        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<Navigate to="/portal/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="applications" element={<MyApplications />} />
          <Route path="applications/new" element={<NewApplication />} />
          <Route path="applications/:id" element={<ApplicationDetail />} />
          <Route path="documents" element={<MyDocuments />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>

        {/* Admin portal */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="applications" element={<ApplicationsQueue />} />
          <Route path="applications/review" element={<ApplicationReview />} />
          <Route path="applications/evaluate" element={<Evaluation />} />
          <Route path="applications/request-info" element={<RequestMoreInfo />} />
          <Route path="cycles" element={<GrantCycles />} />
          <Route path="funded" element={<FundedProjects />} />
          <Route path="reports" element={<Reports />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<ProgramSettings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
