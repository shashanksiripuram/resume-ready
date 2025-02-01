import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

type MockUser = {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
};

export default async function Users() {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log({ authObj });
  console.log({ userObj });
  // https://66974b0d02f3150fb66d25c5.mockapi.io/users
  const res = await fetch("https://679e58cf946b0e23c0633355.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://679e58cf946b0e23c0633355.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    console.log(newUser);
    revalidatePath("/mock-users");
  }

  return (
    <div className="p-4">
        <div>
        <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {users.map((user : MockUser) => (
        <Card key={user.id} className="p-4 shadow-md hover:shadow-lg transition">
          <CardHeader className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              {/* <AvatarFallback>{user.name[0]}</AvatarFallback> */}
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">
                Joined {format(new Date(user.createdAt), "MMM dd, yyyy")}
              </p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
    </div>
  );
}