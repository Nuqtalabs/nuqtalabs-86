import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Linktree = () => {
  const links = [
    {
      title: "Website",
      url: "/",
      icon: <ExternalLink className="w-5 h-5" />,
      description: "Visit our main website"
    },
    {
      title: "Contact Us",
      url: "/contact",
      icon: <Mail className="w-5 h-5" />,
      description: "Get in touch with our team"
    },
    {
      title: "Instagram",
      url: "#",
      icon: <Instagram className="w-5 h-5" />,
      description: "Follow us on Instagram"
    },
    {
      title: "Twitter",
      url: "#",
      icon: <Twitter className="w-5 h-5" />,
      description: "Follow us on Twitter"
    },
    {
      title: "LinkedIn",
      url: "#",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Connect with us on LinkedIn"
    }
  ];

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">N</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Nuqta</h1>
            <p className="text-muted-foreground">Your gateway to all our platforms</p>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <Card key={index} className="p-1 hover:shadow-lg transition-shadow">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start text-left"
                  asChild
                >
                  <a href={link.url} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Linktree;