import { Star } from "lucide-react"

const Card = ({ title, rating, year }) => {
  return (
    <div className="bg-card text-foreground rounded-lg w-64 p-4 flex flex-col">
        <img 
            src="https://placehold.co/300x400/171325/A855F7?text=Game+Cover" 
            alt="Game Cover" 
            className="w-full object-cover rounded-lg"
        />
        <h2 className="text-md font-semibold mt-4 truncate">{title}</h2>

        <div className="flex items-center mt-2">
            <Star
              fill="#FACC15" 
              className="inline-block w-5 h-5 mr-1 text-gold" 
            />
          <p className="text-muted-foreground flex items-center gap-1.5">
              <span className="font-semibold text-foreground">
                  {rating}
              </span> 

            <span>•</span>

              {year}
          </p>
        </div>
    </div>
  )
}
export default Card