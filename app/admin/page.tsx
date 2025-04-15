"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Lock, Eye, EyeOff, AlertTriangle, RefreshCw } from "lucide-react"

// Define the lead type
type EnterpriseLead = {
  id: number;
  date: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectDescription: string;
  budget: string;
  timeline: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<EnterpriseLead[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetMessageType, setResetMessageType] = useState<"success" | "error" | "">("");
  
  // Load leads from localStorage when authenticated and check if account is locked
  useEffect(() => {
    // Check if account is locked
    const lockedUntil = localStorage.getItem('adminLockedUntil');
    if (lockedUntil) {
      const lockTime = parseInt(lockedUntil, 10);
      if (lockTime > Date.now()) {
        setIsLocked(true);
      } else {
        // Lock expired
        localStorage.removeItem('adminLockedUntil');
        localStorage.removeItem('adminLoginAttempts');
        setIsLocked(false);
      }
    }
    
    // Load previous attempt count
    const attempts = localStorage.getItem('adminLoginAttempts');
    if (attempts) {
      setLoginAttempts(parseInt(attempts, 10));
    }
    
    // Load leads if authenticated
    if (isAuthenticated) {
      const storedLeads = localStorage.getItem('enterpriseLeads');
      if (storedLeads) {
        setLeads(JSON.parse(storedLeads));
      }
    }
  }, [isAuthenticated]);
  
  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      setError("Account is locked due to too many failed attempts. Please reset your password.");
      return;
    }
    
    // Increment attempt counter
    const newAttemptCount = loginAttempts + 1;
    setLoginAttempts(newAttemptCount);
    localStorage.setItem('adminLoginAttempts', newAttemptCount.toString());
    
    if (password === "TVCB2B25$$") {
      // Successful login
      setIsAuthenticated(true);
      setError("");
      // Reset attempt counter on successful login
      setLoginAttempts(0);
      localStorage.removeItem('adminLoginAttempts');
    } else {
      // Failed login
      if (newAttemptCount >= 5) {
        // Lock account for 30 minutes
        const lockUntil = Date.now() + (30 * 60 * 1000); // 30 minutes
        localStorage.setItem('adminLockedUntil', lockUntil.toString());
        setIsLocked(true);
        setError("Too many failed attempts. Account locked for 30 minutes. Please use the reset option.");
      } else {
        setError(`Invalid password. Please try again. (Attempt ${newAttemptCount} of 5)`); 
      }
    }
  };
  
  // Handle password reset request
  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (resetEmail === "support@tinyvisualcourses.com") {
      // Valid reset email
      setResetMessageType("success");
      setResetMessage("Password reset instructions sent to your email. Please check your inbox.");
      
      // Reset the lock after 5 seconds
      setTimeout(() => {
        localStorage.removeItem('adminLockedUntil');
        localStorage.removeItem('adminLoginAttempts');
        setIsLocked(false);
        setLoginAttempts(0);
        setShowResetForm(false);
        setResetMessage("");
        setResetMessageType("");
        setResetEmail("");
      }, 5000);
    } else {
      // Invalid reset email
      setResetMessageType("error");
      setResetMessage("Invalid email address. Only the administrator email can reset the password.");
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Generate CSV for download
  const generateCSV = () => {
    // CSV header
    const csvHeader = [
      "ID",
      "Date",
      "Company Name",
      "Contact Name",
      "Email",
      "Phone",
      "Project Description",
      "Budget",
      "Timeline"
    ].join(",");
    
    // CSV rows
    const csvRows = leads.map(lead => {
      return [
        lead.id,
        lead.date,
        `"${lead.companyName.replace(/"/g, '""')}"`,
        `"${lead.contactName.replace(/"/g, '""')}"`,
        `"${lead.email.replace(/"/g, '""')}"`,
        `"${lead.phone.replace(/"/g, '""')}"`,
        `"${lead.projectDescription.replace(/"/g, '""')}"`,
        `"${lead.budget.replace(/"/g, '""')}"`,
        `"${lead.timeline.replace(/"/g, '""')}"`
      ].join(",");
    });
    
    // Combine header and rows
    const csv = [csvHeader, ...csvRows].join("\n");
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `enterprise-leads-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-12 max-w-6xl">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/TVO-icon-5498596.png" alt="Tiny Visual Course Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-lg font-medium">Tiny Visual Courses</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {!isAuthenticated ? (
            <div className="p-8 max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isLocked ? 'bg-red-100' : 'bg-slate-100'}`}>
                  {isLocked ? 
                    <AlertTriangle className="h-8 w-8 text-red-500" /> : 
                    <Lock className="h-8 w-8 text-slate-700" />}
                </div>
                <h1 className="text-2xl font-bold">Admin Access</h1>
                <p className="text-slate-600 mt-2">Enter password to access enterprise leads</p>
                {isLocked && (
                  <div className="mt-2 text-red-600 text-sm font-medium">
                    Account locked due to too many failed attempts
                  </div>
                )}
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}
              
              {!showResetForm ? (
                <>
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Enter admin password"
                          disabled={isLocked}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLocked}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-2 rounded-md transition-colors ${isLocked ? 'bg-slate-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/90'}`}
                      disabled={isLocked}
                    >
                      Access Admin
                    </button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setShowResetForm(true)}
                      className="text-primary hover:underline text-sm flex items-center justify-center mx-auto gap-1"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Reset password
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-700">
                    <p>Enter the administrator email address to reset access. Only the support email can reset the admin password.</p>
                  </div>
                  
                  {resetMessage && (
                    <div className={`p-3 rounded-lg mb-4 text-sm ${resetMessageType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {resetMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleResetRequest}>
                    <div className="mb-4">
                      <label htmlFor="resetEmail" className="block text-sm font-medium text-slate-700 mb-1">
                        Admin Email Address
                      </label>
                      <input
                        type="email"
                        id="resetEmail"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter admin email"
                        required
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowResetForm(false);
                          setResetEmail("");
                          setResetMessage("");
                          setResetMessageType("");
                        }}
                        className="flex-1 border border-slate-300 text-slate-700 py-2 rounded-md hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Reset Access
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Enterprise Leads</h1>
                
                <button
                  onClick={generateCSV}
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download CSV
                </button>
              </div>
              
              {leads.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-300 rounded-lg">
                  <p className="text-slate-500">No enterprise leads found</p>
                  <p className="text-sm text-slate-400 mt-1">Enterprise leads will appear here when submitted through the contact form</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Company</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Contact</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Phone</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Budget</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-slate-200 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-700">{formatDate(lead.date)}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.companyName}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.contactName}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.email}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.phone || "-"}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.budget || "-"}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{lead.timeline || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              <div className="mt-8 border-t pt-6">
                <details className="text-sm text-slate-500">
                  <summary className="cursor-pointer hover:text-slate-700">View Project Description Details</summary>
                  <div className="mt-4 space-y-6">
                    {leads.map((lead) => (
                      <div key={`desc-${lead.id}`} className="border-b pb-4">
                        <div className="font-medium mb-1">{lead.companyName} - {lead.contactName}</div>
                        <div className="text-xs text-slate-400 mb-2">{formatDate(lead.date)}</div>
                        <p className="whitespace-pre-wrap text-slate-600">{lead.projectDescription}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          )}
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
