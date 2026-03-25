import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "./AdminPage.css";

import UserManagement from "./UserManagement";
import DashboardPage from "./DashBoardPage";

export default function AdminPage({ onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="admin-wrapper">
      <header className="topbar shadow-sm">
        <h4 className="brand">RECIPEBOOK ADMIN</h4>
        <Button 
          variant="outline-light" 
          size="sm"
          className="fw-bold px-3" 
          onClick={onLogout}
        >
          Đăng xuất
        </Button>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <Nav className="flex-column">
            <Nav.Link
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </Nav.Link>
            
            <Nav.Link
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              Quản lý User
            </Nav.Link>
          </Nav>
        </aside>

        <main className="content">
          <div className="container-fluid">
            {activeTab === "dashboard" && <DashboardPage />}
            {activeTab === "users" && <UserManagement />}
          </div>
        </main>
      </div>
    </div>
  );
}