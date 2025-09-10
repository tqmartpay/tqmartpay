import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Flame, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function PipedGasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tertiary/10 via-quaternary/10 to-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-tertiary/20 rounded-full mb-4 animate-bounce-gentle">
              <Flame className="h-8 w-8 text-tertiary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-tertiary to-quaternary bg-clip-text text-transparent">
              Piped Gas Bill Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your gas bills instantly</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-tertiary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Pay Gas Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="consumerNumber">Consumer Number</Label>
                <Input
                  id="consumerNumber"
                  placeholder="Enter your consumer number"
                  className="border-2 border-quaternary/30 focus:border-quaternary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Select Gas Provider</Label>
                <Select>
                  <SelectTrigger className="border-2 border-primary/30 focus:border-primary">
                    <SelectValue placeholder="Choose your gas provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indane">Indane Gas</SelectItem>
                    <SelectItem value="bharat">Bharat Gas</SelectItem>
                    <SelectItem value="hp">HP Gas</SelectItem>
                    <SelectItem value="adani">Adani Gas</SelectItem>
                    <SelectItem value="mahanagar">Mahanagar Gas</SelectItem>
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
                {[500, 1000, 1500, 2000, 2500, 3000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-tertiary hover:text-tertiary-foreground hover:border-tertiary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-tertiary to-quaternary hover:from-tertiary/90 hover:to-quaternary/90 text-white font-semibold py-3 animate-scale-pulse">
                Pay Bill
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Shield className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Protected transactions</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-quaternary/10 to-quaternary/5">
              <Zap className="h-8 w-8 text-quaternary mx-auto mb-2" />
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
