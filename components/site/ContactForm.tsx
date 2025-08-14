"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ContactFormProps {
  pageKind: "support" | "sales";
}

export function ContactForm({ pageKind }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressUnit, setAddressUnit] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressPostalCode, setAddressPostalCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [canPickContacts, setCanPickContacts] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha | null>(null);
  const [hpWebsite, setHpWebsite] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(() => Date.now());
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validateEmail(value: string): string | "" {
    if (!value.trim()) return "Please enter an email address";
    // simple but effective email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  }

  function validateAll() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name";
    const emailErr = validateEmail(email);
    if (emailErr) errs.email = emailErr;
    if (!message.trim()) errs.message = "Please enter a message";
    if (pageKind === "sales") {
      if (!addressStreet.trim()) errs.addressStreet = "Please enter a street address";
      if (!addressCity.trim()) errs.addressCity = "Please enter a city";
      if (!addressState.trim()) errs.addressState = "Please enter a state";
      if (!addressPostalCode.trim()) errs.addressPostalCode = "Please enter a ZIP code";
    }
    if (!captchaToken) errs.captcha = "Please complete the captcha to continue";
    return errs;
  }

  function validateAndSetField(name: string, value: string) {
    let msg = "";
    if (name === "name") msg = value.trim() ? "" : "Please enter your name";
    if (name === "email") msg = validateEmail(value);
    if (name === "message") msg = value.trim() ? "" : "Please enter a message";
    if (pageKind === "sales") {
      if (name === "addressStreet") msg = value.trim() ? "" : "Please enter a street address";
      if (name === "addressCity") msg = value.trim() ? "" : "Please enter a city";
      if (name === "addressState") msg = value.trim() ? "" : "Please enter a state";
      if (name === "addressPostalCode") msg = value.trim() ? "" : "Please enter a ZIP code";
    }
    setFieldErrors((prev) => ({ ...prev, [name]: msg }));
  }

  useEffect(() => {
    try {
      const hasPicker = typeof (navigator as any)?.contacts?.select === "function";
      setCanPickContacts(Boolean(hasPicker));
    } catch {
      setCanPickContacts(false);
    }
  }, []);

  async function handleContactAutofill() {
    try {
      const picker = (navigator as any)?.contacts?.select;
      if (typeof picker !== "function") return;
      const result = (await picker(["name", "email", "address"], { multiple: false })) as Array<{
        name?: string[] | string;
        email?: string[];
        address?: Array<{
          addressLine?: string[];
          city?: string;
          region?: string;
          postalCode?: string;
          country?: string;
        }>;
      }>;
      const contact = result?.[0];
      if (!contact) return;

      const fullName = Array.isArray(contact.name)
        ? contact.name.filter(Boolean).join(" ")
        : contact.name || "";
      if (fullName) setName(fullName);

      const primaryEmail = Array.isArray(contact.email)
        ? contact.email.find(Boolean)
        : undefined;
      if (primaryEmail) setEmail(primaryEmail);

      if (pageKind === "sales") {
        const addr = contact.address?.[0];
        if (addr) {
          const line1 = Array.isArray(addr.addressLine)
            ? addr.addressLine.filter(Boolean).join(" ")
            : "";
          if (line1) setAddressStreet(line1);
          if (addr.city) setAddressCity(addr.city);
          if (addr.region) setAddressState(addr.region.toUpperCase());
          if (addr.postalCode) setAddressPostalCode(addr.postalCode);
        }
      }
    } catch (e) {
      // Silently ignore picker errors; user can still fill manually
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      setSubmitted(true);
      const errs = validateAll();
      setFieldErrors(errs);
      if (Object.keys(errs).length > 0) {
        setStatus("idle");
        return;
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          pageKind,
          accountNumber: accountNumber || undefined,
          hcaptchaToken: captchaToken,
          hpWebsite,
          formStartedAt,
          ...(pageKind === "sales"
            ? {
                addressStreet,
                addressUnit,
                addressCity,
                addressState,
                addressPostalCode,
              }
            : {}),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setAddressStreet("");
      setAddressUnit("");
      setAddressCity("");
      setAddressState("");
      setAddressPostalCode("");
      setAccountNumber("");
      setCaptchaToken(null);
      try {
        captchaRef.current?.resetCaptcha();
      } catch {}
      setSubmitted(false);
      setFieldErrors({});
      setTouched({});
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
      {/* Honeypot field (should remain empty) */}
      <div className="sr-only" aria-hidden>
        <Label htmlFor="website">Website</Label>
        <input
          id="website"
          name="website"
          value={hpWebsite}
          onChange={(e) => setHpWebsite(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          type="text"
        />
      </div>
      {canPickContacts && (
        <div className="flex justify-end">
          <Button type="button" variant="outline" size="sm" onClick={handleContactAutofill} aria-label="Autofill from Contacts">
            Autofill from Contacts
          </Button>
        </div>
      )}
      {pageKind === "sales" && (
        <div className="grid gap-3">
          {/* Help browsers trigger address autofill by specifying a country */}
          <input
            type="text"
            autoComplete="country-name"
            defaultValue="United States"
            aria-hidden
            tabIndex={-1}
            className="sr-only"
          />
          <div className="grid gap-2">
            <Label htmlFor="addressStreet">Street address</Label>
            <Input
              id="addressStreet"
              name="addressStreet"
              value={addressStreet}
            onChange={(e) => {
              setAddressStreet(e.target.value);
              if (touched.addressStreet || submitted) validateAndSetField("addressStreet", e.target.value);
            }}
            onBlur={(e) => {
              setTouched((t) => ({ ...t, addressStreet: true }));
              validateAndSetField("addressStreet", e.target.value);
            }}
              placeholder="123 Main St"
              autoComplete="street-address"
              required
            />
          {(submitted || touched.addressStreet) && fieldErrors.addressStreet && (
            <p className="text-sm text-red-600">{fieldErrors.addressStreet}</p>
          )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="addressUnit">Apartment, suite, etc (optional)</Label>
            <Input
              id="addressUnit"
              name="addressUnit"
              value={addressUnit}
              onChange={(e) => setAddressUnit(e.target.value)}
              placeholder="Apt 4B"
              autoComplete="address-line2"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
            <div className="sm:col-span-3 grid gap-2">
              <Label htmlFor="addressCity">City</Label>
              <Input
                id="addressCity"
                name="addressCity"
                value={addressCity}
                onChange={(e) => {
                  setAddressCity(e.target.value);
                  if (touched.addressCity || submitted) validateAndSetField("addressCity", e.target.value);
                }}
                onBlur={(e) => {
                  setTouched((t) => ({ ...t, addressCity: true }));
                  validateAndSetField("addressCity", e.target.value);
                }}
                autoComplete="address-level2"
                required
              />
              {(submitted || touched.addressCity) && fieldErrors.addressCity && (
                <p className="text-sm text-red-600">{fieldErrors.addressCity}</p>
              )}
            </div>
            <div className="sm:col-span-1 grid gap-2">
              <Label htmlFor="addressState">State</Label>
              <Input
                id="addressState"
                name="addressState"
                value={addressState}
                onChange={(e) => {
                  setAddressState(e.target.value);
                  if (touched.addressState || submitted) validateAndSetField("addressState", e.target.value);
                }}
                onBlur={(e) => setAddressState(e.target.value.toUpperCase())}
                placeholder="CA"
                maxLength={2}
                autoComplete="region"
                required
              />
              {(submitted || touched.addressState) && fieldErrors.addressState && (
                <p className="text-sm text-red-600">{fieldErrors.addressState}</p>
              )}
            </div>
            <div className="sm:col-span-2 grid gap-2">
              <Label htmlFor="addressPostalCode">ZIP</Label>
              <Input
                id="addressPostalCode"
                name="addressPostalCode"
                value={addressPostalCode}
                onChange={(e) => {
                  setAddressPostalCode(e.target.value);
                  if (touched.addressPostalCode || submitted) validateAndSetField("addressPostalCode", e.target.value);
                }}
                inputMode="numeric"
                pattern="[0-9]{5}(-[0-9]{4})?"
                placeholder="12345"
                autoComplete="postal-code"
                required
              />
              {(submitted || touched.addressPostalCode) && fieldErrors.addressPostalCode && (
                <p className="text-sm text-red-600">{fieldErrors.addressPostalCode}</p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (touched.name || submitted) validateAndSetField("name", e.target.value);
          }}
          onBlur={(e) => {
            setTouched((t) => ({ ...t, name: true }));
            validateAndSetField("name", e.target.value);
          }}
          autoComplete="name"
          required
        />
        {(submitted || touched.name) && fieldErrors.name && (
          <p className="text-sm text-red-600">{fieldErrors.name}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touched.email || submitted) validateAndSetField("email", e.target.value);
          }}
          onBlur={(e) => {
            setTouched((t) => ({ ...t, email: true }));
            validateAndSetField("email", e.target.value);
          }}
          autoComplete="email"
          required
        />
        {(submitted || touched.email) && fieldErrors.email && (
          <p className="text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="accountNumber">Account Number</Label>
        <div className="flex items-center">
          <InputOTP
            id="accountNumber"
            aria-label="Account Number"
            maxLength={5}
            value={accountNumber}
            onChange={(value) => {
              const digitsOnly = value.replace(/\D/g, "").slice(0, 5)
              setAccountNumber(digitsOnly)
            }}
            containerClassName="gap-1"
            className=""
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4].map((i) => (
                <InputOTPSlot key={i} index={i} className="h-9 w-8 sm:w-9" />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <p className="text-xs text-neutral-500">
          To help us look up your account, please include your account number (it is printed on your bill). 
          Your account number may be 4 or 5 digits long. 
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (touched.message || submitted) validateAndSetField("message", e.target.value);
          }}
          onBlur={(e) => {
            setTouched((t) => ({ ...t, message: true }));
            validateAndSetField("message", e.target.value);
          }}
          autoComplete="off"
          required
        />
        {(submitted || touched.message) && fieldErrors.message && (
          <p className="text-sm text-red-600">{fieldErrors.message}</p>
        )}
      </div>
      <Button type="submit" disabled={status === "sending" || !captchaToken}>
        {status === "sending" ? "Sending..." : "Send"}
      </Button>
      <div className="mt-2">
        <HCaptcha
          ref={captchaRef as any}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY as string}
          onVerify={(token) => {
            setCaptchaToken(token);
            setFieldErrors((prev) => ({ ...prev, captcha: "" }));
          }}
        />
        {(submitted || !!fieldErrors.captcha) && fieldErrors.captcha && (
          <p className="text-sm text-red-600 mt-1">{fieldErrors.captcha}</p>
        )}
      </div>
      {status === "sent" && (
        <p className="text-sm text-green-600">Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{error ?? "Failed to send."}</p>
      )}
    </form>
  );
}


