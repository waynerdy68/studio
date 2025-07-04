'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SharedFormData {
  name: string;
  email: string;
  phone: string;
}

interface FormContextType {
  sharedData: SharedFormData;
  setSharedData: (data: Partial<SharedFormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [sharedData, setSharedDataState] = useState<SharedFormData>({
    name: '',
    email: '',
    phone: '',
  });

  const setSharedData = (data: Partial<SharedFormData>) => {
    setSharedDataState(prev => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
