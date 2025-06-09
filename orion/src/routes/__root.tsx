import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <>
      <hr />
      <Outlet />
      <Toaster position="top-right" richColors />
      <TanStackRouterDevtools />
    </>
  ),
});
