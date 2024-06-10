"use client";
import { blogDetails } from "@/data/dummyData";
import Link from "next/link";
import { getBlogs } from "./_actions";

type BlogFeatureDetailProps = {
  id: number | string;
  title: string;
  description: string;
  image: string;
};

// TODO: hamgiin ehend haragdah ni pin blog
// TODO: side blog ni feature blog
const Information = () => {
  const { data, isError, isLoading } = getBlogs();

  console.log(data, "DATA");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 px-4 md:px-6 py-12 md:py-16">
      <article className="prose prose-gray max-w-none dark:prose-invert">
        <figure className="mb-6 -mx-4 md:-mx-0">
          <img
            src="/travel-banner3.jpg"
            alt="Blog cover image"
            width={1200}
            height={500}
            className="aspect-[3/1] w-full rounded-lg object-cover"
          />
        </figure>
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Surprising Benefits of Unplugging: A Digital Detox Journey
          </h1>
          <div className="flex items-center gap-4 pt-5">
            <div className="flex items-center gap-2">
              <img
                src="/travel-banner3.jpg"
                alt="Author avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-medium">Jane Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  May 15, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>
            In today's fast-paced, technology-driven world, it's easy to feel
            constantly connected and overwhelmed. However, the surprising
            benefits of unplugging and embracing a digital detox can have a
            profound impact on our well-being. In this blog post, we'll explore
            the transformative power of disconnecting from our devices and
            rediscovering the joys of being present.
          </p>
          <p>
            Imagine a world where you're not constantly checking your phone,
            scrolling through social media, or responding to endless
            notifications. A world where you can truly immerse yourself in the
            moment, without the distractions of the digital realm. This is the
            essence of a digital detox – a deliberate and intentional break from
            the constant barrage of digital stimuli.
          </p>
          <p>
            When we unplug, we create space for deeper connections, enhanced
            creativity, and a renewed sense of mindfulness. Without the constant
            need to document every experience or share it online, we can fully
            engage with our surroundings, our loved ones, and ourselves. This
            shift in perspective can lead to a greater appreciation for the
            present moment and a renewed sense of well-being.
          </p>
          <p>
            Moreover, a digital detox can have tangible benefits for our mental
            and physical health. Studies have shown that reducing screen time
            can lead to improved sleep quality, reduced stress and anxiety, and
            even increased productivity. By stepping away from the digital
            world, we give our brains the opportunity to rest, recharge, and
            refocus on the things that truly matter.
          </p>
          <p>
            Of course, the idea of unplugging can be daunting, especially in a
            world that seems to demand our constant attention. But the rewards
            of a digital detox are well worth the effort. By setting boundaries
            and carving out time for ourselves, we can reclaim our lives and
            rediscover the joys of being truly present.
          </p>
          <p>
            So, the next time you feel the urge to reach for your phone or
            laptop, consider taking a step back and embracing the power of
            unplugging. Whether it's a weekend getaway, a technology-free
            evening, or a simple mindfulness practice, the benefits of a digital
            detox can be truly transformative. Embrace the silence, savor the
            moments, and let the digital world fade away – if only for a little
            while.
          </p>
        </div>
      </article>
      <div className="space-y-6">
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold tracking-tight">
            More from the blog
          </h2>
          <div className="grid gap-4">
            {blogDetails?.map((blog) => (
              <BlogFeatureDetail blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogFeatureDetail = ({ blog }: { blog: BlogFeatureDetailProps }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="grid grid-cols-[120px_1fr] gap-4"
      prefetch={false}
    >
      <img
        src={blog.image}
        alt="Blog post thumbnail"
        width={120}
        height={80}
        className="aspect-[3/2] rounded-lg object-cover"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-medium tracking-tight">{blog.title}</h3>
        <p className="line-clamp-2 text-gray-500 dark:text-gray-400">
          {blog.description}
        </p>
      </div>
    </Link>
  );
};

export default Information;
