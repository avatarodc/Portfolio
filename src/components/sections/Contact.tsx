import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight } from 'lucide-react';
import { socialLinks, contactInfo, sections } from '@/data/profile';
import { SectionHeader } from './SectionHeader';

const text = sections.contact;
const { cta } = text;
const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(cta.mailSubject)}&body=${encodeURIComponent(cta.mailBody)}`;

export const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: text.labels.email,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Phone,
      label: text.labels.phone,
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: MapPin,
      label: text.labels.location,
      value: contactInfo.address,
      color: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Clock,
      label: text.labels.availability,
      value: contactInfo.availability,
      color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title={text.title}
          subtitle={text.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                {text.labels.social}
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

          {/* Appel à l'action e-mail - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="h-full flex flex-col justify-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 sm:p-10">
              <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 mb-5">
                <Mail size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                {cta.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                {cta.text}
              </p>

              <a
                href={mailtoHref}
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send size={18} />
                {cta.button}
              </a>

              <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 break-words">
                {cta.hint}{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};