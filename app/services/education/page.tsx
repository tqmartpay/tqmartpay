import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, ArrowLeft, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-primary/10 to-tertiary/10 py-8">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4 animate-pulse-glow">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Education Fee Payment
            </h1>
            <p className="text-muted-foreground text-lg">Pay your education fees securely</p>
          </div>

          <Card className="mb-8 hover-lift border-2 border-secondary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-tertiary" />
                Pay Education Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  placeholder="Enter your student ID"
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Select Institution</Label>
                <Select>
                  <SelectTrigger className="border-2 border-tertiary/30 focus:border-tertiary">
                    <SelectValue placeholder="Choose your institution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="coaching">Coaching Institute</SelectItem>
                    <SelectItem value="training">Training Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feeType">Fee Type</Label>
                <Select>
                  <SelectTrigger className="border-2 border-quaternary/30 focus:border-quaternary">
                    <SelectValue placeholder="Select fee type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tuition">Tuition Fee</SelectItem>
                    <SelectItem value="examination">Examination Fee</SelectItem>
                    <SelectItem value="library">Library Fee</SelectItem>
                    <SelectItem value="laboratory">Laboratory Fee</SelectItem>
                    <SelectItem value="hostel">Hostel Fee</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Fee Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter fee amount"
                  type="number"
                  className="border-2 border-accent/30 focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[1000, 2000, 5000, 10000, 20000, 50000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 bg-transparent"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white font-semibold py-3 animate-scale-pulse">
                Pay Fee
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Protected transactions</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-primary/10 to-primary/5">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Instant Processing</h3>
              <p className="text-sm text-muted-foreground">Quick confirmation</p>
            </Card>
            <Card className="text-center p-4 hover-lift bg-gradient-to-br from-tertiary/10 to-tertiary/5">
              <Clock className="h-8 w-8 text-tertiary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Pay anytime</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
