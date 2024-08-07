"use client"

export function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-3xl bg-accent p-5">
      <h3 className="font-goldman mt-5 text-xl tracking-wider">{title}</h3>
      <p className="mb-5 mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
