import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/navigation';
import ClientConfig from "@/components/client.config";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@heroui/react";
import { useUser } from "../../providers/UserProvider";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(ClientConfig.stripePublic);  // Replace with your public key

export default function Checkout ({ product }) {

  const { user, userData, authModal, message, setMessage } = useUser()
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if(!user) return authModal.onOpen()
    setMessage({ type: "checkoutLoading", msg: "" })

    try {

      // Send a request to your backend to create the checkout session
      const response = await fetch(ClientConfig.subs_add, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plan_id: product.id,
            price_id: product.stripeId, 
            user_id: userData?.uid, 
          }),
      });

      const session = await response.json();
      console.log("session:", session)

      // Redirect the user to the Stripe Checkout page
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Stripe Checkout error:', error);
        setMessage({})
      }

    } catch(error){
      console.log(error)
      setMessage({})
    }
  };

  return (
      <Card 
      className="w-full h-full text-theme"
      onPress={handleCheckout}
      isDisabled={message.type == "checkoutLoading"}
      >
        <CardHeader className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{product.name}</p>
            <p className="text-small text-default-500">{product.description}</p>
            <p>$ {product.price} / month</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{product.hints} monthly hints</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
          className={"px-4 py-2 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"}
          onPress={handleCheckout}
          >
            {message.type == "checkoutLoading" ? "Processing..." : "Subscribe Now"}
          </Button>
        </CardFooter>
      </Card>
  );
};

