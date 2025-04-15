"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
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
          <h1 className="text-3xl font-bold mb-2 text-center">PRIVACY POLICY</h1>
          <h2 className="text-xl font-semibold mb-6 text-center">TINY VISUAL COURSES</h2>
          
          <div className="prose max-w-none">
            <p className="text-slate-600 mb-8 text-center">Last Updated: April 12, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. INTRODUCTION AND OVERVIEW</h2>
            <p>1.1. Tiny Visual Courses, a brand of Makers Media ("Company," "we," "us," or "our"), respects your privacy and is committed to protecting your personal data. This Privacy Policy (the "Policy") explains how we collect, use, disclose, retain, and safeguard your information when you visit our website located at tinyvisualcourses.com, including any subdomains thereof (the "Website"), or use our online educational services (collectively, the "Service").</p>
            
            <p>1.2. This Policy applies to all information collected through our Service and any related services, sales, marketing, or events. It also applies to information we collect when you interact with us through social media or other websites and platforms.</p>
            
            <p>1.3. By accessing or using the Service, you consent to the collection, use, and disclosure of your information in accordance with this Policy. If you do not agree with any part of this Policy, please do not access or use our Service.</p>
            
            <p>1.4. We may update this Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Policy on this page and updating the "Last Updated" date. Your continued use of the Service after such modifications constitutes your acknowledgment of the modified Policy and agreement to abide and be bound by it. We encourage you to review this Policy periodically to stay informed about our information practices.</p>
            
            <p>1.5. This Policy should be read in conjunction with our Terms of Service, which govern your use of our Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. INFORMATION WE COLLECT</h2>
            <p>We collect several types of information from and about users of our Service, including:</p>
            
            <p>2.1. Personal Information</p>
            <p>2.1.1. Information You Provide to Us: We collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Register for an account;</li>
              <li>Purchase a course or other product;</li>
              <li>Sign up for our newsletter or marketing communications;</li>
              <li>Participate in discussion boards, forums, or other interactive features;</li>
              <li>Contact our customer support team; or</li>
              <li>Otherwise communicate with us.</li>
            </ul>
            
            <p>2.1.2. The personal information we collect may include:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Identity Data: Full name, username or similar identifier, title, and date of birth;</li>
              <li>Contact Data: Email address, telephone number, billing address, shipping address, and social media handles;</li>
              <li>Financial Data: Payment card details, bank account information, and billing information;</li>
              <li>Transaction Data: Details about payments to and from you, and details of products and services you have purchased from us;</li>
              <li>Profile Data: Your username and password, purchases or orders made by you, your interests, preferences, feedback, survey responses, and course progress;</li>
              <li>Educational Data: Your learning preferences, course completions, quiz results, assignment submissions, and other information related to your educational activities on our Service; and</li>
              <li>Content Data: Any content you upload to our Service, including comments, posts, assignments, and feedback.</li>
            </ul>
            
            <p>2.2. Information We Collect Automatically</p>
            <p>2.2.1. Usage Data: When you use our Service, we automatically collect certain information about how you interact with our Website and Service, including:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Information about your device and internet connection, including your IP address, device type, operating system, browser type, and screen resolution;</li>
              <li>Pages you view on our Website, the time spent on those pages, the links you click, and other browsing actions;</li>
              <li>Details about your search queries on our Website;</li>
              <li>The referring website, app, or advertisement that led you to our Website;</li>
              <li>Course engagement metrics, including videos watched, lessons completed, and time spent on course materials; and</li>
              <li>Error logs and other diagnostic data related to your use of our Service.</li>
            </ul>
            
            <p>2.3. Cookies and Tracking Technologies</p>
            <p>2.3.1. We use cookies, web beacons, pixels, tags, and similar tracking technologies to collect information and personalize your experience. These technologies help us:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Remember your account login information and preferences;</li>
              <li>Understand how you interact with our Service;</li>
              <li>Analyze site traffic and usage patterns;</li>
              <li>Measure the effectiveness of our marketing campaigns; and</li>
              <li>Improve our Service and customer experience.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
            <p>3.1. Legitimate Business Purposes</p>
            <p>We use the information we collect for various legitimate business purposes, including:</p>
            
            <p>3.1.1. Providing and Maintaining the Service:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Creating and managing your account;</li>
              <li>Processing your purchases and providing access to purchased courses;</li>
              <li>Delivering the content, products, and features you request;</li>
              <li>Tracking your course progress;</li>
              <li>Maintaining the functionality and security of our Service; and</li>
              <li>Personalizing your learning experience.</li>
            </ul>
            
            <p>3.1.2. Marketing and Promotional Activities:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Sending marketing communications about our products, services, promotions, and events;</li>
              <li>Delivering targeted advertisements based on your interests and interactions with our Service;</li>
              <li>Measuring the effectiveness of our marketing campaigns; and</li>
              <li>Conducting surveys and collecting feedback.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. DATA SHARING AND DISCLOSURE</h2>
            <p>4.1. Third-Party Service Providers</p>
            <p>4.1.1. We may share your information with third-party service providers who perform services on our behalf, including:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Payment processors and billing services;</li>
              <li>Customer support and help desk providers;</li>
              <li>Hosting and cloud computing service providers;</li>
              <li>Data analytics providers;</li>
              <li>Email and communication service providers;</li>
              <li>Marketing and advertising partners;</li>
              <li>Survey and research companies; and</li>
              <li>Technical maintenance and platform providers.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. DATA SECURITY</h2>
            <p>5.1. Security Measures</p>
            <p>5.1.1. We implement appropriate technical and organizational security measures to protect your personal information from accidental loss, unauthorized access, use, alteration, or disclosure. These measures include:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Encryption of sensitive information;</li>
              <li>Secure Sockets Layer (SSL) technology for data transmission;</li>
              <li>Access controls and authentication requirements;</li>
              <li>Regular security assessments and audits;</li>
              <li>Data backup and recovery procedures; and</li>
              <li>Staff training on data protection and security.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. YOUR RIGHTS AND CHOICES</h2>
            <p>6.1. Access and Correction</p>
            <p>6.1.1. You have the right to access the personal information we hold about you and to request that we correct any inaccurate information. You can update certain personal information directly through your account settings or by contacting us.</p>
            
            <p>6.2. Marketing Communications</p>
            <p>6.2.1. You can opt out of receiving marketing communications from us by:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>Following the opt-out or unsubscribe instructions contained in the communication;</li>
              <li>Updating your communication preferences in your account settings; or</li>
              <li>Contacting us directly.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. CHILDREN'S PRIVACY</h2>
            <p>7.1. Age Restrictions</p>
            <p>7.1.1. Our Service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are under 13, please do not provide any personal information to us.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. THIRD-PARTY LINKS AND SERVICES</h2>
            <p>8.1. Third-Party Links</p>
            <p>8.1.1. Our Service may contain links to third-party websites, applications, or services that are not owned or controlled by us. This Policy applies only to our Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. CHANGES TO THIS PRIVACY POLICY</h2>
            <p>9.1. Updates and Notifications</p>
            <p>9.1.1. We may update this Privacy Policy from time to time to reflect changes in our practices, our Service, or legal requirements. The updated Policy will be effective upon posting on our Website, and the "Last Updated" date at the top of this Policy will be revised.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. HOW TO CONTACT US</h2>
            <p>10.1. Contact Information</p>
            <p>10.1.1. If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
            
            <p className="ml-8">Tiny Visual Courses<br />
            Makers Media<br />
            1755 N Pebblecreek Prkwy<br />
            Goodyear, AZ 85395<br />
            Attention: Legal Department<br />
            Email: support@tinyvisualcourses.com</p>
            
            <p className="text-center font-bold mt-12">BY USING OUR SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS PRIVACY POLICY, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.</p>
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
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
