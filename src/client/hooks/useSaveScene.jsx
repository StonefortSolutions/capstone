import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveLocalScene } from "../store/scene";

function useSaveSceneAtInterval(time) {
  const [isSaving, setIsSaving] = useState(false);
  const scene = useSelector((state) => state.scene);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSaving(true);
      if (scene.length > 0) {
        dispatch(saveLocalScene(scene));
      }
      setIsSaving(false);
    }, time);
    return () => clearInterval(interval);
  }, [scene]);

  return { isSaving };
}

export { useSaveSceneAtInterval };
