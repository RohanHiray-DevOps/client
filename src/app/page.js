import Image from "next/image";
import { Cards } from "./Utils/Cards";

export default function Home() {

  const cards = [{
    id:1,
    title:"Total Projects",
    length:2,
    description:"Projects in Stack-panel",
    color:"3786FF"
  },
  {
    id:2,
    title:"Completed Projects",
    length:5,
    description:"of 2 Total",
    color:"10B981"
  },
  {
    id:3,
    title:"My Tasks",
    length:2,
    description:"Assigned to me",
    color:"F59E0B"
  },
  {
    id:4,
    title:"Overdue",
    length:0,
    description:"Need attention",
    color:"EF4444"
  }
]

  return (
    <>
    <div className="pb-5 text-2xl font-bold text-text-primary">Welcome Back , email / Username</div>
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {cards.map((card,i)=>
        (<div key={i} className="">
          <Cards card={card}  />
        </div>
        )
      )}
    </div>
    
    </>
    
  );
}
