"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { InstagramIcon } from "@/components/icons/instagram";
import { YouTubeIcon } from "@/components/icons/youtube";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { HoverIcon } from "@/components/hover-icon";
import { HOURS, INSTAGRAM, LICENCE, MAP_EMBED, PHONE, YOUTUBE, waLink } from "@/lib/site";

const schema = Yup.object({
  name: Yup.string().trim().min(2, "Please enter your name").required("Name is required"),
  message: Yup.string().trim().min(10, "Message should be at least 10 characters").required("Message is required"),
});

const INFO = [
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE}`, variant: "wiggle" },
  { icon: WhatsAppIcon, label: "WhatsApp", value: PHONE, href: waLink(), variant: "wiggle" },
  { icon: MapPin, label: "Location", value: "Laxmapoor, Ramayampet, Medak, Telangana 502115", variant: "bounce" },
  { icon: Clock, label: "Hours", value: HOURS, variant: "bounce" },
  { icon: InstagramIcon, label: "Instagram", value: "@harshasainursery", href: INSTAGRAM, variant: "pop" },
  { icon: YouTubeIcon, label: "YouTube", value: "@harshasainursery", href: YOUTUBE, variant: "pop" },
];

export function Contact() {
  const formik = useFormik({
    initialValues: { name: "", message: "" },
    validationSchema: schema,
    onSubmit: (v, { resetForm }) => {
      const url = waLink(`Hi Harsha Sai Nursery! I'm ${v.name.trim()}.\n${v.message.trim()}`);
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp with your message…");
      resetForm();
    },
  });

  const err = (f) => formik.touched[f] && formik.errors[f];

  return (
    <section id="contact" className="bg-beige-50 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge={<><MapPin className="size-4" /> Get In Touch</>}
          title="Contact Us"
          desc="We'd love to hear from you. Reach out for inquiries, bulk orders, or a visit."
        />

        <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
          <Reveal from="left" className="min-h-72 overflow-hidden rounded-3xl shadow-soft lg:min-h-full">
            <iframe
              title="Harsha Sai Nursery location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 md:h-96 lg:h-full"
              src={MAP_EMBED}
            />
          </Reveal>

          <Reveal from="right" className="rounded-3xl bg-white p-5 shadow-soft md:p-8">
            <h3 className="text-base font-bold text-green-900">Harsha Sai Nursery</h3>
            <p className="mt-1 text-base text-ink/70">Laxmapoor (Vil), Ramayampet (Mdl)<br />Medak (Dist), Telangana 502115</p>
            <p className="mt-1 text-sm font-bold text-green-700">{LICENCE}</p>

            <ul className="mt-5 grid gap-3">
              {INFO.map(({ icon, label, value, href, variant }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-green-100 text-green-700">
                    <HoverIcon icon={icon} variant={variant} className="size-5" />
                  </span>
                  <div className="text-sm">
                    <span className="block text-ink/60">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-bold hover:text-green-700">{value}</a>
                    ) : (
                      <span className="font-bold">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <form onSubmit={formik.handleSubmit} noValidate className="mt-6 grid gap-4">
              <div>
                <Input name="name" placeholder="Your Name" aria-invalid={!!err("name")} {...formik.getFieldProps("name")} />
                {err("name") && <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>}
              </div>
              <div>
                <Textarea name="message" rows={3} placeholder="Your Message (e.g., I'm interested in fruit plants...)" aria-invalid={!!err("message")} {...formik.getFieldProps("message")} />
                {err("message") && <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>}
              </div>
              <Button type="submit" variant="whatsapp" size="lg" disabled={formik.isSubmitting} className="w-full">
                <HoverIcon icon={Send} variant="nudge" className="size-4" /> Send via WhatsApp
              </Button>
            </form>

            <div className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-3 rounded-2xl bg-green-50 p-6 shadow-soft">
              <p className="text-base font-bold text-green-900">Harsha Sai Nursery</p>
              <p className="text-sm text-ink/60">Laxmapoor, Ramayampet, Medak, Telangana</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center md:mt-14">
          <p className="text-lg font-bold text-green-800">“Growing Nature with Trust”</p>
        </Reveal>
      </div>
    </section>
  );
                  }
