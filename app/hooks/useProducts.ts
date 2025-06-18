import { Product } from "@/types/products";
import { useState } from "react";

export const useProducts = () => {
    
  const [products, setProducts] = useState<Product[]>([
    
        // ===== COMPUTACIÓN =====
        // Laptops
        {
          "id": "p9",
          "name": "Dell XPS 13 Plus",
          "category": "Laptops",
          "price": 1499.99,
          "originalPrice": 1699.99,
          "rating": 4.7,
          "reviews": 92,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749877591/717Lo8oZaAL._AC_UF894_1000_QL80__v8f2n2.jpg",
          "stock": 18,
          "freeShipping": true,
          "featured": true,
          "description": "Ultrabook premium con pantalla InfinityEdge 4K y procesador Intel Core i7 de 12ª generación.",
          "specifications": {
            "Procesador": "Intel Core i7-1260P",
            "RAM": "16GB LPDDR5",
            "Almacenamiento": "512GB SSD",
            "Pantalla": "13.4\" 4K UHD+",
            "Peso": "1.24 kg"
          }
        },
        {
          "id": "p10",
          "name": "ASUS ROG Zephyrus G14",
          "category": "Laptops",
          "price": 1799.99,
          "rating": 4.8,
          "reviews": 134,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878041/G14-White-53_06_yxozt2.jpg",
          "stock": 9,
          "freeShipping": true,
          "featured": false,
          "description": "Laptop gaming compacta con GPU RTX 3060 y pantalla QHD 120Hz.",
          "specifications": {
            "Procesador": "AMD Ryzen 9 6900HS",
            "GPU": "RTX 3060 6GB",
            "RAM": "16GB DDR5",
            "Almacenamiento": "1TB SSD",
            "Pantalla": "14\" QHD 120Hz"
          }
        },
        {
          "id": "p10_2",
          "name": "MacBook Air M2",
          "category": "Laptops",
          "price": 1199.99,
          "originalPrice": 1299.99,
          "rating": 4.9,
          "reviews": 250,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/macbook-air-m2_fclj4n.webp",
          "stock": 22,
          "freeShipping": true,
          "featured": true,
          "description": "Laptop ultradelgada y potente con el chip M2 de Apple, ideal para portabilidad y rendimiento.",
          "specifications": {
            "Procesador": "Apple M2",
            "RAM": "8GB unificada",
            "Almacenamiento": "256GB SSD",
            "Pantalla": "13.6\" Liquid Retina",
            "Peso": "1.24 kg"
          }
        },
        {
          "id": "p10_3",
          "name": "HP Spectre x360 14",
          "category": "Laptops",
          "price": 1349.99,
          "rating": 4.6,
          "reviews": 88,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/HP_Spectre_x360_14_j8v1wz.webp",
          "stock": 15,
          "freeShipping": true,
          "featured": false,
          "description": "Convertible 2 en 1 premium con diseño elegante, pantalla OLED y lápiz óptico incluido.",
          "specifications": {
            "Procesador": "Intel Core i7-1255U",
            "RAM": "16GB LPDDR4X",
            "Almacenamiento": "1TB NVMe SSD",
            "Pantalla": "13.5\" OLED 3K2K",
            "Peso": "1.34 kg"
          }
        },
        
        {
          "id": "p11",
          "name": "HP Envy 34 All-in-One",
          "category": "PCs de Escritorio",
          "price": 2199.99,
          "rating": 4.6,
          "reviews": 47,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878056/00xTIwo4AQMjnWl4H4ctDCq-1..v1643394203_ioua4z.jpg",
          "stock": 5,
          "freeShipping": true,
          "featured": true,
          "description": "PC todo-en-uno con pantalla curva 34\" 5K y procesador Intel Core i9.",
          "specifications": {
            "Procesador": "Intel Core i9-12900",
            "RAM": "32GB DDR4",
            "Almacenamiento": "1TB SSD + 1TB HDD",
            "Pantalla": "34\" 5K Curva",
            "GPU": "RTX 3060 8GB"
          }
        },
        {
          "id": "p12",
          "name": "Corsair Vengeance i7200",
          "category": "PCs de Escritorio",
          "price": 2999.99,
          "originalPrice": 3299.99,
          "rating": 4.9,
          "reviews": 68,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878055/450_1000_x24svl.jpg",
          "stock": 7,
          "freeShipping": true,
          "featured": true,
          "description": "Torre gaming de alto rendimiento con refrigeración líquida y RGB.",
          "specifications": {
            "Procesador": "Intel Core i9-13900K",
            "GPU": "RTX 4080 16GB",
            "RAM": "32GB DDR5 5600MHz",
            "Almacenamiento": "2TB NVMe SSD",
            "Refrigeración": "AIO 360mm"
          }
        },
        {
          "id": "p12_2",
          "name": "Apple Mac Studio M1 Ultra",
          "category": "PCs de Escritorio",
          "price": 3999.99,
          "rating": 4.9,
          "reviews": 55,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/mac-studio-m1-ultra_e4f2e3.webp",
          "stock": 3,
          "freeShipping": true,
          "featured": true,
          "description": "Estación de trabajo compacta y extremadamente potente con el chip M1 Ultra.",
          "specifications": {
            "Procesador": "Apple M1 Ultra",
            "RAM": "64GB unificada",
            "Almacenamiento": "1TB SSD",
            "Puertos": "Thunderbolt 4, USB-A, HDMI",
            "Conectividad": "Wi-Fi 6E, 10Gb Ethernet"
          }
        },
        {
          "id": "p12_3",
          "name": "Lenovo Legion Tower 7i",
          "category": "PCs de Escritorio",
          "price": 2499.99,
          "originalPrice": 2799.99,
          "rating": 4.7,
          "reviews": 40,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/lenovo-legion-tower-7i_e0c1f2.webp",
          "stock": 6,
          "freeShipping": true,
          "featured": false,
          "description": "Potente PC gaming con diseño optimizado para flujo de aire y componentes de última generación.",
          "specifications": {
            "Procesador": "Intel Core i7-13700K",
            "GPU": "RTX 4070 Ti 12GB",
            "RAM": "32GB DDR5",
            "Almacenamiento": "1TB NVMe SSD",
            "Refrigeración": "Líquida AIO"
          }
        },
        
        {
          "id": "p13",
          "name": "AMD Ryzen 9 7950X",
          "category": "Componentes",
          "price": 699.99,
          "rating": 4.9,
          "reviews": 215,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878054/csm_luke_chesser_tgrBcf7S_dY_unsplash_49af4fd126_p0xppn.jpg",
          "stock": 14,
          "freeShipping": true,
          "featured": true,
          "description": "Procesador de 16 núcleos y 32 hilos con arquitectura Zen 4.",
          "specifications": {
            "Núcleos": "16",
            "Hilos": "32",
            "Frecuencia": "4.5GHz (hasta 5.7GHz)",
            "Socket": "AM5",
            "TDP": "170W"
          }
        },
        {
          "id": "p14",
          "name": "Corsair Dominator Platinum RGB 32GB",
          "category": "Componentes",
          "price": 249.99,
          "rating": 4.7,
          "reviews": 182,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878052/ram-32gb-2-x-16gb-ddr4-4000mhz-corsair-dominator-platinum-rgb840006639886_pphnbi.png",
          "stock": 23,
          "freeShipping": true,
          "featured": false,
          "description": "Kit de memoria DDR5 de 32GB (2x16GB) 5600MHz con iluminación RGB.",
          "specifications": {
            "Capacidad": "32GB (2x16GB)",
            "Velocidad": "5600MHz",
            "Latencia": "CL36",
            "Voltaje": "1.25V",
            "RGB": "iCUE compatible"
          }
        },
        {
          "id": "p14_2",
          "name": "NVIDIA GeForce RTX 4090",
          "category": "Componentes",
          "price": 1599.99,
          "rating": 4.9,
          "reviews": 110,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/RTX_4090_s1f2g3.webp",
          "stock": 8,
          "freeShipping": true,
          "featured": true,
          "description": "Tarjeta gráfica de gama alta para gaming y creación de contenido 8K.",
          "specifications": {
            "VRAM": "24GB GDDR6X",
            "Interfaz": "PCIe 4.0",
            "Núcleos CUDA": "16384",
            "Conectores": "3x DisplayPort, 1x HDMI",
            "TDP": "450W"
          }
        },
        {
          "id": "p14_3",
          "name": "Samsung 990 Pro 2TB SSD",
          "category": "Componentes",
          "price": 189.99,
          "originalPrice": 229.99,
          "rating": 4.8,
          "reviews": 95,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/samsung-990-pro-ssd_a2b3c4.webp",
          "stock": 30,
          "freeShipping": true,
          "featured": false,
          "description": "SSD NVMe PCIe 4.0 de alto rendimiento para cargas de trabajo exigentes.",
          "specifications": {
            "Capacidad": "2TB",
            "Interfaz": "PCIe Gen4 x4 NVMe 2.0",
            "Lectura secuencial": "Hasta 7450 MB/s",
            "Escritura secuencial": "Hasta 6900 MB/s",
            "Cifrado": "AES 256-bit Full Disk Encryption"
          }
        },
        
        {
          "id": "p15",
          "name": "LG UltraFine 32UN880-B",
          "category": "Monitores",
          "price": 799.99,
          "rating": 4.7,
          "reviews": 96,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878051/MNT-32BN88U-B-02-UHD-4K-IPS-M_zmrx7v.jpg",
          "stock": 11,
          "freeShipping": true,
          "featured": false,
          "description": "Monitor 4K 32\" con ergonomía avanzada y USB-C 90W.",
          "specifications": {
            "Tamaño": "32\"",
            "Resolución": "3840 x 2160 (4K)",
            "Panel": "IPS",
            "Tasa de refresco": "60Hz",
            "Conectores": "USB-C, HDMI, DisplayPort"
          }
        },
        {
          "id": "p16",
          "name": "ASUS ROG Swift PG32UQX",
          "category": "Monitores",
          "price": 2999.99,
          "rating": 4.8,
          "reviews": 42,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878050/w260_ru39ev.png",
          "stock": 3,
          "freeShipping": true,
          "featured": true,
          "description": "Monitor gaming 32\" 4K HDR1400 con Mini LED y G-Sync Ultimate.",
          "specifications": {
            "Tamaño": "32\"",
            "Resolución": "3840 x 2160 (4K)",
            "Tasa de refresco": "144Hz",
            "HDR": "HDR1400",
            "Tecnología": "Mini LED"
          }
        },
        {
          "id": "p16_2",
          "name": "Dell UltraSharp U4021QW",
          "category": "Monitores",
          "price": 1699.99,
          "rating": 4.7,
          "reviews": 65,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/dell-ultrasharp-u4021qw_q5t6u7.webp",
          "stock": 7,
          "freeShipping": true,
          "featured": false,
          "description": "Monitor ultrawide curvo de 40 pulgadas con resolución 5K2K, ideal para productividad.",
          "specifications": {
            "Tamaño": "40\"",
            "Resolución": "5120 x 2160 (5K2K)",
            "Panel": "IPS curvo",
            "Tasa de refresco": "60Hz",
            "Conectores": "Thunderbolt 3, HDMI, DisplayPort"
          }
        },
        {
          "id": "p16_3",
          "name": "Samsung Odyssey Neo G9",
          "category": "Monitores",
          "price": 2199.99,
          "originalPrice": 2499.99,
          "rating": 4.9,
          "reviews": 70,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/samsung-odyssey-neo-g9_r8s9t0.webp",
          "stock": 4,
          "freeShipping": true,
          "featured": true,
          "description": "Monitor gaming ultrawide 49\" con Mini LED, 240Hz y 1ms de respuesta.",
          "specifications": {
            "Tamaño": "49\"",
            "Resolución": "5120 x 1440 (DQHD)",
            "Tasa de refresco": "240Hz",
            "HDR": "HDR2000",
            "Tecnología": "Mini LED"
          }
        },
        
        {
          "id": "p17",
          "name": "Keychron Q3 QMK Custom",
          "category": "Periféricos",
          "price": 169.99,
          "rating": 4.9,
          "reviews": 147,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878048/Keychron-Q3-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-80-percent-layout-aluminum-black-for-Mac-WIndows-Linux-RGB-backlight-hot-swappable-K-Pro-switch-red-ISO-Nordic-layout_iraz7k.webp",
          "stock": 28,
          "freeShipping": true,
          "featured": false,
          "description": "Teclado mecánico personalizable con estructura de aluminio y soporte QMK/VIA.",
          "specifications": {
            "Layout": "TKL",
            "Switches": "Gateron G Pro (personalizable)",
            "Material": "Aluminio CNC",
            "Conectividad": "USB-C/Bluetooth",
            "RGB": "Sí"
          }
        },
        {
          "id": "p18",
          "name": "Logitech MX Master 3S",
          "category": "Periféricos",
          "price": 99.99,
          "rating": 4.8,
          "reviews": 203,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878048/design-large_cpw473.jpg",
          "stock": 37,
          "freeShipping": true,
          "featured": true,
          "description": "Mouse ergonómico para productividad con scroll electromagnético y multi-dispositivo.",
          "specifications": {
            "Sensor": "Darkfield 8000DPI",
            "Botones": "7 programables",
            "Conectividad": "Bluetooth/Unifying",
            "Batería": "70 días",
            "Compatibilidad": "Multi-OS"
          }
        },
        {
          "id": "p18_2",
          "name": "Elgato Stream Deck MK.2",
          "category": "Periféricos",
          "price": 149.99,
          "rating": 4.7,
          "reviews": 112,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/elgato-stream-deck-mk2_x0y1z2.webp",
          "stock": 18,
          "freeShipping": true,
          "featured": false,
          "description": "Controlador con 15 teclas LCD personalizables para streamers y creadores de contenido.",
          "specifications": {
            "Teclas": "15 teclas LCD",
            "Interfaz": "USB 2.0",
            "Software": "Stream Deck software",
            "Compatibilidad": "Windows, macOS",
            "Funcionalidad": "Control de aplicaciones, escenas, audio"
          }
        },
        {
          "id": "p18_3",
          "name": "Logitech C920s HD Pro Webcam",
          "category": "Periféricos",
          "price": 69.99,
          "rating": 4.5,
          "reviews": 300,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/logitech-c920s_u3v4w5.webp",
          "stock": 45,
          "freeShipping": false,
          "featured": false,
          "description": "Webcam Full HD con enfoque automático y corrección de luz para videollamadas claras.",
          "specifications": {
            "Resolución": "1080p a 30fps",
            "Enfoque": "Automático",
            "Campo de visión": "78 grados",
            "Micrófono": "Doble estéreo",
            "Privacidad": "Tapa de privacidad"
          }
        },
        
        {
          "id": "p19",
          "name": "iPhone 15 Pro Max",
          "category": "Smartphones",
          "price": 1199.99,
          "rating": 4.9,
          "reviews": 312,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878046/6690915-800-800_i27ash.webp",
          "stock": 8,
          "freeShipping": true,
          "featured": true,
          "description": "Flagship de Apple con chip A17 Pro, cámara de 48MP y diseño de titanio.",
          "specifications": {
            "Pantalla": "6.7\" Super Retina XDR",
            "Chip": "A17 Pro",
            "RAM": "8GB",
            "Almacenamiento": "256GB",
            "Cámaras": "Triple 48MP+12MP+12MP"
          }
        },
        {
          "id": "p20",
          "name": "Samsung Galaxy S23 Ultra",
          "category": "Smartphones",
          "price": 1299.99,
          "originalPrice": 1399.99,
          "rating": 4.8,
          "reviews": 278,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878045/2311854_znxnm7.webp",
          "stock": 12,
          "freeShipping": true,
          "featured": true,
          "description": "Smartphone premium con S Pen integrado y cámara de 200MP.",
          "specifications": {
            "Pantalla": "6.8\" Dynamic AMOLED 2X",
            "Chip": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "Almacenamiento": "512GB",
            "Cámaras": "200MP+12MP+10MP+10MP"
          }
        },
        {
          "id": "p20_2",
          "name": "Google Pixel 8 Pro",
          "category": "Smartphones",
          "price": 999.99,
          "rating": 4.7,
          "reviews": 190,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/google-pixel-8-pro_p6q7r8.webp",
          "stock": 10,
          "freeShipping": true,
          "featured": true,
          "description": "El smartphone de Google con la mejor IA, chip Tensor G3 y cámaras excepcionales.",
          "specifications": {
            "Pantalla": "6.7\" Super Actua Display",
            "Chip": "Google Tensor G3",
            "RAM": "12GB",
            "Almacenamiento": "128GB",
            "Cámaras": "Triple 50MP+48MP+48MP"
          }
        },
        
        {
          "id": "p21",
          "name": "Xiaomi Redmi Note 12 Pro+",
          "category": "Smartphones",
          "price": 399.99,
          "rating": 4.6,
          "reviews": 154,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878044/Xiaomi-Redmi-Note-12-Pro-Plus-5G-256GB-8GB-Factory-Unlocked-6-67-200MP-Triple-Camera-for-Tmobile-Metro-Mint-Tello-US-Market-Global-Polar-White_4b927f31-4c8e-4548-ab10-ed91ee1814a3.863cb437a616312d871a7bfaec580e77_ocyutl.webp",
          "stock": 25,
          "freeShipping": false,
          "featured": false,
          "description": "Smartphone con cámara de 200MP y carga rápida de 120W.",
          "specifications": {
            "Pantalla": "6.67\" AMOLED 120Hz",
            "Chip": "Dimensity 1080",
            "RAM": "8GB",
            "Almacenamiento": "256GB",
            "Carga": "120W HyperCharge"
          }
        },
        {
          "id": "p22",
          "name": "Google Pixel 7a",
          "category": "Smartphones",
          "price": 499.99,
          "rating": 4.7,
          "reviews": 187,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878043/Pixel_7A_Colors_1.width-500.format-webp_vn5zi4.webp",
          "stock": 19,
          "freeShipping": true,
          "featured": true,
          "description": "Versión asequible del Pixel con Tensor G2 y cámara avanzada.",
          "specifications": {
            "Pantalla": "6.1\" OLED 90Hz",
            "Chip": "Google Tensor G2",
            "RAM": "8GB",
            "Almacenamiento": "128GB",
            "Cámaras": "64MP+13MP"
          }
        },
        {
          "id": "p22_2",
          "name": "Samsung Galaxy A54 5G",
          "category": "Smartphones",
          "price": 349.99,
          "originalPrice": 399.99,
          "rating": 4.5,
          "reviews": 210,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/samsung-galaxy-a54_g9h0i1.webp",
          "stock": 28,
          "freeShipping": false,
          "featured": false,
          "description": "Smartphone de gama media con excelente pantalla AMOLED, batería duradera y resistencia al agua.",
          "specifications": {
            "Pantalla": "6.4\" Super AMOLED 120Hz",
            "Chip": "Exynos 1380",
            "RAM": "6GB",
            "Almacenamiento": "128GB",
            "Cámaras": "50MP+12MP+5MP"
          }
        },
        
        {
          "id": "p23",
          "name": "ASUS ROG Phone 7 Ultimate",
          "category": "Smartphones",
          "price": 1399.99,
          "rating": 4.9,
          "reviews": 76,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878041/w250_xes0yj.png",
          "stock": 6,
          "freeShipping": true,
          "featured": true,
          "description": "Smartphone gaming con Snapdragon 8 Gen 2 y refrigeración activa.",
          "specifications": {
            "Pantalla": "6.78\" AMOLED 165Hz",
            "Chip": "Snapdragon 8 Gen 2",
            "RAM": "16GB",
            "Almacenamiento": "512GB",
            "Refrigeración": "AeroActive Cooler 7"
          }
        },
        {
          "id": "p24",
          "name": "Nubia Red Magic 8 Pro",
          "category": "Smartphones",
          "price": 799.99,
          "rating": 4.7,
          "reviews": 92,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878200/658ece949a3e9505e85aaa46-nubia-redmagic-8-pro-global-version-5g_tdqvbn.jpg",
          "stock": 14,
          "freeShipping": true,
          "featured": false,
          "description": "Pantalla bajo cámara frontal, ventilador interno y 6000mAh.",
          "specifications": {
            "Pantalla": "6.8\" AMOLED 120Hz under-display",
            "Chip": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "Almacenamiento": "256GB",
            "Batería": "6000mAh"
          }
        },
        {
          "id": "p24_2",
          "name": "Black Shark 5 Pro",
          "category": "Smartphones",
          "price": 699.99,
          "originalPrice": 749.99,
          "rating": 4.6,
          "reviews": 80,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/black-shark-5-pro_k2l3m4.webp",
          "stock": 11,
          "freeShipping": true,
          "featured": false,
          "description": "Smartphone gaming con gatillos físicos retráctiles y carga ultra rápida.",
          "specifications": {
            "Pantalla": "6.67\" AMOLED 144Hz",
            "Chip": "Snapdragon 8 Gen 1",
            "RAM": "8GB",
            "Almacenamiento": "128GB",
            "Gatillos": "Magnéticos retráctiles"
          }
        },
        
        {
          "id": "p25",
          "name": "Anker 737 Power Bank",
          "category": "Smartphones",
          "price": 129.99,
          "rating": 4.8,
          "reviews": 143,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878205/A1289011_TD02_V1_yl408d.webp",
          "stock": 32,
          "freeShipping": true,
          "featured": false,
          "description": "Power bank de 24000mAh con carga rápida PD 140W y pantalla digital.",
          "specifications": {
            "Capacidad": "24000mAh",
            "Potencia": "140W (salida)",
            "Puertos": "2x USB-C, 1x USB-A",
            "Pantalla": "Digital LCD",
            "Carga simultánea": "3 dispositivos"
          }
        },
        {
          "id": "p26",
          "name": "ESR HaloLock MagSafe",
          "category": "Smartphones",
          "price": 39.99,
          "rating": 4.6,
          "reviews": 218,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878204/ESR-HaloLock-MagSafe-Ring_blo13n.webp",
          "stock": 47,
          "freeShipping": false,
          "featured": false,
          "description": "Soporte de coche MagSafe compatible con carga inalámbrica 15W.",
          "specifications": {
            "Compatibilidad": "MagSafe iPhone 12-15",
            "Carga": "Inalámbrica 15W",
            "Base": "Ventosa reforzada",
            "Rotación": "360° ajustable",
            "Material": "Aleación de aluminio"
          }
        },
        {
          "id": "p26_2",
          "name": "PopSockets PopGrip",
          "category": "Smartphones",
          "price": 14.99,
          "rating": 4.7,
          "reviews": 500,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/popsockets-popgrip_n5o6p7.webp",
          "stock": 120,
          "freeShipping": false,
          "featured": false,
          "description": "Soporte y agarre extensible para smartphones, para mejor sujeción y visualización.",
          "specifications": {
            "Compatibilidad": "Universal",
            "Material": "Plástico, silicona",
            "Funcionalidad": "Agarre, soporte",
            "Diseño": "Intercambiable"
          }
        },
        
        {
          "id": "p27",
          "name": "PlayStation 5 Digital Edition",
          "category": "Gaming",
          "price": 399.99,
          "rating": 4.9,
          "reviews": 342,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878201/bcB3Kdypuv8MAA5GZZM3b_ja6via.png",
          "stock": 5,
          "freeShipping": true,
          "featured": true,
          "description": "Edición digital de PS5 sin lector de discos, misma potencia.",
          "specifications": {
            "CPU": "AMD Zen 2 8-core",
            "GPU": "AMD RDNA 2 10.3 TFLOPS",
            "RAM": "16GB GDDR6",
            "Almacenamiento": "825GB SSD",
            "Resolución": "8K/120Hz"
          }
        },
        {
          "id": "p28",
          "name": "Xbox Series X",
          "category": "Gaming",
          "price": 499.99,
          "rating": 4.8,
          "reviews": 287,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878963/asi-sera-el-aspecto-de-la-consola-xbox-series-H5NHY3CJ4RDZ7LUMGWNM2NV7XM_sdpfcf.avif",
          "stock": 7,
          "freeShipping": true,
          "featured": true,
          "description": "Consola más potente de Microsoft con 12 TFLOPS y Quick Resume.",
          "specifications": {
            "CPU": "AMD Zen 2 8-core",
            "GPU": "AMD RDNA 2 12 TFLOPS",
            "RAM": "16GB GDDR6",
            "Almacenamiento": "1TB SSD",
            "Tecnología": "Quick Resume"
          }
        },
        {
          "id": "p28_2",
          "name": "Nintendo Switch OLED",
          "category": "Gaming",
          "price": 349.99,
          "rating": 4.8,
          "reviews": 400,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/nintendo-switch-oled_q9r0s1.webp",
          "stock": 15,
          "freeShipping": true,
          "featured": true,
          "description": "La última versión de la consola híbrida de Nintendo con una pantalla OLED vibrante.",
          "specifications": {
            "Pantalla": "7\" OLED",
            "Almacenamiento": "64GB interno",
            "Modos de juego": "Modo TV, Modo sobremesa, Modo portátil",
            "Batería": "Hasta 9 horas",
            "Conectividad": "Wi-Fi, Bluetooth"
          }
        },
        
        {
          "id": "p29",
          "name": "Skytech Chronos Mini",
          "category": "Gaming",
          "price": 1299.99,
          "rating": 4.7,
          "reviews": 84,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878961/c0_nxvtwe.png",
          "stock": 9,
          "freeShipping": true,
          "featured": false,
          "description": "PC gaming pre-ensamblada con RTX 3060 Ti y Ryzen 5 5600X.",
          "specifications": {
            "CPU": "Ryzen 5 5600X",
            "GPU": "RTX 3060 Ti 8GB",
            "RAM": "16GB DDR4",
            "Almacenamiento": "1TB NVMe SSD",
            "Gabinete": "Vidrio templado RGB"
          }
        },
        {
          "id": "p29_2",
          "name": "Alienware Aurora R15",
          "category": "Gaming",
          "price": 1999.99,
          "originalPrice": 2299.99,
          "rating": 4.8,
          "reviews": 70,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/alienware-aurora-r15_t2u3v4.webp",
          "stock": 6,
          "freeShipping": true,
          "featured": true,
          "description": "Potente PC gaming con diseño renovado y excelente refrigeración.",
          "specifications": {
            "CPU": "Intel Core i9-13900F",
            "GPU": "RTX 4070 12GB",
            "RAM": "32GB DDR5",
            "Almacenamiento": "1TB NVMe SSD",
            "Iluminación": "AlienFX RGB"
          }
        },
        
        {
          "id": "p30",
          "name": "Razer BlackWidow V4 Pro",
          "category": "Gaming",
          "price": 229.99,
          "rating": 4.8,
          "reviews": 127,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878959/81Wsrt05uLL._AC_SL1500__mjkh7d.jpg",
          "stock": 14,
          "freeShipping": true,
          "featured": true,
          "description": "Teclado mecánico gaming con switches Razer Green y pantalla táctil.",
          "specifications": {
            "Switches": "Razer Green (clicky)",
            "Iluminación": "RGB Chroma",
            "Teclas": "104 + rueda multimedia",
            "Conexión": "USB/3.5mm",
            "Pantalla": "Táctil OLED"
          }
        },
        {
          "id": "p31",
          "name": "SteelSeries Arctis Nova Pro",
          "category": "Gaming",
          "price": 349.99,
          "rating": 4.9,
          "reviews": 96,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878956/design-medium_c6p3qc.jpg",
          "stock": 6,
          "freeShipping": true,
          "featured": true,
          "description": "Headset gaming premium con cancelación de ruido y estación base.",
          "specifications": {
            "Drivers": "40mm neodimio",
            "Frecuencia": "10-22000Hz",
            "Micrófono": "Retráctil AI Noise-Cancel",
            "Conectividad": "Wireless/3.5mm",
            "Estación base": "Dual conexión"
          }
        },
        {
          "id": "p31_2",
          "name": "Logitech G502 X Plus Lightspeed",
          "category": "Gaming",
          "price": 159.99,
          "rating": 4.7,
          "reviews": 180,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/logitech-g502x-plus_w5x6y7.webp",
          "stock": 25,
          "freeShipping": true,
          "featured": false,
          "description": "Ratón gaming inalámbrico con sensor HERO 25K y RGB LIGHTSYNC.",
          "specifications": {
            "Sensor": "HERO 25K",
            "DPI": "Hasta 25600",
            "Botones": "13 programables",
            "Peso": "106g (ajustable)",
            "Batería": "Hasta 120 horas"
          }
        },
        {
          "id": "p31_3",
          "name": "HyperX QuadCast S",
          "category": "Gaming",
          "price": 149.99,
          "rating": 4.6,
          "reviews": 98,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/hyperx-quadcast-s_z8a9b0.webp",
          "stock": 16,
          "freeShipping": true,
          "featured": false,
          "description": "Micrófono USB para streaming y gaming con 4 patrones polares y RGB dinámico.",
          "specifications": {
            "Tipo": "Condensador",
            "Patrones": "Estéreo, Omnidireccional, Cardioide, Bidireccional",
            "Conexión": "USB",
            "Frecuencia": "20Hz–20kHz",
            "Iluminación": "RGB personalizable"
          }
        },
        
        {
          "id": "p32",
          "name": "Secretlab Titan Evo 2023",
          "category": "Gaming",
          "price": 549.99,
          "rating": 4.8,
          "reviews": 215,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878954/23_TITAN-Evo-Lite_Blog_Main-1_kephpw.jpg",
          "stock": 4,
          "freeShipping": true,
          "featured": true,
          "description": "Silla gaming premium con soporte lumbar magnético y tejido SoftWeave.",
          "specifications": {
            "Material": "SoftWeave Plus",
            "PesoMaximo": "130kg",
            "Ajustes": "4D brazos",
            "SoporteLumbar": "Magnético L-ADAPT",
            "Inclinación": "165°"
          }
        },
        {
          "id": "p32_2",
          "name": "Razer Iskur X",
          "category": "Gaming",
          "price": 399.99,
          "originalPrice": 449.99,
          "rating": 4.6,
          "reviews": 105,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/razer-iskur-x_c2d3e4.webp",
          "stock": 8,
          "freeShipping": true,
          "featured": false,
          "description": "Silla gaming ergonómica con soporte lumbar esculpido y construcción robusta.",
          "specifications": {
            "Material": "Cuero sintético multicapa",
            "PesoMaximo": "136kg",
            "Ajustes": "2D apoyabrazos",
            "SoporteLumbar": "Ergonómico esculpido",
            "Inclinación": "139°"
          }
        },
        
        {
          "id": "p33",
          "name": "Bose QuietComfort Ultra",
          "category": "Audio",
          "price": 429.99,
          "rating": 4.8,
          "reviews": 178,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878952/Bose-QuietComfort-Ultra-Wireless-Noise-Cancelling-Bluetooth-Headphones-Black_9af59772-fafc-4d0d-9c35-4c46bfcc2808.4c3e254a695cfbe27591141057fac602_shhu0h.webp",
          "stock": 12,
          "freeShipping": true,
          "featured": true,
          "description": "Audífonos over-ear con cancelación de ruido líder y audio espacial.",
          "specifications": {
            "Cancelación": "Noise Cancelling+",
            "Autonomía": "24h (ANC on)",
            "Conectividad": "Bluetooth 5.3",
            "Peso": "238g",
            "Audio espacial": "Bose Immersive"
          }
        },
        {
          "id": "p34",
          "name": "Sony WF-1000XM5",
          "category": "Audio",
          "price": 299.99,
          "rating": 4.9,
          "reviews": 243,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878949/maxresdefault_roszcx.jpg",
          "stock": 18,
          "freeShipping": true,
          "featured": true,
          "description": "True wireless con cancelación de ruido mejorada y sonido LDAC.",
          "specifications": {
            "Drivers": "8.4mm X",
            "Cancelación": "ANC con 2 chips",
            "Autonomía": "8h + 24h case",
            "Codecs": "LDAC, AAC, SBC",
            "Resistencia": "IPX4"
          }
        },
        {
          "id": "p34_2",
          "name": "Apple AirPods Max",
          "category": "Audio",
          "price": 549.99,
          "rating": 4.7,
          "reviews": 150,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/apple-airpods-max_e5f6g7.webp",
          "stock": 9,
          "freeShipping": true,
          "featured": false,
          "description": "Audífonos over-ear con audio espacial, cancelación activa de ruido y modo de transparencia.",
          "specifications": {
            "Cancelación": "Activa de ruido",
            "Autonomía": "20h (ANC on)",
            "Conectividad": "Bluetooth 5.0",
            "Chip": "Apple H1",
            "Audio espacial": "Sí"
          }
        },
        
        {
          "id": "p35",
          "name": "Sonos Era 300",
          "category": "Audio",
          "price": 449.99,
          "rating": 4.7,
          "reviews": 87,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878948/e44ff3c9c02a6fcaefae13fdbde00322371145c7-2000x2000_ro1x6q.avif",
          "stock": 9,
          "freeShipping": true,
          "featured": false,
          "description": "Bocina inteligente con audio espacial Dolby Atmos y control por voz.",
          "specifications": {
            "Audio": "Dolby Atmos",
            "Asistentes": "Amazon Alexa, Google",
            "Conectividad": "Wi-Fi, Bluetooth, AirPlay",
            "Drivers": "6 direccionales",
            "Smart Trueplay": "Sí"
          }
        },
        {
          "id": "p35_2",
          "name": "JBL Flip 6",
          "category": "Audio",
          "price": 129.99,
          "rating": 4.8,
          "reviews": 320,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/jbl-flip-6_h8i9j0.webp",
          "stock": 40,
          "freeShipping": false,
          "featured": false,
          "description": "Bocina portátil con sonido potente, resistencia al agua y polvo, y 12 horas de batería.",
          "specifications": {
            "Potencia": "20W RMS",
            "Resistencia": "IP67",
            "Autonomía": "Hasta 12 horas",
            "Conectividad": "Bluetooth 5.1",
            "Funciones": "PartyBoost"
          }
        },
        
        {
          "id": "p36",
          "name": "Shure SM7B",
          "category": "Audio",
          "price": 399.99,
          "rating": 4.9,
          "reviews": 412,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878979/fe48125157f3ebad71f5a9f57a1aeceb_vxxniv.avif",
          "stock": 7,
          "freeShipping": true,
          "featured": true,
          "description": "Micrófono dinámico profesional para streaming, podcast y voz.",
          "specifications": {
            "Tipo": "Dinámico",
            "Patrón": "Cardioide",
            "Frecuencia": "50-20,000Hz",
            "Impedancia": "150Ω",
            "Conector": "XLR"
          }
        },
        {
          "id": "p36_2",
          "name": "Focusrite Scarlett 2i2 3rd Gen",
          "category": "Audio",
          "price": 169.99,
          "rating": 4.8,
          "reviews": 250,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/focusrite-scarlett-2i2_o1p2q3.webp",
          "stock": 10,
          "freeShipping": true,
          "featured": false,
          "description": "Interfaz de audio USB con dos entradas de micrófono/línea de alta calidad, ideal para músicos y podcasters.",
          "specifications": {
            "Entradas": "2 (XLR/TRS combo)",
            "Salidas": "2 (TRS)",
            "Phantom Power": "+48V",
            "Conexión": "USB-C",
            "Resolución": "Hasta 24-bit/192kHz"
          }
        },
        
        {
          "id": "p37",
          "name": "ASUS ROG Rapture GT-AX11000",
          "category": "Redes",
          "price": 449.99,
          "rating": 4.7,
          "reviews": 124,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878976/h525_bczsqw.png",
          "stock": 8,
          "freeShipping": true,
          "featured": true,
          "description": "Router gaming tri-band WiFi 6 con puerto 2.5G y VPN Fusion.",
          "specifications": {
            "Velocidad": "11000 Mbps",
            "Bands": "Tri-band (2.4+5+5GHz)",
            "Puertos": "1x 2.5G, 4x 1G",
            "VPN": "Fusion (multi-servidor)",
            "Game Boost": "Sí"
          }
        },
        {
          "id": "p37_2",
          "name": "Netgear Orbi RBKE963",
          "category": "Redes",
          "price": 1499.99,
          "rating": 4.8,
          "reviews": 50,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/netgear-orbi-rbke963_r4s5t6.webp",
          "stock": 3,
          "freeShipping": true,
          "featured": true,
          "description": "Sistema WiFi Mesh de banda cuádruple Wi-Fi 6E para cobertura en grandes hogares.",
          "specifications": {
            "Velocidad": "Hasta 10.8 Gbps",
            "Bands": "Quad-band (2.4+5+5+6GHz)",
            "Cobertura": "Hasta 8,000 pies cuadrados",
            "Puertos": "10GbE, 2.5GbE, Gigabit Ethernet",
            "Unidades": "1 Router + 2 Satélites"
          }
        },
        
        {
          "id": "p38",
          "name": "TP-Link TL-SG108PE",
          "category": "Redes",
          "price": 79.99,
          "rating": 4.6,
          "reviews": 187,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878974/SWITCH-TP-LINK-TL-SG108PE--GIGABIT-8PTOS--EASY-SMART-4-PORTS-POE_-1_tfdan1.jpg",
          "stock": 23,
          "freeShipping": true,
          "featured": false,
          "description": "Switch PoE gestionable 8 puertos con 4 puertos PoE+ 65W.",
          "specifications": {
            "Puertos": "8x Gigabit",
            "Puertos PoE": "4x (65W total)",
            "Gestión": "Web Smart",
            "VLAN": "Soporte 802.1Q",
            "Calidad de servicio": "4 colas"
          }
        },
        {
          "id": "p38_2",
          "name": "Ubiquiti UniFi Switch 24 PoE",
          "category": "Redes",
          "price": 499.99,
          "rating": 4.7,
          "reviews": 75,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/ubiquiti-unifi-switch-24-poe_u7v8w9.webp",
          "stock": 5,
          "freeShipping": true,
          "featured": false,
          "description": "Switch gestionado de 24 puertos Gigabit con 16 puertos PoE+ para redes empresariales.",
          "specifications": {
            "Puertos": "24x Gigabit RJ45",
            "Puertos PoE": "16x PoE+",
            "Potencia PoE": "95W",
            "Gestión": "UniFi Network Controller",
            "Factor de forma": "Montaje en rack"
          }
        },
        
        {
          "id": "p39",
          "name": "Epson EcoTank ET-4850",
          "category": "Impresión",
          "price": 399.99,
          "rating": 4.7,
          "reviews": 156,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749878972/a17836-productpicture-hires-es-es-et-4850-1_header_2000x2000_png_sszdjy.png",
          "stock": 11,
          "freeShipping": true,
          "featured": true,
          "description": "Impresora multifuncional con sistema de tanques de tinta y WiFi.",
          "specifications": {
            "Tipo": "Inyección de tinta",
            "Funciones": "Imprime, copia, escanea, fax",
            "Conectividad": "Wi-Fi, Ethernet, USB",
            "Resolución": "4800 x 1200 dpi",
            "Rendimiento de tinta": "Hasta 7,500 páginas (negro), 6,000 (color)"
          }
        },
        {
          "id": "p39_2",
          "name": "HP LaserJet Pro MFP M428fdw",
          "category": "Impresión",
          "price": 449.99,
          "originalPrice": 499.99,
          "rating": 4.5,
          "reviews": 90,
          "image": "https://res.cloudinary.com/dvwvxrfr1/image/upload/v1749880000/hp-laserjet-pro-mfp-m428fdw_x0y1z2.webp",
          "stock": 8,
          "freeShipping": true,
          "featured": false,
          "description": "Impresora láser multifunción con impresión a doble cara, WiFi y seguridad dinámica.",
          "specifications": {
            "Tipo": "Láser monocromo",
            "Funciones": "Imprime, copia, escanea, fax",
            "Velocidad": "Hasta 40 ppm",
            "Conectividad": "Wi-Fi, Ethernet, USB",
            "Ciclo de trabajo": "Hasta 80,000 páginas/mes"
          }
        }
      ]
    
  );

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
