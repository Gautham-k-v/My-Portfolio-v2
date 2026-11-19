import { useMemo, useState } from "react";
import { EnquiryContext } from "./enquiry-context";

export default function EnquiryProvider({ children }) {
  const [request, setRequest] = useState({ projectType: "", token: 0 });

  const value = useMemo(
    () => ({
      projectType: request.projectType,
      token: request.token,
      selectProject(projectType) {
        setRequest((current) => ({ projectType, token: current.token + 1 }));
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.getElementById("enquiry")?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      },
    }),
    [request],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}
