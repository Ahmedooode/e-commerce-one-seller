// Inngest needs this endpoint to receive events and run background functions.
import { serve } from "inngest/next";

// Import your Inngest client + functions
import {
  createUserOrder,
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder,
  ],
});
