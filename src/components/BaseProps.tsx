// Base properties for almost any component in the system. Attempting to get better at DRY code.

export interface BaseProps {
  id?: string;
  adlClasses?: string | string[];
  children?: React.ReactNode; 
}