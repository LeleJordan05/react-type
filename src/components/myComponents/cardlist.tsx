import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { EditBook, EditUser } from "./edit";
import { DeleteBook, DeleteUser } from "./delete";

export function UserCard() {
  return (
    <Card className="card">
      <div className="flex items-center">
        <img
          src="user.jpg"
          alt="Immagine profilo"
          className="!h-25 !rounded-lg"
        />
        <p className=" !text-black/80 font-medium !ml-5">Emanuele Giordano</p>
        <div className="!ml-126.5">
          <Dialog>
            <DialogTrigger asChild className="viewbooks !bg-primary">
              <Button variant="outline">Libri</Button>
            </DialogTrigger>
            <DialogContent className="!p-6 !h-auto">
              <DialogHeader>
                <DialogTitle className="!font-medium">
                  Libri in vendita
                </DialogTitle>
                <DialogDescription>
                  Apporta qui i dati del tuo libro. Clicca su Aggiungi quando
                  hai finito.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="!ml-5">
          <EditUser></EditUser>
        </div>
        <div className="!ml-5">
          <DeleteUser></DeleteUser>
        </div>
      </div>
    </Card>
  );
}

export function BookCard() {
  return (
    <Card className="card">
      <div className="flex items-center">
        <img
          src="user.jpg"
          alt="Immagine libro"
          className="!h-25 !rounded-lg"
        />
        <p className=" !text-black/80 font-medium !ml-5">Cenerentola</p>
        <div className="!ml-140">
          <Dialog>
            <DialogTrigger asChild className="viewbooks">
              <Button variant="outline">Libri</Button>
            </DialogTrigger>
            <DialogContent className="!p-6 !h-auto">
              <DialogHeader>
                <DialogTitle className="!font-medium">
                  Libri in vendita
                </DialogTitle>
                <DialogDescription>
                  Apporta qui i dati del tuo libro. Clicca su Aggiungi quando
                  hai finito.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="!ml-5">
          <EditBook></EditBook>
        </div>
        <div className="!ml-5">
          <DeleteBook></DeleteBook>
        </div>
      </div>
    </Card>
  );
}
