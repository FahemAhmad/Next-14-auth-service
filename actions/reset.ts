"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) return { error: "Email does not exist" };

  // send email
  const passResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(passResetToken.email, passResetToken.token);

  return { success: "Email Sent" };
};
