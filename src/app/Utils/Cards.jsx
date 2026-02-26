const Cards = ({ card }) => {
  return (
    <div className="bg-card 
                    border border-border 
                    rounded-xl 
                    p-5 
                    shadow-sm 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    hover:-translate-y-1 
                    flex flex-col 
                    justify-between 
                    min-h-[160px]">

      <div>
        <h2 className="text-lg font-semibold mb-2">
          Project Title {card}
        </h2>

        <p className="text-sm line-clamp-3">
          This is a professional dashboard card. It keeps equal height,
          smooth hover animation, and looks clean in both light and dark mode.
        </p>
      </div>

      <div className="mt-4 text-sm font-medium text-info">
        View Details →
      </div>

    </div>
  );
};

export { Cards };