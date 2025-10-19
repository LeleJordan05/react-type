import { useState, useRef } from "react";

export function useFileUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
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
