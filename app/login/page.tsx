import { AuthForm } from "@/components/auth-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Manager</h1>
          <p className="text-gray-600">Manage your projects and collaborate with your team</p>
        </div>
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
