"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, CreditCard, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-16 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 via-accent/10 to-tertiary/10 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent),0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in-left text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-bounce-gentle">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>New Features Available</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Simplify
              </span>
              <br />
              <span className="text-secondary">your digital</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-tertiary to-quaternary bg-clip-text text-transparent animate-gradient-shift">
                payments
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience lightning-fast recharges, seamless bill payments, and secure financial services with TQPay -
              your trusted partner for everyday financial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary hover-lift animate-pulse-glow w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift bg-transparent w-full sm:w-auto"
              >
                Explore Features
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm justify-center lg:justify-start">
              <div
                className="flex items-center gap-2 text-primary animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="font-medium">100% Secure</span>
              </div>
              <div
                className="flex items-center gap-2 text-secondary animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="p-1.5 sm:p-2 bg-secondary/10 rounded-full">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="font-medium">Instant Transfer</span>
              </div>
              <div
                className="flex items-center gap-2 text-accent animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="p-1.5 sm:p-2 bg-accent/10 rounded-full">
                  <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right mt-8 lg:mt-0">
            <div className="relative z-10 animate-float">
              <img
                src="/colorful-payment-app.png"
                alt="TQPay Mobile App"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl hover-lift"
              />
            </div>

            <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl animate-scale-pulse opacity-60"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-tertiary rounded-full blur-xl animate-bounce-gentle opacity-60"></div>
            <div className="absolute top-1/2 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-quaternary to-primary rounded-full blur-lg animate-float opacity-40"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 via-accent/20 to-tertiary/20 blur-3xl -z-10 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
