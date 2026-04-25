import React from 'react';

export default function Home() {
  const styles = {
    nav: {
      position: 'fixed' as 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 60px',
      zIndex: 1000,
      boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
      borderBottom: '1px solid #f0f0f0'
    },
    hero: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundImage: 'linear-gradient(to right, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.2)), url("https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '0 100px',
      color: '#ffffff'
    },
    cardContainer: {
      display: 'flex',
      maxWidth: '1200px',
      margin: '-100px auto 50px',
      position: 'relative' as 'relative',
      zIndex: 10,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
    },
    card: (bg: string) => ({
      backgroundColor: bg,
      padding: '50px 40px',
      flex: 1,
      color: '#ffffff',
      textAlign: 'left' as 'left'
    })
  };

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={{ fontSize: '26px', fontWeight: 900, color: '#1e3a8a', letterSpacing: '-1.5px' }}>
          DENTI<span style={{ color: '#ec4899' }}>CARE</span>
        </div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '13px', fontWeight: 'bold', color: '#4b5563', textTransform: 'uppercase' }}>
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
        </div>
        <button style={{ backgroundColor: '#ec4899', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>
          BOOK NOW
        </button>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={{ maxWidth: '700px' }}>
          <p style={{ color: '#f472b6', fontWeight: 'bold', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Committed To Excellence
          </p>
          <h1 style={{ fontSize: '90px', margin: 0, lineHeight: 1, fontWeight: 900 }}>
            Personalized &<br />Comfortable
          </h1>
          <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
            <button style={{ padding: '20px 45px', borderRadius: '50px', border: 'none', backgroundColor: '#ffffff', color: '#1e3a8a', fontWeight: '900', fontSize: '15px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              OUR PROCESS →
            </button>
          </div>
        </div>
      </header>

      {/* Overlapping Info Cards */}
      <section style={styles.cardContainer}>
        <div style={styles.card('#2563eb')}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '22px' }}>CERTIFIED DENTISTS</h3>
          <p style={{ opacity: 0.8, fontSize: '14px', lineHeight: 1.6 }}>Professional dental care from our board-certified experts.</p>
        </div>
        <div style={styles.card('#ec4899')}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '22px' }}>NEW TECHNOLOGY</h3>
          <p style={{ opacity: 0.8, fontSize: '14px', lineHeight: 1.6 }}>Modern tools for a painless and precise treatment experience.</p>
        </div>
        <div style={styles.card('#1e3a8a')}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '22px' }}>ACCEPTING PATIENTS</h3>
          <p style={{ opacity: 0.8, fontSize: '14px', lineHeight: 1.6 }}>We are currently welcoming new patients for all treatments.</p>
        </div>
      </section>

      <div style={{ height: '100px' }}></div>
    </div>
  );
}
