import { Outlet } from "@remix-run/react";
import React from "react";
import AdminHeader from "../../components/AdminHeader";

export default function AdminOptions() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}
