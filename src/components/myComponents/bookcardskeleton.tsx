import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import "@/index.css";

export function BookCardSkeleton() {
  return (
    <Card>
      <div className="!flex !flex-col sm:!flex-row !items-center sm:!justify-between !gap-4 sm:!gap-6">
        {/* Immagine + Nome libro */}
        <div className="!flex !items-center !gap-4">
          <Skeleton className="!h-24 !w-24 !rounded-lg" /> {/* copertina */}
          <Skeleton className="!h-6 !w-32" /> {/* titolo */}
        </div>

        {/* Bottoni / Azioni */}
        <div className="!flex !items-center !gap-3 !sm:!gap-5 !flex-wrap">
          <Skeleton
            className="!w-full sm:!w-26 lg:!w-30 
           !rounded-lg 
           !h-8 sm:!h-10;"
          />{" "}
          {/* descrizione */}
          <Skeleton
            className="!w-full sm:!w-26 lg:!w-30 
           !rounded-lg 
           !h-8 sm:!h-10;"
          />{" "}
          {/* acquista */}
          <Skeleton
            className="!w-full sm:!w-26 lg:!w-30 
           !rounded-lg 
           !h-8 sm:!h-10;"
          />{" "}
          {/* edit */}
          <Skeleton
            className="!w-full sm:!w-26 lg:!w-30 
           !rounded-lg 
           !h-8 sm:!h-10
           !mr-8 sm:!mr-10;"
          />{" "}
          {/* delete */}
        </div>
      </div>
    </Card>
  );
}
