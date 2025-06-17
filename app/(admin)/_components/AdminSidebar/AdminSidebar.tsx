// Si da error eliminar los spacebetween
import React from 'react';
import { 
  FaThLarge as LayoutDashboard,
  FaBoxOpen as Package,
  FaUsers as Users,
  FaChartBar as BarChart3,
  FaCog as Settings,
  FaSignOutAlt as LogOut,
  FaMicrochip as Cpu,
  FaChevronLeft as ChevronLeft,
  FaChevronRight as ChevronRight
} from 'react-icons/fa';
import { useAuth } from '@/app/hooks/useAuth';
import styles from './AdminSidebar.module.css';
import { LogoTechZoneNoText } from '@/app/components/shared';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeSection,
  onSectionChange,
  isCollapsed,
  onToggleCollapse
}) => {
  const { userData, logout } = useAuth();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', name: 'Productos', icon: Package },
    { id: 'users', name: 'Usuarios', icon: Users },
    { id: 'analytics', name: 'Analíticas', icon: BarChart3 },
    { id: 'settings', name: 'Configuración', icon: Settings },
  ];

  return (
    <div className={`${styles.sidebar} ${
      isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded
    }`}>
     

      {/* Header */}
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarHeaderContainer}>
          <div className={styles.brandContainer} 
            style={{justifyContent: isCollapsed ? 'center' : 'space-between'}}  
          >
            <LogoTechZoneNoText w={24} h={24} />
            {!isCollapsed && (
              <div className={styles.brandText}>
                <h1 className={styles.brandTitle}>TechZone</h1>
                <p className={styles.brandSubtitle}>Admin Panel</p>
              </div>
            )}
          </div>
          
          <button
            onClick={onToggleCollapse}
            className={`${styles.toggleButton} ${isCollapsed ? styles.toggleCollapseIcon : styles.toggleExpandIcon}`}
          >
            {isCollapsed ? (
              <ChevronRight className={`${styles.toggleIcon}`} />
            ) : (
              <ChevronLeft className={`${styles.toggleIcon}`} />
            )}
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className={styles.userInfo}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between'}}>
          <div className={styles.userAvatar}>
            <span className={styles.userInitial}>
              {userData?.name?.charAt(0) || 'C'}
            </span>
          </div>
          {!isCollapsed && (
            <div className={styles.userDetails}>
              <p className={styles.userName}>{userData?.name || 'Carlos'}</p>
              <p className={styles.userRole}>Administrador</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id} className={styles.navItem}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`${styles.navButton} ${isActive ? styles.navButtonActive : styles.navButtonInactive} ${isCollapsed ? styles.navItemCollapsed : ''}`} 
                  style={{
                    
                    justifyContent: isCollapsed ? 'center' : 'space-between'
                  }}
                >
                  {/* Shimmer Effect */}
                  {isActive && (
                    <div className={styles.shimmerEffect}></div>
                  )}
                  
                  <Icon className={styles.navIcon} />
                  
                  {!isCollapsed && (
                    <span className={styles.navText}>{item.name}</span>
                  )}
                  
                  {/* Active Indicator */}
                  {isActive && !isCollapsed && (
                    <div className={styles.activeIndicator}></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className={styles.logoutContainer}>
        <button
          onClick={logout}
          className={styles.logoutButton}
          style={{
            justifyContent: isCollapsed ? 'center' : 'space-between'
          }}
        >
          <LogOut className={styles.logoutIcon} />
          {!isCollapsed && (
            <span className={styles.navText}>Cerrar Sesión</span>
          )}
        </button>
      </div>

      
    </div>
  );
};