"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MapPin, Clock, ChevronDown, Building, Briefcase, PenTool, Sparkles, Zap, Users, BarChart } from "lucide-react"
import { useState, useRef } from "react"

// Define FAQ question type
type FaqQuestion = {
  question: string;
  answer: string;
};

// FAQ Accordion Component
function FaqAccordion({ questions }: { questions: FaqQuestion[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-4">
      {questions.map((faq: FaqQuestion, index: number) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex items-center justify-between w-full p-4 text-left ${openIndex === index ? 'bg-slate-50' : 'bg-white'}`}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-4 pt-0 bg-slate-50">
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Enterprise Form Modal Component
function EnterpriseFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectDescription: '',
    budget: '',
    timeline: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission and store in localStorage
    setTimeout(() => {
      const existingLeads = JSON.parse(localStorage.getItem('enterpriseLeads') || '[]');
      const newLead = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      
      localStorage.setItem('enterpriseLeads', JSON.stringify([...existingLeads, newLead]));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Enterprise Inquiry</h2>
            <button 
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700"
              disabled={isSubmitting}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 mx-auto mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Your enterprise inquiry has been submitted successfully. Our team will contact you within 12 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-slate-700 mb-1">Contact Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-1">Project Description *</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Estimated Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Less than 1 month">Less than 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-700 mr-2"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [showEnterpriseForm, setShowEnterpriseForm] = useState(false);
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Enterprise Form Modal */}
      <EnterpriseFormModal 
        isOpen={showEnterpriseForm} 
        onClose={() => setShowEnterpriseForm(false)} 
      />
      <div className="container py-12 max-w-5xl">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/TVO-icon-5498596.png" alt="Tiny Visual Course Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-lg font-medium">Tiny Visual Courses</span>
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Have questions about our Tiny Visual Courses? We're here to help you turn your expertise into engaging visual frameworks that attract buyers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Contact */}
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-3">For any inquiries or support</p>
              <a href="mailto:support@tinyvisualcourses.com" className="text-primary font-medium hover:underline">
                support@tinyvisualcourses.com
              </a>
            </div>
            
            {/* Social Media */}
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <p className="text-slate-600 mb-3">Follow our journey</p>
              <div className="flex items-center justify-center gap-4">
                <a href="#" className="text-slate-700 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-slate-700 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-slate-700 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-slate-600 mb-3">We value your time</p>
              <p className="text-slate-800">
                Our team will follow up with you within <span className="font-semibold">12 hours</span> of your inquiry.
              </p>
            </div>
          </div>
          
          {/* Enterprise Section */}
          <div className="border-t pt-12 mb-16">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-white/10 p-6 rounded-full">
                    <Building className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold mb-3">Enterprise Solutions</h2>
                  <p className="text-slate-200 mb-4">
                    Joining the ranks of Fortune 500 companies and industry leaders who trust our expertise for their visual learning needs. Our enterprise team specializes in creating custom, high-impact visual frameworks that transform complex information into compelling learning experiences.
                  </p>
                  <p className="text-slate-300 mb-6">
                    For corporate enterprise projects or full done-for-you Enterprise Designs, contact our specialized team who have delivered transformative visual solutions to leading organizations across multiple industries.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>Custom Enterprise Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                      <PenTool className="h-4 w-4 text-primary" />
                      <span>White-Glove Design Service</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Team Training & Workshops</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowEnterpriseForm(true)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Enterprise Team
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="border-t pt-12 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* FAQ Accordion Component */}
              <FaqAccordion 
                questions={[
                  {
                    question: "What are Tiny Visual Courses?",
                    answer: "Tiny Visual Courses are concise, visually-driven educational products that help you transform your expertise into engaging frameworks that attract buyers on demand. Our approach focuses on creating high-impact visual content that communicates complex ideas simply and effectively, making your course more engaging and easier to consume."
                  },
                  {
                    question: "How quickly can I create my course?",
                    answer: "With our proven methodology, you can build your Tiny Visual Course in as little as a weekend, even if you have no prior course creation experience. Our streamlined process eliminates the overwhelm of traditional course creation by focusing on visual frameworks that communicate your expertise clearly and effectively."
                  },
                  {
                    question: "Do I need technical skills?",
                    answer: "No technical overwhelm! Our system is designed for creators of all technical levels, with step-by-step guidance and templates. We provide user-friendly tools and resources that make it easy to create professional-looking visual content without any design or technical expertise."
                  },
                  {
                    question: "How do I get started?",
                    answer: "Simply purchase our Tiny Visual Course Masterclass, and you'll get immediate access to all the training and resources you need to get started. You'll be guided through our proven framework for creating engaging visual courses that convert, with templates and examples to help you along the way."
                  },
                  {
                    question: "What makes Tiny Visual Courses different from other course creation programs?",
                    answer: "Tiny Visual Courses stands out by focusing exclusively on visual learning frameworks that are proven to increase engagement and retention. Unlike traditional text-heavy courses, our approach leverages the power of visual communication to make complex information more accessible and memorable for your students."
                  },
                  {
                    question: "Can I use Tiny Visual Courses for any subject matter?",
                    answer: "Yes! Our visual framework methodology works for virtually any subject matter or expertise. Whether you're teaching business skills, creative pursuits, technical knowledge, or personal development, our approach can help you transform your expertise into engaging visual content that resonates with your audience."
                  },
                  {
                    question: "What kind of results can I expect?",
                    answer: "Our students typically see higher engagement rates, better completion rates, and stronger testimonials compared to traditional courses. The visual nature of our approach helps learners grasp concepts more quickly and retain information longer, leading to better outcomes and more satisfied customers."
                  },
                  {
                    question: "Is there ongoing support after I purchase?",
                    answer: "Absolutely! We provide comprehensive support through our community, regular Q&A sessions, and dedicated support team. We're committed to your success and will be there to guide you through every step of creating and launching your Tiny Visual Course."
                  },
                  {
                    question: "Do you offer refunds if I'm not satisfied?",
                    answer: "Yes, we offer a 30-day satisfaction guarantee. If you complete the program and don't find value in our approach, simply reach out to our support team, show us you've done the work, and we'll process your refund."
                  },
                  {
                    question: "Can I upgrade to enterprise services later?",
                    answer: "Absolutely! Many of our enterprise clients started with our standard Tiny Visual Courses program before scaling up to our enterprise solutions. We offer a clear pathway for growth as your needs evolve."
                  }
                ]}
              />
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl">
                Get Started Today
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-4">
              Join 500+ successful creators who've mastered the art of visual selling
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="border-t bg-slate-50 py-10 mt-12">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center gap-2">
                <Image src="/TVO-icon-5498596.png" alt="Tiny Visual Course Logo" width={24} height={24} className="h-6 w-auto" />
                <span className="text-sm font-medium">Tiny Visual Courses</span>
              </div>
              
              <div className="text-center text-sm text-slate-700 mb-2">
                Need help? Email: support@tinyvisualcourses.com
              </div>
              
              <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                <span className="text-slate-400">|</span>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500">© Tiny Visual Courses, 2025 All Rights Reserved</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
