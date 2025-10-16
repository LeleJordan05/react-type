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

export function DeleteUser() {
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
            permanente il tuo account e rimuoverà i tuoi dati dai nostri server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="whitebtn">Cancella</AlertDialogCancel>
          <AlertDialogAction className="deletebtndialog">
            Continua
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DeleteBook() {
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
            permanente il libro e rimuoverà i dati dai nostri server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="whitebtn">Cancella</AlertDialogCancel>
          <AlertDialogAction className="deletebtndialog">
            Continua
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
