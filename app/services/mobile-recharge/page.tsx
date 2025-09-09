import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smartphone, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function MobileRechargePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-8">
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
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mobile Recharge
            </h1>
            <p className="text-muted-foreground text-lg">Quick and secure mobile recharge for all operators</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-tertiary" />
                Recharge Your Mobile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  placeholder="Enter 10-digit mobile number"
                  className="border-2 border-secondary/30 focus:border-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operator">Select Operator</Label>
                <Select>
                  <SelectTrigger className="border-2 border-accent/30 focus:border-accent">
                    <SelectValue placeholder="Choose your operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airtel">Airtel</SelectItem>
                    <SelectItem value="jio">Jio</SelectItem>
                    <SelectItem value="vi">Vi (Vodafone Idea)</SelectItem>
                    <SelectItem value="bsnl">BSNL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Recharge Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  type="number"
                  className="border-2 border-tertiary/30 focus:border-tertiary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[99, 199, 299, 399, 499, 599].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-quaternary hover:text-quaternary-foreground hover:border-quaternary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 animate-pulse-glow">
                Proceed to Pay
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Bank-grade security</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Zap className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Recharge</h3>
              <p className="text-sm text-muted-foreground">Lightning fast processing</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Recharge anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
