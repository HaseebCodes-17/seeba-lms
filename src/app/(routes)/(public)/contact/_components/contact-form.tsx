"use client";

import React, { useState, useTransition, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInputField from "./phone-input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import SubmissionSuccess from "./submission-success";

const ContactForm = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({});
  const [submitting, start] = useTransition();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const { toast } = useToast();

  const handleUserInput = (fieldName: string, fieldValue: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    start(async () => {
      try {
        const response = await axios.post("/api/contact", formData);

        if (response.status === 201) {
          toast({
            title: response.statusText,
            description: response.data.message,
          });
          setSubmissionSuccess(true);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            variant: "destructive",
            title: error.response?.statusText,
            description: error.response?.data.message,
          });
        }
      }
    });
  };

  return submissionSuccess ? (
    <SubmissionSuccess />
  ) : (
    <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to contact us
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder={user?.primaryEmailAddress?.emailAddress}
            onChange={(e) => handleUserInput("email", e.target.value)}
            required
          />
        </div>
        <PhoneInputField
          setPhone={(value: string) => handleUserInput("phone", value)}
        />
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="h-24"
            id="message"
            name="message"
            required
            placeholder="Enter your message"
            onChange={(e) => handleUserInput("message", e.target.value)}
          />
        </div>
        <Button
          className="w-full"
          aria-label={submitting ? "Submitting" : "Submit"}
          disabled={submitting}
        >
          {submitting ? <Loader className="animate-spin" /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
