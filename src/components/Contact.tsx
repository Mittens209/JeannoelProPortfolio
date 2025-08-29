import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import type { ContactFormData } from '@/types/contact';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'junnellemiguel09@gmail.com',
      href: 'mailto:junnellemiguel09@gmail.com',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 961 836 5137',
      href: 'tel:+639618365137',
      gradient: 'from-accent-purple to-accent-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vintar, Ilocos Norte 2915',
      href: '#',
      gradient: 'from-accent-cyan to-accent-purple'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const contactData: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      const { error } = await supabase
        .from('contact_submissions')
        .insert([contactData]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                innovative projects, and collaborations. Feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card
                key={info.label}
                className="bg-card/30 backdrop-blur-glass border-border/20 hover:bg-card/50 hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-primary">{info.label}</h4>
                      {info.href.startsWith('#') ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-accent-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Availability Status */}
            <Card className="bg-gradient-accent p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h4 className="font-semibold">Available for Work</h4>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Currently open to full-time opportunities, freelance projects, 
                and consulting work.
              </p>
              <p className="text-xs opacity-75">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-glass border-border/20 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="bg-card/50 border-border/50 focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-card/50 border-border/50 focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-primary">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-card/50 border-border/50 focus:border-accent-blue transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="bg-card/50 border-border/50 focus:border-accent-blue transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border/20">
                <p className="text-sm text-muted-foreground text-center">
                  Prefer email? Send directly to{' '}
                  <a
                    href="mailto:junnellemiguel09@gmail.com"
                    className="text-accent-blue hover:underline"
                  >
                    junnellemiguel09@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;