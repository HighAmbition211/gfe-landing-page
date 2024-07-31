"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.bubble.css";
import * as z from "zod";
import FileUpload from "../file-upload";
import { useToast } from "../ui/use-toast";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string(),
});

export const IMG_MAX_LIMIT = 1;

const formSchema = z.object({
  title: z.string().min(1, { message: "You must input your title here" }),
  subtitle: z.string().min(1, { message: "You must input your subtitle here" }),
  category: z.string().min(1, { message: "Please select a category" }),
  imgUrl: z
    .array(ImgSchema)
    .max(IMG_MAX_LIMIT, { message: "You can only add up to 1 image" })
    .min(1, { message: "Preview image must be added." }),
  content: z
    .string()
    .refine((value) => value.replace(/<[^>]*>?/gm, "").trim(), {
      message: "You must input your content here",
    }),
});

type BlogFormValues = z.infer<typeof formSchema>;

interface NewBlogFormProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  previewImage: string;
}

const NewBlogForm = ({
  id,
  title,
  subtitle,
  category,
  content,
  previewImage,
}: NewBlogFormProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const router = useRouter();
  const [subtitleRows, setSubtitleRows] = useState<number>(
    subtitle.split("\n").length,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const defaultValues = {
    title: title,
    subtitle: subtitle,
    category: category,
    content: content,
    imgUrl: [
      {
        fileName: "",
        name: "",
        fileSize: 0,
        size: 0,
        fileKey: "",
        key: "",
        fileUrl: previewImage,
        url: previewImage,
      },
    ],
  };

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
  ];

  const onSubmit = async (data: BlogFormValues) => {
    try {
      setIsLoading(true);

      const response = await axios.put(`/api/blogs/update/${id}`, {
        title: data.title,
        subtitle: data.subtitle,
        category: data.category,
        content: data.content,
        previewImage: data.imgUrl[0].fileUrl,
      });

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your post has been updated successfully!",
        });

        router.push("/dashboard/blogs-and-news");
      }

      setIsLoading(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });

      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    onChange={field.onChange}
                    value={field.value}
                    onRemove={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1 items-center">
                  <FormLabel className="text-2xl">Title: </FormLabel>
                  <FormControl>
                    <Input
                      className="text-2xl font-semibold border-none shadow-none focus:border-none focus-visible:ring-0"
                      {...field}
                    ></Input>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1 items-center">
                  <FormLabel className="text-lg">Subtitle: </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={subtitleRows}
                      className="text-lg border-none shadow-none focus:border-none focus-visible:ring-0 min-h-0"
                      {...field}
                      onChange={(event) => {
                        setSubtitleRows(event.target.value.split("\n").length);
                        field.onChange(event);
                      }}
                    ></Textarea>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-4 items-center">
                  <FormLabel className="">Category: </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      disabled
                      value={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="BLOG">Blog</SelectItem>
                          <SelectItem value="NEWS">News</SelectItem>
                          <SelectItem value="EVENT">Event</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ReactQuill
                    theme="bubble"
                    value={field.value}
                    onChange={field.onChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Type your content here..."
                    className="placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex gap-3 justify-end">
            <Button className="w-auto" variant="outline" asChild>
              <Link href="/dashboard/blogs-and-news/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Link>
            </Button>
            <Button className="w-auto" type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}{" "}
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewBlogForm;
