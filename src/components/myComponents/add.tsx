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
import { useForm } from "react-hook-form";
import { useFileUpload } from "@/store/useFileUpload";
import { useCreateUser, useUsers } from "@/hooks/useUsers";
import { useCreateBook } from "@/hooks/useBooks";
import { CreateUserPayload } from "@/types/User";
import { CreateBookPayload } from "@/types/Book";
import { useAddStore } from "@/store/useAddDialog";
import { toast } from "sonner";

export function AddUser() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CreateUserPayload>();
  const { mutate: createUser, isPending } = useCreateUser();
  const { isOpen, close } = useAddStore();
  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmit = (data: CreateUserPayload) => {
    if (!preview) {
      setError("avatar" as any, {
        type: "required",
        message: "La foto è obbligatoria",
      });
      return;
    }
    createUser(
      {
        name: data.name,
        avatar: preview ?? "",
        birthdate: data.birthdate,
      },
      {
        onSuccess: () => {
          reset();
          clearFile();
          toast.success(`Utente "${data.name}" creato con successo`);
        },
        onError: () => {
          toast.error("Errore durante la creazione dell'utente");
        },
      }
    );
  };

  return (
    <Dialog 
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          reset();
          clearFile();
        }
        !open ? close() : undefined;
      }}
    >
      <DialogTrigger asChild className="adduser">
        <Button variant="outline" onClick={() => useAddStore.getState().open()}>
          Crea Utente
        </Button>
      </DialogTrigger>

      <DialogContent className="p-6 h-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="font-medium">Crea Utente</DialogTitle>
            <DialogDescription>
              Inserisci i dati del tuo profilo e clicca su Crea.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3">
            <Label htmlFor="photo">Foto profilo</Label>
            {/* Hidden field registered with RHF to surface validation errors */}
            <input type="hidden" {...register("avatar", { required: "La foto è obbligatoria" })} />
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="inputform hidden"
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
                onClick={openFileDialog}
                disabled={!!fileName}
                className="w-full text-black cursor-pointer"
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
                >
                  ×
                </button>
              )}
            </div>
            {preview && (
              <img
                src={preview}
                alt="Anteprima"
                className="h-24 w-24 rounded-full object-cover border"
              />
            )}
            {errors.avatar && (
              <span className="errormessage">{errors.avatar.message}</span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className="inputform"
              {...register("name", { required: "Il nome è obbligatorio" })}
            />
            {errors.name && (
              <span className="errormessage">{errors.name.message}</span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="birthdate">Data di nascita</Label>
            <Input
              id="birthdate"
              type="date"
              className="inputform"
              {...register("birthdate", {
                required: "Inserire data di nascita",
              })}
            />
            {errors.birthdate && (
              <span className="errormessage">{errors.birthdate.message}</span>
            )}
          </div>

          <DialogFooter className="pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button className="bluebtn" disabled={isPending}>
              {isPending ? "Creazione..." : "Crea"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AddBook() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CreateBookPayload>();
  const { mutate: createArticle, isPending } = useCreateBook();
  const { data: users, isLoading } = useUsers();
  const { isOpen, close } = useAddStore();

  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmit = (data: CreateBookPayload) => {
    if (!preview) {
      setError("picture" as any, {
        type: "required",
        message: "La foto è obbligatoria",
      });
      return;
    }
    createArticle(
      {
        name: data.name,
        description: data.description,
        buyUrl: data.buyUrl,
        picture: preview ?? "",
        sellerId: data.sellerId,
      },
      {
        onSuccess: () => {
          reset();
          clearFile();
          toast.success(`Libro "${data.name}" aggiunto con successo`);
        },
        onError: () => {
          toast.error("Errore durante l'aggiunta del libro");
        },
      }
    );
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          reset();
          clearFile();
        }
        !open ? close() : undefined;
      }}
    >
      <DialogTrigger asChild className="addbook">
        <Button variant="outline" onClick={() => useAddStore.getState().open()}>
          Aggiungi Libro
        </Button>
      </DialogTrigger>

      <DialogContent className="p-6 h-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="font-medium">Aggiungi Libro</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo libro. Clicca su Aggiungi quando hai
              finito.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3">
            <Label htmlFor="photo">Foto libro</Label>
            {/* Hidden field registered with RHF to surface validation errors */}
            <input type="hidden" {...register("picture", { required: "La foto è obbligatoria" })} />
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="inputform hidden"
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
                >
                  ×
                </button>
              )}
            </div>
            {preview && (
              <img
                src={preview}
                alt="Anteprima copertina"
                className="h-24 w-24 rounded-full object-cover border"
              />
            )}
            {errors.picture && (
              <span className="errormessage">{errors.picture.message}</span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className="inputform"
              {...register("name", { required: "Il nome è obbligatorio" })}
            />
            {errors.name && (
              <span className="errormessage">{errors.name.message}</span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="descrizione">Descrizione</Label>
            <Input
              id="descrizione"
              className="inputform"
              {...register("description", {
                required: "La descrizione è obbligatoria",
                maxLength: {
                  value: 500,
                  message:
                    "La descrizione può contenere al massimo 500 caratteri",
                },
              })}
            />
            {errors.description && (
              <span className="errormessage">{errors.description.message}</span>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="link">Link - Acquista</Label>
            <Input
              id="link"
              className="inputform"
              {...register("buyUrl", {
                required: "Il link è obbligatorio",
                pattern: {
                  value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i,
                  message:
                    "Inserisci un URL valido (deve iniziare con http o https)",
                },
              })}
            />
            {errors.buyUrl && (
              <span className="errormessage">{errors.buyUrl.message}</span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sellerId">Venditore</Label>
            <select
              id="sellerId"
              className="inputform rounded p-2"
              {...register("sellerId", { required: "Associare ad un utente" })}
              disabled={isLoading}
            >
              <option value="">-- Seleziona un utente --</option>
              {users?.map((user: any) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            {errors.sellerId && (
              <span className="errormessage">{errors.sellerId.message}</span>
            )}
          </div>

          <DialogFooter className="pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending} className="bluebtn">
              {isPending ? "Salvataggio..." : "Aggiungi"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
