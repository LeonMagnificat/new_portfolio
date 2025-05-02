import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { typography } from '@/styles/constants';
import { Send } from 'lucide-react';

interface ContactFormProps {
  isDarkMode?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode = false }) => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block ${typography.body} font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Name
          </label>
          <Input 
            placeholder="John Doe" 
            className={`${isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-pink-500' 
              : 'bg-gray-50 border-gray-200 focus:border-pink-500'} h-12`} 
          />
        </div>
        <div>
          <label className={`block ${typography.body} font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <Input 
            type="email" 
            placeholder="john@example.com" 
            className={`${isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-pink-500' 
              : 'bg-gray-50 border-gray-200 focus:border-pink-500'} h-12`} 
          />
        </div>
      </div>
      
      <div>
        <label className={`block ${typography.body} font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Subject
        </label>
        <Input 
          placeholder="Project Inquiry" 
          className={`${isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white focus:border-pink-500' 
            : 'bg-gray-50 border-gray-200 focus:border-pink-500'} h-12`} 
        />
      </div>
      
      <div>
        <label className={`block ${typography.body} font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Message
        </label>
        <Textarea 
          placeholder="Tell me about your project..." 
          rows={5} 
          className={`${isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white focus:border-pink-500' 
            : 'bg-gray-50 border-gray-200 focus:border-pink-500'} resize-none`} 
        />
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="privacy-policy"
          className={`h-4 w-4 rounded border-gray-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} focus:ring-pink-500`}
        />
        <label 
          htmlFor="privacy-policy" 
          className={`ml-2 block ${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          I agree to the <a href="#" className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'} hover:underline`}>Privacy Policy</a>
        </label>
      </div>
      
      <Button 
        className={`w-full h-12 flex items-center justify-center gap-2 ${
          isDarkMode 
            ? 'bg-pink-500 text-white hover:bg-pink-600' 
            : 'bg-pink-600 text-white hover:bg-pink-700'
        } transition-colors`}
      >
        <Send className="w-4 h-4" />
        Send Message
      </Button>
      
      <p className={`text-center ${typography.body} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        I'll respond as soon as possible
      </p>
    </form>
  );
};

export default ContactForm;