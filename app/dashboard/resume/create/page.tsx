"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Upload, LucideBell, LucideSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { TemplatesCarousel } from "@/components/templates-carousel";

export default function ResumeCreate() {
  const [personalInfo, setPersonalInfo] = useState("");
  const [experience, setExperience] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // TODO: Implement file processing
      toast({
        title: "File uploaded",
        description: "Processing your resume...",
      });
    }
  };

  const handleSubmit = () => {
    if (!personalInfo || !experience) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // onSubmit({ personalInfo, experience })
    console.log({ personalInfo, experience });
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 rounded-md">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search..."
            className=" placeholder-neutral-500 pr-10 border-purple-500"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
            🔍 
          </span>
        </div>

        {/* Notification Icon */}
        <div className="ml-4">
          <button className="relative p-2 rounded-full hover:bg-purple-200">
            <LucideBell className="w-6 h-6" />
            {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border border-neutral-900"></span> */}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6">
        <h1 className="text-2xl font-bold text-center">Resume Builder</h1>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="job-link" className="text-base font-semibold">
              Job Description Link
            </Label>
            <Input
              id="job-link"
              placeholder="Enter your Job Description LINK"
              className="border-purple-500"
            />
          </div>
          <div className="flex justify-center">
            <span>Or</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="job-desc" className="text-base font-semibold">
              Job Description Text
            </Label>
            <Textarea
              id="job-desc"
              placeholder="Enter your Job Description.."
              // value={experience}
              // onChange={(e) => setExperience(e.target.value)}
              className="h-32 border-purple-500"
            />
          </div>
          <div className="flex justify-center">
            <span>Or</span>
          </div>
          <div>
            <span className="text-base font-semibold">Your Resume</span>
            <div className="border-2 border-dashed border-purple-300 rounded-lg p-6">
              <Label className="flex flex-col items-center justify-center cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <span className="mt-2 text-sm text-muted-foreground">
                  Upload your existing resume (PDF or DOC)
                </span>
                <Input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  // onChange={handleFileUpload}
                />
              </Label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-center mb-2">
            Select Any Template
          </h2>
          <div>
            <TemplatesCarousel />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="text-lg md:px-20 bg-purple-600 hover:bg-purple-700"
          >
            Generate Resume
          </Button>
        </div>
      </div>
    </>
  );
}
