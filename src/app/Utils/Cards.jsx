import { CheckCircle, Folder, TriangleAlert, User2 } from "lucide-react";

const Cards = ({ card }) => {

   

  return (
    <div
      className="bg-card 
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
                    gap-3
                    min-h-[70px]"
    >
      <div className="flex  justify-between ">
        <div className="flex flex-col gap-2">
          <h2 className="text-md text-text-secondary ">{card.title}</h2>
          <div className=" text-2xl font-bold text-text-primary">
            {card.length}
          </div>
        </div>
        <div>
          {card.id === 1 ? (
            <Folder className={`text-info box-content p-2.5 rounded-[12px] bg-info/10`} />
          ) : card.id === 2 ? (
            <CheckCircle className="text-success box-content p-2.5 rounded-[12px] bg-success/10" />
          ) : card.id === 3 ? (
            <User2 className="text-warning box-content p-2.5 rounded-[12px] bg-warning/10" />
          ) : (
            <TriangleAlert className="text-error bg-error/10 p-2.5 box-content rounded-[12px]" />
          )}
        </div>
      </div>

      <p className="text-md text-text-muted line-clamp-3">{card.description}</p>
    </div>
  );
};

export { Cards };
