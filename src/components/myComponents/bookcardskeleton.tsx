import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function BookCardSkeleton() {
  return (
    <Card className="card flex md:flex-row p-2 justify-between">
      <div className="flex flex-wrap md:flex-row items-center justify-between w-full gap-2">
        {/* Immagine + Nome libro */}
        <div className="flex items-center lg:gap-4 gap-2 ">
          <Skeleton className="h-24 w-24 rounded-lg" /> {/* copertina */}
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-32" /> {/* titolo */}
            <Skeleton className="h-3 w-28" /> {/* data */}
          </div>
        </div>

        {/* Bottoni / Azioni */}
        <div className="flex flex-wrap items-center justify-center mx-5 gap-3 md:flex-row lg:mr-13.5 md:mr-9">
          <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" /> {/* Descrizione */}
          <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" /> {/* Acquista */}
          <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" /> {/* Edit */}
          <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" /> {/* Delete */}
        </div>
      </div>
    </Card>
  );
}
