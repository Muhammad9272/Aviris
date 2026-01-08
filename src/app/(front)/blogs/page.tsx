import CTA from '@/components/shared/CTA';
import BlogCard from '@/components/shared/BlogCard';
import type { Metadata } from 'next';
import '@/styles/front/pages/blogs.css';
import '@/styles/front/components/blogs.css';

export const metadata: Metadata = {
  title: 'Blog - AVIRIS | Cybersecurity Tips & Security Insights',
  description: 'Stay informed with AVIRIS blog. Get expert tips on cybersecurity, VPN privacy, malware protection, device optimization and the latest security trends.',
};

import { routes } from '@/config/routes';

const allBlogPosts = [
  {
    image: 'img/blog_1.png',
    category: 'Cybersecurity',
    author: 'Wilson Bergson',
    date: '26 Jan, 2025',
    title: 'The Future Of Cybersecurity: Why AI Is Leading The Way',
    excerpt: 'Discover how AI-driven antivirus protection is transforming the fight against modern digital threats and keeping your data secure.',
    readTime: '5 min read',
    link: routes.blogDetails('1')
  },
  {
    image: 'img/blog_2.png',
    category: 'VPN & Privacy',
    author: 'Jocelyn Korsgaard',
    date: '26 Jan, 2025',
    title: '5 Ways A Secure VPN Keeps Your Data Safe Online',
    excerpt: 'Learn why using a VPN is essential for online privacy and how AVIRIS keeps your information encrypted everywhere you go.',
    readTime: '4 min read',
    link: routes.blogDetails('2')
  },
  {
    image: 'img/blog_3.png',
    category: 'Performance',
    author: 'Corey Botosh',
    date: '26 Jan, 2025',
    title: 'Optimizing Device Performance With Smart Protection',
    excerpt: 'Explore how AVIRIS combines system optimization with security — boosting your speed while keeping you safe from threats.',
    readTime: '6 min read',
    link: routes.blogDetails('3')
  },
  {
    image: 'img/blog_1.png',
    category: 'Security Tips',
    author: 'Sarah Mitchell',
    date: '25 Jan, 2025',
    title: '10 Essential Security Tips For Remote Workers',
    excerpt: 'Working from home? Learn the best security practices to protect your data and maintain productivity in a remote environment.',
    readTime: '7 min read',
    link: routes.blogDetails('4')
  },
  {
    image: 'img/blog_2.png',
    category: 'VPN & Privacy',
    author: 'Michael Chen',
    date: '24 Jan, 2025',
    title: 'Understanding Zero-Log VPN Policies',
    excerpt: 'What does a zero-log VPN policy really mean? Discover how AVIRIS protects your privacy with our transparent approach.',
    readTime: '5 min read',
    link: routes.blogDetails('5')
  },
  {
    image: 'img/blog_3.png',
    category: 'Cybersecurity',
    author: 'Emma Rodriguez',
    date: '23 Jan, 2025',
    title: 'Ransomware Protection: Complete Guide 2025',
    excerpt: 'Protect yourself from ransomware attacks with our comprehensive guide on prevention, detection, and recovery strategies.',
    readTime: '8 min read',
    link: routes.blogDetails('6')
  },
  {
    image: 'img/blog_1.png',
    category: 'Performance',
    author: 'David Thompson',
    date: '22 Jan, 2025',
    title: 'How To Speed Up Your Computer Without Compromising Security',
    excerpt: 'Get the best of both worlds: lightning-fast performance and top-tier security with these expert optimization tips.',
    readTime: '6 min read',
    link: routes.blogDetails('7')
  },
  {
    image: 'img/blog_2.png',
    category: 'Security Tips',
    author: 'Lisa Anderson',
    date: '21 Jan, 2025',
    title: 'Password Manager Best Practices For 2025',
    excerpt: 'Master the art of password management and protect your accounts from unauthorized access with these proven strategies.',
    readTime: '5 min read',
    link: routes.blogDetails('8')
  },
  {
    image: 'img/blog_3.png',
    category: 'Cybersecurity',
    author: 'James Wilson',
    date: '20 Jan, 2025',
    title: 'Phishing Attacks: How To Spot And Avoid Them',
    excerpt: 'Learn to identify phishing attempts and protect yourself from falling victim to one of the most common cyber threats.',
    readTime: '4 min read',
    link: routes.blogDetails('9')
  }
];

const categories = ['All', 'Cybersecurity', 'VPN & Privacy', 'Performance', 'Security Tips'];

export default function Blogs() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          <div className="text-center">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Our Blog</span>
            </div>
            
            <h1 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Insights & Resources</span> From AVIRIS
            </h1>
            
            <p className="section-description mx-auto pb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Stay informed with the latest in cybersecurity, privacy tips, and digital protection strategies.<br /> Expert insights to keep you safe online.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="blogs-filter-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Filter Tabs */}
            <div className="col-lg-8 col-md-7 mb-2">
              <div className="filter-tabs" data-aos="fade-up" data-aos-duration="800">
                {categories.map((category, index) => (
                  <a 
                    key={category}
                    href={`#${category.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} 
                    className={`filter-tab ${index === 0 ? 'active' : ''}`}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Search Bar */}
            <div className="col-lg-4 col-md-5 mb-2">
              <div className="search-bar-wrapper" data-aos="fade-up" data-aos-duration="800">
                <div className="search-input-group">
                  <input type="text" className="search-input" placeholder="Search articles..." />
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="blogs-grid-section">
        <div className="container">
          <div className="row">
            {allBlogPosts.map((post, index) => (
              <div 
                key={index}
                className="col-lg-4 col-md-6 mb-4" 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-delay={100 + (index % 3) * 100}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-wrapper" data-aos="fade-up" data-aos-duration="1000">
            <ul className="pagination">
              <li><a href="#prev"><i className="fas fa-chevron-left"></i></a></li>
              <li><a href="#1" className="active">1</a></li>
              <li><a href="#2">2</a></li>
              <li><a href="#3">3</a></li>
              <li><a href="#4">4</a></li>
              <li><a href="#next"><i className="fas fa-chevron-right"></i></a></li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
