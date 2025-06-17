"use client";
import React, { useState } from "react";
import styles from "./Login.module.css";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import Link from "next/link";
import { LogoTechZoneNoText } from "@/app/components/shared";
import { useAuth } from "@/app/hooks";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, setIsLoading, error, setError, login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    //validaciones
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setIsLoading(false);
      return;
    }

    if (!formData.email || !formData.password) {
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
    console.log(formData);

    try {
      /* setTimeout(() => {
        login(formData);
      }, 3000); */
      login(formData);
    } catch (err) {
      setError(`Error en el servidor. Intenta nuevamente.`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={`${styles.floatCircle} ${styles.accent}`} />
        <div className={`${styles.floatCircle} ${styles.primary}`} />
        <div className={styles.pulseCircle} />
      </div>

      <div className={styles.loginFormContainer}>
        {/* Header */}
        <div className={styles.loginHeader}>
          <div className={styles.logoContainer}>
            <LogoTechZoneNoText w={50} h={50} clickable={false} />
          </div>
          <h1 className={`${styles.loginTitle} ${styles.fontOrbitron}`}>
            Bienvenido
          </h1>
          <p className={styles.loginSubtitle}>
            Ingresa a tu cuenta de TechZone
          </p>
        </div>

        {/* login Form */}
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit} className={styles.formGroup}>
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

            <div className={styles.demoMessage}>
              <strong>Demo:</strong> demo@gmail.com / demo123
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.submitButton}
            >
              {isLoading ? (
                <FaSpinner className={styles.spinner} />
              ) : (
                <>
                  Iniciar Sesión
                  <FaArrowRight className={styles.arrowIcon} />
                </>
              )}
            </button>
          </form>

          <div className={styles.goToRegister}>
            <p className={styles.goToRegisterText}>¿No tienes cuenta?</p>
            <Link href={"/register"} className={styles.goToRegisterLink}>
              Crear cuenta nueva
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
export default Login;
