import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/EventDetail.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Calendar, Clock, MapPin, Users, Ticket, Building } from 'lucide-react';
import { getEventById } from '../../temp-data/data';

const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = getEventById(Number(id));

  if (!event) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.mainContent}>
        <button 
        onClick={() => router.push('/explore')} 
        className={styles.backButton}
      >
        ← Explore
      </button>
      <div className={styles.eventHeader}>
            <h1 className={styles.title}>{event.name}</h1>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.mainInfo}>
              {/* <div className={styles.imageContainer}>
                <img src={event.imageUrl} alt={event.name} className={styles.eventImage} />
              </div> */}

              <div className={styles.description}>
              <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>About This Event</h2>
                  <span className={styles.category}>{event.category}</span>
                </div>
                <p className={styles.longDescription}>
                  {event.longDescription}
                </p>
              </div>

              <div className={styles.highlights}>
                <h2 className={styles.sectionTitle}>Event Highlights</h2>
                <ul className={styles.highlightsList}>
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.sidebar}>
            <button className={styles.registerButton}>
                Register for Event
              </button>
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <Calendar size={20} />
                  <div>
                    <h3>Date</h3>
                    <p>{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Clock size={20} />
                  <div>
                    <h3>Time</h3>
                    <p>{event.time}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Building size={20} />
                  <div>
                    <h3>Venue</h3>
                    <p>{event.venue.name}</p>
                    <p className={styles.subText}>{event.venue.address}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Users size={20} />
                  <div>
                    <h3>Capacity</h3>
                    <p>{event.venue.capacity.toLocaleString()} attendees</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Ticket size={20} />
                  <div>
                    <h3>Pricing</h3>
                    {Object.entries(event.pricing).map(([type, price]) => (
                      <p key={type} className={styles.priceItem}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}: ${price}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetailPage;