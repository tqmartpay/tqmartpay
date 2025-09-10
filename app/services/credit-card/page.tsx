import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function CreditCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-quaternary/10 via-tertiary/10 to-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-quaternary hover:text-quaternary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-quaternary/20 rounded-full mb-4 animate-pulse-glow">
              <CreditCard className="h-8 w-8 text-quaternary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-quaternary to-tertiary bg-clip-text text-transparent">
              Credit Card Bill Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your credit card bills securely</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-quaternary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Pay Credit Card Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Credit Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="Enter last 4 digits of your card"
                  className="border-2 border-tertiary/30 focus:border-tertiary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select>
                  <SelectTrigger className="border-2 border-primary/30 focus:border-primary">
                    <SelectValue placeholder="Choose your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                    <SelectItem value="citi">Citibank</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Bill Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter bill amount"
                  type="number"
                  className="border-2 border-secondary/30 focus:border-secondary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[1000, 2000, 5000, 10000, 15000, 20000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-quaternary hover:text-quaternary-foreground hover:border-quaternary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-quaternary to-tertiary hover:from-quaternary/90 hover:to-tertiary/90 text-white font-semibold py-3 animate-scale-pulse">
                Pay Bill
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-quaternary/10 to-quaternary/5">
              <Shield className="h-8 w-8 text-quaternary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Bank-grade security</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Zap className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">Quick confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Pay anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
