import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id="app-root">
      <Outlet />
    </div>
  );
}
