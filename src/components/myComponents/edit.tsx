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
import { useFileUpload } from "@/store/useFileUpload";
import { useForm } from "react-hook-form";
import { UpdateUserPayload, User } from "@/types/User";
import { UpdateBookPayload, Book } from "@/types/Book";
import { useUpdateUser } from "@/hooks/useUsers";
import { useUpdateBook } from "@/hooks/useBooks";

export function EditUser({ user }: { user: User }) {
  const { mutate: updateUser, isPending } = useUpdateUser();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateUserPayload>({
    defaultValues: {
      name: user.name,
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

  return (
    <Dialog>
      <form
        onSubmit={handleSubmit((data) => {
          if (!preview) {
            setError("avatar" as any, {
              type: "required",
              message: "La foto è obbligatoria",
            });
            return;
          }
          updateUser({ id: user.id, data: { name: data.name, avatar: preview } });
        })}
      >
        <DialogTrigger asChild className="editbtn">
          <Button variant="outline"> Modifica</Button>
        </DialogTrigger>
        <DialogContent className="p-6 h-auto">
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
              {/* Hidden field registered with RHF to surface validation errors */}
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
                  className="h-24 w-24 rounded-full object-cover border"
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
          <DialogFooter className="pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn" disabled={isPending}>
              Salva
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export function EditBook({ book }: { book: Book }) {
  const { mutate: updateBook, isPending } = useUpdateBook();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateBookPayload>({
    defaultValues: {
      name: book.name,
      description: book.description,
      buyUrl: book.buyUrl,
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

  return (
    <Dialog>
      <form
        onSubmit={handleSubmit((data) => {
          if (!preview) {
            setError("picture" as any, {
              type: "required",
              message: "La foto è obbligatoria",
            });
            return;
          }
          updateBook({ id: book.id, data: { name: data.name, description: data.description, buyUrl: data.buyUrl, picture: preview } });
        })}
      >
        <DialogTrigger asChild className="editbtn">
          <Button variant="outline">Modifica</Button>
        </DialogTrigger>
        <DialogContent className="p-6 h-auto">
          <DialogHeader>
            <DialogTitle className="font-medium">Modifica libro</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo libro. Clicca su Salva quando hai
              finito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
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
                  className="w-70 pl-11 cursor-pointer"
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
                    className="text-red-500 cursor-pointer hover:text-red-700 font-bold text-lg ml-8"
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
                  className="h-24 w-24 rounded-full object-cover border"
                />
              )}
              {errors.picture && (
                <span className="errormessage">{(errors as any).picture.message}</span>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input id="name-1" className="inputform" {...register("name")} />
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
              <Input id="descrizione" className="inputform" {...register("description")} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link">Link - Acquista</Label>
              <Input id="link" className="inputform" {...register("buyUrl")} />
            </div>
          </div>
          <DialogFooter className="pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn" disabled={isPending}>
              Salva
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
