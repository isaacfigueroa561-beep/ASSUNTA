import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Store } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // No actual API call — just show success toast
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting Assunta. We will get back to you soon.',
    });
    form.reset();
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Page Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Contattaci
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-base md:text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-card p-8 md:p-10 rounded-sm border border-card-border shadow-md">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans font-semibold">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-contact-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans font-semibold">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              data-testid="input-contact-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans font-semibold">Subject</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-contact-subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="wholesale">Wholesale</SelectItem>
                              <SelectItem value="press">Press</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans font-semibold">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what's on your mind..."
                              rows={6}
                              {...field}
                              data-testid="textarea-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-bold"
                      data-testid="button-submit-contact"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Where to Buy */}
              <div className="bg-card p-6 rounded-sm border border-card-border shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Store size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      Where to Buy
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground">
                      Find Assunta at your local Costco
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-sans text-foreground">
                    Available at Costco locations nationwide. Check your local store for availability.
                  </p>
                </div>
              </div>

              {/* Brand Info */}
              <div className="bg-card p-6 rounded-sm border border-card-border shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      Our Promise
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-sans text-foreground leading-relaxed">
                  Every jar of Assunta is made with the same care, patience, and quality ingredients that Assunta herself insisted upon. Made with love in the Italian tradition.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-primary/5 p-6 rounded-sm border border-primary/20">
                <blockquote className="text-base font-serif italic text-foreground leading-relaxed">
                  "If you cook with love, people will taste it."
                </blockquote>
                <cite className="text-sm font-sans text-muted-foreground not-italic block mt-2">
                  Assunta Moretti
                </cite>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
