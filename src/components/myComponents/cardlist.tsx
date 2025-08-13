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
      <div className="!flex !flex-col sm:!flex-row !items-center sm:!justify-between !gap-4 sm:!gap-6">
        <div className="!flex !items-center !gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Immagine profilo"
            className="!h-24 !w-24 !rounded-lg"
          />
          <p className="!text-black/80 !font-medium">Emanuele Giordano</p>
        </div>
        <div className="!flex !items-center !gap-3 sm:!gap-5">
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
          <EditUser />
          <DeleteUser />
        </div>
      </div>
    </Card>
  );
}

export function BookCard() {
  return (
    <Card className="card">
      <div className="!flex !flex-col sm:!flex-row !items-center sm:!justify-between !gap-4 sm:!gap-6">
        <div className="!flex !items-center !gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Immagine libro"
            className="!h-24 !w-24 !rounded-lg"
          />
          <p className="!text-black/80 !font-medium">Cenerentola</p>
        </div>
        <div className="!flex !items-center !gap-3 !sm:!gap-5 !flex-wrap">
          <Dialog>
            <DialogTrigger asChild className="viewbooks">
              <Button variant="outline">Descrizione</Button>
            </DialogTrigger>
            <DialogContent className="!p-6 !h-auto">
              <DialogHeader>
                <DialogTitle className="!font-medium">Descrizione</DialogTitle>
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
            className="viewbooks"
          >
            Acquista
          </button>
          <EditBook />
          <DeleteBook />
        </div>
      </div>
    </Card>
  );
}
