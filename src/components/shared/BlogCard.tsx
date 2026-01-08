import Link from 'next/link';

interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
  delay?: number;
}

export default function BlogCard({ image, author, date, title, excerpt, link, delay = 600 }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link href={link} className="blog-image-wrapper">
        <img src={`/front/${image}`} alt={title.replace(/<\/?strong>/g, '')} className="blog-image" />
        <div className="blog-image-overlay">
          <span className="blog-read-more-overlay">
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </Link>
      
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-author">{author}</span>
          <span className="blog-separator">•</span>
          <span className="blog-date">{date}</span>
        </div>
        
        <h3 className="blog-title">
          <Link href={link} dangerouslySetInnerHTML={{__html: title}} />
        </h3>
        
        <p className="blog-excerpt">
          {excerpt}
        </p>
        
        <Link href={link} className="btn-light-custom">
          Read More
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
}
