'use client';

import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent, useState } from 'react';

import CustomCard from '../Home/CustomCard';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false); // Add a state to track the email sent status

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError('');
    setSent(false);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string, // Service ID
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string, // Template ID
        e.target as HTMLFormElement, // The form DOM object
        process.env.NEXT_PUBLIC_EMAIL_USER_ID as string, // User ID
      );

      if (result.status === 200) {
        setSent(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <CustomCard className='shadow-xl'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        {error && <p className='text-red-500'>{error}</p>}
        {sent && (
          <p className='text-neonGreen font-bold'>Message Sent!</p> // Show success message
        )}
        <div className='flex flex-col gap-y-2 items-start'>
          <label htmlFor='name' className='block text-sm font-medium'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border-textLightGray/40 border rounded-md bg-transparent dark:text-white text-textLightGray'
            required
          />
        </div>
        <div className='flex flex-col gap-y-2 items-start'>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-textLightGray/40 rounded-md bg-transparent dark:text-white text-textLightGray'
            required
          />
        </div>
        <div className='flex flex-col gap-y-2 items-start'>
          <label htmlFor='message' className='block text-sm font-medium'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='w-full px-4 py-2 border border-textLightGray/40 rounded-md bg-transparent dark:text-white text-textLightGray'
            required
          />
        </div>
        <button
          type='submit'
          className='self-center border border-textLightGray/40 rounded-3xl bg-transparent dark:text-white text-primary hover:text-white hover:bg-primary dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 px-4 py-2 text-lg font-medium transition-colors duration-300 gap-2'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending love...' : 'Send Message'}
        </button>
      </form>
    </CustomCard>
  );
}

export default ContactForm;
