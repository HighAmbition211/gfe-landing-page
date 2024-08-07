import { cn } from "@/lib/utils"

export default function SectionBadge({
  text,
  className,
  position = "center",
}: {
  text: string
  className?: string
  position?: "left" | "right" | "center"
}) {
  return (
    <div
      className={cn("w-fit rounded-md bg-primary/10 p-2", className, {
        "mr-auto": position === "left",
        "ml-auto": position === "right",
        "mx-auto": position === "center",
      })}
    >
      <p className="font-medium text-primary">{text}</p>
    </div>
  )
}
