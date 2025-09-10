import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function ElectricityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tertiary/10 via-accent/10 to-primary/10 py-8">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-tertiary/20 rounded-full mb-4 animate-float">
              <Lightbulb className="h-8 w-8 text-tertiary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-tertiary to-accent bg-clip-text text-transparent">
              Electricity Bill Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your electricity bills hassle-free</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-tertiary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                Pay Electricity Bill
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="consumer">Consumer Number</Label>
                <Input
                  id="consumer"
                  placeholder="Enter your consumer number"
                  className="border-2 border-accent/30 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="board">Electricity Board</Label>
                <Select>
                  <SelectTrigger className="border-2 border-primary/30 focus:border-primary">
                    <SelectValue placeholder="Select your electricity board" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mseb">MSEB (Maharashtra)</SelectItem>
                    <SelectItem value="bseb">BSEB (Bihar)</SelectItem>
                    <SelectItem value="kseb">KSEB (Kerala)</SelectItem>
                    <SelectItem value="tneb">TNEB (Tamil Nadu)</SelectItem>
                    <SelectItem value="wbseb">WBSEB (West Bengal)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full border-2 border-secondary/30 hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Fetch Bill Details
              </Button>

              <div className="space-y-2">
                <Label htmlFor="amount">Bill Amount</Label>
                <Input
                  id="amount"
                  placeholder="Amount will be fetched automatically"
                  type="number"
                  className="border-2 border-quaternary/30 focus:border-quaternary"
                  disabled
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-tertiary to-accent hover:from-tertiary/90 hover:to-accent/90 text-white font-semibold py-3 animate-wiggle">
                Pay Bill
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Shield className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">Encrypted payments</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-accent/10 to-accent/5">
              <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Quick Processing</h3>
              <p className="text-sm text-muted-foreground">Instant confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">No Late Fees</h3>
              <p className="text-sm text-muted-foreground">Pay on time</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
