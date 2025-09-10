import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, ArrowLeft, Tv, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function DTHPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-tertiary/10 to-quaternary/10 py-8">
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
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              DTH Recharge
            </h1>
            <p className="text-muted-foreground text-lg">Recharge your DTH connection instantly</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-secondary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tv className="h-5 w-5 text-quaternary" />
                DTH Recharge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subscriber">Subscriber ID</Label>
                <Input
                  id="subscriber"
                  placeholder="Enter your subscriber ID"
                  className="border-2 border-tertiary/30 focus:border-tertiary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operator">Select DTH Operator</Label>
                <Select>
                  <SelectTrigger className="border-2 border-quaternary/30 focus:border-quaternary">
                    <SelectValue placeholder="Choose your DTH operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tatasky">Tata Play</SelectItem>
                    <SelectItem value="airtel">Airtel Digital TV</SelectItem>
                    <SelectItem value="dish">Dish TV</SelectItem>
                    <SelectItem value="videocon">Videocon D2H</SelectItem>
                    <SelectItem value="sun">Sun Direct</SelectItem>
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
                {[299, 499, 799, 999, 1299, 1599].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-secondary to-tertiary hover:from-secondary/90 hover:to-tertiary/90 text-white font-semibold py-3 animate-scale-pulse">
                Proceed to Pay
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Protected transactions</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Zap className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Activation</h3>
              <p className="text-sm text-muted-foreground">Immediate service</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-quaternary/10 to-quaternary/5">
              <Clock className="h-8 w-8 text-quaternary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Service</h3>
              <p className="text-sm text-muted-foreground">Always available</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
