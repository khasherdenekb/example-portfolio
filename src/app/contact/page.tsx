import { FacebookIcon2 } from "@/components/custom/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
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
                  Ulaanbaatar mongolia
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <Phone className="w-6 h-6 mx-2 text-green-400" />

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  (976) 99998888
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <Mail className="w-6 h-6 mx-2 text-green-400" />

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  acb@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300 ">
                Олон нийтийн хаягууд
              </h3>

              <div className="flex pt-4 -px-1.5 gap-3 ">
                <Button variant={"outline"} size={"icon"}>
                  <LinkedinIcon className=" text-muted-foreground cursor-pointer h-5 w-5" />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                  <FacebookIcon2 />
                </Button>
              </div>
            </div>
          </CardContent>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 border">
              <h1 className="text-lg font-medium text-gray-700">
                Та юу асуумаар байгаагаа энд бичээрэй
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Бүтэн нэр
                  </label>
                  <input
                    type="text"
                    placeholder="Example Name"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Имэйл хаяг
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Санал
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <Button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring  focus:ring-opacity-50">
                  Холбогдох
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactUs;
