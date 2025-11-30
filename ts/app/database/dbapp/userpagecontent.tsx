// elements/dbapp/userpagecontent.tsx
// NO "use client" here, this is a Server Component

import { Button } from "@db/elements/ui/button";
import UsersTable from "@db/elements/users-table"; // This is the async Server Component
import { UserPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@db/elements/ui/dialog";
import UserForm from "@db/elements/forms/user-form"; // This must be a Client Component

export default function UsersPageContent() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 lg:p-12 space-y-10">

      {/* Header + Add User Button (Client Components wrapped inside Dialog) */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Users</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-medium shadow-lg transition-all hover:shadow-xl">
              <UserPlus className="size-5" />
              Add User
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-slate-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">Add New User</DialogTitle>
              <DialogDescription className="text-slate-400">
                Fill in the details to create a new user.
              </DialogDescription>
            </DialogHeader>
            {/* UserForm is a Client Component */}
            <UserForm /> 
          </DialogContent>
        </Dialog>
      </div>

      {/* Table Container */}
      <div className="rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
        <div className="p-[1.5px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 rounded-2xl">
          <div className="bg-slate-950/95 rounded-2xl backdrop-blur-xl">

            <div className="p-6 md:p-8">

              <div className="text-white [&_*]:text-white [&_th]:font-semibold [&_th]:text-white [&_td]:text-white [&_button]:text-white [&_svg]:text-white [&_a]:text-white">
                {/* UsersTable is the async Server Component (OK here) */}
                
                <UsersTable />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
