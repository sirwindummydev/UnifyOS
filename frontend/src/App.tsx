import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useActionData,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import { TenantProvider, useTenant } from "./context/TenantContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";

function AppContent() {
  const { loading, error } = useTenant();
  const { isLoggedIn } = useAuth();

  if (loading) {
    return <div style={{ padding: 40 }}>Loading tenant...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Tenant not found</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="/*" element={<MainLayout />}>
            <Route
              index
              element={<Navigate to="/dashboard/overview" replace />}
            />
            <Route path="dashboard/overview" element={<Dashboard />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TenantProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </TenantProvider>
    </ThemeProvider>
  );
}

export default App;
