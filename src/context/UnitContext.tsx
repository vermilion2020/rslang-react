import { createContext, useState } from 'react';

interface IUnitContext {
  page: number,
  unit: number,
  setPage: (page: number) => void,
  setUnit: (unit: number) => void
}

export const UnitContext = createContext<IUnitContext>({
  page: 1,
  unit: 1,
  setPage: (page) => {page},
  setUnit: (unit) => {unit}
});

export const UnitState = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(1);
  const [unit, setUnit] = useState(1);

  return (
    <UnitContext.Provider value={{ page, unit, setPage, setUnit }}>
      { children }
    </UnitContext.Provider>
  );
}