export const productsData = [
  // ===== COMPUTACIÓN =====
  // Laptops
  {
    id: "p9",
    name: "Dell XPS 13 Plus",
    category: "Laptops",
    price: 1499.99,
    originalPrice: 1699.99,
    rating: 4.7,
    reviews: 92,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 18,
    freeShipping: true,
    featured: true,
    description:
      "Ultrabook premium con pantalla InfinityEdge 4K y procesador Intel Core i7 de 12ª generación.",
    specifications: {
      Procesador: "Intel Core i7-1260P",
      RAM: "16GB LPDDR5",
      Almacenamiento: "512GB SSD",
      Pantalla: '13.4" 4K UHD+',
      Peso: "1.24 kg",
    },
  },
  {
    id: "p10",
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1799.99,
    rating: 4.8,
    reviews: 134,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 9,
    freeShipping: true,
    featured: false,
    description:
      "Laptop gaming compacta con GPU RTX 3060 y pantalla QHD 120Hz.",
    specifications: {
      Procesador: "AMD Ryzen 9 6900HS",
      GPU: "RTX 3060 6GB",
      RAM: "16GB DDR5",
      Almacenamiento: "1TB SSD",
      Pantalla: '14" QHD 120Hz',
    },
  },

  // PCs de Escritorio
  {
    id: "p11",
    name: "HP Envy 34 All-in-One",
    category: "PCs de Escritorio",
    price: 2199.99,
    rating: 4.6,
    reviews: 47,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 5,
    freeShipping: true,
    featured: true,
    description:
      'PC todo-en-uno con pantalla curva 34" 5K y procesador Intel Core i9.',
    specifications: {
      Procesador: "Intel Core i9-12900",
      RAM: "32GB DDR4",
      Almacenamiento: "1TB SSD + 1TB HDD",
      Pantalla: '34" 5K Curva',
      GPU: "RTX 3060 8GB",
    },
  },
  {
    id: "p12",
    name: "Corsair Vengeance i7200",
    category: "PCs de Escritorio",
    price: 2999.99,
    originalPrice: 3299.99,
    rating: 4.9,
    reviews: 68,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 7,
    freeShipping: true,
    featured: true,
    description:
      "Torre gaming de alto rendimiento con refrigeración líquida y RGB.",
    specifications: {
      Procesador: "Intel Core i9-13900K",
      GPU: "RTX 4080 16GB",
      RAM: "32GB DDR5 5600MHz",
      Almacenamiento: "2TB NVMe SSD",
      Refrigeración: "AIO 360mm",
    },
  },

  // Componentes
  {
    id: "p13",
    name: "AMD Ryzen 9 7950X",
    category: "Componentes",
    price: 699.99,
    rating: 4.9,
    reviews: 215,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 14,
    freeShipping: true,
    featured: true,
    description: "Procesador de 16 núcleos y 32 hilos con arquitectura Zen 4.",
    specifications: {
      Núcleos: "16",
      Hilos: "32",
      Frecuencia: "4.5GHz (hasta 5.7GHz)",
      Socket: "AM5",
      TDP: "170W",
    },
  },
  {
    id: "p14",
    name: "Corsair Dominator Platinum RGB 32GB",
    category: "Componentes",
    price: 249.99,
    rating: 4.7,
    reviews: 182,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 23,
    freeShipping: true,
    featured: false,
    description:
      "Kit de memoria DDR5 de 32GB (2x16GB) 5600MHz con iluminación RGB.",
    specifications: {
      Capacidad: "32GB (2x16GB)",
      Velocidad: "5600MHz",
      Latencia: "CL36",
      Voltaje: "1.25V",
      RGB: "iCUE compatible",
    },
  },

  // Monitores
  {
    id: "p15",
    name: "LG UltraFine 32UN880-B",
    category: "Monitores",
    price: 799.99,
    rating: 4.7,
    reviews: 96,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 11,
    freeShipping: true,
    featured: false,
    description: 'Monitor 4K 32" con ergonomía avanzada y USB-C 90W.',
    specifications: {
      Tamaño: '32"',
      Resolución: "3840 x 2160 (4K)",
      Panel: "IPS",
      "Tasa de refresco": "60Hz",
      Conectores: "USB-C, HDMI, DisplayPort",
    },
  },
  {
    id: "p16",
    name: "ASUS ROG Swift PG32UQX",
    category: "Monitores",
    price: 2999.99,
    rating: 4.8,
    reviews: 42,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 3,
    freeShipping: true,
    featured: true,
    description:
      'Monitor gaming 32" 4K HDR1400 con Mini LED y G-Sync Ultimate.',
    specifications: {
      Tamaño: '32"',
      Resolución: "3840 x 2160 (4K)",
      "Tasa de refresco": "144Hz",
      HDR: "HDR1400",
      Tecnología: "Mini LED",
    },
  },

  // Periféricos
  {
    id: "p17",
    name: "Keychron Q3 QMK Custom",
    category: "Periféricos",
    price: 169.99,
    rating: 4.9,
    reviews: 147,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 28,
    freeShipping: true,
    featured: false,
    description:
      "Teclado mecánico personalizable con estructura de aluminio y soporte QMK/VIA.",
    specifications: {
      Layout: "TKL",
      Switches: "Gateron G Pro (personalizable)",
      Material: "Aluminio CNC",
      Conectividad: "USB-C/Bluetooth",
      RGB: "Sí",
    },
  },
  {
    id: "p18",
    name: "Logitech MX Master 3S",
    category: "Periféricos",
    price: 99.99,
    rating: 4.8,
    reviews: 203,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 37,
    freeShipping: true,
    featured: true,
    description:
      "Mouse ergonómico para productividad con scroll electromagnético y multi-dispositivo.",
    specifications: {
      Sensor: "Darkfield 8000DPI",
      Botones: "7 programables",
      Conectividad: "Bluetooth/Unifying",
      Batería: "70 días",
      Compatibilidad: "Multi-OS",
    },
  },

  // ===== SMARTPHONES =====
  // Gama Alta
  {
    id: "p19",
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: 1199.99,
    rating: 4.9,
    reviews: 312,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 8,
    freeShipping: true,
    featured: true,
    description:
      "Flagship de Apple con chip A17 Pro, cámara de 48MP y diseño de titanio.",
    specifications: {
      Pantalla: '6.7" Super Retina XDR',
      Chip: "A17 Pro",
      RAM: "8GB",
      Almacenamiento: "256GB",
      Cámaras: "Triple 48MP+12MP+12MP",
    },
  },
  {
    id: "p20",
    name: "Samsung Galaxy S23 Ultra",
    category: "Smartphones",
    price: 1299.99,
    originalPrice: 1399.99,
    rating: 4.8,
    reviews: 278,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 12,
    freeShipping: true,
    featured: true,
    description: "Smartphone premium con S Pen integrado y cámara de 200MP.",
    specifications: {
      Pantalla: '6.8" Dynamic AMOLED 2X',
      Chip: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Almacenamiento: "512GB",
      Cámaras: "200MP+12MP+10MP+10MP",
    },
  },

  // Gama Media
  {
    id: "p21",
    name: "Xiaomi Redmi Note 12 Pro+",
    category: "Smartphones",
    price: 399.99,
    rating: 4.6,
    reviews: 154,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 25,
    freeShipping: false,
    featured: false,
    description: "Smartphone con cámara de 200MP y carga rápida de 120W.",
    specifications: {
      Pantalla: '6.67" AMOLED 120Hz',
      Chip: "Dimensity 1080",
      RAM: "8GB",
      Almacenamiento: "256GB",
      Carga: "120W HyperCharge",
    },
  },
  {
    id: "p22",
    name: "Google Pixel 7a",
    category: "Smartphones",
    price: 499.99,
    rating: 4.7,
    reviews: 187,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 19,
    freeShipping: true,
    featured: true,
    description: "Versión asequible del Pixel con Tensor G2 y cámara avanzada.",
    specifications: {
      Pantalla: '6.1" OLED 90Hz',
      Chip: "Google Tensor G2",
      RAM: "8GB",
      Almacenamiento: "128GB",
      Cámaras: "64MP+13MP",
    },
  },

  // Smartphones Gaming
  {
    id: "p23",
    name: "ASUS ROG Phone 7 Ultimate",
    category: "Smartphones",
    price: 1399.99,
    rating: 4.9,
    reviews: 76,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 6,
    freeShipping: true,
    featured: true,
    description:
      "Smartphone gaming con Snapdragon 8 Gen 2 y refrigeración activa.",
    specifications: {
      Pantalla: '6.78" AMOLED 165Hz',
      Chip: "Snapdragon 8 Gen 2",
      RAM: "16GB",
      Almacenamiento: "512GB",
      Refrigeración: "AeroActive Cooler 7",
    },
  },
  {
    id: "p24",
    name: "Nubia Red Magic 8 Pro",
    category: "Smartphones",
    price: 799.99,
    rating: 4.7,
    reviews: 92,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 14,
    freeShipping: true,
    featured: false,
    description: "Pantalla bajo cámara frontal, ventilador interno y 6000mAh.",
    specifications: {
      Pantalla: '6.8" AMOLED 120Hz under-display',
      Chip: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Almacenamiento: "256GB",
      Batería: "6000mAh",
    },
  },

  // Accesorios Smartphones
  {
    id: "p25",
    name: "Anker 737 Power Bank",
    category: "Smartphones",
    price: 129.99,
    rating: 4.8,
    reviews: 143,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 32,
    freeShipping: true,
    featured: false,
    description:
      "Power bank de 24000mAh con carga rápida PD 140W y pantalla digital.",
    specifications: {
      Capacidad: "24000mAh",
      Potencia: "140W (salida)",
      Puertos: "2x USB-C, 1x USB-A",
      Pantalla: "Digital LCD",
      "Carga simultánea": "3 dispositivos",
    },
  },
  {
    id: "p26",
    name: "ESR HaloLock MagSafe",
    category: "Smartphones",
    price: 39.99,
    rating: 4.6,
    reviews: 218,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 47,
    freeShipping: false,
    featured: false,
    description:
      "Soporte de coche MagSafe compatible con carga inalámbrica 15W.",
    specifications: {
      Compatibilidad: "MagSafe iPhone 12-15",
      Carga: "Inalámbrica 15W",
      Base: "Ventosa reforzada",
      Rotación: "360° ajustable",
      Material: "Aleación de aluminio",
    },
  },

  // ===== GAMING =====
  // Consolas
  {
    id: "p27",
    name: "PlayStation 5 Digital Edition",
    category: "Gaming",
    price: 399.99,
    rating: 4.9,
    reviews: 342,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 5,
    freeShipping: true,
    featured: true,
    description: "Edición digital de PS5 sin lector de discos, misma potencia.",
    specifications: {
      CPU: "AMD Zen 2 8-core",
      GPU: "AMD RDNA 2 10.3 TFLOPS",
      RAM: "16GB GDDR6",
      Almacenamiento: "825GB SSD",
      Resolución: "8K/120Hz",
    },
  },
  {
    id: "p28",
    name: "Xbox Series X",
    category: "Gaming",
    price: 499.99,
    rating: 4.8,
    reviews: 287,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 7,
    freeShipping: true,
    featured: true,
    description:
      "Consola más potente de Microsoft con 12 TFLOPS y Quick Resume.",
    specifications: {
      CPU: "AMD Zen 2 8-core",
      GPU: "AMD RDNA 2 12 TFLOPS",
      RAM: "16GB GDDR6",
      Almacenamiento: "1TB SSD",
      Tecnología: "Quick Resume",
    },
  },

  // PC Gaming
  {
    id: "p29",
    name: "Skytech Chronos Mini",
    category: "Gaming",
    price: 1299.99,
    rating: 4.7,
    reviews: 84,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 9,
    freeShipping: true,
    featured: false,
    description: "PC gaming pre-ensamblada con RTX 3060 Ti y Ryzen 5 5600X.",
    specifications: {
      CPU: "Ryzen 5 5600X",
      GPU: "RTX 3060 Ti 8GB",
      RAM: "16GB DDR4",
      Almacenamiento: "1TB NVMe SSD",
      Gabinete: "Vidrio templado RGB",
    },
  },

  // Periféricos Gaming
  {
    id: "p30",
    name: "Razer BlackWidow V4 Pro",
    category: "Gaming",
    price: 229.99,
    rating: 4.8,
    reviews: 127,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 14,
    freeShipping: true,
    featured: true,
    description:
      "Teclado mecánico gaming con switches Razer Green y pantalla táctil.",
    specifications: {
      Switches: "Razer Green (clicky)",
      Iluminación: "RGB Chroma",
      Teclas: "104 + rueda multimedia",
      Conexión: "USB/3.5mm",
      Pantalla: "Táctil OLED",
    },
  },
  {
    id: "p31",
    name: "SteelSeries Arctis Nova Pro",
    category: "Gaming",
    price: 349.99,
    rating: 4.9,
    reviews: 96,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 6,
    freeShipping: true,
    featured: true,
    description:
      "Headset gaming premium con cancelación de ruido y estación base.",
    specifications: {
      Drivers: "40mm neodimio",
      Frecuencia: "10-22000Hz",
      Micrófono: "Retráctil AI Noise-Cancel",
      Conectividad: "Wireless/3.5mm",
      "Estación base": "Dual conexión",
    },
  },

  // Sillas Gaming
  {
    id: "p32",
    name: "Secretlab Titan Evo 2023",
    category: "Gaming",
    price: 549.99,
    rating: 4.8,
    reviews: 215,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 4,
    freeShipping: true,
    featured: true,
    description:
      "Silla gaming premium con soporte lumbar magnético y tejido SoftWeave.",
    specifications: {
      Material: "SoftWeave Plus",
      PesoMaximo: "130kg",
      Ajustes: "4D brazos",
      SoporteLumbar: "Magnético L-ADAPT",
      Inclinación: "165°",
    },
  },

  // ===== AUDIO =====
  // Audífonos
  {
    id: "p33",
    name: "Bose QuietComfort Ultra",
    category: "Audio",
    price: 429.99,
    rating: 4.8,
    reviews: 178,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 12,
    freeShipping: true,
    featured: true,
    description:
      "Audífonos over-ear con cancelación de ruido líder y audio espacial.",
    specifications: {
      Cancelación: "Noise Cancelling+",
      Autonomía: "24h (ANC on)",
      Conectividad: "Bluetooth 5.3",
      Peso: "238g",
      "Audio espacial": "Bose Immersive",
    },
  },
  {
    id: "p34",
    name: "Sony WF-1000XM5",
    category: "Audio",
    price: 299.99,
    rating: 4.9,
    reviews: 243,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 18,
    freeShipping: true,
    featured: true,
    description:
      "True wireless con cancelación de ruido mejorada y sonido LDAC.",
    specifications: {
      Drivers: "8.4mm X",
      Cancelación: "ANC con 2 chips",
      Autonomía: "8h + 24h case",
      Codecs: "LDAC, AAC, SBC",
      Resistencia: "IPX4",
    },
  },

  // Bocinas
  {
    id: "p35",
    name: "Sonos Era 300",
    category: "Audio",
    price: 449.99,
    rating: 4.7,
    reviews: 87,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 9,
    freeShipping: true,
    featured: false,
    description:
      "Bocina inteligente con audio espacial Dolby Atmos y control por voz.",
    specifications: {
      Audio: "Dolby Atmos",
      Asistentes: "Amazon Alexa, Google",
      Conectividad: "Wi-Fi, Bluetooth, AirPlay",
      Drivers: "6 direccionales",
      "Smart Trueplay": "Sí",
    },
  },

  // Audio Profesional
  {
    id: "p36",
    name: "Shure SM7B",
    category: "Audio",
    price: 399.99,
    rating: 4.9,
    reviews: 412,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 7,
    freeShipping: true,
    featured: true,
    description:
      "Micrófono dinámico profesional para streaming, podcast y voz.",
    specifications: {
      Tipo: "Dinámico",
      Patrón: "Cardioide",
      Frecuencia: "50-20,000Hz",
      Impedancia: "150Ω",
      Conector: "XLR",
    },
  },

  // ===== REDES =====
  // Routers
  {
    id: "p37",
    name: "ASUS ROG Rapture GT-AX11000",
    category: "Redes",
    price: 449.99,
    rating: 4.7,
    reviews: 124,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 8,
    freeShipping: true,
    featured: true,
    description: "Router gaming tri-band WiFi 6 con puerto 2.5G y VPN Fusion.",
    specifications: {
      Velocidad: "11000 Mbps",
      Bands: "Tri-band (2.4+5+5GHz)",
      Puertos: "1x 2.5G, 4x 1G",
      VPN: "Fusion (multi-servidor)",
      "Game Boost": "Sí",
    },
  },

  // Switches
  {
    id: "p38",
    name: "TP-Link TL-SG108PE",
    category: "Redes",
    price: 79.99,
    rating: 4.6,
    reviews: 187,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 23,
    freeShipping: true,
    featured: false,
    description: "Switch PoE gestionable 8 puertos con 4 puertos PoE+ 65W.",
    specifications: {
      Puertos: "8x Gigabit",
      "Puertos PoE": "4x (65W total)",
      Gestión: "Web Smart",
      VLAN: "Soporte 802.1Q",
      "Calidad de servicio": "4 colas",
    },
  },

  // ===== IMPRESIÓN =====
  // Impresoras
  {
    id: "p39",
    name: "Epson EcoTank ET-4850",
    category: "Impresión",
    price: 399.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 11,
    freeShipping: true,
    featured: true,
    description:
      "Impresora multifuncional con sistema de tanques de tinta y WiFi.",
    specifications: {
      Tipo: "Inyección de tinta",
      Funciones: "Imprime/escanea/copia",
      "Tinta incluida": "2 años aprox.",
      Conectividad: "WiFi, Ethernet, USB",
      Velocidad: "15 ppm color",
    },
  },

  // 3D
  {
    id: "p40",
    name: "Creality Ender 3 V3 SE",
    category: "Impresión",
    price: 199.99,
    rating: 4.8,
    reviews: 213,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 14,
    freeShipping: true,
    featured: false,
    description:
      "Impresora 3D FDM de nivel básico con auto-nivelado y alta velocidad.",
    specifications: {
      Tecnología: "FDM",
      "Área impresión": "220x220x250mm",
      Velocidad: "250mm/s",
      Nivelado: "Auto CR-Touch",
      Temperatura: "260°C hotend",
    },
  },

  // ===== OFICINA =====
  // Equipos
  {
    id: "p41",
    name: "Lenovo ThinkCentre M90a",
    category: "Oficina",
    price: 1299.99,
    rating: 4.6,
    reviews: 67,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 6,
    freeShipping: true,
    featured: true,
    description: 'All-in-One empresarial con pantalla táctil 23.8" y vPro.',
    specifications: {
      Procesador: "Intel Core i7-1260P",
      RAM: "16GB DDR4",
      Almacenamiento: "512GB SSD",
      Pantalla: '23.8" FHD táctil',
      Seguridad: "TPM 2.0, vPro",
    },
  },

  // Conferencia
  {
    id: "p42",
    name: "Logitech MeetUp",
    category: "Oficina",
    price: 999.99,
    rating: 4.7,
    reviews: 53,
    image:
      "https://res.cloudinary.com/dc69f3e0o/image/upload/v1749846397/desktop-connected-to-monitor_y4uevg.avif",
    stock: 4,
    freeShipping: true,
    featured: false,
    description: "Kit de videoconferencia todo-en-uno para salas pequeñas.",
    specifications: {
      Cámara: "4K Ultra HD",
      Micrófono: "Array beamforming",
      Altavoz: "Full-range 3 drivers",
      Conectividad: "USB/Bluetooth",
      "Campo visión": "120°",
    },
  },
];

// Función para obtener productos destacados
export const getFeaturedProducts = () => {
  return productsData.filter((product) => product.featured);
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string) => {
  return productsData.filter((product) => product.category === category);
};

// Función para obtener un producto por ID
export const getProductById = (id: string) => {
  return productsData.find((product) => product.id === id);
};
