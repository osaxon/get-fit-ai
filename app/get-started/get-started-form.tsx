"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserReqModel, userUpdateSchema } from "@/db/schema";
import { updateUser } from "@/features/auth/updateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function GetStartedForm({ user }: { user: UserReqModel }) {
  const form = useForm<z.infer<typeof userUpdateSchema>>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      id: user.id,
      email: user.email,
      name: user.name,
      height: user.height ?? 0,
      weight: user.weight ?? 0,
      fitnessLevel: "beginner",
      authIdentifier: user.authIdentifier,
      isActive: user.isActive,
    },
  });
  async function onSubmit(values: z.infer<typeof userUpdateSchema>) {
    console.log(values);
    console.log("submitting update")
    await updateUser(values)
    toast("toast")
    console.log("finished")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="height"
                  min={100}
                  {...field}
                  onChange={event => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormDescription>Your height in cm.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="weight"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your weight in kg.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fitnessLevel"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your fitness level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="beginner">beginner</SelectItem>
                  <SelectItem value="intermediate">intermediate</SelectItem>
                  <SelectItem value="advanced">advanced</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
