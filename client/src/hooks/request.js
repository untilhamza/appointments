import { BOOKINGS } from "../data";
const API_URL = "";

async function delay(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
//load bookings for given date as json
const httpGetBookings = async (date) => {
  console.log(date);
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
const httpSubmitBooking = async (booking) => {
  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: "post",
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
const httpDeleteBooking = async (id) => {
  try {
    const response = await fetch(`${API_URL}/bookings/${id}`, {
      method: "delete",
    });
    return response;
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
  httpGetBookings,
  httpGetSlots,
  httpSubmitBooking,
  httpEditBooking,
  httpDeleteBooking,
  httpLogin,
};
