import genresList from "../data/genresList";

function Genres() {
  return (
    <>
      <h3 className="mt-4 text-2xl">Genres</h3>
      <div className="my-6 flex w-full flex-wrap items-center justify-center gap-2">
        {genresList.map((item) => {
          const Icon = item.icon;
          return (
            <div className="bg-dark-100 border-dark-100 hover:border-primary hover:bg-primary/10 group flex h-32 min-w-52 cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border transition-all">
              {Icon && (
                <Icon className="mb-2 h-8 w-8 text-white/60 transition-all group-hover:text-white sm:h-10 sm:w-10" />
              )}
              <p className="text-center text-sm">{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Genres;
