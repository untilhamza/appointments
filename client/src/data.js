import { v4 as uuidv4 } from "uuid";

//the slots data is also for a given data => today!!!
const SLOTS = [
  {
    time: "12:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "01:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "01:50",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "02:30",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "03:10",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "03:50",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "04:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "05:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "05:50",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "06:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "07:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "07:50",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "08:30",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "09:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "09:50",
    isBooked: false,
    id: uuidv4(),
  },

  {
    time: "10:30",
    isBooked: false,
    id: uuidv4(),
  },
];

//they should be bookings for a given date => today!
//we can call on booking for any given day.
const BOOKINGS = [
  {
    time: "12:30",
    date: new Date(Date.now()).toDateString(),
    status: "completed",
    name: "Bill Gates",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
  {
    time: "02:30",
    date: new Date(Date.now()).toDateString(),
    status: "pending",
    name: "Elon Musk",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
  {
    time: "10:30",
    date: new Date(Date.now()).toDateString(),
    status: "cancelled",
    name: "Isaac Newton",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
];

export { SLOTS, BOOKINGS };
