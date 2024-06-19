"use client";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/custom/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addContactInfo } from "./_actions";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  EMAIL_ADDRESS,
  FB_URL,
  IG_URL,
  PRIMARY_PHONE,
  WORK_PHONE,
  YT_URL,
} from "@/lib/constants";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const wrongPhoneNumberMessage = "Утасны дугаар буруу байна!";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Нэр хамгийн багадаа 2 тэмдэгт байх ёстой" })
    .max(30, { message: "Нэр хамгийн ихдээ 30 тэмдэгт байх ёстой" }),
  email: z.string().email({ message: "Зөв имэйл хаяг оруулна уу" }),
  phone: z
    .string()
    .regex(phoneRegex, { message: wrongPhoneNumberMessage })
    .min(8, { message: wrongPhoneNumberMessage })
    .max(8, { message: wrongPhoneNumberMessage }),
  feedback: z
    .string()
    .max(250, { message: "Санал хамгийн ихдээ 250 тэмдэгт байх ёстой" })
    .optional(),
});

const ContactUs = () => {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: searchParams.get("email") || "",
      phone: "",
      feedback: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await addContactInfo(values);
    if (result.code === 200) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(`Амжилтгүй: ${result.message}`);
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-900 my-8">
      <div className="px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <CardContent className="lg:w-1/2 lg:mx-6">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              Холбоо барьж дэлгэрэнгүй
              <br className="hidden lg:block" /> мэдээлэл аваарай
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <MapPin className="w-6 h-6 mx-2 text-green-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  Ulaanbaatar, Mongolia
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <Phone className="w-6 h-6 mx-2 text-green-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {PRIMARY_PHONE}
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <PhoneCall className="w-6 h-6 mx-2 text-green-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {WORK_PHONE}
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <Mail className="w-6 h-6 mx-2 text-green-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {EMAIL_ADDRESS}
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300">
                Олон нийтийн хаягууд
              </h3>

              <div className="flex pt-4 -px-1.5 gap-3">
                <Link href={FB_URL} target={"_blank"}>
                  <Button variant={"outline"} size={"icon"}>
                    <FacebookIcon className="text-muted-foreground cursor-pointer h-5 w-5" />
                  </Button>
                </Link>
                <Link href={IG_URL} target={"_blank"}>
                  <Button variant={"outline"} size={"icon"}>
                    <InstagramIcon className="text-muted-foreground cursor-pointer h-5 w-5" />
                  </Button>
                </Link>
                <Link href={YT_URL} target={"_blank"}>
                  <Button variant={"outline"} size={"icon"}>
                    <YoutubeIcon className="text-muted-foreground cursor-pointer h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 border">
              <h1 className="text-lg font-medium text-slate-600 my-5">
                Та бидэнд холбогдох мэдээллээ үлдээгээрэй
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Нэр</FormLabel>
                        <FormControl>
                          <Input placeholder="Таны нэр..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Утасны дугаар</FormLabel>
                        <FormControl>
                          <Input placeholder="Таны утас..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имэйл хаяг</FormLabel>
                        <FormControl>
                          <Input placeholder="Таны имэйл хаяг..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Санал хүсэлт</FormLabel>
                        <FormControl>
                          <textarea
                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-green-600 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Таны санал хүсэлт..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Илгээх
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactUs;
