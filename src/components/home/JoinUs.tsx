import Image from "next/image";
import Script from "next/script";

export default function JoinUs() {
    return (
        <section className="py-16 bg-gray-900" id="join-us">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Image
                            src="/images/icons/Rotary Mark of Excellence.webp"
                            alt="Rotary Mark of Excellence"
                            width={200}
                            height={200}
                            className="rounded-xl mb-6 object-contain"
                        />
                        <h2 className="text-3xl font-bold text-white mb-3">About Membership</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Become a member of Rotary Bangalore JP Nagar to make a positive
                            impact in the community. Whether you have a few hours a week or
                            want to be deeply involved, your help is valuable!
                        </p>
                    </div>

                    {/* Right: EmbedSocial Form */}
                    <div>
                        <div
                            className="embedsocial-forms-iframe"
                            data-ref="652524c32815a5d0625af6cd3b1b5fd8bc97c693"
                            data-widget="true"
                            data-height="auto"
                        />
                        <Script
                            id="embedsocial-forms"
                            strategy="lazyOnload"
                            dangerouslySetInnerHTML={{
                                __html: `(function (d, s, id) { var js; if (d.getElementById(id)) { return; } js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ef.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialFormsScript"));`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
