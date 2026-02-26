import Image from "next/image";
import { Cards } from "./Utils/Cards";

export default function Home() {

  const cards = [1 , 2 , 3 , 4]

  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {cards.map((card,i)=>
        (<div key={i} className="">
          <Cards card={card}  />
        </div>
        )
      )}
    </div>
  );
}
