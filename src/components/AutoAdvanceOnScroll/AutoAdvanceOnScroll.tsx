import React, { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type AutoAdvanceOnScrollProps = {
  /**
   * Ordered list of route paths to advance through.
   * Include '/' for the index page if desired.
   */
  routeOrder?: string[];
  /**
   * Intersection threshold to consider the sentinel visible.
   */
  threshold?: number;
  /**
   * Delay before navigating (ms) to avoid jank when the sentinel first appears.
   */
  navigateDelayMs?: number;
  /**
   * Enable navigating to the previous route when the top sentinel is visible.
   */
  enableUpwardNavigation?: boolean;
};

const DEFAULT_ROUTE_ORDER: string[] = ['/home', '/about-me', '/portfolio', '/journey', '/contact'];

// Global cooldown to prevent rapid skipping across multiple pages
let lastNavigationAtMs = 0;
const MIN_NAV_INTERVAL_MS = 500;
const ARM_DELAY_MS = 0; // arm immediately after route change
const MIN_SCROLL_DELTA_TO_NAV = 200; // require user scroll this much before next auto-advance

export const AutoAdvanceOnScroll: React.FC<AutoAdvanceOnScrollProps> = ({
  routeOrder = DEFAULT_ROUTE_ORDER,
  threshold = 0.75,
  navigateDelayMs = 0,
  enableUpwardNavigation = false,
}: AutoAdvanceOnScrollProps) => {
  const hasNavigatedRef = useRef<boolean>(false);
  const isArmedRef = useRef<boolean>(false);
  const armedAtScrollYRef = useRef<number>(0);
  const userScrolledRef = useRef<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Normalize certain aliases to ensure correct ordering (e.g., '/about' -> '/')
  const normalizedPathname = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    hasNavigatedRef.current = false; // Reset per page
    isArmedRef.current = false;
    userScrolledRef.current = false;

    // Always start each page at top to ensure visible content and prevent re-trigger loops
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.removeAttribute('data-nav-direction');

    // Set up listeners to detect real user scroll attempts (for pages without scroll space)
    const onWheel = () => {
      userScrolledRef.current = true;
    };
    const onTouchMove = () => {
      userScrolledRef.current = true;
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Arm immediately (no visual delay)
    if (ARM_DELAY_MS <= 0) {
      isArmedRef.current = true;
      armedAtScrollYRef.current = window.scrollY;
      return () => {
        window.removeEventListener('wheel', onWheel as EventListener);
        window.removeEventListener('touchmove', onTouchMove as EventListener);
      };
    } else {
      const t = window.setTimeout(() => {
        isArmedRef.current = true;
        armedAtScrollYRef.current = window.scrollY;
      }, ARM_DELAY_MS);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener('wheel', onWheel as EventListener);
        window.removeEventListener('touchmove', onTouchMove as EventListener);
      };
    }
  }, [normalizedPathname]);

  useEffect(() => {
    const rootHasScrollableSpace = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      return scrollHeight > clientHeight + 16; // small buffer
    };

    const navigateWithTransition = (path: string, direction: 'forward' | 'backward') => {
      document.documentElement.setAttribute('data-nav-direction', direction);
      const perform = () => navigate(path);
      const doc = document as Document & { startViewTransition?: (callback: () => void) => void };
      if (typeof doc.startViewTransition === 'function') {
        doc.startViewTransition(() => {
          perform();
        });
      } else {
        perform();
      }
      window.setTimeout(() => {
        document.documentElement.removeAttribute('data-nav-direction');
      }, 600);
    };

    const canNavigate = () => {
      const now = Date.now();
      if (now - lastNavigationAtMs < MIN_NAV_INTERVAL_MS) return false;
      if (!isArmedRef.current) return false;
      const { scrollHeight, clientHeight } = document.documentElement;
      const hasScrollSpace = scrollHeight > clientHeight + 16;
      const scrolledDelta = Math.abs(window.scrollY - armedAtScrollYRef.current);
      if (hasScrollSpace) {
        if (scrolledDelta < MIN_SCROLL_DELTA_TO_NAV) return false;
      } else {
        if (!userScrolledRef.current) return false;
      }
      return true;
    };

    const onScroll = () => {
      if (hasNavigatedRef.current) return;
      if (!rootHasScrollableSpace()) return;
      if (!canNavigate()) return;

      const { scrollHeight, clientHeight } = document.documentElement;
      const maxScrollable = Math.max(1, scrollHeight - clientHeight);
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScrollable));

      if (progress >= threshold) {
        const index = routeOrder.indexOf(normalizedPathname);
        if (index === -1) return;
        const isLast = index >= routeOrder.length - 1;
        hasNavigatedRef.current = true;
        const nextPath = isLast ? routeOrder[0] : routeOrder[index + 1];
        lastNavigationAtMs = Date.now();
        navigateWithTransition(nextPath, 'forward');
      } else if (enableUpwardNavigation && window.scrollY <= 2) {
        const index = routeOrder.indexOf(normalizedPathname);
        if (index === -1) return;
        const isFirst = index <= 0;
        hasNavigatedRef.current = true;
        const prevPath = isFirst ? routeOrder[routeOrder.length - 1] : routeOrder[index - 1];
        lastNavigationAtMs = Date.now();
        navigateWithTransition(prevPath, 'backward');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll as EventListener);
    };
  }, [navigate, normalizedPathname, routeOrder, threshold, navigateDelayMs, enableUpwardNavigation]);

  return null;
};

export default AutoAdvanceOnScroll;



