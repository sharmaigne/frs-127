import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

const CommentSection = () => {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 border">
          <img alt="@shadcn" src="/images/placeholder.png" />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid gap-2">
          <Textarea
            className="resize-none"
            placeholder="Leave a suggestion for the user..."
          />
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
