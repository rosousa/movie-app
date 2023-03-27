import Input from "@/components/Input";
import Image from "next/image";
import React from "react";

const Auth = () => {
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full">
        <nav className="px-12 py-5">
          <Image 
            src="/images/movie-logo.webp" 
            alt="logo"
            width={170}
            height={170}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-med rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
            <Input
                id="name"
                value={username}
                label="Username"
                onChange={(event: React.FormEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)}
              />
              <Input
                id="email"
                value={email}
                label="Email"
                type="email"
                onChange={(event: React.FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
              />
              <Input
                id="password"
                value={password}
                label="Password"
                type="password"
                onChange={(event: React.FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
              />
            </div>
            <button className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              First time using Movie App?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;