import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

export function AddUser() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

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

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="adduser">
          <Button variant="outline"> Crea Utente </Button>
        </DialogTrigger>
        <DialogContent className="!p-6 !h-auto">
          <DialogHeader>
            <DialogTitle className="!font-medium">Crea Utente</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo profilo. Clicca su Crea quando hai
              finito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="photo">Foto profilo</Label>

              {/* input file nascosto */}
              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="inputform hidden"
                name="photo"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2 inputform">
                <Button
                  type="button"
                  className="!w-70 !pl-11 cursor-pointer"
                  onClick={openFileDialog}
                >
                  {fileName ?? "Seleziona una foto"}
                </Button>

                {fileName && (
                  <button
                    type="button"
                    onClick={clearFile}
                    className="!text-red-500 cursor-pointer hover:!text-red-700 !font-bold !text-lg !ml-8"
                    aria-label="Rimuovi foto"
                  >
                    ×
                  </button>
                )}
              </div>

              {preview && (
                <img
                  src={preview}
                  alt="Anteprima foto profilo"
                  className="!h-24 !w-24 rounded-full !object-cover !border"
                />
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input
                id="name-1"
                className="inputform"
                name="name"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Creato il:</Label>
              <Input
                id="username-1"
                className="inputform"
                name="username"
                disabled
                defaultValue="11/08/2025"
              />
            </div>
          </div>
          <DialogFooter className="!pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn">
              Crea
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export function AddBook() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

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

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="adduser">
          <Button variant="outline"> Aggiungi libro </Button>
        </DialogTrigger>
        <DialogContent className="!p-6 !h-auto">
          <DialogHeader>
            <DialogTitle className="!font-medium">Aggiungi libro</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo libro. Clicca su Aggiungi quando hai
              finito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="photo">Foto libro</Label>

              {/* input file nascosto */}
              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="inputform hidden"
                name="photo"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2 inputform">
                <Button
                  type="button"
                  className="!w-70 !pl-11 cursor-pointer"
                  onClick={openFileDialog}
                >
                  {fileName ?? "Seleziona una foto"}
                </Button>

                {fileName && (
                  <button
                    type="button"
                    onClick={clearFile}
                    className="!text-red-500 cursor-pointer hover:!text-red-700 !font-bold !text-lg !ml-8"
                    aria-label="Rimuovi foto"
                  >
                    ×
                  </button>
                )}
              </div>

              {preview && (
                <img
                  src={preview}
                  alt="Anteprima foto profilo"
                  className="!h-24 !w-24 rounded-full !object-cover !border"
                />
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input
                id="name-1"
                className="inputform"
                name="name"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="data">Creato il:</Label>
              <Input
                id="data"
                className="inputform"
                name="data"
                disabled
                defaultValue="11/08/2025"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="descrizione">Descrizione</Label>
              <Input
                id="descrizione"
                className="inputform"
                name="descrizione"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link">Link - Acquista</Label>
              <Input
                id="link"
                className="inputform"
                name="link"
                defaultValue=""
              />
            </div>
          </div>
          <DialogFooter className="!pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn">
              Aggiungi
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
