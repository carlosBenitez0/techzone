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
import { useAuthStore } from "@/app/store";
import { useRouter } from "next/navigation";
import { User } from "@/app/store";

export const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<Omit<User, "id" | "name">>({
    email: "",
    password: "",
  });

  const { isLoading, error, login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      if (result) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
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
export default Page;
