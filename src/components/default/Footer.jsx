import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { RiTiktokFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const socialLinks = [
    {
      Icon: FaWhatsapp, href: "https://wa.me/355698357378", color: "hover:bg-green-500",
      className: "hover:bg-black hover:text-white"
    },
    { Icon: Instagram, href: "https://www.instagram.com/auto_rental_tirana_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", color: "hover:bg-pink-600" },
    { Icon: RiTiktokFill, href: "https://www.tiktok.com/@autorentaltirana?is_from_webapp=1&sender_device=pc", color: "hover:bg-black" },
  ];

  const quickLinks = [
    { label: t('footer.quickLinks.home'), path: "/" },
    { label: t('footer.quickLinks.aboutUs'), path: "/about" },
    { label: t('footer.quickLinks.carModels'), path: "/models" },
    { label: t('footer.quickLinks.services'), path: "/services" },
    { label: t('footer.quickLinks.contactUs'), path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-200 via-white to-gray-200 text-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/Logo Auto Rental Tirana Black.png"
                alt="Car Rental Logo"
                className="w-25 h-10 group-hover:scale-110 transition-transform"
              />
            </Link>
            <p className="text-black leading-relaxed">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg bg-gray-800 text-white flex items-center justify-center
                             ${color} hover:text-white transition-all duration-300`}>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-black">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group hover:text-black transition-colors inline-flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-black">
              {t('footer.customerSupport.title')}
            </h3>
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform" style={{ fill: 'currentColor' }} />
                {t('footer.customerSupport.phone')}
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-black group-hover:rotate-12 transition-transform"  />
                <span className="hover:text-black transition-colors">
                  {t('footer.customerSupport.email')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Our Location */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-black">
              {t('footer.location.title')}
            </h3>
            <div className="h-64 rounded-lg overflow-hidden border border-gray-300">
              <iframe
                title="AutoRental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5675290166478!2d19.775230499999996!3d41.318270899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031ae7c63f03f%3A0xe91f64dbdc93a0ac!2sAuto%20Rental%20Tirana!5e0!3m2!1sen!2s!4v1743964708822!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex items-center space-x-2 text-black">
              <MapPin className="w-5 h-5 text-red-600" />
              <p>{t('footer.location.address')}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-black">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;