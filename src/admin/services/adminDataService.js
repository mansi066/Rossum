import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc,
  serverTimestamp,
  orderBy,
  query
} from 'firebase/firestore';
import { db } from '../../components/firebase';

class AdminDataService {
  // Events
  async getEvents() {
    try {
      const q = query(collection(db, 'admin_events'), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting events:', error);
      // Return default events if Firestore fails
      return Promise.resolve([
        {
          id: "0",
          title: "Algo Chase",
          text: "Algo-Chase is more than just a competition—it's a race against time where teams dive into a world of riddles, code-cracking, and thrilling problem-solving.",
          date: "2025-05-16",
          time: "10:00 AM",
          location: "Main Auditorium",
          registrationLink: "#",
          featured: true,
          archived: false,
          order: 0
        }
      ]);
    }
  }

  async addEvent(eventData) {
    const docRef = await addDoc(collection(db, 'admin_events'), {
      ...eventData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      order: Date.now()
    });
    return { id: docRef.id, ...eventData };
  }

  async updateEvent(id, eventData) {
    const docRef = doc(db, 'admin_events', id);
    await updateDoc(docRef, {
      ...eventData,
      updatedAt: serverTimestamp()
    });
    return { id, ...eventData };
  }

  async deleteEvent(id) {
    const docRef = doc(db, 'admin_events', id);
    await deleteDoc(docRef);
  }

  async reorderEvents(events) {
    const batch = [];
    events.forEach((event, index) => {
      const docRef = doc(db, 'admin_events', event.id);
      batch.push(updateDoc(docRef, { order: index }));
    });
    await Promise.all(batch);
  }

  // Team
  async getTeam() {
    try {
      const q = query(collection(db, 'admin_team'), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting team:', error);
      // Return default team if Firestore fails
      return Promise.resolve([
        {
          id: "0",
          name: "Suman Saha",
          role: "Faculty",
          department: "Faculty",
          bio: "Experienced faculty member",
          email: "suman.saha@mail.jaypeeu.ac.in",
          phone: "+91 9805788220",
          url: "/src/assets/Members/SumanSaha.jpeg",
          order: 0
        }
      ]);
    }
  }

  async addTeamMember(memberData) {
    const docRef = await addDoc(collection(db, 'admin_team'), {
      ...memberData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      order: Date.now()
    });
    return { id: docRef.id, ...memberData };
  }

  async updateTeamMember(id, memberData) {
    const docRef = doc(db, 'admin_team', id);
    await updateDoc(docRef, {
      ...memberData,
      updatedAt: serverTimestamp()
    });
    return { id, ...memberData };
  }

  async deleteTeamMember(id) {
    const docRef = doc(db, 'admin_team', id);
    await deleteDoc(docRef);
  }

  // Contact Info
  async getContactInfo() {
    try {
      const docRef = doc(db, 'admin_settings', 'contact_info');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return this.getDefaultContactInfo();
    } catch (error) {
      console.error('Error getting contact info:', error);
      return Promise.resolve(this.getDefaultContactInfo());
    }
  }

  getDefaultContactInfo() {
    return {
      address: "Jaypee University Anoopshahr, Bulandshahr, Uttar Pradesh - 203390, India",
      phone: "+91 8741895972",
      email: "rossum@jaypeeu.ac.in",
      socialMedia: {
        instagram: "https://www.instagram.com/rossum_jua",
        linkedin: "https://www.linkedin.com/in/rossum-jua-454561366",
        facebook: "https://www.facebook.com/share/15nztq6WnR/"
      },
      officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
      contactFormEmail: "admin@rossum.com"
    };
  }

  async updateContactInfo(contactData) {
    const docRef = doc(db, 'admin_settings', 'contact_info');
    await updateDoc(docRef, {
      ...contactData,
      updatedAt: serverTimestamp()
    });
    return contactData;
  }
}

export const adminDataService = new AdminDataService();