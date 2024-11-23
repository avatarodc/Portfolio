import { Section } from '../ui/Section';
import { GlowingCard } from '../ui/GlowingCard';
import { socialLinks, contactInfo } from '@/data';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="N'hésitez pas à me contacter pour toute opportunité ou collaboration"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      gradient
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Carte d'informations de contact */}
        <GlowingCard className="relative overflow-hidden h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Informations de contact
            </h3>
            <div className="space-y-4 flex-grow">
              {[
                { Icon: Mail, value: contactInfo.email, href: `mailto:${contactInfo.email}`, label: 'Email' },
                { Icon: Phone, value: contactInfo.phone, href: `tel:${contactInfo.phone}`, label: 'Téléphone' },
                { Icon: MapPin, value: contactInfo.address, label: 'Adresse' },
                { Icon: Clock, value: contactInfo.availability, label: 'Disponibilité' }
              ].map(({ Icon, value, href, label }) => (
                <motion.div
                  key={label}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-200">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pt-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Retrouvez-moi sur
              </h4>
              <div className="flex gap-3">
                {socialLinks.map(({ id, Icon, link, label, color }) => (
                  <motion.a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`p-3 rounded-xl border border-gray-200 dark:border-gray-700 
                      hover:border-transparent hover:shadow-lg hover:scale-105 backdrop-blur-sm
                      transition-all duration-300 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </GlowingCard>

        {/* Formulaire de contact */}
        <GlowingCard className="relative overflow-hidden h-full">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 h-full">
            <form className="h-full flex flex-col">
              <div className="space-y-4 flex-grow">
                {[
                  { id: 'name', label: 'Nom complet', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' }
                ].map(({ id, label, type }) => (
                  <div key={id} className="group">
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      {label}
                    </label>
                    <div className="relative">
                      <input
                        type={type}
                        id={id}
                        name={id}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 
                          bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                          focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                          focus:border-transparent outline-none transition-all duration-300
                          group-hover:border-blue-500 dark:group-hover:border-blue-400"
                        placeholder={`Votre ${label.toLowerCase()}`}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                        group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                ))}

                <div className="group flex-grow">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                </label>
                <div className="relative" style={{ height: '200px' }}> {/* Hauteur fixe ajustée */}
                    <textarea
                    id="message"
                    name="message"
                    className="w-full h-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                        bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                        focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                        focus:border-transparent outline-none transition-all duration-300
                        group-hover:border-blue-500 dark:group-hover:border-blue-400
                        resize-none"
                    placeholder="Votre message"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                    group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity pointer-events-none" />
                </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full mt-4 py-3 px-6 flex items-center justify-center gap-2 text-white
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  hover:from-blue-700 hover:to-purple-700
                  rounded-xl transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </motion.button>
            </form>
          </div>
        </GlowingCard>
      </div>
    </Section>
  );
};