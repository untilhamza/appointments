import { useState, useEffect, useCallback } from "react";
import { httpGetSlots } from "./request";

const useSlots = () => {
  const [isSlotLoading, setIsSlotLoading] = useState(false);

  const [slotDate, setSlotDate] = useState("");

  const [slots, setSlots] = useState([]);

  const getSlots = useCallback(async () => {
    setIsSlotLoading(true);
    const fetchedSlots = httpGetSlots(slotDate);
    setSlots(fetchedSlots);
    setIsSlotLoading(false);
  }, []);

  useEffect(() => {
    getSlots();
  }, [getSlots, slotDate]);

  return { setSlotDate, slots, isSlotLoading };
};

export default useSlots;
