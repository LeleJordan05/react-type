import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function BookCardSkeleton() {
  return (
    <Card >
      <div className="flex flex-row items-center justify-between">
        {/* Immagine + Nome libro */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-24 w-24 rounded-lg" /> {/* copertina */}
          <Skeleton className="h-6 w-32" /> {/* titolo */}
        </div>

        {/* Bottoni / Azioni */}
        <div className="flex items-center gap-3 mr-8">
          <Skeleton
            className="w-25
           rounded-lg 
           h-10"
          />{" "}
          {/* descrizione */}
          <Skeleton
            className="w-25
           rounded-lg 
           h-10"
          />{" "}
          {/* acquista */}
          <Skeleton
            className="w-25 
           rounded-lg 
           h-10"
          />{" "}
          {/* edit */}
          <Skeleton
            className="w-25
           rounded-lg 
           h-10
           ;"
          />{" "}
          {/* delete */}
        </div>
      </div>
    </Card>
  );
}
