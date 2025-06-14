"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { PersonalInfo } from "./personal-info";
import { AddressBook } from "./address-book";
import { OrderHistory } from "./order-history";
import { SecuritySettings } from "./security-settings";
import { User, MapPin, Package, Shield, ChevronLeft } from "lucide-react";

export function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({
        to: "/auth/signin",
        search: { redirect: "/profile" },
      });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Will redirect to sign in
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">Profile</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">My Account</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.firstName} {user?.lastName}
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                  <User className="h-10 w-10 text-gray-500" />
                </div>
                <CardTitle className="text-lg">
                  {user?.firstName} {user?.lastName}
                </CardTitle>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "personal" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("personal")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Personal Info
                  </Button>
                  <Button
                    variant={activeTab === "addresses" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("addresses")}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Address Book
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Order History
                  </Button>
                  <Button
                    variant={activeTab === "security" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="personal">
                <PersonalInfo user={user} />
              </TabsContent>
              <TabsContent value="addresses">
                <AddressBook />
              </TabsContent>
              <TabsContent value="orders">
                <OrderHistory />
              </TabsContent>
              <TabsContent value="security">
                <SecuritySettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
