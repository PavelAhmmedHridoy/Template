"use server";

import { db } from "../db/drizzle.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";

export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);
    return allUsers;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createUser(user) {
  try {
    await db.insert(users).values(user);
  } catch (error) {
    console.error(error);
    return { error: "Failed to create user" };
  }
}

export async function updateUser(user) {
  try {
    await db.update(users).set(user).where(eq(users.id, user.id));
  } catch (error) {
    console.error(error);
    return { error: "Failed to update user" };
  }
}

export async function deleteUser(id) {
  try {
    await db.delete(users).where(eq(users.id, id));
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete user" };
  }
}
