import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight, CheckCircle } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data';
import { SectionHeader } from './SectionHeader';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: contactInfo.address,
      color: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Clock,
      label: 'Disponibilité',
      value: contactInfo.availability,
      color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Contact"
          subtitle="N'hésitez pas à me contacter pour toute opportunité ou collaboration"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200/80 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`p-2.5 rounded-xl ${color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors"
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200/80 dark:border-gray-800">
                      <div className={`p-2.5 rounded-xl ${color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Retrouvez-moi
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ id, Icon, link, label }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="L'objet de votre message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all duration-200 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 ${
                    submitted
                      ? 'bg-emerald-500 cursor-default'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};