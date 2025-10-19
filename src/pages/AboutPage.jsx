const AboutPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', backgroundImage: 'url(https://media.istockphoto.com/id/1177485677/photo/table-setting-for-an-event-party-or-wedding-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=z95tXZbeIccQ_bEHs5zTj1fcuGOTVpEN85TgNyCGhHs=)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', lineHeight: '1.6' }}>
            We are passionate event planners dedicated to creating unforgettable experiences. 
            With over a decade of expertise, we transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#001F3F', marginBottom: '1.5rem' }}>Our Story</h2>
            <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
              Founded in 2014, Premium Events started with a simple mission: to create extraordinary 
              moments that last a lifetime. What began as a small team of passionate event enthusiasts 
              has grown into Kenya's premier event planning company.
            </p>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              We believe every event tells a story, and we're here to help you tell yours in the most 
              beautiful way possible. From intimate gatherings to grand celebrations, we bring creativity, 
              professionalism, and attention to detail to every project.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80" 
                 alt="Our team" 
                 style={{ width: '100%', borderRadius: '1rem', maxWidth: '400px' }} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#001F3F', textAlign: 'center', marginBottom: '3rem' }}>Meet Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Sarah Johnson', role: 'Lead Event Planner', image: 'https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.webp?a=1&b=1&s=612x612&w=0&k=20&c=tstc8VsNb6vA9T2G7IWqfOIsvbJlnlA0qnsyEWBI_4I=' },
              { name: 'Michael Chen', role: 'Creative Director', image: 'https://media.istockphoto.com/id/2157746547/photo/an-adult-handsome-black-businessman-outside-of-corporation-using-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=OUxYxR_cWUxv1Xo9S5sIP1gL29_1Vlu93Z0rDT6Str0=' },
              { name: 'Emily Davis', role: 'Operations Manager', image: 'https://media.istockphoto.com/id/1353378620/photo/cheerful-african-woman-wearing-trendy-red-headscarf.webp?a=1&b=1&s=612x612&w=0&k=20&c=xYyN9pKOZZRg9U2nKxIhWu5BYtiDpI29ZewMB3iJxfE=' }
            ].map((member, index) => (
              <div key={index} style={{ textAlign: 'center', backgroundColor: 'white', padding: '2rem', borderRadius: '1rem' }}>
                <img src={member.image} alt={member.name} 
                     style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }} />
                <h3 style={{ color: '#001F3F', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ color: '#D4AF37', fontWeight: 'bold' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#001F3F', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>Excellence</h3>
              <p>We strive for perfection in every detail, ensuring your event exceeds expectations.</p>
            </div>
            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>Creativity</h3>
              <p>We bring innovative ideas and unique concepts to make your event truly memorable.</p>
            </div>
            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>Reliability</h3>
              <p>You can count on us to deliver on our promises and be there when you need us most.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;