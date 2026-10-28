"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { useCart } from "@/lib/cart";
import { buildOrderUrl } from "@/lib/cart";
import { WHATSAPP } from "@/lib/site";

const schema = Yup.object({
  name: Yup.string().trim().min(2, "Enter your name").required("Name is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Phone is required"),
  note: Yup.string(),
});

export function CheckoutModal({ open, onClose }) {
  const { items, clear } = useCart();

  const formik = useFormik({
    initialValues: { name: "", phone: "", note: "" },
    validationSchema: schema,
    onSubmit: (v, { resetForm }) => {
      const url = buildOrderUrl({
        items,
        name: v.name.trim(),
        phone: v.phone.trim(),
        note: v.note.trim(),
        waNumber: WHATSAPP,
      });
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Order sent to WhatsApp!");
      clear();
      resetForm();
      onClose();
    },
  });

  const err = (f) => formik.touched[f] && formik.errors[f];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Scrim */}
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="fixed top-1/2 left-1/2 z-[110] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-lift md:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-green-50 text-ink/60 hover:bg-green-100"
            >
              <X className="size-5" />
            </button>

            <h2 className="text-base font-bold text-green-900">Confirm Your Order</h2>

            {/* Order summary */}
            <ul className="mt-4 divide-y divide-green-100 rounded-2xl bg-green-50 px-4 text-sm">
              {items.map((i) => (
                <li key={i.id} className="flex justify-between gap-3 py-2.5">
                  <span className="font-bold">{i.name}</span>
                  <span className="text-ink/60">
                    x{i.qty}
                    {i.wholesale ? ` — ₹${i.wholesale * i.qty}/-` : ""}
                  </span>
                </li>
              ))}
              {items.some((i) => i.wholesale) && (
                <li className="flex justify-between gap-3 py-2.5 font-bold text-green-700">
                  <span>Approx Total</span>
                  <span>
                    ₹{items.filter((i) => i.wholesale).reduce((s, i) => s + i.wholesale * i.qty, 0)}/-
                  </span>
                </li>
              )}
            </ul>

            <p className="mt-4 text-sm text-ink/60">
              Fill in your details and we'll open WhatsApp with your complete order.
            </p>

            <form onSubmit={formik.handleSubmit} noValidate className="mt-4 grid gap-3">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  aria-invalid={!!err("name")}
                  {...formik.getFieldProps("name")}
                />
                {err("name") && <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>}
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Mobile Number"
                  aria-invalid={!!err("phone")}
                  {...formik.getFieldProps("phone")}
                />
                {err("phone") && <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>}
              </div>
              <div>
                <Textarea
                  name="note"
                  rows={2}
                  placeholder="Any note (optional)"
                  {...formik.getFieldProps("note")}
                />
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="mt-1 w-full gap-2">
                <WhatsAppIcon className="size-5" />
                Send Order on WhatsApp
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
