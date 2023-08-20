import { shimmer, toBase64 } from "@/utils/tools";
import Image from "next/image";

interface FilmImageProps {
  src: string;
  title: string;
}
export default function ImageCard({ src, title }: FilmImageProps) {
  return (
    <section className="px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
      <Image
        className="rounded-lg"
        src={`${src}`}
        alt={title}
        width={350}
        height={530}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(350, 530))}`}
        unoptimized
      />
    </section>
  );
}
