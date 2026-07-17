'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, Store, ShieldCheck, Tag, EyeOff, Eye, ChevronDown, 
  User, CheckCircle2, ChevronLeft, MapPin, Mail, Lock, Check, Package
} from 'lucide-react';

export default function RegisterPage() {
  const [role, setRole] = useState<'customer' | 'shop'>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [showShopPassword, setShowShopPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      
      {/* Mobile Header with Back Button */}
      <div className="lg:hidden p-4 flex items-center bg-white border-b border-gray-100">
        <Link href="/login" className="p-2 -ml-2 text-gray-900">
          <ChevronLeft size={24} />
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row w-full flex-1 relative">
        
        {/* LEFT PANEL (Desktop Only) */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-50 to-emerald-100 p-12 flex-col justify-between relative overflow-hidden shrink-0 lg:h-screen lg:sticky lg:top-0">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-green-300/30 rounded-full blur-3xl -translate-x-1/2"></div>
        
        <div className="relative z-10 mt-4">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-sm">
              <ShoppingBag size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-green-700 tracking-tight uppercase">Kart Mithra</span>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Your Nearby Marketplace</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
            Shop Local,<br/>
            <span className="text-green-600">Support Local</span>
          </h1>
          
          <p className="text-gray-700 text-lg mb-10 max-w-md">
            Find everything you need from trusted local stores near you. Pre-order and pick up. Simple!
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm text-green-600 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">Nearby Stores</h3>
                <p className="text-gray-600 text-sm">Discover stores around you</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm text-green-600 flex items-center justify-center shrink-0">
                <Package size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">Wide Range</h3>
                <p className="text-gray-600 text-sm">From groceries to daily essentials</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm text-green-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">Trusted & Secure</h3>
                <p className="text-gray-600 text-sm">Safe payments and secure orders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Veggie Basket Image Placeholder */}
        <div className="relative z-10 mt-12 w-full h-56 bg-white/40 rounded-3xl backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-lg overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=400" 
              alt="Groceries" 
              className="w-full h-full object-cover opacity-95 mix-blend-multiply"
            />
        </div>
      </div>

      {/* RIGHT PANEL (Forms) */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white relative">
          
          <div className="flex-1 p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col relative w-full lg:min-h-screen justify-center">
          
          {/* Header & Toggle */}
          <div className="flex flex-col w-full max-w-md mx-auto">
            <div className="lg:hidden flex flex-col items-center justify-center gap-2 mb-8">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                <ShoppingBag size={36} />
              </div>
              <div className="flex flex-col items-center text-center mt-2">
                <span className="text-xl font-bold text-green-700 tracking-tight uppercase">Kart Mithra</span>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Your Nearby Marketplace</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {role === 'customer' ? 'Create your account' : 'Create your store account'}
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              {role === 'customer' 
                ? 'Join us and start shopping from nearby stores' 
                : 'Manage your store and grow your business'}
            </p>

            <div className="flex p-1 bg-gray-50 rounded-xl mb-10 border border-gray-100">
              <button 
                onClick={() => setRole('customer')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  role === 'customer' 
                    ? 'bg-white text-green-700 shadow-sm border border-gray-100' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <User size={16} />
                Customer
              </button>
              <button 
                onClick={() => setRole('shop')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  role === 'shop' 
                    ? 'bg-white text-green-700 shadow-sm border border-gray-100' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Store size={16} />
                Shop Owner
              </button>
            </div>
          </div>

          {/* Forms Container */}
          <div className="flex-1 flex flex-col gap-10 max-w-md mx-auto w-full relative">
            
            {/* --- CUSTOMER FORM --- */}
            <div className={`flex-1 flex-col ${role === 'shop' ? 'hidden' : 'flex'}`}>
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Customer Details</h3>
              </div>

              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <InputField label="Full Name" icon={<User size={18}/>} placeholder="Enter your full name" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Phone Number</label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm">
                    <button type="button" className="flex items-center gap-1.5 px-3 py-3 bg-gray-50/50 border-r border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors">
                      <span className="text-lg leading-none mt-0.5">📞</span> +91 <ChevronDown size={14} className="text-gray-400" />
                    </button>
                    <input type="tel" placeholder="Enter your mobile number" className="flex-1 py-3 px-3 text-sm focus:outline-none" />
                  </div>
                </div>

                <InputField label="Email Address (Optional)" icon={<Mail size={18}/>} placeholder="Enter your email address" type="email" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Password</label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm relative">
                    <div className="pl-3 py-3 flex items-center justify-center text-gray-400">
                      <Lock size={18} />
                    </div>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a password" 
                      className="flex-1 py-3 px-3 text-sm focus:outline-none pr-10"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 inset-y-0 px-3 flex items-center text-gray-400">
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-green-700">
                      <CheckCircle2 size={16} className="text-green-600" /> At least 6 characters
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-green-700">
                      <CheckCircle2 size={16} className="text-green-600" /> One uppercase letter
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-green-700">
                      <CheckCircle2 size={16} className="text-green-600" /> One number
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-4 rounded-xl mt-6 shadow-md transition-all">
                  Create Account
                </button>
              </form>
              
              <SocialAuth dividerText="or register with" loginText="Already have an account?" />
            </div>

            {/* --- SHOP OWNER FORM --- */}
            <div className={`flex-1 flex-col ${role === 'customer' ? 'hidden' : 'flex'}`}>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                
                <h3 className="font-bold text-green-700 text-sm mb-2 uppercase tracking-wide">Personal Details</h3>
                
                <InputField label="Full Name" icon={<User size={18}/>} placeholder="Enter your full name" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Phone Number</label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm">
                    <button type="button" className="flex items-center gap-1.5 px-3 py-3 bg-gray-50/50 border-r border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors">
                      <span className="text-lg leading-none mt-0.5">📞</span> +91 <ChevronDown size={14} className="text-gray-400" />
                    </button>
                    <input type="tel" placeholder="Enter your mobile number" className="flex-1 py-3 px-3 text-sm focus:outline-none" />
                  </div>
                </div>

                <InputField label="Email Address" icon={<Mail size={18}/>} placeholder="Enter your email address" type="email" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Password</label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm relative">
                    <div className="pl-3 py-3 flex items-center justify-center text-gray-400">
                      <Lock size={18} />
                    </div>
                    <input 
                      type={showShopPassword ? "text" : "password"} 
                      placeholder="Create a password" 
                      className="flex-1 py-3 px-3 text-sm focus:outline-none pr-10"
                    />
                    <button type="button" onClick={() => setShowShopPassword(!showShopPassword)} className="absolute right-0 inset-y-0 px-3 flex items-center text-gray-400">
                      {showShopPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-8 mb-2"></div>
                <h3 className="font-bold text-green-700 text-sm mb-2 uppercase tracking-wide">Business Details</h3>

                <InputField label="Store Name" icon={<Store size={18}/>} placeholder="Enter your store name" />
                
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Store Type</label>
                  <div className="relative">
                    <select className="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 shadow-sm appearance-none text-gray-700 font-medium">
                      <option>Select store type</option>
                      <option>Groceries</option>
                      <option>Pharmacy</option>
                      <option>Electronics</option>
                      <option>Clothing</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5">Address</label>
                  <div className="flex rounded-xl border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm relative overflow-hidden">
                    <div className="pl-4 py-3 flex items-center justify-center text-gray-400">
                      <MapPin size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter your store address" 
                      className="flex-1 py-3 px-3 text-sm focus:outline-none"
                    />
                    <button type="button" className="px-4 flex items-center text-green-600 hover:text-green-700 bg-green-50 border-l border-gray-100">
                      <MapPin size={16} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-4 rounded-xl mt-6 shadow-md transition-all">
                  Create Account
                </button>
              </form>

              <SocialAuth dividerText="or register with" loginText="Already have an account?" />
            </div>
            
          </div>
        </div>

        </div>
      </div>

      {/* Information We Collect - Footer (Desktop Only) */}
      <div className="hidden lg:block w-full bg-green-50/50 border-t border-green-100 py-12 px-8 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 xl:gap-12 items-start">
            
            <div>
              <h4 className="font-bold text-green-900 mb-3 text-lg">Information We Collect</h4>
              <div className="flex items-center gap-3 text-green-700 mt-4">
                <ShieldCheck size={36} strokeWidth={1.5} className="shrink-0" />
                <p className="text-xs font-semibold leading-snug">Your data is safe and secure with us.</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-green-800 text-sm mb-4">For Customers</h5>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Full Name</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Phone Number (Required)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Email (Optional)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Password</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-green-800 text-sm mb-4">For Shop Owners</h5>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Full Name</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Phone (Required)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Email Address</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Password</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Store Name & Type</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Store Address</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-green-800 text-sm mb-4">Why Collect This?</h5>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-2"><Check size={16} className="text-green-600 shrink-0" /> <span className="leading-tight">To secure your account</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-600 shrink-0" /> <span className="leading-tight">Process orders & payments</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-600 shrink-0" /> <span className="leading-tight">Provide better support</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-green-600 shrink-0" /> <span className="leading-tight">Send updates and offers</span></li>
              </ul>
            </div>

          </div>
        </div>
      
    </div>
  );
}

function InputField({ label, icon, placeholder, type = "text" }: { label: string, icon: React.ReactNode, placeholder: string, type?: string }) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-1.5">{label}</label>
      <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all shadow-sm">
        <div className="pl-3 py-3 flex items-center justify-center text-gray-400">
          {icon}
        </div>
        <input 
          type={type} 
          placeholder={placeholder} 
          className="flex-1 py-3 px-3 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}

function SocialAuth({ dividerText, loginText }: { dividerText: string, loginText: string }) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="text-xs font-medium text-gray-400">{dividerText}</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="flex flex-col xl:flex-row gap-3 mb-8">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-sm font-semibold text-gray-700">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.47 18.63 12 18.63C9.15 18.63 6.74 16.71 5.88 14.13H2.21V16.98C4.01 20.55 7.71 23 12 23Z" fill="#34A853"/>
            <path d="M5.88 14.13C5.66 13.47 5.54 12.76 5.54 12C5.54 11.24 5.66 10.53 5.88 9.87V7.02H2.21C1.47 8.5 1.05 10.19 1.05 12C1.05 13.81 1.47 15.5 2.21 16.98L5.88 14.13Z" fill="#FBBC05"/>
            <path d="M12 5.38C13.62 5.38 15.06 5.94 16.2 7.02L19.36 3.86C17.45 2.08 14.97 1 12 1C7.71 1 4.01 3.45 2.21 7.02L5.88 9.87C6.74 7.29 9.15 5.38 12 5.38Z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-sm font-semibold text-gray-700">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.365 7.114c.767-.935 1.282-2.115 1.141-3.328-1.045.042-2.316.697-3.109 1.66-.71.859-1.328 2.062-1.16 3.251 1.166.09 2.365-.63 3.128-1.583zm-3.69 1.706c-1.63 0-3.111-1.047-4.14-1.047-1.05 0-2.285 1.018-3.655 1.018-1.765.029-3.393 1.026-4.301 2.613-1.84 3.197-.47 7.946 1.324 10.536.883 1.267 1.936 2.697 3.313 2.642 1.328-.057 1.841-.861 3.447-.861 1.597 0 2.062.83 3.454.861 1.411.03 2.313-1.24 3.187-2.518 1.015-1.48 1.433-2.915 1.453-2.993-.031-.013-2.812-1.078-2.838-4.244-.022-2.65 2.164-3.926 2.271-3.985-1.238-1.815-3.155-2.06-3.842-2.091z" />
          </svg>
          Continue with Apple
        </button>
      </div>
      
      <div className="text-center pb-6 lg:pb-0">
        <p className="text-sm text-gray-600">
          {loginText} <Link href="/login" className="font-bold text-green-700 hover:text-green-800">Login</Link>
        </p>
      </div>
    </div>
  );
}
