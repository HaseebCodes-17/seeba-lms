import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const SubmissionSuccess = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Submission Successful!</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">
          Thank you for contacting us. We&apos;ll get back to you shortly.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-green-500 hover:bg-green-600 m-auto"
          onClick={() => window.location.reload()} // Reload to reset the form
        >
          Submit Another Response
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubmissionSuccess;
