import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn appearance={{ theme: dark }} forceRedirectUrl={"/dashboard"} />
      </div>
    </div>
  );
}
