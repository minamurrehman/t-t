import Image from "next/image";
import React from "react";
import moment from "moment/moment";
import readingTime from "reading-time";
import { MdOutlineTimer } from "react-icons/md";
import Link from "next/link";
const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-2xl overflow-hidden max-w-[530px] border-2 border-secondary">
      <Image
        src={blog?.feature_image}
        alt={blog?.feature_image_alt}
        width={530}
        height={360}
        className="rounded-t-lg max-h-[300px] md:h-[360px] object-cover"
      />
      <div className="py-4 px-4">
        <div className="flex justify-between gap-2 text-xl text-secondary">
          <p>{moment(blog?.published_at).format("DD MMMM YYYY")}</p>
          <p className="flex gap-1">
            <MdOutlineTimer size={24} color="#03eeca" />
            <span>
              {
                readingTime(blog?.html, {
                  wordsPerMinute: 200,
                }).minutes
              }{" "}
              min
            </span>
          </p>
        </div>
        <div className="px-8 text-center">
          <h1 className="text-3xl font-[700] text-center text-secondary my-6">
            {blog?.title}
          </h1>
          <p>{blog?.excerpt}</p>
          <Link
            href={`/blogs/${blog?.slug}`}
            className="block w-max mx-auto my-4 text-2xl bg-secondary px-8 py-2 rounded-xl text-black hover:scale-105 duration-500"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// {
//     id: '64bc2d5a70f9612543ee5859',
//     uuid: '206ef7f1-1930-4f20-9a72-6b7c927bff1b',
//     title: 'This is a test post',
//     slug: 'coming-soon',
//     html: '<p>This is a test post here</p><figure class="kg-card kg-image-card"><img src="https://thecodingsolution.com/content/images/2023/07/2JCszZ-QGDQEkf.jpeg" class="kg-image" alt loading="lazy" width="605" height="341" srcset="https://thecodingsolution.com/content/images/size/w600/2023/07/2JCszZ-QGDQEkf.jpeg 600w, https://thecodingsolution.com/content/images/2023/07/2JCszZ-QGDQEkf.jpeg 605w"></figure><h3 id="hello">Hello</h3>',
//     comment_id: '64bc2d5a70f9612543ee5859',
//     feature_image: 'https://thecodingsolution.com/content/images/2023/07/0mnP5pFhCroGLX.jpeg',
//     featured: false,
//     visibility: 'public',
//     created_at: '2023-07-22T19:26:18.000+00:00',
//     updated_at: '2023-07-22T19:32:29.000+00:00',
//     published_at: '2023-07-22T19:26:18.000+00:00',
//     custom_excerpt: null,
//     codeinjection_head: null,
//     codeinjection_foot: null,
//     custom_template: null,
//     canonical_url: null,
//     url: 'https://thecodingsolution.com/coming-soon/',
//     excerpt: 'This is a test post here\n\n\nHello',
//     reading_time: 0,
//     access: true,
//     comments: true,
//     og_image: null,
//     og_title: null,
//     og_description: null,
//     twitter_image: null,
//     twitter_title: null,
//     twitter_description: null,
//     meta_title: null,
//     meta_description: null,
//     email_subject: null,
//     frontmatter: null,
//     feature_image_alt: null,
//     feature_image_caption: null
//   },
//   meta: {
//     pagination: { page: 1, limit: 6, pages: 1, total: 1, next: null, prev: null }
//   }
