import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl mb-6">
              About <span className="text-primary">Company</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TQMARTPAY PRIVATE LIMITED is a Private incorporated entity classified as Company limited by
                Shares and is located in Noida, UP, India. Its authorized share capital is Rs. 100000 and the
                total paid-up capital is Rs. 100000.
              </p>
              <p>
                We are committed to making our customers happy. We provide all types of recharge and bill payment
                services. We provide our customers with the best service and the best offers available in the market. We
                provide our customers with the best service and the best offers available in the market.
              </p>
              <p>
                Our aim is to make recharge systems accessible to everyone. We offer the best recharge and bill payment
                services. We provide our customers with the best service and the best offers available in the market. We
                provide our customers with the best service and the best offers available in the market.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <img src="/colorful-payment-app.png" alt="TQPay Payment Platform" className="w-full h-auto" />
              </CardContent>
            </Card>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
