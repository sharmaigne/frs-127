"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ReservePopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>RESERVE</Button>
      </DialogTrigger>

      <DialogContent className="min-w-[600px] w-60vw]">
        
      </DialogContent>
    </Dialog>
  );
};

export default ReservePopup;