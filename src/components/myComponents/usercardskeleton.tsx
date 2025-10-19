import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function UserCardSkeleton() {
  return (
    <Card >
      <div className="flex flex-row items-center justify-between">
        {/* Immagine + Nome libro */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-24 w-24 rounded-lg" /> {/* copertina */}
          <Skeleton className="h-6 w-32" /> {/* titolo */}
        </div>

        {/* Bottoni / Azioni */}
        <div className="flex items-center gap-5 ">
          <Skeleton
            className="w-25
           rounded-lg 
           h-10 "
          />{" "}
          {/* libri */}
          <Skeleton
            className="w-25
           rounded-lg 
           h-10 "
          />{" "}
          {/* edit */}
          <Skeleton
            className="w-25
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
