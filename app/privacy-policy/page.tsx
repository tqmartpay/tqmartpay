import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-quaternary/10 via-primary/5 to-secondary/10 py-8">
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-quaternary/20 rounded-full mb-4 animate-float">
              <Shield className="h-8 w-8 text-quaternary" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-4 bg-gradient-to-r from-quaternary to-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Your privacy is important to us. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card className="hover-lift border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, make a payment,
                  or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Payment information (processed securely through encrypted channels)</li>
                  <li>Transaction history and usage patterns</li>
                  <li>Device information and IP addresses</li>
                  <li>Communication preferences and support interactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-secondary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-secondary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process payments and transactions securely</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send important service updates and notifications</li>
                  <li>Prevent fraud and enhance security measures</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-accent/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With payment processors to complete transactions</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent for specific purposes</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-tertiary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-tertiary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>End-to-end encryption for all sensitive data</li>
                  <li>Secure servers with regular security audits</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security training for our staff</li>
                  <li>Compliance with PCI DSS standards for payment processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-quaternary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-quaternary" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability for your information</li>
                  <li>Lodge complaints with regulatory authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">TAQUMART PRIVATE LIMITED</p>
                  <p className="text-muted-foreground">Email: privacy@tqpay.com</p>
                  <p className="text-muted-foreground">Address: Noida, UP, India</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                This privacy policy is effective as of December 2025 and may be updated from time to time.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-quaternary to-primary hover:from-quaternary/90 hover:to-primary/90 text-white font-semibold animate-pulse-glow">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
