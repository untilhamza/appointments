import { BOOKINGS } from "../data";
import db from "../database/firebase-config";
import {
  collection,
  addDoc,
  Timestamp,
  getDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { date } from "yup";

const bookingsCollectionRef = collection(db, "bookings");

const API_URL = "";

function processBooking(result) {
  let bookingData = {
    name: result.name,
    phone: result.phone,
    date: result.date.toDate().toDateString(),
    time: result.date.toDate().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    status: result.status,
  };
  return bookingData;
}

async function delay(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
//load bookings for given date as json
const httpGetBooking = async (id) => {
  const bookingRef = doc(db, "bookings", id);
  const bookingSnap = await getDoc(bookingRef);

  if (bookingSnap.exists()) {
    // console.log(bookingSnap.data());
    let result = { ...bookingSnap.data(), id: bookingSnap.id };
    let bookingData = {
      name: result.name,
      phone: result.phone,
      date: result.date.toDate().toDateString(),
      time: result.date.toDate().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      status: result.status,
    };

    return bookingData;
  } else {
    return {
      ok: false,
      message: "The appointment was not found!",
    };
  }
};

const httpCheckBooking = async (phone) => {
  //const id = phone;
  console.log(phone);
  const q = query(bookingsCollectionRef, where("phone", "==", `${phone}`));

  // const bookingRef = doc(db, "bookings", id);
  //TODO: try using getDoc
  const bookingSnap = await getDocs(q);
  console.log(bookingSnap);

  if (bookingSnap) {
    // console.log(bookingSnap.data());
    // let result = { ...bookingSnap.data(), id: bookingSnap.id };
    let result = bookingSnap.docs.map((doc) => ({
      ...processBooking(doc.data()),
      id: doc.id,
    }));
    console.log(result);
    // let bookingData = {
    //   name: result.name,
    //   phone: result.phone,
    //   date: result.date.toDate().toDateString(),
    //   time: result.date.toDate().toLocaleTimeString([], {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: true,
    //   }),
    //   status: result.status,
    // };
    console.log(result);
    return result;
  } else {
    return {
      ok: false,
      message: "sth",
    };
    //throw new Error("The appointment was not found!");
  }
};
//load bookings for given date as json
const httpGetBookings = async (id) => {
  console.log(id);
  //format this date here!!!!
  // setTimeout(() => console.log("got bookings"), 4000);
  //const response = await fetch(`${API_URL}/bookings/${date}`);
  //return await response.json();
  return delay(BOOKINGS);
};

//load already booked time slots for given date as json
const httpGetSlots = async (date) => {
  const response = await fetch(`${API_URL}/slots/${date}`);
  return await response.json();
};

//submit a new booking to the system
const httpSubmitBooking = async (bookingData) => {
  try {
    // const response = await fetch(`${API_URL}/bookings`, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(booking),
    // });
    let bookingMoment = bookingData.date;
    let timeString = bookingData.time;
    let dateString = bookingMoment.format("YYYY-MM-DD").toString();
    let parsedDate = Date.parse(dateString + "T" + timeString);
    // console.log(dateString);
    // console.log(timeString);
    // console.log(parsedDate);

    const response = await addDoc(bookingsCollectionRef, {
      ...bookingData,
      date: Timestamp.fromMillis(parsedDate),
      dateString,
      status: "confirmed",
    });

    return response.id;
    //pull out the id that was returned here...
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
};

//edit a booking
const httpEditBooking = async (booking) => {
  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    return response;
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
};

//delete bookings
const httpCancelBooking = async (id) => {
  try {
    const bookingDoc = doc(db, "bookings", id);
    const newFields = { status: "cancelled" };
    const response = await updateDoc(bookingDoc, newFields);
    return response.data();
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
};

//login
const httpLogin = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "post",
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {}
  fetch(`${API_URL}/login`, {
    method: "post",
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      // HANDLE RESPONSE DATA
      console.log(data);
    })
    .catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
};
export {
  httpGetBooking,
  httpGetBookings,
  httpGetSlots,
  httpSubmitBooking,
  httpEditBooking,
  httpCancelBooking,
  httpLogin,
  httpCheckBooking,
};
