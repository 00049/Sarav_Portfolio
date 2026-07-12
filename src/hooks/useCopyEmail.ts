import { useState, useCallback } from "react";
import { socialLinks } from "@/lib/data/site";

export function useCopyEmail(onSuccess?: () => void) {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    const email = socialLinks.find(l => l.label === "Email")?.href.replace("mailto:", "") || "Sarav.pruthi@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  }, [onSuccess]);

  return { copied, copyEmail };
}
