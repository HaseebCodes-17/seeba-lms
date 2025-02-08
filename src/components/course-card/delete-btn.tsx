"use client";

import React, { useTransition } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useCoursesContext } from "@/app/(routes)/(dashboard)/_contexts/courses-provider";

const DeleteBtn = ({ id }: { id: string }) => {
  const [deleting, start] = useTransition();

  const { toast } = useToast();
  const { fetchCourses } = useCoursesContext();

  const handleCourseDelete = () => {
    start(async () => {
      try {
        const response = await axios.delete(`/api/course?id=${id}`);

        if (response.status === 200) {
          toast({
            title: response.statusText,
            description: response.data.message,
          });
          fetchCourses();
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

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will delete the course and all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            aria-label={deleting ? "Deleting" : "Delete"}
            onClick={handleCourseDelete}
            disabled={deleting}
          >
            {deleting ? (
              <>
                Deleting <Loader2 className="animate-spin" />
              </>
            ) : (
              <>
                Delete <Trash2 />
              </>
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBtn;
