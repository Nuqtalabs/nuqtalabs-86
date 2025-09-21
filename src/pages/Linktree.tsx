import { Linkedin, Globe, Phone, Mail } from 'lucide-react';
import { Starfield } from '@/components/Starfield';
import { LinkButton } from '@/components/LinkButton';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import nuqtaLabsLogo from '@/assets/nuqta-labs-logo-new.png';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Starfield />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md mx-auto space-y-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src={nuqtaLabsLogo} 
              alt="Nuqta Labs" 
              className="w-52 h-52 mx-auto mb-4 object-contain filter brightness-110 mix-blend-screen bg-transparent"
            />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Nuqta Labs
            </h1>
            <p className="text-muted-foreground text-sm">
              Connect with us across all platforms
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <LinkButton
              href="https://www.instagram.com/nuqtalabs/"
              icon={<InstagramIcon size={24} />}
              title="Instagram"
              subtitle="@nuqtalabs"
            />

            <LinkButton
              href="https://www.linkedin.com/company/nuqtalabs/"
              icon={<Linkedin color="#0077B5" />}
              title="LinkedIn"
              subtitle="@Nuqtalabs"
            />

            <LinkButton
              href="https://nuqtalabs.com"
              icon={<Globe color="#10B981" />}
              title="Website"
              subtitle="nuqtalabs.com"
            />

            <LinkButton
              href="tel:+966920015795"
              icon={<Phone color="#059669" />}
              title="Call"
              subtitle="+966 920 015 795"
            />

            <LinkButton
              href="https://api.whatsapp.com/send?phone=966920015795"
              icon={<WhatsAppIcon size={24} />}
              title="WhatsApp"
              subtitle="+966 920 015 795"
            />

            <LinkButton
              href="mailto:info@nuqtalabs.com"
              icon={<Mail color="#DC2626" />}
              title="Email"
              subtitle="info@nuqtalabs.com"
            />
          </div>

          {/* Footer */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground text-xs">
              © 2024 Nuqta Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
