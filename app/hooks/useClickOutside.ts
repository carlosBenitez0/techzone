"use client";
import { RefObject, useEffect, useRef } from "react";

/**
 * Custom hook que detecta clics fuera de un elemento
 * @param callback Función que se ejecutará cuando se haga clic fuera
 * @param excludeRefs Array de referencias a elementos que no deben trigger el callback
 * @returns RefObject que debe asignarse al elemento a observar
 */
export const useClickOutside = <
  T extends HTMLElement | HTMLDivElement = HTMLElement | HTMLDivElement
>(
  callback: () => void,
  excludeRefs?: RefObject<HTMLElement | HTMLDivElement>[]
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // 1. Verificar si el clic fue en el elemento o sus hijos
      if (!ref.current?.contains(event.target as Node)) {
        // 2. Verificar si el clic fue en elementos excluidos
        const clickedOnExcluded = excludeRefs?.some((excludedRef) =>
          excludedRef.current?.contains(event.target as Node)
        );

        // 3. Si no fue en elementos excluidos, ejecutar callback
        if (!clickedOnExcluded) {
          callback();
        }
      }
    };

    // Agregar event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Limpieza: remover event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback, excludeRefs]);

  return ref;
};
