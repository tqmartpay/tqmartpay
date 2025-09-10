import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function FastagRechargePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-accent/10 to-tertiary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4 animate-bounce-gentle">
              <Car className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Fastag Recharge
            </h1>
            <p className="text-muted-foreground text-lg">Recharge your Fastag for seamless toll payments</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-secondary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-tertiary" />
                Recharge Fastag
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fastagNumber">Fastag Number</Label>
                <Input
                  id="fastagNumber"
                  placeholder="Enter your Fastag number"
                  className="border-2 border-accent/30 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select>
                  <SelectTrigger className="border-2 border-tertiary/30 focus:border-tertiary">
                    <SelectValue placeholder="Choose your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                    <SelectItem value="pnb">Punjab National Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Recharge Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  type="number"
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[100, 200, 500, 1000, 2000, 5000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold py-3 animate-scale-pulse">
                Recharge Fastag
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Protected transactions</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Recharge</h3>
              <p className="text-sm text-muted-foreground">Quick processing</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Clock className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Recharge anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
