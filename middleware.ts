import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  debug: false
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
