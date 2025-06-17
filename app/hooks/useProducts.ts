import { Product } from "@/types/products";
import { useState } from "react";

export const useProducts = () => {
    
  const [products, setProducts] = useState<Product[]>([
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749877591/717Lo8oZaAL._AC_UF894_1000_QL80__v8f2n2.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878041/G14-White-53_06_yxozt2.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878056/00xTIwo4AQMjnWl4H4ctDCq-1..v1643394203_ioua4z.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878055/450_1000_x24svl.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878054/csm_luke_chesser_tgrBcf7S_dY_unsplash_49af4fd126_p0xppn.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878052/ram-32gb-2-x-16gb-ddr4-4000mhz-corsair-dominator-platinum-rgb840006639886_pphnbi.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878051/MNT-32BN88U-B-02-UHD-4K-IPS-M_zmrx7v.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878050/w260_ru39ev.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878048/Keychron-Q3-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-80-percent-layout-aluminum-black-for-Mac-WIndows-Linux-RGB-backlight-hot-swappable-K-Pro-switch-red-ISO-Nordic-layout_iraz7k.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878048/design-large_cpw473.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878046/6690915-800-800_i27ash.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878045/2311854_znxnm7.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878044/Xiaomi-Redmi-Note-12-Pro-Plus-5G-256GB-8GB-Factory-Unlocked-6-67-200MP-Triple-Camera-for-Tmobile-Metro-Mint-Tello-US-Market-Global-Polar-White_4b927f31-4c8e-4548-ab10-ed91ee1814a3.863cb437a616312d871a7bfaec580e77_ocyutl.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878043/Pixel_7A_Colors_1.width-500.format-webp_vn5zi4.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878041/w250_xes0yj.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878200/658ece949a3e9505e85aaa46-nubia-redmagic-8-pro-global-version-5g_tdqvbn.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878205/A1289011_TD02_V1_yl408d.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878204/ESR-HaloLock-MagSafe-Ring_blo13n.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878201/bcB3Kdypuv8MAA5GZZM3b_ja6via.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878963/asi-sera-el-aspecto-de-la-consola-xbox-series-H5NHY3CJ4RDZ7LUMGWNM2NV7XM_sdpfcf.avif",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878961/c0_nxvtwe.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878959/81Wsrt05uLL._AC_SL1500__mjkh7d.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878956/design-medium_c6p3qc.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878954/23_TITAN-Evo-Lite_Blog_Main-1_kephpw.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878952/Bose-QuietComfort-Ultra-Wireless-Noise-Cancelling-Bluetooth-Headphones-Black_9af59772-fafc-4d0d-9c35-4c46bfcc2808.4c3e254a695cfbe27591141057fac602_shhu0h.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878949/maxresdefault_roszcx.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878948/e44ff3c9c02a6fcaefae13fdbde00322371145c7-2000x2000_ro1x6q.avif",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878979/fe48125157f3ebad71f5a9f57a1aeceb_vxxniv.avif",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878976/h525_bczsqw.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878974/SWITCH-TP-LINK-TL-SG108PE--GIGABIT-8PTOS--EASY-SMART-4-PORTS-POE_-1_tfdan1.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878972/a17836-productpicture-hires-es-es-et-4850-1_header_2000x2000_png_sszdjy.png",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878970/image-acebefcdaa53463884e53b3404e077c8_lnpxty.webp",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878968/computadora-todo-en-uno-lenovo-thinkcentre-m90a-intel-core-i5-12500-vpro_zbgxu6.jpg",
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
          image: "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878966/Diapositiva2-289_piqplh.jpg",
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
  ]);

  //Agregar producto
  const addProduct = (product: Omit<Product, 'id'>) => {
    const lastId = products[products.length -1].id;
    const newId = Number(lastId.slice(1)) + 1;
    setProducts((prevProducts) => [...prevProducts, {...product, id: `p${newId}` }]);
  }

  //Editar producto
  const editProduct = (product: Product) => {
    setProducts((prevProducts) => prevProducts.map((p) => p.id === product.id ? product : p));
  }
  //Eliminar producto
      
  const deleteProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };
    
  return { products, setProducts, deleteProduct, addProduct, editProduct };
};
