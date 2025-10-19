const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Tips for Planning the Perfect Wedding",
      excerpt: "Planning a wedding can be overwhelming. Here are our top 10 tips to make your special day perfect.",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80"
    },
    {
      title: "Corporate Event Trends for 2025",
      excerpt: "Discover the latest trends in corporate event planning that will make your business events stand out.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80"
    },
    {
      title: "How to Choose the Perfect Venue",
      excerpt: "The venue sets the tone for your entire event. Learn how to choose the perfect location for your celebration.",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
    },
    {
      title: "Budget-Friendly Event Planning Ideas",
      excerpt: "Create amazing events without breaking the bank. Our expert tips for budget-conscious event planning.",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80"
    },
    {
      title: "The Art of Event Decoration",
      excerpt: "Transform any space into a magical venue with our professional decoration tips and tricks.",
      date: "February 20, 2025",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&q=80"
    },
    {
      title: "Catering Trends That Will Wow Your Guests",
      excerpt: "Food is a crucial part of any event. Discover the latest catering trends that will impress your guests.",
      date: "February 15, 2025",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#001F3F', textAlign: 'center', marginBottom: '1rem' }}>Our Blog</h1>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '3rem' }}>
          Tips, trends, and inspiration for your next event
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {blogPosts.map((post, index) => (
            <article key={index} style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ color: '#D4AF37', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{post.date}</div>
                <h2 style={{ color: '#001F3F', fontSize: '1.3rem', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h2>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>{post.excerpt}</p>
                <button style={{ 
                  color: '#D4AF37', 
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section style={{ 
          backgroundColor: '#001F3F', 
          color: 'white', 
          padding: '3rem 2rem', 
          borderRadius: '1rem', 
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Stay Updated</h2>
          <p style={{ marginBottom: '2rem' }}>Subscribe to our newsletter for the latest event planning tips and trends</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Your email address"
              style={{ 
                flex: 1,
                padding: '1rem', 
                border: 'none', 
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
            <button style={{ 
              backgroundColor: '#D4AF37', 
              color: '#001F3F', 
              padding: '1rem 2rem', 
              border: 'none', 
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;