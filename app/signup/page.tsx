"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, UserPlus, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/15 via-tertiary/10 to-quaternary/15 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <Card className="hover-lift border-2 border-accent/20 bg-card/90 backdrop-blur-sm animate-fade-in-up">
          <CardHeader className="text-center pb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4 mx-auto animate-bounce-gentle">
              <UserPlus className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl font-heading bg-gradient-to-r from-accent to-tertiary bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <p className="text-muted-foreground">Join TQPay for seamless payments</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  className="border-2 border-primary/30 focus:border-primary transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  className="border-2 border-primary/30 focus:border-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border-2 border-secondary/30 focus:border-secondary transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-tertiary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border-2 border-tertiary/30 focus:border-tertiary transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-quaternary" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="border-2 border-quaternary/30 focus:border-quaternary transition-all duration-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-quaternary transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="border-2 border-accent/30 focus:border-accent transition-all duration-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button className="w-full bg-gradient-to-r from-accent to-tertiary hover:from-accent/90 hover:to-tertiary/90 text-white font-semibold py-3 animate-scale-pulse">
              Create Account
            </Button>

            <div className="text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 bg-transparent"
              >
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
