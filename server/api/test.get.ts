import { sendError } from "h3";

export default defineEventHandler((event) => {
  try {
    const headers = getHeaders(event);
    // throw new Error("Omg Error");

    return { headers };
  } catch (error: any) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: error.message })
    );
  }
});
