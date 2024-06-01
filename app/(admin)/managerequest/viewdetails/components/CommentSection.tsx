import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CommentSection() {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 border">
          <img alt="@shadcn" src="/placeholder.svg" />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid gap-2">
          <Textarea className="resize-none" placeholder="Leave a suggestion for the user..." />
          <div className="flex justify-end gap-2">
            {/* add functionality, i dont know how to connect or where to connect this haha */}
            <Button variant="outline">Reject</Button>
            <Button>Endorse</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
