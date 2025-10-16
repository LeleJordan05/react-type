import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function BookCardSkeleton() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-between gap-4">
        {/* Immagine + Nome libro */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-24 w-24 rounded-lg" /> {/* copertina */}
          <Skeleton className="h-6 w-32" /> {/* titolo */}
        </div>

        {/* Bottoni / Azioni */}
        <div className="flex items-center gap-3 flex-wrap">
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10;"
          />{" "}
          {/* descrizione */}
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10;"
          />{" "}
          {/* acquista */}
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10;"
          />{" "}
          {/* edit */}
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10
           mr-10;"
          />{" "}
          {/* delete */}
        </div>
      </div>
    </Card>
  );
}
