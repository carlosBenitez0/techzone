"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapPin,
  FaPhone,
  FaEdit,
  FaSave,
  FaArrowLeft,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useAuthStore, User } from "@/app/store/authStore";
import styles from "./Profile.module.css";
import { useRouter } from "next/navigation";

export const Profile: React.FC = () => {
  const router = useRouter();
  const { userData, updateProfile, logout, isAuthenticated } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<
    Omit<User, "id" | "roll" | "password">
  >({
    name: userData?.name || "",
    email: userData?.email || "",
    address: userData?.address || "",
    phone: userData?.phone || "",
  });

  const handleNavigate = (page: string) => {
    router.push(page);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginPrompt}>
        <div className={styles.loginContent}>
          <h2 className={styles.loginTitle}>Acceso Requerido</h2>
          <p className={styles.loginText}>
            Debes iniciar sesión para ver tu perfil
          </p>
          <button
            onClick={() => handleNavigate("/login")}
            className={styles.loginButton}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    updateProfile({
      ...editData,
      id: userData?.id,
      roll: userData?.roll,
      password: userData?.password,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: userData?.name || "",
      email: userData?.email || "",
      address: userData?.address || "",
      phone: userData?.phone || "",
    });
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        {/* Header */}
        <div className={styles.headerContainer}>
          <button
            onClick={() => handleNavigate("/")}
            className={styles.backButton}
          >
            <FaArrowLeft className={styles.backIcon} />
            Volver al inicio
          </button>

          <button onClick={handleLogout} className={styles.logoutButton}>
            <FaSignOutAlt className={styles.logoutIcon} />
            Cerrar Sesión
          </button>
        </div>

        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.profileHeaderContent}>
            <div className={styles.profileHeaderInfo}>
              <div className={styles.avatarContainer}>
                <FaUser className={styles.avatarIcon} />
              </div>
              <div>
                <h1 className={styles.profileTitle}>Mi Perfil</h1>
                <p className={styles.profileSubtitle}>
                  Gestiona tu información personal
                </p>
              </div>
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className={styles.editButton}
              >
                <FaEdit className={styles.editIcon} />
              </button>
            )}
          </div>
        </div>

        {/* Profile Information */}
        <div className={styles.profileCard}>
          <div className={styles.profileContent}>
            <h2 className={styles.sectionTitle}>Información Personal</h2>

            <div className={styles.fieldGrid}>
              {/* Name */}
              <div className={styles.fieldContainer}>
                <label className={styles.fieldLabel}>
                  <FaUser className={styles.fieldIcon} />
                  Nombre Completo
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                    className={styles.inputField}
                  />
                ) : (
                  <p className={styles.staticField}>{userData?.name}</p>
                )}
              </div>

              {/* Email */}
              <div className={styles.fieldContainer}>
                <label className={styles.fieldLabel}>
                  <FaEnvelope className={styles.fieldIcon} />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                    className={styles.inputField}
                  />
                ) : (
                  <p className={styles.staticField}>{userData?.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className={styles.fieldContainer}>
                <label className={styles.fieldLabel}>
                  <FaPhone className={styles.fieldIcon} />
                  Teléfono
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) =>
                      setEditData({ ...editData, phone: e.target.value })
                    }
                    placeholder="Ingresa tu teléfono"
                    className={styles.inputField}
                  />
                ) : (
                  <p className={styles.staticField}>
                    {userData?.phone || "No especificado"}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className={styles.fieldContainer}>
                <label className={styles.fieldLabel}>
                  <FaMapPin className={styles.fieldIcon} />
                  Dirección
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.address}
                    onChange={(e) =>
                      setEditData({ ...editData, address: e.target.value })
                    }
                    placeholder="Ingresa tu dirección"
                    className={styles.inputField}
                  />
                ) : (
                  <p className={styles.staticField}>
                    {userData?.address || "No especificada"}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className={styles.actionButtons}>
                <button onClick={handleSave} className={styles.saveButton}>
                  <FaSave className={styles.buttonIcon} />
                  Guardar Cambios
                </button>
                <button onClick={handleCancel} className={styles.cancelButton}>
                  <IoClose className={styles.buttonIcon} />
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Account Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIconContainer} ${styles.bgBlue100}`}>
              <FaUser className={`${styles.statIcon} ${styles.textBlue600}`} />
            </div>
            <h3 className={styles.statTitle}>Cuenta Activa</h3>
            <p className={styles.statDescription}>
              Miembro desde {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIconContainer} ${styles.bgGreen100}`}>
              <FaEnvelope
                className={`${styles.statIcon} ${styles.textGreen600}`}
              />
            </div>
            <h3 className={styles.statTitle}>Email Verificado</h3>
            <p className={styles.statDescription}>Tu email está confirmado</p>
          </div>

          <div className={styles.statCard}>
            <div
              className={`${styles.statIconContainer} ${styles.bgPurple100}`}
            >
              <FaPhone
                className={`${styles.statIcon} ${styles.textPurple600}`}
              />
            </div>
            <h3 className={styles.statTitle}>Perfil Completo</h3>
            <p className={styles.statDescription}>
              {userData?.phone && userData?.address
                ? "100% completo"
                : "Completa tu perfil"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
