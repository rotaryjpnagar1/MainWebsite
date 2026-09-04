"use client";

import { useState } from "react";
import { FaCheckCircle, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { rotaryConfig } from "@/config/rotary-year";

export default function JoinForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        profession: "",
        locality: "",
        interest: "Community Health & Education",
        message: "",
        consent: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const scriptUrl = rotaryConfig.forms.membershipGoogleScriptUrl;

        if (scriptUrl) {
            try {
                const payload = {
                    ...formData,
                    phone: formData.phone.trim().startsWith("+") ? `'${formData.phone.trim()}` : formData.phone.trim(),
                };

                await fetch(scriptUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify(payload),
                });
                setSubmitted(true);
            } catch (err) {
                console.error("Submission error:", err);
                setSubmitted(true);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Local / unconfigured fallback
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
            }, 600);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-green-200 shadow-lg text-center max-w-xl mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    Thank You, {formData.fullName}!
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-sm sm:text-base">
                    Your interest in joining <strong>{rotaryConfig.clubName}</strong> has been received. Someone from our club will reach out to connect with you and guide you further.
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-left space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Need immediate assistance?</div>
                    <a
                        href={`${rotaryConfig.contact.whatsappUrl}?text=Hello%2C%20I%20have%20submitted%20my%20membership%20interest%20form%20for%20Rotary%20Bangalore%20JP%20Nagar.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-rotary-blue font-semibold text-sm hover:underline"
                    >
                        <FaWhatsapp className="text-green-600 text-lg" />
                        <span>Notify us on WhatsApp ({rotaryConfig.contact.phoneDisplay})</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                        <FaEnvelope className="text-rotary-gold" />
                        <span>{rotaryConfig.contact.email}</span>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({
                            fullName: "",
                            phone: "",
                            email: "",
                            profession: "",
                            locality: "",
                            interest: "Community Health & Education",
                            message: "",
                            consent: false,
                        });
                    }}
                    className="text-xs font-semibold text-gray-500 hover:text-rotary-blue underline"
                >
                    Submit another response
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-lg space-y-6"
        >
            <div className="border-b border-gray-100 pb-4 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Membership Expression of Interest
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                    Fill out this form, and someone from the club will reach out and guide you further.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Mobile Number (WhatsApp) *
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address *
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="profession" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Profession / Vocation *
                    </label>
                    <input
                        id="profession"
                        type="text"
                        required
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        placeholder="e.g. Software Engineer / Entrepreneur"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="locality" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Locality in Bengaluru *
                    </label>
                    <input
                        id="locality"
                        type="text"
                        required
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        placeholder="e.g. JP Nagar / Jayanagar / Kanakapura Rd"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Primary Area of Interest
                    </label>
                    <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors bg-white"
                    >
                        <option value="Community Health & Education">Community Health & Education</option>
                        <option value="Youth Leadership & Rotaract">Youth Leadership & Rotaract</option>
                        <option value="Environmental Initiatives">Environmental Initiatives</option>
                        <option value="Professional Fellowship & Networking">Professional Fellowship & Networking</option>
                        <option value="CSR Project Partnerships">CSR Project Partnerships</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Why are you interested in joining Rotary? (Optional)
                </label>
                <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your background or what you hope to achieve through community service..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-sm focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors"
                />
            </div>

            <div className="flex items-start gap-3 pt-2">
                <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-rotary-blue focus:ring-rotary-blue"
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed font-light">
                    I agree to be contacted by Rotary Bangalore JP Nagar regarding membership enquiries and club meeting invitations. Your data will never be shared with third parties.
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all duration-200 uppercase tracking-wider ${
                    isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-rotary-blue hover:bg-rotary-dark-blue hover:shadow-lg"
                }`}
            >
                {isSubmitting ? "Submitting Enquiry..." : "Submit Membership Enquiry"}
            </button>
        </form>
    );
}
