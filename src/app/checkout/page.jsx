"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useCart } from "@/lib/cart";
import { buildOrderUrl } from "@/lib/cart";
import { WHATSAPP } from "@/lib/site";

const schema = Yup.object({
  name: Yup.string().trim().min(2, "Enter your name").required("Name is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Phone is required"),
  address: Yup.string().trim(),
  note: Yup.string().trim(),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clear } = useCart();

  // Redirect to cart if empty
  useEffect(() => {
    if (items.length === 0) router.replace("/cart");
  }, [items, router]);

  const subtotal = items
    .filter((i) => i.wholesale)
    .reduce((s, i) => s + i.wholesale * i.qty, 0);

  const formik = useFormik({
    initialValues: { name: "", phone: "", address: "", note: "" },
    validationSchema: schema,
    onSubmit: (v, { resetForm }) => {
      const url = buildOrderUrl({
        items,
        name: v.name.trim(),
        phone: v.phone.trim(),
        note: [v.address.trim(), v.note.trim()].filter(Boolean).join(" | "),
        waNumber: WHATSAPP,
      });
      clear();
      resetForm();
      window.location.href = url;
    },
  });

  const err = (f) => formik.touched[f] && formik.errors[f];

  if (items.length === 0) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-[80dvh] bg-beige-50 pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">

          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link href="/cart" className="grid size-10 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:bg-green-50">
              <ArrowLeft className="size-5" />
            </Link>
            <h1 className="text-lg font-bold">Checkout</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="rounded-2xl bg-white p-5 shadow-soft md:p-8"
            >
              <h2 className="mb-5 text-base font-bold text-green-900">Your Details</h2>

              <form onSubmit={formik.handleSubmit} noValidate className="grid gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink/70">Full Name *</label>
                  <Input
                    name="name"
                    placeholder="e.g. Ravi Kumar"
                    aria-invalid={!!err("name")}
                    {...formik.getFieldProps("name")}
                  />
                  {err("name") && <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink/70">Mobile Number *</label>
                  <Input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    aria-invalid={!!err("phone")}
                    {...formik.getFieldProps("phone")}
                  />
                  {err("phone") && <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink/70">Delivery Address (optional)</label>
                  <Textarea
                    name="address"
                    rows={2}
                    placeholder="Village, District, State…"
                    {...formik.getFieldProps("address")}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold text-ink/70">Additional Notes (optional)</label>
                  <Textarea
                    name="note"
                    rows={2}
                    placeholder="Quantity preferences, pickup time, etc."
                    {...formik.getFieldProps("note")}
                  />
                </div>

                {/* How it works */}
                <div className="rounded-xl bg-green-50 p-4 text-sm text-ink/70">
                  <p className="mb-2 font-bold text-green-800">How it works</p>
                  <ol className="grid list-decimal gap-1 pl-4">
                    <li>Click "Send Order on WhatsApp" below</li>
                    <li>Your order details open in WhatsApp</li>
                    <li>Our team confirms availability &amp; price</li>
                    <li>We arrange delivery or pickup for you</li>
                  </ol>
                </div>

                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  disabled={formik.isSubmitting}
                  className="mt-2 w-full gap-2 text-base"
                >
                  <WhatsAppIcon className="size-5" />
                  Send Order on WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Order summary sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.08 }}
              className="h-fit rounded-2xl bg-white p-5 shadow-soft md:p-6"
            >
              <h2 className="mb-4 text-base font-bold text-green-900">Order Summary</h2>

              <ul className="divide-y divide-green-100 text-sm">
                {items.map((i) => (
                  <li key={i.id} className="flex items-start justify-between gap-2 py-3">
                    <div className="min-w-0">
                      <p className="font-bold">{i.name}</p>
                      <p className="text-ink/60">{i.type} × {i.qty}</p>
                    </div>
                    <span className="shrink-0 font-bold">
                      {i.wholesale ? `₹${i.wholesale * i.qty}/-` : "—"}
                    </span>
                  </li>
                ))}
              </ul>

              {subtotal > 0 && (
                <div className="mt-3 flex justify-between border-t border-green-200 pt-3 text-base font-bold text-green-800">
                  <span>Approx Total</span>
                  <span>₹{subtotal}/-</span>
                </div>
              )}

              <p className="mt-3 text-sm text-ink/60">
                Prices confirmed by nursery on WhatsApp. Delivery charges may apply.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-800">
                <CheckCircle className="mt-0.5 size-4 shrink-0" />
                <span>Govt. Horticulture Licensed &amp; Approved Nursery</span>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
