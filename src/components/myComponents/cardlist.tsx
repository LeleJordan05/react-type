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
                  Libri in vendita
                </DialogTitle>
                <DialogDescription>
                  <UserBookCard></UserBookCard>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <EditUser user={user} /> <DeleteUser />
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
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
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
          <DeleteBook />
        </div>
      </div>
    </Card>
  );
}

export function UserBookCard() {
  return (
    <Card className="dialogcard">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Immagine libro"
            className="h-12 w-12 rounded-lg"
          />
          <p className="text-black/80 font-medium">Cenerentola</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
          <Dialog>
            <DialogTrigger asChild className="btndialogbook">
              <Button variant="outline">Descrizione</Button>
            </DialogTrigger>
            <DialogContent className="p-6 h-auto">
              <DialogHeader>
                <DialogTitle className="font-medium">Descrizione</DialogTitle>
                <DialogDescription>
                  Quis commodi libero reiciendis fugiat. Nostrum maiores et et
                  pariatur earum. Nulla perferendis consequatur. Quisquam enim
                  nihil neque deserunt. Voluptatem nihil labore nam numquam.
                  Voluptatem aliquam sequi deleniti nobis alias mollitia.
                  Perspiciatis in esse aut. Quod sed odio sunt eius assumenda
                  perferendis. Eum et corrupti esse quia aut eos. Consequatur
                  nobis voluptas soluta non et omnis quaerat dolorem. Nisi vero
                  distinctio unde mollitia. Vel deserunt quos maiores laborum
                  aut inventore ducimus perspiciatis. Quo ipsa sed in et
                  perspiciatis ducimus quisquam totam dicta. Blanditiis dicta
                  odio. Necessitatibus ratione mollitia et natus natus corporis.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <button
            onClick={() => window.open("https://sscnapoli.it/", "_blank")}
            className="btndialogbook mr-5"
          >
            Acquista
          </button>
        </div>
      </div>
    </Card>
  );
}
