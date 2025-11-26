import { Button } from "@/components/ui/button";
import { useState } from "react";
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
import { useFileUpload } from "@/store/useFileUpload";
import { useForm } from "react-hook-form";
import { UpdateUserPayload, User } from "@/types/User";
import { UpdateBookPayload, Book } from "@/types/Book";
import { useUpdateUser } from "@/hooks/useUsers";
import { useUpdateBook } from "@/hooks/useBooks";
import { toast } from "sonner";

export function EditUser({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const { mutate: updateUser, isPending } = useUpdateUser();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateUserPayload>({
    defaultValues: {
      name: user.name,
      ...( { createdAt: new Date(user.createdAt).toLocaleDateString("it-IT") } as any ),
    },
  });
  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmitUser = (data: UpdateUserPayload) => {
    const image = preview ?? user.avatar;
    if (!image) {
      setError("avatar" as any, {
        type: "required",
        message: "La foto è obbligatoria",
      });
      return;
    }
    updateUser(
      { id: user.id, data: { name: data.name, avatar: image } },
      {
        onSuccess: () => {
          reset();
          clearFile();
          setOpen(false);
          toast.success(`Utente "${data.name}" aggiornato con successo`);
        },
        onError: () => {
          toast.error("Errore durante l'aggiornamento dell'utente");
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="editbtn">
        <Button type="button" variant="outline"> Modifica</Button>
      </DialogTrigger>
      <DialogContent className="p-6 h-auto md:w-100 w-80">
        <form onSubmit={handleSubmit(onSubmitUser)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="font-medium">Modifica Utente</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo profilo. Clicca su Salva quando hai
              finito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="photo">Foto profilo</Label>
              <input type="hidden" {...register("avatar", { required: "La foto è obbligatoria" })} />

              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="inputform hidden"
                name="photo"
                ref={fileInputRef}
                disabled={!!fileName}
                onChange={(e) => {
                  handleFileChange(e);
                  setValue("avatar" as any, e.target.files && e.target.files.length > 0 ? "selected" : "");
                  clearErrors("avatar");
                }}
              />
              <div className="flex items-center gap-2 inputform">
                <Button
                  type="button"
                  className="w-full  text-black cursor-pointer"
                  onClick={openFileDialog}
                  disabled={!!fileName}
                >
                  {fileName ?? "Seleziona una foto"}
                </Button>

                {fileName && (
                  <button
                    type="button"
                    onClick={() => {
                      clearFile();
                      setValue("avatar" as any, "");
                    }}
                    className="text-red-500 cursor-pointer hover:text-red-700 font-bold text-lg -ml-8"
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
                  className="md:h-24 md:w-24 h-20 w-20 rounded-lg "
                />
              )}
              {errors.avatar && (
                <span className="errormessage">{(errors as any).avatar.message}</span>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input
                id="name-1"
                className="inputform"
                {...register("name")}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="created-at-user">Creato il:</Label>
              <Input
                id="created-at-user"
                className="inputform"
                disabled
                {...register("createdAt" as any)}
              />
            </div>
          </div>
          <DialogFooter className="md:pt-7 pt-3">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn" disabled={isPending} >
              {isPending ? "Salvataggio..." : "Salva"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EditBook({ book }: { book: Book }) {
  const [open, setOpen] = useState(false);
  const { mutate: updateBook, isPending } = useUpdateBook();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateBookPayload>({
    defaultValues: {
      name: book.name,
      description: book.description,
      buyUrl: book.buyUrl,
      ...( { createdAt: new Date(book.createdAt).toLocaleDateString("it-IT") } as any ),
    },
  });
  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmitBook = (data: UpdateBookPayload) => {
    const image = preview ?? book.picture;
    if (!image) {
      setError("picture" as any, {
        type: "required",
        message: "La foto è obbligatoria",
      });
      return;
    }
    updateBook(
      {
        id: book.id,
        data: {
          name: data.name,
          description: data.description,
          buyUrl: data.buyUrl,
          picture: image,
        },
      },
      {
        onSuccess: () => {
          reset();
          clearFile();
          setOpen(false);
          toast.success(`Libro "${data.name}" aggiornato con successo`);
        },
        onError: () => {
          toast.error("Errore durante l'aggiornamento del libro");
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="editbtn">
        <Button type="button" variant="outline">Modifica</Button>
      </DialogTrigger>
      <DialogContent className="md:p-6 p-4 h-130 overflow-y-auto md:h-auto md:w-100 w-80">
        <form onSubmit={handleSubmit(onSubmitBook)} className="grid md:gap-4 gap-2">
          <DialogHeader>
            <DialogTitle className="font-medium">Modifica libro</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo libro. Clicca su Salva quando hai
              finito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid md:gap-3 gap-1">
              <Label htmlFor="photo">Foto libro</Label>
              {/* Hidden field registered with RHF to surface validation errors */}
              <input type="hidden" {...register("picture", { required: "La foto è obbligatoria" })} />

              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="inputform hidden"
                name="photo"
                ref={fileInputRef}
                disabled={!!fileName}
                onChange={(e) => {
                  handleFileChange(e);
                  setValue("picture" as any, e.target.files && e.target.files.length > 0 ? "selected" : "");
                  clearErrors("picture");
                }}
              />
              <div className="flex items-center gap-2 inputform">
                <Button
                  type="button"
                  className="w-full  text-black cursor-pointer"
                  onClick={openFileDialog}
                  disabled={!!fileName}
                >
                  {fileName ?? "Seleziona una foto"}
                </Button>

                {fileName && (
                  <button
                    type="button"
                    onClick={() => {
                      clearFile();
                      setValue("picture" as any, "");
                    }}
                    className="text-red-500 cursor-pointer hover:text-red-700 font-bold text-lg -ml-8"
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
                  className="md:h-24 md:w-24  h-20 w-20 rounded-lg object-cover"
                />
              )}
              {errors.picture && (
                <span className="errormessage">{(errors as any).picture.message}</span>
              )}
            </div>

            <div className="grid md:gap-3 gap-1">
              <Label htmlFor="name-1">Nome</Label>
              <Input id="name-1" className="inputform" {...register("name")} />
            </div>
            <div className="grid md:gap-3 gap-1">
              <Label htmlFor="created-at-book">Creato il:</Label>
              <Input
                id="created-at-book"
                className="inputform"
                disabled
                {...register("createdAt" as any)}
              />
            </div>
            <div className="grid md:gap-3 gap-1">
              <Label htmlFor="descrizione">Descrizione</Label>
              <Input id="descrizione" className="inputform" {...register("description")} />
            </div>
            <div className="grid md:gap-3 gap-1">
              <Label htmlFor="link">Link - Acquista</Label>
              <Input id="link" className="inputform" {...register("buyUrl")} />
            </div>
          </div>
          <DialogFooter className="md:pt-7 pt-3">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn" disabled={isPending}>
              Salva
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
