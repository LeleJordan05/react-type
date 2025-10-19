import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useDeleteUser } from "@/hooks/useUsers";
import { useDeleteBook } from "@/hooks/useBooks";
import { User } from "@/types/User";
import { Book } from "@/types/Book";

export function DeleteUser({ user }: { user: User }) {
  const { mutate: deleteUser, isPending } = useDeleteUser();

  const handleDelete = () => {
    deleteUser(user.id, {
      onSuccess: () => {
        toast.success(`Utente "${user.name}" eliminato con successo`);
      },
      onError: () => {
        toast.error("Errore durante l'eliminazione dell'utente");
      },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="deletebtn">Cancella</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-6 h-auto bg-primary">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-medium">
            Sei assolutamente sicuro?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Questa azione non può essere annullata. Cancellerà in modo
            permanente l'utente "{user.name}" e rimuoverà i suoi dati dai nostri server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="whitebtn">Cancella</AlertDialogCancel>
          <AlertDialogAction 
            className="deletebtndialog" 
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Eliminazione..." : "Continua"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DeleteBook({ book }: { book: Book }) {
  const { mutate: deleteBook, isPending } = useDeleteBook();

  const handleDelete = () => {
    deleteBook(book.id, {
      onSuccess: () => {
        toast.success(`Libro "${book.name}" eliminato con successo`);
      },
      onError: () => {
        toast.error("Errore durante l'eliminazione del libro");
      },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="deletebtn">Cancella</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-6 h-auto bg-primary">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-medium">
            Sei assolutamente sicuro?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Questa azione non può essere annullata. Cancellerà in modo
            permanente il libro "{book.name}" e rimuoverà i dati dai nostri server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="whitebtn">Cancella</AlertDialogCancel>
          <AlertDialogAction 
            className="deletebtndialog" 
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Eliminazione..." : "Continua"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
