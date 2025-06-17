"use client";
import React, { useState } from "react";
import styles from "./Register.module.css";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaSpinner,
  FaUser,
} from "react-icons/fa";

import Link from "next/link";
import { LogoTechZoneNoText } from "@/app/components/shared";
import { useAuth } from "@/app/hooks";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, setIsLoading, error, setError, register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // validaciones
    if (formData.name.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setIsLoading(false);
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      setError("Todos los campos son obligatorios.");
      setIsLoading(false);
      return;
    }

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      setError("El correo electrónico no es válido.");
      setIsLoading(false);
      return;
    }

    try {
      setTimeout(() => {
        register({ ...formData, id: 0 });
      }, 3000);
    } catch (err) {
      setError(`Error en el servidor. Intenta nuevamente.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.registerContainer}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={`${styles.floatCircle} ${styles.accent}`} />
        <div className={`${styles.floatCircle} ${styles.primary}`} />
        <div className={styles.pulseCircle} />
      </div>

      <div className={styles.registerFormContainer}>
        {/* Header */}
        <div className={styles.registerHeader}>
          <div className={styles.logoContainer}>
            <LogoTechZoneNoText w={50} h={50} clickable={false} />
          </div>
          <h1 className={`${styles.registerTitle} ${styles.fontOrbitron}`}>
            Registrate
          </h1>
          <p className={styles.registerSubtitle}>
            Da el primer paso en tu viaje por Techzone.
          </p>
        </div>

        {/* register Form */}
        <div className={styles.registerForm}>
          <form onSubmit={handleSubmit} className={styles.formGroup}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Usuario</label>
              <div className={styles.inputContainer}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="usuario123"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <div className={styles.inputContainer}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="demo@gmail.com"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Contraseña</label>
              <div className={styles.inputContainer}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="demo123"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passIconContainer}
                >
                  {showPassword ? (
                    <FaEye
                      className={`${styles.inputIcon} ${styles.eyeIcon}`}
                    />
                  ) : (
                    <FaEyeSlash
                      className={`${styles.inputIcon} ${styles.eyeIcon}`}
                    />
                  )}
                </div>
              </div>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className={`${styles.spinner} ${styles.spinnerRotate}`} />
              ) : (
                <>
                  Registrarse
                  <FaArrowRight className={styles.arrowIcon} />
                </>
              )}
            </button>
          </form>

          <div className={styles.goToRegister}>
            <p className={styles.goToRegisterText}>¿Ya tienes una cuenta?</p>
            <Link href={"/login"} className={styles.goToRegisterLink}>
              Iniciar sesión
            </Link>
          </div>

          <div className={styles.backToHome}>
            <Link href={"/"} className={styles.backToHomeLink}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
