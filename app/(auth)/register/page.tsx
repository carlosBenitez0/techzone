// app/(auth)/register/page.tsx
"use client";
import React, { useEffect, useState } from "react";
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
import { useUserStore } from "@/app/store/userStore";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const router = useRouter();
  const { register, loading } = useUserStore();

  const [error, setError] = useState<null | string>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    if (!formData.name) {
      setError("Por favor ingresa tu nombre completo");
      return false;
    }

    if (!formData.email) {
      setError("Por favor ingresa tu correo electrónico");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return false;
    }

    if (!formData.password) {
      setError("Por favor ingresa una contraseña");
      return false;
    }

    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }

    if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(formData.password)) {
      setError(
        "La contraseña debe incluir al menos una mayúscula, un número y un carácter especial"
      );
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    try {
      const success = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: "00000000",
        confirmPassword: formData.confirmPassword,
      });

      if (success) {
        setRegistrationSuccess(true);
      }
    } catch (err) {
      console.error("Error en el registro:", err);
      setError(err instanceof Error ? err.message : "Error en el registro");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Redirect to login after successful registration
  useEffect(() => {
    if (registrationSuccess) {
      router.push("/login");
    }
  }, [registrationSuccess, router]);

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
            <div className={styles.logoIcon}>
              <LogoTechZoneNoText w={50} h={50} clickable={false} />
            </div>
          </div>
          <h1 className={`${styles.registerTitle} ${styles.fontOrbitron}`}>
            Regístrate
          </h1>
          <p className={styles.registerSubtitle}>
            Da el primer paso en tu viaje por Techzone.
          </p>
        </div>

        {/* Register Form */}
        <div className={styles.registerForm}>
          <form onSubmit={handleSubmit} className={styles.formGroup}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nombre Completo</label>
              <div className={styles.inputContainer}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Carlos Benitez"
                  // required attribute removed for custom validation
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <div className={styles.inputContainer}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="ejemplo@correo.com"
                  // required attribute removed for custom validation
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
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="••••••••"
                  // required attribute removed for custom validation
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
              <p className={styles.passwordHint}>
                Mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial
              </p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Confirmar Contraseña</label>
              <div className={styles.inputContainer}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="••••••••"
                  // required attribute removed for custom validation
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

            <button
              type="submit"
              disabled={loading}
              className={`${styles.submitButton} ${
                loading ? styles.loading : ""
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className={styles.spinner} /> Registrando...
                </>
              ) : (
                "Registrarse"
              )}
            </button>

            <div className={styles.goToRegister}>
              <p className={styles.goToRegisterText}>¿Ya tienes una cuenta?</p>
              <Link href="/login" className={styles.goToRegisterLink}>
                Iniciar sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
