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
import { useCreateUser } from "@/hooks/useUsers";
import { useCreateArticle } from "@/hooks/useArticles";
import { CreateUserPayload } from "@/types/User";
import { CreateArticlePayload } from "@/types/Article";

export function AddUser() {
  const { register, handleSubmit, reset } = useForm<CreateUserPayload>();
  const { mutate: createUser, isPending } = useCreateUser();
  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmit = (data: CreateUserPayload) => {
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
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="adduser">
        <Button variant="outline">Crea Utente</Button>
      </DialogTrigger>

      <DialogContent className="!p-6 !h-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="!font-medium">Crea Utente</DialogTitle>
            <DialogDescription>
              Inserisci i dati del tuo profilo e clicca su Crea.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3">
            <Label htmlFor="photo">Foto profilo</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="flex items-center gap-2 inputform">
              <Button
                type="button"
                onClick={openFileDialog}
                className="!w-70 !pl-11 cursor-pointer"
              >
                {fileName ?? "Seleziona una foto"}
              </Button>
              {fileName && (
                <button
                  type="button"
                  onClick={clearFile}
                  className="!text-red-500 cursor-pointer hover:!text-red-700 !font-bold !text-lg !ml-8"
                >
                  ×
                </button>
              )}
            </div>
            {preview && (
              <img
                src={preview}
                alt="Anteprima"
                className="!h-24 !w-24 rounded-full !object-cover !border"
              />
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className="inputform"
              {...register("name", { required: true })}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="birthdate">Data di nascita</Label>
            <Input
              id="birthdate"
              type="date"
              className="inputform"
              {...register("birthdate", { required: true })}
            />
          </div>

          <DialogFooter className="!pt-7">
            <DialogClose asChild>
              <Button className="whitebtn">Cancella</Button>
            </DialogClose>
            <Button type="submit" className="bluebtn" disabled={isPending}>
              {isPending ? "Creazione..." : "Crea"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AddBook() {
  const { register, handleSubmit, reset } = useForm<CreateArticlePayload>();
  const { mutate: createArticle, isPending } = useCreateArticle();

  const {
    preview,
    fileName,
    fileInputRef,
    handleFileChange,
    openFileDialog,
    clearFile,
  } = useFileUpload();

  const onSubmit = (data: CreateArticlePayload) => {
    createArticle(
      {
        name: data.name,
        description: data.description,
        buyUrl: data.buyUrl,
        picture: preview ?? "",
        selledId: "1", // 🔹 lo gestisci tu o lo prendi da select
      },
      {
        onSuccess: () => {
          reset();
          clearFile();
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="addbook">
        <Button variant="outline">Aggiungi libro</Button>
      </DialogTrigger>

      <DialogContent className="!p-6 !h-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="!font-medium">Aggiungi libro</DialogTitle>
            <DialogDescription>
              Apporta qui i dati del tuo libro. Clicca su Aggiungi quando hai
              finito.
            </DialogDescription>
          </DialogHeader>

          {/* Foto */}
          <div className="grid gap-3">
            <Label htmlFor="photo">Foto libro</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              className="inputform hidden"
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
                >
                  ×
                </button>
              )}
            </div>
            {preview && (
              <img
                src={preview}
                alt="Anteprima copertina"
                className="!h-24 !w-24 rounded-full !object-cover !border"
              />
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className="inputform"
              {...register("name", { required: true })}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="descrizione">Descrizione</Label>
            <Input
              id="descrizione"
              className="inputform"
              {...(register("description"), { required: true })}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="link">Link - Acquista</Label>
            <Input
              id="link"
              className="inputform"
              {...(register("buyUrl"), { required: true })}
            />
          </div>

          <DialogFooter className="!pt-7">
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
