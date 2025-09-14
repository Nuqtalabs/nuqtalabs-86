import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MagicText } from '@/components/ui/magic-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().regex(/^05\d{8}$/, {
    message: "Phone number must start with 05 and be exactly 10 digits."
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Please tell us more about your project (minimum 10 characters)."
  })
});
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone ? parseFloat(values.phone) : null,
          company: values.company || null,
          message: values.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="min-h-screen bg-background flex flex-col items-center justify-center relative py-20">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true,
        margin: "-10%"
      }}>
          {/* Left side - Content */}
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <div className="space-y-4">
              <div className="text-brand-pink text-center lg:text-left">
                <MagicText text="Start at Nuqta" />
              </div>
              
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mada text-center lg:text-left" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }} viewport={{
              once: true
            }}>
                Ready to get started?
              </motion.h2>
              
              <motion.p className="text-lg md:text-xl text-white/80 font-effra leading-relaxed text-center lg:text-left" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.8
            }} viewport={{
              once: true
            }}>
                Tell us where you want to go, we'll help you get there.
              </motion.p>
            </div>

            {/* Contact Information */}
            <motion.div className="space-y-6 pt-8" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.0
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold text-brand-green font-mada text-center lg:text-left">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                <motion.a href="tel:920015795" className="flex items-center justify-center lg:justify-start space-x-3 text-white hover:text-brand-pink transition-colors duration-300 group" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 1.2
              }} viewport={{
                once: true
              }}>
                  <div className="p-2 rounded-full bg-brand-blue/20 group-hover:bg-brand-pink/20 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-effra">920015795</span>
                </motion.a>
                
                <motion.a href="mailto:info@nuqtalabs.com" className="flex items-center justify-center lg:justify-start space-x-3 text-white hover:text-brand-pink transition-colors duration-300 group" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 1.4
              }} viewport={{
                once: true
              }}>
                  <div className="p-2 rounded-full bg-brand-blue/20 group-hover:bg-brand-pink/20 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-effra">info@nuqtalabs.com</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div className="space-y-6" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} viewport={{
          once: true
        }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.8
              }} viewport={{
                once: true
              }}>
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white font-effra text-base">Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} className="bg-card border-border text-white placeholder:text-muted-foreground font-effra h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.0
              }} viewport={{
                once: true
              }}>
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white font-effra text-base">Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} className="bg-card border-border text-white placeholder:text-muted-foreground font-effra h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.2
              }} viewport={{
                once: true
              }}>
                  <FormField control={form.control} name="phone" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white font-effra text-base">Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} className="bg-card border-border text-white placeholder:text-muted-foreground font-effra h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.4
              }} viewport={{
                once: true
              }}>
                  <FormField control={form.control} name="company" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white font-effra text-base">Company / Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} className="bg-card border-border text-white placeholder:text-muted-foreground font-effra h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.6
              }} viewport={{
                once: true
              }}>
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white font-effra text-base">Tell us about your project *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your project, goals, and how we can help you..." {...field} className="bg-card border-border text-foreground placeholder:text-muted-foreground font-effra min-h-[140px] pl-12 pt-4 pr-3 pb-3 resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </motion.div>

                <motion.div className="pt-4" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.8
              }} viewport={{
                once: true
              }}>
                  <Button type="submit" disabled={isSubmitting} className="w-full text-white font-effra text-lg py-6 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-pink/20 bg-green-600 hover:bg-green-500">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-brand-blue/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-brand-green/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-brand-pink/10 blur-xl"></div>
    </section>;
};
export { ContactForm };