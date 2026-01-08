'use client';

import { useEffect } from 'react';
import '@/styles/front/components/testimonials.css';

const testimonials = [
  {
    name: 'Emma Richardson',
    first_name: 'Emma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    video_poster: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    video_src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    stars: 5,
    testimonial: 'AVIRIS gives me <span class="text-success fw-semibold">peace</span> of mind every time I connect to public Wi-Fi. The setup is incredible, and switching between servers takes just seconds!'
  },
  {
    name: 'Daniel Carter',
    first_name: 'Daniel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    video_poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    video_src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    stars: 5,
    testimonial: 'I love how simple AVIRIS makes advanced security. Locking my IP and monitoring speed in real time feels like having full control of my privacy.'
  },
  {
    name: 'Lucas Meyer',
    first_name: 'Lucas',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    video_poster: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    video_src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    stars: 5,
    testimonial: 'I\'ve tried many VPNs, but AVIRIS stands out. The interface is clean, connections are stable, and I love being able to switch servers with one click.'
  },
  {
    name: 'Sarah Johnson',
    first_name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    video_poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop',
    video_src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    stars: 5,
    testimonial: 'The best VPN I\'ve ever used! AVIRIS is fast, reliable, and incredibly easy to set up. I feel safe browsing anywhere now.'
  },
  {
    name: 'Michael Chen',
    first_name: 'Michael',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    video_poster: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=600&fit=crop',
    video_src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    stars: 4,
    testimonial: 'AVIRIS has exceeded my expectations. The connection speed is amazing and I never experience any drops. Highly recommended!'
  }
];

declare global {
  interface Window {
    Swiper: any;
  }
}

export default function Testimonials() {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        const testimonialSwiper = new window.Swiper('.testimonialSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
        });

        // Pause all videos function
        const pauseAllVideos = () => {
          document.querySelectorAll('.video-player').forEach((video: any) => {
            if (!video.paused) {
              video.pause();
              const container = video.closest('.testimonial-video');
              const overlay = container?.querySelector('.video-play-overlay');
              if (overlay) {
                overlay.classList.remove('playing');
              }
            }
          });
        };

        // Initialize all videos as muted
        document.querySelectorAll('.video-player').forEach((video: any) => {
          video.muted = true;
        });

        // Video Click to Play/Pause
        document.querySelectorAll('.testimonial-video').forEach(container => {
          const video = container.querySelector('.video-player') as HTMLVideoElement;
          const overlay = container.querySelector('.video-play-overlay');
          
          container.addEventListener('click', function(e) {
            const target = e.target as HTMLElement;
            if (target.closest('.video-controls')) {
              return;
            }
            
            if (video.paused) {
              pauseAllVideos();
              video.play();
              overlay?.classList.add('playing');
            } else {
              video.pause();
              overlay?.classList.remove('playing');
            }
          });
        });

        // Video Mute/Unmute Functionality
        document.querySelectorAll('.video-mute-btn').forEach(btn => {
          btn.addEventListener('click', function(this: HTMLElement, e) {
            e.stopPropagation();
            const video = this.closest('.testimonial-video')?.querySelector('.video-player') as HTMLVideoElement;
            
            if (video.muted) {
              video.muted = false;
              this.innerHTML = '<i class="fas fa-volume-up"></i>';
            } else {
              video.muted = true;
              this.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
          });
        });

        // Reset video when it ends
        document.querySelectorAll('.video-player').forEach((video: any) => {
          video.addEventListener('ended', function(this: HTMLVideoElement) {
            const container = this.closest('.testimonial-video');
            const overlay = container?.querySelector('.video-play-overlay');
            overlay?.classList.remove('playing');
            this.currentTime = 0;
          });
        });

        // Pause all videos when slide changes
        testimonialSwiper.on('slideChange', function() {
          pauseAllVideos();
          document.querySelectorAll('.video-player').forEach((video: any) => {
            video.currentTime = 0;
          });
        });

        // Add hover effect to cards
        document.querySelectorAll('.swiper-slide .card').forEach((card: any) => {
          card.addEventListener('mouseenter', function(this: HTMLElement) {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
          });
          
          card.addEventListener('mouseleave', function(this: HTMLElement) {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
          });
        });
      }
    };

    // Try to initialize after a delay to ensure Swiper is loaded
    const timer = setTimeout(initSwiper, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="py-5 position-relative overflow-hidden" style={{background: 'var(--bg-dark)'}}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
              <span>Testimonials</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Your Secure</span> Gateway To<br/>
              The World.
            </h2>

            <p className="section-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              AVIRIS lets you connect to any IP through our global VPN network with lightning-fast <br/> speed and unbreakable encryption.
            </p>
          </div>
        </div>

        {/* Full Width Testimonials Swiper */}
        <div className="testimonials-swiper-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <div className="swiper testimonialSwiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="swiper-slide">
                  <div className="card border-0 shadow-sm h-100" style={{borderRadius: '24px', transition: 'all 0.3s ease'}}>
                    {/* Card Header */}
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle border border-3 border-light"
                          style={{width: '60px', height: '60px', objectFit: 'cover'}}
                        />
                        <div className="flex-grow-1">
                          <h5 className="mb-1 fw-semibold">
                            <span className="text-muted">{testimonial.first_name}</span> 
                            {testimonial.name.replace(testimonial.first_name + ' ', '')}
                          </h5>
                          <div className="d-flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`fas fa-star ${i < testimonial.stars ? 'text-warning' : 'text-muted opacity-25'}`}></i>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Video Container */}
                      <div className="testimonial-video rounded-3 mb-3" data-video-id={index}>
                        <video className="video-player" poster={testimonial.video_poster}>
                          <source src={testimonial.video_src} type="video/mp4" />
                        </video>
                        <div className="video-play-overlay">
                          <div className="video-play-icon">
                            <i className="fas fa-play"></i>
                          </div>
                        </div>
                        <div className="video-controls">
                          <button className="video-control-btn video-mute-btn">
                            <i className="fas fa-volume-mute"></i>
                          </button>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-muted mb-0 lh-lg" dangerouslySetInnerHTML={{__html: testimonial.testimonial}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="testimonial-navigation">
              <div className="swiper-button-prev testimonial-nav-btn">
                <i className="fas fa-chevron-left"></i>
              </div>
              <div className="swiper-button-next testimonial-nav-btn">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
