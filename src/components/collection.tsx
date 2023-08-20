import { shimmer, toBase64 } from "@/utils/tools";
import Image from "next/image";
import MovieCard from "./movieCard";

const Collection = () => {
  const movies = ["movie1", "movie2", "movie3", "movie4", "movie5"];
  return (
    <section
      className={
        "mb-6 h-full w-full overflow-hidden md:mb-10 lg:overflow-visible"
      }
    >
      <div className="mx-auto mb-4 flex items-end justify-around sm:mb-6">
        <div className="flex items-end">
          <h2 className="md:heading-lg text-xl font-light capitalize leading-none py-px sm:py-0 text-app-pure-white">
            Harry Porter Movies
          </h2>
          <p
            className={
              "ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]"
            }
          >
            movies
          </p>
        </div>
      </div>
      <section
        className={
          "h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2 pb-6"
        }
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} name={`images/movies/${movie}.jpg`} />
        ))}
      </section>
    </section>
  );
};

export default Collection;
