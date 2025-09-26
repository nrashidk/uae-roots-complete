import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    // Initialize V7 system directly in the component
    initializeV7System();
  }, []);

  const initializeV7System = () => {
    // Load the V7 system script dynamically
    const script = document.createElement('script');
    script.src = '/src/uae-roots-system.js';
    script.onload = () => {
      console.log('🎉 V7 System loaded successfully!');
      if (window.UAERootsSystem) {
        window.UAERootsSystem.init();
      }
    };
    script.onerror = () => {
      console.log('❌ Failed to load V7 system, using fallback');
      // Initialize basic functionality as fallback
      initializeFallbackSystem();
    };
    document.head.appendChild(script);
  };

  const initializeFallbackSystem = () => {
    // Create a basic fallback system if V7 doesn't load
    window.UAERootsSystem = {
      init: () => console.log('Fallback system initialized'),
      showAddPersonSidebar: () => setSidebarVisible(true),
      hideSidebar: () => setSidebarVisible(false),
      addPerson: (personData) => {
        console.log('Adding person:', personData);
        setSidebarVisible(false);
      }
    };
  };

  const handleLogin = (provider) => {
    console.log(`تسجيل الدخول بـ ${provider}`);
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  const showAddPersonSidebar = () => {
    if (window.UAERootsSystem && window.UAERootsSystem.showAddPersonSidebar) {
      window.UAERootsSystem.showAddPersonSidebar();
    } else {
      setSidebarVisible(true);
    }
  };

  const hideSidebar = () => {
    if (window.UAERootsSystem && window.UAERootsSystem.hideSidebar) {
      window.UAERootsSystem.hideSidebar();
    } else {
      setSidebarVisible(false);
    }
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
            onClick={showAddPersonSidebar}
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
            onClick={showAddPersonSidebar}
          >
            إضافة شخص
          </button>
          <button className="control-btn">تصدير</button>
          <button className="control-btn">مشاركة</button>
        </div>
      </header>

      <div className="tree-content">
        <div id="family-tree-container" className="family-tree-container">
          {/* V7 System will render here, or fallback content */}
          <div className="family-members-grid">
            <div className="person-box male">
              <div className="person-info">
                <h3>محمد الزعابي</h3>
                <p>الأب</p>
              </div>
              <div className="person-actions">
                <button className="action-btn" title="إضافة زوجة">♥</button>
                <button className="action-btn" title="إضافة والد">↑</button>
                <button className="action-btn" title="إضافة طفل">↓</button>
                <button className="action-btn" title="إضافة شقيق">⟷</button>
                <button className="action-btn" title="تعديل">✎</button>
                <button className="action-btn" title="حذف">✗</button>
              </div>
            </div>

            <div className="person-box female">
              <div className="person-info">
                <h3>فاطمة المنصوري</h3>
                <p>الأم</p>
              </div>
              <div className="person-actions">
                <button className="action-btn" title="إضافة زوج">♥</button>
                <button className="action-btn" title="إضافة والد">↑</button>
                <button className="action-btn" title="إضافة طفل">↓</button>
                <button className="action-btn" title="إضافة شقيق">⟷</button>
                <button className="action-btn" title="تعديل">✎</button>
                <button className="action-btn" title="حذف">✗</button>
              </div>
            </div>

            <div className="person-box male">
              <div className="person-info">
                <h3>أحمد الزعابي</h3>
                <p>الابن</p>
              </div>
              <div className="person-actions">
                <button className="action-btn" title="إضافة زوجة">♥</button>
                <button className="action-btn" title="إضافة والد">↑</button>
                <button className="action-btn" title="إضافة طفل">↓</button>
                <button className="action-btn" title="إضافة شقيق">⟷</button>
                <button className="action-btn" title="تعديل">✎</button>
                <button className="action-btn" title="حذف">✗</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PersonSidebar = () => (
    <div className={`person-sidebar ${sidebarVisible ? 'visible' : ''}`}>
      <div className="sidebar-header">
        <h2>إضافة شخص جديد</h2>
        <button className="close-btn" onClick={hideSidebar}>×</button>
      </div>
      
      <div className="sidebar-content">
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const personData = Object.fromEntries(formData);
          if (window.UAERootsSystem && window.UAERootsSystem.addPerson) {
            window.UAERootsSystem.addPerson(personData);
          } else {
            console.log('Adding person:', personData);
            hideSidebar();
          }
        }}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="أدخل الاسم الكامل"
              required 
            />
          </div>

          <div className="form-group">
            <label>الجنس</label>
            <select name="gender" required>
              <option value="">اختر الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>

          <div className="form-group">
            <label>سنة الميلاد</label>
            <input 
              type="number" 
              name="birthYear" 
              placeholder="مثال: 1980"
            />
          </div>

          <div className="form-group">
            <label>المهنة</label>
            <input 
              type="text" 
              name="profession" 
              placeholder="أدخل المهنة"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={hideSidebar}>
              إلغاء
            </button>
            <button type="submit" className="save-btn">
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="App" dir="rtl">
      {currentView === 'login' && <LoginView />}
      {currentView === 'dashboard' && <DashboardView />}
      {currentView === 'tree' && <TreeView />}
      
      <PersonSidebar />
      
      {/* V7 System containers */}
      <div id="uae-roots-sidebar"></div>
      <div id="family-tree-v7-container"></div>
    </div>
  );
}

export default App;
