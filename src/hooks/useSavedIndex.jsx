import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentIndex } from "../redux/slices/nextPageSlice";

const useSavedIndex = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.nextPage.currentIndex);
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    const savedIndex = localStorage.getItem("currentIndex");
    if (savedIndex) {
      const newIndex = Number(savedIndex);
      dispatch(updateCurrentIndex(newIndex));
      setIndex(newIndex);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("currentIndex", index);
  }, [index]);

  return index;
};

export default useSavedIndex;
