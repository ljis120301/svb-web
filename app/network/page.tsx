import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Network, 
  Globe, 
  Server, 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Database,
  RouterIcon,
  Activity
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Network Information - Sun Valley Broadband",
  description: "Technical network information, BGP AS details, and contact information for Sun Valley Broadband's network operations.",
  alternates: { canonical: "/network" },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Network Information" }
];

const jsonLdBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sunvalleybroadband.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Network Information",
      "item": "https://sunvalleybroadband.com/network"
    }
  ]
};

export default function NetworkPage() {
  return (
    <PageLayout breadcrumbs={breadcrumbs} jsonLdBreadcrumbs={jsonLdBreadcrumbs}>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
              <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="page-title">Network Information</h1>
          <p className="lead text-base sm:text-lg max-w-3xl mx-auto mt-2">
            Technical network details, routing information, and contact points for Sun Valley Broadband's infrastructure.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* BGP AS Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RouterIcon className="h-5 w-5" />
                BGP Autonomous System Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">AS Number</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-base px-3 py-1">14237</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">AS Name</h4>
                  <p className="font-mono text-sm">Not published</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Registry</h4>
                  <p className="font-mono text-sm">ARIN</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Country</h4>
                  <p className="font-mono text-sm">US</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Network Prefixes
                </h4>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="font-mono text-sm">IPv4: 216.152.248.0/21</p>
                  <p className="font-mono text-sm">Range: 216.152.248.0 - 216.152.255.255 (NET-216-152-248-0-1)</p>
                  <p className="font-mono text-sm">NetName: BEAMS • NetType: allocation • Parent: NET-216-0-0-0-0</p>
                  <p className="font-mono text-xs text-muted-foreground">RegDate: 2018-08-09 • Updated: 2018-08-09 • Source: ARIN</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Whois Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Whois Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Organization</h4>
                  <p className="font-mono text-sm">Beamspeed LLC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Address</h4>
                  <p className="font-mono text-sm">
                    2481 E. Palo Verde St<br />
                    Yuma, AZ 85365<br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Registration Date</h4>
                  <p className="font-mono text-sm">2003-08-21</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Last Updated</h4>
                  <p className="font-mono text-sm">2024-11-25</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">OrgID</h4>
                  <p className="font-mono text-sm">BEAMS</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">ARIN Net Allocation</h4>
                <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                  <p className="font-mono text-sm">NetHandle: NET-216-152-248-0-1</p>
                  <p className="font-mono text-sm">NetName: BEAMS</p>
                  <p className="font-mono text-sm">NetRange: 216.152.248.0 - 216.152.255.255</p>
                  <p className="font-mono text-sm">NetType: allocation</p>
                  <p className="font-mono text-sm">Parent: NET-216-0-0-0-0</p>
                  <p className="font-mono text-xs text-muted-foreground">RegDate: 2018-08-09 • Updated: 2018-08-09 • Source: ARIN</p>
                </div>
              </div>

              <Button variant="outline" asChild className="w-full">
                <a href="https://search.arin.net/rdap/?query=NET-216-152-248-0-1" target="_blank" rel="noopener noreferrer">
                  <Activity className="h-4 w-4 mr-2" />
                  View ARIN Record
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Network Administrator Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Network Administrator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Eddy Ochoa</h3>
                  <p className="text-sm text-muted-foreground">Network Administrator</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:eddy@sunvalleybroadband.com" className="text-sm hover:underline">
                    eddy@sunvalleybroadband.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+19283430300" className="text-sm hover:underline">
                    (928) 343-0300 ext. 101
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div className="text-sm">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM MST</p>
                    <p className="text-muted-foreground">Emergency: 24/7 on-call</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Matrix */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Information by Department
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              For efficient handling of your inquiry, please contact the appropriate department directly.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Network Operations</h4>
                <p className="text-sm text-muted-foreground">Routing, peering, network issues</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> noc@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Phone:</span> (928) 343-0300 ext. 101</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Technical Support</h4>
                <p className="text-sm text-muted-foreground">Customer service, connectivity issues</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> support@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Phone:</span> (928) 343-0300</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Business Development</h4>
                <p className="text-sm text-muted-foreground">Partnerships, enterprise services</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> business@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Phone:</span> (928) 343-0300 ext. 102</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Abuse Reports</h4>
                <p className="text-sm text-muted-foreground">Security incidents, abuse complaints</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> abuse@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Response:</span> 24-48 hours</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Legal & Compliance</h4>
                <p className="text-sm text-muted-foreground">Legal requests, compliance matters</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> legal@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Mail:</span> See registered address</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">General Inquiries</h4>
                <p className="text-sm text-muted-foreground">All other matters</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Email:</span> info@sunvalleybroadband.com</p>
                  <p><span className="font-medium">Phone:</span> (928) 343-0300</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Status and Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Network Tools & Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold">Network Status</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor our network status and any ongoing maintenance.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/support">
                    View Network Status
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Looking Glass</h4>
                <p className="text-sm text-muted-foreground">
                  Network diagnostic tools for engineers and administrators.
                </p>
                <Button variant="outline" disabled>
                  Looking Glass (Coming Soon)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            This page provides technical information about Sun Valley Broadband's network infrastructure.<br />
            For customer support and general inquiries, please visit our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
