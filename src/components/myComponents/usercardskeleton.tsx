import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function UserCardSkeleton() {
  return (
    <Card className="card flex flex-wrap lg:flex-row md:flex md:flex-row p-2 justify-between">
      <div className="flex items-center lg:gap-4 gap-2 pl-2">
        {/* Immagine + Nome utente */}
        <Skeleton className="h-24 w-24 rounded-lg" />
        <div className="flex flex-col gap-1">
          <Skeleton className="h-5 w-32" /> {/* nome */}
          <Skeleton className="h-3 w-28" /> {/* data */}
        </div>
      </div>
      {/* Bottoni / Azioni */}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" />
        <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" />
        <Skeleton className="h-10 w-22 lg:w-25 rounded-lg" />
      </div>
    </Card>
  );
}
