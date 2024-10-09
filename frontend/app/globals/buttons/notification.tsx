import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { User } from "@/types/user";

interface NotificationButtonProps {
    user?: User;
};

const NotificationButton: React.FC<NotificationButtonProps> = ({ user }) => {
    return (
        <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
        </Button>
    );
};

export default NotificationButton;
