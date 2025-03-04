import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@heroui/react";
import { useUser } from "../../providers/UserProvider";

export default function Profile() {

  const { user, userData, handleLogout } = useUser()

  return (
    <div className="flex items-center gap-4">
      <Dropdown 
      placement="bottom-end"
      className="bg-theme"
      >
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={user.photoURL}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">{userData?.email}</p>
          </DropdownItem>
          <DropdownItem onPress={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
