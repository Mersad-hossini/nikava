"use client";
import React from "react";
import ProfileForm from "@/components/shared/ProfileForm";

function AdminProfile() {
  return (
    <ProfileForm title="ویرایش اطلاعات ادمین" defaultImage="/images/reza.jpg" />
  );
}

export default AdminProfile;