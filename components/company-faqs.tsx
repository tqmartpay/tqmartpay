import { Card, CardContent } from "@/components/ui/card"

export function CompanyFAQs() {
  const stats = [
    { number: "158", label: "Happy Customers", color: "bg-blue-500" },
    { number: "4", label: "Total Services", color: "bg-green-500" },
    { number: "130", label: "Service Providers", color: "bg-purple-500" },
    { number: "135", label: "Our Clients", color: "bg-orange-500" },
  ]

  return (
    <section id="faqs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl mb-6">
              Company <span className="text-primary">FAQs</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="font-semibold text-foreground">What is TQMARTPAY PRIVATE LIMITED?</p>
              <p>
                We are extremely driven professionals working with a vision to deliver our best to enrich the customer
                experience. In fact, TQMartPay PRIVATE LIMITED works as an multi utility and 24*7 recharge
                platform that helps recharge and bill payment service provider in India. We have been in this recharge
                and bill payment business for years and have been providing recharge and bill payment systems to our
                customers for our free recharge which includes all types of mobile and DTH recharge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}
                    >
                      {stat.number}
                    </div>
                    <p className="font-semibold text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/smartphone-payment-app.png"
              alt="TQPay Mobile App"
              className="w-full max-w-md mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
