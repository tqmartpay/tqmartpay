import { Card } from "@/components/ui/card"

export function SupportedOperators() {
  const operators = [
    { name: "Jio", color: "bg-blue-500" },
    { name: "Airtel", color: "bg-red-500" },
    { name: "Vi", color: "bg-purple-500" },
    { name: "BSNL", color: "bg-yellow-500" },
    { name: "Idea", color: "bg-pink-500" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl mb-4">Supported Operators</h2>
          <p className="text-muted-foreground">Recharge and pay every bill in one place</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {operators.map((operator, index) => (
            <Card key={operator.name} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center">
                <div
                  className={`w-12 h-12 ${operator.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                >
                  {operator.name.charAt(0)}
                </div>
                <span className="font-semibold text-lg">{operator.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
