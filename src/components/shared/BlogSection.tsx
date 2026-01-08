import BlogCard from './BlogCard';
import { routes } from '@/config/routes';
import '@/styles/front/components/blogs.css';

const blogPosts = [
  {
    image: 'img/blog_1.png',
    author: 'Wilson Bergson',
    date: '26 Jan, 2025',
    title: 'The Future Of <strong>Cybersecurity</strong>: Why <strong>AI</strong> Is Leading The Way',
    excerpt: 'Discover how AI-driven antivirus protection is transforming the fight against modern digital threats.',
    link: routes.blogDetails('1')
  },
  {
    image: 'img/blog_2.png',
    author: 'Jocelyn Korsgaard',
    date: '26 Jan, 2025',
    title: '5 Ways <strong>A Secure VPN</strong> Keeps Your Data Safe <strong>Online</strong>',
    excerpt: 'Learn why using a VPN is essential for online privacy and how AVIRIS keeps your information encrypted everywhere.',
    link: routes.blogDetails('2')
  },
  {
    image: 'img/blog_3.png',
    author: 'Corey Botosh',
    date: '26 Jan, 2025',
    title: 'Optimizing <strong>Device Performance</strong> With Smart <strong>Protection</strong>',
    excerpt: 'Explore how AVIRIS combines system optimization with security — boosting your speed while keeping you safe.',
    link: routes.blogDetails('3')
  }
];

export default function BlogSection() {
  return (
    <section className="blog-section aviris__bg-dark">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
            <span>Out Latest Blog Posts</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <span className="text-dark">From The</span> AVIRIS Blog
          </h2>

          <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Stay Ahead with Security Insights and Pro Tips.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="row g-4 mb-5">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="col-lg-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay={600 + (index * 200)}
            >
              <BlogCard {...post} delay={600 + (index * 200)} />
            </div>
          ))}
        </div>

        {/* See All Blogs Button */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
          <a href={routes.blogs} className="btn-secondary-custom">
            See all Blogs
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
