"use client";
import React, { useState, useEffect } from "react";
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
import { useAuthStore } from "@/app/store/authStore";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);

  const { login, isLoading, isAuthenticated } = useAuthStore();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const validateForm = () => {
    if (!formData.email) {
      setError("Por favor ingresa tu correo electrónico");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return false;
    }

    if (!formData.password) {
      setError("Por favor ingresa tu contraseña");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
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

        {/* Login Form */}
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit} className={styles.formGroup}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <div className={styles.inputContainer}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="ejemplo@correo.com"
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
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="••••••••"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passIconContainer}
                >
                  {showPassword ? (
                    <FaEyeSlash className={styles.eyeIcon} />
                  ) : (
                    <FaEye className={styles.eyeIcon} />
                  )}
                </div>
              </div>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <div className={styles.forgotPassword}>
              <Link
                href="/forgot-password"
                className={styles.forgotPasswordLink}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className={`${styles.loginButton} ${
                isLoading ? styles.loading : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className={styles.spinner} />
              ) : (
                <>
                  Iniciar sesión
                  <FaArrowRight className={styles.arrowIcon} />
                </>
              )}
            </button>
          </form>

          <div className={styles.goToRegister}>
            <span className={styles.goToRegisterText}>
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className={styles.goToRegisterLink}>
                Regístrate
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
