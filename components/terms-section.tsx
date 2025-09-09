import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText } from "lucide-react"

export function TermsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/secure-payment-interface.png"
              alt="Terms and Conditions"
              className="w-full max-w-md mx-auto animate-float"
            />
          </div>

          <div>
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-heading text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Terms & <span className="text-accent">Conditions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Eligibility
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You must be at least 18 years old to use our services. By using our services, you represent and
                    warrant that you meet the legal age requirement and have the legal capacity to enter into these
                    terms.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    By using Financial Services, you are agreeing to be bound by the following terms and conditions
                    ("Terms of Service").
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
