"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      title: "Personalized Learning",
      description:
        "AI-driven course recommendations tailored to individual needs.",
    },
    {
      title: "Interactive Content",
      description:
        "Engage with dynamic quizzes, videos, and real-time feedback.",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics.",
    },
    {
      title: "Virtual Classroom",
      description:
        "Seamless live sessions and collaboration tools for learners and instructors.",
    },
    {
      title: "Certification",
      description:
        "Earn verifiable certificates to showcase your achievements.",
    },
    {
      title: "24/7 Support",
      description: "AI-powered chat support to assist you anytime.",
    },
  ];

  return (
    <section>
      <div className="px-2 container py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          We Provide the Best Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description }, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
