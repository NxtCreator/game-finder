import { Star } from "lucide-react"

const Card = () => {
  return (
    <div className="bg-card text-foreground rounded-lg w-64 p-4 flex flex-col">
        <img 
            src="https://placehold.co/300x400/171325/A855F7?text=Game+Cover" 
            alt="Game Cover" 
            className="w-full object-cover rounded-lg"
        />
        <h2 className="text-md font-semibold mt-4 truncate">The Haunted Manor of Forgotten Souls</h2>
        <p>
            <Star className="inline-block w-4 h-4 text-gold mr-1" />
        </p>
    </div>
  )
}
export default Card