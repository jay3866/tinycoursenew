"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold mb-2 text-center">TERMS OF SERVICE AGREEMENT</h1>
          <h2 className="text-xl font-semibold mb-6 text-center">TINY VISUAL COURSES</h2>
          
          <div className="prose max-w-none">
            <p className="text-slate-600 mb-8 text-center">Last Updated: April 12, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h2>
            <p>1.1. Welcome to Tiny Visual Courses (hereinafter referred to as the "Company," "we," "us," or "our"). These Terms of Service (hereinafter referred to as the "Agreement" or "Terms") constitute a legally binding agreement between you and the Company governing your access to and use of the website located at tinyvisualcourses.com, including any subdomains thereof, and all associated services, features, content, and applications offered by the Company (collectively, the "Service").</p>
            
            <p>1.2. By accessing, browsing, or otherwise using the Service, or by clicking to accept or agree to these Terms when this option is made available to you, you (hereinafter referred to as "User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms and to comply with all applicable laws and regulations.</p>
            
            <p>1.3. If you are accessing or using the Service on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms, in which case the terms "you" or "your" shall refer to such entity. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not access or use the Service.</p>
            
            <p>1.4. The Company reserves the right, at its sole discretion, to modify, alter, or otherwise update these Terms at any time. The Company will provide notice of any material changes by posting the updated Terms on the Service and updating the "Last Updated" date at the top of these Terms. Continued use of the Service following the posting of revised Terms constitutes your acceptance of such changes. You are responsible for regularly reviewing the most current version of the Terms.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. DEFINITIONS</h2>
            <p>For purposes of these Terms, the following definitions shall apply:</p>
            
            <p>2.1. "Company," "we," "us," or "our" refers to Tiny Visual Courses, its subsidiaries, affiliates, officers, directors, employees, agents, and contractors.</p>
            
            <p>2.2. "Service" refers to the Company's website located at tinyvisualcourses.com, including any subdomains thereof, and all content, services, features, and applications made available through the website.</p>
            
            <p>2.3. "User," "you," or "your" refers to the individual accessing or using the Service, or the company or organization on behalf of which that individual is accessing or using the Service.</p>
            
            <p>2.4. "Account" refers to the personal user profile created by a User upon registration for the Service.</p>
            
            <p>2.5. "Content" refers to all text, images, photos, audio, video, graphics, illustrations, designs, computer code, software, data, and other materials that are part of or included in the Service.</p>
            
            <p>2.6. "User Content" refers to any content, information, data, text, software, music, sound, photographs, graphics, videos, messages, or other materials that Users submit, upload, post, or transmit to be made available through the Service.</p>
            
            <p>2.7. "Intellectual Property Rights" refers to all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights as may now exist or hereafter come into existence, and all applications and registrations, renewals, and extensions thereof, under the laws of any state, country, territory, or other jurisdiction.</p>
            
            <p>2.8. "Member Area" refers to the restricted-access portion of the Service available only to registered Users who have purchased access to specific courses or content.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. ACCOUNT REGISTRATION AND SECURITY</h2>
            <p>3.1. Registration Requirement. To access certain features of the Service, including the Member Area and course content, you must register for an account with the Company. During the registration process, you will be required to provide certain information and establish a username and password.</p>
            
            <p>3.2. Accuracy of Information. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. The Company reserves the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, incomplete, or fraudulent.</p>
            
            <p>3.3. Account Security. You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree to (a) immediately notify the Company of any unauthorized use of your username, password, or account, or any other breach of security, and (b) ensure that you exit from your account at the end of each session when accessing the Service. You acknowledge and agree that you are solely responsible for all activities that occur under your account.</p>
            
            <p>3.4. Account Sharing Prohibition. You may not share your account credentials with any third party or allow any third party to access or use the Service through your account. Each registration is for a single user only. The Company reserves the right to terminate your account if you violate these provisions.</p>
            
            <p>3.5. Age Restrictions. By creating an account, you represent and warrant that you are at least 18 years of age, or the legal age of majority in your jurisdiction if that age is greater than 18. Individuals under the age of 18, or the applicable age of majority, may only use the Service with the involvement, supervision, and approval of a parent or legal guardian.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. CONTENT AND INTELLECTUAL PROPERTY</h2>
            <p>4.1. Ownership of Service Content. The Service and all Content provided through it, including but not limited to text, images, graphics, logos, button icons, photographs, audio clips, digital downloads, data compilations, software, and the compilation thereof, are owned by or licensed to the Company and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            
            <p>4.2. Limited License to Use Service. Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your personal, non-commercial purposes.</p>
            
            <p>4.3. Course Content License. Upon purchase of a course or other premium content, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and view the purchased content through the Service for your personal, non-commercial educational purposes only.</p>
            
            <p>4.4. User Content. You retain all ownership rights in any User Content you submit, post, or display on or through the Service. By submitting, posting, or displaying User Content on or through the Service, you grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, distribute, and display such User Content in connection with providing and promoting the Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. PAYMENT TERMS</h2>
            <p>5.1. Pricing. The Company offers various products and services for purchase through the Service. All prices are listed in US dollars unless otherwise specified. The Company reserves the right to change prices for products and services at any time.</p>
            
            <p>5.2. Payment Processing. Payment must be made in full before access is granted to purchased content. The Company may use third-party payment processors to facilitate the payment of fees.</p>
            
            <p>5.3. Authorization. By providing payment information, you represent and warrant that you have the legal right to use any credit card(s) or other payment method(s) utilized in connection with any transaction.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. REFUND POLICY</h2>
            <p>6.1. Satisfaction Guarantee. The Company offers a 30-day money-back guarantee on course purchases. If you are not satisfied with your purchase for any reason, you may request a refund within 30 days of the purchase date.</p>
            
            <p>6.2. Refund Process. To request a refund, you must contact our customer support team at support@tinyvisualcourses.com within the 30-day period from the date of purchase.</p>
            
            <p>6.3. Refund Limitations. Certain purchases may not be eligible for refunds as specified at the time of purchase.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>
            <p>7.1. General Conduct. You agree that you will not engage in any activity that interferes with or disrupts the Service or servers or networks connected to the Service. You agree to use the Service in accordance with all applicable laws and regulations.</p>
            
            <p>7.2. Prohibited Activities. You agree not to use the Service for any illegal purpose, harass other users, violate intellectual property rights, or attempt to gain unauthorized access to the Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. LIMITATION OF LIABILITY</h2>
            <p>8.1. Disclaimer of Warranties. THE SERVICE AND ALL CONTENT PROVIDED THROUGH THE SERVICE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            
            <p>8.2. Limitation of Liability. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. INDEMNIFICATION</h2>
            <p>9.1. You agree to defend, indemnify, and hold harmless the Company from and against any claims arising out of or relating to your violation of these Terms or your use of the Service.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. TERMINATION</h2>
            <p>10.1. Term. These Terms will remain in full force and effect while you use the Service or maintain an account with us.</p>
            
            <p>10.2. Termination by You. You may terminate your account at any time by contacting us at support@tinyvisualcourses.com.</p>
            
            <p>10.3. Termination by the Company. The Company reserves the right to terminate or suspend your access to the Service at its sole discretion, with or without notice.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">11. DISPUTE RESOLUTION</h2>
            <p>11.1. Governing Law. These Terms shall be governed by the laws of the State of Arizona, without giving effect to any choice or conflict of law provision.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">12. GENERAL PROVISIONS</h2>
            <p>12.1. Entire Agreement. These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Company concerning your use of the Service.</p>
            
            <p>12.2. Severability. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be eliminated or limited to the minimum extent necessary.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">13. CONTACT INFORMATION</h2>
            <p>13.1. General Inquiries. If you have any questions or comments about these Terms or the Service, please contact us at support@tinyvisualcourses.com.</p>
            
            <p>13.2. Legal Notices. Legal notices to the Company should be sent to:</p>
            
            <p className="ml-8">Tiny Visual Courses<br />
            Makers Media<br />
            1755 N Pebblecreek Prkwy<br />
            Goodyear, AZ 85395<br />
            Attention: Legal Department</p>
            
            <p className="text-center font-bold mt-12">BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEIR TERMS AND CONDITIONS.</p>
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
