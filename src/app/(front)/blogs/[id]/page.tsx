import CTA from '@/components/shared/CTA';
import BlogSection from '@/components/shared/BlogSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import '@/styles/front/pages/blog-details.css';
import { routes } from '@/config/routes';

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
      type?: 'text' | 'list' | 'quote';
      items?: string[];
    }[];
  };
}

// Sample blog posts database
const blogPosts: { [key: string]: BlogPost } = {
  '1': {
    id: '1',
    title: 'The Future Of Cybersecurity: Why AI Is Leading The Way',
    category: 'Cybersecurity',
    author: 'Wilson Bergson',
    authorRole: 'Senior Security Analyst',
    authorBio: 'Wilson is a cybersecurity expert with over 10 years of experience in threat detection and AI-driven security solutions.',
    date: '26 Jan, 2025',
    readTime: '5 min read',
    featuredImage: 'img/blog_4.jpg',
    excerpt: 'Discover how AI-driven antivirus protection is transforming the fight against modern digital threats and keeping your data secure.',
    content: {
      intro: 'Discover how AI-driven antivirus protection is transforming the fight against modern digital threats and keeping your data secure.',
      sections: [
        {
          title: 'The Rise of AI in Cybersecurity',
          type: 'text',
          content: 'Artificial Intelligence has revolutionized how we approach digital security. Traditional antivirus solutions relied on signature-based detection, which could only identify known threats. Today\'s AI-powered systems can detect and neutralize threats in real-time, even if they\'ve never been seen before.\n\nMachine learning algorithms analyze billions of data points to identify patterns and anomalies that would be impossible for humans to detect. This proactive approach means threats are stopped before they can cause damage, not after.'
        },
        {
          title: 'Key Benefits of AI-Driven Security',
          type: 'list',
          content: 'The integration of AI into cybersecurity solutions brings numerous advantages:',
          items: [
            'Real-time threat detection and response',
            'Predictive analysis to anticipate future attacks',
            'Automatic updates without user intervention',
            'Lower false positive rates',
            'Protection against zero-day exploits',
            'Behavioral analysis of applications and processes'
          ]
        },
        {
          title: '',
          type: 'quote',
          content: '"The future of cybersecurity is not about building higher walls—it\'s about having smarter guards. AI is that smart guard." - Wilson Bergson'
        },
        {
          title: 'How AVIRIS Leverages AI',
          type: 'text',
          content: 'At AVIRIS, we\'ve built our entire security platform on advanced AI and machine learning technologies. Our system continuously monitors your devices, network traffic, and online activities to provide comprehensive protection.'
        },
        {
          title: 'Behavioral Analysis',
          type: 'text',
          content: 'Rather than looking for specific malware signatures, our AI analyzes the behavior of applications and processes. If something acts suspiciously—even if it\'s a brand new type of threat—our system identifies and blocks it immediately.'
        },
        {
          title: 'Zero-Day Protection',
          type: 'text',
          content: 'Zero-day vulnerabilities are security flaws that attackers exploit before developers can patch them. Our AI-powered protection doesn\'t need to wait for updates—it can recognize and defend against these threats automatically.'
        },
        {
          title: 'The Future Outlook',
          type: 'text',
          content: 'As cyber threats become more sophisticated, AI will become even more critical. We\'re already seeing the emergence of AI-powered attacks, which can only be effectively countered by AI-powered defenses.\n\nThe cybersecurity landscape is constantly evolving, but one thing is certain: AI will be at the forefront of keeping our digital lives secure. With AVIRIS, you\'re not just getting protection for today—you\'re getting security that evolves with tomorrow\'s threats.'
        },
        {
          title: 'Conclusion',
          type: 'text',
          content: 'The integration of AI into cybersecurity represents a fundamental shift in how we protect our digital assets. From real-time threat detection to predictive analysis, AI-driven solutions like AVIRIS are setting new standards for online safety.\n\nDon\'t wait for a security breach to take action. Embrace the power of AI-driven protection today and stay one step ahead of cybercriminals.'
        }
      ]
    }
  },
  '2': {
    id: '2',
    title: '5 Ways A Secure VPN Keeps Your Data Safe Online',
    category: 'VPN & Privacy',
    author: 'Jocelyn Korsgaard',
    authorRole: 'Privacy & Security Expert',
    authorBio: 'Jocelyn specializes in online privacy, VPN technologies, and data protection strategies for individuals and businesses.',
    date: '26 Jan, 2025',
    readTime: '4 min read',
    featuredImage: 'img/blog_2.png',
    excerpt: 'Learn why using a VPN is essential for online privacy and how AVIRIS keeps your information encrypted everywhere you go.',
    content: {
      intro: 'Learn why using a VPN is essential for online privacy and how AVIRIS keeps your information encrypted everywhere you go.',
      sections: [
        {
          title: 'What is a VPN?',
          type: 'text',
          content: 'A Virtual Private Network (VPN) creates a secure, encrypted tunnel between your device and the internet. This technology masks your IP address and encrypts all data transmitted, ensuring your online activities remain private and secure.'
        },
        {
          title: '5 Ways VPNs Protect You',
          type: 'list',
          content: 'Here are the key ways a VPN keeps your data safe:',
          items: [
            'Encrypts your internet traffic, making it unreadable to hackers',
            'Hides your real IP address, protecting your identity',
            'Secures public Wi-Fi connections from eavesdropping',
            'Prevents ISP tracking and data logging',
            'Bypasses geographic restrictions safely'
          ]
        },
        {
          title: 'AVIRIS VPN Features',
          type: 'text',
          content: 'AVIRIS includes an enterprise-grade VPN with unlimited bandwidth, multiple server locations worldwide, and automatic kill switch protection. Our VPN is seamlessly integrated with our antivirus solution for complete digital security.'
        }
      ]
    }
  },
  '3': {
    id: '3',
    title: 'Optimizing Device Performance With Smart Protection',
    category: 'Performance',
    author: 'Corey Botosh',
    authorRole: 'System Optimization Specialist',
    authorBio: 'Corey focuses on device performance optimization and efficient security solutions that don\'t compromise speed.',
    date: '26 Jan, 2025',
    readTime: '6 min read',
    featuredImage: 'img/blog_3.png',
    excerpt: 'Explore how AVIRIS combines system optimization with security — boosting your speed while keeping you safe from threats.',
    content: {
      intro: 'Explore how AVIRIS combines system optimization with security — boosting your speed while keeping you safe from threats.',
      sections: [
        {
          title: 'The Performance-Security Balance',
          type: 'text',
          content: 'Many antivirus solutions slow down your device with constant scans and resource-heavy processes. AVIRIS takes a different approach by intelligently managing system resources while maintaining top-tier protection.'
        },
        {
          title: 'Smart Optimization Features',
          type: 'list',
          content: 'AVIRIS includes built-in tools to keep your device running smoothly:',
          items: [
            'Duplicate file finder and cleaner',
            'Startup program manager',
            'RAM optimization',
            'Disk cleanup utilities',
            'Background app monitor',
            'Scheduled maintenance tasks'
          ]
        },
        {
          title: 'Performance Results',
          type: 'text',
          content: 'Users report up to 30% faster boot times and improved application responsiveness after installing AVIRIS. Our lightweight architecture ensures protection doesn\'t come at the cost of performance.'
        }
      ]
    }
  }
};

// Related posts data
const relatedPosts = [
  {
    title: 'Ransomware Protection Guide',
    date: '23 Jan, 2025',
    image: 'img/blog_3.png',
    link: routes.blogDetails('2')
  },
  {
    title: 'Phishing Attacks: How To Spot Them',
    date: '20 Jan, 2025',
    image: 'img/blog_2.png',
    link: routes.blogDetails('1')
  },
  {
    title: '10 Security Tips For Remote Workers',
    date: '25 Jan, 2025',
    image: 'img/blog_1.png',
    link: routes.blogDetails('3')
  }
];

const tags = ['AI Security', 'Cybersecurity', 'Machine Learning', 'Threat Detection', 'AVIRIS', 'Data Protection'];

export async function generateMetadata({ params }: BlogDetailsProps): Promise<Metadata> {
  const post = blogPosts[params.id];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | AVIRIS',
    };
  }

  return {
    title: `${post.title} | AVIRIS Blog`,
    description: post.excerpt,
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsProps) {
  const post = blogPosts[params.id];

  if (!post) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href={routes.blogs} className="btn-primary-custom">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div data-aos="fade-up" data-aos-duration="800">
                <span className="section-badge">{post.category}</span>
                <h1 className="section-title" style={{ color: '#374151' }}>
                  {post.title}
                </h1>

                <div className="blog-details-meta">
                  <div className="meta-item">
                    <i className="fas fa-user"></i>
                    <span className="meta-author">{post.author}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-details-content aviris__bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <img
                src={`/front/${post.featuredImage}`}
                alt={post.title}
                className="blog-featured-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 mt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="content-wrapper">
                <div className="content-body">
                  <p>{post.content.intro}</p>

                  {post.content.sections.map((section, index) => (
                    <div key={index}>
                      {section.title && <h2>{section.title}</h2>}

                      {section.type === 'quote' ? (
                        <blockquote>
                          <p>{section.content}</p>
                        </blockquote>
                      ) : section.type === 'list' ? (
                        <>
                          <p>{section.content}</p>
                          <ul>
                            {section.items?.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        section.content.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))
                      )}
                    </div>
                  ))}
                </div>

                {/* Share Section */}
                <div className="share-section">
                  <span className="share-label">Share this article:</span>
                  <div className="share-buttons">
                    <a href="#" className="share-btn twitter" aria-label="Share on Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="share-btn facebook" aria-label="Share on Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="share-btn linkedin" aria-label="Share on LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="share-btn email" aria-label="Share via Email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 mt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              {/* Author Widget */}
              <div className="sidebar-widget author-widget">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&size=200&background=16a34a&color=fff`}
                  alt={post.author}
                  className="author-avatar"
                />
                <h3 className="author-name">{post.author}</h3>
                <p className="author-role">{post.authorRole}</p>
                <p className="author-bio">{post.authorBio}</p>
              </div>

              {/* Related Posts Widget */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Related Articles</h3>
                {relatedPosts.map((related, index) => (
                  <div key={index} className="related-post-item">
                    <img
                      src={`/front/${related.image}`}
                      alt={related.title}
                      className="related-post-thumb"
                    />
                    <div className="related-post-content">
                      <h4>
                         <Link href={related.link} className="related-post-title">
                        {related.title}
                      </Link>
                      </h4>
                     
                      <span className="related-post-date">{related.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags Widget */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Tags</h3>
                <div className="tags-widget">
                  {tags.map((tag, index) => (
                    <a key={index} href="#" className="tag-item">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
      <CTA />
    </>
  );
}
