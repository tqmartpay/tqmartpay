import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SupportedOperators } from "@/components/supported-operators"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { TermsSection } from "@/components/terms-section"
import { CompanyFAQs } from "@/components/company-faqs"
import { CustomerFeedback } from "@/components/customer-feedback"
import { RechargeOperators } from "@/components/recharge-operators"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
        <Header />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <HeroSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <SupportedOperators />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <ServicesGrid />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <AboutSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <TermsSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <CompanyFAQs />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
        <CustomerFeedback />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
        <RechargeOperators />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
        <ContactSection />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
        <Footer />
      </div>
    </main>
  )
}
