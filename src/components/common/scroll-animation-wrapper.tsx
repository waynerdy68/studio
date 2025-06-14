"use client"

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimationWrapperProps = {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: string; // e.g., 'delay-200'
  threshold?: number;
};

export function ScrollAnimationWrapper({
  children,
  className,
  animationClass = 'animate-fadeInUp',
  delay = '',
  threshold = 0.1,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (targetRef.current) {
               observer.unobserve(targetRef.current);
            }
          }
        });
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={targetRef}
      className={cn(
        'opacity-0', // Start hidden
        isVisible && animationClass,
        isVisible && delay,
        className
      )}
    >
      {children}
    </div>
  );
}
