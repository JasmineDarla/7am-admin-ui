import React from 'react'
import styles from './Header.module.css';
export const Header = () => {
  return (
    <div>
      <div className={`bg-primary text-center ${styles.header}`}>Admin portal</div>
    </div>
  )
}

