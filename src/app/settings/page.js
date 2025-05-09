"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const themeColors = [
    { name: "Default", value: "default", class: "bg-[hsl(var(--primary))] text-white" },
    { name: "Red", value: "red", class: "bg-red-600 text-white" },
    { name: "Rose", value: "rose", class: "bg-rose-500 text-white" },
    { name: "Orange", value: "orange", class: "bg-orange-400 text-black" },
    { name: "Green", value: "green", class: "bg-green-600 text-white" },
    { name: "Blue", value: "blue", class: "bg-blue-600 text-white" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-300 text-black" },
    { name: "Violet", value: "violet", class: "bg-violet-600 text-white" },
];

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [selectedColor, setSelectedColor] = useState("default");

    useEffect(() => {
        // Get the stored color from localStorage on client-side only
        const storedColor = localStorage.getItem("theme-color");
        if (storedColor) {
            setSelectedColor(storedColor);
            document.documentElement.setAttribute("data-theme-color", storedColor);
            document.documentElement.classList.remove(...themeColors.map(t => t.value));
            document.documentElement.classList.add(storedColor);
        }
    }, []);

    const handleThemeChange = (value) => {
        setTheme(value);
        toast.success("Theme updated successfully");
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        // Update localStorage only on client-side
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme-color", color);
        }
        // Update CSS variables
        document.documentElement.setAttribute("data-theme-color", color);
        // Apply color-specific classes
        document.documentElement.classList.remove(...themeColors.map(t => t.value));
        document.documentElement.classList.add(color);
        toast.success("Theme color updated successfully");
    };

    const handleNotificationChange = (checked) => {
        setNotifications(checked);
        toast.success(checked ? "Notifications enabled" : "Notifications disabled");
    };

    const handleEmailUpdatesChange = (checked) => {
        setEmailUpdates(checked);
        toast.success(checked ? "Email updates enabled" : "Email updates disabled");
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>Customize how the application looks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="theme">Theme Mode</Label>
                            <Select value={theme} onValueChange={handleThemeChange}>
                                <SelectTrigger id="theme">
                                    <SelectValue placeholder="Select theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Theme Color</Label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-2">
                                {themeColors.map((color) => (
                                    <button
                                        key={color.value}
                                        onClick={() => handleColorChange(color.value)}
                                        className={cn(
                                            "h-10 w-full rounded-md flex items-center justify-center font-medium border-2 border-transparent transition-all duration-200 ease-in-out",
                                            selectedColor === color.value && "border-primary ring-2 ring-primary ring-offset-2",
                                            color.class
                                        )}
                                        aria-label={`Select ${color.name} theme`}
                                    >
                                        {selectedColor === color.value && (
                                            <span className="mr-2">✓</span>
                                        )}
                                        <span>{color.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage your notification preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Push Notifications</Label>
                                <p className="text-sm text-muted-foreground">
                                    Receive notifications about your leads and updates
                                </p>
                            </div>
                            <Switch
                                checked={notifications}
                                onCheckedChange={handleNotificationChange}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Email Updates</Label>
                                <p className="text-sm text-muted-foreground">
                                    Receive email notifications about important updates
                                </p>
                            </div>
                            <Switch
                                checked={emailUpdates}
                                onCheckedChange={handleEmailUpdatesChange}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Manage your account settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Profile settings will be available soon.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 