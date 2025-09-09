import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplets, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-8">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 animate-bounce-gentle">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Water Bill Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your water bills instantly</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Pay Water Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="consumerNumber">Consumer Number</Label>
                <Input
                  id="consumerNumber"
                  placeholder="Enter your consumer number"
                  className="border-2 border-accent/30 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Select Water Board</Label>
                <Select>
                  <SelectTrigger className="border-2 border-secondary/30 focus:border-secondary">
                    <SelectValue placeholder="Choose your water board" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai Municipal Corporation</SelectItem>
                    <SelectItem value="delhi">Delhi Jal Board</SelectItem>
                    <SelectItem value="bangalore">Bangalore Water Supply</SelectItem>
                    <SelectItem value="chennai">Chennai Metro Water</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad Metro Water</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Bill Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter bill amount"
                  type="number"
                  className="border-2 border-tertiary/30 focus:border-tertiary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[200, 500, 800, 1000, 1500, 2000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 animate-pulse-glow">
                Pay Bill
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Protected transactions</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">Quick confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Pay anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
