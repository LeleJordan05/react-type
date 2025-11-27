import { useState, useRef } from "react";

export function useFileUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Converti il file in base64 (data URL) per salvare permanentemente
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        setFileName(file.name);
      };
      reader.onerror = () => {
        setPreview(null);
        setFileName(null);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      setFileName(null);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    setPreview(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const setFromUrl = (url: string, name?: string) => {
    setPreview(url);
    setFileName(name ?? "immagine esistente");
  };

  return {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
    setFromUrl,
  };
}
