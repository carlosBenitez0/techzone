import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  description,
  iconBgColor = 'bg-primary-100',
  iconColor = 'text-primary-600'
}) => {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.statIconContainer} ${iconBgColor}`}>
        <div className={`${styles.statIcon} ${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className={styles.statTitle}>{title}</h3>
      <p className={styles.statDescription}>{description}</p>
    </div>
  );
};