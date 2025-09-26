import React, { useEffect, useState } from 'react';
import './App.css';
import './uae-roots-system.js'; // Import the V7 system

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Initialize the V7 system when component mounts
    if (window.UAERootsSystem) {
      console.log('🎉 V7 System loaded successfully!');
      window.UAERootsSystem.init();
    } else {
      console.log('⚠️ V7 System not found, checking again...');
      // Try to initialize after a short delay
      setTimeout(() => {
        if (window.UAERootsSystem) {
          console.log('🎉 V7 System loaded after delay!');
          window.UAERootsSystem.init();
        }
      }, 1000);
    }
  }, []);

  const handleLogin = (provider) => {
    console.log(`تسجيل الدخول بـ ${provider}`);
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  const LoginView = () => (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">جذور الإمارات</h1>
        <p className="app-subtitle">منصة شجرة العائلة الرقمية المتطورة</p>
        <p className="app-description">ربط الأجيال، حفظ التراث</p>
        
        <div className="login-buttons">
          <button 
            className="login-btn google-btn"
            onClick={() => handleLogin('Google')}
          >
            <span className="btn-icon">🔍</span>
            تسجيل الدخول بـ Google
          </button>
          
          <button 
            className="login-btn apple-btn"
            onClick={() => handleLogin('Apple')}
          >
            <span className="btn-icon">🍎</span>
            تسجيل الدخول بـ Apple ID
          </button>
          
          <button 
            className="login-btn phone-btn"
            onClick={() => handleLogin('Phone')}
          >
            <span className="btn-icon">📱</span>
            التسجيل عبر الهاتف
          </button>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>لوحة التحكم</h1>
        <button className="logout-btn" onClick={handleLogout}>
          تسجيل الخروج
        </button>
      </header>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>أفراد العائلة</h3>
            <div className="stat-number">15</div>
          </div>
          <div className="stat-card">
            <h3>الأجيال</h3>
            <div className="stat-number">4</div>
          </div>
          <div className="stat-card">
            <h3>الفروع</h3>
            <div className="stat-number">3</div>
          </div>
        </div>

        <div className="dashboard-actions">
          <button 
            className="action-btn primary"
            onClick={() => setCurrentView('tree')}
          >
            عرض شجرة العائلة
          </button>
          <button 
            className="action-btn secondary"
            onClick={() => {
              if (window.UAERootsSystem) {
                window.UAERootsSystem.showAddPersonSidebar();
              }
            }}
          >
            إضافة فرد جديد
          </button>
        </div>

        <div className="trees-section">
          <h2>أشجار العائلة</h2>
          <div className="tree-card">
            <h3>شجرة العائلة الرئيسية</h3>
            <p>15 فرد من العائلة</p>
            <button 
              className="tree-btn"
              onClick={() => setCurrentView('tree')}
            >
              عرض الشجرة
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TreeView = () => (
    <div className="tree-container">
      <header className="tree-header">
        <button 
          className="back-btn"
          onClick={() => setCurrentView('dashboard')}
        >
          ← العودة للوحة التحكم
        </button>
        <h1>شجرة العائلة</h1>
        <div className="tree-controls">
          <button 
            className="control-btn"
            onClick={() => {
              if (window.UAERootsSystem) {
                window.UAERootsSystem.showAddPersonSidebar();
              }
            }}
          >
            إضافة شخص
          </button>
          <button className="control-btn">تصدير</button>
          <button className="control-btn">مشاركة</button>
        </div>
      </header>

      <div className="tree-content">
        {/* V7 System will render the sophisticated family tree here */}
        <div id="family-tree-container" className="family-tree-container">
          {/* The V7 system will populate this container */}
          <div className="tree-placeholder">
            <p>جاري تحميل شجرة العائلة المتطورة...</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App" dir="rtl">
      {currentView === 'login' && <LoginView />}
      {currentView === 'dashboard' && <DashboardView />}
      {currentView === 'tree' && <TreeView />}
      
      {/* V7 System Sidebar - Will be managed by the V7 system */}
      <div id="uae-roots-sidebar"></div>
    </div>
  );
}

export default App;
