import Head from 'next/head'
import Hero from '../containers/Hero/Hero'
import Type from '../components/Type/Type'
import styles from "../styles/home.module.scss"
import Carousel from '../components/Slider/Carousel'
import Hear from '../components/Hear/Hear'
import {work,clients} from "../utils/data.json"
import {api} from "../utils/api";




export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>T & T Marketing</title>
        <meta
          name='description'
          content="Boosting Your Brand's Reach and ROI with TT Marketing's Expert Strategies"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo-black.svg' />
      </Head>
      <main>
        <Hero />
        <div className={styles.typeContainer}>
          <Type />
          <div className={styles.typeText}>
            <p>
              Welcome to the <span className="text-secondary">T&T family</span>,
              where marketing becomes a thrilling adventure. We are a bunch of
              marketing geeks, fueled by the fire of our passion and a knack for
              creativity. {" "}
              <span className="text-secondary">
                We don't just do our jobs, we live them.
              </span>
            </p>
            <p>
              Here at <span className="text-secondary">T&T</span>, we strive to
              truly "get" your business. We dig deep, getting to grips with your
              goals, your dreams, and even your worries.{" "}
              <span className="text-secondary">
                We're not just pushing out services, we're creating custom
                solutions that mirror what your brand is all about.
              </span>
            </p>
            <p>
              Our bond with clients? Well, that's special. It's{" "}
              <span className="text-secondary">
                more than just a business deal
              </span>
              {" "}to us. We care for these relationships just as we do for our own
              work - with heaps of dedication and warmth. We cheer when you
              succeed and stand by your side when things get a bit rocky, {" "}
              <span className="text-secondary">
                always ready with a helping hand and a winning mindset
              </span>
              .
            </p>
            <p>
              So, step in to a world of {" "}
              <span className="text-secondary">T&T agency</span>, a place where
              work meets passion, and {" "}
              <span className="text-secondary">clients become friends</span>.
              Let's navigate the thrilling twists and turns of the marketing world{" "}
              <span className="text-secondary">together</span>!
            </p>
          </div>
        </div>
        {/* <div>
          <Social />
        </div> */}

        {/* CarouselBlogs  */}
        <div className={styles.carouselContainer}>
          <p className={styles.heading}>
            Previous Works
          </p>
          <Carousel data={work} type="work" />
        </div>
        <div className={styles.carouselContainerBlack}>
          <p className={styles.heading}>
            Our Clients
          </p>
          <Carousel data={clients} type="clients"/>
        </div>
        <div className={styles.carouselContainer}>
          <p className={styles.heading}>
            From Blogs
          </p>
          <Carousel data={blogs} type="blogs"/>
        </div>
        <div className={styles.hear}>
          <Hear />
        </div>
      </main>
    </>
  )
}
export async function getStaticProps() {
  const blogs = await api.posts
      .browse({
        limit: "6",
      })
      .catch((err) => {
        console.error(err);
      });
  console.log(blogs);
  return {
    props: { blogs },
    revalidate: 300,
  };
}