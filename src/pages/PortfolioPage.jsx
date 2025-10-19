const PortfolioPage = () => {
  const portfolioItems = [
    { title: 'Elegant Wedding', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80' },
    { title: 'Corporate Gala', category: 'Corporate', image: 'https://images.unsplash.com/photo-1607861884586-c7cfaed16290?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Birthday Celebration', category: 'Birthday', image: 'https://images.unsplash.com/photo-1575132246077-e597d2f15549?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Garden Wedding', category: 'Wedding', image: 'https://images.unsplash.com/photo-1707589338174-dc1ddc18945a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGV2ZW50cyUyMGRlY29yYXRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500' },
    { title: 'Product Launch', category: 'Corporate', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80' },
    { title: 'Anniversary Party', category: 'Birthday', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80' },
    { title: 'Graduation Ceremony', category: 'Graduation', image: 'https://images.unsplash.com/photo-1607647074969-cc58ec404eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZHVhdGlvbnMlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Graduation Celebration', category: 'Graduation', image: 'https://images.unsplash.com/photo-1654968327615-927c8e67a8b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbnMlMjBkZWNvcmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Luxury Event Hall', category: 'Wedding', image: 'https://media.istockphoto.com/id/2156170493/photo/beautifully-decorated-restaurant-hall-for-celebrating-a-birthday-wedding-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=0bsOQz6N7sZEDdHXfq6_sXX-n5L1P-NyTmjb0r1A58U=' },
    { title: 'Elegant Reception', category: 'Wedding', image: 'https://images.unsplash.com/photo-1657421082786-fc2b418e80b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Grand Ballroom', category: 'Corporate', image: 'https://images.unsplash.com/photo-1747115275646-49725fb5a003?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Premium Venue Setup', category: 'Corporate', image: 'https://images.unsplash.com/photo-1736155983520-a0f7d5949d39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnRzJTIwdmVudWVzJTIwZGVjb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Sophisticated Dining', category: 'Birthday', image: 'https://plus.unsplash.com/premium_photo-1722168614154-60badae538c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnRzJTIwdmVudWVzJTIwZGVjb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Modern Event Space', category: 'Corporate', image: 'https://images.unsplash.com/photo-1747115275519-e9b20470ac8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Luxury Banquet', category: 'Wedding', image: 'https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Stylish Celebration', category: 'Birthday', image: 'https://images.unsplash.com/photo-1675376616537-c8aa9ddc9977?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
    { title: 'Exclusive Venue', category: 'Wedding', image: 'https://images.unsplash.com/photo-1736155983506-c6e9da195f43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGV2ZW50cyUyMHZlbnVlcyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#001F3F', textAlign: 'center', marginBottom: '2rem' }}>Our Portfolio</h1>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button style={{ margin: '0 0.5rem', padding: '0.5rem 1rem', backgroundColor: '#D4AF37', color: '#001F3F', border: 'none', borderRadius: '0.5rem' }}>All</button>
          <button style={{ margin: '0 0.5rem', padding: '0.5rem 1rem', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '0.5rem' }}>Weddings</button>
          <button style={{ margin: '0 0.5rem', padding: '0.5rem 1rem', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '0.5rem' }}>Corporate</button>
          <button style={{ margin: '0 0.5rem', padding: '0.5rem 1rem', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '0.5rem' }}>Birthdays</button>
          <button style={{ margin: '0 0.5rem', padding: '0.5rem 1rem', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '0.5rem' }}>Graduations</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {portfolioItems.map((item, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <span style={{ backgroundColor: '#D4AF37', color: '#001F3F', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem' }}>
                  {item.category}
                </span>
                <h3 style={{ color: '#001F3F', fontSize: '1.3rem', margin: '1rem 0' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Beautiful event planning and execution with attention to every detail.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;