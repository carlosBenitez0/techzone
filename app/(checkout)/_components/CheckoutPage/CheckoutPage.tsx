"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";
import { useAuthStore } from "@/app/store";
import { FaArrowLeft, FaCheckCircle, FaCreditCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import styles from "./Checkout.module.css";

type FormData = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
};

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, userData } = useAuthStore();
  const { items, getCartTotal, clearCart } = useCartStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: userData?.name || "",
    address: userData?.address || "",
    city: "",
    postalCode: "",
    phone: userData?.phone || "",
    email: userData?.email || "",
  });

  // Handle redirects
  useEffect(() => {
    const redirect = searchParams.get("redirect");
    if (!isAuthenticated) {
      router.push(`/login?redirect=${redirect || "/checkout"}`);
      return;
    }

    if (items.length === 0 && !orderNumber) {
      router.push("/cart");
    }
  }, [isAuthenticated, items.length, orderNumber, router, searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (currentStep === 1) {
      const requiredFields: (keyof FormData)[] = [
        "fullName",
        "address",
        "city",
        "postalCode",
        "phone",
        "email",
      ];
      const missingField = requiredFields.find(
        (field) => !formData[field].trim()
      );

      if (missingField) {
        setError(`Por favor completa el campo ${missingField}`);
        return false;
      }

      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError("Por favor ingresa un correo electrónico válido");
        return false;
      }
    }

    if (currentStep === 2 && !paymentMethod) {
      setError("Por favor selecciona un método de pago");
      return false;
    }

    setError(null);
    return true;
  };

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      await processOrder();
    }
  };

  const processOrder = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate order number
      const newOrderNumber = `ORD-${Math.floor(
        100000 + Math.random() * 900000
      )}`;
      setOrderNumber(newOrderNumber);

      // Clear cart and move to success step
      clearCart();
      setCurrentStep(3);
    } catch (err) {
      setError("Error al procesar el pedido. Por favor intenta de nuevo.");
      console.error("Order processing error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const totalAmount = getCartTotal();
  const shippingCost = 10.0;
  const tax = totalAmount * 0.15;
  const orderTotal = totalAmount + shippingCost + tax;

  // Render methods would go here...
  // (renderStepIndicator, renderOrderSummary, renderStepContent)

  return (
    <div className={styles.checkoutContainer}>
      {/* Step indicator */}
      <div className={styles.stepIndicator}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`${styles.step} ${
              currentStep >= step ? styles.active : ""
            }`}
          >
            <div className={styles.stepNumber}>{step}</div>
            <div className={styles.stepLabel}>
              {step === 1 ? "Envío" : step === 2 ? "Pago" : "Confirmación"}
            </div>
          </div>
        ))}
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.checkoutContent}>
        <div className={styles.mainContent}>
          {currentStep === 1 && (
            <form onSubmit={handleNextStep} className={styles.shippingForm}>
              <h2>Información de Envío</h2>

              {/* Full width fields */}
              <div className={styles.formGroup} data-full-width>
                <label htmlFor="fullName">Nombre completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  readOnly
                  className={`${styles.inputField} ${styles.readOnlyField}`}
                  aria-label="Nombre completo (no editable)"
                />
              </div>

              <div className={styles.formGroup} data-full-width>
                <label htmlFor="address">Dirección</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Ingresa tu dirección"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Two columns for city and postal code */}
              <div className={styles.formGroup} data-half-width>
                <label htmlFor="city">Ciudad</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup} data-small-width>
                <label htmlFor="postalCode">Código postal</label>
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Código postal"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Two columns for phone and email */}
              <div className={styles.formGroup} data-half-width>
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup} data-half-width>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className={`${styles.inputField} ${styles.readOnlyField}`}
                  aria-label="Correo electrónico (no editable)"
                />
              </div>

              <div className={styles.formActions}>
                <Link href="/cart" className={styles.backToCart}>
                  <FaArrowLeft size={16} />
                  <span>Volver al carrito</span>
                </Link>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.primaryButton}`}
                  disabled={isLoading}
                >
                  <span>
                    {isLoading ? "Procesando..." : "Continuar al pago"}
                  </span>
                  <FaArrowLeft size={16} className={styles.rotate180} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleNextStep} className={styles.paymentForm}>
              <h2>Método de Pago</h2>
              {[
                {
                  id: "credit",
                  label: "Tarjeta de Crédito/Débito",
                  icon: <BsCreditCard />,
                },
                { id: "paypal", label: "PayPal", icon: <MdPayment /> },
              ].map((method) => (
                <div
                  key={method.id}
                  className={`${styles.paymentMethod} ${
                    paymentMethod === method.id ? styles.selected : ""
                  }`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className={styles.paymentIcon}>{method.icon}</div>
                  <div className={styles.paymentDetails}>
                    <h4>{method.label}</h4>
                  </div>
                  {paymentMethod === method.id && (
                    <div className={styles.checkMark}>✓</div>
                  )}
                </div>
              ))}
              <div className={styles.formActions}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.secondaryButton}`}
                  onClick={() => setCurrentStep(1)}
                  disabled={isLoading}
                >
                  <FaArrowLeft size={16} className={styles.buttonIcon} />
                  <span>Volver</span>
                </button>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.primaryButton}`}
                  disabled={!paymentMethod || isLoading}
                >
                  <span>{isLoading ? "Procesando..." : "Pagar ahora"}</span>
                  <FaCreditCard size={16} className={styles.buttonIcon} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <div className={styles.confirmation}>
              <div className={styles.successIcon}>
                <FaCheckCircle />
              </div>
              <h2>¡Pedido realizado con éxito!</h2>
              <p className={styles.orderNumber}>
                Número de pedido: {orderNumber}
              </p>
              <p>
                Hemos enviado un correo de confirmación a{" "}
                <strong>{formData.email}</strong>
              </p>

              <div className={styles.actions}>
                <Link
                  href="/"
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Seguir comprando
                </Link>
                <Link
                  href="/orders"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  Ver mis pedidos
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.orderSummary}>
            <h3>Resumen del Pedido</h3>
            <div className={styles.summaryItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.quantity}</span>
                  </div>
                  <div className={styles.itemDetails}>
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summaryTotals}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Envío</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Impuestos (15%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
