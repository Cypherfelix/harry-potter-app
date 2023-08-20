import { shimmer, toBase64 } from "@/utils/tools";
import Image from "next/image";

const MovieCard: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="relative w-full cursor-pointer">
      <div className="relative w-full rounded-lg">
        <div
          className={
            'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[350px] sm:w-[470px]'
          }
        >
          <Image
            className="rounded-lg"
            src={name}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(240, 140)
            )}`}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
