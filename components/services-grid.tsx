import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Zap,
  Lightbulb,
  Fuel,
  Wifi,
  Shield,
  MapPin,
  Tv,
  Radio,
  Droplets,
  CreditCard,
  Building,
  Gamepad2,
  GraduationCap,
  Heart,
} from "lucide-react"
import Link from "next/link"

export function ServicesGrid() {
  const services = [
    { icon: Smartphone, title: "Mobile Recharge", color: "text-blue-500", href: "/services/mobile-recharge" },
    { icon: Zap, title: "DTH", color: "text-yellow-500", href: "/services/dth" },
    { icon: Lightbulb, title: "Electricity", color: "text-orange-500", href: "/services/electricity" },
    { icon: Fuel, title: "Loan EMI", color: "text-green-500", href: "/services/loan-emi" },
    { icon: Wifi, title: "Piped Gas", color: "text-purple-500", href: "/services/piped-gas" },
    { icon: Shield, title: "Postpaid Bill", color: "text-red-500", href: "/services/postpaid-bill" },
    { icon: MapPin, title: "Fastag Recharge", color: "text-indigo-500", href: "/services/fastag-recharge" },
    { icon: Shield, title: "Insurance", color: "text-teal-500", href: "/services/insurance" },
    { icon: Tv, title: "Cable TV", color: "text-pink-500", href: "/services/cable-tv" },
    { icon: Radio, title: "Broadband", color: "text-cyan-500", href: "/services/broadband" },
    { icon: Droplets, title: "Water", color: "text-blue-400", href: "/services/water" },
    { icon: CreditCard, title: "Credit Card", color: "text-gray-500", href: "/services/credit-card" },
    { icon: Building, title: "Municipal Tax", color: "text-brown-500", href: "/services/municipal-tax" },
    { icon: Gamepad2, title: "Club & Association", color: "text-violet-500", href: "/services/club-association" },
    { icon: GraduationCap, title: "Education", color: "text-emerald-500", href: "/services/education" },
    { icon: Heart, title: "Hospital", color: "text-rose-500", href: "/services/hospital" },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            <span className="text-primary">Recharges</span> & <span className="text-accent">Bill Payments</span>
          </h2>
          <p className="text-muted-foreground text-lg">Recharge and pay every bill in one place</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href}>
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-card/50 backdrop-blur-sm hover-rainbow animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <service.icon
                    className={`h-8 w-8 mx-auto mb-3 ${service.color} group-hover:scale-110 transition-transform animate-wiggle`}
                  />
                  <h3 className="font-semibold text-sm leading-tight">{service.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
