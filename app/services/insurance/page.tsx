import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, ArrowLeft, Zap, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-quaternary/10 to-accent/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 animate-pulse-glow">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-primary to-quaternary bg-clip-text text-transparent">
              Insurance Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your insurance premiums securely</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Pay Insurance Premium
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="policyNumber">Policy Number</Label>
                <Input
                  id="policyNumber"
                  placeholder="Enter your policy number"
                  className="border-2 border-quaternary/30 focus:border-quaternary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceType">Insurance Type</Label>
                <Select>
                  <SelectTrigger className="border-2 border-accent/30 focus:border-accent">
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="motor">Motor Insurance</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="travel">Travel Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Insurance Provider</Label>
                <Select>
                  <SelectTrigger className="border-2 border-secondary/30 focus:border-secondary">
                    <SelectValue placeholder="Choose your provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lic">LIC</SelectItem>
                    <SelectItem value="hdfc">HDFC Life</SelectItem>
                    <SelectItem value="icici">ICICI Prudential</SelectItem>
                    <SelectItem value="sbi">SBI Life</SelectItem>
                    <SelectItem value="max">Max Life</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Premium Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter premium amount"
                  type="number"
                  className="border-2 border-tertiary/30 focus:border-tertiary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[1000, 2000, 5000, 10000, 15000, 20000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-quaternary hover:from-primary/90 hover:to-quaternary/90 text-white font-semibold py-3 animate-pulse-glow">
                Pay Premium
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Bank-grade security</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-quaternary/10 to-quaternary/5">
              <Heart className="h-8 w-8 text-quaternary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">Quick confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Pay anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
