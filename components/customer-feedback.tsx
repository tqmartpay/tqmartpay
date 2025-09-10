import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function CustomerFeedback() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      rating: 5,
      feedback: "Excellent service! Quick recharges and bill payments. Very reliable platform.",
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      rating: 5,
      feedback: "Love the new interface. All services in one place. Highly recommended!",
    },
    {
      name: "Amit Singh",
      role: "Freelancer",
      rating: 5,
      feedback: "Great app for utility payments. Customer support is very responsive.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            Customers <span className="text-primary">Feedback</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.feedback}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
