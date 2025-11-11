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
    <Card className="card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={
              user.avatar ||
              "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            }
            alt={user.name}
            className="h-24 w-24 rounded-lg"
          />
          <p className="text-black/80 font-medium">{user.name}</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <Dialog>
            <DialogTrigger asChild className="viewbooks bg-primary">
              <Button >Libri</Button>
            </DialogTrigger>
            <DialogContent className="p-6 h-auto">
              <DialogHeader>
                <DialogTitle className="font-medium">
                  Libri in vendita di {user.name}
                </DialogTitle>
                <DialogDescription>
                  <UserBookCard user={user}></UserBookCard>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <EditUser user={user} /> <DeleteUser user={user} />
        </div>
      </div>
    </Card>
  );
}

type BookProps = {
  book: Book;
};

export function BookCard({ book }: BookProps) {
  return (
    <Card className="card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={book.picture}
            alt={`Immagine ${book.name}`}
            className="h-24 w-24 rounded-lg"
          />
          <p className="text-black/80 font-medium">{book.name}</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Dialog>
            <DialogTrigger asChild className="viewbooks">
              <Button variant="outline">Descrizione</Button>
            </DialogTrigger>
            <DialogContent className="p-6 h-auto">
              <DialogHeader>
                <DialogTitle className="font-medium">Descrizione</DialogTitle>
                <DialogDescription>{book.description}</DialogDescription>
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

  // Filter books that belong to this user
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
          <div className="flex flex-col items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-4">
              <img
                src={book.picture}
                alt={`Immagine ${book.name}`}
                className="h-12 w-12 rounded-lg"
              />
              <p className="text-black/80 font-medium">{book.name}</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <Dialog>
                <DialogTrigger asChild className="btndialogbook">
                  <Button variant="outline">Descrizione</Button>
                </DialogTrigger>
                <DialogContent className="p-6 h-auto">
                  <DialogHeader>
                    <DialogTitle className="font-medium">Descrizione</DialogTitle>
                    <DialogDescription>{book.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <button
                onClick={() => window.open(book.buyUrl, "_blank")}
                className="btndialogbook mr-5"
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
