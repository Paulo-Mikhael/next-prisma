"use client";

import { IconButton } from "../IconButton";
import { Spinner } from "../Spinner";
import { ThumbsUp } from "../ThumbsUp";
import { useFormStatus } from "react-dom";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={pending === true}>
      {pending === true ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  );
};
