import { createContext, useContext } from "react";

export const EnquiryContext = createContext(null);

export function useEnquiry() {
  const value = useContext(EnquiryContext);
  if (!value) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return value;
}
