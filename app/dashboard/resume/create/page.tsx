"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ResumeCreate() {
    const [personalInfo, setPersonalInfo] = useState("")
  const [experience, setExperience] = useState("")
  const { toast } = useToast()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // TODO: Implement file processing
      toast({
        title: "File uploaded",
        description: "Processing your resume...",
      })
    }
  }

  const handleSubmit = () => {
    if (!personalInfo || !experience) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // onSubmit({ personalInfo, experience })
    console.log({ personalInfo, experience })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter Your Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="personal-info">Personal Information</Label>
            <Textarea
              id="personal-info"
              placeholder="Enter your personal information..."
              value={personalInfo}
              onChange={(e) => setPersonalInfo(e.target.value)}
              className="h-32"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Professional Experience</Label>
            <Textarea
              id="experience"
              placeholder="Enter your work experience..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="h-32"
            />
          </div>
        </div>

        <div className="border-2 border-dashed rounded-lg p-6">
          <label className="flex flex-col items-center justify-center cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <span className="mt-2 text-sm text-muted-foreground">
              Upload your existing resume (PDF or DOC)
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
          </label>
        </div>

<div className="flex justify-between">
    <Button variant="outline">Clear</Button>
    <Button className="" onClick={handleSubmit}>
          Continue to Templates
        </Button>
</div>
        
      </CardContent>
    </Card>
  )
}