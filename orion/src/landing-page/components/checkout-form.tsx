import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Landmark, Truck } from "lucide-react";

export function CheckoutForm() {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Truck className="h-5 w-5" />
            <h2 className="text-xl font-bold">Shipping Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" className="mt-1" required />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="state">State / Province</Label>
              <Input id="state" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="zip">ZIP / Postal Code</Label>
              <Input id="zip" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country" className="mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ph">Philippines</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Landmark className="h-5 w-5" />
            <h2 className="text-xl font-bold">Billing Information</h2>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="sameAsShipping" />
              <label
                htmlFor="sameAsShipping"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="billingFirstName">First Name</Label>
              <Input id="billingFirstName" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="billingLastName">Last Name</Label>
              <Input id="billingLastName" className="mt-1" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="billingAddress">Street Address</Label>
              <Input id="billingAddress" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="billingCity">City</Label>
              <Input id="billingCity" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="billingState">State / Province</Label>
              <Input id="billingState" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="billingZip">ZIP / Postal Code</Label>
              <Input id="billingZip" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="billingCountry">Country</Label>
              <Select>
                <SelectTrigger id="billingCountry" className="mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <CreditCard className="h-5 w-5" />
            <h2 className="text-xl font-bold">Payment Method</h2>
          </div>

          <Tabs defaultValue="card">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="card">Credit Card</TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
            </TabsList>
            <TabsContent value="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" className="mt-1" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="expDate">Expiration Date</Label>
                  <Input
                    id="expDate"
                    placeholder="MM/YY"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" className="mt-1" required />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="paypal">
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  You will be redirected to PayPal to complete your purchase
                  securely.
                </p>
                <img
                  src="/placeholder.svg?height=60&width=200"
                  alt="PayPal"
                  className="h-12 mx-auto"
                />
              </div>
            </TabsContent>
            <TabsContent value="bank">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Please use the following information to make a bank transfer.
                  Your order will be processed once the payment is received.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">Bank Name:</div>
                    <div>International Bank</div>
                    <div className="text-gray-500">Account Name:</div>
                    <div>ORION Lighting Inc.</div>
                    <div className="text-gray-500">Account Number:</div>
                    <div>1234567890</div>
                    <div className="text-gray-500">Routing Number:</div>
                    <div>987654321</div>
                    <div className="text-gray-500">SWIFT Code:</div>
                    <div>INTLBNK123</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
