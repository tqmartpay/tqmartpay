import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function PostpaidBillPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-quaternary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4 animate-pulse-glow">
              <Phone className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Postpaid Bill Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your postpaid mobile bills</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-accent/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-quaternary" />
                Pay Postpaid Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  placeholder="Enter 10-digit mobile number"
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="operator">Select Operator</Label>
                <Select>
                  <SelectTrigger className="border-2 border-quaternary/30 focus:border-quaternary">
                    <SelectValue placeholder="Choose your operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airtel">Airtel Postpaid</SelectItem>
                    <SelectItem value="jio">Jio Postpaid</SelectItem>
                    <SelectItem value="vi">Vi Postpaid</SelectItem>
                    <SelectItem value="bsnl">BSNL Postpaid</SelectItem>
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
                    className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold py-3 animate-pulse-glow">
                Pay Bill
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Bank-grade security</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">Quick confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-quaternary/10 to-quaternary/5">
              <Clock className="h-8 w-8 text-quaternary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Pay anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
