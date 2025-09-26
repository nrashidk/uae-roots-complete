import React, { useState, useEffect } from 'react';
import './App.css';
import './uae-roots-system.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('auth');
  const [showPersonForm, setShowPersonForm] = useState(false);

  // Initialize the UAE Roots system when component mounts
  useEffect(() => {
    // The system auto-initializes from the imported JS file
    console.log('🌟 UAE Roots V7 System Loading...');
  }, []);

  const handleLogin = (method) => {
    console.log(`تسجيل الدخول بـ ${method}`);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('auth');
  };

  // Authentication View
  const AuthView = () => (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-pattern"></div>
      </div>
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">جذور الإمارات</h1>
          <p className="auth-subtitle">منصة شجرة العائلة الرقمية المتطورة</p>
          <p className="auth-tagline">ربط الأجيال، حفظ التراث</p>
        </div>
        
        <div className="auth-content">
          <div className="auth-description">
            <p>ابنِ واستكشف شجرة عائلتك بأدوات احترافية مصممة للعائلات الإماراتية. أنشئ أشجار عائلة جميلة بدعم اللغة العربية وميزات حديثة.</p>
          </div>
          
          <div className="auth-buttons">
            <button 
              className="auth-btn google"
              onClick={() => handleLogin('Google')}
            >
              <span className="auth-btn-icon">🔍</span>
              المتابعة مع Google
            </button>
            <button 
              className="auth-btn apple"
              onClick={() => handleLogin('Apple')}
            >
              <span className="auth-btn-icon">🍎</span>
              المتابعة مع Apple
            </button>
            <button 
              className="auth-btn uae"
              onClick={() => handleLogin('UAE Mobile')}
            >
              <span className="auth-btn-icon">🇦🇪</span>
              الهاتف الإماراتي (+971)
            </button>
            <button 
              className="auth-btn facebook"
              onClick={() => handleLogin('Facebook')}
            >
              <span className="auth-btn-icon">📘</span>
              المتابعة مع Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const Dashboard = () => (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>لوحة التحكم</h1>
        <button className="logout-btn" onClick={handleLogout}>
          تسجيل الخروج
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>أشجار العائلة</h2>
          <div className="trees-grid">
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
        
        <div className="dashboard-actions">
          <button 
            className="action-btn primary"
            onClick={() => setCurrentView('tree')}
          >
            عرض شجرة العائلة
          </button>
          <button 
            className="action-btn secondary"
            onClick={() => setShowPersonForm(true)}
          >
            إضافة فرد جديد
          </button>
        </div>
      </div>
    </div>
  );

  // Family Tree View - This is where the V7 system will be active
  const FamilyTree = () => (
    <div className="tree-view-container">
      <div className="tree-header">
        <button 
          className="back-btn"
          onClick={() => setCurrentView('dashboard')}
        >
          ← العودة للوحة التحكم
        </button>
        <h2>شجرة العائلة</h2>
        <div className="tree-controls">
          <button 
            className="control-btn"
            onClick={() => setShowPersonForm(true)}
          >
            إضافة شخص
          </button>
          <button className="control-btn">تصدير</button>
          <button className="control-btn">مشاركة</button>
        </div>
      </div>
      
      {/* Tree Canvas - This is where the V7 system will render */}
      <div className="tree-canvas" id="tree-canvas">
        <div className="tree-container" id="tree-container">
          <div className="connections" id="connections-container"></div>
          
          {/* Sample family members - V7 system will replace these */}
          <div className="generation-container" style={{top: '300px'}}>
            <div className="family-unit">
              <div className="person-box male" data-person-id="ahmed-1">
                <div className="person-content">
                  <div className="person-name">أحمد محمد الزعابي</div>
                  <div className="person-details">
                    <div className="person-birth-death">مواليد 1960</div>
                    <div className="person-title">رب الأسرة</div>
                  </div>
                </div>
                <div className="person-actions">
                  <button className="action-btn partner" data-tooltip="إضافة زوجة" data-action="add-spouse">♥</button>
                  <button className="action-btn parent" data-tooltip="إضافة والد" data-action="add-parent">↑</button>
                  <button className="action-btn child" data-tooltip="إضافة طفل" data-action="add-child">↓</button>
                  <button className="action-btn sibling" data-tooltip="إضافة شقيق" data-action="add-sibling">⟷</button>
                  <button className="action-btn edit" data-tooltip="تعديل" data-action="edit">✎</button>
                  <button className="action-btn delete" data-tooltip="حذف" data-action="delete">✗</button>
                </div>
              </div>
              
              <div className="person-box female" data-person-id="fatima-1">
                <div className="person-content">
                  <div className="person-name">فاطمة سالم المنصوري</div>
                  <div className="person-details">
                    <div className="person-birth-death">مواليد 1965</div>
                    <div className="person-title">ربة المنزل</div>
                  </div>
                </div>
                <div className="person-actions">
                  <button className="action-btn partner" data-tooltip="إضافة زوج" data-action="add-spouse">♥</button>
                  <button className="action-btn parent" data-tooltip="إضافة والد" data-action="add-parent">↑</button>
                  <button className="action-btn child" data-tooltip="إضافة طفل" data-action="add-child">↓</button>
                  <button className="action-btn sibling" data-tooltip="إضافة شقيق" data-action="add-sibling">⟷</button>
                  <button className="action-btn edit" data-tooltip="تعديل" data-action="edit">✎</button>
                  <button className="action-btn delete" data-tooltip="حذف" data-action="delete">✗</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="generation-container" style={{top: '500px'}}>
            <div className="family-unit">
              <div className="person-box male" data-person-id="mohammed-1">
                <div className="person-content">
                  <div className="person-name">محمد أحمد الزعابي</div>
                  <div className="person-details">
                    <div className="person-birth-death">مواليد 1990</div>
                    <div className="person-title">مهندس</div>
                  </div>
                </div>
                <div className="person-actions">
                  <button className="action-btn partner" data-tooltip="إضافة زوجة" data-action="add-spouse">♥</button>
                  <button className="action-btn parent" data-tooltip="إضافة والد" data-action="add-parent">↑</button>
                  <button className="action-btn child" data-tooltip="إضافة طفل" data-action="add-child">↓</button>
                  <button className="action-btn sibling" data-tooltip="إضافة شقيق" data-action="add-sibling">⟷</button>
                  <button className="action-btn edit" data-tooltip="تعديل" data-action="edit">✎</button>
                  <button className="action-btn delete" data-tooltip="حذف" data-action="delete">✗</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar for person forms - V7 system will control this */}
      {showPersonForm && (
        <div className="uae-roots-sidebar open">
          <div className="sidebar-header">
            <h3>إضافة شخص جديد</h3>
            <button 
              className="close-btn"
              onClick={() => setShowPersonForm(false)}
            >
              ×
            </button>
          </div>
          
          <div className="sidebar-content">
            <div className="form-section">
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" placeholder="أدخل الاسم الكامل" />
              </div>
              
              <div className="form-group">
                <label>الجنس</label>
                <select>
                  <option>اختر الجنس</option>
                  <option>ذكر</option>
                  <option>أنثى</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>سنة الميلاد</label>
                <input type="number" placeholder="مثال: 1980" />
              </div>
              
              <div className="form-group">
                <label>المهنة</label>
                <input type="text" placeholder="أدخل المهنة" />
              </div>
            </div>
          </div>
          
          <div className="sidebar-footer">
            <button 
              className="btn secondary"
              onClick={() => setShowPersonForm(false)}
            >
              إلغاء
            </button>
            <button className="btn primary">حفظ</button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="app" dir="rtl">
      {!isAuthenticated && <AuthView />}
      {isAuthenticated && currentView === 'dashboard' && <Dashboard />}
      {isAuthenticated && currentView === 'tree' && <FamilyTree />}
    </div>
  );
}

export default App;
