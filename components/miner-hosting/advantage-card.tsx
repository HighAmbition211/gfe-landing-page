export function AdvantageCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="bg-[#E7F0FD] p-8 rounded-3xl">
      <img className="w-16" src={icon}></img>
      <h2 className="text-xl auth font-bold uppercase mt-5 tracking-wider">
        {title}
      </h2>
      <p className="mt-2 font-medium auth transition-all duration-500">
        {text}
      </p>
    </div>
  )
}
