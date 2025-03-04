"use client";


import { useState } from "react";
import { 
    Input,
    Button, 
    Textarea,
    Switch, 
    Card, 
    CardBody, 
    CardHeader, 
} from "@heroui/react";


export default function ProfileSection() {
  const [email, setEmail] = useState("user@example.com");
  const [bio, setBio] = useState("This is my bio...");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleUpdateProfile = () => alert("Profile updated!");
  const handleUpdatePassword = () => alert("Password updated!");
  const handleDeleteProfile = () => confirm("Are you sure?") && alert("Profile deleted!");

  return (
    <div className="bg-theme text-theme rounded-lg w-full mx-auto">
        <Card>
            <CardHeader>
                <p>Profile</p>
            </CardHeader>
            <CardBody className="bg-theme text-theme space-y-4">
                {/* Update Email */}
                <div>
                <label className="block text-sm font-medium">Email</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>

                {/* Update Bio */}
                <div>
                <label className="block text-sm font-medium">Bio</label>
                    <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>

                {/* Notifications Toggle */}
                <div className="flex items-center justify-between">
                <span className="text-sm">Enable Notifications</span>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>

                {/* Update Password */}
                <div>
                <label className="block text-sm font-medium">New Password</label>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                <Button className="mt-2 w-full" onClick={handleUpdatePassword}>
                    Update Password
                </Button>
                </div>

                {/* Delete Profile */}
                <Button variant="destructive" className="w-full" onClick={handleDeleteProfile}>
                    Delete Profile
                </Button>

                {/* Save Changes */}
                <Button className="w-full" onClick={handleUpdateProfile}>
                    Save Changes
                </Button>
            </CardBody>
        </Card>
    </div>
  )
}