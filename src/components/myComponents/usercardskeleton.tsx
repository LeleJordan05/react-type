import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function UserCardSkeleton() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-between gap-4">
        {/* Immagine + Nome libro */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-24 w-24 rounded-lg" /> {/* copertina */}
          <Skeleton className="h-6 w-32" /> {/* titolo */}
        </div>

        {/* Bottoni / Azioni */}
        <div className="flex items-center gap-5  flex-wrap">
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10 "
          />{" "}
          {/* libri */}
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10 "
          />{" "}
          {/* edit */}
          <Skeleton
            className="w-full 
           rounded-lg 
           h-10 
           mr-10 "
          />{" "}
          {/* delete */}
        </div>
      </div>
    </Card>
  );
}
