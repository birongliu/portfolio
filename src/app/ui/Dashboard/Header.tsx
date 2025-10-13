'use client'
import { SignedOut, SignOutButton, useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

export default function Header() {
  return <SignOutButton />;
}
