import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditBook, EditUser } from "@/components/myComponents/edit";
import { DeleteBook, DeleteUser } from "./delete";
import { User } from "@/types/User";
import { Book } from "@/types/Book";
import { useBooks } from "@/hooks/useBooks";

type UserProps = {
  user: User;
};

export function UserCard({ user }: UserProps) {
  return (
    <Card className="card flex flex-wrap md:flex-row p-2 justify-between">
        <div className="flex items-center lg:gap-4 gap-2 pl-2 md:pl-0">
          <img
            src={
              user.avatar ||
              "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            }
            alt={user.name}
            className="h-24 w-24 rounded-lg"
          />
          <div className="flex flex-col">
            <p className="text-black/80 font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">
              Creato il {new Date(user.createdAt).toLocaleDateString("it-IT")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-5">
          <Dialog>
            <DialogTrigger asChild className="viewbooks bg-primary">
              <Button >Libri</Button>
            </DialogTrigger>
            <DialogContent className="p-6 md:w-100 w-80 h-auto">
              <DialogHeader>
                <DialogTitle className="font-medium pb-3">
                  Libri in vendita di {user.name}
                </DialogTitle>
                <DialogDescription className="max-h-60 overflow-y-auto">
                  <UserBookCard user={user}></UserBookCard>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <EditUser user={user} /> <DeleteUser user={user} />
        </div>
    </Card>
  );
}

type BookProps = {
  book: Book;
};

export function BookCard({ book }: BookProps) {
  return (
    <Card className="card flex md:flex-row p-2 justify-between ">
        <div className="flex items-center lg:gap-4 gap-2 ">
          <img
            src={book.picture}
            alt={`Immagine ${book.name}`}
            className="h-24 w-24 rounded-lg"
          /> 
          <div className="flex flex-col md:w-30">
            <p className="text-black/80 font-medium">{book.name}</p>
            <p className="text-xs text-gray-500">
              Creato il {new Date(book.createdAt).toLocaleDateString("it-IT")}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-wrap items-center justify-center md: mx-5 gap-3 ">
          <Dialog>
            <DialogTrigger asChild className="viewbooks">
              <Button variant="outline">Descrizione</Button>
            </DialogTrigger>
            <DialogContent className="p-6 h-auto w-80 ">
              <DialogHeader>
                <DialogTitle className="font-medium" >Descrizione</DialogTitle>
                <DialogDescription className="max-h-60 md:max-h-none overflow-y-auto text-left">{book.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <button
            onClick={() => window.open(book.buyUrl, "_blank")}
            className="viewbooks"
          >
            Acquista
          </button>

          <EditBook book={book} />
          <DeleteBook book={book} />
        </div>
    </Card>
  );
}

type UserBookCardProps = {
  user: User;
};

export function UserBookCard({ user }: UserBookCardProps) {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-500">Caricamento libri...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-red-500">Errore nel caricamento dei libri</p>
      </div>
    );
  }

  
  const userBooks = books?.filter((book: Book) => book.sellerId === user.id) || [];

  if (userBooks.length === 0) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-500">Nessun libro in vendita per questo utente</p>
      </div>
    );
  }

  return (
    <div className="h-auto">
      {userBooks.map((book: Book) => (
        <Card key={book.id} className="dialogcard">
          <div className="flex flex-col items-center justify-between gap-4 md:p-6 p-4">
            <div className="flex items-center gap-4 pb-4">
              <img
                src={book.picture}
                alt={`Immagine ${book.name}`}
                className="h-12 w-12 rounded-lg"
              />
              <p className="text-black/80 font-medium">{book.name}</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
              <Dialog>
                <DialogTrigger asChild className="btndialogbook">
                  <Button variant="outline">Descrizione</Button>
                </DialogTrigger>
                <DialogContent className="p-6 h-auto w-80">
                  <DialogHeader>
                    <DialogTitle className="font-medium">Descrizione</DialogTitle>
                    <DialogDescription className="text-left max-h-60 md:max-h-none overflow-y-auto">{book.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <button
                onClick={() => window.open(book.buyUrl, "_blank")}
                className="btndialogbook md:mr-5"
              >
                Acquista
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
