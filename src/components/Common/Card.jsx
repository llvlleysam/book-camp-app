import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { id, name, description, price, image , registration } = card;
  // console.log(card)
  return (
    <Link to={`/singlecard/${id}`}>
      <div className="flex flex-col items-center gap-4 border-2 drop-shadow-xl bg-white col-span-1 p-4 transition duration-300 hover:scale-105">
        <p className="text-2xl font-bold">{name}</p>
        <img className="w-44" src={image?.[0]} alt={name} />
        <p className="border-y-2 py-2 ">
          {`${description.substring(0, 100)} `}
          <span className="font-bold">read more ...</span>
        </p>
        <p className={registration ? "border-2 border-purple-700 px-4 rounded-lg bg-purple-500/30" : "border-2 border-red-700 px-4 rounded-lg bg-red-500/30 cursor-not-allowed"}>
          {registration ? `${price} t`:"registration Expire"}
        </p>
      </div>
    </Link>
  );
}
